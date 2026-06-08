from PIL import Image
import os

src_folder = r"C:\Users\ADMIN\OneDrive\Pictures\Screenshots"
out_folder = r"C:\Users\ADMIN\OneDrive\Documents\ember\scripts\crop_preview"
os.makedirs(out_folder, exist_ok=True)

# image -> ("top"/"bottom", pct of height to show, scale factor to enlarge)
strips = {
    "164529": ("top", 0.28, 2),
    "164711": ("bottom", 0.18, 2),
    "164753": ("bottom", 0.18, 2),
    "164307": ("bottom", 0.20, 2),
    "164408": ("bottom_left", 0.30, 2),
}

for n, (which, pct, scale) in strips.items():
    p = os.path.join(src_folder, f"Screenshot 2026-06-07 {n}.png")
    im = Image.open(p).convert("RGB")
    w, h = im.size
    if which == "top":
        box = (0, 0, w, int(h * pct))
    elif which == "bottom":
        box = (0, int(h * (1 - pct)), w, h)
    elif which == "bottom_left":
        box = (0, int(h * (1 - pct)), int(w * 0.4), h)
    strip = im.crop(box)
    strip = strip.resize((strip.width * scale, strip.height * scale), Image.LANCZOS)
    out_path = os.path.join(out_folder, f"strip_{n}_{which}.png")
    strip.save(out_path)
    print(n, which, "saved", strip.size, "from box", box, "of", im.size)
