import dedent from 'dedent'

const defaultConfig = dedent`tailwind.config = {
                              darkMode: 'class',
                              theme: {
                                extend: {}
                              },
                              plugins: []
                            }`

export const TEMPLATES = {
  button: {
    html: dedent`<button class="group flex items-center overflow-hidden rounded-xl border-none bg-[royalblue] py-[0.7em] px-[1em] pl-[0.9em] text-[20px] text-white transition-all duration-200 active:scale-95">
                  <div class="group-hover:animate-fly ease-in-out">
                    <svg class="h-7 fill-white block origin-center transition-transform duration-300 ease-in-out group-hover:translate-x-8 group-hover:rotate-45 group-hover:scale-110" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowUpwardRoundedIcon">
                      <path d="M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41l-6.59-6.59a.9959.9959 0 0 0-1.41 0l-6.6 6.58c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z"></path>
                    </svg>
                  </div>
                  <span class="ml-[0.3em] block transition-all duration-300 ease-in-out group-hover:translate-x-24">Upload</span>
                </button>`,
    config: dedent`tailwind.config = {
                    darkMode: 'class',
                    theme: {
                      extend: {
                        keyframes: {
                          fly: {
                            '0%': { transform: 'translateY(0.1em)' },
                            '100%': { transform: 'translateY(-0.1em)' }
                          }
                        },
                        animation: {
                          fly: 'fly 600ms ease-in-out infinite alternate'
                        }
                      }
                    },
                    plugins: []
                  }`
  },
  input: {
    html: dedent`<div class="relative">
                  <input name="text" required class="peer focus:outline-none valid:outline-none focus:border-sky-500 valid:border-sky-500 rounded-2xl border-2 border-solid border-gray-50 bg-transparent p-4 text-base text-white transition-all duration-150 ease-in-out">
                  <label class="peer-focus:-translate-y-2/4 peer-focus:scale-90 peer-valid:bg-[#1e1e1e] peer-focus:bg-[#1e1e1e] peer-focus:py-0 peer-focus:px-1 peer-valid:py-0 peer-valid:px-2 peer-focus:text-sky-500 peer-valid:text-sky-500 peer-valid:-translate-y-2/4 peer-valid:scale-90 absolute left-4 text-white pointer-events-none translate-y-4 transition-all duration-150 ease-in-out">Input</label>
                </div>`,
    config: defaultConfig
  }
}
