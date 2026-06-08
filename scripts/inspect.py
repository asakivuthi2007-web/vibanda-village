from PIL import Image
import os

folder = r"C:\Users\ADMIN\OneDrive\Pictures\Screenshots"
names = ["164251", "164307", "164334", "164408", "164441", "164500", "164529",
         "164617", "164711", "164753", "164825", "164842", "164901"]

for n in names:
    p = os.path.join(folder, "Screenshot 2026-06-07 " + n + ".png")
    im = Image.open(p)
    print(n, im.size, im.mode)
