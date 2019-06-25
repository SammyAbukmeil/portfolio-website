import { shallowMount } from '@vue/test-utils'
import Skill from '@/components/Skill.vue'

describe('Skill.vue', () => {
  const wrapper = shallowMount(Skill)

  it('is a Vue Instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
