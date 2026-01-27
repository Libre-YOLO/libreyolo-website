'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen, Terminal, Rocket, Layers, Crosshair, Grid3x3,
  GraduationCap, CheckCircle2, Upload, Cpu, FileCode, Wrench,
  Database, Copy, Check, Menu, X, ChevronRight
} from 'lucide-react'

/* ─── Section metadata for sidebar ─── */
const sections = [
  { id: 'introduction', title: 'Introduction', icon: BookOpen },
  { id: 'installation', title: 'Installation', icon: Terminal },
  { id: 'quickstart', title: 'Quickstart', icon: Rocket },
  { id: 'models', title: 'Available Models', icon: Layers },
  { id: 'prediction', title: 'Prediction', icon: Crosshair },
  { id: 'tiled-inference', title: 'Tiled Inference', icon: Grid3x3 },
  { id: 'training', title: 'Training', icon: GraduationCap },
  { id: 'validation', title: 'Validation', icon: CheckCircle2 },
  { id: 'export', title: 'Export', icon: Upload },
  { id: 'onnx-inference', title: 'ONNX Inference', icon: Cpu },
  { id: 'api-reference', title: 'API Reference', icon: FileCode },
  { id: 'architecture', title: 'Architecture Guide', icon: Wrench },
  { id: 'dataset-format', title: 'Dataset Format', icon: Database },
]

/* ─── Reusable components ─── */

function CodeBlock({ children, language = 'python', filename }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative my-5 rounded-xl overflow-hidden border border-white/[0.06]">
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-surface-500 uppercase tracking-wider">{language}</span>
          {filename && (
            <>
              <span className="text-surface-700">·</span>
              <span className="text-xs font-mono text-surface-500">{filename}</span>
            </>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium text-surface-500 hover:text-surface-300 hover:bg-white/[0.06] transition-all"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className="overflow-x-auto bg-[#0a0f1a]">
        <pre className="p-5 text-[13px] leading-relaxed">
          <code className="font-mono text-surface-300">{children}</code>
        </pre>
      </div>
    </div>
  )
}

function DocTable({ headers, rows }) {
  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-white/[0.06]">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/[0.08] bg-white/[0.02]">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold text-surface-300 whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-surface-400">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SectionHeading({ id, icon: Icon, children }) {
  return (
    <div id={id} className="scroll-mt-28 flex items-center gap-3 mb-6 pt-2">
      <div className="w-10 h-10 rounded-xl bg-libre-500/10 border border-libre-500/20 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-libre-400" />
      </div>
      <h2 className="text-2xl lg:text-3xl font-bold text-white">{children}</h2>
    </div>
  )
}

function SubHeading({ children }) {
  return <h3 className="text-lg font-semibold text-white mt-10 mb-4">{children}</h3>
}

function P({ children }) {
  return <p className="text-surface-400 leading-relaxed mb-4">{children}</p>
}

function InlineCode({ children }) {
  return <code className="px-1.5 py-0.5 rounded bg-white/[0.06] text-libre-300 text-sm font-mono">{children}</code>
}

function Divider() {
  return <div className="border-t border-white/[0.06] my-16" />
}

function FeatureItem({ children }) {
  return (
    <li className="flex items-start gap-3 text-surface-400">
      <ChevronRight className="w-4 h-4 text-libre-400 mt-1 shrink-0" />
      <span>{children}</span>
    </li>
  )
}

/* ─── Sidebar ─── */

function Sidebar({ activeSection, onNavigate, className = '' }) {
  return (
    <nav className={className}>
      <div className="flex items-center gap-2 mb-6 px-3">
        <BookOpen className="w-5 h-5 text-libre-400" />
        <span className="text-sm font-semibold text-white tracking-wide uppercase">Documentation</span>
      </div>
      <ul className="space-y-0.5">
        {sections.map(({ id, title, icon: Icon }) => {
          const isActive = activeSection === id
          return (
            <li key={id}>
              <button
                onClick={() => onNavigate(id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                  isActive
                    ? 'text-libre-400 bg-libre-500/10'
                    : 'text-surface-400 hover:text-surface-200 hover:bg-white/[0.04]'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-libre-400' : 'text-surface-600'}`} />
                {title}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

/* ─── Main docs page ─── */

export default function Docs() {
  const [activeSection, setActiveSection] = useState('introduction')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Scroll spy — pick the last section whose heading has scrolled past 30% of viewport
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.3
      let current = sections[0].id

      for (const { id } of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = id
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigateTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed left-0 top-20 bottom-0 w-64 border-r border-white/[0.06] bg-surface-950/50 backdrop-blur-sm overflow-y-auto py-8 px-4 z-30">
        <Sidebar activeSection={activeSection} onNavigate={navigateTo} />
      </aside>

      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-libre-500 text-white shadow-lg shadow-libre-500/30 flex items-center justify-center hover:bg-libre-400 transition-colors"
        aria-label="Open navigation"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed left-0 top-0 bottom-0 w-72 bg-surface-950 border-r border-white/[0.06] z-50 lg:hidden overflow-y-auto py-6 px-4"
            >
              <div className="flex items-center justify-between mb-4 px-3">
                <span className="text-sm font-semibold text-white tracking-wide uppercase">Docs</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-surface-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <Sidebar activeSection={activeSection} onNavigate={navigateTo} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="flex-1 lg:ml-64 min-h-screen pt-28 lg:pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">

          {/* ────────────── INTRODUCTION ────────────── */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <SectionHeading id="introduction" icon={BookOpen}>Introduction</SectionHeading>
            <P>
              LibreYOLO is an MIT-licensed object detection library that provides a unified Python API across three architectures: <strong className="text-white">YOLOX</strong>, <strong className="text-white">YOLOv9</strong>, and <strong className="text-white">RF-DETR</strong>. One interface for prediction, training, validation, and export — regardless of which model family you use.
            </P>
            <CodeBlock language="python">{`from libreyolo import LIBREYOLO

model = LIBREYOLO("libreyoloXs.pt")
results = model("image.jpg", conf=0.25, save=True)
print(results.boxes.xyxy)`}</CodeBlock>

            <SubHeading>Key features</SubHeading>
            <ul className="space-y-2.5 mb-4">
              <FeatureItem>Unified API across YOLOX, YOLOv9, and RF-DETR</FeatureItem>
              <FeatureItem>Auto-detection of model architecture, size, and class count from weights</FeatureItem>
              <FeatureItem>Tiled inference for large/high-resolution images</FeatureItem>
              <FeatureItem>ONNX and TorchScript export with embedded metadata</FeatureItem>
              <FeatureItem>ONNX Runtime inference backend</FeatureItem>
              <FeatureItem>COCO-compatible validation with mAP metrics</FeatureItem>
              <FeatureItem>Accepts any image format: file paths, URLs, PIL, NumPy, PyTorch tensors, raw bytes</FeatureItem>
            </ul>
          </motion.div>

          <Divider />

          {/* ────────────── INSTALLATION ────────────── */}
          <SectionHeading id="installation" icon={Terminal}>Installation</SectionHeading>
          <SubHeading>Requirements</SubHeading>
          <ul className="space-y-1.5 mb-4">
            <li className="flex items-center gap-2 text-surface-400">
              <span className="w-1.5 h-1.5 rounded-full bg-libre-400" />Python 3.10+
            </li>
            <li className="flex items-center gap-2 text-surface-400">
              <span className="w-1.5 h-1.5 rounded-full bg-libre-400" />PyTorch 1.7+
            </li>
          </ul>

          <SubHeading>From PyPI</SubHeading>
          <CodeBlock language="bash">{`pip install libreyolo`}</CodeBlock>

          <SubHeading>From source</SubHeading>
          <CodeBlock language="bash">{`git clone https://github.com/Libre-YOLO/libreyolo.git
cd libreyolo
pip install -e .`}</CodeBlock>

          <SubHeading>Optional dependencies</SubHeading>
          <CodeBlock language="bash">{`# ONNX export and inference
pip install libreyolo[onnx]
# or: pip install onnx onnxsim onnxscript onnxruntime

# RF-DETR support
pip install libreyolo[rfdetr]
# or: pip install rfdetr timm supervision

# Weight conversion from Ultralytics
pip install libreyolo[convert]`}</CodeBlock>

          <P>If using <InlineCode>uv</InlineCode>:</P>
          <CodeBlock language="bash">{`uv sync --extra onnx
uv sync --extra rfdetr`}</CodeBlock>

          <Divider />

          {/* ────────────── QUICKSTART ────────────── */}
          <SectionHeading id="quickstart" icon={Rocket}>Quickstart</SectionHeading>

          <SubHeading>Load a model and run inference</SubHeading>
          <CodeBlock language="python">{`from libreyolo import LIBREYOLO

# Auto-detects architecture and size from the weights file
model = LIBREYOLO("libreyoloXs.pt")

# Run on a single image
result = model("photo.jpg")

print(f"Found {len(result)} objects")
print(result.boxes.xyxy)   # bounding boxes (N, 4)
print(result.boxes.conf)   # confidence scores (N,)
print(result.boxes.cls)    # class IDs (N,)`}</CodeBlock>

          <SubHeading>Save annotated output</SubHeading>
          <CodeBlock language="python">{`result = model("photo.jpg", save=True)
# Saved to runs/detections/photo_LIBREYOLOX_s_<timestamp>.jpg`}</CodeBlock>

          <SubHeading>Process a directory</SubHeading>
          <CodeBlock language="python">{`results = model("images/", save=True, batch=4)
for r in results:
    print(f"{r.path}: {len(r)} detections")`}</CodeBlock>

          <Divider />

          {/* ────────────── AVAILABLE MODELS ────────────── */}
          <SectionHeading id="models" icon={Layers}>Available Models</SectionHeading>

          <SubHeading>YOLOX</SubHeading>
          <DocTable
            headers={['Size', 'Code', 'Input size', 'Use case']}
            rows={[
              ['Nano', <InlineCode key="nano">&quot;nano&quot;</InlineCode>, '416', 'Edge devices, mobile'],
              ['Tiny', <InlineCode key="tiny">&quot;tiny&quot;</InlineCode>, '416', 'Edge devices, faster'],
              ['Small', <InlineCode key="s">&quot;s&quot;</InlineCode>, '640', 'Balanced speed/accuracy'],
              ['Medium', <InlineCode key="m">&quot;m&quot;</InlineCode>, '640', 'Higher accuracy'],
              ['Large', <InlineCode key="l">&quot;l&quot;</InlineCode>, '640', 'High accuracy'],
              ['XLarge', <InlineCode key="x">&quot;x&quot;</InlineCode>, '640', 'Maximum accuracy'],
            ]}
          />
          <CodeBlock language="python">{`from libreyolo import LIBREYOLO

model = LIBREYOLO("libreyoloXnano.pt")
# model = LIBREYOLO("libreyoloXtiny.pt")
# model = LIBREYOLO("libreyoloXs.pt")
# model = LIBREYOLO("libreyoloXm.pt")
# model = LIBREYOLO("libreyoloXl.pt")
# model = LIBREYOLO("libreyoloXx.pt")`}</CodeBlock>

          <SubHeading>YOLOv9</SubHeading>
          <DocTable
            headers={['Size', 'Code', 'Input size', 'Use case']}
            rows={[
              ['Tiny', <InlineCode key="t">&quot;t&quot;</InlineCode>, '640', 'Fast inference'],
              ['Small', <InlineCode key="s">&quot;s&quot;</InlineCode>, '640', 'Balanced'],
              ['Medium', <InlineCode key="m">&quot;m&quot;</InlineCode>, '640', 'Higher accuracy'],
              ['Compact', <InlineCode key="c">&quot;c&quot;</InlineCode>, '640', 'Best accuracy'],
            ]}
          />
          <CodeBlock language="python">{`from libreyolo import LIBREYOLO

model = LIBREYOLO("libreyolo9t.pt")
# model = LIBREYOLO("libreyolo9s.pt")
# model = LIBREYOLO("libreyolo9m.pt")
# model = LIBREYOLO("libreyolo9c.pt")`}</CodeBlock>

          <SubHeading>RF-DETR</SubHeading>
          <DocTable
            headers={['Size', 'Code', 'Input size', 'Use case']}
            rows={[
              ['Nano', <InlineCode key="n">&quot;n&quot;</InlineCode>, 'varies', 'Edge'],
              ['Small', <InlineCode key="s">&quot;s&quot;</InlineCode>, 'varies', 'Balanced'],
              ['Base', <InlineCode key="b">&quot;b&quot;</InlineCode>, 'varies', 'Default'],
              ['Medium', <InlineCode key="m">&quot;m&quot;</InlineCode>, 'varies', 'Higher accuracy'],
              ['Large', <InlineCode key="l">&quot;l&quot;</InlineCode>, 'varies', 'Maximum accuracy'],
            ]}
          />
          <CodeBlock language="python">{`from libreyolo import LIBREYOLO

model = LIBREYOLO("librerfdetrnano.pth")
# model = LIBREYOLO("librerfdetrsmall.pth")
# model = LIBREYOLO("librerfdetrbase.pth")
# model = LIBREYOLO("librerfdetrmedium.pth")
# model = LIBREYOLO("librerfdetrlarge.pth")`}</CodeBlock>

          <SubHeading>Factory function</SubHeading>
          <P>
            The <InlineCode>LIBREYOLO()</InlineCode> factory auto-detects everything from the weights file:
          </P>
          <CodeBlock language="python">{`from libreyolo import LIBREYOLO

# Auto-detects: YOLOX, size=s, 80 classes
model = LIBREYOLO("libreyoloXs.pt")

# Auto-detects: YOLOv9, size=c, 80 classes
model = LIBREYOLO("libreyolo9c.pt")

# Auto-detects: RF-DETR
model = LIBREYOLO("librerfdetrbase.pth")

# ONNX models work too
model = LIBREYOLO("model.onnx")`}</CodeBlock>
          <P>
            If weights are not found locally, LibreYOLO attempts to download them from Hugging Face automatically.
          </P>

          <Divider />

          {/* ────────────── PREDICTION ────────────── */}
          <SectionHeading id="prediction" icon={Crosshair}>Prediction</SectionHeading>

          <SubHeading>Basic prediction</SubHeading>
          <CodeBlock language="python">{`result = model("image.jpg")`}</CodeBlock>

          <SubHeading>All prediction parameters</SubHeading>
          <CodeBlock language="python">{`result = model(
    "image.jpg",
    conf=0.25,            # confidence threshold (default: 0.25)
    iou=0.45,             # NMS IoU threshold (default: 0.45)
    imgsz=640,            # input size override (default: model's native)
    classes=[0, 2, 5],    # filter to specific class IDs (default: all)
    max_det=300,          # max detections per image (default: 300)
    save=True,            # save annotated image (default: False)
    output_path="out/",   # where to save (default: runs/detections/)
    color_format="rgb",   # input format hint for numpy arrays
    output_file_format="png",  # output format: "jpg", "png", "webp"
)`}</CodeBlock>
          <P>
            <InlineCode>model.predict(...)</InlineCode> is an alias for <InlineCode>model(...)</InlineCode>.
          </P>

          <SubHeading>Supported input formats</SubHeading>
          <P>LibreYOLO accepts images in any of these formats:</P>
          <CodeBlock language="python">{`# File path (string or pathlib.Path)
result = model("photo.jpg")
result = model(Path("photo.jpg"))

# URL
result = model("https://example.com/image.jpg")

# PIL Image
from PIL import Image
img = Image.open("photo.jpg")
result = model(img)

# NumPy array (HWC or CHW, RGB or BGR, uint8 or float32)
import numpy as np
arr = np.random.randint(0, 255, (480, 640, 3), dtype=np.uint8)
result = model(arr)

# OpenCV (BGR) — specify color_format
import cv2
frame = cv2.imread("photo.jpg")
result = model(frame, color_format="bgr")

# PyTorch tensor (CHW or NCHW)
import torch
tensor = torch.randn(3, 640, 640)
result = model(tensor)

# Raw bytes
with open("photo.jpg", "rb") as f:
    result = model(f.read())

# Directory of images
results = model("images/", batch=4)`}</CodeBlock>

          <SubHeading>Working with results</SubHeading>
          <P>
            Every prediction returns a <InlineCode>Results</InlineCode> object (or a list of them for directories):
          </P>
          <CodeBlock language="python">{`result = model("image.jpg")

# Number of detections
len(result)  # e.g., 5

# Bounding boxes in xyxy format (x1, y1, x2, y2)
result.boxes.xyxy        # tensor of shape (N, 4)

# Bounding boxes in xywh format (center_x, center_y, width, height)
result.boxes.xywh        # tensor of shape (N, 4)

# Confidence scores
result.boxes.conf        # tensor of shape (N,)

# Class IDs
result.boxes.cls         # tensor of shape (N,)

# Combined data: [x1, y1, x2, y2, conf, cls]
result.boxes.data        # tensor of shape (N, 6)

# Metadata
result.orig_shape        # (height, width) of original image
result.path              # source file path (or None)
result.names             # {0: "person", 1: "bicycle", ...}

# Move to CPU / convert to numpy
result_cpu = result.cpu()
boxes_np = result.boxes.numpy()`}</CodeBlock>

          <SubHeading>Class filtering</SubHeading>
          <P>Filter detections to specific class IDs:</P>
          <CodeBlock language="python">{`# Only detect people (class 0) and cars (class 2)
result = model("image.jpg", classes=[0, 2])`}</CodeBlock>

          <Divider />

          {/* ────────────── TILED INFERENCE ────────────── */}
          <SectionHeading id="tiled-inference" icon={Grid3x3}>Tiled Inference</SectionHeading>
          <P>
            For images much larger than the model's input size (e.g., satellite imagery, drone footage), tiled inference splits the image into overlapping tiles, runs detection on each, and merges results.
          </P>
          <CodeBlock language="python">{`result = model(
    "large_aerial_image.jpg",
    tiling=True,
    overlap_ratio=0.2,   # 20% overlap between tiles (default)
    save=True,
)

# Extra metadata on tiled results
result.tiled           # True
result.num_tiles       # number of tiles used`}</CodeBlock>

          <P>
            When <InlineCode>save=True</InlineCode> with tiling, LibreYOLO saves:
          </P>
          <ul className="space-y-2 mb-4">
            <FeatureItem><InlineCode>final_image.jpg</InlineCode> — full image with all merged detections drawn</FeatureItem>
            <FeatureItem><InlineCode>grid_visualization.jpg</InlineCode> — image showing tile grid overlay</FeatureItem>
            <FeatureItem><InlineCode>tiles/</InlineCode> — individual tile crops</FeatureItem>
            <FeatureItem><InlineCode>metadata.json</InlineCode> — tiling parameters and detection counts</FeatureItem>
          </ul>
          <P>
            If the image is already smaller than the model's input size, tiling is skipped automatically.
          </P>

          <Divider />

          {/* ────────────── TRAINING ────────────── */}
          <SectionHeading id="training" icon={GraduationCap}>Training</SectionHeading>

          <SubHeading>YOLOX training</SubHeading>
          <CodeBlock language="python">{`from libreyolo import LIBREYOLO

model = LIBREYOLO("libreyoloXs.pt")

results = model.train(
    data="coco128.yaml",     # path to data.yaml (required)

    # Training parameters
    epochs=100,
    batch=16,
    imgsz=640,

    # Optimizer
    lr0=0.01,                # initial learning rate
    optimizer="SGD",         # "SGD", "Adam", "AdamW"

    # System
    device="0",              # GPU device ("", "cpu", "cuda", "0", "0,1")
    workers=8,
    seed=42,

    # Output
    project="runs/train",
    name="exp",
    exist_ok=False,

    # Training features
    amp=True,                # automatic mixed precision
    patience=50,             # early stopping patience
    resume=False,            # resume from loaded checkpoint
)

print(f"Best mAP50-95: {results['best_mAP50_95']:.3f}")
print(f"Best checkpoint: {results['best_checkpoint']}")`}</CodeBlock>

          <P>After training, the model instance is automatically updated with the best weights.</P>

          <SubHeading>Training results dict</SubHeading>
          <CodeBlock language="python">{`{
    "final_loss": 2.31,
    "best_mAP50": 0.682,
    "best_mAP50_95": 0.451,
    "best_epoch": 87,
    "save_dir": "runs/train/exp",
    "best_checkpoint": "runs/train/exp/weights/best.pt",
    "last_checkpoint": "runs/train/exp/weights/last.pt",
}`}</CodeBlock>

          <SubHeading>Resuming training</SubHeading>
          <CodeBlock language="python">{`model = LIBREYOLO("runs/train/exp/weights/last.pt")
results = model.train(data="coco128.yaml", resume=True)`}</CodeBlock>

          <SubHeading>Custom dataset YAML format</SubHeading>
          <CodeBlock language="yaml" filename="data.yaml">{`path: /path/to/dataset
train: images/train
val: images/val
test: images/test  # optional

nc: 3
names: ["cat", "dog", "bird"]`}</CodeBlock>

          <SubHeading>RF-DETR training</SubHeading>
          <P>
            RF-DETR uses a different training API that wraps the original rfdetr implementation:
          </P>
          <CodeBlock language="python">{`from libreyolo import LIBREYOLO

model = LIBREYOLO("librerfdetrbase.pth")

results = model.train(
    data="path/to/dataset",  # Roboflow/COCO format directory
    epochs=100,
    batch_size=4,
    lr=1e-4,
    output_dir="runs/train",
)`}</CodeBlock>

          <P>RF-DETR datasets use COCO annotation format:</P>
          <CodeBlock language="text">{`dataset/
    train/
        _annotations.coco.json
        image1.jpg
        image2.jpg
    valid/
        _annotations.coco.json
        image1.jpg`}</CodeBlock>

          <Divider />

          {/* ────────────── VALIDATION ────────────── */}
          <SectionHeading id="validation" icon={CheckCircle2}>Validation</SectionHeading>
          <P>Run COCO-standard evaluation on a validation set:</P>
          <CodeBlock language="python">{`results = model.val(
    data="coco128.yaml",   # dataset config
    batch=16,
    imgsz=640,
    conf=0.001,            # low conf for mAP calculation
    iou=0.6,               # NMS IoU threshold
    split="val",           # "val" or "test"
    save_json=False,       # save predictions as COCO JSON
    plots=True,            # generate confusion matrix
    verbose=True,          # print per-class metrics
)

print(f"mAP50:    {results['metrics/mAP50']:.3f}")
print(f"mAP50-95: {results['metrics/mAP50-95']:.3f}")
print(f"Precision: {results['metrics/precision']:.3f}")
print(f"Recall:    {results['metrics/recall']:.3f}")`}</CodeBlock>

          <SubHeading>Validation results dict</SubHeading>
          <CodeBlock language="python">{`{
    "metrics/precision": 0.712,
    "metrics/recall": 0.683,
    "metrics/mAP50": 0.721,
    "metrics/mAP50-95": 0.489,
}`}</CodeBlock>

          <Divider />

          {/* ────────────── EXPORT ────────────── */}
          <SectionHeading id="export" icon={Upload}>Export</SectionHeading>
          <P>Export models to ONNX or TorchScript for deployment.</P>

          <SubHeading>Quick export</SubHeading>
          <CodeBlock language="python">{`# ONNX (default)
model.export()

# TorchScript
model.export(format="torchscript")`}</CodeBlock>

          <SubHeading>All export parameters</SubHeading>
          <CodeBlock language="python">{`path = model.export(
    format="onnx",            # "onnx" or "torchscript"
    output_path="model.onnx", # output file (auto-generated if None)
    imgsz=640,                # input resolution (default: model's native)
    opset=13,                 # ONNX opset version (default: 13)
    simplify=True,            # run onnxsim graph simplification
    dynamic=True,             # enable dynamic batch/height/width axes
    half=False,               # export in FP16
    batch=1,                  # batch size for static graph
    device="cpu",             # device to trace on
)`}</CodeBlock>

          <SubHeading>ONNX metadata</SubHeading>
          <P>Exported ONNX files include embedded metadata:</P>
          <DocTable
            headers={['Key', 'Example value']}
            rows={[
              [<InlineCode key="v">libreyolo_version</InlineCode>, <InlineCode key="vv">&quot;0.1.4&quot;</InlineCode>],
              [<InlineCode key="f">model_family</InlineCode>, <InlineCode key="fv">&quot;LIBREYOLOX&quot;</InlineCode>],
              [<InlineCode key="s">model_size</InlineCode>, <InlineCode key="sv">&quot;s&quot;</InlineCode>],
              [<InlineCode key="c">nb_classes</InlineCode>, <InlineCode key="cv">&quot;80&quot;</InlineCode>],
              [<InlineCode key="n">names</InlineCode>, <span key="nv" className="text-xs"><InlineCode>{`'{"0": "person", "1": "bicycle", ...}'`}</InlineCode></span>],
              [<InlineCode key="i">imgsz</InlineCode>, <InlineCode key="iv">&quot;640&quot;</InlineCode>],
              [<InlineCode key="d">dynamic</InlineCode>, <InlineCode key="dv">&quot;True&quot;</InlineCode>],
              [<InlineCode key="h">half</InlineCode>, <InlineCode key="hv">&quot;False&quot;</InlineCode>],
            ]}
          />
          <P>
            This metadata is automatically read back when loading the model with <InlineCode>LIBREYOLOOnnx</InlineCode>.
          </P>

          <SubHeading>Using the Exporter class directly</SubHeading>
          <CodeBlock language="python">{`from libreyolo.export import Exporter

exporter = Exporter(model)
path = exporter("onnx", dynamic=True, simplify=True)`}</CodeBlock>

          <Divider />

          {/* ────────────── ONNX INFERENCE ────────────── */}
          <SectionHeading id="onnx-inference" icon={Cpu}>ONNX Inference</SectionHeading>
          <P>
            Run inference using ONNX Runtime instead of PyTorch. Useful for deployment environments without PyTorch.
          </P>
          <CodeBlock language="python">{`from libreyolo import LIBREYOLOOnnx

model = LIBREYOLOOnnx("model.onnx")

result = model("image.jpg", conf=0.25, iou=0.45, save=True)
print(result.boxes.xyxy)`}</CodeBlock>

          <SubHeading>Auto-metadata</SubHeading>
          <P>
            If the ONNX file was exported by LibreYOLO, class names and class count are read automatically from the embedded metadata:
          </P>
          <CodeBlock language="python">{`# Export with metadata
model.export(format="onnx", output_path="model.onnx")

# Load — names and nb_classes auto-populated
onnx_model = LIBREYOLOOnnx("model.onnx")
print(onnx_model.names)       # {0: "person", 1: "bicycle", ...}
print(onnx_model.nb_classes)  # 80`}</CodeBlock>

          <P>
            For ONNX files without metadata (e.g., exported by other tools), specify <InlineCode>nb_classes</InlineCode> manually:
          </P>
          <CodeBlock language="python">{`model = LIBREYOLOOnnx("external_model.onnx", nb_classes=20)`}</CodeBlock>

          <SubHeading>Device selection</SubHeading>
          <CodeBlock language="python">{`# Auto-detect (CUDA if available, else CPU)
model = LIBREYOLOOnnx("model.onnx", device="auto")

# Force CPU
model = LIBREYOLOOnnx("model.onnx", device="cpu")

# Force CUDA
model = LIBREYOLOOnnx("model.onnx", device="cuda")`}</CodeBlock>

          <SubHeading>Prediction parameters</SubHeading>
          <P>
            <InlineCode>LIBREYOLOOnnx</InlineCode> supports the same prediction API:
          </P>
          <CodeBlock language="python">{`result = model(
    "image.jpg",
    conf=0.25,
    iou=0.45,
    imgsz=640,
    classes=[0, 2],
    max_det=300,
    save=True,
    output_path="output/",
    color_format="rgb",
)`}</CodeBlock>

          <Divider />

          {/* ────────────── API REFERENCE ────────────── */}
          <SectionHeading id="api-reference" icon={FileCode}>API Reference</SectionHeading>

          <SubHeading>LIBREYOLO (factory)</SubHeading>
          <CodeBlock language="python">{`LIBREYOLO(
    model_path: str,
    size: str = None,           # auto-detected from weights
    reg_max: int = 16,          # YOLOv9 only
    nb_classes: int = None,     # auto-detected from weights
    device: str = "auto",
) -> LIBREYOLOX | LIBREYOLO9 | LIBREYOLORFDETR | LIBREYOLOOnnx`}</CodeBlock>
          <P>
            Auto-detects model architecture, size, and class count from the weights file. Returns the appropriate model class. Also handles <InlineCode>.onnx</InlineCode> files. Downloads weights from Hugging Face if not found locally.
          </P>

          <SubHeading>Prediction (all models)</SubHeading>
          <CodeBlock language="python">{`model(
    source,                     # image input (see supported formats)
    *,
    conf: float = 0.25,
    iou: float = 0.45,
    imgsz: int = None,
    classes: list[int] = None,
    max_det: int = 300,
    save: bool = False,
    batch: int = 1,
    output_path: str = None,
    color_format: str = "auto",
    tiling: bool = False,
    overlap_ratio: float = 0.2,
    output_file_format: str = None,
) -> Results | list[Results]`}</CodeBlock>

          <SubHeading>Results</SubHeading>
          <CodeBlock language="python">{`result = Results(
    boxes: Boxes,
    orig_shape: tuple[int, int],  # (height, width)
    path: str | None,
    names: dict[int, str],
)

len(result)          # number of detections
result.cpu()         # copy with tensors on CPU`}</CodeBlock>

          <SubHeading>Boxes</SubHeading>
          <CodeBlock language="python">{`boxes = Boxes(boxes, conf, cls)

boxes.xyxy           # (N, 4) tensor — x1, y1, x2, y2
boxes.xywh           # (N, 4) tensor — cx, cy, w, h
boxes.conf           # (N,) tensor — confidence scores
boxes.cls            # (N,) tensor — class IDs
boxes.data           # (N, 6) tensor — [xyxy, conf, cls]

len(boxes)           # number of boxes
boxes.cpu()          # copy on CPU
boxes.numpy()        # copy as numpy arrays`}</CodeBlock>

          <SubHeading>model.export()</SubHeading>
          <CodeBlock language="python">{`model.export(
    format: str = "onnx",       # "onnx" or "torchscript"
    *,
    output_path: str = None,
    imgsz: int = None,
    opset: int = 13,
    simplify: bool = True,
    dynamic: bool = True,
    half: bool = False,
    batch: int = 1,
    device: str = None,
) -> str                        # path to exported file`}</CodeBlock>

          <SubHeading>Exporter</SubHeading>
          <CodeBlock language="python">{`from libreyolo.export import Exporter

exporter = Exporter(model)
path = exporter(
    format,                     # same parameters as model.export()
    **kwargs,
)

Exporter.FORMATS               # dict of supported formats
# {"onnx": {"suffix": ".onnx", ...}, "torchscript": {"suffix": ".torchscript", ...}}`}</CodeBlock>

          <SubHeading>model.val()</SubHeading>
          <CodeBlock language="python">{`model.val(
    data: str = None,           # path to data.yaml
    batch: int = 16,
    imgsz: int = None,
    conf: float = 0.001,
    iou: float = 0.6,
    device: str = None,
    split: str = "val",
    save_json: bool = False,
    plots: bool = True,
    verbose: bool = True,
) -> dict`}</CodeBlock>
          <P>Returns:</P>
          <CodeBlock language="python">{`{
    "metrics/precision": float,
    "metrics/recall": float,
    "metrics/mAP50": float,
    "metrics/mAP50-95": float,
}`}</CodeBlock>

          <SubHeading>model.train() (YOLOX)</SubHeading>
          <CodeBlock language="python">{`model.train(
    data: str,                  # path to data.yaml (required)
    *,
    epochs: int = 100,
    batch: int = 16,
    imgsz: int = 640,
    lr0: float = 0.01,
    optimizer: str = "SGD",
    device: str = "",
    workers: int = 8,
    seed: int = 0,
    project: str = "runs/train",
    name: str = "exp",
    exist_ok: bool = False,
    pretrained: bool = True,
    resume: bool = False,
    amp: bool = True,
    patience: int = 50,
) -> dict`}</CodeBlock>
          <P>Returns:</P>
          <CodeBlock language="python">{`{
    "final_loss": float,
    "best_mAP50": float,
    "best_mAP50_95": float,
    "best_epoch": int,
    "save_dir": str,
    "best_checkpoint": str,
    "last_checkpoint": str,
}`}</CodeBlock>

          <SubHeading>model.train() (RF-DETR)</SubHeading>
          <CodeBlock language="python">{`model.train(
    data: str,                  # path to dataset directory
    epochs: int = 100,
    batch_size: int = 4,
    lr: float = 1e-4,
    output_dir: str = "runs/train",
    resume: str = None,
) -> dict`}</CodeBlock>

          <SubHeading>LIBREYOLOOnnx</SubHeading>
          <CodeBlock language="python">{`LIBREYOLOOnnx(
    onnx_path: str,
    nb_classes: int = 80,       # auto-read from metadata if available
    device: str = "auto",
)`}</CodeBlock>
          <P>
            Supports the same prediction API as PyTorch models (except tiling).
          </P>

          <SubHeading>ValidationConfig</SubHeading>
          <CodeBlock language="python">{`from libreyolo import ValidationConfig

config = ValidationConfig(
    data="coco128.yaml",
    batch_size=16,
    imgsz=640,
    conf_thres=0.001,
    iou_thres=0.6,
    split="val",
    device="auto",
    save_json=False,
    plots=True,
    verbose=True,
    half=False,
)

# Load/save YAML
config = ValidationConfig.from_yaml("config.yaml")
config.to_yaml("config.yaml")`}</CodeBlock>

          <Divider />

          {/* ────────────── ARCHITECTURE GUIDE ────────────── */}
          <SectionHeading id="architecture" icon={Wrench}>Architecture Guide</SectionHeading>
          <P>
            This section is for contributors who want to understand the codebase internals.
          </P>

          <SubHeading>Base class design</SubHeading>
          <P>
            All model families inherit from <InlineCode>LibreYOLOBase</InlineCode> (in <InlineCode>libreyolo/common/base_model.py</InlineCode>). Subclasses implement these abstract methods:
          </P>
          <DocTable
            headers={['Method', 'Purpose']}
            rows={[
              [<InlineCode key="init">_init_model()</InlineCode>, 'Build and return the nn.Module'],
              [<InlineCode key="sizes">_get_valid_sizes()</InlineCode>, 'Return list of valid size codes'],
              [<InlineCode key="name">_get_model_name()</InlineCode>, 'Return model name string'],
              [<InlineCode key="input">_get_input_size()</InlineCode>, 'Return default input resolution'],
              [<InlineCode key="pre">_preprocess()</InlineCode>, 'Image to tensor conversion'],
              [<InlineCode key="fwd">_forward()</InlineCode>, 'Model forward pass'],
              [<InlineCode key="post">_postprocess()</InlineCode>, 'Raw output to detection dicts'],
              [<InlineCode key="layers">_get_available_layers()</InlineCode>, 'Map of named layers'],
            ]}
          />
          <P>
            The base class provides the shared pipeline: <InlineCode>__call__</InlineCode> / <InlineCode>predict</InlineCode>, <InlineCode>export</InlineCode>, <InlineCode>val</InlineCode>, tiled inference, results wrapping, and saving.
          </P>

          <SubHeading>Package structure</SubHeading>
          <CodeBlock language="text">{`libreyolo/
    __init__.py          # Public API exports
    factory.py           # LIBREYOLO() auto-detection factory
    common/
        base_model.py    # LibreYOLOBase abstract class
        onnx.py          # LIBREYOLOOnnx runtime backend
        results.py       # Results and Boxes classes
        image_loader.py  # Unified image loading
        utils.py         # NMS, drawing, preprocessing
    export/
        exporter.py      # Unified Exporter class
    yolox/
        model.py         # LIBREYOLOX
        nn.py            # YOLOX network architecture
        utils.py         # YOLOX-specific pre/postprocessing
    v9/
        model.py         # LIBREYOLO9
        nn.py            # YOLOv9 network architecture
        utils.py         # v9-specific pre/postprocessing
    rfdetr/
        model.py         # LIBREYOLORFDETR
        nn.py            # RF-DETR network + configs
        utils.py         # RF-DETR postprocessing
        train.py         # RF-DETR training wrapper
    training/
        config.py        # YOLOXTrainConfig
        trainer.py       # YOLOXTrainer
        dataset.py       # Training dataset
        augment.py       # Mosaic, mixup, etc.
        loss.py          # YOLOX loss functions
        scheduler.py     # LR schedulers
        ema.py           # Exponential moving average
    validation/
        config.py        # ValidationConfig
        detection_validator.py  # DetectionValidator
        metrics.py       # DetMetrics, mAP computation
        base.py          # BaseValidator
        preprocessors.py # Per-model val preprocessing
    data/
        utils.py         # Dataset loading, YAML parsing
        yolo_coco_api.py # YOLO-to-COCO annotation bridge
    cfg/
        datasets/        # Built-in dataset YAML configs`}</CodeBlock>

          <SubHeading>Adding a new model family</SubHeading>
          <ol className="space-y-2.5 mb-4 list-none">
            {[
              <>Create <InlineCode>libreyolo/newmodel/model.py</InlineCode> with a class inheriting <InlineCode>LibreYOLOBase</InlineCode></>,
              'Implement all abstract methods',
              <>Create <InlineCode>libreyolo/newmodel/nn.py</InlineCode> with the actual network architecture</>,
              <>Add detection logic to <InlineCode>factory.py</InlineCode> for auto-detection from weights</>,
              <>Export the class from <InlineCode>libreyolo/__init__.py</InlineCode></>,
              <>(Optional) Override <InlineCode>_get_val_preprocessor()</InlineCode> if the model needs non-standard validation preprocessing</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-surface-400">
                <span className="w-6 h-6 rounded-lg bg-libre-500/10 border border-libre-500/20 text-libre-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>

          <SubHeading>Export architecture</SubHeading>
          <P>
            The <InlineCode>Exporter</InlineCode> class (in <InlineCode>libreyolo/export/exporter.py</InlineCode>) is format-agnostic. It uses a <InlineCode>FORMATS</InlineCode> dict for dispatch:
          </P>
          <CodeBlock language="python">{`FORMATS = {
    "onnx":        {"suffix": ".onnx",       "method": "_export_onnx"},
    "torchscript": {"suffix": ".torchscript", "method": "_export_torchscript"},
}`}</CodeBlock>
          <P>
            To add a new export format, add an entry to <InlineCode>FORMATS</InlineCode> and implement the corresponding <InlineCode>_export_&lt;name&gt;</InlineCode> method.
          </P>

          <Divider />

          {/* ────────────── DATASET FORMAT ────────────── */}
          <SectionHeading id="dataset-format" icon={Database}>Dataset Format</SectionHeading>
          <P>
            LibreYOLO uses YOLO-format datasets configured via YAML files.
          </P>

          <SubHeading>data.yaml structure</SubHeading>
          <CodeBlock language="yaml" filename="data.yaml">{`path: /absolute/path/to/dataset   # dataset root
train: images/train               # relative to path
val: images/val                   # relative to path
test: images/test                 # optional

nc: 80                            # number of classes
names: [                          # class names
  "person", "bicycle", "car", "motorcycle", "airplane",
  "bus", "train", "truck", "boat", "traffic light",
  # ...
]`}</CodeBlock>

          <SubHeading>Directory layout</SubHeading>
          <CodeBlock language="text">{`dataset/
    images/
        train/
            img001.jpg
            img002.jpg
        val/
            img003.jpg
    labels/
        train/
            img001.txt
            img002.txt
        val/
            img003.txt`}</CodeBlock>

          <SubHeading>Label format</SubHeading>
          <P>
            One text file per image. Each line is one object:
          </P>
          <CodeBlock language="text">{`<class_id> <center_x> <center_y> <width> <height>`}</CodeBlock>
          <P>
            All coordinates are normalized to [0, 1] relative to image dimensions.
          </P>
          <P>Example (<InlineCode>img001.txt</InlineCode>):</P>
          <CodeBlock language="text" filename="img001.txt">{`0 0.5 0.4 0.3 0.6
2 0.1 0.2 0.05 0.1`}</CodeBlock>

          <SubHeading>Built-in datasets</SubHeading>
          <P>LibreYOLO includes configs for common datasets that auto-download:</P>
          <CodeBlock language="python">{`# These download automatically on first use
results = model.val(data="coco8.yaml")
results = model.train(data="coco128.yaml", epochs=10)`}</CodeBlock>

          <SubHeading>RF-DETR dataset format</SubHeading>
          <P>
            RF-DETR uses COCO-format annotations (JSON) instead of YOLO text labels:
          </P>
          <CodeBlock language="text">{`dataset/
    train/
        _annotations.coco.json
        image1.jpg
    valid/
        _annotations.coco.json
        image1.jpg`}</CodeBlock>

          {/* Bottom spacer */}
          <div className="h-16" />
        </div>
      </main>
    </div>
  )
}
