import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'
import MediaPlayer from './MediaPlayer'
import { getMediaType, getThumbnail, getYouTubeFallback } from '../utils/media'

export default function ProjectCard({ video, index, onOpenModal }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const mediaType = getMediaType(video)
  const thumbnail = getThumbnail(video)
  const isGif = mediaType === 'gif'

  const handleMediaClick = () => {
    if (isGif) {
      onOpenModal(video)
      return
    }
    setIsPlaying(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="glass-card h-full flex flex-col p-5 group">
        <div className="relative overflow-hidden rounded-2xl aspect-video mb-5 shadow-lg bg-black">
          <AnimatePresence mode="wait">
            {isPlaying && !isGif ? (
              <motion.div
                key="player"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20"
              >
                <MediaPlayer
                  video={video}
                  autoplay
                  muted={false}
                  controls
                />
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full backdrop-blur-md transition-colors z-30"
                  aria-label="Close preview"
                >
                  <X size={16} />
                </button>
              </motion.div>
            ) : (
              <div
                key="thumb"
                className="relative w-full h-full cursor-pointer"
                onClick={handleMediaClick}
              >
                {isGif ? (
                  <img
                    src={video.src}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : thumbnail ? (
                  <img
                    src={thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      if (mediaType === 'youtube') {
                        e.target.src = getYouTubeFallback(video)
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center">
                    <Play className="text-white/50" size={48} />
                  </div>
                )}

                {!isGif && (
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white transform scale-90 group-hover:scale-110 transition-all duration-300 shadow-xl">
                      <Play className="ml-1 fill-white" size={28} />
                    </div>
                  </div>
                )}

                {isGif && (
                  <div className="absolute top-3 right-3 bg-purple-500/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                    GIF
                  </div>
                )}

                {mediaType === 'video' && (
                  <div className="absolute top-3 right-3 bg-green-500/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                    Clip
                  </div>
                )}

                {video.duration && (
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-md">
                    {video.duration}
                  </div>
                )}
                {video.featured && (
                  <div className="absolute top-3 left-3 bg-blue-500/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                    Featured
                  </div>
                )}
              </div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex gap-2 mb-3 flex-wrap">
            {video.category.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="px-2 py-0.5 bg-white/5 text-gray-400 text-[10px] font-normal rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
            {video.title}
          </h3>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
            {video.description}
          </p>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-white">{video.client}</span>
              <span className="text-[10px] text-gray-500">
                {new Date(video.date).toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
            </div>
            <button
              onClick={() => onOpenModal(video)}
              className="h-8 px-5 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
