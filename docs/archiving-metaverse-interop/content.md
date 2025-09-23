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