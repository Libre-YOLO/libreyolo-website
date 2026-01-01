'use client'

import { motion } from 'framer-motion'
import {
  Download, Layers, ExternalLink, Gauge, HardDrive
} from 'lucide-react'

const architectures = [
  {
    id: 'libreyolox',
    name: 'LibreYOLOX',
    description: 'Based on the YOLOX architecture from Megvii.',
    color: 'libre',
    hfPrefix: 'yolox_',
    models: [
      { size: 'nano', name: 'Nano', params: '0.9M', description: 'Ultra-lightweight', speed: 'Fastest', file: 'libreyolox_nano.pt' },
      { size: 'tiny', name: 'Tiny', params: '5.1M', description: 'Embedded systems', speed: 'Fast', file: 'libreyolox_tiny.pt' },
      { size: 's', name: 'Small', params: '9.0M', description: 'Mobile & edge', speed: 'Fast', file: 'libreyolox_s.pt' },
      { size: 'm', name: 'Medium', params: '25.3M', description: 'General purpose', speed: 'Medium', file: 'libreyolox_m.pt' },
      { size: 'l', name: 'Large', params: '54.2M', description: 'High accuracy', speed: 'Slower', file: 'libreyolox_l.pt' },
    ]
  },
  {
    id: 'libreyolo8',
    name: 'LibreYOLO8',
    description: 'Based on the YOLOv8 architecture from Ultralytics.',
    color: 'cyan',
    hfPrefix: 'yolov8',
    models: [
      { size: 'n', name: 'Nano', params: '3.2M', description: 'Edge & mobile deployment', speed: 'Fastest', file: 'libreyolo8n.pt' },
      { size: 's', name: 'Small', params: '11.2M', description: 'Balanced performance', speed: 'Fast', file: 'libreyolo8s.pt' },
      { size: 'm', name: 'Medium', params: '25.9M', description: 'Production workhorse', speed: 'Medium', file: 'libreyolo8m.pt' },
      { size: 'l', name: 'Large', params: '43.7M', description: 'High accuracy needs', speed: 'Slower', file: 'libreyolo8l.pt' },
      { size: 'x', name: 'X-Large', params: '68.2M', description: 'Maximum accuracy', speed: 'Slowest', file: 'libreyolo8x.pt' },
    ]
  },
  {
    id: 'libreyolo11',
    name: 'LibreYOLO11',
    description: 'Based on the YOLOv11 architecture from Ultralytics.',
    color: 'emerald',
    hfPrefix: 'yolov11',
    models: [
      { size: 'n', name: 'Nano', params: '2.6M', description: 'Edge & mobile deployment', speed: 'Fastest', file: 'libreyolo11n.pt' },
      { size: 's', name: 'Small', params: '9.4M', description: 'Balanced performance', speed: 'Fast', file: 'libreyolo11s.pt' },
      { size: 'm', name: 'Medium', params: '20.1M', description: 'Production workhorse', speed: 'Medium', file: 'libreyolo11m.pt' },
      { size: 'l', name: 'Large', params: '25.3M', description: 'High accuracy needs', speed: 'Slower', file: 'libreyolo11l.pt' },
      { size: 'x', name: 'X-Large', params: '56.9M', description: 'Maximum accuracy', speed: 'Slowest', file: 'libreyolo11x.pt' },
    ]
  }
]

const colorClasses = {
  libre: {
    bg: 'bg-libre-500/10',
    border: 'border-libre-500/20',
    text: 'text-libre-400',
    badge: 'bg-libre-500/20 text-libre-300'
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    badge: 'bg-cyan-500/20 text-cyan-300'
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    badge: 'bg-emerald-500/20 text-emerald-300'
  }
}

function ArchitectureCard({ architecture, index }) {
  const colors = colorClasses[architecture.color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="mb-16"
    >
      {/* Architecture Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <div className={`p-3 rounded-xl ${colors.bg} w-fit`}>
          <Layers className={`w-6 h-6 ${colors.text}`} />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{architecture.name}</h2>
          <p className="text-surface-400">{architecture.description}</p>
        </div>
      </div>

      {/* Models Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {architecture.models.map((model, modelIndex) => (
          <motion.div
            key={model.size}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 + modelIndex * 0.05 }}
            className={`card-hover bg-surface-900/50 border ${colors.border} rounded-xl p-5`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-white font-mono">
                  {model.file.replace('.pt', '')}
                </h3>
                <p className="text-surface-500 text-sm">{model.name}</p>
              </div>
            </div>

            <p className="text-surface-400 text-sm mb-4">{model.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-surface-500 flex items-center gap-1.5">
                  <HardDrive className="w-3.5 h-3.5" />
                  Params
                </span>
                <span className="text-white font-mono">{model.params}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-surface-500 flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5" />
                  Speed
                </span>
                <span className={colors.text}>{model.speed}</span>
              </div>
            </div>

            <a
              href={`https://huggingface.co/Libre-YOLO/${architecture.hfPrefix}${model.size}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium text-white transition-all"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}



export default function Models() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Model <span className="text-libre-400">Zoo</span>
          </h1>
          <p className="text-lg text-surface-400 max-w-2xl mx-auto mb-6">
            Pre-trained weights for LibreYOLOX, LibreYOLO8, and LibreYOLO11 architectures.
            All models trained on COCO dataset with 80 object classes.
          </p>
          <a
            href="https://huggingface.co/Libre-YOLO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-libre-400 hover:text-libre-300 transition-colors"
          >
            View all on HuggingFace
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto"
        >
          <div className="bg-surface-900/50 border border-white/5 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">15</p>
            <p className="text-surface-500 text-sm">Models</p>
          </div>
          <div className="bg-surface-900/50 border border-white/5 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-libre-400">3</p>
            <p className="text-surface-500 text-sm">Architectures</p>
          </div>
          <div className="bg-surface-900/50 border border-white/5 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">PyTorch</p>
            <p className="text-surface-500 text-sm">Framework</p>
          </div>
        </motion.div>

        {/* Architecture Cards */}
        {architectures.map((arch, index) => (
          <ArchitectureCard key={arch.id} architecture={arch} index={index} />
        ))}


        {/* Note about weights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-surface-500 text-sm"
        >
          <p>
            Note: Pre-trained weights may inherit licensing terms from their original training source.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
