import { login, logout } from "../../actions/auth";

test("Should genrate login action object correctly", () => {
  const uid = "123456789";
  expect(login(uid)).toEqual({
    type: "LOGIN",
    uid
  });
});

test("Should generate logout action object correclty", () => {
  expect(logout()).toEqual({
    type: "LOGOUT"
  });
});
