This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: docs/*/content.md
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
docs/
  archiving-metaverse-interop/
    content.md
  dataset-origin-city-archives/
    content.md
  dataset-voxel-wearables/
    content.md
  immortalizing-wearables/
    content.md
  manifest-destiny/
    content.md
  motivation-and-mission/
    content.md
  summer-2024/
    content.md
  the-wearables-museum/
    content.md
  wearables-wip-voxia/
    content.md
  why-voxels/
    content.md
```

# Files

## File: docs/archiving-metaverse-interop/content.md
```markdown
> tl;dr - leveraging interoperable open standards to preserve digital artifacts can also pave the way to align platforms, empower users, and help glue the metaverse together

The Metaverse, as a concept, is largely built on the idea of multiple virtual worlds or spaces that are interconnected and interoperable. This often means that a user can move seamlessly between different virtual environments without needing to create a new avatar or re-enter their credentials every time they switch platforms.

However, achieving this level of interoperability is no easy feat. Different virtual worlds often use different file formats and protocols, making it difficult to share information and assets between them. Furthermore, as technology evolves, older file formats and platforms can become obsolete, making it increasingly difficult to access older virtual worlds and their associated content.

This is where archiving and preservation become important. By regularly preserving digital artifacts with open standards, we can ensure that the information and assets needed to create and maintain virtual worlds can be accessed and used for years to come. This not only helps to ensure the longevity of existing virtual worlds and their cultures, but also lays the foundation for future interoperability between different platforms.

> _It also as a side benefit provides a storytelling mechanism about how the metaverse was built with a catalogue of historical snapshots that we can pull from._

* * *

Digital Archives
----------------

The Internet Archive and the NFT community share a few key common interests:

*   Preservation of digital artifacts
    
*   Provenance of those digital artifacts (Wayback Machine)
    
*   Ability for anyone to write into the public record
    

Standard formats (such as plain text, JPEG, mp4, etc) are so ubiquitous that they will probably be readable for centuries to come. The US Library of Congress also recommends XML, **JSON**, or SQLite as archival formats for datasets.

The average NFT on the blockchain is usually composed of **JSON** metadata that’s referencing a file, all made trackable with a token. Creators and collectors alike want strong guarantees for their work to stand the test of time, so there’s strong incentives for using interoperable open file formats for their works.

> _One of my long term goals for Openvoxels is to help the IA navigate how to archive NFTs and the metaverse, for now we are also backing up our datasets to archive.org_

Now lets dive more into how archiving leads us to metaverse interop. We’re using [Voxels](https://voxels.com/) in these examples, but know that this can apply to many other virtual worlds / platforms.

New parcel snapshot tool by Hyperfy.io
--------------------------------------

We’ve hacked together many ways to export 3D data out of Voxels over the past 4 years. Today we’re ready to share a WIP pipeline using [Hyperfy.io](https://hyperfy.io/) that I believe will strike the right balance in terms of features and sustainable value loops.

As you can see below, our current exporter doesn’t include many features like media files and vox models in the glTF export. For now we want to have the cleanest base mesh with support for custom tiles that people upload. In the future it would be awesome to export with the lightmaps as well.

![How Parcel 2 looks in Voxels next to the glTF export created by our Hyperfy.io app](https://storage.googleapis.com/papyrus_images/0c796cdda12315047edbffc2ac1cce0cc828edca70173d492170c9a9d4e713ac.png)

How Parcel 2 looks in Voxels next to the glTF export created by our Hyperfy.io app

![We can export individual parcels or entire suburbs](https://storage.googleapis.com/papyrus_images/355f61fd98ccc9543e2aa06d8d386d05b1e964629bbee3d6f3b98d9e75ad0f4c.png)

We can export individual parcels or entire suburbs

It’s not great how so much detail is lost in the process, a lot of character and charm from Voxels comes through the vox models and images peppered into all the builds. Unfortunately these assets add a ton of overhead that decrease the performance, making it difficult to render the entire world. Last I checked there are terabytes worth of media files as well. Fear not, the links to all of these assets are contained in the metadata for every parcel which was uploaded along with the dataset on our [Github](https://github.com/madjin/Cryptovoxels-snapshots).

Another idea on how to better preserve builds came from M3 Discord in which Sola shared a proof of concept NeRF of one of the center parcels.

[https://twitter.com/dankvr/status/1604580142701228032](https://twitter.com/dankvr/status/1604580142701228032)

Since we know the dimensions of every parcel it is possible to script a bot that can act as a drone to capture footage of parcels programmatically to become NeRFs.

* * *

### New Snapshot: 12-17-22

Last December we managed to take a 3D snapshot of the entire [Voxels](https://voxels.com/) grid almost exactly 3 years after our first one and everything went smoothly! The new files have been uploaded to GitHub, and soon the Internet Archive / Sketchfab / IPFS next.

[https://github.com/madjin/Cryptovoxels-snapshots](https://github.com/madjin/Cryptovoxels-snapshots)

Growth from 2019 → 2022
-----------------------

![The city has grown over 3x in terms of number of parcels, and expanded outwards with new Islands](https://storage.googleapis.com/papyrus_images/97a29d1ae9840e7bd7c2e51e63e9584f504ba8ecbfd90e1f8f48e4e77eb20baa.png)

The city has grown over 3x in terms of number of parcels, and expanded outwards with new Islands

* * *

Optimization
------------

We downloaded everything by suburbs of which there were 89 and totaled almost ~9 GB uncompressed (105 MB average file size). Applying ktx2 compression brought GPU memory usage down by **8x**, which is enough that I’m able to load everything into Unity on a laptop with an i7 + 3080 + 32 GB RAM.

![](https://storage.googleapis.com/papyrus_images/d7b8aee8a92c05461409bfd578d8f563fca2fe47e0b1d1345285fe861f02cb48.png)

By applying draco compression with default edgebreaker method we went from 8.9 GB to 293 MB, a whopping 97% savings! After extensive testing we conclude that this has been the best we can get for cubes / voxel information saved as glTF 2.0 models.

![Average size per file (districts, not parcels!) is now 3.3 MB](https://storage.googleapis.com/papyrus_images/997f91a94edfeec72de9cd9aba6b2531e2221983a9d8f9c325fb9d6c16a09ab7.png)

Average size per file (districts, not parcels!) is now 3.3 MB

When it comes to digital archives, in order to read less common file formats and to preserve interactivity you will need to be able to run the original software (if necessary, in a virtual machine or emulator). Sometimes this isn’t always possible or may likely prove to be highly difficult when an app is closed source.

Converting files to interoperable open formats mitigates risks associated with such scenarios. It also opens up a ton of possibilities for remix / modding culture to create new things with these assets in unimaginable ways, inspiring online communities both upstream and downstream across the Internet.

* * *

Interop
-------

Digital archiving drives incentives for migrating in-game assets towards interoperable open file formats that can stand the test of time, which means easier input/output between engines and programs. This is the gist of why archiving leads to interop!

The next step in Openvoxels plan is to make the datasets more accessible which we’re currently doing by building immersive museums from the snapshots we take. This step is actually crucial, artifacts that are kept in a dark vault will be forgotten in a generation. We are following in the Internet Archives footsteps of building a living library open to all.

After the snapshot of Voxels in 2019, I immediately began to build a VRChat map with the files then had the chance to share our culture to a new audience during a community world hop event.

[https://twitter.com/openvoxels/status/1623960898795708416](https://twitter.com/openvoxels/status/1623960898795708416)

[https://twitter.com/dankvr/status/1268717140313378816](https://twitter.com/dankvr/status/1268717140313378816)

Now by having a 2019 and 2022 snapshot it’s possible to show people how much things have changed. We could go back through old screenshots and overlay where they were taken, or go on a field trip from the past to the present and vice versa!

![Walking east towards Makers district from The Center in the latest snapshot world in VRChat](https://storage.googleapis.com/papyrus_images/a290a9fc825147fcd99c5403f7f585a08450996703be1a55e8c1c7ced34d39ef.jpg)

Walking east towards Makers district from The Center in the latest snapshot world in VRChat

Alignment
---------

Many people praise Voxels for how accessible it is to use and create with. The in-game voxel editor and powerful server side lightmap baking is dead simple for beginner 3D creators to make something they’re proud of.

Instead of other platform devs feeling pressured to try and replicate this feature, what if users can just simply use what works out there then export it to wherever they want?

[https://twitter.com/dankvr/status/1621674409042878464](https://twitter.com/dankvr/status/1621674409042878464)

I hope this is one of many case studies to come where metaverse projects have more to gain from being collaborative with each other rather than standoffish. This is how we get closer to the overall vision of building the roads for connecting virtual worlds together into something greater than the sum of their parts.

![What the ancient Silk Road can teach us about building the Metaverse: https://webaverse.ghost.io/the-street-messengers/](https://storage.googleapis.com/papyrus_images/7b23670dce6c2c2e3b3850487330799702df8ce09b4c7a86b454228ec5c7f468.png)

What the ancient Silk Road can teach us about building the Metaverse: https://webaverse.ghost.io/the-street-messengers/

> “The metaverse is going to be created by many different people with many conflicting goals, who nonetheless loosely agree on interoperable evolving standards.”
> 
> Source: [https://github.com/m3-org/charter](https://github.com/m3-org/charter)

The narrative of how NFTs empower users in the metaverse through digital ownership only really works in practice if the assets we supposedly own are not locked into any single platform. It may take some unlearning of web2 zero sum mindset in order to focus more on how to fight for the user and grow the pie.

If interested in exploring this topic further check out this post by another M3 member:

[https://mirror.xyz/avirtualfuture.eth/Oc0OJAF0c0rg8CQuqgXaaf\_O-CXZA7cJSf2wEIv3jeo](https://mirror.xyz/avirtualfuture.eth/Oc0OJAF0c0rg8CQuqgXaaf_O-CXZA7cJSf2wEIv3jeo)

In short, archiving and preserving digital artifacts using open standards can help pave the way for metaverse interoperability, ensuring that these virtual worlds can stand the test of time and remain accessible to everyone.

\- jin

Interested in supporting the mission? Check out our [juicebox](https://juicebox.money/@openvoxels) if you wish to make a financial contribution or [Dework](https://app.dework.xyz/m3/openvoxels) to check out some open bounties. Thanks for reading!

[https://juicebox.money/@openvoxels](https://juicebox.money/@openvoxels)
```

## File: docs/dataset-origin-city-archives/content.md
```markdown
Release of the first dataset for Openvoxels, a DAO whose mission seeks to preserve, curate, augment, and promote historical digital artifacts from the metaverse beginning with the virtual world of Cryptovoxels.

* * *

New here? Read Part 1:

[https://mirror.xyz/openvoxels.eth/hBQzBNwFXrOnwj5S5oOiYaBpQrpM8HfjENYMjKcy6Cs](https://mirror.xyz/openvoxels.eth/hBQzBNwFXrOnwj5S5oOiYaBpQrpM8HfjENYMjKcy6Cs)

* * *

Parcels 3D Datasets
-------------------

*   ⭐ [**https://skfb.ly/oyOxO**](https://skfb.ly/oyOxO) - Cryptovoxels districts 12-13-19 snapshot
    

[

openvoxels 2019 - A 3D model collection by m3org
------------------------------------------------

openvoxels 2019 - A 3D model collection by m3org

https://sketchfab.com

![](https://storage.googleapis.com/papyrus_images/36daae6e2d374fe746ca3a2f77dd4f084b266f002a726f3dc8e9eef47873160c.jpg)

](https://skfb.ly/oyOxO)

*   [Arweave backups](https://viewblock.io/arweave/address/f7QsdAM6sBC0UsUp1JoEXT93yMbCAPQIo1uBLhjDGSE) - JSON data backups since 2021 stored on Arweave
    
*   [CryptoVoxelsArchive.sh](https://gist.github.com/samcamwilliams/26e0505d11a7c25cafc95e08c5be9c13) - Script used to take daily data snapshots
    

Sketchfab is the leading 3D model sharing website on the web that many [cultural institutions and museums](https://sketchfab.com/members?segment=organization%2Fmuseum&sort_by=-followerCount&cursor=cD02MTI%3D) have picked to showcase artifacts on. They offer a wide range of [plugins](https://sketchfab.com/importers) to import models directly into your favorite 3D software easily.

![Importing districts from a Sketchfab importer: https://sketchfab.com/importers](https://storage.googleapis.com/papyrus_images/24ac7f64f63eb385331ae32f1c38ed6558b60acb4c59c895ccf20408d53ad233.gif)

Importing districts from a Sketchfab importer: https://sketchfab.com/importers

With the [blender plugin](https://github.com/sketchfab/blender-plugin/releases/latest) you can search for `cryptovoxels 2019` and quickly import chunks from the 12-13-2019 dataset into your project.

![You can import as much or as little as you want. I labeled the dataset with the year it was taken as a tag for optimizing search.](https://storage.googleapis.com/papyrus_images/f49016077aaf353ea11548f732631c5ec7d8571f110c5906c50ff83e55425e5c.png)

You can import as much or as little as you want. I labeled the dataset with the year it was taken as a tag for optimizing search.

We are planning to take another 3D snapshot of the world on the 3rd anniversary of the last one, **12-13-2022**, and run a buildathon alongside. Join the [M3 discord](https://discord.gg/m3org) if you want to help us plan..

* * *

Optimization
------------

The biggest district in the collection is Frankfurt comes in at a whopping 150mb and 1.7M triangles. I took a double look when I was able to compress this model down to 3.3mb via Draco using [http://gltf.report](http://gltf.report). I could still could shave 30% with gzip as well, making the final compressed version only 2.1mb. To compare with a different method, Meshopt compression only went to 25mb and broke the collision in Hyperfy.

![Comparing uncompressed to Draco and meshopt file size for Frankfurt district, the biggest district in Origin City](https://storage.googleapis.com/papyrus_images/5f8b5a75257cdc8708a47014c77746389d60b1eccadbd57ceac307d27bde81d8.jpg)

Comparing uncompressed to Draco and meshopt file size for Frankfurt district, the biggest district in Origin City

The only complaint I heard about Draco is that the size of the WASM library decoder may outweigh size savings for geometry <1MB. If that's all then no biggie - the size difference between uncompressed and other forms of compression like meshopt is substantial in our case.

![Comparing compressed file size for the entire Origin City dataset, Draco is 32.1 MB compared to 1.43 GB uncompressed](https://storage.googleapis.com/papyrus_images/3e3a641c1f62886b3a19334f0c47ec11bab7291c9da83c8f9c390bd55f4ca159.jpg)

Comparing compressed file size for the entire Origin City dataset, Draco is 32.1 MB compared to 1.43 GB uncompressed

Use Cases
---------

*   Digital preservation
    
    *   glTF 2.0 is an international standard file format for 3D models
        
    *   Snapshot virtual worlds like the Internet Archive Wayback machine
        
*   Create living museums
    
    *   Recreate CV as it were during a period in time
        
*   Alternate realities
    
    *   See how Voxels might look with diff skyboxes or weather
        
*   Sandbox for rapid prototyping
    
    *   Experiment and use to pitch features
        
    *   Good ideas can make their way back to main
        
*   Home space decoration (scale to tabletop size)
    
*   Mixed media art projects / 3D rendering
    

Final Thoughts
--------------

I want to close this with various ideas that have inspired me during this part.

[![](https://paragraph.com/editor/youtube/play.png)](https://www.youtube.com/watch?v=K8I28erYFLc)

More about the Internet Archive: [https://github.com/madjin/internet-archive-vr#media](https://github.com/madjin/internet-archive-vr#media)

![Source: https://fvm.filecoin.io/](https://storage.googleapis.com/papyrus_images/040b7b5bd583a456010f8f1e8fe8047762c813618c2e4d8d0e1456155b58afe0.png)

Source: https://fvm.filecoin.io/

[![User Avatar](https://storage.googleapis.com/papyrus_images/e0ca7aab77b353b4c451dd7c3f44777894e4e50c6d6e42ae157c7ec83ab788a8.jpg)](https://twitter.com/dankvr)

[jin](https://twitter.com/dankvr)

[@dankvr](https://twitter.com/dankvr)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/dankvr/status/1350620913583214594)

Places like Helsinki have 3D data of their entire city available in multiple formats as \*open data\* devs are free to download and build from.  
  
It's been used for data viz, virtual tours, VR festivals, and minecraft. Would love to see more places try this.  
  
[hel.fi/helsinki/en/ad…](https://t.co/kOULTrPz2g)

![](https://storage.googleapis.com/papyrus_images/510576acd0ff46b93098d3cbf5efc25fe6292092d9e57881b258bd463cc476a5.jpg)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 30](https://twitter.com/dankvr/status/1350620913583214594)[

8:48 PM • Jan 16, 2021

](https://twitter.com/dankvr/status/1350620913583214594)

### DeSci

[

A Guide to DeSci, the Latest Web3 Movement - a16z crypto
--------------------------------------------------------

What to know about the new DeSci movement

https://a16zcrypto.com



](https://future.com/what-is-decentralized-science-aka-desci/)

[![User Avatar](https://storage.googleapis.com/papyrus_images/c1243bcb2231aabadfeaf539268497ab7b977c7f902bc835283fe38b1a7790c2.jpg)](https://twitter.com/0xidanlevin)

[idan levin](https://twitter.com/0xidanlevin)

[@0xidanlevin](https://twitter.com/0xidanlevin)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/0xidanlevin/status/1541047522088472578)

Why is DeSci the next big thing ![🧵](https://abs-0.twimg.com/emoji/v2/72x72/1f9f5.png)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 293](https://twitter.com/0xidanlevin/status/1541047522088472578)[

9:15 AM • Jun 26, 2022

](https://twitter.com/0xidanlevin/status/1541047522088472578)

* * *

Participate: Open Tasks
-----------------------

Make some cool art using the Openvoxels dataset and earn some tokens 💰

[

Create 3D rendered art from Origin City dataset | Dework
--------------------------------------------------------

Read more about this task from M3 on Dework!

https://app.dework.xyz

![](https://storage.googleapis.com/papyrus_images/cc4a07b883aa0b8fe44740b5b1b8e6028268b779feea85a7707bc7f41a1a4c67.png)

](https://app.dework.xyz/m3/openvoxels/view/open-tasks-l6rgqctg?taskId=53425dc9-b405-4dae-8e69-4bf429638481)

Join us: [discord.gg/m3org](https://discord.gg/m3org)

[

Juicebox | Fund Your Thing
--------------------------

Juicebox is the programmable funding platform for crypto and web3. Fund, operate, and scale your project transparently. Community DAO owned, on Ethereum.

https://juicebox.money

![](https://storage.googleapis.com/papyrus_images/1e2c56277151ec0afd1c5dba6f7ec4735e388b065c8e875d6deba9dc74d8eb67.png)

](https://juicebox.money/@openvoxels)

* * *

PS: I airdropped Snow Globes to all that juiced the Openvoxels DAO with 1 ETH 🔮

[https://opensea.io/assets/ethereum/0xa49d9b77be91c9b7ce6bea17a2955f39cd7b90c0/1](https://opensea.io/assets/ethereum/0xa49d9b77be91c9b7ce6bea17a2955f39cd7b90c0/1)

You can also support us by collecting this post or purchasing a 3D pin for only 0.01 ETH

[https://create.zora.co/collections/0x889b4c8e99944e84a314427ed701bdf9f6bc55e6](https://create.zora.co/collections/0x889b4c8e99944e84a314427ed701bdf9f6bc55e6)
```

## File: docs/dataset-voxel-wearables/content.md
```markdown
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
```

## File: docs/immortalizing-wearables/content.md
```markdown
In this post we propose a solution to improve the metadata of Cryptovoxels wearables by combining it with glTF 3D models, then explore some of the possibilities for hosting metaverse assets directly on-chain. We took a snapshot on 11-1-2022 of all the assets and metadata from the original [Cryptovoxels wearables](https://www.voxels.com/collections/eth/0xa58b5224e2fd94020cb2837231b2b0e4247301a6) collection, link below:

**📂 GitHub:** [**https://github.com/m3-org/cryptovoxels-wearables**](https://github.com/M3-org/cryptovoxels-wearables) ⭐

There are over 3000+ voxel wearables made by hundreds of artists in the openvoxels dataset which represents a fraction of how many there are total. Today there are 847 collections and **33695** minted collectibles from **1142** authors on the [Voxels website](https://www.voxels.com/marketplace/collectibles).

We hope this post can provide information that’s useful to those working on avatar wearables and/or working groups focused on interoperable open metaverse standards.

> Note: If interested in topics like archiving metaverse assets, crypto, AI, XR, come drop by the [M3 discord](https://discord.gg/m3org) and make an introduction 😋

Upgrading Wearables Metadata
----------------------------

Cryptovoxels Wearables are one of the earliest examples of 3D NFTs (Chainbreakers comes in first) that point to the hash / file location of the actual model in the metadata. However, the metadata of the collection is currently centralized which is always a risk for long term historical preservation and collector value.

Here’s a proposal on how we can improve the metadata by uploading assets to IPFS / arweave and updating the fields, including adding new fields for file formats such as glb and svox:

![Current metadata for the first wearable on the left vs proposed spec on the right (IPFS/arweave + glb/svox formats)](https://storage.googleapis.com/papyrus_images/d2dca5b52f8b41be4e960944eecf7e4a25b2f4beef9673a657df01bf5372a286.png)

Current metadata for the first wearable on the left vs proposed spec on the right (IPFS/arweave + glb/svox formats)

We are also looking into using Filecoin to archive this dataset. The release of [FVM (Filecoin Virtual Machine)](https://fvm.filecoin.io/) is eminent which makes the timing prescient.

* * *

File Formats
------------

3D pixels aka voxels have many different file types and implementations. [Voxels](https://www.voxels.com/) uses the non-standard [file format .vox](https://github.com/ephtracy/voxel-model/blob/master/MagicaVoxel-file-format-vox.txt) derived from the popular editor [MagicaVoxel](https://ephtracy.github.io/) for in-game assets and wearables. We converted all of the files in the dataset to svox (the markdown of voxel formats) and glTF 2.0 binary files that each offer unique benefits:

*   glTF 2.0 is released as an ISO/IEC International Standard
    
    *   Open standard file formats better for longevity
        
*   svox (smooth voxels) has the smallest footprint + human readability
    

Here are some stats on the average file size differences WITHOUT compression:

    # Calculate average size of files in directory
    ls -l | awk '{s+=$5} END {print "Average file size: " s/NR/1024"k"}'

![Average file size of all 3166 wearables with no glTF extensions or compression applied](https://storage.googleapis.com/papyrus_images/0d89b483a9c8401a4f801d53a5879c8947e2632ca40f2d8e387b91f33361127b.png)

Average file size of all 3166 wearables with no glTF extensions or compression applied

There’s an option in [svox-tools](https://github.com/webspace-sdk/svox-tools) to compress when converting from vox2svox which brings down the average file size for svox down to ~**2 KB** which is small and cost effective enough to host fully on-chain! More on this soon…

* * *

Combining Metadata with 3D Model
--------------------------------

The current wearables collection uses MagicaVoxel .vox format (as mentioned above) which isn’t an open standard file format nor does it have a means of holding metadata within the file itself.

**Benefits of combining metadata with digital art**

![Many of these benefits, especially attribution, are similar with how crypto enthusiasts discuss NFTs](https://storage.googleapis.com/papyrus_images/54c30d983ba6722a031fd84453a024478960358c0cd9d99e2558ece75abb10fd.png)

Many of these benefits, especially attribution, are similar with how crypto enthusiasts discuss NFTs

**TL;DR**

![Combining 3D models with the metadata is better for interoperability than having them separate](https://storage.googleapis.com/papyrus_images/fbb0344e78da6950079bce5c3750ea42a76da3b2835c6bf58ebd284904651580.png)

Combining 3D models with the metadata is better for interoperability than having them separate

**Converting metadata from one JSON schema to another**

![ChatGPT is really good at transforming data from one format or spec to another](https://storage.googleapis.com/papyrus_images/3a94878d93777a5ad4f6c54580b6355a4a839e1d6f2d6ee6f44cb8ed7b3a6517.png)

ChatGPT is really good at transforming data from one format or spec to another

See the finished script here: [https://github.com/M3-org/cryptovoxels-wearables/blob/main/scripts/convert\_json.sh](https://github.com/M3-org/cryptovoxels-wearables/blob/main/scripts/convert_json.sh)

**Combine JSON with glTF files**

I used this tool from KhronosGroup to programmatically add JSON to glTF: [https://github.com/KhronosGroup/glTF-Metadata-CLI](https://github.com/KhronosGroup/glTF-Metadata-CLI)

example command: `cargo run -- -i 1.glb -o out8.glb -j 1_new.json`

![Verifying with gltf-transform and gltf.report that metadata was added to the glTF model](https://storage.googleapis.com/papyrus_images/5317740517e6e8d0fe6b40d2dbd146a4760ca161a6a2f5a8956d31a4f13333f4.png)

Verifying with gltf-transform and gltf.report that metadata was added to the glTF model

* * *

On-chain Wearables
------------------

**✋ Everything from here on are notes for future exploration 📝**

There was an epic thread from [@cybourgeoisie](https://twitter.com/cybourgeoisie) breaking down how CyberBrokers art was uploaded on-chain:

[https://twitter.com/cybourgeoisie/status/1503130088740638725](https://twitter.com/cybourgeoisie/status/1503130088740638725)

> _Openvoxels doesn’t have enough ETH to upload the entire voxel wearables collection to the Ethereum blockchain chain incase you’re wondering_

The on-chain art crowd is where some of the dopest builders in web3 are. On September 13th dom shared a post of an [on-chain threejs app of a rose](https://twitter.com/dhof/status/1569750046106873857):

[https://twitter.com/dhof/status/1569775925679558660](https://twitter.com/dhof/status/1569775925679558660)

Threejs is the most popular Javascript library for 3D graphics on web and powers a lot of the virtual world platforms many of us are building. This means artists can create virtual worlds stored as static HTML that reference on-chain 3D graphics libraries, making for a way more decentralized and censorship-proof medium of expression.

I asked in mathcastles discord how much it might cost to store 1kb on-chain, here’s a function 113 mentioned that offers a roughly accurate estimate:

    function ethCost(kb, gweiPrice){
      
        const SSTORE2 = 245522
        const SSTORE = 640000;
      
        const writeStyle = SSTORE2
      
        return (kb * writeStyle * gweiPrice) /1000000000 
    }

> 113: iirc with sstore2 it varies a little based on how big the total blob you're putting up is. at current 20 gwei gas price you'd pay ~.005 eth per kb
> 
> xaltgeist: the breakpoint is around 32 bytes, at which point SSTORE2 is more efficient. so if you're storing any appreciable amount of data in a given transaction, SSTORE2 is likely cheaper

Ethereum File System
--------------------

EthFS (Ethereum File System) is an [open source](https://github.com/holic/ethfs) project that allows you to browse and upload on-chain files.

> ### What?
> 
> [dhof's on-chain 3D rose NFT](https://twitter.com/dhof/status/1569750046106873857) inspired tons of fun conversations and projects. It surfaced many examples and use cases for highly reusable on-chain assets (JS libraries, fonts, gifs).
> 
> EthFS is an effort to consolidate these assets into a public, durable on-chain repository with ergonomic, gas-optimized methods for reading and writing files.
> 
> ### How does it work?
> 
> EthFS leans on [SSTORE2](https://github.com/0xsequence/sstore2)'s strategy to efficiently read and write data in the form of contract bytecode. The frontend splits files into 24kb chunks (max contract size) and writes them to the `ContentStore`, a content-addressable data storage contract.
> 
> A `File` struct wraps a set of content checksums that, when concatenated in order, represent the full file contents. It also holds the logic for reading/unwrapping the file contents into a single string in a very gas-efficient way.
> 
> The `FileStore` contract acts as a minimum viable registry, a global namespace of human-readable filenames for more ergonomic use within consumer contracts and the frontend's file browser.
> 
> > For specific use cases (e.g. different naming schemes, permissioning, etc.), you may decide to create your own file store abstraction. That's great! The `ContentStore` is designed to be unopinionated (strictly content-addressable), so that building on top of it can benefit everyone.

[https://ethfs.xyz/](https://ethfs.xyz/)

Some napkin math on how much uploading all the svox files on-chain would cost:

\- 1 average file = 2 KB → 3 KB base64-encoded - costs 2 transactions (one per 24 KB chunk, one for file metadata) - estimated ~0.022 ETH in total gas fees - 0.022 \* 3138 files = 69 ETH _nice_

![It cost 0.0054 ETH or about tree-fiddy](https://storage.googleapis.com/papyrus_images/28ece6dc806b0ceb403e8f67c723ad16a5f0230bc316acc895af6c97668992de.png)

It cost 0.0054 ETH or about tree-fiddy

[https://etherscan.io/tx/0x863c09df954472af6b8971ef24bfa3a328363d8cebfc95789d8fadd4e9353d9f](https://etherscan.io/tx/0x863c09df954472af6b8971ef24bfa3a328363d8cebfc95789d8fadd4e9353d9f) transaction with the base64 encoded 1.svox file (Goldensword)

On-chain Worlds
---------------

More breadcrumbs to follow..

[https://twitter.com/xtremetom/status/1600542212735090711](https://twitter.com/xtremetom/status/1600542212735090711)

The steps go something like this:

1.  All scripts are minified and bundled
    
2.  Convert bundle to PNG (DEFLATE)
    
3.  Compress PNG
    
4.  Convert PNG to base64
    
5.  Split data into 24kb chunks
    
6.  Store with SSTORE2 ([LibraryStorage.sol](https://gist.github.com/xtremetom/64d1c590b933826a546a5c8b0573be3a))
    
7.  (INFLATE) Pass the PNG to WebGL and convert RBGA back to bundle
    

* * *

#### Honorary mention

No matter if blockchain, IPFS, or Arweave, there’s no feeling of ownership that hits as hard as having a cold copy of your data.

This post was **not** sponsored by them, I just wanted to give a quick shoutout to [ClubNFT](https://clubnft.com), they built a free tool that you can use to backup the actual files for all of your NFTs and safely secure them in cold storage (such as a backup drive / USB) 👏

![](https://storage.googleapis.com/papyrus_images/8049d51954329013c852c79a326587f818d97db2724e672c8d1a79040c761779.png)

* * *
```

## File: docs/manifest-destiny/content.md
```markdown
_tldr; I argue for Voxels (formaly Cryptovoxels) to remain relevant and true to its roots, it must recommit to decentralization. I outline the actions I'm taking as a community member to help steer us back to the original vision, including developing open-source tools for interoperable wearables and preserving user creations on the permaweb._

**Part 1:**

[https://mirror.xyz/openvoxels.eth/k693J7KFEX3y8cOSereh432yy2nUUjft05X4L0UgANo](https://mirror.xyz/openvoxels.eth/k693J7KFEX3y8cOSereh432yy2nUUjft05X4L0UgANo)

* * *

Voxels is at a crossroads.

Born in the wild west of the early metaverse, Voxels (formerly Cryptovoxels) was a beacon of creativity, community, and crypto-fueled experimentation. The punk rock band in a sea of corporate-backed, sanitized virtual worlds.

But as the metaverse has grown, Voxels has reached an impasse. IMO the challenges are less specific technical issues, and moreso about the hesitancy to fully commit to interop when conventional wisdom for running a platform is to keep users within the walled gardens at all costs.

However Voxels was never meant to be a conventional platform. It was born out of the ethos of empowering users and decentralization. Such requires a leap of faith, a willingness to let go of the walled garden mentality. It's hard, but it's a path that stays true to the project origins, and to the punk rock spirit that made it so special in the first place.

![](https://storage.googleapis.com/papyrus_images/73c7d0eead52496ff614b8c383046d3f9485d7ee42a301fc6c9feac454f5c3a7.jpg)

Metaverse pioneers traveling with their digital artifacts across the great frontiers of cyberspace

As a community, we have the power to help shape this future. In this post I share details about recent grassroots actions I've been taking in order to preserve our history and cultural artifacts from risks of platform dependence.

File > App
----------

When it comes to ensuring the longevity of our digital creations, I'm reminded of a [powerful post by kepano](https://twitter.com/kepano/status/1675626836821409792) titled [**File > App**](https://stephango.com/file-over-app).

In it he argues that all software is ephemeral, so give people ownership over their data. If you want to create digital artifacts that last, they must be files you can control, in formats that are easy to retrieve and read. Use tools that give you this freedom and don't lock your data into a format you can't retrieve. Makes sense.

![file over app](https://storage.googleapis.com/papyrus_images/7c406ee19b65b2ce1c5bd1e6d4f8de9a5f78c914489c1bb8880e4a8834dda832.jpg)

file over app

The 'File > App' approach is not just a nice-to-have, it can make the difference between preservation and oblivion. It's proven to be prescient earlier this year when the WebXR world was rocked by news that [Mozilla is sunsetting Hubs](https://hubs.mozilla.com/labs/sunset/) after 5 years of operations. Hubs was a pioneering social VR platform that many in the community had come to rely on. However, because Hubs was built on open standards like glTF, the 115,732 custom avatars and 215,923 scenes uploaded to the platform aren't lost forever. They can live on in other compatible platforms.

![](https://storage.googleapis.com/papyrus_images/4c0ad4c11f0c949b266a55c522e88410bc2e4d0cb846407258b5e6df95b90785.png)

**Early Days of The Cryptoart Renaissance**

My first impression of Cryptovoxels was it being punk rock. Its got an aesthetic reminscent of a 3D Angelfire / Geocities, soulful landmarks of a bygone era of the web. Even now, every visit yields new delights to behold in what is perhaps the biggest virtual art walk on the web.

IMO it's the Florence of the cryptoart renaissance, a gathering place for pioneering artists and collectors. For that reason I don't view it as just another project but as a pivotal, historically significant gathering place.

Voxels launched in 2018 led by Ben Nolan as a one man team. Ben always turned down investors, opting to be fully community supported instead. For historical context, Decentraland had just raised millions to build a metaverse, but the world wasn't open to the public until years later around February 2020. Even so the secondary market for parcels in Decentraland was reaching exorbitant prices, despite not having any playable experience yet.

Ben coded like a madman, quickly shipping features like .vox import support and NFT previews to display NFTs with - at which point the artists arrived in droves to setup their in-world galleries. Later Ben shipped NFT wearables for avatars, in which anybody could submit a design for and a community volunteer would then hand mint them.

Ben was even experimenting with auto-converting wearables to glTF and USDZ formats for interop and AR/VR previews, way back in 2019!

[![User Avatar](https://storage.googleapis.com/papyrus_images/20d8929f46644563bbf5a364e2e06d75193430baf1f0393ff697014af0eda9fd.jpg)](https://twitter.com/cryptovoxels)

[Cryptovoxels](https://twitter.com/cryptovoxels)

[@cryptovoxels](https://twitter.com/cryptovoxels)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/cryptovoxels/status/1207042170940641280)

Auto conversion of wearables to .gltf and .usdz for augmented reality preview! ![😱](https://abs-0.twimg.com/emoji/v2/72x72/1f631.png)

![](https://storage.googleapis.com/papyrus_images/4d259f35979dd2c8cc434b8f9441dc75fc7ca7b9f2e39d3e5d386380c67ef930.png)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 14](https://twitter.com/cryptovoxels/status/1207042170940641280)[

3:57 PM • Dec 17, 2019

](https://twitter.com/cryptovoxels/status/1207042170940641280)

But wait, what happened? It's 2024 and the wearables NFTs still have centralized metadata, and links pointing to vox format only on centralized storage.

![First NFT wearable minted on ethereum, metadata still points to centralized hosting](https://storage.googleapis.com/papyrus_images/b67607e0a4fd55f246e0578d5c30df25b7f4fc2ff19499c20e6c100d1c8b06ed.png)

First NFT wearable minted on ethereum, metadata still points to centralized hosting

What happens if the server shuts down? What about our parcels? What do we really own if our creations rely upon a centrally hosted service?

![](https://storage.googleapis.com/papyrus_images/d6c18f5fc74eb693cd5d6ccbe2aaf7bea51617c83106c0c2ea8ee856d8306579.jpg)

The data is only in magicavoxel .vox format, so I can't bring it into many other places unless it's converted. What about the glTF stuff?

![](https://storage.googleapis.com/papyrus_images/ecadfcef7d8aab881219c7dd7d6795eebcb1f90ccd25ecdee26c5c42911f8c0a.png)

I was so excited about glTF export support happening that I made this video last year while Ben was live tweeting development. I've been looking forward to having this capability and level of detail ever since I began to experiment with [Cryptovoxels interoperability](https://vimeo.com/364451108) 5 years ago!

[![](https://paragraph.com/editor/youtube/play.png)](https://www.youtube.com/watch?v=1h20qK_6Mwk)

Alas, it was short lived as the exporter is no longer online. The exits have been closed, and moreover the team has shrunken down while bugs are piling up. Proprietary data formats, centralized storage, and locking users into your platform is not what I expected out of a crypto project that sought to build an open alternative to the metaverse.

Either way, I feel compelled to do something in order to preserve our culture and history, cuz else if not me then who?

**Metaverse Passports**

Recently Decentraland released VRM avatar export ability from their main client. Meaning you can take your current avatar with all of its wearables and export it into a file format that's compatible with hundreds of other programs.

[![User Avatar](https://storage.googleapis.com/papyrus_images/bfd814024807da43a2bf1ffaa4c05a4171efa2dc9c915ba6f9ca7688b9869c6c.jpg)](https://twitter.com/decentraland)

[Decentraland](https://twitter.com/decentraland)

[@decentraland](https://twitter.com/decentraland)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/decentraland/status/1684271871678636040)

The next step in interoperability. ![🌐](https://abs-0.twimg.com/emoji/v2/72x72/1f310.png)![🔁](https://abs-0.twimg.com/emoji/v2/72x72/1f501.png)  
  
Take your digital identity anywhere you go by exporting your Decentraland avatar as a VRM, then represent yourself in other spaces such as [@hyperfy\_io](https://twitter.com/hyperfy_io), [@oncyber](https://twitter.com/oncyber), [@monaverse](https://twitter.com/monaverse), and more!  
  
Show off how you are using your VRMs! ![💞](https://abs-0.twimg.com/emoji/v2/72x72/1f49e.png)

![](https://pbs.twimg.com/ext_tw_video_thumb/1684257384758116354/pu/img/L9-x-_Y2Sy8dLGbh.jpg)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 532](https://twitter.com/decentraland/status/1684271871678636040)[

2:38 PM • Jul 26, 2023

](https://twitter.com/decentraland/status/1684271871678636040)

> This wearables upgrade can also lead to more interop between Voxels and Decentraland. One potential issue is that afaik Decentraland has pre-determined placements for wearables whereas Voxel wearables have no opinion about where you attach them to (you use the costumer for it). [https://docs.decentraland.org/creator/wearables/linked-wearables/#creating-linked-wearables-in-bulk](https://docs.decentraland.org/creator/wearables/linked-wearables/#creating-linked-wearables-in-bulk)

Right of Exit is [key](https://twitter.com/sriramk/status/1482834006810914819) to crypto. You have the ability to switch wallets (BIP-39), platforms, and providers with near minimal friction. It's giving power to the users with the ability and choice to fork things or take our data with us to other services built on the same protocols. The low switching costs adds incentives for platforms to deliver the best service.

![check the timestamps](https://storage.googleapis.com/papyrus_images/5a4da7f0fb1ef873ab45a9612b2f7356eccdf3a980c89a98266df3e26ad3ee5b.png)

check the timestamps

We can play it safe by keeping borders closed for custom avatar import, but I believe holders should be able to export our avatar costumes as VRM files which can help spread our culture across the metaverse. This would also help with expanding market reach for creators as well because currently the Voxel wearables economy only caters to a captive audience of a few thousand people, whereas through interoperability it can be millions!

![Plus voxel wearables just look cool on other avatars](https://storage.googleapis.com/papyrus_images/3ded5adf7dcf3ef73b243ce6ffdf11dc437d96d5589e667595ef893836b487b0.png)

Plus voxel wearables just look cool on other avatars

* * *

Actions Being Taken
-------------------

Openvoxels can help write a tool that utilizes the costume save files to generate VRM files with the OG mannequin which also makes it easier to add wearables to other avatars.

![In a way the mannequin is a perfect placeholder for other avatars](https://storage.googleapis.com/papyrus_images/bb7c6cdccfd68abf2f28d4c49f1ce0eff43b065924db74303c76fd428e260837.png)

In a way the mannequin is a perfect placeholder for other avatars

M3 has been working on an open source VRM avatar toolkit called Character Studio which we can provide integration with Voxels through upgraded the wearables: [https://m3-org.github.io/characterstudio-docs/](https://m3-org.github.io/characterstudio-docs/)

### New Smoothvoxels CLI Tool

*   [
    
    GitHub - madjin/smoothvoxel-tools: CLI tools for Smooth Voxels
    --------------------------------------------------------------
    
    CLI tools for Smooth Voxels. Contribute to madjin/smoothvoxel-tools development by creating an account on GitHub.
    
    https://github.com
    
    ![](https://storage.googleapis.com/papyrus_images/2bd07034e6f4061c4a2b7fa2f172afe0d9feffe70f6ec07865d43bc6160eff31.png)
    
    ](https://github.com/madjin/smoothvoxel-tools)
    
    *   [
        
        Smooth Voxels
        -------------
        
        Smooth Voxels Documentation
        
        https://www.smoothdev.nl
        
        ![](https://storage.googleapis.com/papyrus_images/21e50dfcee12e8c40a56c74edc79fbd7100f478166bc882829ccdda0160f4e0c.webp)
        
        ](https://smoothvoxels.glitch.me/)
        

Although the magicavoxel .vox format is popular in truth there is no standard voxel format and I needed to convert 34,015 wearable files to glTF. I discovered there are tools like [Vengi VoxConvert](https://vengi-voxel.github.io/vengi/voxconvert/Index/), but it was too slow. Previously I used [svox-tools](https://github.com/webspace-sdk/svox-tools) by [gfodor](https://x.com/gfodor) which worked great but was out of date with Smooth Voxels which is now at version 2.2.0, and caused an off-by-one error when using the vox2svox tool.

In order to fix, I made a puppeteer script to automate converting vox-to-svox with the latest version of Smooth Voxels, which is [now on github](https://github.com/madjin/smoothvoxel-tools). It is also about **~9x faster** than svox-tools when converting files. I also made it export glbs, but have another off-by-one issue that we can fix later.

![How it looks when converting vox files to svox and glb](https://storage.googleapis.com/papyrus_images/ec5e20f3d59784ad6cea3d3da3f6680de12932225093ce4d769ff45bdaa9b91b.gif)

How it looks when converting vox files to svox and glb

`node index.js input_folder output_folder`

You can still use svox2gltf program from [svox-tools](https://github.com/webspace-sdk/svox-tools) which still works perfectly fine and is what I did to continue progress. `.svox` is a pretty cool format as well that I plan to experiment with in the feature for onchain experiments. See [Immortalizing Wearables](https://mirror.xyz/openvoxels.eth/k693J7KFEX3y8cOSereh432yy2nUUjft05X4L0UgANo) post if interested.

### Provenance + Permaweb

So now all of the wearables have been converted to glTF binary, encoded with metadata from each NFT, and uploaded to Arweave via [ardrive-cli](https://github.com/ardriveapp/ardrive-cli). Even if the wearables are downloaded or imported into a platform without crypto integration, we can preserve authorship information within the 3D model files themselves. It's astonishing how a bit of metadata context can make an object more meaningful.

![Metadata adds so much more historical context / soul to what may look like a random object without it](https://storage.googleapis.com/papyrus_images/97a32750316c6e0d472bc689a371491abf901aad8dd999a756d5b9921d74f00d.jpg)

Metadata adds so much more historical context / soul to what may look like a random object without it

> See the finished script here: [https://github.com/M3-org/cryptovoxels-wearables/blob/main/scripts/convert\_json.sh](https://github.com/M3-org/cryptovoxels-wearables/blob/main/scripts/convert_json.sh)
> 
> I used this tool from KhronosGroup to programmatically add JSON to glTF: [https://github.com/KhronosGroup/glTF-Metadata-CLI](https://github.com/KhronosGroup/glTF-Metadata-CLI)
> 
> example command: `cargo run -- -i 1.glb -o out8.glb -j 1_new.json`

If interested in this reading more about this part check out some of the dev logs on m3org.eth mirror page such as [Boomboxheads V2: Extra Metadata](https://mirror.xyz/m3org.eth/4NPYOzRtcuYHrRI7iZK1yADswgOv9To2ErQ8KrqLPX0).

### New Thumbnails

Current Cryptovoxel Wearables are about **1.2 MB each**

![](https://storage.googleapis.com/papyrus_images/95371c2c2e95d4cb2aceded66bab841ff34043ceaf0771581e96fe797064939c.gif)

This is where I could use some feedback from the community. There are various tradeoffs involved in each thumbnail variation, mainly to do with filesize / quality.

> Note: it is hard to predict the best angle for static transparent pngs, so spinning the model is worth it IMO. This is called a turntable animation btw.

**Plain background = Smallest filesize**

Average file size of these are about **170 KB** when converted to gif, which is drastically smaller. It's clean, but so clean it lacks soul. I have all of these already generated and ready to use

![Thoughts? File size is small, looks good, but is it too plain?](https://storage.googleapis.com/papyrus_images/bb751c4f016379804a246a93623985cf34397a677da1aeb91a226e05413c3089.gif)

Thoughts? File size is small, looks good, but is it too plain?

### Add more soul via backgrounds?

According to the Voxels API there 5 years each collection was minted (2020-2024). I used the VRChat worlds I ported Origin City into for capturing 4K 360 photography that I also generated HDR maps from.

![Each one pertains to a different year, 2020-2024 in order](https://storage.googleapis.com/papyrus_images/a6bf5a48167be8e92a5cefce3e4e6392a9ee27efba3a1c2cdbc57961cc25d2fd.jpg)

Each one pertains to a different year, 2020-2024 in order

I currently have a script that can read the metadata for each wearable in order to generate a custom HTML page pertaining to the year of the collection it was minted in. This adds some visible provenance within the previews. I also used a grounded skybox so it looks like the wearables are chilling on the surface.

**Issue: gif filesizes increases to ~1.2 MB each due to moving background**

![](https://storage.googleapis.com/papyrus_images/cecff80885b51a86330beec2da5d9084cf080847a33e61a4014a243af3ac8f15.png)

We could optimize the gifs down to about **320-660 KB** each.

![](https://storage.googleapis.com/papyrus_images/3c1caf9dd4f6fcfef91a80d80e6e2f3079c0ec4511e023cc34d8f86f1523051f.gif)

I was also thinking about adding the thumbnail for each collection the wearable is from in the corner of each preview. So then wearables have background for year collection minted + collection thumbnail on all the previews. Not all wearables have the thumbnails, but for those that do it does add something to it. Thoughts?

![](https://storage.googleapis.com/papyrus_images/76499601111259dbda52d621f4eddb886b0057b8be0cdc1839b5d61de3a6d2f1.gif)

These options look great, but is it worth it? The average filesize of each glb is about **235.76 KB**, making thumbnails potentially heavier than the files themselves. It costed about $350 in AR tokens to upload the glbs to arweave, so if thumbnails are 2-3x bigger then we're looking at maybe up to ~$1k in storage fees.

We could also just have a static background, which would keep the filesize very low while adding some interesting context. I could modify the equirectangular projected background, just thought having the 360 photography looks cool:

![](https://storage.googleapis.com/papyrus_images/7f2f285b779a85ecb3fe160219bbc937fd63325ee96c3b79042b121b546cc5fb.gif)

If you have any ideas, hit me up in the [Voxels discord](https://discord.gg/PUSREG4QkU). After we decide on the final thumbnail look, I can begin rendering these.

* * *

Conclusion
----------

For Voxels to fulfill its original vision of a metaverse owned by its users, it needs to recommit to principles of interoperability, open file formats, and true data ownership. File > App

I think it's time that Ben Nolan don his [war time PFP](https://opensea.io/assets/ethereum/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1842), and get serious about putting the Punk back into Voxels. Also give jin repo access to the parcel glTF exporter and let me cook :D

![](https://storage.googleapis.com/papyrus_images/ace38097e4157d238f36216a484374fb2ab05331126b4e92f2b48ad1356246cd.png)

The community will keep doing what we can. I took a snapshot of all voxel wearables creators + collectors that I will talk about in the next post as well as more information about the archive itself.

[Subscribe](https://paragraph.com/@openvoxels/subscribe)

**Support**

*   Mint a VHS: [https://zora.co/collect/eth:0x49ee82df94eb7733e2c673b87cd5c824c7ad45c9](https://zora.co/collect/eth:0x49ee82df94eb7733e2c673b87cd5c824c7ad45c9)
    
    *   Will help us produce better media / content of our interop work
        
*   Donate to the juicebox: [https://juicebox.money/@openvoxels](https://juicebox.money/@openvoxels)
    
*   Openvoxels is happening mostly in [M3 discord](https://m3org.com/discord), come say hi :)
```

## File: docs/motivation-and-mission/content.md
```markdown
* * *

Motivation
----------

I want our digital wonders to last, and the early founders and pioneers of this space remembered. Without history, society is easily reprogrammed by its incumbents. If we don’t tell our story, someone else will.

We shouldn't rely on centralized platforms to preserve our digital artifacts and stand the test of time. Twitter is powerful, but it's also a rapid stream. It's useful for data in transit, but not for data at rest.

**Virtual worlds are ephemeral**

Recently I logged into in VRChat and noticed many of the worlds in my favorites list were disappearing, worse yet I forgot what they even were.

![](https://storage.googleapis.com/papyrus_images/ebb9800cb10c8d38dee37e49c9a374d8eb86f44e7693887817ba34efe86683fa.png)

YouTube also does this too but at least we have good tools to download our favorite videos with, we can't say the same for most of the virtual world platforms that exist today.

**Preserving virtual worlds has unique challenges**

Screenshots are fine for preserving books but don't do it justice for preserving websites or games. Projects like Voxels aren't a typical video game, it's a constantly changing / evolving virtual world.

![](https://storage.googleapis.com/papyrus_images/c474d994799f0f8787a8e33efed96d4123edc05da021af3779f1687d99e2b92c.jpg)

I picked a part of the map which didn't have much building activity to better illustrate the differences between time. Many places have completely changed.

![This is the same street 3 years apart.](https://storage.googleapis.com/papyrus_images/967617256b0ae3ab5362d4917ba04d6f9a78282e176daa05fc57ede5f18c60d3.gif)

This is the same street 3 years apart.

**Right now there is no wayback machine for the metaverse**

The only way to experience most virtual world content the way the artist envisioned is via the main client, but what if a future update breaks it or changes the whole vibe?

Alotta Money (RIP) is an OG cryptoartist legend and built many incredible virtual landmarks before he passed away.

![The Scarlet Factory, located in the Music district of Origin city, Cryptovoxels.](https://storage.googleapis.com/papyrus_images/b2b3a73d69fae6c238ea2413faad900f98dc253df1aade754e5d8f2b4e92fbe1.jpg)

The Scarlet Factory, located in the Music district of Origin city, Cryptovoxels.

![This is how the Scarlet Factory currently looks with 3rd party viewers (Substrata / Unity /threejs / hyperfy), none of which are anywhere near good enough yet.](https://storage.googleapis.com/papyrus_images/71f02ea97d3f64a1e0635079c545546ab0106a0387f8c305bf652d10ed99f3f5.jpg)

This is how the Scarlet Factory currently looks with 3rd party viewers (Substrata / Unity /threejs / hyperfy), none of which are anywhere near good enough yet.

Who else is working on such? Isn't this a major narrative point of the web3 metaverse thesis: Interoperability, ownership, digital preservation? What's so meta about platform lock-in?

**I miss when Cryptovoxels was black and white monochrome**

I feel like a metaboomer when I say this but in my day we had to pay for coloring our voxels. During the first year of Cryptovoxels the entire world had this unusual black n white monochromatic aesthetic that I always thought was unique / punk rock / noir. Ben Nolan may of joked it was to save on network bandwidth but there actually was no practical justification other than it simply looked cool.

![The Clocktower in Makers](https://storage.googleapis.com/papyrus_images/cf2c1aea19501929032845b9ff2a8934ceb79cf883d25e129c8b138866aced49.jpg)

The Clocktower in Makers

I really do miss the black n white version of Cryptovoxels - it was iconic. In both the online and offline world saturated with colors it struck out and was recognizable anywhere. Seeing black n white voxels instantly made you think of Cryptovoxels.

![WebVR site with Cryptovoxels displayed as a game within a game](https://storage.googleapis.com/papyrus_images/6d44ef325b461a9c9156ba6a4fcbcb4063da723d7f8904a4098cc56c1b0a6173.jpg)

WebVR site with Cryptovoxels displayed as a game within a game

Image album with more pics from that era: [https://slate.host/jin/cryptovoxels-history](https://slate.host/jin/cryptovoxels-history)

* * *

What is Openvoxels?
-------------------

At a high level, Openvoxels is a:

*   Data DAO
    
*   DeSci art project
    
*   Metaverse interop working group
    

Notes from our interop projects related to Cryptovoxels are in [The Book of Voxels](https://hackmd.io/@xr/voxels).

![Will be posting notes to this hackmd](https://storage.googleapis.com/papyrus_images/a09ce6b392f49f5dd7abf7a5552688ad0724032c6f66d462043d8953cec41b10.png)

Will be posting notes to this hackmd

The notes are very media rich and useful when collaborating with SDOs (standards development organizations). We can use hackmd notes for quickly creating presentations, videos, and immersive thinking spaces like my garage lab in [Anarchy Arcade](https://store.steampowered.com/app/266430/Anarchy_Arcade/).

![](https://storage.googleapis.com/papyrus_images/d61dcda733f6070fb603e8a3752ea7a86acaa0b95444920a9ecd46480dcf4350.gif)

Digital gardening in 3D: all of these things you see are launchable shortcuts

Populating virtual spaces with project notes and media files as 3D shortcuts has great benefits for coming up with new ideas serendipitously, like externalizing a part of your brain into a room without having to foot a huge electric bill.

![Much of these ideas are years in the making](https://storage.googleapis.com/papyrus_images/b84e0f5181dd63580fc3fcd3182c141fdc679bc5935d1db21a8af248fde7e77c.jpg)

Much of these ideas are years in the making

This garage lab is my digital garden. Within it are notes from multiple different dev logs, densely hyperlinked information represented as objects with screens. It's a rich environment for thinking about metaverse interoperability that will soon be coming to a browser near you.

* * *

DAO
---

Cryptovoxels is somewhat unique amongst other web3 metaverse projects in that it has no official ERC20 token and no DAO. The team has floated some great ideas but ultimately refrained from rushing into decisions.

> We've been discussing the ability for people to be able to run bakers and get paid in token for helping us bake the world and increase the visual fidelity.

> A governance token would be super dope if we used it in a super high resolution way, like here's 10 bugs we're gonna work on, vote with your tokens in the next hour to prioritise the list. So a dev could start the day, get bugs prioritised, then start work an hour later.

I believe _how_ we work is just as important as what we work on. I see DAOs as a better model for working groups, and that Openvoxels can serve as an example of such. Sometimes the best way to learn is to simply do and lead as an example.

**The plan**

*   Part 1: Datasets
    
*   Part 2: Living Museums
    
*   Part 3: "Burning Chrome"
    

I'm grateful for everyone whom joined the [Juicebox DAO](https://juicebox.money/@openvoxels), ya'll will receive gifts soon.

* * *

Screenshots
-----------

These pics come from a 12-13-19 snapshot of Cryptovoxels that was mesh exported loaded into Blender and alternative clients .

![](https://storage.googleapis.com/papyrus_images/78f22ba17ef6e25d02bd6b38e3afd1dbac6f96a035a5024573c950420f7a52fb.jpg)

![](https://storage.googleapis.com/papyrus_images/2cc2d90fc78a89cce4e4a7f4b943e71d4d900279133d11b8f95a7bb9345b0fd3.jpg)

![](https://storage.googleapis.com/papyrus_images/3ecd22fdd12fd16a5b902b30f27d4daa283d4124c30a339b3fa342ccaa17ffe3.jpg)

![](https://storage.googleapis.com/papyrus_images/686c970397de1b0a9ced9b8977831414cf763d44d4a2a80bc27bcfea38ec00df.jpg)

> A people without the knowledge of their past history, origin and culture is like a tree without roots - MARCUS GARVEY

![](https://storage.googleapis.com/papyrus_images/e116706d8e4930360bb0761da64eaceb335b0c45443ad9e592141614914fa35f.gif)
```

## File: docs/summer-2024/content.md
```markdown
June
----

[Smooth Voxels 2.3.0](https://smoothvoxels.glitch.me/) was released, offering full threejs compatibility support and some new markdown features. Smooth Voxels is powerful markdown for voxel project that we used it in the past to convert vox models to glTF for wearables. Have yet to update the [smoothvoxels-tools](https://github.com/madjin/smoothvoxel-tools) CLI tools to the latest version, good first issue for anyone looking to contribute.

[![User Avatar](https://storage.googleapis.com/papyrus_images/1dc074b493d56fedbb44f6fa37e1ac56dab7fd709b64f30ea5d45ef466c8c0ee.jpg)](https://twitter.com/openvoxels)

[Openvoxels.eth](https://twitter.com/openvoxels)

[@openvoxels](https://twitter.com/openvoxels)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/openvoxels/status/1797768859237409038)

Smooth Voxels 2.3.0 was released! Some new features include:  
\- Full [#threejs](https://twitter.com/hashtag/threejs) support in playground / as library!  
\- New markdown (bend, smooth scale, rotate, translate models)  
\- Playground: New examples + Save as threejs + animation + [@aframevr](https://twitter.com/aframevr) options  
  
![➡️](https://abs-0.twimg.com/emoji/v2/72x72/27a1.png) [smoothvoxels.glitch.me](https://t.co/tIOwyJg3Pi)

![](https://pbs.twimg.com/tweet_video_thumb/GPL0p4BWoAAegn7.jpg)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 40](https://twitter.com/openvoxels/status/1797768859237409038)[

7:14 PM • Jun 3, 2024

](https://twitter.com/openvoxels/status/1797768859237409038)

* * *

Starting to see some voxel creators publish to Mona’s platform which recently launched a marketplace dedicated to 3D art. It’s great to see enthusiasm and emphasis on files. Openvoxels has collected a few of such works.

[![User Avatar](https://storage.googleapis.com/papyrus_images/930616fa7e02af4e088d1a19f5b09a849310882e8b6052581c088c790a6b88ba.jpg)](https://twitter.com/justinmmelillo)

[Justin Melillo ᯅ MONA](https://twitter.com/justinmmelillo)

[@justinmmelillo](https://twitter.com/justinmmelillo)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/justinmmelillo/status/1802421434331066612)

gm from this super slick stunt motorbike by @\_\_\_Philosopher\_ curated for this week’s [@monaverse](https://twitter.com/monaverse) claim!  
  
Free on Base (link in comments below)  
![🏍️](https://abs-0.twimg.com/emoji/v2/72x72/1f3cd.png) ![🔥](https://abs-0.twimg.com/emoji/v2/72x72/1f525.png)

![](https://pbs.twimg.com/amplify_video_thumb/1802421344447143936/img/SkCSFp5YZ-lvsIF8.jpg)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 11](https://twitter.com/justinmmelillo/status/1802421434331066612)[

3:22 PM • Jun 16, 2024

](https://twitter.com/justinmmelillo/status/1802421434331066612)

* * *

### Broken Links Everywhere

Midway through June citizens of [Voxels](https://www.voxels.com/) were hit by a bit of a shocking moment to discover broken links everywhere. It highlighted a point of failure due to file storage centralization. This day inspired jin to upload all vox models to arweave for posterity.

![source: https://x.com/dankvr/status/1802741370936820168](https://storage.googleapis.com/papyrus_images/3b4638e4c548496b9706573efe8f1f6d93be65e1e03f3b2089c1355cae623d4b.jpg)

source: https://x.com/dankvr/status/1802741370936820168

**Additional details**

*   There were 42341 unique vox models / ~1.6 GB in the snapshot
    
*   All parcel media links are very prone to link-rot: only 12144 of 205631 were hosted on ipfs/arweave (just 5%)
    
    *   Even IPFS has link rot issues as I've seen first hand when archiving Alotta Money's builds cuz he used a pinning service that shut down (eternum) 😞
        
*   Picked arweave to make a backup of all vox models to for posterity, images would of been too expensive at the moment
    
    *   There's ~75k unique images in-world, 100gb
        
    *   ~75 AR or roughly $2000 USD, not bad for a yearly archive…
        
*   It was just $31 in fees to upload all the vox models ([https://ar-fees.arweave.dev](https://ar-fees.arweave.dev))
    

* * *

### Wearables Art Contest

After previously converting all the wearables to svox and glTF 2.0 we launched an art contest for people to get hands on with the files and showcase interoperability. One major aspect was to think outside the box, use wearables in NEW ways: add them to other avatars, create Blender renders, import them into other game engines, make worlds with them, etc.

[![User Avatar](https://storage.googleapis.com/papyrus_images/1dc074b493d56fedbb44f6fa37e1ac56dab7fd709b64f30ea5d45ef466c8c0ee.jpg)](https://twitter.com/openvoxels)

[Openvoxels.eth](https://twitter.com/openvoxels)

[@openvoxels](https://twitter.com/openvoxels)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/openvoxels/status/1802469038305497366)

![🎨](https://abs-0.twimg.com/emoji/v2/72x72/1f3a8.png) Wearables Art Contest ![🎩](https://abs-0.twimg.com/emoji/v2/72x72/1f3a9.png)  
  
Showcase interoperability with new wearables glTF files with something unique, win prizes. Think beyond [@cryptovoxels](https://twitter.com/cryptovoxels): blender renders, custom avatars etc!  
  
Deadline: June 30th, submit here: [jokerace.io/contest/polygo…](https://t.co/nrvQnPbc6f)  
  
More info: [hackmd.io/@XR/wearables-…](https://t.co/RNd6Qc7R6q)

![](https://storage.googleapis.com/papyrus_images/2c9653af7db34f3a2ccf2c03d2ad386763e0461c2f87560e3bb9b40a9b9dc490.jpg)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 58](https://twitter.com/openvoxels/status/1802469038305497366)[

6:31 PM • Jun 16, 2024

](https://twitter.com/openvoxels/status/1802469038305497366)

Often the best way to learn things in crypto is to do things. The contest was also an opportunity for us to test pilot [Jokerace](https://www.jokerace.io/), a platform that makes it easy to launch programmable contests on-chain, and for us to field test our latest voting power recipe.

[https://www.jokerace.io/contest/polygon/0x80aa9bda9fb9e3fe262a2466bd4fee8086a3dec3](https://www.jokerace.io/contest/polygon/0x80aa9bda9fb9e3fe262a2466bd4fee8086a3dec3)

[**Voting** power](https://docs.google.com/spreadsheets/d/19Fab72iK5Ks9KeI_ArY79m0wxyL10s45obZr1FGnKKo/edit?usp=sharing) was calculated with a combination of data from parcel owners, wearables creators (based on how many you made, how many unique, how many ppl own), and Openvoxels supporters. The community voted for the winners competing for $1000 MATIC prize pool. Everyone who participated and voted also got a small gift ([Openvoxels pin](https://zora.co/collect/eth:0x889b4c8e99944e84a314427ed701bdf9f6bc55e6)) as a token of appreciation.

There were some interesting extestions that Jokerace offers which could be useful if we want to explore things like using Jokerace to elect people into governance positions or distribute automatic NFT rewards that people can claim for winning / voting.

![Overall Jokerace was pretty smooth, would recommend / use again](https://storage.googleapis.com/papyrus_images/522809325ac3405b94cba98f79fad8c300d01635aac1aa053f12d720f78f56f3.png)

Overall Jokerace was pretty smooth, would recommend / use again

Here’s a look at the winning contest entries. One was even interactive, see the claw machine made by [Anarchy Arcade](https://x.com/anarchyarcade)! [https://smsithlord.com/openvoxels/clawgame](https://smsithlord.com/openvoxels/clawgame)

![Top 5 winners from the Voxels Wearables Art Contest](https://storage.googleapis.com/papyrus_images/82622df77457f77c856d13ff76f2600e8d80746222f19c1b0a01bddeb5571ccc.jpg)

Top 5 winners from the Voxels Wearables Art Contest

* * *

July
----

### Updated Wearables Collection with New Metadata

We upgraded an existing wearables collection through polygonscan UI with new metadata, glTF files, previews (including AR/VR), and it didn't break [http://voxels.com](http://voxels.com) compatibility. Thanks for being brave pioneer Pointshark!

*   [https://www.voxels.com/collections/195](https://www.voxels.com/collections/195)
    
*   [https://opensea.io/assets/matic/0x713F649b88fF460Cbe12D55D68bEC1413438dA04/1](https://opensea.io/assets/matic/0x713F649b88fF460Cbe12D55D68bEC1413438dA04/1)
    
*   [https://rarible.com/token/polygon/0x713f649b88ff460cbe12d55d68bec1413438da04:1?tab=overview](https://rarible.com/token/polygon/0x713f649b88ff460cbe12d55d68bec1413438da04:1?tab=overview)
    

![The previews updated on Opensea / Rarible, everything still worked in Cryptovoxels. SUCCESS!](https://storage.googleapis.com/papyrus_images/967f47d615e7145b499b3060443ebcc0e098423e6e440e922e7a86176b3169cb.png)

The previews updated on Opensea / Rarible, everything still worked in Cryptovoxels. SUCCESS!

We have been also chatting with Justin from Monaverse and they were able to integrate the new wearables to their marketplace too. More marketplaces, more visibility and reach, better value for the creator and platforms to expand influence.

[![User Avatar](https://storage.googleapis.com/papyrus_images/dc3636a79d0f5310b60754053bc94a3f901f303b7c642b15291b8e8f1b64674e.jpg)](https://twitter.com/monaverse)

[MONA](https://twitter.com/monaverse)

[@monaverse](https://twitter.com/monaverse)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/monaverse/status/1817529716145901676)

It works so well! [@openvoxels](https://twitter.com/openvoxels) + [@cryptovoxels](https://twitter.com/cryptovoxels) + [@monaverse](https://twitter.com/monaverse) = ![🚀](https://abs-0.twimg.com/emoji/v2/72x72/1f680.png)![❤️](https://abs-0.twimg.com/emoji/v2/72x72/2764.png)  
Feat. Work by the incredible [@Pointshark1](https://twitter.com/Pointshark1) ![🔥](https://abs-0.twimg.com/emoji/v2/72x72/1f525.png)

![](https://pbs.twimg.com/amplify_video_thumb/1817529647539572736/img/2g1T_S2FN0fTiItf.jpg)

[![User Avatar](https://storage.googleapis.com/papyrus_images/1dc074b493d56fedbb44f6fa37e1ac56dab7fd709b64f30ea5d45ef466c8c0ee.jpg)](https://twitter.com/openvoxels)

[Openvoxels.eth](https://twitter.com/openvoxels)

[@openvoxels](https://twitter.com/openvoxels)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/openvoxels/status/1817252940228268525)

Upgrading the smart contract with the new wearables metadata has made it much easier for third party marketplaces like [@monaverse](https://twitter.com/monaverse) to integrate: [monaverse.com/collections/13…](https://t.co/IfQXpOoHyY)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 20](https://twitter.com/monaverse/status/1817529716145901676)[

7:57 AM • Jul 28, 2024

](https://twitter.com/monaverse/status/1817529716145901676)

* * *

### VRM Assembly Improvements

Made the wearables → VRM avatar pipeline more accurate than before. The step by step blender pipeline offers those working on digital fashion wearables for avatar interop a look at each step for converting between different coordinate systems and rotation orders of Babylonjs and Blender.

[![User Avatar](https://storage.googleapis.com/papyrus_images/e0ca7aab77b353b4c451dd7c3f44777894e4e50c6d6e42ae157c7ec83ab788a8.jpg)](https://twitter.com/dankvr)

[jin](https://twitter.com/dankvr)

[@dankvr](https://twitter.com/dankvr)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/dankvr/status/1815124152560300334)

Learned how to visualize blender scripts step by step, useful for debugging! Here's a vid of [@cryptovoxels](https://twitter.com/cryptovoxels) VRM assembly (avatar costume by [@ku614](https://twitter.com/ku614))

![](https://pbs.twimg.com/ext_tw_video_thumb/1815122278218088448/pu/img/hmGKbXMZxYT72OFB.jpg)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 78](https://twitter.com/dankvr/status/1815124152560300334)[

4:38 PM • Jul 21, 2024

](https://twitter.com/dankvr/status/1815124152560300334)

* * *

### News: Overture Maps Foundation Released Public Dataset

Huge public dataset release by folks from Microsoft, Meta, and Amazon working on an open-source mapping project as an alternative to mapping data provided by Google/Apple. Devs can access 2.3B unique buildings, 54MM POIs (point of interest), 200MM addresses, and more. Downloads are JSON that describes the shape of the data as well as features, geometries, properties, etc. Even without the satellite textures of Google/Apple products it still packs a ton of useful information.. [https://explore.overturemaps.org/#15/38.90678/-77.03649](https://explore.overturemaps.org/#15/38.90678/-77.03649)

[![User Avatar](https://storage.googleapis.com/papyrus_images/e0ca7aab77b353b4c451dd7c3f44777894e4e50c6d6e42ae157c7ec83ab788a8.jpg)](https://twitter.com/dankvr)

[jin](https://twitter.com/dankvr)

[@dankvr](https://twitter.com/dankvr)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/dankvr/status/1816525629489308036)

Curious by the similarities and differences from virtual land platforms like [@cryptovoxels](https://twitter.com/cryptovoxels). I wonder if lessons learned from experimenting with fantasy land can transcend into real world use cases / network states

![](https://storage.googleapis.com/papyrus_images/b9961450db41c723d2955e14b08978af477611ff545bd84a49945c32d121ea77.jpg)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 8](https://twitter.com/dankvr/status/1816525629489308036)[

1:27 PM • Jul 25, 2024

](https://twitter.com/dankvr/status/1816525629489308036)

In a way I see these blockchain based virtual worlds sort of like a fantasy simulation for independent researchers exploring digital property ownership via smart contracts vs traditional legal structures / title deeds. All feels relevant to building [The Network State](https://thenetworkstate.com/).

* * *

August
------

> Voxels team is now just Ben: [https://x.com/cryptovoxels/status/1819138618780536908](https://x.com/cryptovoxels/status/1819138618780536908)

### Fixed Issue for Voxels VRM Sprites

A long time ago Voxels implemented an avatar imposter system that replaced distant avatars with a sprite to improve rendering performance. However, the sprite had no resemblance to your costume so every low-performance mode avatar looked the same.

[![User Avatar](https://storage.googleapis.com/papyrus_images/20d8929f46644563bbf5a364e2e06d75193430baf1f0393ff697014af0eda9fd.jpg)](https://twitter.com/cryptovoxels)

[Cryptovoxels](https://twitter.com/cryptovoxels)

[@cryptovoxels](https://twitter.com/cryptovoxels)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/cryptovoxels/status/1242944487422214145)

As part of scaling up, Marcus has made this 'sprite billboard system' that can render 100s of avatars on even low end machines.  
  
Nearby avatars will be animated, distant ones will be a sprite like this. So awesome! ![🎉](https://abs-0.twimg.com/emoji/v2/72x72/1f389.png)

![](https://pbs.twimg.com/ext_tw_video_thumb/1242944345918955520/pu/img/jtU8RqQEeK8clZl9.jpg)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 39](https://twitter.com/cryptovoxels/status/1242944487422214145)[

6:40 PM • Mar 25, 2020

](https://twitter.com/cryptovoxels/status/1242944487422214145)

This type of system is a relatively common technique for scaling the number of concurrent users in instances by the way. If you want to learn more see this dev log:

[

Avatar LOD - HackMD
-------------------

Technical concepts to scale the number of simultaneous users per virtual worlds by an order of magnitude.

https://hackmd.io

![](https://storage.googleapis.com/papyrus_images/69219a301f4ea98f27e9f3b673e4f856a398711f1cc58d1d1d561dafdc70c2a1.png)

](https://hackmd.io/@XR/avatarlod)

However, usually these sprites are platform locked-in. What if you could generate a low poly version of your avatar and we worked towards standardization of avatar LOD? We implemented such a feature into Character Studio recently, here’s the [docs page](https://m3-org.github.io/characterstudio-docs/docs/Modders/manifest-files/vrm-to-spritesheet).

[![User Avatar](https://storage.googleapis.com/papyrus_images/e0ca7aab77b353b4c451dd7c3f44777894e4e50c6d6e42ae157c7ec83ab788a8.jpg)](https://twitter.com/dankvr)

[jin](https://twitter.com/dankvr)

[@dankvr](https://twitter.com/dankvr)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/dankvr/status/1801621883713962184)

WIP VRM -> sprite sheet pipeline via character studio. This time the code has been refactored to be more modular / inspired by Unix philosophy  
  
Drag n drop VRM, custom animations supported, export zip with sprites ![👾](https://abs-0.twimg.com/emoji/v2/72x72/1f47e.png) [#threejs](https://twitter.com/hashtag/threejs) [#webgl](https://twitter.com/hashtag/webgl)

![](https://pbs.twimg.com/ext_tw_video_thumb/1801617509344219136/pu/img/Udx2Cse722nuE5R9.jpg)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 43](https://twitter.com/dankvr/status/1801621883713962184)[

10:25 AM • Jun 14, 2024

](https://twitter.com/dankvr/status/1801621883713962184)

We processed all the Voxels VRMs through Character Studio in order to generate sprite sheets from them. Added a couple toe bones to the VRMs and re-exported them all so that the walk animation cycle was stable.

![](https://storage.googleapis.com/papyrus_images/cbc7a20c912ee643b6d660c4b1f3c16e25306c2869793a5035c8ca4af81d8bd7.png)

Every Voxel VRM will also get a sprite sheet version of their costume.

* * *

### Openvoxels mentioned in Bankless

Context: following the announcement of the indie game studio [VIPE shutting down](https://x.com/dankvr/status/1828464952593592824), there was a Bankless post about building a sustainability and highlighted Openvoxels as one of the projects to check out.

[![User Avatar](https://storage.googleapis.com/papyrus_images/1dc074b493d56fedbb44f6fa37e1ac56dab7fd709b64f30ea5d45ef466c8c0ee.jpg)](https://twitter.com/openvoxels)

[Openvoxels.eth](https://twitter.com/openvoxels)

[@openvoxels](https://twitter.com/openvoxels)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/openvoxels/status/1820221964512075879)

Openvoxels mentioned ![👀](https://abs-0.twimg.com/emoji/v2/72x72/1f440.png)  
  
"The group works to preserve Voxels artifacts and cultures, and it develops case study builds and new collaborative functionalities around Voxels assets."  
  
Hopefully our case studies prove useful beyond Voxels someday. Overall a good and sobering read ![🙏](https://abs-0.twimg.com/emoji/v2/72x72/1f64f.png)

[![User Avatar](https://storage.googleapis.com/papyrus_images/0e0834d1d221073b724499c71596ecb5da0c3e1ca263758f89aed2ea0d39e508.jpg)](https://twitter.com/BanklessHQ)

[Bankless](https://twitter.com/BanklessHQ)

[@BanklessHQ](https://twitter.com/BanklessHQ)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/BanklessHQ/status/1820190855212212610)

Building a Sustainable Metaverse ![🏗️](https://abs-0.twimg.com/emoji/v2/72x72/1f3d7.png)![🌐](https://abs-0.twimg.com/emoji/v2/72x72/1f310.png)  
  
Lessons from the Virtual Land Collapse  
  
\=========================================  
  
This week [@polygonalmind](https://twitter.com/polygonalmind), the team behind [@vipeio](https://twitter.com/vipeio), [@cryptoavatarsio](https://twitter.com/cryptoavatarsio), and countless other virtual experiences, announced they were closing up shop because of

![](https://storage.googleapis.com/papyrus_images/b04902a5111c7edb07c02c1fe37452777f8d265a561b682ca2789a65a952a644.jpg)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 3](https://twitter.com/openvoxels/status/1820221964512075879)[

6:15 PM • Aug 4, 2024

](https://twitter.com/openvoxels/status/1820221964512075879)

### Parcel Optimization Testing

Tested out [needle cloud](https://cloud.needle.tools/) and [gltf-transform](https://gltf-transform.dev/) on how well they can optimize a glTF export of a Voxels parcel. Below is parcel 174 which is a sample that Ben released last year when working on glTF export.

*   Original size: 43.32 MB
    
*   Needle Cloud Optimized: 5.58 MB
    
*   gltf-transform optimize command: 7.45 MB
    

![https://cloud.needle.tools/](https://storage.googleapis.com/papyrus_images/6add14db4c4a5b89dac20e03d261b036e03d7462555ddf5f5f19e5af88adb51d.png)

https://cloud.needle.tools/

* * *

### Voxels Passports

Earlier in June we had an idea to generate 3D passports to go with the VRMs since most marketplaces don’t have a great VRM viewer yet. The passport would have all the information about the avatar contained within it. Well later we decided to work on it.

[![User Avatar](https://storage.googleapis.com/papyrus_images/1dc074b493d56fedbb44f6fa37e1ac56dab7fd709b64f30ea5d45ef466c8c0ee.jpg)](https://twitter.com/openvoxels)

[Openvoxels.eth](https://twitter.com/openvoxels)

[@openvoxels](https://twitter.com/openvoxels)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/openvoxels/status/1804342687929102415)

Idea pitch for [@cryptovoxels](https://twitter.com/cryptovoxels) avatars:  
\- costume data embedded in VRM + NFT metadata  
\- NFT art styled like a passport (maybe even 3d)  
\- vrm\_url in metadata  
\- link to sprite sheet in metadata  
\- maybe [@MSquared\_io](https://twitter.com/MSquared_io) support later  
\- airdropped to openvoxels supporters  
  
Voxels Passports

[![User Avatar](https://storage.googleapis.com/papyrus_images/1dc074b493d56fedbb44f6fa37e1ac56dab7fd709b64f30ea5d45ef466c8c0ee.jpg)](https://twitter.com/openvoxels)

[Openvoxels.eth](https://twitter.com/openvoxels)

[@openvoxels](https://twitter.com/openvoxels)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/openvoxels/status/1794453441374196130)

VRMs of current openvoxels supporters are ready, can request early access if you donated to the juicebox [juicebox.money/@openvoxels](https://t.co/RhaSI2DIbR)  
  
Thinking about doing a NFT collection for all the Voxel avatars, need to brainstorm more on how it can work

![](https://storage.googleapis.com/papyrus_images/228c1dc7dc1ab1e3235f9a77ef5dd5f62d0080d97d94c43b524ec13fbe1cbe6d.jpg)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 7](https://twitter.com/openvoxels/status/1804342687929102415)[

10:36 PM • Jun 21, 2024

](https://twitter.com/openvoxels/status/1804342687929102415)

[7OROY](https://x.com/7oroy) created an animated 3D passport in multiple different colors. We are thinking information about the owner of the costume like the ETH address + costume ID can fill some of the forms, and have information about currently equipped wearables also like a RPG inventory system. We generated a portrait picture of each VRM to replace the placeholder picture as well.

![Preview of Voxels Passports, coming soon](https://storage.googleapis.com/papyrus_images/23fa6bb4751462bbd44270f59204bc8564f63c8fa88418970083a0cb33ebb83b.jpg)

Preview of Voxels Passports, coming soon

* * *

September
---------

Published a new post on 'transition thinking' and how niche projects like Openvoxels can be an agent for change: [https://mirror.xyz/m3org.eth/Mo9plGOkHyUSMObl3GPWpiwdX\_XbJmQxdAB9kwnoZFA](https://mirror.xyz/m3org.eth/Mo9plGOkHyUSMObl3GPWpiwdX_XbJmQxdAB9kwnoZFA)

> Openvoxels aims to serve as a showcase for the potential benefits and challenges of granting users more ownership over our in-world items, a radical concept in the gaming industry. So far we’ve been influential in wider adoption of glTF and VRM, popular open file formats for content and avatars to move between immersive virtual world platforms.

![](https://storage.googleapis.com/papyrus_images/8678dbae63b0aa56125382aae2fe26f97aab22ea59b93c33d54aefffdb471dbb.jpg)

* * *

### Optimized Voxels VRMs + Metadata

We fixed a few bugs in Character Studio in order to optimize the Voxel VRM avatars to be 1 draw call each and hit a file size that can allow users to upload to all the major VRM supported web platforms including Oncyber which has a pretty strict upload limit.

All of the costumes were uploaded to arweave and get included in the reference field for the VRM metadata. The costumes contain information about the wearables such as the contract address + ID and the bone + transform data for where it’s attached to.

![Example metadata that comes with every VRM](https://storage.googleapis.com/papyrus_images/681d5757e3d86cdebda273f55a49c51212d4898b937885231f12c007da38b688.png)

Example metadata that comes with every VRM

This may seem like a small detail but it’s one I think is pretty important in terms of setting a standard. The optimization tools we used were stripping out metadata that we encoded into the VRMs, so we took a day to fix it in order to preserve that information throughout the whole cycle. Digital preservation / attribution is a pillar of the cryptoart scene, is it not?

**VRM + KTX2 / Draco**

There will be 2 versions of the 3D Voxel avatars:

*   Original (LOD0): Separate meshes + materials per wearable
    
*   Optmized (LOD1): Join meshes + materials, apply draco + KTX2 for smaller file size
    

![On the left: VRM metadata preserved in optimized version, tested in Hyperfy / Oncyber also](https://storage.googleapis.com/papyrus_images/29e7dcdb15df06aa069cb13cf407dd12c58f70b09da4bd51ccafd8b6a593fdfd.png)

On the left: VRM metadata preserved in optimized version, tested in Hyperfy / Oncyber also

All the avatars have been baked to 1 draw call each and uploaded to arweave. These optimizations allow platforms to render many more of them in a scene with better performance, as seen here in this stress test using an engine built on threejs.

[![User Avatar](https://storage.googleapis.com/papyrus_images/1dc074b493d56fedbb44f6fa37e1ac56dab7fd709b64f30ea5d45ef466c8c0ee.jpg)](https://twitter.com/openvoxels)

[Openvoxels.eth](https://twitter.com/openvoxels)

[@openvoxels](https://twitter.com/openvoxels)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/openvoxels/status/1831685589608935825)

Stress testing 150 Voxels VRMs with [@AshConnell](https://twitter.com/AshConnell) ![😎](https://abs-0.twimg.com/emoji/v2/72x72/1f60e.png)

![](https://pbs.twimg.com/ext_tw_video_thumb/1831685049143455744/pu/img/M41mEodn27L-Q-B1.jpg)

[![User Avatar](https://storage.googleapis.com/papyrus_images/1dc074b493d56fedbb44f6fa37e1ac56dab7fd709b64f30ea5d45ef466c8c0ee.jpg)](https://twitter.com/openvoxels)

[Openvoxels.eth](https://twitter.com/openvoxels)

[@openvoxels](https://twitter.com/openvoxels)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/openvoxels/status/1831122153665700093)

Optimizing all Voxel VRMs, each will be 1 draw call  
Texture atlas + KTX2 + Draco, ~60% smaller file size  
  
Planning to provide original full size for customization + optimized versions for web in the NFT metadata. Gotta get platforms to somehow prioritize the optimized ones though

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 53](https://twitter.com/openvoxels/status/1831685589608935825)[

9:27 AM • Sep 5, 2024

](https://twitter.com/openvoxels/status/1831685589608935825)

* * *

Project TBA
-----------

M3 is starting to explore the beginning of a protocol / virtual world builder inspired by The Street from Snow Crash. If you’ve read this far you deserve to know some details:

*   Voxel editor for world building accessibility
    
*   VRM avatars for self expression
    
*   glTF export day 1 (and regular world snapshots)
    

[![User Avatar](https://storage.googleapis.com/papyrus_images/1dc074b493d56fedbb44f6fa37e1ac56dab7fd709b64f30ea5d45ef466c8c0ee.jpg)](https://twitter.com/openvoxels)

[Openvoxels.eth](https://twitter.com/openvoxels)

[@openvoxels](https://twitter.com/openvoxels)

[![Twitter Logo](https://paragraph.com/editor/twitter/logo.png)](https://twitter.com/openvoxels/status/1832101794043879796)

the start of a basic voxel editor

![](https://pbs.twimg.com/ext_tw_video_thumb/1832101448290615296/pu/img/r6oPP8dQvJ2AvzWs.jpg)

 [![Like Icon](https://paragraph.com/editor/twitter/heart.png) 34](https://twitter.com/openvoxels/status/1832101794043879796)[

1:01 PM • Sep 6, 2024

](https://twitter.com/openvoxels/status/1832101794043879796)

Not planning to sell anything anytime soon. We aim to dogfood internally first (if you want to join M3 join [the server](https://m3org.com/discord) and [git gud](https://github.com/M3-org/git-gud)) and then gradually open it up. That’s all we’ll say for now.

* * *

Big shoutout to all of our supporters, including a few new ones that recently donated to [Openvoxels juicebox](https://juicebox.money/@openvoxels): Thank you octobar, curatorofcool, and DAPPCRAFT!!

[

Juicebox | Fund Your Thing
--------------------------

Juicebox is the programmable funding platform for crypto and web3. Fund, operate, and scale your project transparently. Community DAO owned, on Ethereum.

https://juicebox.money

![](https://storage.googleapis.com/papyrus_images/1e2c56277151ec0afd1c5dba6f7ec4735e388b065c8e875d6deba9dc74d8eb67.png)

](https://juicebox.money/@openvoxels)
```

## File: docs/the-wearables-museum/content.md
```markdown
**Quick summary of wearables 2.0:**

*   Upgraded file formats
    
    *   glb with encoded xmp metadata in addition to vox
        
*   Upgraded to decentralized storage
    
    *   From [voxels.com](http://voxels.com) to arweave for all assets
        
*   Upgraded thumbnails
    
    *   Transparent gifs, ~9x smaller file size + 50% bigger resolution
        
*   Upgraded previews
    
    *   HTML files hosted on arweave with AR+VR previews
        
*   Upgraded metadata
    
    *   Updated the links, added fields like glb + collection info
        

[![](https://paragraph.com/editor/youtube/play.png)](https://www.youtube.com/watch?v=EEmDpi8BPxg)

**New thumbnails**

50% bigger resolution, 5x smaller filesize, transparent background, still GIF format.

![The thumbnails for all the wearables have been completely remade](https://storage.googleapis.com/papyrus_images/f59b73f77128d22fa77d9f698fc1ba00ef7189db4976c75b8c289cb89989c1bf.gif)

The thumbnails for all the wearables have been completely remade

**New previews**

Different skyboxes to represent the years a wearables collection was minted. Each skybox is a 360 equirectangular picture from a VRChat world that Voxels content was ported into and reflects the era:

*   2019-2020: Black and white era
    
*   2021: Color emerges, calm before the storm
    
*   2022: NFT and metaverse hype cycle peaks
    
*   2023: Desert to represent the winter that followed
    
*   2024: Half voxels half sea to represent WIP year + islands
    

View a demo: [https://arweave.net/DQzDSe2GFKopqmFOuwdefIWA53dtt6wy-6k609QiMg4](https://arweave.net/DQzDSe2GFKopqmFOuwdefIWA53dtt6wy-6k609QiMg4)

![Different skyboxes per year the collection was minted ](https://storage.googleapis.com/papyrus_images/8a9fd84f65959f6f39612216ee2f15cb2f952a85460335263a8f47a486a04f52.gif)

Different skyboxes per year the collection was minted

**AR + VR Support via glTF and USDZ**

Every wearable can now be previewed in AR and VR. Tested across android and IOS devices including the Apple Vision Pro.

![You can view the wearables via Safari on ios and Apple Vision Pro](https://storage.googleapis.com/papyrus_images/b1eccc652af18f7471cc9910f844e5c758b0f658a82623c46adb6551383c2a2b.gif)

You can view the wearables via Safari on ios and Apple Vision Pro

**New metadata**

The NFT metadata for every wearable across every collection in the snapshot has been updated. On the right is a preview of the new metadata with arweave links and new metadata fields such as glb, collection, year, and animation\_url for the HTML preview.

![On the left is the old metadata, on the right is the new metadata with arweave links, glb link, collection metadata, and a link to the HTML preview](https://storage.googleapis.com/papyrus_images/d6ebe818ed9b598d201e454037a642c4e605eb8470c38b8406541df0f5083cf0.jpg)

On the left is the old metadata, on the right is the new metadata with arweave links, glb link, collection metadata, and a link to the HTML preview

Mission complete!


Blockchain Snapshot and Stewardship
-----------------------------------

Date taken: **March 12, 2024**

*   [**https://docs.google.com/spreadsheets/d/19Fab72iK5Ks9KeI\_ArY79m0wxyL10s45obZr1FGnKKo/edit?usp=sharing**](https://docs.google.com/spreadsheets/d/19Fab72iK5Ks9KeI_ArY79m0wxyL10s45obZr1FGnKKo/edit?usp=sharing)
    
    *   [https://www.voxels.com/collections](https://www.voxels.com/collections)
        
          
        

![image](https://storage.googleapis.com/papyrus_images/4097733d5857cbbf6073a68242c7c22d16e6b90e08a8bad3f4c6a7c871a1e9b7.png)

The Cryptovoxels community has designed over **34,000** unique wearables to **111,557 collectors** holding a total of 350,263 NFTs!

For sake of comparison, Decentraland has about **6840** unique wearables designs (Dune sources say ~10k) made by ~1587 creators and have about **4531 collectors**.

**Number of Cryptovoxels wearables minted per year:**

*   2020: 3138
    
*   2021: 21792
    
*   2022: 8621
    
*   2023: 438
    
*   2024: 26 (as of snapshot date)
    

### Points

Each [voxels parcel](https://etherscan.io/token/0x79986af15539de2db9a5086382daeda917a9cf0c#balances) owned is 1 point = 7,937 Wearbles creator impact (see below) = 11,867 Total = 19804

I asked chatgpt to help me come up with an algorithm for distributing voting power amongst wearables creators:

> To create a fair distribution of points based on the impact of minted NFTs, considering factors such as the number of NFTs minted, the number of unique tokens, and the number of owners, you can use a weighted scoring system. Here's a suggested algorithm:
> 
> Normalize the data: Normalize each of the three metrics (Number of NFTs, Unique Tokens, Number of Owners) to a common scale between 0 and 1. You can use min-max normalization for this purpose.
> 
> Assign weights: Assign weights to each normalized metric based on their importance in determining impact. These weights can be subjective and depend on your specific use case. For example, you may decide that the number of NFTs minted is more important than the number of owners.
> 
> Calculate scores: Calculate a composite score for each address by multiplying each normalized metric by its corresponding weight and summing them up.
> 
> Distribute points: Allocate points to each address based on their composite score. You can distribute points proportionally or use a different method based on your preference.

We then round the points and add +1 for sake of being a wearables creator. For transparency sake, this is the python code that was used to calculate the results:

    import pandas as pd
    from sklearn.preprocessing import MinMaxScaler
    
    # Read data from CSV file
    df = pd.read_csv('creators.csv')
    
    # Normalize the data
    scaler = MinMaxScaler()
    df[['Number of NFTs', 'Unique Tokens', 'Number of Owners']] = scaler.fit_transform(df[['Number of NFTs', 'Unique Tokens', 'Number of Owners']])
    
    # Define weights
    weights = {
        'Number of NFTs': 0.3,
        'Unique Tokens': 0.2,
        'Number of Owners': 0.5
    }
    
    # Calculate composite score
    df['Composite Score'] = (df['Number of NFTs'] * weights['Number of NFTs']) + (df['Unique Tokens'] * weights['Unique Tokens']) + (df['Number of Owners'] * weights['Number of Owners'])
    
    # Distribute points based on composite score
    total_points = 10000  # Total points to distribute
    df['Points'] = (df['Composite Score'] / df['Composite Score'].sum()) * total_points
    
    # Round the points and convert to integers
    df['Points'] = df['Points'].round().astype(int)
    
    # Add 1 point to each address
    df['Points'] += 1
    
    # Export results to CSV
    df[['Minted Address', 'Points']].to_csv('results.csv', index=False)
    
    print("Results exported to 'results.csv'.")

**Snapshot strategies**

In addition to a standard strategy for who owns a Voxels parcel, we implemented the whitelist weighted strategy that incorporated the points calculated in the steps above for wearables creators to have a strong voice in voting.

    whitelist weighted
    {
      "symbol": "ABC",
      "addresses": {
        "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11": 5,
        "0xeF8305E140ac520225DAf050e2f71d5fBcC543e7": 2
      }
    }


Distribution Strategies
-----------------------

What is the next step? Here's a couple ideas I got:

### **1\. Create a guide for creators to update collections themselves**

The creator of a collection **overwrites** the existing NFT metadata with the new metadata, thereby upgrading the NFTs everyone already has to the new decentralized versions.

![This strategy is like overwriting the old NFTs by writing to the contract](https://storage.googleapis.com/papyrus_images/57a54d127b112c9830a0f59dc7d225304dc20a341e0aa567c8467782256843c0.png)

This strategy is like overwriting the old NFTs by writing to the contract

**Benefits:**

*   no remint, just update existing contracts
    
    *   1 time transaction vs airdropping
        
    *   maintain provenance, collectors already have it
        
*   unsold copies can find new market value as durable and interoperable wearables
    

**Downsides:**

*   Will it break things in [voxels.com](http://voxels.com)? Need to test
    
    *   can still have `vox` as trait\_type
        
    *   could create a baseURI like `https://www.cryptovoxels.com/c/7/{id}` with Arweave for linking to the metadata
        
*   Would still be hard to update all collections
    
*   Could look messy if mix of old + new wearables
    


### **2. Create a new wearable collection on a L2**

Similar to a fork. It would not be an upgrade to the Voxels wearables, but rather a new collection to immortalize a **_SNAPSHOT_** of all the wearables. This option is like having an on-chain mirror.

![Left to right = old to new. We can consolidate all the collections to 1 for the snapshot, and a DAO to steward it](https://storage.googleapis.com/papyrus_images/16285a4355ca062f9e1285e8582190a3bc4733fcd6d7e437b3d505daaa6c7dea.png)

Left to right = old to new. We can consolidate all the collections to 1 for the snapshot, and a DAO to steward it

**Benefits:**

*   Full upgrade: All wearables 2.0 would look really nice together
    
*   Immortalize the whole snapshot of wearables as a NFT collection
    
*   Can airdrop or allow list previous owners to mint or burn redeem?
    
*   Unsold copies can find new market value as durable and interoperable wearables
    
    *   Use a splits contract to pay creators from sales?
        

**Downsides:**

*   It might be confusing when searching for a wearable to see 2 similar results
    
*   100k+ collectors, many might not know + still expensive to airdrop
    
*   It turns 800 creator owned collections into 1 collection
    
    *   Perhaps this can be seen as a good thing for discoverability!
        

### **3\. Create a NFT Avatar Collection**

We mint all costumes as VRM avatar NFTs and create a pool of shared assets to generate into new avatars. The mannequin base mesh can be an OG trait, but we don't have to be limited to it.

![Old gif of boom tools to represent creating an NFT avatar collection for Voxels](https://storage.googleapis.com/papyrus_images/96ece510bbb6e831613ec855c2401f5ba0a3fe6d6ac2240c7807b79ec830ba80.gif)

Old gif of boom tools to represent creating an NFT avatar collection for Voxels

**Benefits**

*   By minting avatars, not wearables, we can reduce some confusion
    
    *   No duplicate wearables in marketplace
        
*   Can broaden the appeal of Voxels to new people
    
*   We can make the collection look absolutely stunning
    
*   Feels fun and innovative, like metaverse passports + immigration cards
    
*   This option can potentially pair with another option
    
*   Can use splits contract to drive sales to a DAO
    

**Downsides**:

*   There's a lot of wearables, not all of them might make it in
    
*   What would be a fair split?
    
    *   Maybe based on number of factors: wearables contributed, support for openvoxels, etc
        
*   Might be hard to get permission to use wearables from a bunch of creators?
    

Costume -> VRM Avatar Export
----------------------------

For sake of posterity, since a whole post could be dedicated to this topic, here is a preview of Voxels costumes to VRM export. VRM avatars from costumes have been made and hand tailored for finishing touches for all Openvoxels supporters. We also exported VRM avatars for all parcel holders. What we do next is TBD

Citizens of [@cryptovoxels](https://twitter.com/cryptovoxels), I've achieved VRM export
  
Takes in a costume JSON, converts the skin to texture, bakes the glTF wearables, and exports a working VRM [#screenshotsaturday](https://twitter.com/hashtag/screenshotsaturday) [#blender](https://twitter.com/hashtag/blender) [@openvoxels](https://twitter.com/openvoxels)

![](https://pbs.twimg.com/ext_tw_video_thumb/1776861920970096640/pu/img/qNXBtyHUCklbG8dk.jpg)

2:38 AM • Apr 7, 2024



### Support Openvoxels

Donate to our juicebox, get $OPENVOX tokens, which can be used for minting exclusive swag. I think we will also give Openvoxels supporters voting power in our [snapshot](https://snapshot.org/#/openvoxels.eth) in the future. After shipping wearables and VRM avatar exports, there’s a few exciting paths we can take on what to focus on next that could use your input!

[https://juicebox.money](https://juicebox.money/@openvoxels)

Juicebox | Fund Your Thing
--------------------------

Juicebox is the programmable funding platform for crypto and web3. Fund, operate, and scale your project transparently. Community DAO owned, on Ethereum.



![](https://storage.googleapis.com/papyrus_images/1e2c56277151ec0afd1c5dba6f7ec4735e388b065c8e875d6deba9dc74d8eb67.png)


Last note: I think we will be doing an art contest for wearables soon, stay tunes and follow [Openvoxels](https://twitter.com/openvoxels) on X for more info!

![](https://storage.googleapis.com/papyrus_images/266b06a25d53da7833774094a0b2df15ae8f0b0615e40a7f92c2662f1a1d1591.png)
```

## File: docs/wearables-wip-voxia/content.md
```markdown
### The WIP Meetup Summary

Openvoxels has been working on interoperability and archiving in the virtual world of Cryptovoxels (Voxels) since 2018. We see Voxels as an iconic shelling point and mecca for crypto artists and collectors, capturing the early spirit of the crypto art movement. Our project aims to spread Voxels culture across the metaverse by porting the city, taking snapshots, and exporting to VRChat, JanusWeb, Hyperfy, NeosVR, and even Fortnite. Openvoxels serves a dual purpose, one as an art project exploring the meaning of true digital ownership in practice and the other as developing infrastructure for preserving virtual worlds / digital cultural artifacts.

![Everyone who mints a mirror post will get a gold trimmed 3D NFT version of the post soon](https://storage.googleapis.com/papyrus_images/d2133332ff0f1563c0106cead4da36960cd6b64b206bd0202549c5cdcebbf8f2.jpg)

Everyone who mints a mirror post will get a gold trimmed 3D NFT version of the post soon

There's valid concern about the longevity and centralization of content in Voxels due to proprietary formats, centralized storage, and hosting. We want to provide reassurance that creators' works will stand the test of time. To address this, we have converted thousands of wearables to glTF format, created a Wearables Explorer, encoded metadata, upgraded thumbnails, and added HTML previews for AR/VR compatibility. We are also data mining information on wearable creators, ownership, parcels, and editing activity to create a point system for community governance and voting.

![https://docs.google.com/spreadsheets/d/19Fab72iK5Ks9KeI_ArY79m0wxyL10s45obZr1FGnKKo/edit?usp=sharing](https://storage.googleapis.com/papyrus_images/c0ae14d2943b782689211779d552bf026110342f372761a195234f0255e3e107.png)

https://docs.google.com/spreadsheets/d/19Fab72iK5Ks9KeI\_ArY79m0wxyL10s45obZr1FGnKKo/edit?usp=sharing

We are developing a digital museum showcasing Voxel's history from 2019 to the present. We have taken a full world snapshot of Voxels, including avatars, parcels, vox models, and images, and uploading to Arweave for a planned living museum. We converted all costumes to VRM format as well as animated sprite sheets. Additionally, we have downloaded every Womp (a type of in-world photograph) with metadata and plan to have them floating in their original locations within 3D time capsules.

![Future art project concept to be made with womps + parcels, blending past / future](https://storage.googleapis.com/papyrus_images/dbb8fb3bd1973ef457c3c04977fe822478403dfaed223dd69abbd7f6051773c2.png)

Future art project concept to be made with womps + parcels, blending past / future

Looking to the future, we're working on a new, highly optimized ground-up metaverse client with features like dynamic objects, physics, procedural generation, fast loading, and version control via daily glTF snapshots. We are considering a Metaverse Burning Man-inspired event with building, night mode, and neon vehicles.

![](https://storage.googleapis.com/papyrus_images/8c69a913f0045243222182848e72f39597306668458f3d39ef9d1ac435c2675b.png)

My next goal is to help Ash by developing an economic plan to open-source the core engine and features, drive adoption, reward early adopters, and grow organically while staying open and decentralized. We're close to finishing OpenVoxels VRMs, which we plan to airdrop to our supporters to help spread Voxels culture to more corners of the internet.

Speaking of airdrops, we rewarded everyone that signed the guestbook at the WIP meetup with one of these VHS tapes.

[https://x.com/openvoxels/status/1839389856415568116](https://x.com/openvoxels/status/1839389856415568116)

* * *

Voxels Wearables Economy
------------------------

I did some number crunching based on public data to learn more about the overall economy of the voxels wearables ecosystem. The scripts used are released here: [https://github.com/madjin/Cryptovoxels-snapshots](https://github.com/madjin/Cryptovoxels-snapshots)

For every wearables collection I was able to generate a JSON that looks like this:

![Left = example of ETH wearables collection, Right = example of Polygon wearables collection](https://storage.googleapis.com/papyrus_images/b33210cdd7af4da828acb1f08ebe19c1fb297d6f6823c7690c1cf3245a7a58bc.jpg)

Left = example of ETH wearables collection, Right = example of Polygon wearables collection

Here's what I found:

*   Around 302,650 users logged in voxels with a wallet
    
    *   9762 avatars equipped atleast 1 wearable
        
    *   6539 had no wearables, but still modified avatar
        
    *   1207 unique parcel owners with avatars + wearables
        

**Total Initial Sales**

First time buy / mint for a cryptovoxels wearables, calculated across all 891 wearables collections:

*   Polygon (836 collections): **1329.27 MATIC**
    
*   Ethereum (57 collections): **124.65 ETH**
    

~$200-300k USD

**Total Volume**

*   Polygon: 289,264.43 MATIC
    
*   Ethereum: 389.56 ETH
    

Here's how many users equipped wearables and the wearables revenue _for creators_ looks like compared to parcels revenue _for the platform_:

![Basically the Wearables Economy is tiny compared to LAND](https://storage.googleapis.com/papyrus_images/396abb164e3d9ae09d9a397a863cc2167cd39380bb0c031f3377a89965bca8ce.png)

Basically the Wearables Economy is tiny compared to LAND

> Voxels wearables revenue for creators is around 1% what LAND was for the platform ($22M in 2022) according to this Kent Bye interview: [https://voicesofvr.com/1117-deconstructing-voxels-formerly-cryptovoxels-virtual-land-speculation-the-experiential-gap-of-crypto-based-metaverse-neighborhoods/](https://voicesofvr.com/1117-deconstructing-voxels-formerly-cryptovoxels-virtual-land-speculation-the-experiential-gap-of-crypto-based-metaverse-neighborhoods/)

Since the money is obviously in parcels it becomes a huge incentive driver for the platform to focus attention / developer resources into that. We want to prove a case that there can be a market for wearables, but first they must be more durable and interoperable.

Now that we have our base numbers, we're more prepared to measure Openvoxels impact on stimulating the wearables economy after we launch our solutions.

![](https://storage.googleapis.com/papyrus_images/a013791d2488dae9e8a6d804c91cc6c2f2dddce7d98813e91421eb944fb41930.png)

Archiving
---------

Uploaded 2024 snapshot to sketchfab + arweave + github

*   [https://github.com/madjin/Cryptovoxels-snapshots/tree/master/3-25-24](https://github.com/madjin/Cryptovoxels-snapshots/tree/master/3-25-24)
    
*   [https://skfb.ly/prr6B](https://skfb.ly/prr6B)
    
    *   [https://github.com/sketchfab/blender-plugin](https://github.com/sketchfab/blender-plugin)
        

![](https://storage.googleapis.com/papyrus_images/b842057db9d0fcd1bf3c50835d556aee94b97fa2b6171bebd759c249ee1e5576.png)

Voxia
-----

Voxia is a project codename for the new thing Ash / M3 is working on. We started to playtest with other M3 members. Here's a bit more information that was shared during the WIP meetup:

*   Jin / Ash / M3 working on it
    
*   Version control via glTF snapshots
    
*   Repurposing learning / components from Hyperfy
    
    *   collaborative building
        
    *   in-world scripting
        
    *   powerful optimization features
        
*   Will be doing series of stress tests soon
    
*   Aiming for performance and durability first
    

![Building that Sith made in Project Voxia](https://storage.googleapis.com/papyrus_images/718e6208f90c4076c216a7c0f8723abf0ee85c0d00ab53dce43d886e8398cdc7.png)

Building that Sith made in Project Voxia

VR support is also working using the WebXR API. This is prior to several other optimizations yet to be deployed which will push FPS to 90. [https://x.com/openvoxels/status/1839453991513539023](https://x.com/openvoxels/status/1839453991513539023)

Raw Footage
-----------

Here’s the raw recording if you want to watch / listen:

[https://www.youtube.com/live/n74Nu9HIjHE?feature=shared](https://www.youtube.com/live/n74Nu9HIjHE?feature=shared)

*   \[**17:10**\] OpenVoxels landed in Voxels 6 years ago, interested in interoperability and using it as a test bed for OpenMetaverse experiments (original 2:05)
    
*   \[**17:36**\] Settled in Makers District, archiving the area since day one (original 2:31)
    
*   \[**18:14**\] Voxels is iconic, a mecca for crypto artists and collectors, the first place artists could set up NFT galleries (original 3:09)
    
*   \[**19:13**\] As Voxels grew, it captured the early spirit of the crypto art movement (original 4:08)
    
*   \[**19:43**\] OpenVoxels is porting the city, taking snapshots, exporting to spread culture outside Voxels (VRChat, JanusWeb, Hyperfy, NeosVR, Fortnite) (original 4:38)
    
*   \[**21:10**\] OpenVoxels is an art project exploring digital ownership and what it means in practice (original 6:05)
    
*   \[**22:48**\] Concerns about longevity of content in Voxels due to centralization and weak guarantees (original 7:43)
    
*   \[**23:48**\] Voxels dependencies: proprietary formats, centralized storage and hosting (original 8:43)
    
*   \[**24:03**\] Goal is to provide reassurance about creators' works standing the test of time (original 8:58)
    
*   \[**29:30**\] Converted 34,015 wearables to glTF, created Voxel Explorer, encoded metadata, upgraded thumbnails, added HTML previews for AR/VR (original 14:25)
    
*   \[**30:50**\] Data mining wearable creators, ownership, parcels, editing for point system for community governance and voting (original 15:45)
    
*   \[**33:11**\] Working on in-world museum about OpenVoxels history from 2019 to present (original 18:06)
    
*   \[**33:32**\] Sprite sheet generation in progress, converted parcel owners' costumes to VRM (original 18:27)
    
*   \[**34:59**\] Full world snapshot taken - avatars, parcels, vox models, images; converted to glTF, uploaded to Arweave; living museum planned (original 19:54)
    
*   \[**35:57**\] Downloaded every WOMP with metadata, plan to have them floating where taken in time capsules (original 20:52)
    
*   \[**37:49**\] New highly optimized ground-up metaverse client in development with dynamic objects, physics, procedural generation, instant loading, version control via daily glTF snapshots (original 22:44)
    
*   \[**41:31**\] Considering Metaverse Burning Man-inspired event with building, night mode, neon vehicles (original 26:26)
    
*   \[**42:02**\] Economic plan to open source core engine and features, drive adoption, reward OGs, grow organically while staying open and decentralized (original 26:57)
    
*   \[**44:16**\] Finishing OpenVoxels VRMs soon, will airdrop to spread Voxels culture to other corners of the internet (original 29:11)
```

## File: docs/why-voxels/content.md
```markdown
**"Why do you care so much about cryptovoxels anyways? It's so niche"**

I was recently asked this, here’s the short versoin:

*   It was the first NFT I bought (sentimental value)
    
*   First live platform that integrated smart contracts + virtual worlds (launched April 1st, 2018)
    
    *   Land was cheaper and platform was live nearly 2 years before DCL
        
*   First NFT 3D avatar wearables (late 2019 - early 2020)
    
*   Many legendary cryptoartists / collectors first metaverse experience
    
*   IMO it's a perfect lab environment for interoperability
    
    *   Starts with non-standard data / file formats, like many games
        
    *   What we can do can set an example for others in the future
        
    *   No investors, reduces complexity for incentive alignment
        
*   Voxel art is highly accessible, any with zero 3D modeling experience can make stuff
    
*   To prove something about permissionless innovation within the open metaverse
    
    *   Got 5 years of interop experiments with Voxels
        
*   Niche is good, serve users at the long tail of creativity
    

> [New drop from jin / 7oroy that goes towards supporting Openvoxels](https://opensea.io/item/ethereum/0x5b8533fb01aacd7a77a6b98feca729dd4dd710f8/3)


**Underdog Story**
------------------

I get that building the metaverse is a marathon not a race, but I want to cement Voxels into cryptoart history. IMO it is the Cryptopunks of virtual worlds. The project attracted many early believers in the metaverse and cryptoart before NFTs and Metaverse became hype words. Unlike most other metaverse projects, Voxels has no investors and is fully bootstrapped by parcel sales. The world was live with parcels available to purchase, with affordable pricing, almost 2 years before Decentraland's public launch.

![Cryptovoxels / Decentraland comparison dev log: https://hackmd.io/@xr/cities](https://storage.googleapis.com/papyrus_images/926f01bde2cc1038ec12910ed7f369d254c9bbb08b0d48367717f37283e4347c.jpg)

Cryptovoxels / Decentraland comparison dev log: https://hackmd.io/@xr/cities

Imagine you're an artist and the choice at the time was either >$1000 for a parcel for a platform with 90k supply and wasn't even live, or <$100 for a parcel in an organically growing city which you can immediately start building in. The data speaks for itself the tale of an underdog.

![Average cost per land, this was during 2019-2020 before Decentraland officially launched](https://storage.googleapis.com/papyrus_images/bbb4fa9df7e3bbe7bccbdaa5cdb618717d28dfd15ad885473f6ca15c22517783.png)

Average cost per land, this was during 2019-2020 before Decentraland officially launched

From 2018-2020 we witnessed a single dev surpass to the forerunning metaverse project of the time in terms of active users, LANDs traded per month, and content created. It was awe inspiring to witness and be part of it.

![](https://storage.googleapis.com/papyrus_images/4c4f9f6fad5f97cb44224fe2af5c930da3b0598d6b5340ded3f2f7e607dcb0d5.png)


**Voxel Art is Ultra Accessible**
---------------------------------

Part of what makes Cryptovoxels special is the extreme accessibility of voxel art.

![It's always been easy to build in Voxels, same is true for voxel art](https://storage.googleapis.com/papyrus_images/47e462563843d8e37f7d9f9208b6ee75f2200014fd1681fac955ae2e24cfdbd7.gif)

It's always been easy to build in Voxels, same is true for voxel art

It's much easier for most people to pickup Magicavoxel and start making stuff than learning to 3D model in Blender from scratch (though there's plugins to import vox models to Blender and can export obj from magicavoxel too). Therefore focusing on voxel art interop is a force multiplier for new 3D creators. Also with projects like [Smoothvoxels](https://smoothvoxels.glitch.me/) to convert, we can get the best of both worlds for voxels and triangles!

![Smooth Voxels can convert between formats](https://storage.googleapis.com/papyrus_images/c26819c600781cce089af5abd123ffb44f700bb472140a6df56f8de4cb34784a.gif)

Smooth Voxels can convert between formats


**Perfect Case Study + Interoperability Lab**
---------------------------------------------

IMO platform lock-in has the opposite effect of having a sense of ownership over our data and creatoins. It's what tore Vitalik up when he lost his Warlock spell one day due to an update, and since then vowed to fight for decentralization. The incentives in crypto align towards having strong digital property rights, owning your data, right of exit. Interoperability is the unlock.

Voxels is an ideal case study for metaverse interop working groups as well; you have UGC wearables, authorship and attribution through a public blockchain, a mixamo rigged base avatar, incentives aligned towards greater ownership and interoperability, and a popular proprietary format (vox) that can be converted to open ones.

Voxels has a really solid and simple costumer app and the mannequin is the perfect representation of a placeholder avatar.

![Older pic of the Cryptovoxels costumer, not much has since changed](https://storage.googleapis.com/papyrus_images/13492ce8ffcf546018a285e462f08b21fd4ddf9248f98caf11c6581883a2f8a3.png)

Older pic of the Cryptovoxels costumer, not much has since changed

The lessons learned and tools made in making Voxels wearables and avatars more interoperable can prove to be very useful when tackling other projects. We’re mainly dealing with attachables here, not layered clothing like jackets and pants which also simplifies things just enough. Openvoxels is a perfect environment to R&D interop in, plus have immediate real world benefits. The stakes aren’t too high since the economy is not overall strong for Voxels wearables, which alleviates pressure to try new things.


**To Spread Culture**
---------------------

There's always been a strong gift giving culture within Voxels of creators sharing wearables with each another. I still carry the wearables gifted to me in Cryptovoxels. Gift giving is a wholesome and sacred practice worth spreading across the metaverse.

![Screenshot from 2024-05-05 17-40-05](https://storage.googleapis.com/papyrus_images/17769e1103fba7111da974682ff9b8d59a26cf3d9054e774be0c7fcc214b53d9.jpg)

Screenshot from 2024-05-05 17-40-05

I started to explore VRMs in 2020, making one-offs and content to promote [avatar interoperability](https://hackmd.io/@xr/avatars). This has lead to much wider awareness and adoption of the VRM format, which back then was pretty niche and known mostly only within the Japanese / vtuber communities.

![Openvoxels Avatar Interoperability 2019: https://vimeo.com/455114096](https://storage.googleapis.com/papyrus_images/9c4b19d796503d3d330b3e1ddc002ee451cae7c83bc409910d3f0aa519554f66.jpg)

Openvoxels Avatar Interoperability 2019: https://vimeo.com/455114096

It's part of a multi-year effort to catalyze the vision of a virtual economy that spans multiple platforms and engines, akin to the ancient Silkroad. The railways of the open metaverse will get built on open file formats / standards and permissionless protocols.

![Charting some of the M3 experiments happening at each intersection, 2023](https://storage.googleapis.com/papyrus_images/e0fe12c995c4de315b85f96d7c95491871c3cc886f1b755076abc691405d8b75.png)

Charting some of the M3 experiments happening at each intersection, 2023

There's already an ecosystem for cryptoart that encapsulates 2D media formats (jpg or gifs), but we still have a long way to go for 3D. We have made great progress with VRM adoption in the last couple years, but how many wearable collections do you know of that are interoperable across avatars and platforms?

![Voxels snapshot from 2019, shot in VRchat](https://storage.googleapis.com/papyrus_images/484fcf3e92a1b4bb3050fe9ff24d8571502292dbde5a6e6d2d9aab64a7d656e9.png)

Voxels snapshot from 2019, shot in VRchat

Btw Voxel wearables look pretty awesome on other avatars. Rather than limit ourselves to a captive audience of a few thousand we should expand market reach, spread our culture amongst other metaverse projects, hence the need for Openvoxels.


Prove Something About Permissionless Innovation
-----------------------------------------------

I was listening to a [space](https://twitter.com/i/spaces/1MnGnMeZAnYKO) the other week hosted by Improbable and Msquared (M2), the companies building the technology that will power Otherside. We share similar aspirations for building "a network of interoperable metaverses" as they have stated on their website. It's also a freakish coincidence that M2 sounds very similar to M3, however I'll save the comparisons for another day.

M2 and M3 both deeply care about same topics, but are taking a very different approach for connecting disparate virtual worlds together. For one, M2 is a company that raised 150M whereas M3 is a loose collective or [hackerspace](https://hackmd.io/@XR/hackerspaces), a third space for metaverse devs. There were a couple soundbites that stuck with me from that space:

*   Improbable is building out 6 different "metaverses" that aim to be interoperable
    
*   Rob (CTO/Co-founder) asks "How do we get others to collaborate with one another?"
    

It's a very different ballgame when you're working on solving interoperability challenges amongst platforms you're incubating internally versus in the wild. The difficulty level increases when thinking about game theory, technical challenges, incentive alignment, diplomacy, and other kinds of knowledge in order to obtain greater compatibility between disparate apps. Higher risk / higher reward though, yeah?

I want to prove something, perhaps even just to myself. Although I'd much rather see others like M2 as collaborators than competition, I believe individuals can help solve big metaverse challenges without a ton of resources as prerequisite. Part of it involves looking for those unlocks that become force multipliers in the equations of creator workflows for making interoperable assets. Sometimes its bug reports to a certain tool, a blender plugin, a guide, a new metadata trait, contribution to gltf extensions, etc.

Speaking of which, IMO glTF extensions are excellent metaverse building blocks. M3 is pretty active in contributing to such with OMI group (see here)

[https://mirror.xyz/m3org.eth/00qAzFnCCmAHrqGAQiqObgAD2x6E8wxKtsTSFtorhf0](https://mirror.xyz/m3org.eth/00qAzFnCCmAHrqGAQiqObgAD2x6E8wxKtsTSFtorhf0)

Also the NFT metadata idea in the [Otherside Litepaper](https://otherside.xyz/litepaper) is a good idea too if places / creators adopt it. Pioneers like [Em0tionull](https://twitter.com/em0tionull) / Phetta have gotten multiple platforms like Hyperfy and Oncyber as well as many popular collections to adopt `vrm_url` in metadata so that platforms can automatically recognize that token as an avatar and enable creators to equip it from their inventory. [Phetta has shown](https://twitter.com/search?q=vrm_url%20from%3Aem0tionull&src=typed_query) that permissionless innovation can be a way to solve open metaverse interop from bottom up, and be rewarded through it by virtue of minting cryptoart.

Related post

[https://mirror.xyz/openvoxels.eth/hBQzBNwFXrOnwj5S5oOiYaBpQrpM8HfjENYMjKcy6Cs](https://mirror.xyz/openvoxels.eth/hBQzBNwFXrOnwj5S5oOiYaBpQrpM8HfjENYMjKcy6Cs)

PS: We did an AMA last week about the wearables museum snapshot. Here are the notes + recording from that discussion:

Openvoxels AMA / Wearables FAQ - HackMD
---------------------------------------

(00:00:00) Background on CryptoVoxels and its role as a pioneer in blockchain-based virtual worlds and wearable NFTs. - (00:13:15) Efforts to enhance wearables metadata, file formats, and decentralized hosting to ensure long-term preservation and interoperability. - (00:28:33) Exploring potential paths forward for updating existing wearables collections, including upgrading metadata and creating a single snapshot collection.

[https://hackmd.io](https://hackmd.io/@XR/openvoxels-ama)

![](https://storage.googleapis.com/papyrus_images/3e7aa935c37630d16759c1a59cc9abcc285ae99d709411aa59783767fc5bd430.jpg)
```
