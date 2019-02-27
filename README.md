# Vue-Bratach

> Deadly simple feature flags for vue.

Usage:

```javascript
import Vue from 'vue'

Vue.use(VueBratach, {flags: {
  myFeature: true,
  myOtherFeature, false
}})
```

Then inside components you can:

```javascript
if (this.$featureFlags.getFlag('myFeature')) {
  // Turn my feature on....
}
```

"Bratach" - is the Gaeilge word for "Flag"
