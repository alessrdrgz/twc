'use client'

import MonacoEditor, { type OnMount } from '@monaco-editor/react'
import Spinner from '@components/Spinner'

interface EditorProps {
  content: string
  language: string
  onChangeContent: (value: string) => void
}

export default function Editor({
  content,
  language,
  onChangeContent
}: EditorProps) {
  const handleEditorMount: OnMount = async (editor, monaco) => {
    const { tailwindcssData, configureMonacoTailwindcss } = await import(
      'monaco-tailwindcss'
    )

    monaco.languages.css.cssDefaults.setOptions({
      data: {
        dataProviders: {
          tailwindcssData
        }
      }
    })

    configureMonacoTailwindcss(monaco)

    const resizeObserver = new ResizeObserver(() => {
      editor.layout()
    })

    resizeObserver.observe(window.document.body)
  }

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <MonacoEditor
          defaultLanguage={language}
          value={content}
          theme="vs-dark"
          options={{
            scrollBeyondLastLine: false,
            minimap: {
              enabled: false
            }
          }}
          onChange={onChangeContent}
          onMount={handleEditorMount}
          loading={
            <div className="h-full w-full bg-[#1e1e1e] flex items-center justify-center">
              <Spinner />
            </div>
          }
        />
      </div>
    </div>
  )
}

if (typeof window !== 'undefined') {
  window.MonacoEnvironment = {
    getWorker(_moduleId, label) {
      switch (label) {
        case 'editorWorkerService':
          return new Worker(
            new URL(
              'monaco-editor/esm/vs/editor/editor.worker',
              import.meta.url
            )
          )
        case 'css':
        case 'less':
        case 'scss':
          return new Worker(
            new URL(
              'monaco-editor/esm/vs/language/css/css.worker',
              import.meta.url
            )
          )
        case 'handlebars':
        case 'html':
        case 'razor':
          return new Worker(
            new URL(
              'monaco-editor/esm/vs/language/html/html.worker',
              import.meta.url
            )
          )
        case 'json':
          return new Worker(
            new URL(
              'monaco-editor/esm/vs/language/json/json.worker',
              import.meta.url
            )
          )
        case 'javascript':
        case 'typescript':
          return new Worker(
            new URL(
              'monaco-editor/esm/vs/language/typescript/ts.worker',
              import.meta.url
            )
          )
        case 'tailwindcss':
          return new Worker(
            new URL('monaco-tailwindcss/tailwindcss.worker', import.meta.url)
          )
        default:
          throw new Error(`Unknown label ${label}`)
      }
    }
  }
}
