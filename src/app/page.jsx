'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Shield, Lock, Unlock, Scale, Layers, Eye, Zap, 
  CheckCircle2, XCircle, AlertTriangle, ArrowRight,
  Code2, Box, Cpu
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-libre-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-libre-500/10 border border-libre-500/20 text-libre-400 text-sm font-medium">
              <Unlock className="w-4 h-4" />
              100% MIT Licensed • No AGPL Dependencies
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">Object Detection.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-libre-400 via-libre-300 to-emerald-400 glow-text">
              Unrestricted.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl lg:text-2xl text-surface-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            The MIT-licensed training and inference engine for state-of-the-art YOLO models. 
            <span className="text-white"> Built for commercial applications</span>, free from AGPL restrictions.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/docs"
              className="btn-primary group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-libre-500 to-libre-600 rounded-xl text-white font-semibold text-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium text-lg transition-all"
            >
              <Scale className="w-5 h-5 text-emerald-400" />
              View License (MIT)
            </a>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            variants={fadeInUp}
            className="mt-20 relative"
          >
            <div className="relative max-w-4xl mx-auto">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-libre-500/50 via-emerald-500/50 to-libre-500/50 rounded-2xl blur-xl opacity-30" />
              
              {/* Code Preview */}
              <div className="relative code-block rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-surface-900/50 border-b border-white/5">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-4 text-surface-500 text-sm font-mono">quickstart.py</span>
                </div>
                <pre className="p-6 text-left overflow-x-auto">
                  <code className="font-mono text-sm lg:text-base">
                    <span className="token-keyword">from</span> <span className="text-libre-300">libreyolo</span> <span className="token-keyword">import</span> <span className="text-emerald-400">LIBREYOLO</span>{'\n\n'}
                    <span className="token-comment"># Load any YOLO architecture</span>{'\n'}
                    <span className="text-surface-300">model</span> <span className="text-libre-400">=</span> <span className="text-emerald-400">LIBREYOLO</span>(<span className="token-string">"yolov11.pt"</span>){'\n\n'}
                    <span className="token-comment"># Run inference</span>{'\n'}
                    <span className="text-surface-300">results</span> <span className="text-libre-400">=</span> <span className="text-surface-300">model</span>.<span className="token-function">predict</span>(<span className="token-string">"image.jpg"</span>){'\n\n'}
                    <span className="token-comment"># That's it. No boilerplate. Just Python.</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-surface-600 flex justify-center pt-2">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-libre-400"
          />
        </div>
      </motion.div>
    </section>
  )
}

function LicensingSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/50 to-surface-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The Licensing Landscape
          </h2>
          <p className="text-lg text-surface-400 max-w-2xl mx-auto">
            Not all open-source is equal. Understand the difference before you ship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* AGPL Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative bg-surface-900/80 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-500/10">
                  <Lock className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Typical YOLO Implementations</h3>
                  <p className="text-surface-500 text-sm">The Standard Approach</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="badge-danger px-2 py-0.5 rounded text-xs font-semibold mt-0.5">AGPL-3.0</span>
                  <span className="text-surface-300">Copyleft License</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-surface-300">Viral clause: Your code may need to be open-sourced</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-surface-300">Proprietary use requires expensive licensing</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-surface-300">Legal review recommended before deployment</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* MIT Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-libre-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative bg-surface-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 animated-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <Unlock className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">The Libre Engine</h3>
                  <p className="text-surface-500 text-sm">Libre-YOLO</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="badge-mit px-2 py-0.5 rounded text-xs font-semibold mt-0.5">MIT</span>
                  <span className="text-surface-300">Permissive License</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-surface-300">No copyleft: Your code stays private</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-surface-300">Commercial use: Fully permitted, no fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-surface-300">Safe to merge into any codebase</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: Code2,
      title: 'Clean Room Implementation',
      description: 'Zero lineage from restrictive repositories. A fresh codebase built from research papers, not copied code.',
      color: 'libre'
    },
    {
      icon: Layers,
      title: 'Unified Architecture',
      description: 'Run v8, v11, and future architectures with a single, stable API. One engine, all models.',
      color: 'emerald'
    },
    {
      icon: Eye,
      title: 'Deep Inspection',
      description: "Debug your model's 'brain' with native feature map visualization. See what the network sees.",
      color: 'cyan'
    },
    {
      icon: Zap,
      title: 'Production Ready',
      description: 'Optimized inference paths, ONNX export, and deployment guides for edge and cloud.',
      color: 'amber'
    },
    {
      icon: Box,
      title: 'Native Python',
      description: 'No complex dependencies or build steps. pip install and go. Works where you work.',
      color: 'violet'
    },
    {
      icon: Cpu,
      title: 'Hardware Agnostic',
      description: 'CPU, CUDA, MPS (Apple Silicon), and more. Train and deploy anywhere.',
      color: 'rose'
    }
  ]

  const colorClasses = {
    libre: { bg: 'bg-libre-500/10', text: 'text-libre-400', border: 'border-libre-500/20' },
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
    cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
    amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
    violet: { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/20' },
    rose: { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/20' }
  }

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-libre-400 to-emerald-400">Real Products</span>
          </h2>
          <p className="text-lg text-surface-400 max-w-2xl mx-auto">
            Technical excellence meets legal clarity. Everything you need to ship with confidence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card-hover bg-surface-900/50 backdrop-blur-sm border ${colors.border} rounded-2xl p-6`}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-surface-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 to-surface-900/50" />
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
            <CheckCircle2 className="w-4 h-4" />
            Ready for Production
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Building <span className="text-libre-400">Today</span>
          </h2>
          
          <p className="text-lg text-surface-400 mb-10 max-w-2xl mx-auto">
            No licensing negotiations. No legal reviews. Just install and ship.
          </p>

          <div className="code-block rounded-xl max-w-md mx-auto mb-10">
            <pre className="p-4 text-left">
              <code className="font-mono text-sm">
                <span className="text-surface-500">$</span> <span className="text-emerald-400">pip install</span> <span className="text-libre-300">libreyolo</span>
              </code>
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs"
              className="btn-primary flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-libre-500 to-libre-600 rounded-xl text-white font-semibold"
            >
              Read the Docs
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/commercial"
              className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition-all"
            >
              <Scale className="w-5 h-5 text-emerald-400" />
              Commercial Guide
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <LicensingSection />
      <FeaturesSection />
      <CTASection />
    </>
  )
}

