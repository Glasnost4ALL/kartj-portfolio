from PIL import Image
import os, glob

os.chdir("/app/public/images")

for f in glob.glob("*.jpeg"):
    try:
        img = Image.open(f)
        name = os.path.splitext(f)[0]
        out = name + ".png"
        img.save(out, "PNG")
        print(f"Converted: {f} -> {out} ({img.size[0]}x{img.size[1]})")
        os.remove(f)
        print(f"Removed: {f}")
    except Exception as e:
        print(f"Error with {f}: {e}")

print("Done!")
