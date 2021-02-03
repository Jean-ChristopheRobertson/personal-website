import Header from "./Header";
import { shallow } from "enzyme";
import React from "react";
import { Navbar } from "react-bootstrap";

describe("Header testing suite", () => {
  it("Should be defined", () => {
    expect(Header).toBeDefined();
  });

  const wrapper = shallow(<Header />);
  it("Should contain the navbar", () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });
});
