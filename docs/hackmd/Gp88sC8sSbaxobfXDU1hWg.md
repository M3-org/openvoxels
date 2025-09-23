---
# System prepended metadata

title: Snapshot of Voxels Creators

---

# The Wearables Museum

[toc]




---

## Wearables 2.0

{%youtube EEmDpi8BPxg %}

https://www.youtube.com/watch?v=EEmDpi8BPxg

**New thumbnails**

50% bigger resolution, 5x smaller filesize, transparent background, still GIF format.

![comparing_wearables_thumbnails](https://hackmd.io/_uploads/rJWGW06xA.gif)

**New previews**

Different skyboxes to represent the years a wearables collection was minted. Each skybox is a 360 equirectangular picture from a VRChat world that Voxels content was ported into and reflects the era:

- 2019-2020: Black and white era
- 2021: Color emerges, calm before the storm
- 2022: NFT and metaverse hype cycle peaks
- 2023: Desert to represent the winter that followed
- 2024: Half voxels half sea to represent WIP year + islands

View demo: https://arweave.net/DQzDSe2GFKopqmFOuwdefIWA53dtt6wy-6k609QiMg4

![](https://i.imgur.com/G4zvqjs.gif)

**AR + VR Support via glTF and USDZ**

Every wearable can now be previewed in AR and VR. Tested across android and IOS devices including the Apple Vision Pro. 

![voxels-pro2](https://hackmd.io/_uploads/BJFR-Cpe0.gif)

**New metadata**

![Screenshot_2024-05-03_20-07-57](https://hackmd.io/_uploads/BJjXxZXz0.jpg)
![image](https://hackmd.io/_uploads/B1MhVo7NR.png)

**Before and After**

{
  "name": "GoldenSword",
  ~~"image": "https://wearables.sfo2.digitaloceanspaces.com/1d83521d-e9c2-4d9f-bc69-862ac82b588a-goldensword.gif",~~
  **"image": "https://arweave.net/imWC-qa6W4oUk4Sr4fexhmMf_OWNyW_L9Ga5m62OB0c",**
  "description": "One of the first swords minted for cryptovoxels!",
  "attributes": [
    {
      "trait_type": "vox",
      ~~"value": "https://www.voxels.com/w/abd4effa1479f0a8f0072da0f22928e9fb1bad42/vox"~~
      **"value": "https://arweave.net/IhzgDZROfUyHnFUa-upCLgDC77BsUT8dVWI9aVqvBMo"**
    },
    {
      "trait_type": "author",
      "value": "Bullauge"
    },
    {
      "trait_type": "issues",
      "value": 8
    },
    {
      "trait_type": "rarity",
      "value": "legendary"
    },
    {
      "trait_type": "suppressed",
      "value": false
    },
    **{
      "trait_type": "glb",
      "value": "https://arweave.net/yqxAl7ElGZeX7D_23HBe5OzBAYCa_t_9_3s2l9JQeZQ"
    },
    {
      "trait_type": "collection",
      "value": "Cryptovoxels Wearables"
    },
    {
      "trait_type": "year",
      "value": "2020"
    }**
  ],
  "external_url": "https://www.voxels.com/collections/eth/0xa58b5224e2fd94020cb2837231b2b0e4247301a6/1",
  "background_color": "f3f3f3",
  **"animation_url": "https://arweave.net/zc6D0ExUbDRRqp_E1n4Lyp2L50jXYuHQWhhw6p-t7gg"**
}



**Mission complete!**


Brief summary of wearables 2.0:

- Upgraded file formats
    - glb with encoded xmp metadata in addition to vox
- Upgraded to decentralized storage
    - From voxels.com to arweave for all assets
- Upgraded thumbnails
    - Transparent gifs, ~9x smaller file size + 50% bigger resolution
- Upgraded previews
    - HTML files hosted on arweave with AR+VR previews
- Upgraded metadata
    - Updated the links, added fields like glb + collection info


---

## Blockchain Snapshot and Stewardship

Date taken: **March 12, 2024**

- **https://docs.google.com/spreadsheets/d/19Fab72iK5Ks9KeI_ArY79m0wxyL10s45obZr1FGnKKo/edit?usp=sharing** :star:
    - https://www.voxels.com/collections

![image](https://hackmd.io/_uploads/SkbXBCNJR.png)


**Stats**

The Cryptovoxels community has designed over **34,000** unique wearables to **111,557 collectors** holding a total of 350,263 NFTs! 

For sake of comparison, Decentraland has about **6840** unique wearables designs (Dune sources say ~10k) made by ~1587 creators and have about **4531 collectors**.

**Number of Cryptovoxels wearables minted per year:**
- 2020: 3138
- 2021: 21792
- 2022: 8621
- 2023: 438
- 2024: 26 (as of snapshot date)

### Points


Each [voxels parcel](https://etherscan.io/token/0x79986af15539de2db9a5086382daeda917a9cf0c#balances) owned is 1 point = 7,937
Wearbles creator impact (see below) = 11,867
Total = 19804

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


```python!
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
```



**Snapshot strategies**

In addition to a standard strategy for who owns a Voxels parcel, we implemented the whitelist weighted strategy that incorporated the points calculated in the steps above for wearables creators to have a strong voice in voting.

```
whitelist weighted
{
  "symbol": "ABC",
  "addresses": {
    "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11": 5,
    "0xeF8305E140ac520225DAf050e2f71d5fBcC543e7": 2
  }
}
```





---

## Distribution Strategies

What is the next step? Here's a couple ideas I got:

**1. Create guide for collectible owners to update collections themselves**

The creator of a collection **overwrites** the existing NFT metadata with the new metadata, thereby upgrading the NFTs everyone already has to the new decentralized versions.

![image](https://hackmd.io/_uploads/ByQuC6QNC.png)

**Benefits:**
- no remint, just update existing contracts
    - 1 time transaction vs airdropping
    - maintain provenance, collectors already have it
- unsold copies can find new market value as durable and interoperable wearables

**Downsides:**
- Will it break things in voxels.com? Need to test
    - can still have `vox` as trait_type
    - could create a baseURI like `https://www.cryptovoxels.com/c/7/{id}` with Arweave for linking to the metadata
- Would still be hard to update all collections
- Could look messy if mix of old + new wearables

---

**2. Create a new voxels wearable collection on a L2**

Similar to a fork. It would not be an upgrade to the Voxels wearables, but rather a new collection to immortalize a ***SNAPSHOT*** of all the wearables. This option is like having an on-chain mirror.

![image](https://hackmd.io/_uploads/BJFd-CX40.png)


**Benefits:**
- Full upgrade: All wearables 2.0 would look really nice together
- Immortalize the whole snapshot of wearables as a NFT collection
- Can airdrop or allow list previous owners to mint or burn redeem?
- Unsold copies can find new market value as durable and interoperable wearables
    - Use a splits contract to pay creators from sales?

**Downsides:**
- It might be confusing when searching for a wearable to see 2 similar results
- 100k+ collectors, many might not know + still expensive to airdrop
- It turns 800 creator owned collections into 1 collection
    - Perhaps this can be seen as a good thing for discoverability!

**3. Create a NFT Avatar Collection**

We mint all costumes as VRM avatar NFTs and create a pool of shared assets to generate into new avatars. The mannequin base mesh can be an OG trait, but we don't have to be limited to it.

![LbytuJP-ezgif.com-optimize](https://hackmd.io/_uploads/rkfEdTX40.gif)

**Benefits**

- By minting avatars, not wearables, we can reduce some confusion
    - No duplicate wearables in marketplace
- Can broaden the appeal of Voxels to new people
- We can make the collection look absolutely stunning
- Feels fun and innovative, like metaverse passports + immigration cards
- This option can potentially pair with another option
- Can use splits contract to drive sales to a DAO

**Downsides**:

- There's a lot of wearables, not all of them might make it in
- What would be a fair split?
    - Maybe based on number of factors: wearables contributed, support for openvoxels, etc
- Might be hard to get permission to use wearables from a bunch of creators?



---

## Costume -> VRM Avatar Export



https://twitter.com/dankvr/status/1776862119184515394


![Screenshot_2024-05-25_15-33-17](https://hackmd.io/_uploads/BJbGr-4VR.jpg)



---

### Avatar Tailoring Service

Introduce it as a WIP, intermediate solution, human in the loop of the interoperability process. Anyone who donated to Openvoxels gets priority first. We can sell excess wearables by doing an avatar collection. More to come later.

![image](https://hackmd.io/_uploads/H1kHHx8x0.png)

Price: 0.03 ETH

Juicebox NFT token with Openvoxels logo
Burn to redeem in manifold contract
https://opensea.io/collection/cryptovoxel-avatars

Show boom tools with voxels avatar

https://vimeo.com/455114096

> split into new post? Maybe tokenbound 6551 ideas can influence voting decision?
https://hackmd.io/cGIAtRscTua-xJDOUnsMlw



---

## Notes

I also think the dataset should get uploaded to Internet Archive for extra redundancy in order to immortalize our cultural artifacts for long term preservation.

youtube uploads

(turn off vpn)

vrm export openvoxels
ode to makers openvoxels
preview wearables openvoxels
QA wearables openvoxels

openvoxels updates

- ~~upload new baked wearables to github~~
- ~~upload new baked wearables to arweave~~
- ~~create new manifest file from arweave~~


Vote on what's next:

Slowly keep building a metaverse time machine

Upload new snapshots

12-17-22 snapshot

- have all glbs + metadata about each parcel
- would take days to upload all the 12-17-22 snapshots to sketchfab
- Could then upload to Internet Archive + Mint as NFTs on Voxel Relics
  - airdrop to all owners of time of snapshot per district?
  - add as collaborator for something? share screenshots for museum?
  - update vrchat world, link to previous world for before/after

ETA: 2-3 months


Benefits:
- Show the growth that happened when nfts blew up into mainstream
- Almost exactly 3 years apart from the previous snapshot
- Have all the metadata about who owns what + links on each parcel

3-25-24 snapshot


- Could potentially be the most complete snapshot
- Voxels + Vox models + in-world media (not nfts)


create posters from blog posts

- airdrop books to all openvoxels supporters via Voxel Relics




![mpv-shot0006](https://hackmd.io/_uploads/rJhO7_ZGA.jpg)


---

I want to create a script that generates a new version of metadata I have, here's an example of what the current version looks like:

metadata/nft/1/1.json
```json!
{
  "name": "GoldenSword",
  "image": "https://wearables.sfo2.digitaloceanspaces.com/1d83521d-e9c2-4d9f-bc69-862ac82b588a-goldensword.gif",
  "description": "One of the first swords minted for cryptovoxels!",
  "attributes": [
    {
      "trait_type": "vox",
      "value": "https://www.voxels.com/w/abd4effa1479f0a8f0072da0f22928e9fb1bad42/vox"
    },
    {
      "trait_type": "author",
      "value": "Bullauge"
    },
    {
      "trait_type": "issues",
      "value": 8
    },
    {
      "trait_type": "rarity",
      "value": "legendary"
    },
    {
      "trait_type": "suppressed",
      "value": false
    }
  ],
  "external_url": "https://www.voxels.com/collections/eth/0xa58b5224e2fd94020cb2837231b2b0e4247301a6/1",
  "background_color": "f3f3f3"
}
```

There are more json files similar to it in subfolders within metadata/nft/
The folder the json file is in is important and worth saving as a variable, such as collection_id
It will be reusable for crafting file paths and parsing other JSON files

I have new values and fields I want to add from various data sources I have
I started a bash script and could use your help to complete it:

```bash!
#!/bin/bash

# Where the metadata about each wearables collection lives
collection_path="/home/jin/repo/cryptovoxels-wearables/metadata/collections"

# Check if the correct number of arguments are provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

# Function to convert JSON file
convert_json_file() {
    local json_file="$1"

    # Read JSON content from the file, handling errors
    if ! json_content=$(jq '.' "$json_file" 2>/dev/null); then
        echo "Error: Unable to read JSON content from $json_file" >>conversion_error.log
        return 1
    fi

    # Extract the values of the desired fields using jq
    name=$(echo "$json_content" | jq -r '.name')
    image=$(echo "$json_content" | jq -r '.image')
    description=$(echo "$json_content" | jq -r '.description')
    vox=$(echo "$json_content" | jq -r '.attributes[] | select(.trait_type == "vox").value')
    author=$(echo "$json_content" | jq -r '.attributes[] | select(.trait_type == "author").value')
    issues=$(echo "$json_content" | jq -r '.attributes[] | select(.trait_type == "issues").value')
    rarity=$(echo "$json_content" | jq -r '.attributes[] | select(.trait_type == "rarity").value')
    suppressed=$(echo "$json_content" | jq -r '.attributes[] | select(.trait_type == "suppressed").value')
    external_url=$(echo "$json_content" | jq -r '.external_url')
    background_color=$(echo "$json_content" | jq -r '.background_color')
   
    # Get the collection ID from the directory name
    collection_id=$(basename "$(dirname "$json_file")")

    # Read collection content from the file, handling errors
    if ! collection_content=$(jq '.' "$collection_path/$collection_id.json" 2>/dev/null); then
        echo "Error: Unable to read collection content from $collection_path/$collection_id.json" >>conversion_error.log
        return 1
    fi

    # Extract the values of the desired fields from collection content using jq
    collection_name=$(echo "$collection_content" | jq -r '.name')
    collection_description=$(echo "$collection_content" | jq -r '.description')
    collection_owner=$(echo "$collection_content" | jq -r '.owner')
    collection_address=$(echo "$collection_content" | jq -r '.address')
    collection_date=$(echo "$collection_content" | jq -r '.created_at')
    year=$(grep -oP '"collection_date": "\K\d{4}' "$collection_content")

    # Escape special characters in the output fields
    name=$(printf '%s' "$name" | jq -sRr @uri)
    author=$(printf '%s' "$author" | jq -sRr @uri)
    description=$(printf '%s' "$description" | jq -sRr @uri)
    collection_name=$(printf '%s' "$collection_name" | jq -sRr @uri)
    collection_description=$(printf '%s' "$collection_description" | jq -sRr @uri)
    collection_owner=$(printf '%s' "$collection_owner" | jq -sRr @uri)

    # Construct the output JSON
    output=$(cat <<EOF
{
  "name": "$name",
  "image": "$new_image",
  "description": "$description",
  "animation_url": "$html",
  "attributes": [
    {
      "trait_type": "vox",
      "value": "$new_vox"
    },
    {
      "trait_type": "glb",
      "value": "$glb_xmp_baked"
    },
    {
      "trait_type": "author",
      "value": "$author"
    },
    {
      "trait_type": "issues",
      "value": "$issues"
    },
    {
      "trait_type": "rarity",
      "value": "$rarity"
    },
    {
      "trait_type": "collection",
      "value": "$collection_name"
    },
    {
      "trait_type": "year",
      "value": "$year"
    },
    {
      "trait_type": "suppressed",
      "value": "$suppresed"
    }
  ],
  "external_url": "$external_url",
  "background_color": "$background_color"
}
EOF
)

    # Define the output file name
    output_file="new_${json_file%.*}.json"

    # Output the JSON content to the new file
    echo "$output" > "$output_file"

    echo "Converted $json_file to $output_file"
}

# Main script

# Get the directory path from the command-line argument
directory="$1"

# Find all JSON files recursively in the provided directory
json_files=$(find "$directory" -type f -name '*.json')

# Iterate over each JSON file and convert it
for json_file in $json_files; do
    convert_json_file "$json_file"
done >>conversion_error.log 2>&1
```

----------


Here is where metadata for html, new_vox, and glb_xmp_baked lives:

glb_manifest_file="metadata/arweave/glb-xmp-baked_manifest.json"
html_manifest_file="metadata/arweave/html_manifest.json"
vox_manifest_file="metadata/arweave/vox_manifest.json"
paths_data=$(jq -r '.manifest.paths' "$manifest_file")


Here is a sample of what one of those files look like from html_manifest.json:

```jsonld
{
    "created": [
        {
            "type": "file",
            "entityName": "DriveManifest.json",
            "entityId": "7cade6e0-0d37-47cc-a3a0-f636fb476096",
            "dataTxId": "wQ4EqSzPedYUtBfW_Rw5A9bfqNSxpxUhTUVvT_QZrtI",
            "metadataTxId": "2ckuGm_MsjTlYV3EAT3VlXfHtQSUveP4gnGVUjUI2ME",
            "bundledIn": "Wf6DOaWaVSFhiYsMCqN0sJHq32cox4I-02490Q-y9qU"
        },
        {
            "type": "bundle",
            "bundleTxId": "Wf6DOaWaVSFhiYsMCqN0sJHq32cox4I-02490Q-y9qU"
        }
    ],
    "tips": [
        {
            "recipient": "-OtTqVqAGqTBzhviZptnUTys7rWenNrnQcjGtvDBDdo",
            "txId": "Wf6DOaWaVSFhiYsMCqN0sJHq32cox4I-02490Q-y9qU",
            "winston": "247092673"
        }
    ],
    "fees": {
        "Wf6DOaWaVSFhiYsMCqN0sJHq32cox4I-02490Q-y9qU": "2470926734"
    },
    "manifest": {
        "manifest": "arweave/paths",
        "version": "0.1.0",
        "index": {
            "path": "1/1.html"
        },
        "paths": {
            "1/1.html": {
                "id": "zc6D0ExUbDRRqp_E1n4Lyp2L50jXYuHQWhhw6p-t7gg"
            },
            "1/10.html": {
                "id": "LRXlBQ_e6q--T2Ky_-893D3UdpsBENyaouodOW4PkV0"
            },
            "1/100.html": {
                "id": "zXga65TaofWS1n0jhgJ8nhkbIrYPCeRrkBAhXQC4T40"
            },
            "1/1000.html": {
                "id": "zyfyUf1Kwo6NZdq2p6tCzu83SfbiFwXxFmTAMmqyP7M"
            },
            "1/1001.html": {
                "id": "FkQpQovTbwAekOLo3mSdLp-JVXVuV4EOB5ygbVvRbx0"
            },
            "1/1002.html": {
                "id": "w9k2KK3aIhutNtnxwWzPGQ25qbq9XFdYmNU_Y3EtQoc"
            },
            "1/1003.html": {
                "id": "5lwKk1euEIHifU413ewXwMNLAHZky-lEMqK5LQuXN0k"
            },
            "1/1004.html": {
                "id": "meZLkK2unDDvs31s4gZmoa48QpIfl5rrFn00c0G2sq4"
            },
            "1/1005.html": {
                "id": "Gm0U6rttxPYHyYFp36UIySR2Zz9ir0Hu8MyZtEG91hk"
            },
```

in 1/10.html the 1 pertains to the collection_id, and 10.html pertains to the nft_id
I need the value of the id to add it as part of a url like https://arweave.net/$id

Each of these variables would be the combination of https://arweave.net/ + $id per file

$html = arweave link from html_manifest.json
$new_vox = arweave link from vox_manifest.json
$glb_xmp_baked = arweave link from glb-xmp-baked_manifest.json
$year = regex from $collection_date


---

## Viewers


https://infinite-scroll.com/

https://wlada.github.io/vue-carousel-3d/examples/
https://jsfiddle.net/Wlada/r6auc7bh/

https://astro.build/
https://astro-multiverse.vercel.app/


display poster until loaded
<model-viewer id="reveal" loading="eager" camera-controls touch-action="pan-y" auto-rotate poster="../../assets/poster-shishkebab.webp" src="../../shared-assets/models/shishkebab.glb" shadow-intensity="1" alt="A 3D model of a shishkebab"></model-viewer>



Use CSS-like calc() to sync camera orbit with scroll position
https://modelviewer.dev/examples/stagingandcameras/#orbitAndScroll

<model-viewer camera-controls touch-action="pan-y" camera-orbit="calc(-1.5rad + env(window-scroll-y) * 4rad) calc(0deg + env(window-scroll-y) * 180deg) calc(5m - env(window-scroll-y) * 10m)" src="../../shared-assets/models/Astronaut.glb" alt="A 3D model of an astronaut"></model-viewer>


threejs

https://codesandbox.io/p/sandbox/image-gallery-lx2h8




https://developer.playcanvas.com/tutorials/ui-elements-leaderboard/



![output](https://hackmd.io/_uploads/ry27JC6gA.gif)

```bash!
ffmpeg \
-i 39.gif -i 45.gif -i 148.gif -i 149.gif -i 169.gif -i 808.gif \
-filter_complex "\
color=c=black:s=900x600 [base]; \
[0:v] scale=300x300 [upperleft]; \
[1:v] scale=300x300 [uppermiddle]; \
[2:v] scale=300x300 [upperright]; \
[3:v] scale=300x300 [lowerleft]; \
[4:v] scale=300x300 [lowermiddle]; \
[5:v] scale=300x300 [lowerright]; \
[base][upperleft] overlay=shortest=1 [tmp1]; \
[tmp1][uppermiddle] overlay=shortest=1:x=300 [tmp2]; \
[tmp2][upperright] overlay=shortest=1:x=600 [tmp3]; \
[tmp3][lowerleft] overlay=shortest=1:y=300 [tmp4]; \
[tmp4][lowermiddle] overlay=shortest=1:x=300:y=300 [tmp5]; \
[tmp5][lowerright] overlay=shortest=1:x=600:y=300" \
-c:v gif output.gif

```