'use client'

import Editor from '@components/Editor'
import Preview from '@components/Preview'
import { useState } from 'react'
import { TEMPLATES } from '@constants/templates'

export default function EditorLayout () {
  const [html, setHtml] = useState(TEMPLATES.button.html)
  const [tailwindConfig, setTailwindConfig] = useState(TEMPLATES.button.config)
  const handleChangeHtml = (currentHtml) => currentHtml && setHtml(currentHtml)
  const handleChangeTailwindConfig = (currentConfig) => currentConfig && setTailwindConfig(currentConfig)
  return (
    <div className="flex flex-col h-[calc(100vh-80px)] w-scree">
      <div className="grid h-full lg:grid-cols-[1fr,500px] gap-3 p-4">
        <div className="flex flex-col">
          <div className="p-2 mb-1 text-white bg-red-700 rounded-t">HTML</div>
          <Editor content={html} language="html" onChangeContent={handleChangeHtml} />
        </div>
        <div className="flex flex-col">
            <div className="p-2 mb-1 text-white bg-blue-500 rounded-t">Preview</div>
            <Preview html={html} tailwindConfig={tailwindConfig} />

            <div className="p-2 mb-1 mt-2 text-white bg-yellow-300 rounded-t">Tailwind Config</div>
            <Editor content={tailwindConfig} language="javascript" onChangeContent={handleChangeTailwindConfig} />
        </div>
      </div>
    </div>
  )
}
