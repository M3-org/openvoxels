---
# System prepended metadata

title: Openvoxels Datasets
tags: [m3, cv]

---

# Openvoxels Datasets

###### tags: `m3` `cv`

:::info
📃 Now published: https://mirror.xyz/openvoxels.eth/PDMw151D333CwJx-eGMufPawzbrFqP3Yr6ov_FY4jSk
:::

- https://github.com/madjin/Cryptovoxels-snapshots
- https://github.com/M3-org/cryptovoxels-wearables
- https://archive.org/details/cv_2019
- https://skfb.ly/oyOxO

---

### Wearables


Library:
three@0.124.0

- https://linktr.ee/onchainchain
- https://www.artblocks.io/collections/presents/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/283
- https://generator.artblocks.io/283001915
- https://token.artblocks.io/283001915- 
- https://www.artblocks.io/collections/presents/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/283/tokens/283001915



---

Look into https://fvm.filecoin.io/


---

## README




| [Area 51](https://sketchfab.com/3d-models/area51-7c8b1506f14a4cc69fb4d224a51e6d7c) | [Axies](https://sketchfab.com/3d-models/axies-53233e6adb3b42ff8e868dd03bdbc769) | [Deep South](https://sketchfab.com/3d-models/deep-south-8dbb8ebd9c784a7db8c973a33ccf115f) |
| -------- | -------- | -------- |
| ![](https://i.imgur.com/6U6vOqY.jpg) | ![](https://i.imgur.com/FNaBJ7b.png) | ![](https://i.imgur.com/s60uQSe.jpg) |
| [IPFS](https://bafybeiex4vte2gsjltidebujkvxvuat2rm6oq5kntdf54gkiuxg7nxmcci.ipfs.w3s.link/ipfs/bafybeiex4vte2gsjltidebujkvxvuat2rm6oq5kntdf54gkiuxg7nxmcci/Area51-v1.glb) | [IPFS](https://bafybeidyy6zgd4b4tnba4wyxtlujpirxn3pv3qi2af5bs3ylbmqqnyusuy.ipfs.w3s.link/ipfs/bafybeidyy6zgd4b4tnba4wyxtlujpirxn3pv3qi2af5bs3ylbmqqnyusuy/Axies-v1.glb) | [IPFS](https://bafybeiea7hd7qicmlzl7wskvyajfktplnpxnk4adw7tm22lalkfb4ftzqi.ipfs.w3s.link/ipfs/bafybeiea7hd7qicmlzl7wskvyajfktplnpxnk4adw7tm22lalkfb4ftzqi/DeepSouth-v1.glb) |



| [Parcels](https://github.com/madjin/Cryptovoxels-snapshots) | [Wearables](https://github.com/M3-org/cryptovoxels-wearables) |
| --- | --------- |
| ![blender_Om6PfHUI0k](https://user-images.githubusercontent.com/32600939/200194527-c628dfd4-fb61-44da-acfb-1db1dab03014.png) | ![](https://i.imgur.com/9n9cLpt.png) |

| [Parcels](https://github.com/madjin/Cryptovoxels-snapshots) | [Wearables](https://github.com/M3-org/cryptovoxels-wearables) |
| --- | --------- |
| [![blender_Om6PfHUI0k](https://user-images.githubusercontent.com/32600939/200194527-c628dfd4-fb61-44da-acfb-1db1dab03014.png)](https://github.com/madjin/Cryptovoxels-snapshots) | [![](https://i.imgur.com/9n9cLpt.png)](https://github.com/M3-org/cryptovoxels-wearables) |


---

- https://github.com/madjin/cryptovoxels-vr - FBX and GLB files from 2019
- [Arweave backups](https://viewblock.io/arweave/address/f7QsdAM6sBC0UsUp1JoEXT93yMbCAPQIo1uBLhjDGSE) - Data snapshots from 2021
- [CryptoVoxelsArchive.sh](https://gist.github.com/samcamwilliams/26e0505d11a7c25cafc95e08c5be9c13) - Script used to take daily data snapshots

> Download the state of all land parcels in CryptoVoxels and deploy them to the Arweave's permaweb. Path to your Arweave keyhole must be changed in the `arweave deploy` line.

```
#!/bin/bash

mkdir -p CryptoVoxelsArchive/parcels

echo "Downloading map info..."

curl -s 'https://www.cryptovoxels.com/api/parcels.json' > CryptoVoxelsArchive/parcels.json
curl -s 'https://www.cryptovoxels.com/api/suburbs.json' > CryptoVoxelsArchive/suburbs.json
curl -s 'https://www.cryptovoxels.com/api/islands.json' > CryptoVoxelsArchive/islands.json

cat CryptoVoxelsArchive/parcels.json | jq '.parcels | .[] | .id' | while read id ;
do 
	echo "Downloading land parcel info $id..."
	curl -s "https://www.cryptovoxels.com/grid/parcels/$id" > CryptoVoxelsArchive/parcels/$id.json ;
done

echo "Creating zip."
zip -r -q CryptoVoxels-latest-archive.zip CryptoVoxelsArchive

echo "Deploying archive to Arweave."
arweave deploy --force-skip-confirmation CryptoVoxels-latest-archive.zip --key-file PATH_TO_YOUR_KEYFILE --tag AppName:CryptoVoxelsArchive
```

### Sketchfab Museum

**https://skfb.ly/oyOxO** - Download the Cryptovoxels 12-13-19 collection

Sketchfab is the leading 3D model sharing website on the web that many [cultural institutions and museums](https://sketchfab.com/members?segment=organization%2Fmuseum&sort_by=-followerCount&cursor=cD02MTI%3D) have picked to showcase artifacts on. They offer a wide range of [plugins](https://sketchfab.com/importers) to import glTF & USDZ 3D models directly into your favorite 3D software as well, like Blender seen below.

![](https://i.imgur.com/XCXMeAz.gif)

With the [blender plugin](https://github.com/sketchfab/blender-plugin/releases/latest) you can search for `cryptovoxels 2019` and quickly import chunks from the 12-13-2019 dataset into your project. We are planning to take another 3D snapshot of the world on the anniversary of the last one, 12-13-2022, and host a buildathon then right after.


### Optimization



The biggest district in the collection is Frankfurt comes in at a whopping 150mb and 1.7M triangles. I took a double look when I was able to compress this model down to 3.3mb via Draco using http://gltf.report. I could still could shave 30% with gzip as well, making the final compressed version only 2.1mb. To compare with a different method, Meshopt compression only went to 25mb and broke the collision in Hyperfy.

![](https://i.imgur.com/h6Dlyxh.jpg)
https://twitter.com/dankvr/status/1583596977312641024



https://twitter.com/dankvr/status/1516438706344890373