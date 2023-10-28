import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import Profile from "./user/Profile";
import Plants from "./plants/Plants";
import EditPlant from "./plants/EditPlant";
import NewPlant from "./plants/NewPlant";
import Gardens from "./gardens/Gardens";
import GardenBuilder from "./gardens/build/GardenBuilder";
import Display from "./gardens/display/Display";
import About from "./About";
import NavBar from "./navigation/NavBar";

function FrontRoutes({ currUser, login, logout, register, editProfile }) {
  return (
    <BrowserRouter>
      <NavBar currUser={currUser} logout={logout} />
      <main>
        {currUser ? (
          <Routes>
            <Route
              path="*"
              element={
                <Home login={login} register={register} currUser={currUser} />
              }
            />
            <Route
              path="/"
              element={
                <Home login={login} register={register} currUser={currUser} />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile currUser={currUser} editProfile={editProfile} />
              }
            />
            <Route path="/plants" element={<Plants currUser={currUser} />} />
            <Route
              path="/plants/new"
              element={<NewPlant currUser={currUser} />}
            />
            <Route
              path="/plants/:plant_id"
              element={<EditPlant currUser={currUser} />}
            />
            <Route path="/gardens" element={<Gardens currUser={currUser} />} />
            <Route
              path="/gardens/new"
              element={<GardenBuilder currUser={currUser} method={"post"} />}
            />
            <Route
              path="/gardens/edit/:garden_id"
              element={<GardenBuilder currUser={currUser} method={"patch"} />}
            />
            <Route
              path="/gardens/:garden_id"
              element={<Display currUser={currUser} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="*"
              element={<Home login={login} register={register} />}
            />
            <Route
              path="/"
              element={<Home login={login} register={register} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        )}
      </main>
    </BrowserRouter>
  );
}

export default FrontRoutes;
