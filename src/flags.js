/**
 * Feature flag manager
 *
 * Small utility to manage accessing feature flags.
 * @class
 */
export default class FeatureFlags {
  constructor(flags = {}) {
    this.flags = flags
  }

  hasFlag(name) {
    if (this.flags.hasOwnProperty(name)) {
      return true
    }

    return false
  }

  getFlag(name) {
    if (this.hasFlag(name)) {
      return this.flags[name]
    }

    return null
  }
}
