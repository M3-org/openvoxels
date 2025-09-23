**⭐** [https://github.com/m3-org/openvoxels](https://github.com/m3-org/openvoxels) - Datasets and links ⭐

Today we’re releasing a new dataset, a snapshot taken 11/1/22 of all 3181 Voxel wearables in multiple formats (vox, svox, glb) along with the token metadata. These 32x32x32 .vox wearables people minted when the feature was released in Cryptovoxels in 2019 are some of the earliest 3D NFTs.

**Recap**

Going back in time: Cryptovoxels (now [Voxels](https://www.voxels.com/)) experienced a population boom in 2019 with artists and collectors moving into Origin City. 2019 was the year Ben Nolan had managed to go full time on his passion project, shipping sophisticated features solo like wearables at a faster clip before other projects like Sandbox and DCL had even launched their public beta.

The interface to configure is pretty basic: select a wearable and attachment point for your .vox wearable NFT and offset it into the position you want on the default avatar.

![The initial release UI for configuring your wearables onto your avatar](https://storage.googleapis.com/papyrus_images/f3a44b86311208576ec2a15a3d111928fb89f977a7226231dc75d828c70d65c5.png)

The initial release UI for configuring your wearables onto your avatar

Upon launch Cryptovoxels allowed anybody to submit a wearable to mint, the only requirements were that they had to be 32x32x32 in size. The minting was done manually by somebody in batches, but it worked, and soon everyone was rocking and sharing wearables. Gift giving became a thing. Even till this day I’m still rocking the same wearables I received as gifts by OG voxelians like josie and spidymonkey.

![I made this collage soon after wearables were released in 2019, source: https://hackmd.io/@XR/cv3](https://storage.googleapis.com/papyrus_images/63cd8c91a23736ee779a741bd7529f4e4a7696553a32eefbfb9145baed29d4fc.png)

I made this collage soon after wearables were released in 2019, source: https://hackmd.io/@XR/cv3

After making the dataset I began to ponder about what things could we build with Voxels wearables if given free creative reign. What if they were used in games? Or combined into giant sculptures? How can we distribute value along the chain of derivatives?

![Visualizing the entire dataset as a single scene - wandering through here is pretty fun](https://storage.googleapis.com/papyrus_images/c2661dc50b61cfb9febb205023f2f153fea0c26acb3fdb7003fbaa9e384d9946.jpg)

Visualizing the entire dataset as a single scene - wandering through here is pretty fun

I’ve created a world in Hyperfy with all the wearables scattered about where we can ponder and share ideas together: [https://hyperfy.io/wearables](https://hyperfy.io/wearables)

* * *

Smooth Voxels
-------------

Site: [https://svox.glitch.me](https://svox.glitch.me) Smooth Voxels is a project by Samuel van Egmond that allows you to turn voxel models into low poly style or smooth organic looking models, even mixing styles in one model. I bet I know what you’re thinking, what do wearables look like if they were all smooth? I want to know also, but this is really just the tip of the iceberg.

![Smooth Voxels uses vertex averaging to produce a smooth appearance](https://storage.googleapis.com/papyrus_images/b62adb79657b8b587da7f4677b326ce93b6f4419ac8ab1f38146994101a3725b.gif)

Smooth Voxels uses vertex averaging to produce a smooth appearance

This is how the svox file looks like next to a rendered webxr app preview. You can experiment in the playground here: [https://svox.glitch.me/playground.html](https://svox.glitch.me/playground.html)

![The fields next to material, in particular "deform = 3", is what makes the vox model smooth](https://storage.googleapis.com/papyrus_images/6d1f00715ee1390da4a399e6d3d7bc0f13a9dd4a4f232c3329274a66f23a617c.png)

The fields next to material, in particular "deform = 3", is what makes the vox model smooth

Some of the benefits of smooth voxels:

*   Easy for anyone to 3D model using editors like magicavoxel
    
*   Very lightweight, useful for WebXR
    
*   Materials allow for physically based rendering
    

OG WebXR hacker and M3 member [@gfodor](https://twitter.com/gfodor) optimized the [Smooth Voxels library](https://github.com/jel-app/smoothvoxels) for a 5x speed up and created a [CLI tool](https://github.com/jel-app/svox-tools) that allowed for us to easily and quickly convert the entire .vox wearables collection into .svox and glTF 2.0 binary files (.glb). Lately he’s been experimenting with adding a shell around the models using an old school trick that gives the converted models a cel-shaded look. The method is documented in the [svox documentation](https://svox.glitch.me/#Shell). Be aware though, **shells double your face count and model size**.

![Shells are formed by repeating and pushing out faces with a different material](https://storage.googleapis.com/papyrus_images/d1780ee2dfc04eba372627d878b473f6b0ca25221bed72ef663062e4ac23b1dd.jpg)

Shells are formed by repeating and pushing out faces with a different material

![Some of the examples provided in the svox demo found on https://svox.glitch.me/#Shell](https://storage.googleapis.com/papyrus_images/221655cbe064d6f48adffd0da3c2278be7f09232f958a8b62e351ec39aaa6842.png)

Some of the examples provided in the svox demo found on https://svox.glitch.me/#Shell

If interested in following the discussion on making wearables more awesome with Smooth voxels check out the github thread here in the [M3 openvoxels repo](https://github.com/m3-org/openvoxels).

[

Make wearables way more awesome · Issue #10 · M3-org/openvoxels
---------------------------------------------------------------

Metadata is currently centralized { "name": "GoldenSword", "image": "https://wearables.sfo2.digitaloceanspaces.com/1d83521d-e9c2-4d9f-bc69-862ac82b588a-goldensword.gif", "description": "One of the first swords minted for cryptovoxels!", ...

https://github.com

![](https://storage.googleapis.com/papyrus_images/72c7e456bdf6fec83211112802854631cdb3697de25b52e80ca016fcbd9f55c3.png)

](https://github.com/M3-org/openvoxels/issues/10)

* * *

AI Experiments
--------------

The 3100+ voxel models in this dataset have small file sizes and decent metadata from the NFTs will provide a rich dataset to train AI with.

One M3 hacker (m00n) has been working on Text → Vox using stable dream diffusion since before this dataset. Soon we’ll be able to output .vox along with glb with different styles and levels of detail.

With data on who made what within this collection it would be a great opportunity to experiment with methods to create a generator that can redistribute value back into the creators that trained. Another idea would be to form a DAO with every wearables creator having part ownership.

* * *

### Optimizing Wearables

**Software used:**

CLI tools for converting to / from [Smooth Voxels](https://github.com/jel-app/smoothvoxels) files:

[

GitHub - webspace-sdk/svox-tools: Command line tools for Smooth Voxels
----------------------------------------------------------------------

Command line tools for Smooth Voxels. Contribute to webspace-sdk/svox-tools development by creating an account on GitHub.

https://github.com

![](https://storage.googleapis.com/papyrus_images/5c530f82d713de24630e433aae0fbf8745bf05e8d06400611190b8c1803c8f38.png)

](https://github.com/jel-app/svox-tools)

It wouldn’t be a dataset without pretty data to look at, so here’s a comparison of different compression methods applied to the voxel wearables in different formats:

![I tested wearable #2 for this. The gzipped svox was smallest at 383 bytes and the Draco compressed glb was only 8kb.](https://storage.googleapis.com/papyrus_images/0aaaff6f1c3a4a8f7cb44cf8014dcce7761e289b045db89ae325adb5be4655d9.png)

I tested wearable #2 for this. The gzipped svox was smallest at 383 bytes and the Draco compressed glb was only 8kb.

There was even more room for compression that you can read about in the svox docs

[https://www.smoothdev.nl/smoothvoxels/#VoxelMatrixCompression](https://www.smoothdev.nl/smoothvoxels/#VoxelMatrixCompression)

I wonder how these vox model formats compare with Bnolans idea for compression?

[![User Avatar](https://storage.googleapis.com/papyrus_images/20d8929f46644563bbf5a364e2e06d75193430baf1f0393ff697014af0eda9fd.jpg)](https://twitter.com/cryptovoxels)

[Cryptovoxels](https://twitter.com/cryptovoxels)

[@cryptovoxels](https://twitter.com/cryptovoxels)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/cryptovoxels/status/1580641383815053312)

Hey fam, vox models compress like shit because the data format is x,y,z,c (so you cant deflate or RLE encode). We're proposing the .voxels format which is identical to existing .vox format but uses deltas. Eg dx,dy,dz,c, so you can .gz.  
  
Who's with me!? (It's Nicks idea actually)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 24](https://twitter.com/cryptovoxels/status/1580641383815053312)[

3:27 PM • Oct 13, 2022

](https://twitter.com/cryptovoxels/status/1580641383815053312)

[

DX,DY,DZ,I format · Issue #56 · ephtracy/voxel-model
----------------------------------------------------

Heya, If we use x,y,z,i,... format, you can't RLE/Deflate/Brotli the output. eg a solid run of yellow (color 8): 1,2,3,8,2,2,3,8,3,2,3,8,4,2,3,8,5,2,3,8,.... But if we use dX,dY,dZ,i format it works: 1,2,3,8,1,0,0,8,1,0,0,8,1,0,0,8,1,0,0...

https://github.com

![](https://storage.googleapis.com/papyrus_images/9f664877ac3203e6254b526c6b181a6f4f19ab320d350e0c2c08a251cbb141f8.png)

](https://github.com/ephtracy/voxel-model/issues/56)

* * *

Closing Thoughts
----------------

I think Smooth Voxels is a really underrated project, there’s some really [cool examples](https://glitch.com/~svox-examples) that are remixable on glitch the author created. I’ve been curious about how to make these wearables more on-chain and archivable, especially after seeing how well some of the formats are able to be compressed.

Currently the metadata for Voxels wearables is centralized which I perceive as a risk - these are valuable artifacts that I think will be valuable to future historians studying metaverse culture. Wearables was a huge achievement that Bnolan accomplished, shipping years before other projects was a great way to crown the year. NFTs were not popular in 2019 and it was right before covid lockdowns happened so this dataset feels like a snapshot of an online community of pioneer creators in it for the right reasons.

> For a longer summary of June → November 2019 check out the dev log notes
> 
> [
> 
> Cryptovoxels Pt 3 - HackMD
> --------------------------
> 
> Updates from June to November 2019 include crypto art, wearables, third-party clients, soundtracks, contests, code optimization, mobile client, virtual panels, and more.
> 
> https://hackmd.io
> 
> 
> 
> ](https://hackmd.io/@XR/cv3)