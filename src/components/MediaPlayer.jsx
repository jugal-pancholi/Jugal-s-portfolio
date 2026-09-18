import { getMediaType } from '../utils/media'

export default function MediaPlayer({ video, autoplay = false, muted = true, controls = true, className = '' }) {
  const type = getMediaType(video)

  if (type === 'youtube') {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=${autoplay ? 1 : 0}&mute=${muted ? 1 : 0}&controls=${controls ? 1 : 0}&rel=0&modestbranding=1`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={`w-full h-full border-0 ${className}`}
      />
    )
  }

  if (type === 'gif') {
    return (
      <img
        src={video.src}
        alt={video.title}
        className={`w-full h-full object-cover ${className}`}
      />
    )
  }

  if (type === 'video') {
    return (
      <video
        src={video.src}
        poster={video.thumbnail || undefined}
        autoPlay={autoplay}
        muted={muted}
        controls={controls}
        loop={video.loop ?? false}
        playsInline
        className={`w-full h-full object-cover bg-black ${className}`}
      >
        Your browser does not support video playback.
      </video>
    )
  }

  return null
}
