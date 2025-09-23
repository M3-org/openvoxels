---
# System prepended metadata

title: Interoperable Wearables 1
tags: [metafactory, m3, webaverse, devlog]

---

---
title: Interoperable Wearables 1
description: Its hard adding custom wearables to custom avatars for newbies atm. How can we make wearables more compatible between different base models and easier to customize?
image: https://i.imgur.com/zLxCJNf.jpg
robots: index, follow
lang: en
dir: ltr
breaks: true
disqus: xrdevlog
---

# Interoperable Wearables Part 1

###### tags: `devlog` `m3` `metafactory` `webaverse`

{%hackmd @xr/dark %}

![](https://i.imgur.com/zLxCJNf.jpg)


**Main problem: It's hard to add custom wearables to a custom avatar for newbies.**

People will switch their avatar a lot, check out this statistic from Roblox.

![](https://i.imgur.com/ug6k7Wt.jpg)


For VRM avatars you first do a quality check in Blender (most people are bad at optimizing their UGC) then until the Blender [VRM exporter](https://github.com/saturday06/VRM_Addon_for_Blender) gits gud open Unity + UniVRM to add your wearables and then export back out.


[VRoid studio](https://vroid.com/en/studio) is one the easiest to use software for making custom avatars. They've shown a [preview](https://vroid.com/en/news/FsmhqJFX4nX5yApmRS61g) of a feature to easily add accessories, but its quite limited still.

This is how it looks like to just add a hat to my character. Plus, relying on the proprietary game engine Unity isn't all that great for the longer aim of building an open and decentralized ecosystem.

![](https://i.imgur.com/1JFlN6F.png)



---



## Metafactory Interop Experiments

Link: https://github.com/madjin/vrm-samples

> Note: need help getting latest clothing samples from VRoid studio added


### 1. Export VRoid

![](https://i.imgur.com/DB8QxbF.png)

### 2. Modify clothing base to new avatar base



![](https://i.imgur.com/NdEU71Y.png)


### 3. Repeat for all clothing base meshes

The UVs will stay the same 

![](https://i.imgur.com/a1WEjY3.gif)


---

## Roblox

Link: https://blog.roblox.com/2021/10/bring-dynamic-self-metaverse-layered-clothing/

Layered Clothing

![](https://i.imgur.com/H9Cxkex.jpg)




https://www.roblox.com/create

https://devforum.roblox.com/t/3d-layered-clothing-is-now-available/1517745

---

### Blender



If we could do what Roblox does but in Blender, it'd be a rising tide that lifts all boats.

effectively cage / cast deform and skinning projection

the deformation is the more annoying and manual bit in Blender atm, but a basic, non-perfect skinning transfer from the original body geo to the clothing generally works okay

key parts seem to be: lattice deform / skinning / caging / shrink-wrapping

---

### Marvelous Designer / Clo3D

Clo3d and Marvelous Designer have some cool new auto-grading tools as well to re-fit a garment on various different avatars: https://marvelousdesigner.zendesk.com/hc/en-us/articles/900004342823-Auto-Fitting


{%youtube 2NjCNZxcYtk %}

Watch on Youtube: https://www.youtube.com/watch?v=2NjCNZxcYtk

**Import/Export**
https://support.clo3d.com/hc/en-us/sections/115000628387-FILE-IMPORT-EXPORT
https://support.clo3d.com/hc/en-us/articles/360051525034-glTF-2-0-GLTF-GLB-File

Clo's version of vroid studio sorta
https://connect.clo-set.com/jinny

![](https://i.imgur.com/8SWt24g.png)
![](https://i.imgur.com/GwWMrxs.png)


**Videos on Marvelous -> Blender:**

Marvelous Designer Beginner Course - Part 3 - Animation & Rendering in Blender
https://www.youtube.com/watch?v=rcECvlMaBm8

How to Quickly Export Cloth Animation from Marvelous Designer to Blender
https://www.youtube.com/watch?v=wRmCL7gzqic

Export with UV map from Marvelous Designer/CLO3D to Blender
https://www.youtube.com/watch?v=hoJoXVYipXk

ANIMATED CLOTHES in Marvelous Designer! | Blender to Marvelous Designer Workflow
https://www.youtube.com/watch?v=ZhhTD7LfDRY

---

### Decentraland Wearables

![](https://i.imgur.com/38rRyct.png)


- https://docs.decentraland.org/decentraland/creating-wearables/
- https://docs.decentraland.org/decentraland/wearables-editor-user-guide/
- https://docs.decentraland.org/decentraland/publishing-wearables/

Decentraland published guidelines for their wearables that make a good basis for optimization goals.

![](https://i.imgur.com/DDe3DXM.png)


---

### Cryptovoxels Wearables

Cryptovoxel wearables are 32x32x32 .vox files that are attached to bones on the mannequin glb avatar and then offset manually by the owner. I think the CV avatar is using the Mixamo bone rig / naming scheme.


![](https://i.imgur.com/fDuFSHw.png)


![](https://i.imgur.com/nyDbnWx.png)


![](https://i.imgur.com/vo4VNvs.png)


---

## Metadata NFTs



### Loot

- https://www.lootproject.com/
- https://www.lootwatcher.com/
- https://github.com/webaverse/loot-assets


### M3taloot

CC0 collection that serves as a progressive enhancement of Loot, on-chain NFTs that consist of just white text on a black background (see: https://hackmd.io/@XR/lootwars).

![](https://i.imgur.com/ixqs7tq.png)

![](https://i.imgur.com/SrPUos5.png)

![](https://i.imgur.com/5GJalQR.jpg)



Full album: https://imgur.com/a/No7SLcF


### Dope Wars

- http://wiki.dopedao.org/
- https://github.com/madjin/dopewars-assets


### Unbundling

Both loot and Dope Wars are experimenting with the concept of unbundling bags into individual items and then rebundling back into original or even new NFTs.

#### LootLoose

LootLoose lets you unbundle your Loot Bags into individual item NFTs or rebundle items into their original Loot Bags.

It works by transfering your ERC721 Loot bag to the contract, and it proceeds to mint you 8 ERC1155 tokens, with IDs corresponding to the item slot (head, neck, …) and the item’s “components” from [@dhof's](https://twitter.com/dhof) LootComponents.sol contract.

![](https://i.imgur.com/HOJFos3.png)
See announcement tweet: https://twitter.com/gakonst/status/1433596713189711872


- https://github.com/gakonst/lootloose
- https://github.com/Anish-Agnihotri/lootloose.com

#### Hustlers

![](https://i.imgur.com/9T6ESDt.png)

![](https://i.imgur.com/W1KF6Dr.png)

PROPOSAL TLDR:
- Unbundle $DOPE with 12,500 $PAPER to create 9 NFT tokens for your equipment…
- Mint a Dealer/Hustler whose appearance is controlled by the equipment you give them!
- Opens possibility to trade or sell individual items

https://dope-wars.notion.site/Dope-Wars-Ignition-e92fd2b6efeb4e4991c7df98f5553283

![](https://i.imgur.com/fZ49wBA.png)
https://twitter.com/tarrenceva/status/1446578597880229888

### Avime

Site: https://avime.moe/
Opensea: https://opensea.io/collection/avime-s01

Avime deserves a mention for its interesting design in which a mint is actually 6 on-chain mints (which is why gas is higher) that you can combine into a NFT or buy more to mix and match. It's like getting an unbundled loot bag with art.

![](https://i.imgur.com/oKdtAa3.png)

![](https://i.imgur.com/dmVjk7e.png)

---


## Ship of Theseus

Around September 2021 Christies was preparing to auction some NFTs, some of which were Bored Apes wearing suits, which spawned a social media meme ["suits on for christies"](https://twitter.com/search?q=christies%20suits&src=typed_query&f=top). Many people image edited a suit onto their NFT pfps and created templates to help others - sometimes doing the work for them. It felt like an event in the Internet Cinematic Universe where characters from all these universes crossed-over to participate.

![](https://i.imgur.com/GxRHNZN.png)


Hold on though, NFT rarity is usually defined by the traits so if you were to change any of those would it even still be considered the same NFT? We might need to upgrade our standard definition and spec of rarity and uniqueness because when NFTs start become [3D avatars](https://hackmd.io/@xr/nftavatars) projects will quickly learn about the joys of avatar customization.

![](https://i.imgur.com/FfZXSaf.png)

![](https://i.imgur.com/kYWCMSC.png)










Collab.land now allows token-gating based on specific NFT attributes: https://twitter.com/Collab_Land_/status/1424796398210338851


---

### Avatar Identity Proposal

Idea: What if we could use the Webaverse rigging system to export VRM files with wearables attached for use across the metaverse?

Standalone web app to configure your avatar and then download a VRM. Let people mint an NFT for their VRM avatar with the metadata on ceramic so they can update the VRM file without needing to change anything about the NFT.


1. User comes to web app
2. User mints a "meta-NFT" with the metadata living in a Ceramic document using [NFT:DID authentication method](https://developers.ceramic.network/authentication/nft-did/method/)
3. User selects from a set of base avatars
4. User chooses wearables to rig onto the base avatar (make it work out of the box with all MF and webaverse wearables)
5. Once user finalizes rigging, the web app bakes the avatar into a VRM file and uploads it to IPFS. Also generates a "headshot" PFP image file and uploads to IPFS (see below [and this issue](https://github.com/webaverse/app/issues/1371))
6. Web app uses NFT:DID auth to update the metadata for the "meta-NFT" in ceramic:
    - `image` field gets updated to the new PFP file
    - `animation_url` field gets updated to the new VRM file
    - `attributes` gets updated with references to all the composed NFT wearables
7. User can later come back and reconfigure their avatar and update it without any on chain interactions. All this can efficiently run on mainnet (although might have to emit URI event to get OpenSea etc to recache new metadata)
8. A pointer to a users meta-NFT can be added to their ENS records and [IDX profile](https://developers.idx.xyz/build/writing/), allowing for any dapp to easily look up and render a users 3D avatar just from an ETH address. Super important primitive for the interoperable metaverse that can be used by any other project. Works out of the box with all existing tooling.

Metadreamer is working on integration with Ceramic / IDX for user profiles etc

https://idx.xyz/
https://github.com/dabit3/decentralized-identity-example

New crypto onboarding
Every wallet / address = new character
visualized by character customizer / synthetic loot

Robert: can we standardize on json format for profiles use in multiple places



---

## File formats

https://github.com/M3-org/research/blob/master/sweeney.md#file-formats

Watch on Youtube: https://youtu.be/KBEg9riBc_U?t=564


> The good news is there are actually quite a lot of standards that are candidates for powering an open Metaverse. For example, there's the Pixar USD universal scene description format which does a pretty good job of describing scene graphs. There is the MDL material description language and material X shading graph language which described their operation of shaders for physically based realistic materials. Then there are formats like **glTF** for describing geometry, intensive geometry, and 3d objects of all sorts.


Avatars: VRM, glTF, sprites
Wearables: glTF / vox files
parent signing child NFT?


Noticed something in Spoke editor
![](https://i.imgur.com/3aCrVSn.png)
https://github.com/mozilla/Spoke/issues/1044

https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_xmp_json_ld

---

### VRM / glTF




https://www.khronos.org/gltf/
https://github.khronos.org/glTF-Project-Explorer/

![](https://i.imgur.com/5ZAAG6s.png)


![](https://i.imgur.com/v4my2pb.png)

`gltf-pipeline.cmd -i .\test.glb -s -o test.gltf`

![](https://i.imgur.com/xaVstKt.png)



Upload to sketchfab first to get license info in metadata? Interesting that Sketchfab does not allow for CC0, perhaps because model rippers can take advantage of it?


![](https://i.imgur.com/5uzOhxv.png)

![](https://i.imgur.com/zqtpyGu.png)

![](https://i.imgur.com/G7NDnuR.png)

The license info is also in the bottom of the glTF file
![](https://i.imgur.com/hOb2843.png)


![](https://i.imgur.com/SZYs6gJ.jpg)



---

### Versatility

Pipeline to update all representations of an identity is downstream from the token metadata properties and the 3D avatar.

![](https://i.imgur.com/bp9cT7d.png)


#### 1. 3D avatar

#### 2. Vtuber

#### 3. 2D Profile Pic

![](https://i.imgur.com/RQznacA.png)

https://medium.com/the-ethereum-name-service/nft-avatar-support-for-ens-profiles-bd4a5553f089

#### 4. Sprite sheet


---

## What about USD?

USD is a powerful open source 3D scene description and file format developed by Pixar for content creation and interchange among different tools.

It's powerful in rendering / visual effects pipelines with remote collaboration programs like Nvidia Omniverse where 2D and 3D creatives can collaborate together in real-time.

https://developer.nvidia.com/usd#sample
https://www.nvidia.com/en-us/omniverse/gallery-submissions/?id=zhirongliu1-paused-2021

Not web friendly yet according to the most popular open source web rendering engines. Here's a screenshot from Babylonjs discussion:

![](https://i.imgur.com/hhKshSG.png)
From: https://forum.babylonjs.com/t/usdz-format-support/4147

Discussion in threejs

https://github.com/mrdoob/three.js/issues/14219

Exciting development continues though. As of last year they have been experimenting with webassembly build, and Blender 3.0 ships with Omniverse support.

https://github.com/PixarAnimationStudios/USD/issues/1492

In the meantime, can go from glTF to usd using this tool.

https://github.com/kcoley/gltf2usd
https://github.com/google/usd_from_gltf

There's also this
https://threejs.org/examples/?q=usd#misc_exporter_usdz


---

## Notes

The NFT isnt even a specific avatar

and with the metadata on ceramic we can easily render new pngs as users update their NFT with different avatars

super interoperable basis for VRM avatar linked to public identity



> Wouldn't this make the avatar NFTs less like collectibles? How would economics work?

The economics come from the items they equip to the NFT before it gets baked into a VRM, meta-nft of sorts.

has updatable references to all the NFTs its composed of
and a baked VRM file as well


there will be a way to fetch and render a complete VRM of their avatar just like you can have an ENS linked to your address


It'd be super impactful to create a standalone app to handle updating those fields + configuring your wearables

Ceramic has native support for permissioning updates to a document based on who owns an NFT

https://developers.ceramic.network/authentication/nft-did/method/

Traits can reference other NFTs.

On the frontend you can verify that the user owns all the referenced NFTs

Ethereum / ENS becomes VRoid hub.

---

## ETC

![](https://i.imgur.com/8KUOlkg.gif)

![](https://i.imgur.com/ladMc0G.png)

![](https://i.imgur.com/e6d2kOu.png)

---

![](https://i.imgur.com/ZR512vo.png)
https://booth.pm/en/items/1906507


![](https://i.imgur.com/asfv683.png)
https://booth.pm/en/items/2760783


![](https://i.imgur.com/xMpN6zz.png)
https://booth.pm/en/items/2557475

Questions:

Some form of accessory can’t just easily map to a humanoid character.

Based on the side of the model the shoes/hat or whatever needs to be completely modified.

Also then what about performance? That one hat is super high lod and kills the perf in the game.