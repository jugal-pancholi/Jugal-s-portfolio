import { Film, Heart } from 'lucide-react'

export default function Footer({ profile }) {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-bold">
            <Film className="text-blue-400" size={20} />
            <span>{profile.name}</span>
          </div>

          <div className="flex gap-4">
            {Object.entries(profile.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white capitalize text-sm transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>

          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {year} {profile.name}. Made with <Heart size={14} className="text-red-400" /> &
            React
          </p>
        </div>
      </div>
    </footer>
  )
}
