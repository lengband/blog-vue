import 'highlight.js/styles/atom-one-dark.css'
const customCache = new Set()

export const addScript = scriptUrl => {
  const script = document.createElement('script')
  script.setAttribute('src', scriptUrl)
  script.setAttribute('data-namespace', scriptUrl)
  if (!customCache.has(scriptUrl)) {
    customCache.add(scriptUrl)
  }
  document.body.appendChild(script)
}
