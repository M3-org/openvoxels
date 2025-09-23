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