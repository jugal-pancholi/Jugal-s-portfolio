import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero({ profile }) {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-blue-900/15 rounded-[100%] blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-4 md:px-8 max-w-6xl mx-auto w-full">
        {profile.availableForHire && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-8 md:mb-10"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs sm:text-sm font-medium text-blue-300 tracking-[0.2em] shadow-[0_0_30px_rgba(59,130,246,0.15)] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 animate-pulse" />
              Available for Hire
            </div>
          </motion.div>
        )}

        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9] flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.1 }}
            className="block bg-gradient-to-b from-white via-white/90 to-white/40 bg-clip-text text-transparent pb-2"
          >
            CINEMATIC
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 pb-4 drop-shadow-[0_0_30px_rgba(59,130,246,0.25)]"
          >
            EDITOR
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12 sm:mb-16"
        >
          {profile.tagline.split('cinematic magic').map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <span className="text-white font-medium drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                  cinematic magic
                </span>
              </span>
            ) : (
              part
            ),
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={scrollToProjects}
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold text-black bg-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            View Work
          </button>
          <button
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-4 text-base sm:text-lg font-medium text-white bg-white/5 border border-white/10 rounded-full backdrop-blur-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/20"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-3 text-white/40 hover:text-white transition-colors duration-500"
        >
          <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-medium">
            Scroll
          </span>
          <ArrowDown className="animate-bounce" size={18} strokeWidth={1.5} />
        </button>
      </motion.div>
    </section>
  )
}
