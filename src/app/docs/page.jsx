'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Terminal, Book, Rocket, Download, Code2, Eye, 
  Box, Zap, ArrowRight, Copy, CheckCircle2, Scale, Layers
} from 'lucide-react'
import { useState } from 'react'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
      ) : (
        <Copy className="w-4 h-4 text-surface-400" />
      )}
    </button>
  )
}

function CodeBlock({ code, filename, showCopy = true }) {
  return (
    <div className="code-block rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-surface-900/50 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {filename && (
            <span className="ml-4 text-surface-500 text-sm font-mono">{filename}</span>
          )}
        </div>
        {showCopy && <CopyButton text={code} />}
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-sm">{code}</code>
      </pre>
    </div>
  )
}

function QuickstartSection() {
  const installCode = `pip install libreyolo`
  
  const basicCode = `from libreyolo import LIBREYOLO

# Load any YOLO architecture
model = LIBREYOLO("yolov11.pt")

# Run inference
results = model.predict("image.jpg")`

  const advancedCode = `from libreyolo import LIBREYOLO

# Load model
model = LIBREYOLO("yolov11m.pt")

# Predict with options
results = model.predict(
    source="video.mp4",
    conf=0.25,
    iou=0.45,
    device="cuda",
    save=True
)

# Access detections
for result in results:
    boxes = result.boxes
    for box in boxes:
        print(f"Class: {box.cls}, Conf: {box.conf:.2f}")`

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-emerald-500/10">
          <Rocket className="w-5 h-5 text-emerald-400" />
        </div>
        <h2 className="text-2xl font-semibold text-white">Quick Start</h2>
      </div>

      <div className="space-y-6">
        {/* Install */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">1. Install</h3>
          <CodeBlock code={installCode} filename="terminal" />
        </div>

        {/* Basic Usage */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">2. Basic Usage</h3>
          <p className="text-surface-400 text-sm mb-3">
            Three lines. No boilerplate. Just Python.
          </p>
          <CodeBlock code={basicCode} filename="quickstart.py" />
        </div>

        {/* Advanced Usage */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">3. Advanced Options</h3>
          <p className="text-surface-400 text-sm mb-3">
            Full control when you need it.
          </p>
          <CodeBlock code={advancedCode} filename="advanced.py" />
        </div>
      </div>
    </section>
  )
}

function FeatureMapSection() {
  const featureMapCode = `from libreyolo import LIBREYOLO

model = LIBREYOLO("yolov11m.pt")

# Enable feature extraction
results = model.predict(
    "image.jpg",
    extract_features=True
)

# Access intermediate feature maps
for layer_name, features in results[0].feature_maps.items():
    print(f"{layer_name}: {features.shape}")
    
# Visualize attention maps
results[0].plot_attention(save="attention_map.png")`

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-libre-500/10">
          <Eye className="w-5 h-5 text-libre-400" />
        </div>
        <h2 className="text-2xl font-semibold text-white">Feature Map Visualization</h2>
      </div>

      <p className="text-surface-400 mb-6">
        Debug and understand your model's decision-making with native feature extraction. 
        See what each layer "sees" and optimize your training accordingly.
      </p>

      <CodeBlock code={featureMapCode} filename="feature_maps.py" />

      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        <div className="bg-surface-900/50 border border-white/5 rounded-xl p-4">
          <h4 className="text-white font-medium mb-2">Layer Inspection</h4>
          <p className="text-surface-400 text-sm">Access any intermediate layer's output during inference.</p>
        </div>
        <div className="bg-surface-900/50 border border-white/5 rounded-xl p-4">
          <h4 className="text-white font-medium mb-2">Attention Maps</h4>
          <p className="text-surface-400 text-sm">Visualize where the model focuses its attention.</p>
        </div>
        <div className="bg-surface-900/50 border border-white/5 rounded-xl p-4">
          <h4 className="text-white font-medium mb-2">Export Ready</h4>
          <p className="text-surface-400 text-sm">Save visualizations for reports and debugging.</p>
        </div>
      </div>
    </section>
  )
}

function TrainingSection() {
  const trainingCode = `from libreyolo import LIBREYOLO

# Start from pre-trained weights
model = LIBREYOLO("yolov11n.pt")

# Train on your dataset
results = model.train(
    data="dataset.yaml",
    epochs=100,
    imgsz=640,
    batch=16,
    device="cuda"
)

# Export for deployment
model.export(format="onnx")`

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-amber-500/10">
          <Zap className="w-5 h-5 text-amber-400" />
        </div>
        <h2 className="text-2xl font-semibold text-white">Training</h2>
      </div>

      <p className="text-surface-400 mb-6">
        Fine-tune on your custom dataset with a simple, unified API.
      </p>

      <CodeBlock code={trainingCode} filename="train.py" />

      <div className="mt-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
        <p className="text-surface-300 text-sm">
          <strong className="text-emerald-400">Pro tip:</strong> Models trained with Libre-YOLO 
          on your own data are entirely yours. The MIT license means you own your weights 
          with no obligations.
        </p>
      </div>
    </section>
  )
}

function SidebarNav() {
  const sections = [
    { id: 'quickstart', label: 'Quick Start', icon: Rocket },
    { id: 'features', label: 'Feature Maps', icon: Eye },
    { id: 'training', label: 'Training', icon: Zap },
    { id: 'models', label: 'Model Zoo', icon: Layers },
    { id: 'commercial', label: 'Commercial Use', icon: Scale },
  ]

  return (
    <nav className="hidden lg:block sticky top-28 space-y-1">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-surface-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <section.icon className="w-4 h-4" />
          <span className="text-sm">{section.label}</span>
        </a>
      ))}
    </nav>
  )
}

export default function Docs() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-libre-400 text-sm font-medium mb-4">
            <Book className="w-4 h-4" />
            Documentation
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get Started with <span className="text-libre-400">Libre-YOLO</span>
          </h1>
          <p className="text-lg text-surface-400 max-w-3xl">
            Everything you need to integrate state-of-the-art object detection into your applications. 
            No complex setup, no licensing concerns.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div id="quickstart">
              <QuickstartSection />
            </div>
            
            <div id="features">
              <FeatureMapSection />
            </div>
            
            <div id="training">
              <TrainingSection />
            </div>

            {/* Links to other pages */}
            <div className="grid sm:grid-cols-2 gap-4 mt-12">
              <Link
                href="/models"
                id="models"
                className="card-hover bg-surface-900/50 border border-white/5 rounded-xl p-6 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Layers className="w-5 h-5 text-libre-400" />
                  <h3 className="text-lg font-semibold text-white">Model Zoo</h3>
                </div>
                <p className="text-surface-400 text-sm mb-4">
                  Browse available pre-trained weights with license information.
                </p>
                <span className="text-libre-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Models <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/commercial"
                id="commercial"
                className="card-hover bg-surface-900/50 border border-emerald-500/20 rounded-xl p-6 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Scale className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-semibold text-white">Commercial Guide</h3>
                </div>
                <p className="text-surface-400 text-sm mb-4">
                  Learn how to integrate Libre-YOLO into proprietary products.
                </p>
                <span className="text-emerald-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Guide <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <SidebarNav />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

