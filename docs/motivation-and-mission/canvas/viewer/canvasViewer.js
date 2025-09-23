// Simple Canvas Viewer Fallback
(function() {
  'use strict';

  class SimpleCanvasViewer extends HTMLElement {
    constructor() {
      super();
      this.canvas = null;
      this.container = null;
      this.canvasBasePath = '';
      this.scale = 1;
      this.panX = 0;
      this.panY = 0;
      this.isDragging = false;
      this.dragStart = { x: 0, y: 0 };
    }

    connectedCallback() {
      this.style.display = 'block';
      this.style.width = '100%';
      this.style.height = '100%';
      this.style.overflow = 'hidden';
      this.style.position = 'relative';
      this.style.background = '#f8f9fa';

      this.container = document.createElement('div');
      this.container.style.cssText = `
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        cursor: grab;
        transform-origin: 0 0;
      `;

      this.appendChild(this.container);

      if (this.getAttribute('src')) {
        this.loadCanvas(this.getAttribute('src'));
      }

      this.setupPanZoom();
    }

    async loadCanvas(src) {
      try {
        const response = await fetch(src);
        const canvasData = await response.json();
        this.canvas = canvasData;
        // Store the base path for resolving relative file paths
        this.canvasBasePath = src.substring(0, src.lastIndexOf('/') + 1);
        this.render();
        this.dispatchEvent(new CustomEvent('canvasLoaded'));
      } catch (error) {
        console.error('Failed to load canvas:', error);
        this.dispatchEvent(new CustomEvent('canvasError', { detail: error }));
      }
    }

    render() {
      if (!this.canvas || !this.container) return;

      this.container.innerHTML = '';

      // Calculate bounds
      let minX = 0, maxX = 0, minY = 0, maxY = 0;
      this.canvas.nodes.forEach(node => {
        minX = Math.min(minX, node.x);
        maxX = Math.max(maxX, node.x + node.width);
        minY = Math.min(minY, node.y);
        maxY = Math.max(maxY, node.y + node.height);
      });

      const canvasWidth = maxX - minX + 200;
      const canvasHeight = maxY - minY + 200;

      this.container.style.width = canvasWidth + 'px';
      this.container.style.height = canvasHeight + 'px';

      // Render nodes
      this.canvas.nodes.forEach(node => {
        const nodeEl = this.createNodeElement(node);
        this.container.appendChild(nodeEl);
      });

      this.updateTransform();
    }

    createNodeElement(node) {
      const el = document.createElement('div');
      el.style.cssText = `
        position: absolute;
        left: ${node.x + 100}px;
        top: ${node.y + 100}px;
        width: ${node.width}px;
        height: ${node.height}px;
        border: 2px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        background: white;
      `;

      if (node.color) {
        const colors = {
          '1': '#ff6b6b', '2': '#4ecdc4', '3': '#45b7d1',
          '4': '#96ceb4', '5': '#feca57', '6': '#a55eea'
        };
        el.style.borderColor = colors[node.color] || '#ddd';
      }

      if (node.type === 'file' && node.file) {
        const img = document.createElement('img');
        // Handle both vault-relative paths and canvas-relative paths
        let imgSrc = node.file;
        if (imgSrc.includes('/')) {
          // If path contains folder (vault-relative), extract just the filename
          const filename = imgSrc.split('/').pop();
          imgSrc = this.canvasBasePath + filename;
        } else {
          // Direct filename, use canvas base path
          imgSrc = this.canvasBasePath + imgSrc;
        }
        img.src = imgSrc;
        img.style.cssText = `
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        `;
        img.alt = `Page ${node.id}`;
        el.appendChild(img);
      } else if (node.type === 'text' && node.text) {
        const textEl = document.createElement('div');
        textEl.style.cssText = `
          padding: 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px;
          line-height: 1.4;
          overflow: auto;
          height: 100%;
          box-sizing: border-box;
        `;
        textEl.textContent = node.text;
        el.appendChild(textEl);
      }

      return el;
    }

    setupPanZoom() {
      this.addEventListener('mousedown', (e) => {
        this.isDragging = true;
        this.style.cursor = 'grabbing';
        this.dragStart = { x: e.clientX - this.panX, y: e.clientY - this.panY };
      });

      this.addEventListener('mousemove', (e) => {
        if (!this.isDragging) return;
        e.preventDefault();
        this.panX = e.clientX - this.dragStart.x;
        this.panY = e.clientY - this.dragStart.y;
        this.updateTransform();
      });

      this.addEventListener('mouseup', () => {
        this.isDragging = false;
        this.style.cursor = 'grab';
      });

      this.addEventListener('mouseleave', () => {
        this.isDragging = false;
        this.style.cursor = 'grab';
      });

      this.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        this.scale *= delta;
        this.scale = Math.max(0.1, Math.min(3, this.scale));
        this.updateTransform();
      });
    }

    updateTransform() {
      if (this.container) {
        this.container.style.transform = `translate(${this.panX}px, ${this.panY}px) scale(${this.scale})`;
      }
    }
  }

  // Register the custom element
  if (!customElements.get('canvas-viewer')) {
    customElements.define('canvas-viewer', SimpleCanvasViewer);
  }
})();
