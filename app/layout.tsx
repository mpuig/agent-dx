import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agent DX — Developer Experience for AI Agents',
  description:
    'Human DX optimizes for discoverability. Agent DX optimizes for predictability. A practical guide to building tools that AI agents can actually use.',
  openGraph: {
    title: 'Agent DX — Developer Experience for AI Agents',
    description:
      'Human DX optimizes for discoverability. Agent DX optimizes for predictability. A practical guide to building tools that AI agents can actually use.',
    type: 'website',
    url: 'https://agent-dx.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav>
          <div className="nav-inner">
            <a href="/" className="logo">
              agent<span className="accent">DX</span>
            </a>
            <div className="nav-links">
              <a href="#principles">Principles</a>
              <a href="#start">Get started</a>
              <a
                href="https://github.com/mpuig/agent-dx"
                className="nav-github"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </nav>
        <main id="main">{children}</main>
        <footer>
          <div className="footer-inner">
            <div className="footer-left">
              <span className="logo">
                agent<span className="accent">DX</span>
              </span>{' '}
              &middot; Developer experience for AI agents
            </div>
            <div className="footer-links">
              <a href="https://github.com/mpuig/agent-dx">GitHub</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
