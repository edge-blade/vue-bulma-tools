import * as components from './components'

function VueBulmaTools (Vue) {
  Object.values(components).forEach((component) => component.install(Vue))
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueBulmaTools)
}

export default VueBulmaTools
