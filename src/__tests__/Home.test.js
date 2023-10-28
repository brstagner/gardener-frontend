import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../home/Home";

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
      <Home />
    </BrowserRouter>
  );
  // screen.debug()
});

// snapshot test
it("matches snapshot for no logged-in user", function () {
  const { asFragment } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(screen.getByText("Sign In")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

// snapshot test
it("matches snapshot for logged-in user", function () {
  const { asFragment } = render(
    <BrowserRouter>
      <Home currUser={user} />
    </BrowserRouter>
  );
  expect(screen.getByText("My Plants")).toBeInTheDocument();
  expect(screen.getByText("My Gardens")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
