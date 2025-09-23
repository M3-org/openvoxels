---
# System prepended metadata

title: Smooth Voxels CLI Tool

---

# Smooth Voxels CLI Tool


- Code: https://smoothvoxels.glitch.me/playground.js
  - https://cdn.jsdelivr.net/gh/SamuelVanEgmond/Smooth-Voxels@2.2.0/dist/smoothvoxels.js
- Demo: https://smoothvoxels.glitch.me/playground.html
- Docs: https://smoothvoxels.glitch.me/

Desired program:

`smoothvoxels (flags) input (.vox) output (.svox/.gltf)`

`smoothvoxels -c (optional: compress) 1.vox 1.svox`


---

## Read Vox

![image](https://hackmd.io/_uploads/HyqY15LA6.png)


Function lines 1604-1659

```javascript!
function reloadMagicaVoxel() {
  let modelString = editor.getValue().trim();
  let model;   
  try {        
    if (modelString.length > 0) {
      model = ModelReader.readFromString(modelString);
    }
  }
  catch (ex) {
    SVOX.logError(ex);
    return;
  }
  
  VoxToSvox.reloadMagicaVoxel(handleMagicaVoxelUpload.bind(this, modelString), model);
}

function handleMagicaVoxelUpload(modelString, result) {
  if (result.fileName)
    setCurrentName(result.fileName);
  if (result.error)
    alert(result.error)
  if (result.model) {
    if (modelString.length > 0) {
      result.model.prepareForWrite();
      
      // Keep the original model in tact (e.g. for comments indentation etc.)
      const voxelsIndex = modelString.lastIndexOf('voxels');
      modelString = modelString.slice(0, voxelsIndex).trim();
      
      // Replace the last occurence of [size = n [n] [n] with the new size from the .vox file
      let size = result.model.voxels.size;
      let sizeInModel = new RegExp( `(?<=model[.\\s]*)(size[ \\t]*=([ \\t]*\\d+){1,3})`, 'gmi');
      modelString = modelString.replace(sizeInModel, `size = ${size.x} ${size.y} ${size.z}`);
      
      // Find the last material, which, if it has colors in it needs to be added
      let newMaterial;
      result.model.materials.forEach(function(material) {
        newMaterial = material;
      }, this);
      if (newMaterial.settings.colors.length > 0) {
        let materialString = MaterialWriter.write(newMaterial);
        modelString += '\r\n\r\n' + materialString;
      }
      
      // Add the voxels
      modelString += '\r\n\r\nvoxels\r\n' + VoxelWriter.writeVoxels(result.model,1, 1);
    }
    else {
      modelString = ModelWriter.writeToString(result.model, false);
    }
    editor.setValue(modelString, -1);
    editor.gotoLine(1);
    if (!autoRender)
      renderModel();
  }
}

```

![image](https://hackmd.io/_uploads/Bk4iyq8CT.png)


## Compress / Decompress

Lines 2113-2154

```javascript!
function onCompressVoxels() {
  let modelString = editor.getValue().trim() + '\r\n';

  // Replace the voxels with properly formatted / decompressed voxels
  let model = ModelReader.readFromString(modelString);

  // Replace the last occurence of [size = n [n] [n] with the new size from the .vox file
  // (The size can change when the model is saved with empty sides in its original bounds)
  let size = model.voxels.size;
  let sizeInModel = new RegExp( `(?<=model[.\\s]*)(size[ \\t]*=([ \\t]*\\d+){1,3})`, 'gmi');
  modelString = modelString.replace(sizeInModel, `size = ${size.x} ${size.y} ${size.z}`);

  // Replace the voxels
  const voxelsIndex = modelString.lastIndexOf('voxels');
  modelString = modelString.slice(0, voxelsIndex).trim();
  modelString += '\r\n\r\nvoxels\r\n' + VoxelWriter.writeVoxelsRLE(model, 100)

  editor.setValue(modelString, -1);
}


function onDecompressVoxels() {
  let modelString = editor.getValue().trim() + '\r\n';

  // Replace the voxels with properly formatted / decompressed voxels
  let model = ModelReader.readFromString(modelString);

  // Replace the last occurence of [size = n [n] [n] with the new size from the .vox file
  // (The size can change when the model is saved with empty sides in its original bounds)
  let size = model.voxels.size;
  let sizeInModel = new RegExp( `(?<=model[.\\s]*)(size[ \\t]*=([ \\t]*\\d+){1,3})`, 'gmi');
  modelString = modelString.replace(sizeInModel, `size = ${size.x} ${size.y} ${size.z}`);

  // Replace the voxels
  const voxelsIndex = modelString.lastIndexOf('voxels');
  modelString = modelString.slice(0, voxelsIndex).trim();
  modelString += '\r\n\r\nvoxels\r\n' + VoxelWriter.writeVoxels(model, 1, 1);

  editor.setValue(modelString, -1);
}
```


## Save SVOX / A-Frame

Lines 2167-2192

```javascript!
function saveTextAsShown() {
  saveTextFile(editor.getValue().replace(/(\r\n|\n)/gm, `\r\n`), getCurrentName() + '.svox');
}

function saveUncompressed() {
  let model = ModelReader.readFromString(editor.getValue());
  saveTextFile(ModelWriter.writeToString(model, false), getCurrentName() + '.svox');
}

function saveCompressed() {
  let model = ModelReader.readFromString(editor.getValue());
  saveTextFile(ModelWriter.writeToString(model, true), getCurrentName() + '.min.svox');
}

function saveAFrameComponent(fullScene, compressed, digits) {
  try {
    let model = ModelReader.readFromString(editor.getValue());
    let svoxmesh = SvoxMeshGenerator.generate(model);
    saveTextFile(SvoxToAFrameConverter.generate(svoxmesh, fullScene, compressed, digits), getCurrentName() + (fullScene ? '.html' :  '.js'));
  }
  catch (ex) {
    SVOX.logError(ex);
  }
}
```


## Save glTF-binary

Lines 2194-2233

```javascript!
function saveGltf(binary) {
  try {
    let model = document.getElementById('model');
    if (model) {
      let exporter = new GLTFExporter();
      let exportoptions = {
        binary:binary,
        onlyVisible:true,
        trs:true,
        embedImages:true,
        forcePowerOfTwoTextures:false,
        truncateDrawRange:false,
        forceIndices:true
      };

      // Parse the input and generate the glTF output
      let mesh = model.getObject3D('mesh');
      exporter.parse( mesh, function ( gltf ) {
        if (binary)
          saveGlbFile( gltf, getCurrentName() + '.glb');
        else
          saveTextFile( JSON.stringify(gltf), getCurrentName() + '.gltf');
      }, exportoptions );
    }
    else {
      alert('No model to export');
    }
  }
  catch (error) {
    alert ('The model could not be exported.\r\n\r\nSee the browser console and the documentation on material types for more information.');
  }
}

function saveGlbFile(body, name) {
  const a = document.createElement('a');
  const type = name.split(".").pop();
  a.href = URL.createObjectURL(new Blob([body], { type:`gltf-binary/${type}` }) );
  a.download =  name;
  a.click();
}

function saveTextFile(text, name) {
  const a = document.createElement('a');
  const type = name.split(".").pop();
  a.href = URL.createObjectURL( new Blob([text], { type:`text/${type === "txt" ? "plain" : type}` }) );
  a.download = name;
  a.click();
}

```