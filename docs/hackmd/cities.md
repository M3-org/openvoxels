---
# System prepended metadata

title: Crypto Cities
tags: [dcl, blockchain, crypto, cv, devlog]

---

---
title: Crypto Cities
description: Cryptovoxels and Decentraland are both virtual worlds owned by their users. What purpose do they serve and how is each accomplishing it?
image: https://xrdevlog.com/img/cities.jpg
robots: index, follow
lang: en
dir: ltr
breaks: true
disqus: xrdevlog
---

# Crypto Cities

{%hackmd theme-dark %}

###### tags: `devlog` `crypto` `dcl` `cv` `blockchain`

[Cryptovoxels](https://cryptovoxels.com) and [Decentraland](https://decentraland.org) are on a mission to build a decentralized virtual reality world owned by their users and are using the Ethereum blockchain to accomplish such.


![](https://i.imgur.com/jMSLT01.jpg)


## Comparison of Cryptovoxels and Decentraland

**If you want in-depth information comparing Decentraland with Cryptovoxels then please read [**Decentralized Virtual Worlds on Ethereum**](https://www.docdroid.net/jXvfJP7/defi-vr.pdf)!**


[**Decentraland**](https://decentraland.org) is based in Argentina and raised 24M in 30 seconds during their ICO in 2016, leaving many people out. Several months later DCL broke a record on virtual land sales during the terraforming event with 28M USD worth of MANA (ERC20) burned from people bidding on parcels! However, years later the world has still not officially launched yet. The public beta has been delayed a 3rd or 4th time now to Q4 2019 and will NOT feature virtual reality upon launch. It's estimated that DCL employs about 45 people full time.

[**Cryptovoxels**](https://cryptovoxels.com) is a [one-man-team](https://twitter.com/bnolan) based in NZ that's been funded a total of about ~140k USD worth of ETH over the course of one year of parcel sales purchased by an organically forming community. Ben has been working part-time on Cryptovoxels since April 2018 and saved up enough ETH to go full-time from May 2019. The web client has working VR support via the [WebVR api](https://webvr.info/).


---


### Comparing maps

Here is a [picture](https://i.imgur.com/S7ReEL6.jpg) to illustrate the size of the cities in relation to Manhattan, NYC. Decentraland is about 23x bigger than Cryptovoxels and around half the size of Manhattan.

![](https://i.imgur.com/S7ReEL6.jpg)

[Decentralands atlas](https://market.decentraland.org/0/0) hasn't changed much since the auction. The content that's currently deployed into the world is not displayed on the marketplace map. Some wonder if this may have been a factor leading to several anomalies of parcels having sold for enormous sums of money.

We've analyzed the blockchain a few times since September 2018 to see how much content was deployed to Genesis City.

- In September 2018 there was ~63 parcels with content deployed 
- In January 2019 there was ~100 parcels with content deployed
- In July 2019 there were 24,000 parcels deployed

Tool for showing deployed content: <https://github.com/decentraland/deployment-map/>

![](https://i.imgur.com/1Iwvf5J.jpg)

The [Cryptovoxels map](https://cryptovoxels.com/map) shows content that's currently deployed to the city as well as analytics and other useful features. Anyone can jump into the world right now and try before they buy.

![](https://i.imgur.com/bxUTwEk.jpg)

---

## Comparing content pipelines

#### Decentraland Content Pipeline

Content for Decentraland often begins in the [Builder](https://github.com/decentraland/builder), a simple drag and drop tool that was born earlier this year (2019) to make building scenes easier for average users.

![](https://i.imgur.com/T4gyS5V.jpg)

The content creation pipeline is asynchronous and somewhat difficult to master: publishing custom content requires users to know command-line and editing JSON files. Here's an example getting started guide: <https://docs.decentraland.org/getting-started/coding-scenes/>

For any custom models you will have to rely on using the [SDK](https://docs.decentraland.org/getting-started/create-scene/) and [set positions manually](https://docs.decentraland.org/development-guide/entity-positioning/) through code.

![](https://i.imgur.com/6M5GVgO.jpg)

Going from static scenes made with Decentraland's asset pallet to any form of interactivity is quite involved: <https://decentraland.org/blog/tutorials/adding-functionality-builder-scene/>

It's on the [roadmap](https://trello.com/b/YZnGNh5z/decentraland-community-roadmap) to support custom models in the Builder and eventually a "smart Builder" to support adding interactivity but no reasonable expectation when those features will come.

---

#### Cryptovoxels Content Pipeline

The editor for Cryptovoxels appears in-world when you press the [TAB] key. You can edit and publish to the content server seamlessly and in real-time similar to like in minecraft.

![](https://i.imgur.com/fZzzS8W.jpg)

The controls are simple: click to drag and draw blocks, shift click for erasing, ctrl-z to undo, `m`  to quickly move spawned objects like particles and images.

![](https://i.imgur.com/l2uGWrR.gif =100%x)

Changes to the parcel are saved automatically so that if you log out and log back in you see the changes persist. Parcel owners can bookmark versions of their parcels with the [chrome plugin](https://chrome.google.com/webstore/detail/cryptovoxel-generator/kodjbgifejfaajgpjjddifagocboccab) or revert from the website to older versions in their parcel settings page.

Scripting support in Cryptovoxels is a relatively new feature that was turned on this year. [The documentation](https://www.cryptovoxels.com/docs/scripting) is pretty sparse currently and there are only a [few examples](https://github.com/search?q=cryptovoxels+script) to look at.

---

## Land Sales

Average land sales from Cryptovoxels are beginning to catch up to the Decentraland market. However, it is worth noting that the entire market for DCL post-auction is now second hand. Cryptovoxels did not have a massive auction and instead mints new lands with procedural generation scripts for the size of each parcel and road.

**Number of LAND traded per month**

![](https://i.imgur.com/nnrbq7p.jpg)

Currently, the lowest price for parcels in Cryptovoxels is about 20-25% that of the lowest price of parcels in Decentraland.

**Average cost per LAND**

![](https://i.imgur.com/h5yLqgT.jpg)

Finally, the overall supply is limited in Cryptovoxels to around 3026 of which almost 50% has been sold. For 6 months now Cryptovoxels has been top 10 in [Opensea](https://opensea.io) trade volume while Decentraland has been top 5 in NFT trade volume for a couple years now.

---

## Cryptovoxels Clients

### Babylonjs client

https://www.cryptovoxels.com/play

![](https://i.imgur.com/bFb7o1G.jpg)

![](https://i.imgur.com/fHMsT9o.jpg)

All you need is just a standard web browser or the Oculus Quest default browser to jump in from a website.

Did you know that there are several other third-party Cryptovoxels clients as well? 

---

### JanusVR client

(unreleased)

![](https://i.imgur.com/f2bmhYG.jpg)

[![Image from Gyazo](https://i.gyazo.com/55a6d65347420569666cac88fca62714.gif)](https://gyazo.com/55a6d65347420569666cac88fca62714)

![](https://i.imgur.com/QKSbYZe.gif =100%x)

---

### Exokit client

https://github.com/exokitxr/exokit

![](https://i.imgur.com/OtxSA6W.jpg)

A web app runs on Exokit an average of 3x faster because of how it runs code closer to the metal then composites the results into a 3D scene. This whale picture is a concept visual of multiple reality tabs running simultaneously. It's like wearing AR glasses in any VR world.

![](https://i.imgur.com/vPfdwO1.jpg)

---

### Substrata client

http://substrata.info

![](https://i.imgur.com/BOMIufR.jpg)

{%youtube zAizMS16BvM %}
Watch on Youtube: https://www.youtube.com/embed/zAizMS16BvM

Check out this very high resolution image of Origin City rendered from Substrata below.

![](https://i.imgur.com/U3WYIT1.jpg)

More renders from a roof top near The Center looking towards the Frankfurt skyscrapers.

![](https://i.imgur.com/rZMvzUZ.jpg)
![](https://i.imgur.com/Z180o7G.jpg)

---

### Unity / VRChat client

<https://www.vrchat.com/home/launch?worldId=wrld_bdc4fe69-cb53-450d-8a04-6830f05ce6b1>

Another is an open source Unity client and plugin, allowing developers to easily import Origin City into their projects. Over the summer we've experimented with importing Cryptovoxels into VRChat, the largest social VR platform in user count and best custom avatar experience.

![](https://i.imgur.com/6sJHvrS.jpg)

![](https://i.imgur.com/AYXepLq.jpg)

![](https://i.imgur.com/loRhhSd.gif =100%x)

<https://github.com/cubedparadox/unity-client> - Unity Client project

---

## Future of Cryptovoxels

![](https://i.imgur.com/PMv4pDr.jpg)

Roadmap: <https://blog.cryptovoxels.com/2019/06/10/roadmap.html>

#### Minecraft Client

Some are planning to port a snapshot of Origin City from Unity into a custom minecraft map. It takes someone who knows what they're doing perhaps 2-4 weeks to accomplish this. From there we can apply a number of impressive shaders to give the city a more realistic look.

Sonic Ether's Shader: <https://www.patreon.com/sonicether>

![](https://i.imgur.com/eDuIBnU.jpg)

Slidur's Shaders: <https://sildurs-shaders.github.io/sildurs-shaders.github.io/>

![](https://i.imgur.com/PZv2soN.jpg)



---

## Decentraland

Decentraland has been at the forefront of NFTs and virtual worlds built on Ethereum. As you can see, the majority of deployed content features a low-poly cartoon aesthetic but the SDK supports any glTF models that fit within the [scene limitations](https://docs.decentraland.org/development-guide/scene-limitations/).

**From 2018**

<iframe width="100%" height="360" src="https://www.youtube.com/embed/E9c-6nlYyVo?start=140" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Present day**

<iframe width="100%" height="360" src="https://www.youtube.com/embed/o4D0TKTi3Dg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="360" src="https://www.youtube.com/embed/GTURBpaHFjo?start=146" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

### Decentraland Clients

#### A-Minus client (2017)

(deprecated)

![](https://i.imgur.com/bUZdcgu.jpg =100%x)

![](https://i.imgur.com/CdfOiCf.jpg)


#### JanusWeb client (2018)

(unreleased)

![](https://i.imgur.com/xBT9ufZ.gif =100%x)

![](https://i.imgur.com/dEXCXiQ.gif =100%x)

![](https://i.imgur.com/oaPEmtq.gif =100%x)

#### Babylon.js client (2018)

https://github.com/decentraland/explorer

![](https://i.imgur.com/0NvYGzO.jpg)

![](https://i.imgur.com/RsaAp3N.jpg)

![](https://i.imgur.com/4cWZzte.jpg)


#### Unity client (2019)

(closed beta)

![](https://i.imgur.com/k9WAv9A.jpg)

![](https://i.imgur.com/Q42ZctB.jpg)

![](https://i.imgur.com/WbcHer5.jpg)

---

#### Future of Decentraland

![](https://i.imgur.com/38zSrGD.jpg)

<https://trello.com/b/YZnGNh5z/decentraland-community-roadmap>