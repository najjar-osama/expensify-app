import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

let wrapper, startLogin;
beforeAll(() => {
  wrapper = shallow(<LoginPage startLogin={startLogin} />);
  startLogin = jest.fn();
});

test("Should render Login page correctly", () => {
  wrapper = shallow(<LoginPage startLogin={startLogin} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should call start login on button click", () => {
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});
