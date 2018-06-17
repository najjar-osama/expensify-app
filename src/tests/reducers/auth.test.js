import authReduceer from "../../reducers/auth";

test("Should set uid for login", () => {
  const loginAction = { type: "LOGIN", uid: "123456789" };
  expect(authReduceer(undefined, loginAction)).toEqual({
    uid: loginAction.uid
  });
});

test("Should clear uid for logout", () => {
  const logoutAction = { type: "LOGOUT" };
  expect(authReduceer({ uid: "123456789" }, logoutAction)).toEqual({});
});
