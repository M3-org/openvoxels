---
# System prepended metadata

title: CV Costumer Interop
tags: [cv]

---

# CV Costumer Interop

###### tags: `cv`

- https://github.com/madjin/cryptovoxels-avatars
- https://opensea.io/assets/ethereum/0xbac0b85ce8a5bad5a0a79088f223871a476cedb6/0
    - https://gateway.pinata.cloud/ipfs/QmZ5gHy7bY4sfwE6z7vky3bZzBCxXKMCAxgb88uGT3wALX
- https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/89309112019529632356319028869398151961865130758109557318354337679874954264347
    - https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/89309112019529632356319028869398151961865130758109557318354337679874954264347

![](https://i.imgur.com/ERXguny.png)

![](https://i.imgur.com/u6kvfgn.png)


![](https://i.imgur.com/y9aeruI.png)


![](https://i.imgur.com/bTRRZyJ.png)


![](https://i.imgur.com/mUwkr1Z.png)


## Costume#3024

![](https://i.imgur.com/duLKSCf.png)

```jsonld!
{
  "id": 3024,
  "wallet": "0x33DebB5Ee65549FFA71116957Da6db17A9D8fe57",
  "attachments": [
    {
      "bone": "Head",
      "uuid": "9996c250-91e3-11eb-8e90-cd6a46433faa",
      "scaling": [
        0.25,
        0.3,
        0.25
      ],
      "chain_id": 1,
      "position": [
        -0.01,
        0.25,
        0.006
      ],
      "rotation": [
        360,
        0,
        16.037
      ],
      "wearable_id": 1412,
      "collection_id": 1,
      "collection_address": "0xa58b5224e2fd94020cb2837231b2b0e4247301a6"
    },
    {
      "bone": "Spine",
      "uuid": "f7a8f160-91e3-11eb-8e90-cd6a46433faa",
      "scaling": [
        0.5,
        0.5,
        0.5
      ],
      "chain_id": 1,
      "position": [
        0,
        0,
        0
      ],
      "rotation": [
        0,
        0,
        0
      ],
      "wearable_id": 566,
      "collection_id": 1,
      "collection_address": "0xa58b5224e2fd94020cb2837231b2b0e4247301a6"
    },
    {
      "bone": "Spine1",
      "uuid": "ffbf8f80-91e3-11eb-8e90-cd6a46433faa",
      "scaling": [
        0.6,
        0.6,
        0.6
      ],
      "chain_id": 1,
      "position": [
        -0.001,
        -0.04,
        0.041
      ],
      "rotation": [
        360,
        360,
        0
      ],
      "wearable_id": 850,
      "collection_id": 1,
      "collection_address": "0xa58b5224e2fd94020cb2837231b2b0e4247301a6"
    }
  ],
  "skin": null,
  "name": "costume#3024",
  "default_color": "#f3f3f3"
}
```


![](https://i.imgur.com/JIoyayz.png)

```jsonld=
{
  "id": 4615,
  "wallet": "0x33DebB5Ee65549FFA71116957Da6db17A9D8fe57",
  "attachments": [
    {
      "bone": "Head",
      "uuid": "c3edaff0-91e3-11eb-8e90-cd6a46433faa",
      "scaling": [
        0.7,
        0.759,
        1.168
      ],
      "chain_id": 1,
      "position": [
        0,
        -0.12900000643730164,
        -0.031
      ],
      "rotation": [
        0,
        360,
        0
      ],
      "wearable_id": 1704,
      "collection_id": 1,
      "collection_address": "0xa58b5224e2fd94020cb2837231b2b0e4247301a6"
    },
    {
      "bone": "Spine1",
      "uuid": "0e8a92c0-15b1-11ec-a7c2-e914ee077dd4",
      "scaling": [
        0.643,
        0.583,
        0.711
      ],
      "chain_id": 1,
      "position": [
        -0.002,
        -0.064,
        0.008
      ],
      "rotation": [
        0,
        0,
        360
      ],
      "wearable_id": 148,
      "collection_id": 1,
      "collection_address": "0xa58b5224e2fd94020cb2837231b2b0e4247301a6"
    }
  ],
  "skin": null,
  "name": null,
  "default_color": "#f3f3f3"
}
```

https://metadata.ens.domains/docs


---


## NEW




Bone names on avatar (based on mixamo rig)

Hips
Spine
Spine1
Spine2
Neck
Head
HeadTop_End
LeftShoulder
LeftArm
LeftForeArm
LeftHand
LeftHandIndex1
LeftHandIndex2
LeftHandIndex3
LeftHandIndex4
RightShoulder
RightArm
RightForeArm
RightHand
RightHandIndex1
RightHandIndex2
RightHandIndex3
RightHandIndex4
LeftUpLeg
LeftLeg
LeftFoot
LeftToeBase
LeftToe_End
RightUpLeg
RightLeg
RightFoot
RightToeBase
RightToe_End



https://github.com/cryptovoxels/costuming

Costumer will be open source soon?


Simple importer

```python!
import bpy
import json
import mathutils
import math
from pathlib import Path

class Attachment:
    def __init__(self, bone_name, wearable_id, collection_id, position, rotation, scaling):
        self.bone_name = bone_name
        self.wearable_id = wearable_id
        self.collection_id = collection_id
        self.position = position
        self.rotation = rotation
        self.scaling = scaling

class AttachmentImporter:
    def __init__(self, glb_folder, bone_mapping):
        self.glb_folder = glb_folder
        self.bone_mapping = bone_mapping

    def import_attachment(self, attachment):
        glb_path = f"{self.glb_folder}/{attachment.collection_id}/{attachment.wearable_id}.glb"

        # Deselect all objects
        bpy.ops.object.select_all(action='DESELECT')

        # Import the GLB file
        bpy.ops.import_scene.gltf(filepath=glb_path)

        # Get the imported object
        obj = bpy.context.selected_objects[0]

        # Resize the object
        obj.scale = (0.65, 0.65, 0.65)
        bpy.ops.object.transform_apply(location=True, rotation=False, scale=True)

        # Create a new Child Of constraint
        constraint = obj.constraints.new(type='CHILD_OF')
        constraint.target = bpy.data.objects["Armature"]
        constraint.use_rotation_x = False
        constraint.use_rotation_y = False
        constraint.use_rotation_z = False

        # Find the bone by its name
        armature = bpy.data.objects["Armature"]

        # Create a new vertex group with the name of the bone
        vertex_group = obj.vertex_groups.new(name=attachment.bone_name)

        # Assign full weight to the vertex group
        bpy.ops.object.mode_set(mode='EDIT')
        bpy.ops.mesh.select_all(action='SELECT')
        bpy.ops.object.vertex_group_assign()
        bpy.ops.object.mode_set(mode='OBJECT')

        # Add an armature modifier to the object
        modifier = obj.modifiers.new(name="Armature", type='ARMATURE')
        modifier.object = bpy.data.objects["Armature"]
        modifier.vertex_group = attachment.bone_name

        # Set the rotation mode to Euler XYZ
        obj.rotation_mode = 'XYZ'

        bone = armature.pose.bones.get(attachment.bone_name)
        if bone:
            # Use the head position of the bone as the origin
            origin = armature.matrix_world @ bone.matrix @ bone.tail
            obj.location = origin
            # Set the cursor location to the object location
            bpy.context.scene.cursor.location = obj.location

            # Adjust the transformation values
            obj.location = (attachment.position[0], -attachment.position[2], attachment.position[1])
            obj.rotation_euler = (math.radians(attachment.rotation[0]), -math.radians(attachment.rotation[2]), math.radians(attachment.rotation[1]))
            obj.scale = (attachment.scaling[0], attachment.scaling[2], attachment.scaling[1])

        # Return the object and the bone name
        return obj, attachment.bone_name

def load_attachments_from_json(json_file):
    with open(json_file) as file:
        json_data = json.load(file)

    attachments = []
    for attachment_data in json_data["attachments"]:
        bone_name = attachment_data["bone"]
        wearable_id = attachment_data["wearable_id"]
        collection_id = attachment_data["collection_id"]
        position = attachment_data["position"]
        rotation = attachment_data["rotation"]
        scaling = attachment_data["scaling"]

        attachment = Attachment(bone_name, wearable_id, collection_id, position, rotation, scaling)
        attachments.append(attachment)

    return attachments

def main():
    json_file = '/home/jin/repo/cryptovoxels-wearables/costumes/2025.json'
    glb_folder = "/home/jin/repo/cryptovoxels-wearables/glb_xmp"

    bone_mapping = {
        "chest": "Spine1",
        "head": "Head",
        "hips": "Hips",
        "leftFoot": "LeftFoot",
        "leftHand": "LeftHand",
        "leftLowerArm": "LeftForeArm",
        "leftLowerLeg": "LeftLeg",
        "leftUpperArm": "LeftArm",
        "leftUpperLeg": "LeftUpLeg",
        "neck": "Neck",
        "rightFoot": "RightFoot",
        "rightHand": "RightHand",
        "rightLowerArm": "RightForeArm",
        "rightLowerLeg": "RightLeg",
        "rightUpperArm": "RightArm",
        "rightUpperLeg": "RightUpLeg",
        "spine": "Spine"
    }

    attachment_importer = AttachmentImporter(glb_folder, bone_mapping)

    attachments = load_attachments_from_json(json_file)
    constraints = []  # Store constraints for setting subtargets later
    for attachment in attachments:
        try:
            obj, bone_name = attachment_importer.import_attachment(attachment)
            constraints.append((obj.constraints[-1], bone_name))  # Store the constraint and bone name
        except Exception as e:
            print(f"Error processing attachment with wearable_id: {attachment.wearable_id}. Skipping attachment.")
            print(f"Error message: {str(e)}")
            continue

    # Now set the subtargets for each constraint
    for constraint, bone_name in constraints:
        constraint.subtarget = bone_name


if __name__ == "__main__":
    main()

```


parser + svg2png script

```python!
import os
import json
import sys
from io import BytesIO
from cairosvg import svg2png
from PIL import Image

def convert_svg_to_png(svg_data, output_file):
    if svg_data is None:
        print(f"No SVG data found for {output_file}. Skipping.")
        return

    try:
        png_data = svg2png(bytestring=svg_data)
        image = Image.open(BytesIO(png_data))
        image = image.convert('RGBA')
        image.save(output_file, 'PNG')
        print(f"Successfully converted SVG to PNG: {output_file}")
    except Exception as e:
        print(f"Error converting SVG to PNG for {output_file}: {str(e)}")

def process_json_file(json_file):
    with open(json_file, 'r') as file:
        data = json.load(file)

    costumes = data.get('costumes', [])
    for costume in costumes:
        costume_id = costume.get('id')
        svg_data = costume.get('skin')

        if costume_id is not None and svg_data is not None:
            output_dir = os.path.splitext(json_file)[0]
            os.makedirs(output_dir, exist_ok=True)
            output_file = os.path.join(output_dir, f"{costume_id}.png")
            convert_svg_to_png(svg_data, output_file)

def process_json_files_in_directory():
    json_files = [file for file in os.listdir('.') if file.endswith('.json')]
    for json_file in json_files:
        process_json_file(json_file)

if __name__ == '__main__':
    process_json_files_in_directory()

```


all the good stuff here
![image](https://hackmd.io/_uploads/rJkcvZWgA.png)
