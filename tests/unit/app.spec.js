import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  const wrapper = shallowMount(App)

  it('is a Vue Instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('is initially set to light theme', () => {
    expect(wrapper.vm.lightTheme).toBeTruthy()
  })

  it('can be switched to dark theme', () => {
    const button = wrapper.find('.dark-theme-button button')
    button.trigger('click')
    expect(wrapper.vm.lightTheme).toBeFalsy()
  })
})
