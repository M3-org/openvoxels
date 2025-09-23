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