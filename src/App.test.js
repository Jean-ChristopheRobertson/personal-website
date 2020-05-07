import React from "react"
import App from "./App"
import { shallow } from "enzyme"

describe("Testing suite for App.js", () => {
  it("Should render my name", () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find(".name")).toBeDefined()
  })
})
