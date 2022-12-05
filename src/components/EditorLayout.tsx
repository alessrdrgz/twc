'use client'

import Editor from '@components/Editor'
import Preview from '@components/Preview'
import { useEffect, useState } from 'react'
import { TEMPLATES, TemplateTypes } from '@constants/templates'
import ComponentSelectorModal from '@components/ComponentSelectorModal'

export default function EditorLayout() {
  const [currentTemplate, setCurrentTemplate] = useState(TemplateTypes.BUTTON)
  const [html, setHtml] = useState(TEMPLATES[currentTemplate].html)
  const [tailwindConfig, setTailwindConfig] = useState(
    TEMPLATES[currentTemplate].config
  )
  const handleChangeHtml = (currentHtml: string) =>
    currentHtml && setHtml(currentHtml)
  const handleChangeTailwindConfig = (currentConfig: string) =>
    currentConfig && setTailwindConfig(currentConfig)

  useEffect(() => {
    setHtml(TEMPLATES[currentTemplate].html)
    setTailwindConfig(TEMPLATES[currentTemplate].config)
  }, [currentTemplate])

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="grid h-full lg:grid-cols-[1fr,500px] gap-3 p-4">
          <div className="flex flex-col">
            <div className="p-2 text-lg text-white rounded-t-lg bg-primary">
              HTML
            </div>
            <Editor
              content={html}
              language="html"
              onChangeContent={handleChangeHtml}
            />
            <div className="bg-[#1e1e1e] rounded-b-lg h-1 w-full p-1" />
          </div>
          <div className="flex flex-col">
            <div className="p-2 text-lg text-white rounded-t-lg bg-primary">
              Preview
            </div>
            <Preview html={html} tailwindConfig={tailwindConfig} />

            <div className="p-2 mt-2 text-lg text-white rounded-t-lg bg-primary">
              Tailwind Config
            </div>
            <Editor
              content={tailwindConfig}
              language="javascript"
              onChangeContent={handleChangeTailwindConfig}
            />
            <div className="bg-[#1e1e1e] rounded-b-lg w-full h-1 p-1" />
          </div>
        </div>
      </div>

      <ComponentSelectorModal
        value={currentTemplate}
        setValue={setCurrentTemplate}
      />
    </>
  )
}
