import subprocess, os
import imageio_ffmpeg

FF = imageio_ffmpeg.get_ffmpeg_exe()
VID = r"C:\Users\ADMIN\OneDrive\Documents\ember\public\videos\hero.mp4"
OUT = r"C:\Users\ADMIN\OneDrive\Documents\ember\scripts\hero_check"
os.makedirs(OUT, exist_ok=True)
for i, t in enumerate([0.5, 3.0, 6.5, 10.0]):
    subprocess.run([FF, "-y", "-ss", f"{t}", "-i", VID, "-frames:v", "1", "-q:v", "3",
                    os.path.join(OUT, f"chk_{i}.jpg")], capture_output=True, text=True)
print("done")
