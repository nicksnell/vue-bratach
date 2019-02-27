import Vue from 'vue'
import VueBratach from '../src/index'
import FeatureFlags from '../src/flags'

test('correctly stores flags', () => {
  const flags = {
    myFlag: 123,
  }
  const featureFlags = new FeatureFlags(flags)
  expect(featureFlags.flags).toEqual(flags)
})

test('correctly detects flag is not present', () => {
  const featureFlags = new FeatureFlags()
  expect(featureFlags.hasFlag('test')).toEqual(false)
})

test('correctly detects flag is present', () => {
  const featureFlags = new FeatureFlags({test: 123})
  expect(featureFlags.hasFlag('test')).toEqual(true)
})

test('correctly gets a flag', () => {
  const test = 123
  const featureFlags = new FeatureFlags({test})
  expect(featureFlags.getFlag('test')).toEqual(test)
})

test('correctly gets a non-existing flag safely', () => {
  const featureFlags = new FeatureFlags({})
  expect(featureFlags.getFlag('test')).toBeNull()
})

test('adds a $featureFlags method to Vue', () => {
  const testVue = Vue.extend()
  expect(testVue.prototype.$featureFlags).toBeUndefined()
  testVue.use(VueBratach)
  expect(typeof testVue.prototype.$featureFlags).toBe('object')
})

test('can pass flags via plugin options', () => {
  const flags = {test: 123}
  const testVue = Vue.extend()
  testVue.use(VueBratach, { flags })
  const inst = new testVue()
  expect(inst.$featureFlags.flags).toEqual(flags)
})
