from PIL import Image
import os

src_folder = r"C:\Users\ADMIN\OneDrive\Pictures\Screenshots"
out_folder = r"C:\Users\ADMIN\OneDrive\Documents\ember\scripts\crop_preview"
os.makedirs(out_folder, exist_ok=True)

# name -> (top_pct, bottom_pct, left_pct, right_pct) fraction of dimension to remove
crops = {
    "164251": (0.00, 0.12, 0.00, 0.00),   # mojito
    "164307": (0.07, 0.15, 0.00, 0.00),   # ice cream bowl
    "164334": (0.09, 0.09, 0.00, 0.00),   # VBAR interior
    "164408": (0.06, 0.11, 0.00, 0.00),   # outdoor seating baskets
    "164441": (0.00, 0.00, 0.00, 0.00),   # cheeseburger (clean)
    "164500": (0.06, 0.12, 0.00, 0.00),   # strawberry milkshake
    "164529": (0.25, 0.10, 0.00, 0.00),   # Vibanda Village wide w/ name
    "164617": (0.06, 0.14, 0.00, 0.00),   # orange cocktail
    "164711": (0.00, 0.14, 0.00, 0.00),   # VBAR + Tusker
    "164753": (0.00, 0.14, 0.00, 0.00),   # wide outdoor seating
    "164825": (0.00, 0.10, 0.00, 0.00),   # mango ice cream
    "164842": (0.00, 0.00, 0.00, 0.00),   # second burger (clean?)
    "164901": (0.00, 0.00, 0.00, 0.00),   # fried chicken (clean)
}

for n, (t, b, l, r) in crops.items():
    p = os.path.join(src_folder, f"Screenshot 2026-06-07 {n}.png")
    im = Image.open(p).convert("RGB")
    w, h = im.size
    box = (int(w * l), int(h * t), int(w * (1 - r)), int(h * (1 - b)))
    cropped = im.crop(box)
    out_path = os.path.join(out_folder, f"{n}.png")
    cropped.save(out_path)
    print(n, "orig", im.size, "-> cropped", cropped.size, "box", box)
