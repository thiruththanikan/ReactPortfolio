import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto py-6 flex items-center justify-between">
        <div className="text-sm">© {new Date().getFullYear()} Sivaneswaran Thiruththanikan</div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">Built with React • Tailwind • Framer Motion</div>
          <a href="https://github.com/thiruththanikan?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-700 hover:text-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.75 5.48.75 11.77c0 4.87 3.16 9 7.55 10.45.55.1.75-.24.75-.53v-1.86c-3.07.66-3.72-1.48-3.72-1.48-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.72.38-1.2.7-1.48-2.45-.28-5.02-1.22-5.02-5.42 0-1.2.43-2.18 1.13-2.95-.12-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12a10.4 10.4 0 012.75-.37c.93 0 1.86.12 2.75.37 2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.23 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.21-2.58 5.13-5.04 5.4.39.34.74 1 .74 2.03v3.01c0 .29.2.64.76.53 4.38-1.45 7.54-5.58 7.54-10.45C23.25 5.48 18.27.5 12 .5z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/thiruththanikan17" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-700 hover:text-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.5h5v15H0v-15zM8.5 8.5h4.8v2h.1c.7-1.2 2.4-2.5 4.9-2.5 5.3 0 6.3 3.5 6.3 8v7h-5v-6.2c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V23h-5v-14.5z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
