import { mount } from '@vue/test-utils';
import Login from './Login.vue';

describe('Компонент Login.vue', () => {
  test('является компонентом Vue', () => {
    const wrapper = mount(Login)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('отображает корректную разметку', () => {
    expect(wrapper.html()).toContain('<input type="text">')
  })
})
