from PIL import Image
img = Image.open("/app/public/images/img-01.png")
img.save("/app/public/images/cover.png", "PNG")
print("Created cover.png")
