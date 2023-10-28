import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewPlant from '../plants/NewPlant';

const user = { username: "user", userId: "1", isAdmin: "false", token: "user-token" };

// smoke test
it("renders without crashing", function () {
    render(
        <BrowserRouter>
            <NewPlant currUser={user} />
        </BrowserRouter>);
    // screen.debug()
});

// snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(
        <BrowserRouter >
            <NewPlant currUser={user} />
        </BrowserRouter >);
    expect(asFragment()).toMatchSnapshot();
});