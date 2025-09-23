---
# System prepended metadata

title: Openvoxels Load Faster

---

# Openvoxels Load Faster

**Budget**: 0.50 ETH

- **Files**: https://github.com/madjin/Cryptovoxels-snapshots/tree/master/glb-models
- **Code**: https://github.com/gkjohnson/three-mesh-bvh
- **World**: https://hyperfy.io/origincity

**Problem**: The Origin City world takes 10 minutes to load because it's recalculating the BVH each time you load and there's millions of triangles.

**Proposal**: Upgrade three-mesh-bvh version for 30-40% performance boost, and to run on web workers for up to 4x faster generation of BVH. Then implement range options and custom BVH glTF extension to preload a computed BVH.

The goal is to reduce initial load time for big worlds, such as Openvoxels snapshots from 2 minutes every time on load to as little as possible, which is theoretically a matter of seconds.

> Changelog: https://github.com/gkjohnson/three-mesh-bvh
> - https://x.com/garrettkjohnson/status/1828452607368823246 disabling mipmaps + plugin system
> - https://x.com/garrettkjohnson/status/1825452623513911628
> - Add range option to MeshBVH 7/17/24
> - Improved raycasting performancy by ~20% by avoiding use of the "arrayToBox" function internally. (4/10/24)
> - Added new "ParallelMeshBVHWorker" that parallelizes MeshBVH generation across multiple WebWorkers. Falls back to a single threaded approach if SharedArrayBuffer is not supported. (1/30/24)
> - Small performance improvements to bvhcast function (up to ~10%). (10/8/23)
> - Added support for draw range so the BVH now implicitly respects the start and end range specified in the geometry. (8/30/23)


![Screenshot_2024-04-11_21-31-20](https://hackmd.io/_uploads/SJ2Zkf8gA.jpg)
https://twitter.com/garrettkjohnson/status/1752260513088844176


0.75 is 15% faster from skipped array -> box conversion and BVH traversal now supports raycaster near / far fields
![image](https://hackmd.io/_uploads/SJ67RCcvC.png)
https://x.com/garrettkjohnson/status/1802671661965332886



> Thanks to the contribution, a new BVH can be constructed from a geometry subrange which can be used for BatchedMesh sub geometry!

![image](https://hackmd.io/_uploads/H1uQe1Dd0.png)



---

## Tooling Info


CLI BVH file generation + extension https://github.com/gkjohnson/three-mesh-bvh/issues/367
![image](https://hackmd.io/_uploads/SkvryfIl0.png)

---

On using gltf-transform + custom extension: https://github.com/gkjohnson/three-mesh-bvh/issues/337
![image](https://hackmd.io/_uploads/B11qJfLlC.png)

Gist that was linked: https://gist.github.com/bzztbomb/dbbdd69fb21bb77597d5bc07c59af8b7



```
# Print extended usage (including `bvh` command).
gltf-transform --help --plugin three-mesh-bvh

# Compute BVH.
gltf-transform bvh input.glb output.glb --split-strategy SAH --plugin three-mesh-bvh

# Compress.
gltf-transform meshopt output.glb output.glb --level medium --plugin three-mesh-bvh

gltf-transform reorder input.glb tmp.glb
gltf-transform quantize tmp.glb tmp.glb
gltf-transform bvh tmp.glb tmp.glb --plugin three-mesh-bvh
gltf-transform meshopt tmp.glb output.glb --plugin three-mesh-bvh --no-reorder
```

---


## Notes


Something new from September 2025
https://github.com/gkjohnson/three-mesh-bvh/pull/766

![image](https://hackmd.io/_uploads/SJgdI8Cilg.png)


https://github.com/gkjohnson/three-mesh-bvh has webgpu export now