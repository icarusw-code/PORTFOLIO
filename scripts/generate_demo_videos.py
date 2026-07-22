"""Generate lightweight synthetic portfolio demo videos.

The videos intentionally use invented identifiers and values. They visualize
public-safe workflow concepts without reproducing private application screens.
"""

from pathlib import Path
import math
import sys

from PIL import Image, ImageDraw, ImageFont

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / ".video-tools"))
import imageio_ffmpeg


WIDTH, HEIGHT, FPS, SECONDS = 1280, 720, 18, 6
FRAMES = FPS * SECONDS
ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "media"
OUTPUT.mkdir(parents=True, exist_ok=True)

INK = "#0b1519"
PANEL = "#132126"
PANEL_2 = "#18292f"
CREAM = "#f4f0e7"
MUTED = "#809096"
LINE = "#294047"
ORANGE = "#ff9f1c"
AMBER = "#ffc66d"
MINT = "#75dfc1"
RED = "#ff7865"


def font(size, mono=False, bold=False):
    if mono:
        name = "consolab.ttf" if bold else "consola.ttf"
    else:
        name = "segoeuib.ttf" if bold else "segoeui.ttf"
    return ImageFont.truetype(str(Path(r"C:\Windows\Fonts") / name), size)


F10 = font(10, mono=True, bold=True)
F13 = font(13, mono=True)
F15 = font(15, mono=True, bold=True)
F18 = font(18)
F22 = font(22, bold=True)
F30 = font(30, mono=True, bold=True)
F38 = font(38, bold=True)
F54 = font(54, bold=True)


def ease(value):
    value = max(0.0, min(1.0, value))
    return 1 - (1 - value) ** 3


def base_frame(kicker, title, subtitle):
    image = Image.new("RGB", (WIDTH, HEIGHT), INK)
    draw = ImageDraw.Draw(image)
    draw.rectangle((0, 0, WIDTH, 6), fill=ORANGE)
    draw.text((54, 35), kicker, font=F13, fill=ORANGE)
    draw.text((54, 66), title, font=F38, fill=CREAM)
    draw.text((54, 118), subtitle, font=F18, fill=MUTED)
    badge = "SYNTHETIC PORTFOLIO DEMO"
    box = draw.textbbox((0, 0), badge, font=F10)
    bw = box[2] - box[0] + 28
    draw.rectangle((WIDTH - bw - 54, 40, WIDTH - 54, 72), outline=LINE, width=1)
    draw.text((WIDTH - bw - 40, 50), badge, font=F10, fill=AMBER)
    return image, draw


def write_video(name, frame_builder):
    path = OUTPUT / name
    writer = imageio_ffmpeg.write_frames(
        str(path),
        (WIDTH, HEIGHT),
        fps=FPS,
        codec="libx264",
        quality=7,
        pix_fmt_in="rgb24",
        output_params=["-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an"],
    )
    writer.send(None)
    try:
        for frame_index in range(FRAMES):
            writer.send(frame_builder(frame_index / (FRAMES - 1)).tobytes())
    finally:
        writer.close()
    print(path)


def audit_frame(t):
    image, draw = base_frame(
        "MES SMART TOOL / DEPLOY AUDIT",
        "Seven-step deployment audit",
        "Changed UI source  →  required services  →  server validation",
    )
    steps = [
        ("01", "GitLab branch comparison", "12 files"),
        ("02", "UI source analysis", "18 BR/DA IDs"),
        ("03", "Dependency trace", "27 services"),
        ("04", "Server inventory", "24 registered"),
        ("05", "Source vs server", "3 missing"),
        ("06", "Requirement workbook", "31 planned"),
        ("07", "Final cross-validation", "3 critical"),
    ]
    draw.rectangle((54, 172, 838, 666), fill=PANEL, outline=LINE)
    draw.text((80, 193), "PIPELINE EXECUTION", font=F10, fill=ORANGE)
    visible = ease(t / 0.76) * len(steps)
    for index, (number, label, value) in enumerate(steps):
        y = 230 + index * 58
        active = visible >= index + 1
        progress = ease(visible - index)
        draw.line((80, y + 44, 810, y + 44), fill=LINE, width=1)
        color = (RED if index in (4, 6) else MINT) if active else MUTED
        draw.rectangle((80, y, 112, y + 30), outline=color, width=1)
        draw.text((88, y + 8), number, font=F10, fill=color)
        draw.text((132, y + 4), label, font=F15, fill=CREAM if progress > 0.4 else MUTED)
        if active:
            draw.text((650, y + 6), value, font=F13, fill=color)
            draw.text((775, y + 7), "✓" if index not in (4, 6) else "!", font=F15, fill=color)

    draw.rectangle((864, 172, 1226, 666), fill=PANEL_2, outline=LINE)
    draw.text((892, 195), "FINAL VALIDATION", font=F10, fill=ORANGE)
    score_progress = ease((t - 0.72) / 0.18)
    draw.text((892, 242), str(round(3 * score_progress)) if score_progress else "—", font=F54, fill=RED if score_progress else MUTED)
    draw.text((892, 308), "CRITICAL GAPS", font=F13, fill=MUTED)
    draw.line((892, 345, 1198, 345), fill=LINE, width=1)
    if t > 0.82:
        draw.text((892, 378), "Source services", font=F13, fill=MUTED)
        draw.text((1150, 378), "27", font=F15, fill=CREAM)
        draw.text((892, 420), "Server services", font=F13, fill=MUTED)
        draw.text((1150, 420), "24", font=F15, fill=CREAM)
        draw.text((892, 480), "REVIEW BEFORE DEPLOY", font=F10, fill=RED)
        draw.rectangle((892, 516, 1198, 562), fill=ORANGE)
        draw.text((954, 531), "EXPORT REPORT", font=F13, fill=INK)
    scan_x = int(-200 + (WIDTH + 400) * ((t * 1.8) % 1))
    draw.rectangle((scan_x, 172, scan_x + 90, 666), fill="#162b2e")
    return image


def search_frame(t):
    image, draw = base_frame(
        "MES AI SERVER / SEMANTIC SEARCH",
        "Find UI behavior from source evidence",
        "Static analysis  +  embeddings  +  service metadata  +  grounded answer",
    )
    draw.rectangle((54, 170, 1226, 246), fill=PANEL, outline=LINE)
    draw.text((78, 184), "NATURAL-LANGUAGE QUERY", font=F10, fill=MUTED)
    full_query = "Where is pallet status changed?"
    typed = full_query[: max(0, min(len(full_query), int(ease(t / 0.34) * (len(full_query) + 1))))]
    draw.text((78, 211), typed, font=F18, fill=CREAM)
    cursor = "|" if int(t * 12) % 2 == 0 and t < 0.38 else ""
    tw = draw.textlength(typed, font=F18)
    draw.text((78 + tw, 211), cursor, font=F18, fill=ORANGE)
    draw.rectangle((1002, 187, 1202, 231), fill=ORANGE)
    draw.text((1045, 201), "SEARCH INDEX", font=F13, fill=INK)

    draw.rectangle((54, 266, 790, 666), fill=PANEL, outline=LINE)
    draw.text((80, 288), "RANKED SOURCE CANDIDATES", font=F10, fill=ORANGE)
    results = [
        ("0.94", "PalletStatusView", "SaveCommand · BR_PALLET_UPDATE"),
        ("0.87", "PalletHistoryView", "SearchCommand · DA_PALLET_HISTORY"),
        ("0.76", "StockerMonitorView", "RefreshCommand · BR_STOCKER_QUERY"),
    ]
    reveal = ease((t - 0.30) / 0.32) * 3
    for index, (score, view, evidence) in enumerate(results):
        if reveal <= index:
            continue
        y = 332 + index * 94
        draw.line((80, y + 76, 764, y + 76), fill=LINE, width=1)
        draw.text((80, y + 5), str(index + 1), font=F13, fill=ORANGE)
        draw.text((122, y), view, font=F22, fill=CREAM)
        draw.text((122, y + 36), evidence, font=F13, fill=MUTED)
        draw.text((680, y + 10), score, font=F22, fill=MINT)

    draw.rectangle((816, 266, 1226, 666), fill=PANEL_2, outline=LINE)
    draw.text((844, 288), "GROUNDED ANSWER", font=F10, fill=ORANGE)
    if t > 0.64:
        answer_progress = ease((t - 0.64) / 0.22)
        draw.text((844, 336), "PalletStatusView", font=F30, fill=AMBER)
        answer = [
            "SaveCommand initiates the status update.",
            "The view-model handler calls the synthetic",
            "BR_PALLET_UPDATE service.",
        ]
        for index, line in enumerate(answer):
            if answer_progress > index / len(answer):
                draw.text((844, 398 + index * 34), line, font=F15, fill=CREAM if index == 0 else MUTED)
        draw.rectangle((844, 530, 960, 560), outline=LINE)
        draw.text((860, 540), "WPF / XAML", font=F10, fill=MINT)
        draw.rectangle((974, 530, 1080, 560), outline=LINE)
        draw.text((991, 540), "FASTAPI", font=F10, fill=MINT)
    return image


def consistency_frame(t):
    image, draw = base_frame(
        "MIX / MES–CIM CONSISTENCY",
        "Pallet consistency at operational scale",
        "Bulk fetch  →  presence and FULL/EMPTY comparison  →  CSV report",
    )
    metrics = [("CIM TOTAL", 128420), ("MES TOTAL", 128417), ("MISSING", 3), ("STATE DIFF", 2)]
    for index, (label, value) in enumerate(metrics):
        x = 54 + index * 293
        draw.rectangle((x, 172, x + 270, 270), fill=PANEL, outline=LINE)
        draw.text((x + 22, 192), label, font=F10, fill=MUTED)
        animated = round(value * ease(t / 0.35)) if value > 100 else round(value * ease((t - 0.18) / 0.22))
        draw.text((x + 22, 221), f"{animated:,}", font=F30, fill=AMBER)

    filters = ["ALL", "MISSING IN MES", "FULL / EMPTY", "EXCEPTION"]
    for index, label in enumerate(filters):
        x = 54 + index * 182
        selected = (t < 0.62 and index == 0) or (t >= 0.62 and index == 1)
        draw.rectangle((x, 294, x + 170, 336), fill=ORANGE if selected else PANEL, outline=ORANGE if selected else LINE)
        draw.text((x + 18, 308), label, font=F10, fill=INK if selected else MUTED)

    draw.rectangle((54, 356, 1226, 666), fill=PANEL, outline=LINE)
    columns = [(76, "PALLET"), (360, "CIM"), (500, "MES"), (640, "CLASSIFICATION"), (985, "LAST TRANSACTION")]
    for x, label in columns:
        draw.text((x, 378), label, font=F10, fill=MUTED)
    draw.line((54, 408, 1226, 408), fill=LINE, width=1)
    rows = [
        ("PAL-SYN-0103", "FULL", "—", "MISSING IN MES", "INV_STKIN", "missing"),
        ("PAL-SYN-0119", "EMPTY", "FULL", "FULL/EMPTY MISMATCH", "INV_STATE_CHG", "state"),
        ("PAL-SYN-0126", "FULL", "EMPTY", "FULL/EMPTY MISMATCH", "INV_STKOUT", "state"),
        ("PAL-SYN-0138", "FULL", "—", "OPERATIONAL EXCEPTION", "INV_HOLD", "exception"),
        ("PAL-SYN-0144", "EMPTY", "—", "MISSING IN MES", "INV_STKIN", "missing"),
    ]
    visible_rows = [row for row in rows if t < 0.62 or row[-1] == "missing"]
    for index, row in enumerate(visible_rows):
        y = 430 + index * 48
        draw.line((54, y + 38, 1226, y + 38), fill=LINE, width=1)
        values = row[:-1]
        for (x, _), value in zip(columns, values):
            color = RED if "MISSING" in value else CREAM if x == 76 else MUTED
            draw.text((x, y + 10), value, font=F13, fill=color)
    if t > 0.86:
        draw.rectangle((1014, 602, 1200, 642), fill=ORANGE)
        draw.text((1054, 615), "EXPORT CSV", font=F13, fill=INK)
    return image


if __name__ == "__main__":
    write_video("deploy-audit-demo.mp4", audit_frame)
    write_video("ui-semantic-search-demo.mp4", search_frame)
    write_video("pallet-consistency-demo.mp4", consistency_frame)
