import subprocess, os, re
import imageio_ffmpeg

FF = imageio_ffmpeg.get_ffmpeg_exe()
REF = r"C:\Users\ADMIN\Videos\Captures\restaurant website animation - Google Chrome 2026-06-07 15-33-43.mp4"
FOOD = r"C:\Users\ADMIN\Downloads\Gourmet_food_tray_rotating_slowly_202606071559.mp4"
OUT = r"C:\Users\ADMIN\OneDrive\Documents\ember\scripts\ref_frames"
os.makedirs(OUT, exist_ok=True)

def probe(path, label):
    p = subprocess.run([FF, "-hide_banner", "-i", path], capture_output=True, text=True)
    info = p.stderr
    res = re.search(r"(\d{3,5})x(\d{3,5})", info)
    fps = re.search(r"([\d.]+) fps", info)
    dur = re.search(r"Duration: (\d+):(\d+):([\d.]+)", info)
    secs = None
    if dur:
        secs = int(dur.group(1))*3600 + int(dur.group(2))*60 + float(dur.group(3))
    print(f"{label}: {res.group(0) if res else '?'} | {fps.group(1) if fps else '?'}fps | {secs}s | {os.path.getsize(path)/1024/1024:.1f}MB")
    return secs, (res.group(0) if res else None)

ref_secs, ref_res = probe(REF, "REF")
food_secs, food_res = probe(FOOD, "FOOD")

# extract 16 evenly spaced frames from the reference website recording
n = 16
if ref_secs:
    for i in range(n):
        t = max(0.1, ref_secs * (i + 0.5) / n)
        out = os.path.join(OUT, f"ref_{i:02d}.jpg")
        subprocess.run([FF, "-y", "-ss", f"{t:.2f}", "-i", REF, "-frames:v", "1",
                        "-vf", "scale=900:-2", "-q:v", "4", out],
                       capture_output=True, text=True)
    print("extracted", n, "frames to", OUT)
