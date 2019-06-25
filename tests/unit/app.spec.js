import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  const wrapper = shallowMount(App)
  const button = wrapper.find('.dark-theme-button button') // Button to switch theme

  // Set the theme back to light theme before each test
  beforeEach(() => {
    wrapper.setData({ lightTheme: true })
  })

  it('is a Vue Instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('is initially set to light theme', () => {
    expect(wrapper.vm.lightTheme).toBeTruthy()
  })

  it('can be switched to dark theme', () => {
    button.trigger('click')
    expect(wrapper.vm.lightTheme).toBeFalsy()
  })

  it('can be switched back to light theme from dark theme', () => {  
    button.trigger('click')
    button.trigger('click')
    expect(wrapper.vm.lightTheme).toBeTruthy()
  })
})
