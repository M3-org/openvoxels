**Quick summary of wearables 2.0:**

*   Upgraded file formats
    
    *   glb with encoded xmp metadata in addition to vox
        
*   Upgraded to decentralized storage
    
    *   From [voxels.com](http://voxels.com) to arweave for all assets
        
*   Upgraded thumbnails
    
    *   Transparent gifs, ~9x smaller file size + 50% bigger resolution
        
*   Upgraded previews
    
    *   HTML files hosted on arweave with AR+VR previews
        
*   Upgraded metadata
    
    *   Updated the links, added fields like glb + collection info
        

[![](https://paragraph.com/editor/youtube/play.png)](https://www.youtube.com/watch?v=EEmDpi8BPxg)

**New thumbnails**

50% bigger resolution, 5x smaller filesize, transparent background, still GIF format.

![The thumbnails for all the wearables have been completely remade](https://storage.googleapis.com/papyrus_images/f59b73f77128d22fa77d9f698fc1ba00ef7189db4976c75b8c289cb89989c1bf.gif)

The thumbnails for all the wearables have been completely remade

**New previews**

Different skyboxes to represent the years a wearables collection was minted. Each skybox is a 360 equirectangular picture from a VRChat world that Voxels content was ported into and reflects the era:

*   2019-2020: Black and white era
    
*   2021: Color emerges, calm before the storm
    
*   2022: NFT and metaverse hype cycle peaks
    
*   2023: Desert to represent the winter that followed
    
*   2024: Half voxels half sea to represent WIP year + islands
    

View a demo: [https://arweave.net/DQzDSe2GFKopqmFOuwdefIWA53dtt6wy-6k609QiMg4](https://arweave.net/DQzDSe2GFKopqmFOuwdefIWA53dtt6wy-6k609QiMg4)

![Different skyboxes per year the collection was minted ](https://storage.googleapis.com/papyrus_images/8a9fd84f65959f6f39612216ee2f15cb2f952a85460335263a8f47a486a04f52.gif)

Different skyboxes per year the collection was minted

**AR + VR Support via glTF and USDZ**

Every wearable can now be previewed in AR and VR. Tested across android and IOS devices including the Apple Vision Pro.

![You can view the wearables via Safari on ios and Apple Vision Pro](https://storage.googleapis.com/papyrus_images/b1eccc652af18f7471cc9910f844e5c758b0f658a82623c46adb6551383c2a2b.gif)

You can view the wearables via Safari on ios and Apple Vision Pro

**New metadata**

The NFT metadata for every wearable across every collection in the snapshot has been updated. On the right is a preview of the new metadata with arweave links and new metadata fields such as glb, collection, year, and animation\_url for the HTML preview.

![On the left is the old metadata, on the right is the new metadata with arweave links, glb link, collection metadata, and a link to the HTML preview](https://storage.googleapis.com/papyrus_images/d6ebe818ed9b598d201e454037a642c4e605eb8470c38b8406541df0f5083cf0.jpg)

On the left is the old metadata, on the right is the new metadata with arweave links, glb link, collection metadata, and a link to the HTML preview

Mission complete!


Blockchain Snapshot and Stewardship
-----------------------------------

Date taken: **March 12, 2024**

*   [**https://docs.google.com/spreadsheets/d/19Fab72iK5Ks9KeI\_ArY79m0wxyL10s45obZr1FGnKKo/edit?usp=sharing**](https://docs.google.com/spreadsheets/d/19Fab72iK5Ks9KeI_ArY79m0wxyL10s45obZr1FGnKKo/edit?usp=sharing)
    
    *   [https://www.voxels.com/collections](https://www.voxels.com/collections)
        
          
        

![image](https://storage.googleapis.com/papyrus_images/4097733d5857cbbf6073a68242c7c22d16e6b90e08a8bad3f4c6a7c871a1e9b7.png)

The Cryptovoxels community has designed over **34,000** unique wearables to **111,557 collectors** holding a total of 350,263 NFTs!

For sake of comparison, Decentraland has about **6840** unique wearables designs (Dune sources say ~10k) made by ~1587 creators and have about **4531 collectors**.

**Number of Cryptovoxels wearables minted per year:**

*   2020: 3138
    
*   2021: 21792
    
*   2022: 8621
    
*   2023: 438
    
*   2024: 26 (as of snapshot date)
    

### Points

Each [voxels parcel](https://etherscan.io/token/0x79986af15539de2db9a5086382daeda917a9cf0c#balances) owned is 1 point = 7,937 Wearbles creator impact (see below) = 11,867 Total = 19804

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

**Snapshot strategies**

In addition to a standard strategy for who owns a Voxels parcel, we implemented the whitelist weighted strategy that incorporated the points calculated in the steps above for wearables creators to have a strong voice in voting.

    whitelist weighted
    {
      "symbol": "ABC",
      "addresses": {
        "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11": 5,
        "0xeF8305E140ac520225DAf050e2f71d5fBcC543e7": 2
      }
    }


Distribution Strategies
-----------------------

What is the next step? Here's a couple ideas I got:

### **1\. Create a guide for creators to update collections themselves**

The creator of a collection **overwrites** the existing NFT metadata with the new metadata, thereby upgrading the NFTs everyone already has to the new decentralized versions.

![This strategy is like overwriting the old NFTs by writing to the contract](https://storage.googleapis.com/papyrus_images/57a54d127b112c9830a0f59dc7d225304dc20a341e0aa567c8467782256843c0.png)

This strategy is like overwriting the old NFTs by writing to the contract

**Benefits:**

*   no remint, just update existing contracts
    
    *   1 time transaction vs airdropping
        
    *   maintain provenance, collectors already have it
        
*   unsold copies can find new market value as durable and interoperable wearables
    

**Downsides:**

*   Will it break things in [voxels.com](http://voxels.com)? Need to test
    
    *   can still have `vox` as trait\_type
        
    *   could create a baseURI like `https://www.cryptovoxels.com/c/7/{id}` with Arweave for linking to the metadata
        
*   Would still be hard to update all collections
    
*   Could look messy if mix of old + new wearables
    


### **2. Create a new wearable collection on a L2**

Similar to a fork. It would not be an upgrade to the Voxels wearables, but rather a new collection to immortalize a **_SNAPSHOT_** of all the wearables. This option is like having an on-chain mirror.

![Left to right = old to new. We can consolidate all the collections to 1 for the snapshot, and a DAO to steward it](https://storage.googleapis.com/papyrus_images/16285a4355ca062f9e1285e8582190a3bc4733fcd6d7e437b3d505daaa6c7dea.png)

Left to right = old to new. We can consolidate all the collections to 1 for the snapshot, and a DAO to steward it

**Benefits:**

*   Full upgrade: All wearables 2.0 would look really nice together
    
*   Immortalize the whole snapshot of wearables as a NFT collection
    
*   Can airdrop or allow list previous owners to mint or burn redeem?
    
*   Unsold copies can find new market value as durable and interoperable wearables
    
    *   Use a splits contract to pay creators from sales?
        

**Downsides:**

*   It might be confusing when searching for a wearable to see 2 similar results
    
*   100k+ collectors, many might not know + still expensive to airdrop
    
*   It turns 800 creator owned collections into 1 collection
    
    *   Perhaps this can be seen as a good thing for discoverability!
        

### **3\. Create a NFT Avatar Collection**

We mint all costumes as VRM avatar NFTs and create a pool of shared assets to generate into new avatars. The mannequin base mesh can be an OG trait, but we don't have to be limited to it.

![Old gif of boom tools to represent creating an NFT avatar collection for Voxels](https://storage.googleapis.com/papyrus_images/96ece510bbb6e831613ec855c2401f5ba0a3fe6d6ac2240c7807b79ec830ba80.gif)

Old gif of boom tools to represent creating an NFT avatar collection for Voxels

**Benefits**

*   By minting avatars, not wearables, we can reduce some confusion
    
    *   No duplicate wearables in marketplace
        
*   Can broaden the appeal of Voxels to new people
    
*   We can make the collection look absolutely stunning
    
*   Feels fun and innovative, like metaverse passports + immigration cards
    
*   This option can potentially pair with another option
    
*   Can use splits contract to drive sales to a DAO
    

**Downsides**:

*   There's a lot of wearables, not all of them might make it in
    
*   What would be a fair split?
    
    *   Maybe based on number of factors: wearables contributed, support for openvoxels, etc
        
*   Might be hard to get permission to use wearables from a bunch of creators?
    

Costume -> VRM Avatar Export
----------------------------

For sake of posterity, since a whole post could be dedicated to this topic, here is a preview of Voxels costumes to VRM export. VRM avatars from costumes have been made and hand tailored for finishing touches for all Openvoxels supporters. We also exported VRM avatars for all parcel holders. What we do next is TBD

Citizens of [@cryptovoxels](https://twitter.com/cryptovoxels), I've achieved VRM export
  
Takes in a costume JSON, converts the skin to texture, bakes the glTF wearables, and exports a working VRM [#screenshotsaturday](https://twitter.com/hashtag/screenshotsaturday) [#blender](https://twitter.com/hashtag/blender) [@openvoxels](https://twitter.com/openvoxels)

![](https://pbs.twimg.com/ext_tw_video_thumb/1776861920970096640/pu/img/qNXBtyHUCklbG8dk.jpg)

2:38 AM • Apr 7, 2024



### Support Openvoxels

Donate to our juicebox, get $OPENVOX tokens, which can be used for minting exclusive swag. I think we will also give Openvoxels supporters voting power in our [snapshot](https://snapshot.org/#/openvoxels.eth) in the future. After shipping wearables and VRM avatar exports, there’s a few exciting paths we can take on what to focus on next that could use your input!

[https://juicebox.money](https://juicebox.money/@openvoxels)

Juicebox | Fund Your Thing
--------------------------

Juicebox is the programmable funding platform for crypto and web3. Fund, operate, and scale your project transparently. Community DAO owned, on Ethereum.



![](https://storage.googleapis.com/papyrus_images/1e2c56277151ec0afd1c5dba6f7ec4735e388b065c8e875d6deba9dc74d8eb67.png)


Last note: I think we will be doing an art contest for wearables soon, stay tunes and follow [Openvoxels](https://twitter.com/openvoxels) on X for more info!

![](https://storage.googleapis.com/papyrus_images/266b06a25d53da7833774094a0b2df15ae8f0b0615e40a7f92c2662f1a1d1591.png)
