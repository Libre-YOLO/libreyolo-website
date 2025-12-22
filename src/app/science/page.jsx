'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FlaskConical, Eye, Layers, FileCode2, FolderOpen, 
  Microscope, Brain, Sparkles, CheckCircle2, XCircle,
  Lock, Unlock, ArrowRight, Code2, BookOpen, Cpu,
  GitBranch, Zap, Download, Scale
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
        <Code2 className="w-4 h-4 text-surface-400" />
      )}
    </button>
  )
}

function CodeBlock({ code, filename }) {
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
        <CopyButton text={code} />
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-sm">{code}</code>
      </pre>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 text-violet-400 text-sm font-medium mb-4">
            <FlaskConical className="w-4 h-4" />
            Research & Science
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Discovery</span>
          </h1>
          <p className="text-lg text-surface-400 leading-relaxed">
            A codebase designed for researchers, not just users. Modify freely, inspect deeply, 
            and publish without paying for the privilege.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function NoPaywallSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/30 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-violet-500/20 flex-shrink-0">
              <Unlock className="w-8 h-8 text-violet-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">No "Research License" Required</h2>
              <p className="text-surface-300 mb-6">
                Some frameworks charge separate fees for "research" or "science" licenses just to 
                let you inspect the code without releasing your work. <strong className="text-white">Libre-YOLO doesn't.</strong>
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-surface-900/50 rounded-xl p-5 border border-white/5">
                  <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-red-400" />
                    Typical "Science Licenses"
                  </h3>
                  <ul className="space-y-2 text-sm text-surface-400">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      Pay to keep research private
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      Fees for commercial R&D use
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      Complex license tiers
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      Legal review for publication
                    </li>
                  </ul>
                </div>
                
                <div className="bg-emerald-500/5 rounded-xl p-5 border border-emerald-500/20">
                  <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Unlock className="w-4 h-4 text-emerald-400" />
                    Libre-YOLO (MIT)
                  </h3>
                  <ul className="space-y-2 text-sm text-surface-400">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Investigate freely, <strong className="text-emerald-400">keep it private</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      Zero fees for any use case
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      One simple license: MIT
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      Publish without legal concerns
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ExplainabilitySection() {
  const featureMapCode = `from libreyolo import LIBREYOLO

model = LIBREYOLO("yolov11m.pt")

# One flag to save all feature maps
results = model.predict(
    "image.jpg",
    save_feature_maps=True  # That's it!
)

# Feature maps saved to runs/detect/exp/feature_maps/
# Organized by layer: backbone/, neck/, head/`

  const gradcamCode = `from libreyolo import LIBREYOLO
from libreyolo.explain import GradCAM, SaliencyMap, SHAP

model = LIBREYOLO("yolov11m.pt")

# GradCAM visualization
gradcam = GradCAM(model, target_layer="backbone.layer4")
heatmap = gradcam.generate("image.jpg", class_idx=0)
gradcam.visualize(heatmap, save="gradcam_person.png")

# Saliency maps
saliency = SaliencyMap(model)
saliency.compute("image.jpg", save="saliency.png")

# SHAP explanations
shap_explainer = SHAP(model)
shap_explainer.explain("image.jpg", save="shap_values.png")`

  const attentionCode = `from libreyolo import LIBREYOLO

model = LIBREYOLO("yolov11m.pt")

# Extract attention weights (for transformer-based models)
results = model.predict(
    "image.jpg",
    extract_attention=True
)

# Access attention maps per head
for layer, attn in results[0].attention_maps.items():
    print(f"{layer}: {attn.shape}")  # [heads, H, W]
    
# Built-in visualization
results[0].plot_attention_heads(save="attention_heads.png")`

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            <Eye className="w-4 h-4" />
            Native Explainability
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See Inside the Black Box
          </h2>
          <p className="text-lg text-surface-400 max-w-2xl mx-auto">
            Built-in tools for interpretability and explainability. No external dependencies, 
            no complex setup—just flags and function calls.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Feature Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-start"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Layers className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Feature Map Extraction</h3>
              </div>
              <p className="text-surface-400 mb-4">
                One flag. That's all it takes to save intermediate activations from every layer. 
                Perfect for understanding what your model "sees" at each stage.
              </p>
              <ul className="space-y-2 text-sm text-surface-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Backbone, neck, and head layers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Automatic organization by layer type
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  NumPy arrays for easy analysis
                </li>
              </ul>
            </div>
            <CodeBlock code={featureMapCode} filename="feature_maps.py" />
          </motion.div>

          {/* GradCAM & Saliency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-start"
          >
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-fuchsia-500/10">
                  <Brain className="w-5 h-5 text-fuchsia-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Explainability Toolbox</h3>
              </div>
              <p className="text-surface-400 mb-4">
                Native implementations of GradCAM, saliency maps, and SHAP explanations. 
                No pip installing extra packages or fighting version conflicts.
              </p>
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="bg-surface-900/50 border border-white/5 rounded-lg p-3 text-center">
                  <span className="text-white font-medium text-sm">GradCAM</span>
                </div>
                <div className="bg-surface-900/50 border border-white/5 rounded-lg p-3 text-center">
                  <span className="text-white font-medium text-sm">Saliency</span>
                </div>
                <div className="bg-surface-900/50 border border-white/5 rounded-lg p-3 text-center">
                  <span className="text-white font-medium text-sm">SHAP</span>
                </div>
                <div className="bg-surface-900/50 border border-white/5 rounded-lg p-3 text-center">
                  <span className="text-white font-medium text-sm">CAM</span>
                </div>
                <div className="bg-surface-900/50 border border-white/5 rounded-lg p-3 text-center">
                  <span className="text-white font-medium text-sm">Guided</span>
                </div>
                <div className="bg-surface-900/50 border border-white/5 rounded-lg p-3 text-center">
                  <span className="text-white font-medium text-sm">Occlusion</span>
                </div>
              </div>
            </div>
            <CodeBlock code={gradcamCode} filename="explainability.py" />
          </motion.div>

          {/* Attention Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-start"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-amber-500/10">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Attention Visualization</h3>
              </div>
              <p className="text-surface-400 mb-4">
                For transformer-based architectures, extract and visualize attention weights 
                to understand which regions the model attends to.
              </p>
              <ul className="space-y-2 text-sm text-surface-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Per-head attention maps
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Cross-attention & self-attention
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Publication-ready visualizations
                </li>
              </ul>
            </div>
            <CodeBlock code={attentionCode} filename="attention.py" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CodeStructureSection() {
  return (
    <section className="py-16 bg-surface-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            <FolderOpen className="w-4 h-4" />
            Readable Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            One File Per Model
          </h2>
          <p className="text-lg text-surface-400 max-w-2xl mx-auto">
            No more hunting through labyrinthine file structures. Each model architecture 
            lives in a single, self-contained file.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Typical Structure */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-900/50 border border-red-500/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-500/10">
                <XCircle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Typical Framework Structure</h3>
            </div>
            <div className="code-block rounded-lg overflow-hidden">
              <pre className="p-4 text-sm overflow-x-auto">
                <code className="text-surface-400">{`standard_framework/
├── nn/
│   ├── modules/
│   │   ├── block.py      # 500+ lines
│   │   ├── conv.py       # Where is C2f?
│   │   ├── head.py       # Multiple classes
│   │   └── transformer.py
│   └── tasks.py          # 1000+ lines
├── models/
│   ├── yolo/
│   │   ├── detect/
│   │   │   ├── train.py
│   │   │   └── val.py
│   │   └── model.py
│   └── ... 
└── # Good luck finding what you need`}</code>
              </pre>
            </div>
            <p className="mt-4 text-surface-500 text-sm">
              Fragmented across dozens of files. Imports from everywhere. 
              Modifying one thing breaks another.
            </p>
          </motion.div>

          {/* Libre-YOLO Structure */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-900/50 border border-emerald-500/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Libre-YOLO Structure</h3>
            </div>
            <div className="code-block rounded-lg overflow-hidden">
              <pre className="p-4 text-sm overflow-x-auto">
                <code className="text-surface-400">{`libreyolo/
├── models/
│   ├── yolov8.py         # Complete v8 model
│   ├── yolov11.py        # Complete v11 model
│   └── yolov12.py        # Complete v12 model
├── notebooks/
│   ├── yolov8.ipynb      # Interactive v8
│   ├── yolov11.ipynb     # Interactive v11
│   └── explainability.ipynb
├── explain/
│   └── toolbox.py        # All XAI methods
└── # Find anything in seconds`}</code>
              </pre>
            </div>
            <p className="mt-4 text-emerald-400 text-sm">
              Each model is self-contained. Modify YOLOv11 without touching v8. 
              Jupyter notebooks for interactive exploration.
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-4 mt-12"
        >
          <div className="bg-surface-900/50 border border-white/5 rounded-xl p-5">
            <FileCode2 className="w-6 h-6 text-violet-400 mb-3" />
            <h4 className="text-white font-medium mb-2">Python Files</h4>
            <p className="text-surface-400 text-sm">
              One .py file per architecture. Everything you need to understand 
              or modify in one place.
            </p>
          </div>
          <div className="bg-surface-900/50 border border-white/5 rounded-xl p-5">
            <BookOpen className="w-6 h-6 text-cyan-400 mb-3" />
            <h4 className="text-white font-medium mb-2">Jupyter Notebooks</h4>
            <p className="text-surface-400 text-sm">
              Interactive notebooks for each model. Run cell-by-cell, 
              visualize outputs, experiment freely.
            </p>
          </div>
          <div className="bg-surface-900/50 border border-white/5 rounded-xl p-5">
            <GitBranch className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="text-white font-medium mb-2">Easy to Fork</h4>
            <p className="text-surface-400 text-sm">
              Want to create YOLOv11-Custom? Copy one file, modify, done. 
              No dependency spaghetti.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ModificationSection() {
  const customBackboneCode = `# yolov11_custom.py - Your modified architecture

from libreyolo.models.yolov11 import YOLOv11

class YOLOv11Custom(YOLOv11):
    def __init__(self):
        super().__init__()
        # Swap out the backbone
        self.backbone = MyCustomBackbone()
        
    def forward(self, x):
        # Add your custom logic
        features = self.backbone(x)
        
        # Maybe add a custom attention layer?
        features = self.custom_attention(features)
        
        return self.head(self.neck(features))

# That's it. Train it:
model = YOLOv11Custom()
model.train(data="my_dataset.yaml")`

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-fuchsia-500/10">
              <Zap className="w-5 h-5 text-fuchsia-400" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Designed for Modification</h2>
          </div>
          
          <p className="text-surface-400 mb-8 max-w-3xl">
            Want to test a new backbone? Experiment with a custom attention mechanism? 
            Add a novel loss function? The clean architecture makes modifications straightforward.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Modify Without Fear</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">Isolated Changes</span>
                    <p className="text-surface-400 text-sm mt-1">
                      Modify YOLOv11 without affecting YOLOv8. Each model is independent.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">Clear Inheritance</span>
                    <p className="text-surface-400 text-sm mt-1">
                      Simple class hierarchy. Override what you need, inherit the rest.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">No License Barriers</span>
                    <p className="text-surface-400 text-sm mt-1">
                      Your modifications stay private. No fees to keep your research confidential.
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-violet-500/5 border border-violet-500/20 rounded-xl">
                <p className="text-surface-300 text-sm">
                  <strong className="text-violet-400">For researchers:</strong> Publish papers 
                  using modified Libre-YOLO architectures. No "science license" needed. 
                  Just cite the project and publish freely.
                </p>
              </div>
            </div>
            
            <CodeBlock code={customBackboneCode} filename="yolov11_custom.py" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 rounded-2xl p-8 lg:p-12 text-center"
        >
          <FlaskConical className="w-12 h-12 text-violet-400 mx-auto mb-6" />
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Start Your Research Today
          </h2>
          <p className="text-surface-400 mb-8 max-w-xl mx-auto">
            No license fees. No paywalls. No restrictions on keeping your work private. 
            Just install and start exploring.
          </p>
          
          <div className="code-block rounded-xl max-w-md mx-auto mb-8">
            <pre className="p-4 text-left">
              <code className="font-mono text-sm">
                <span className="text-surface-500">$</span> <span className="text-emerald-400">pip install</span> <span className="text-violet-300">libreyolo</span>
              </code>
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs"
              className="btn-primary flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl text-white font-semibold"
            >
              View Documentation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/models"
              className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition-all"
            >
              <Download className="w-5 h-5 text-emerald-400" />
              Get Models
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Science() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <NoPaywallSection />
      <ExplainabilitySection />
      <CodeStructureSection />
      <ModificationSection />
      <CTASection />
    </div>
  )
}

