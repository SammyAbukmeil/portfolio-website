import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  const wrapper = shallowMount(App)

  it('is a Vue Instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
