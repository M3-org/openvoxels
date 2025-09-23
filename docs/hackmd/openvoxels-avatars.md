---
# System prepended metadata

title: Openvoxels Avatars
tags: [m3, cv]

---

# Openvoxels Avatars

###### tags: `cv` `m3`

Mint VRM: https://cryptoavatars.io/

![](https://i.imgur.com/CYk1dVU.png)

![](https://i.imgur.com/ANyh0Se.png)
https://opensea.io/assets/ethereum/0xbac0b85ce8a5bad5a0a79088f223871a476cedb6/0

https://etherscan.io/token/0xbac0b85ce8a5bad5a0a79088f223871a476cedb6



![](https://i.imgur.com/E4wu8Q1.png)

![](https://i.imgur.com/xxdWtfZ.png)

https://gateway.pinata.cloud/ipfs/QmZ5gHy7bY4sfwE6z7vky3bZzBCxXKMCAxgb88uGT3wALX

![](https://i.imgur.com/K9mYSGt.png)

json prettyfied for the cryptoavatars NFT:

```json!
{
  "name": "CV Jin",
  "description": "jin's Cryptovoxels avatar since late 2019. There's a penguin on his head, therefore your argument is invalid.",
  "external_url": "https://cryptoavatars.io/assets/0xbac0b85ce8a5bad5a0a79088f223871a476cedb6",
  "image": "https://gateway.pinata.cloud/ipfs/QmVadEnWEXZYRP8VpzUDrpyK6vHv7omWLMvnbdRC6pt9nZ/CV Jin_Thumbnail.png",
  "asset": "https://gateway.pinata.cloud/ipfs/QmeSLbCD28rJhA8JQ8v72Q2yCaCcotP2Pf8iUzHrZYMVHU/cv_jin.vrm",
  "attributes": [
    {
      "value": "Triangles: 9155"
    },
    {
      "value": "File size: 504 KB"
    },
    {
      "value": "Skinned meshes: 1"
    },
    {
      "value": "Meshes: 6"
    },
    {
      "display_type": "date",
      "trait_type": "birthday",
      "value": 1673070853276
    }
  ],
  "createdAt": 1673070853276,
  "createdBy": "0x044a0b7b06fc2a4b0c85ce31e00b27eb1217fa3b"
}
```

---

## ENS Avatars

- https://medium.com/the-ethereum-name-service/step-by-step-guide-to-setting-an-nft-as-your-ens-profile-avatar-3562d39567fc


![](https://i.imgur.com/iFXdlWz.png)
![](https://i.imgur.com/o6fd9wA.png)


![](https://i.imgur.com/MYsc7BE.png)


https://github.com/ensdomains/ens-avatar


### Notes

Tried to first add an image and new VRM field separately, didn't work. The metadata for new fields isn't showing up:

- https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/89309112019529632356319028869398151961865130758109557318354337679874954264347
    - https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/89309112019529632356319028869398151961865130758109557318354337679874954264347


![](https://i.imgur.com/xK9j6nk.png)

Now a platform can fetch the NFT metadata belonging to the primary ENS addresses' avatar which contains the direct link to the VRM if the minting was done right. Some possible issues:

- no standard field for VRM yet
    - [animation_url example](https://opensea.io/assets/ethereum/0xae09345adc2b7133a5533bfbdb088bd6f40448d9/8)
    - [asset example](https://opensea.io/assets/ethereum/0xbac0b85ce8a5bad5a0a79088f223871a476cedb6/0)
    - [manifold vrm_url example](https://opensea.io/assets/ethereum/0x41eb9dd376c9a3f1c02e5f3f89f22ad6ae970d51/17)

> For platforms to integrate it's probably best to implement certain contracts individually which is what hyperfy.io is doing or search for the file extension.

![](https://i.imgur.com/u2p0wrX.png)
**Metadata: https://metadata.ens.domains/mainnet/avatar/openvoxels.eth/meta**
Docs: https://metadata.ens.domains/docs


> Turn subdomain into a NFT, would be interesting for webxr.eth, vrmchat.eth, hyperfy.eth
https://docs.ens.domains/dapp-developer-guide/ens-as-nft#turning-subdomain-into-nft



---

## Preview image with VRM

VRM files can have a preview thumbnail encoded within them alongside the metadata containing usage rights.

It would be cool to have different preview images for an ENS NFT avatar: one trading card version like on cryptoavatars.io and another ENS domain version which has a square aspect ratio which can be derived from the VRM preview image.

![](https://i.imgur.com/bVOjccm.png)

![](https://i.imgur.com/wcu3dvA.png)



![](https://i.imgur.com/YWFEIOr.png)

Even found EXIF data about the thumbnail data within the VRM export.
![](https://i.imgur.com/PU9oTP3.png)


---

![](https://i.imgur.com/0diYk1o.png)




It'd be nice if model viewer had VRM support, will make a new discussion on the github. Models can have automatic poster.

![](https://i.imgur.com/LvdJQtM.png)
