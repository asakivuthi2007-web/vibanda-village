from PIL import Image
import os

src_folder = r"C:\Users\ADMIN\OneDrive\Pictures\Screenshots"
out_folder = r"C:\Users\ADMIN\OneDrive\Documents\ember\public\images"

# Verified crop boxes: (top_pct, bottom_pct, left_pct, right_pct) fraction removed
crops = {
    "164251": (0.00, 0.12, 0.00, 0.00),  # mojito
    "164307": (0.07, 0.15, 0.00, 0.00),  # vanilla-strawberry ice cream
    "164334": (0.09, 0.09, 0.00, 0.00),  # VBAR interior
    "164408": (0.06, 0.11, 0.00, 0.00),  # garden seating + happy hour sign
    "164441": (0.00, 0.00, 0.00, 0.00),  # smash burger + fries
    "164500": (0.06, 0.12, 0.00, 0.00),  # strawberry milkshake
    "164529": (0.25, 0.10, 0.00, 0.00),  # Vibanda Village wide establishing shot
    "164617": (0.06, 0.14, 0.00, 0.00),  # sunset cocktail
    "164711": (0.00, 0.14, 0.00, 0.00),  # VBAR + Tusker
    "164753": (0.00, 0.14, 0.00, 0.00),  # garden + live band setup
    "164825": (0.00, 0.10, 0.00, 0.00),  # mango pistachio ice cream
    "164842": (0.00, 0.00, 0.00, 0.00),  # smokehouse stack burger
    "164901": (0.00, 0.00, 0.00, 0.00),  # fried chicken
}

# source screenshot -> one or more destination filenames in public/images
targets = {
    "164711": ["hero.webp"],
    "164408": ["about.webp"],
    "164441": ["signature-1.webp"],
    "164901": ["signature-2.webp", "gallery-6.webp"],
    "164251": ["signature-3.webp"],
    "164825": ["signature-4.webp"],
    "164334": ["experience-1.webp", "gallery-5.webp"],
    "164529": ["experience-2.webp"],
    "164753": ["experience-3.webp", "reservation.webp"],
    "164307": ["gallery-1.webp"],
    "164617": ["gallery-2.webp"],
    "164842": ["gallery-3.webp"],
    "164500": ["gallery-4.webp"],
}

total_before = 0
total_after = 0

for n, (t, b, l, r) in crops.items():
    p = os.path.join(src_folder, f"Screenshot 2026-06-07 {n}.png")
    im = Image.open(p).convert("RGB")
    w, h = im.size
    box = (int(w * l), int(h * t), int(w * (1 - r)), int(h * (1 - b)))
    cropped = im.crop(box)

    for name in targets[n]:
        out_path = os.path.join(out_folder, name)
        before = os.path.getsize(out_path) if os.path.exists(out_path) else 0
        cropped.save(out_path, "WEBP", quality=82, method=6)
        after = os.path.getsize(out_path)
        total_before += before
        total_after += after
        print(f"{n} -> {name}  {cropped.size}  {before/1024:.0f}KB -> {after/1024:.0f}KB")

print(f"\nTotal: {total_before/1024:.0f}KB -> {total_after/1024:.0f}KB")
