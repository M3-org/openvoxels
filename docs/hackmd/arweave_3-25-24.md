---
# System prepended metadata

title: Arweave Snapshot 3-25-24

---

# Arweave Snapshot 3-25-24






Create manifest file based on `list-folder` command

```python
import json

def generate_manifest(folder_data):
    manifest = {
        "manifest": "arweave/paths",
        "version": "0.1.0",
        "paths": {}
    }

    for item in folder_data:
        if item['entityType'] == 'file':
            path = item['name']
            manifest['paths'][path] = {
                "id": item['dataTxId']
            }

    return manifest

with open('folder_data.json', 'r') as f:
    folder_data = json.load(f)

manifest = generate_manifest(folder_data)

with open('manifest.json', 'w') as f:
    json.dump(manifest, f, indent=2)

print("Manifest file created: manifest.json")
```



Example sample manifest

```json
{
    "manifest": "arweave/paths",
    "version": "0.1.0",
    "index": {
        "path": "index.html"
    },
    "paths": {
        "hello_world.txt": {
            "id": "Y7GFF8r9y0MEU_oi1aZeD87vrmai97JdRQ2L0cbGJ68"
        },
        "index.html": {
            "id": "pELonjVebHyBsdxVymvxbGTmHD96v9PuuUXj8GUHGoY"
        }
    }
}
```

index.html is optional

can also create manifest with a different gateway first
`cat vox-model_manifest.json | jq '.manifest' > vox-model_manifest2.json`

uploading a custom manifest file
`ardrive upload-file --content-type "application/x.arweave-manifest+json" --local-path manifest.json --parent-folder-id "b02a4034-d1d4-4e69-ad93-49c9d59ac5ca" -w /path/to/wallet.json`




root folder for snapshot 3-25-24
`a326bf5c-a2af-495e-9ff2-64055778bd60`

can verify with `list-folder`

```json!
    {
        "appName": "ArDrive-CLI",
        "appVersion": "2.0.6",
        "arFS": "0.11",
        "contentType": "application/json",
        "driveId": "1d29f7b9-6bd2-43ec-9e0d-8b630e617c34",
        "entityType": "file",
        "name": "DriveManifest.json",
        "txId": "5LzIsrGrZhaPzzzGeUzNtvOpuQrwu08kyWyIJucZrfk",
        "unixTime": 1725478906,
        "size": 388768,
        "lastModifiedDate": 1725478904,
        "dataTxId": "Ga7eAPXKp6plYXXLMg8yKU79QiNxIANU_pAqguuVr80",
        "dataContentType": "application/x.arweave-manifest+json",
        "parentFolderId": "a326bf5c-a2af-495e-9ff2-64055778bd60",
        "entityId": "8184a040-0526-4070-a64a-647888f84c46",
        "fileId": "8184a040-0526-4070-a64a-647888f84c46",
        "path": "/3-25-24/DriveManifest.json",
        "txIdPath": "/XkB-dMLzMFtL6CpfAhTQ79AGwL5GVIoiqZ-TCVF9E3o/5LzIsrGrZhaPzzzGeUzNtvOpuQrwu08kyWyIJucZrfk",
        "entityIdPath": "/a326bf5c-a2af-495e-9ff2-64055778bd60/8184a040-0526-4070-a64a-647888f84c46"
    },
```

ardrive upload-file --content-type "application/x.arweave-manifest+json" --local-path vox-model_manifest2.js
on --parent-folder-id "a326bf5c-a2af-495e-9ff2-64055778bd60" -w ~/.chest/arweave_openvoxels_snapshot_3-25-24.json

```json
{
    "created": [
        {
            "type": "file",
            "entityName": "vox-model_manifest2.json",
            "entityId": "f8ad5ee3-075e-4147-a063-bc48ae1c28f2",
            "dataTxId": "NFeI2QzhhHDUO825l0UqIm1tRhGx5r-I2QN082X0SbQ",
            "metadataTxId": "SyZwjRM0gwuBbXGAu-8hcY3VpB-R-vFZdXhFYaS8PBg",
            "bundledIn": "_8_JjMyG__N_CjdC-bzdK0Vk7RMc9kdIIbCUza1rBgw",                                                                                  "sourceUri": "file:///home/jin/repo/Cryptovoxels-snapshots/3-25-24/vox-model_manifest2.json"
        },
        {
            "type": "bundle",
            "bundleTxId": "_8_JjMyG__N_CjdC-bzdK0Vk7RMc9kdIIbCUza1rBgw"
        }
    ],
    "tips": [
        {
            "recipient": "Zznp65qgTIm2QBMjjoEaHKOmQrpTu0tfOcdbkm_qoL4",
            "txId": "_8_JjMyG__N_CjdC-bzdK0Vk7RMc9kdIIbCUza1rBgw",
            "winston": "411597301"
        }
    ],
    "fees": {
        "_8_JjMyG__N_CjdC-bzdK0Vk7RMc9kdIIbCUza1rBgw": "2743982009"
    }
}
```

Notice the removal of /tx from the path. /tx is for the retrieval of base layer transaction HEADERS

https://viewblock.io/arweave/tx/G7jnBY7m89rFIXYfNSAd-Td7rwkU_Tj5jxwgEqju5oo


The manifest is here: https://arweave.net/Ga7eAPXKp6plYXXLMg8yKU79QiNxIANU_pAqguuVr80

It looks like an image right?

To view the manifest in the raw, you use the /raw route.
https://arweave.net/raw/Ga7eAPXKp6plYXXLMg8yKU79QiNxIANU_pAqguuVr80


Base URI is the manifest tx ID `Ga7eAPXKp6plYXXLMg8yKU79QiNxIANU_pAqguuVr80`

https://arweave.net/Ga7eAPXKp6plYXXLMg8yKU79QiNxIANU_pAqguuVr80/uploads/atlas/fe74bfe5f32ebbf22bf68ccd24a278f996e25fd9.png


```json!
{
  "manifest": "arweave/paths",
  "version": "0.1.0",
  "paths": {
    "00014288.vox": {
      "id": "RooIFJvkk367Oudf7nu8Aq7k3MxIUb1XgHNPDGWRiiU"
    },
    "00055bd2.vox": {
      "id": "HLje0kHQs-OPln2vNiZtUB0yueRAEjnAJaqBjiIVjl0"
    },
    "00065ab7.vox": {
      "id": "hh4p5hAxUxT_t_tDJGWq_BFGeLEqf7XMIZJlV_k_WDI"
    },
    "000770ba.vox": {
      "id": "tfr3jEbTEsfJNw1uQWoJ-ux7aoqr0vFpSdPGnepKons"
    },
    "00079351.vox": {
      "id": "QIZlqTKxyYLExy6cl5HqgxptJVOIf1QqfoSU6OF2kYw"
    },
    "0008a336.vox": {
      "id": "jVcy7uO311K9DZRAk5BYyCfBa_GQJUnG7bJOwx5arp0"
    },
...
```

uploads/atlas/fe74bfe5f32ebbf22bf68ccd24a278f996e25fd9.png
uploads/atlas/ffd8ba6bfcdfeb7e021aeaa81d2710699132088c.png

https://arweave.net/ + txID + path