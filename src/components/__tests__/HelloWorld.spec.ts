import { mount } from "@vue/test-utils"
import HelloWorld from "src/components/HelloWorld.vue"
import { describe, expect, it } from "vitest"

describe("HelloWorld.vue", () => {

  it("should renders is page content is correct", () => {
    const message = "Happy People"
    const testMessage = "Happy People"
    const wrapper = mount(HelloWorld, {
      props: { message },
    })

    expect(wrapper.text()).toContain(testMessage)
  })

  it("should render if props value is correct", () => {
    const message = "Happy People"
    const testMessage = "Happy People"
    const wrapper = mount(HelloWorld, {
      props: { message },
    })

    expect(wrapper.vm.message).toBe(testMessage)
  })

  it('should increment counter when btnIncrement is pressed', () => {
    const wrapper = mount(HelloWorld)

    wrapper.findComponent({ ref: 'btnIncrement' }).trigger('click')

    expect(wrapper.vm.count).toBe(1)
  })
})