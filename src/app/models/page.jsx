'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Download, Shield, AlertTriangle, 
  CheckCircle2, Info, Scale
} from 'lucide-react'

const models = [
  {
    name: 'YOLOv11n',
    variant: 'Nano',
    params: '2.6M',
    mapVal: '39.5',
    speed: '1.5ms',
    status: 'mit',
    description: 'Ultra-lightweight for edge deployment',
    download: '#',
  },
  {
    name: 'YOLOv11s',
    variant: 'Small',
    params: '9.4M',
    mapVal: '47.0',
    speed: '2.5ms',
    status: 'mit',
    description: 'Balanced performance and accuracy',
    download: '#',
  },
  {
    name: 'YOLOv11m',
    variant: 'Medium',
    params: '20.1M',
    mapVal: '51.5',
    speed: '4.7ms',
    status: 'mit',
    description: 'Production workhorse',
    download: '#',
  },
  {
    name: 'YOLOv11l',
    variant: 'Large',
    params: '25.3M',
    mapVal: '53.4',
    speed: '6.2ms',
    status: 'converted',
    description: 'High accuracy applications',
    download: '#',
  },
  {
    name: 'YOLOv11x',
    variant: 'Extra Large',
    params: '56.9M',
    mapVal: '54.7',
    speed: '11.3ms',
    status: 'converted',
    description: 'Maximum accuracy',
    download: '#',
  },
  {
    name: 'YOLOv8n',
    variant: 'Nano',
    params: '3.2M',
    mapVal: '37.3',
    speed: '1.8ms',
    status: 'mit',
    description: 'v8 architecture, edge-optimized',
    download: '#',
  },
  {
    name: 'YOLOv8s',
    variant: 'Small',
    params: '11.2M',
    mapVal: '44.9',
    speed: '3.1ms',
    status: 'mit',
    description: 'v8 architecture, balanced',
    download: '#',
  },
  {
    name: 'YOLOv8m',
    variant: 'Medium',
    params: '25.9M',
    mapVal: '50.2',
    speed: '5.8ms',
    status: 'converted',
    description: 'v8 architecture, high performance',
    download: '#',
  },
]

function StatusBadge({ status }) {
  if (status === 'mit') {
    return (
      <span className="badge-mit px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1.5">
        <Shield className="w-3 h-3" />
        MIT Weights
      </span>
    )
  }
  return (
    <span className="badge-warning px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1.5">
      <AlertTriangle className="w-3 h-3" />
      Converted Weights
    </span>
  )
}

function LicenseInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-surface-900/50 border border-libre-500/20 rounded-2xl p-6 mb-12"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-libre-500/10">
          <Info className="w-6 h-6 text-libre-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Understanding Weight Licenses</h3>
          <p className="text-surface-400 mb-4">
            The Libre-YOLO <strong className="text-white">engine</strong> is always MIT-licensed. 
            However, pre-trained weights may have different origins:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="badge-mit px-2 py-0.5 rounded text-xs font-semibold mt-1">MIT Weights</span>
              <p className="text-sm text-surface-400">
                Trained from scratch using MIT-licensed code and public datasets. 
                <span className="text-emerald-400"> Safe for any commercial use.</span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="badge-warning px-2 py-0.5 rounded text-xs font-semibold mt-1">Converted</span>
              <p className="text-sm text-surface-400">
                Converted from other implementations. Original training may involve AGPL code. 
                <span className="text-yellow-400"> Review your use case.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ModelCard({ model, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="card-hover bg-surface-900/50 border border-white/5 rounded-xl overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{model.name}</h3>
            <p className="text-surface-500 text-sm">{model.variant}</p>
          </div>
          <StatusBadge status={model.status} />
        </div>
        
        <p className="text-surface-400 text-sm mb-4">{model.description}</p>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-surface-500 text-xs mb-1">Params</p>
            <p className="text-white font-mono text-sm">{model.params}</p>
          </div>
          <div>
            <p className="text-surface-500 text-xs mb-1">mAP@50-95</p>
            <p className="text-libre-400 font-mono text-sm">{model.mapVal}</p>
          </div>
          <div>
            <p className="text-surface-500 text-xs mb-1">Speed (T4)</p>
            <p className="text-emerald-400 font-mono text-sm">{model.speed}</p>
          </div>
        </div>

        <a
          href={model.download}
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium text-white transition-all"
        >
          <Download className="w-4 h-4" />
          Download
        </a>
      </div>
    </motion.div>
  )
}

export default function Models() {
  const mitModels = models.filter(m => m.status === 'mit')
  const convertedModels = models.filter(m => m.status === 'converted')

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
          <p className="text-lg text-surface-400 max-w-2xl mx-auto">
            Pre-trained weights for various YOLO architectures. 
            Check the license badge before integrating into commercial products.
          </p>
        </motion.div>

        {/* License Info */}
        <LicenseInfoCard />

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          <div className="bg-surface-900/50 border border-white/5 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">{models.length}</p>
            <p className="text-surface-500 text-sm">Total Models</p>
          </div>
          <div className="bg-surface-900/50 border border-emerald-500/20 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-emerald-400">{mitModels.length}</p>
            <p className="text-surface-500 text-sm">MIT Weights</p>
          </div>
          <div className="bg-surface-900/50 border border-white/5 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">2</p>
            <p className="text-surface-500 text-sm">Architectures</p>
          </div>
          <div className="bg-surface-900/50 border border-white/5 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-libre-400">COCO</p>
            <p className="text-surface-500 text-sm">Dataset</p>
          </div>
        </motion.div>

        {/* MIT Models Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <Shield className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-semibold text-white">MIT Licensed Weights</h2>
            <span className="badge-mit px-2 py-0.5 rounded text-xs font-semibold">COMMERCIAL SAFE</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {mitModels.map((model, index) => (
              <ModelCard key={model.name} model={model} index={index} />
            ))}
          </div>
        </div>

        {/* Converted Models Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-yellow-500/10">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Converted Weights</h2>
            <span className="badge-warning px-2 py-0.5 rounded text-xs font-semibold">REVIEW REQUIRED</span>
          </div>
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 mb-6">
            <p className="text-surface-400 text-sm">
              <strong className="text-yellow-400">Note:</strong> These weights were converted from other implementations.
              While the Libre-YOLO engine is MIT-licensed, the original training pipeline may have involved AGPL-licensed code.
              Consult your legal team for commercial deployments using these weights.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {convertedModels.map((model, index) => (
              <ModelCard key={model.name} model={model} index={mitModels.length + index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-surface-400 mb-4">
            Need help choosing the right model for your use case?
          </p>
          <Link
            href="/commercial"
            className="inline-flex items-center gap-2 px-6 py-3 bg-libre-500/10 hover:bg-libre-500/20 border border-libre-500/30 rounded-xl text-libre-400 font-medium transition-all"
          >
            <Scale className="w-4 h-4" />
            Read the Commercial Guide
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

