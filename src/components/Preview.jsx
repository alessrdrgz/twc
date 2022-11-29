import { useRef, useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Preview ({ html, tailwindConfig }) {
  const [darkMode, setDarkMode] = useState(true)
  const iFrameRef = useRef(null)

  const toggleDark = (value) => {
    setDarkMode(value)
    iFrameRef.current?.contentWindow?.postMessage(value, '*')
  }

  return (
    <div
      className={`flex items-center justify-center ${
        darkMode ? 'bg-[#1e1e1e]' : 'bg-slate-100'
      } rounded-b-lg h-1/2 relative transition-colors duration-200`}
    >
      <div className="absolute flex flex-col items-center justify-center gap-2 top-2 right-2">
        <span className={`${darkMode ? 'text-white' : 'text-black'}`}>{darkMode ? 'Dark' : 'Light'}</span>
        <Switch
          checked={darkMode}
          onChange={toggleDark}
          className={`${darkMode ? 'bg-blue-600' : 'bg-gray-200'} inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Dark Mode</span>
          <span
            className={`${
              darkMode ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>

      <iframe
        title="Preview"
        className="flex items-center justify-center w-full h-full"
        ref={iFrameRef}
        srcDoc={`<script src="https://cdn.tailwindcss.com"></script>
                <script>
                  ${tailwindConfig}

                  window.onmessage = (e) => document.body.classList.toggle('dark', e.data)
                  
                </script>
                <body class="${darkMode ? 'dark' : ''} h-screen flex justify-center items-center">
                  ${html}
                </body>
        `}
      />
    </div>
  )
}
