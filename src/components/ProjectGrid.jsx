import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import ProjectCard from './ProjectCard'
import MediaPlayer from './MediaPlayer'
import { getMediaType } from '../utils/media'

export default function ProjectGrid({ videos, categories }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedVideo, setSelectedVideo] = useState(null)

  const filtered =
    activeCategory === 'All'
      ? videos
      : videos.filter((v) => v.category.includes(activeCategory))

  const selectedType = selectedVideo ? getMediaType(selectedVideo) : null

  return (
    <section id="projects" className="relative py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-150" />
            <h2 className="relative text-4xl md:text-6xl font-bold text-white tracking-tight">
              My Video Projects
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            From smooth transitions to precise audio syncing and dynamic animations — I focus on
            making your content not just polished, but powerful.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className="ml-1.5 text-[10px] opacity-60">
                  ({videos.filter((v) => v.category.includes(cat)).length})
                </span>
              )}
              {cat === 'All' && (
                <span className="ml-1.5 text-[10px] opacity-60">({videos.length})</span>
              )}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((video, index) => (
              <ProjectCard
                key={video.id}
                video={video}
                index={index}
                onOpenModal={setSelectedVideo}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">No projects in this category yet.</p>
        )}
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-panel rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white pr-4">{selectedVideo.title}</h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-video mb-6 bg-black">
                <MediaPlayer
                  video={selectedVideo}
                  autoplay={selectedType !== 'youtube'}
                  muted={selectedType === 'gif'}
                  controls={selectedType !== 'gif'}
                />
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">{selectedVideo.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500">Client</span>
                  <p className="text-white font-medium">{selectedVideo.client}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500">Duration</span>
                  <p className="text-white font-medium">{selectedVideo.duration}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500">Date</span>
                  <p className="text-white font-medium">
                    {new Date(selectedVideo.date).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500">Software</span>
                  <p className="text-white font-medium">{selectedVideo.software.join(', ')}</p>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap mb-6">
                {selectedVideo.category.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {selectedType === 'youtube' && (
                <a
                  href={`https://youtu.be/${selectedVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  Watch on YouTube
                  <ExternalLink size={16} />
                </a>
              )}

              {selectedType === 'video' && selectedVideo.externalLink && (
                <a
                  href={selectedVideo.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  View Full Project
                  <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
