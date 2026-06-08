import subprocess, os
import imageio_ffmpeg

FF = imageio_ffmpeg.get_ffmpeg_exe()
SRC = r"C:\Users\ADMIN\Downloads\Gourmet_food_tray_rotating_slowly_202606071559.mp4"
OUT = r"C:\Users\ADMIN\OneDrive\Documents\ember\scripts\food_frames"
os.makedirs(OUT, exist_ok=True)

# 10 frames across the 8s source so we can see if/where text appears
for i in range(10):
    t = 0.2 + (8.0 - 0.4) * i / 9
    out = os.path.join(OUT, f"food_{i:02d}.jpg")
    subprocess.run([FF, "-y", "-ss", f"{t:.2f}", "-i", SRC, "-frames:v", "1",
                    "-q:v", "3", out], capture_output=True, text=True)
    print(f"{i:02d} t={t:.2f}")
print("done ->", OUT)
