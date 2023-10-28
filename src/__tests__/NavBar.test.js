import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../navigation/NavBar";

const user = {
  username: "user",
  userId: "1",
  isAdmin: "false",
  token: "user-token",
};

// smoke test
it("renders without crashing", function () {
  render(
    <BrowserRouter>
      <NavBar currUser={user} />
    </BrowserRouter>
  );
  // screen.debug()
});

// snapshot test as non-admin user
it("matches snapshot", function () {
  const { asFragment } = render(
    <BrowserRouter>
      <NavBar currUser={user} />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
