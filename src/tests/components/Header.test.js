import React from "react";
import Header from "../../components/Header";
//import ReactShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

test("Should render header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  // expect(wrapper.find("h1").length).toBe(1);
  /*  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
  console.log(renderer.getRenderOutput()); */
});
