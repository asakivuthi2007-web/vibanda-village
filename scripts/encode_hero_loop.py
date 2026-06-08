import subprocess, os
import imageio_ffmpeg

FF = imageio_ffmpeg.get_ffmpeg_exe()
SRC = r"C:\Users\ADMIN\Downloads\Gourmet_food_tray_rotating_slowly_202606071559.mp4"
VID_DIR = r"C:\Users\ADMIN\OneDrive\Documents\ember\public\videos"
IMG_DIR = r"C:\Users\ADMIN\OneDrive\Documents\ember\public\images"
os.makedirs(VID_DIR, exist_ok=True)
OUT = os.path.join(VID_DIR, "hero.mp4")
POSTER = os.path.join(IMG_DIR, "hero-poster.jpg")

# Crop off the baked-in text (left ~36%), keep the food tray.
CROP = "crop=800:720:480:0"

# Pipeline: crop -> seamless palindrome at native res (cheap reverse) ->
# light denoise -> high-quality lanczos upscale to 4K-class -> gentle sharpen.
# Source is 720p, so this maximises perceived clarity without faking 8K bloat.
VF = (
    f"[0:v]{CROP},fps=24,setsar=1,split[a][b];[b]reverse[r];"
    "[a][r]concat=n=2:v=1,"
    "hqdn3d=1.5:1.0:2.0:2.0,"
    "scale=1600:1440:flags=lanczos,"
    "unsharp=5:5:0.6:5:5:0.0[v]"
)

cmd = [
    FF, "-y", "-ss", "1.2", "-t", "6.7", "-i", SRC, "-an",
    "-filter_complex", VF, "-map", "[v]",
    "-c:v", "libx264", "-profile:v", "high", "-pix_fmt", "yuv420p",
    "-crf", "22", "-preset", "slow",
    "-movflags", "+faststart",
    OUT,
]
print("Encoding sharp 1440p-class text-free loop (reliable autoplay)...")
r = subprocess.run(cmd, capture_output=True, text=True)
if r.returncode != 0:
    print("FAILED:\n", r.stderr[-2000:])
    raise SystemExit(1)

# Crisp poster at 4K-class from a text-free frame.
subprocess.run([FF, "-y", "-ss", "5.0", "-i", SRC, "-frames:v", "1",
                "-vf", f"{CROP},scale=2400:-2:flags=lanczos,unsharp=5:5:0.5:5:5:0.0",
                "-q:v", "2", POSTER], capture_output=True, text=True)

print("OUT:", OUT, f"{os.path.getsize(OUT)/1024/1024:.2f} MB")
if os.path.exists(POSTER):
    print("POSTER:", POSTER, f"{os.path.getsize(POSTER)/1024:.0f} KB")
