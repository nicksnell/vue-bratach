import FeatureFlags from './flags'

const VueGne = {
  install(Vue, options) {
    if (!options) options = {}
    const flags = options.flags
    Vue.prototype.$featureFlags = new FeatureFlags(flags)
  }
}

export default VueGne
