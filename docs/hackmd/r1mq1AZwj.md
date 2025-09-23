---
# System prepended metadata

title: Openvoxels Wearables 2
tags: [m3, cv]

---

# Openvoxels Wearables 2

###### tags: `cv` `m3`



## Wearables Dataset


One liner I'm using to calculate average file size:
`ls -l | awk '{s+=$5} END {print "Average file size: " s/NR/1024 "k"}'`


- vox average size: **52.29 KB**
- svox average size: **5.53 KB**
    - compressed: **2kb**
- glb average size: **203.21 KB**

![](https://i.imgur.com/86KNtep.png)


---


## Further Optimization

More experiments with [svox-tools](
https://github.com/jel-app/svox-tools) by gfodor.



**Svox (vanilla)**

Average file size: 6.27211k

**Shiny svox**

Average file size: 6.36523k

**Svox Compressed**

Average file size: 2.14575k

**glb**

Average file size: 303.259k


---

## Model viewer

Generate a HTML for each glb

<model-viewer camera-controls alt="$1" src="$2"></model-viewer>


![](https://i.imgur.com/Pk4vIN3.jpg)




---

## Metadata

Create a wearable: https://wiki.cryptovoxels.com/Player_customization/Create_a_wearable


Example metadata: https://www.cryptovoxels.com/c/1/1

```json
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

This is the original json for a cryptovoxels wearable that I want to infuse into a gltf file.


gltf-transform can take a .json as an argument for xmp so this process can be scripted 

thoughts:
- I wanna upload the data to arweave / ipfs and replace the links
- I want to add fields for additional file formats
- concern: mismatching fields with recommended ones
- what else might be useful for interop?

**Proposal**

1. Use gltf-transform CLI with xmp extension to add metadata into glTF

- https://github.com/adobe/xmp-docs
- https://gltf-transform.donmccurdy.com/classes/extensions.packet.html
- https://gltf-transform.donmccurdy.com/cli.html

```json
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
      "trait_type": "glb",
      "value": "ipfs://<hash>"
    },
    {
      "trait_type": "svox",
      "value": "ipfs://<hash>"
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

Here's an example xmp json

```json
{
  "packets": [
    {
      "@context": {
        "dc": "http://purl.org/dc/elements/1.1/",
        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        "xmp": "http://ns.adobe.com/xap/1.0/",
        "xmpRights": "http://ns.adobe.com/xap/1.0/rights/",
        "model3d": "https://schema.khronos.org/model3d/xsd/1.0/"
      },
      "@id": "",
      "dc:creator": ["Khronos 3DCommerce Working Group"],
      "dc:description": {
        "@type": "rdf:Alt",
        "rdf:_1": {
          "@language": "en-us",
          "@value": "Example XMP metadata demonstrating how to include Creative Commons rights metadata."
        }
      },
      "dc:title": {
        "@type": "rdf:Alt",
        "rdf:_1": {
          "@language": "en-us",
          "@value": "Creative Commons Example"
        }
      },
      "xmp:MetadataDate": "2020-08-01T12:00Z",
      "xmpRights:Marked": false,
      "xmpRights:UsageTerms": {
        "@type": "rdf:Alt",
        "rdf:_1": {
          "@language": "en-us",
          "@value": "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License."
        }
      },
      "model3d:spdxLicense": "CC-BY-4.0"
    }
  ]
}
```

---

## Notes

Creators are allowed an optional 3 extra attributes per wearable
![](https://i.imgur.com/NdagMr9.png)



**Rarity**
> The number of issues of your wearable will dictate its rarity.
>
> Common = Greater or equal to 1000 issues
Rare = Greater or equal to 100 issues and smaller than 1000
Epic = Greater or equal to 10 issues and smaller than 100
Legendary = Greater or equal to 1 issues and smaller than 10


---

## Combing metadata with GLTF

throwing out most of this
https://github.com/KhronosGroup/3DC-Metadata-Recommendations/blob/main/model3d.md


using this to programmatically add json to glb: https://github.com/KhronosGroup/glTF-Metadata-CLI

example command: `cargo run -- -i 1.glb -o out8.glb -j 1_new.json`

example json:

```json 
{
  "packets": [
    {
      "name": "Goldensword",
      "author": "Bullauge",
      "description": "One of the first swords minted for cryptovoxels!",
      "issues": "8",
      "rarity": "legendary",
      "external_url": "https://www.voxels.com/collections/eth/0xa58b5224e2fd94020cb2837231b2b0e4247301a6/1" 
  }
 ]
}
```

old json (from NFT):

```json
{"name":"GoldenSword","image":"https://wearables.sfo2.digitaloceanspaces.com/1d83521d-e9c2-4d9f-bc69-862ac82b588a-goldensword.gif","description":"One of the first swords minted for cryptovoxels!","attributes":[{"trait_type":"vox","value":"https://www.voxels.com/w/abd4effa1479f0a8f0072da0f22928e9fb1bad42/vox"},{"trait_type":"author","value":"Bullauge"},{"trait_type":"issues","value":8},{"trait_type":"rarity","value":"legendary"},{"trait_type":"suppressed","value":false}],"external_url":"https://www.voxels.com/collections/eth/0xa58b5224e2fd94020cb2837231b2b0e4247301a6/1","background_color":"f3f3f3"}
```

![](https://i.imgur.com/vo21mna.png)
![](https://i.imgur.com/90Y11Al.png)


## ChatGPT Transform JSON




![](https://i.imgur.com/hFgNm57.png)


This is what it gave me


```bash
#!/bin/bash

# To use the script, save it to a file and make it executable (e.g., chmod +x script.sh), then pass the input JSON to the script via stdin (e.g., cat input.json | ./script.sh). The transformed JSON will be printed to stdout.

# Note: This script assumes that the input JSON is well-formed and contains all the required fields. You may want to add additional error handling to the script if the input JSON is not guaranteed to be valid.

# Read the input JSON
json=$(cat)

# Extract the values of the desired fields
name=$(echo "$json" | jq -r '.name')
author=$(echo "$json" | jq -r '.attributes[] | select(.trait_type == "author").value')
description=$(echo "$json" | jq -r '.description')
issues=$(echo "$json" | jq -r '.attributes[] | select(.trait_type == "issues").value')
rarity=$(echo "$json" | jq -r '.attributes[] | select(.trait_type == "rarity").value')
external_url=$(echo "$json" | jq -r '.external_url')

# Construct the output JSON
output=$(cat <<EOF
{
  "packets": [
    {
      "name": "$name",
      "author": "$author",
      "description": "$description",
      "issues": "$issues",
      "rarity": "$rarity",
      "external_url": "$external_url"
    }
  ]
}
EOF
)

# Print the output JSON
echo "$output"
```


here's how you can loop it on whole directory of NFT metadata




```bash
#!/bin/bash

# Create the output directory if it doesn't exist
if [ ! -d "out" ]; then
  mkdir out
fi

# Loop through all JSON files in the current directory
for file in *.json; do
  # Pipe the contents of the file to the convert.sh script
  # and save the output to the out directory
  cat "$file" | ./convert.sh > "out/$file"
done
```


converting with vengi-voxconverter

```bash!
#!/bin/bash

# Find all .vox files recursively
find ./ -iname "*.vox" | while IFS= read -r vox_file; do
    # Get the output filename by replacing .vox with .glb
    output_file="${vox_file%.vox}.glb"

    # Convert .vox to .glb using vengi-voxconvert
    ./voxconvert/vengi-voxconvert -set palette built-in:magicavoxel -i "$vox_file" -o "$output_file"

    echo "Converted $vox_file to $output_file"
don
```

---
