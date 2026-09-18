export function getMediaType(video) {
  if (video.mediaType) return video.mediaType
  if (video.youtubeId) return 'youtube'
  if (video.src?.match(/\.gif(\?|$)/i)) return 'gif'
  if (video.src?.match(/\.(mp4|webm|mov)(\?|$)/i)) return 'video'
  return 'youtube'
}

export function getThumbnail(video) {
  if (video.thumbnail) return video.thumbnail
  const type = getMediaType(video)
  if (type === 'youtube') {
    return `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
  }
  if (type === 'gif') return video.src
  return video.thumbnail || null
}

export function getYouTubeFallback(video) {
  return `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
}
