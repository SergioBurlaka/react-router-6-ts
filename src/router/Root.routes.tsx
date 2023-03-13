import type { FC } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  NavLink,
} from "react-router-dom";

import { BooksNavigation } from "../modules/Books/BooksNavigation";
import { Book } from "../modules/Books/Book";

import { Users } from "../modules/Users/Users";
import { Location } from "../modules/Locations/Location";
import { HomeNavigation } from "../modules/Home/HomeNavigation";


export const RootRoutes: FC = () => {
  return (
    <Router>
      <HomeNavigation />
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="todos" element={<div>todos </div>} />

        <Route path="books">
          <Route index element={<BooksNavigation />} />
          <Route path=":bookId" element={<Book />} />
          <Route path="super-book" element={ <div>super book </div>} />
        </Route>

        <Route path="users/*" element={<Users />} />

        <Route
          path="locations"
          element={
            <div>
              <div>Locations </div>
              <h1>Locations navigation</h1>
              <nav>
                <ul>
                  <li>
                    <NavLink to=":345">locations 345</NavLink>
                  </li>
                  <li>
                    <NavLink to="super-location">super-location</NavLink>
                  </li>
                </ul>
              </nav>
              <Outlet />
            </div>
          }
        >
          <Route path=":locationsId" element={<Location />} />
          <Route path="super-location" element={<div>super location </div>} />
        </Route>

        <Route path="*" element={<div>Error page</div>} />
      </Routes>
    </Router>
  );
};
