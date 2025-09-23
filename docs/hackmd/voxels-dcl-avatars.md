---
# System prepended metadata

title: Voxels vs Decentraland VRM Exports

---

# Voxels vs Decentraland VRM Exports

Comparing VRM avatar exports from @cryptovoxels and @decentraland / digital fashion interop post

I'm working on the Voxels VRMs via @openvoxels. It's almost done, can still change things perhaps based on feedback here.

If you want to export your avatar from Decentraland you can do so in-game, live now
![Screenshot from 2024-09-09 20-10-52](https://hackmd.io/_uploads/BkbMUGah0.png)


VRM was designed for interop, hence why part of the spec is dedicated to encoding license info in the files themselves. Here's a look at two samples side by side in Blender via [Saturday06's VRM addon](https://github.com/saturday06/VRM-Addon-for-Blender).

![Screenshot from 2024-09-09 19-46-06](https://hackmd.io/_uploads/SyOzIM620.png)


Voxels has a full ETH address whereas the DCL one is shortened. IMO it's better to have the full addy 🤷

Both platforms have NFT wearables and contain info about the currently attached ones in the Reference fields. Usually this info gets lost in the process after baking everything together!

![Screenshot from 2024-09-09 20-20-00](https://hackmd.io/_uploads/Bypm8MpnC.png)



The Voxels one links to costume files which has more data (contract address + ID + attachment config info), but since it's hosted on arweave it'll take more steps in order to parse. Most likely it'll be a crypto platform that's interested in authenticity / provenance of these wearables, so in addition to encoding in the VRM file one could encode it as part of the NFT metadata. I recommend checking out Extensible Token Metadata Standard (Shoutout to @Nifty_Island)


> **Complete Example: Multiple Files Per Asset**
> The following is an example of the metadata for an NFT representing an entire outfit. Each asset in the outfit is a 3D model, but also includes a supplementary image file. In addition, the top-level image field is used here to provide a preview of the entire outfit.
> https://etm-standard.github.io/ETM_MULTIASSET_v1.0.0#complete-example-multiple-files-per-asset

```json!
{
  "name": "Snazzy Outfit",
  "description": "A whole outfit to wear to the jazz club!",
  "image": "https://coolnfts.com/entire-outfit-preview.png",
  "metadata_standard": "ETM_v1.0.0",
  "extensions": [ "ETM_MULTIASSET_v1.0.0" ],
  "assets": [
    {
      "media_type": "model",
      "files": [
        {
          "name": "Shirt Image",
          "description": "A high-res render of a snazzy shirt.",
          "url": "https://ipfs.io/idzbf55yqtglco3fbaqlyufe3fn62y7hu67uh7mdu7pfs5tzrydgiebyfab",
          "file_type": "image/png"
        },
        {
          "name": "Shirt Model",
          "description": "A rigged model of a snazzy shirt.",
          "url": "https://ipfs.io/bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
          "file_type": "model/fbx"
        }
      ]
    },
    {
      "media_type": "model",
      "files": [
        {
          "name": "Pants Image",
          "description": "A high-res render of sweet pants.",
          "url": "https://ipfs.io/idzbf55yqtglco3fbaqlyufe3fn62y7hu67uh7mdu7pfs5tzrydgiebyfab",
          "file_type": "image/png"
        },
        {
          "name": "Pants Model",
          "description": "A rigged model of sweet pants.",
          "url": "https://ipfs.io/bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
          "file_type": "model/fbx"
        }
      ]
    }
  ]
}
```


Decentraland wearables are mostly designed to be compatible with DCL base meshes. Although some could be kitbashed to other avatar types, it would likely be a messy / hand tailored process although new tools have been emerging to make fitting the same pair of clothes on different base meshes easier.

Voxels wearables were designed in magicavoxel at a max size of 32x32x32 voxels and configured in a babylonjs web app which can export a JSON file of the costume. Costumes files contain the wearables collection address, chain (eth/polygon), wearable id, as well as the bone it's attached to + offset information (pos/rot/scale). It's a beautifully simple avatar wearable system.

 Voxels base mesh is a mannequin, a perfect placeholder if you think about it. Yet another reason why I love testing interop with this platform.
![image](https://hackmd.io/_uploads/BkKW_f6nR.png)



## Minting Avatars

My plan to commemorate the release of Voxels VRMs is to mint them all as NFTs, and airdrop passports to their respectful owners.

![Screenshot from 2024-09-06 00-45-54](https://hackmd.io/_uploads/Hkg_IGa2C.jpg)

Since Decentraland avatars are downloadable on the fly by logging into the explorer, I assume the owner of such wearables could choose to mint the avatar as a NFT via a marketplace / their own contract. Why

https://github.com/ensdomains/ens-avatar



![image](https://hackmd.io/_uploads/BkU_nfT20.png)

I converted the 34015 vox wearables to glTF 2.0 from a snapshot taken in March 2024, [more details here](https://mirror.xyz/openvoxels.eth/FVpOzDZ1vh_1qaGcQ1ZjFNcFfkvvEVR8DvNIWAebXJ0).