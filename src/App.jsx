import { NavLink } from "react-router-dom";

import Books from "./containers/Books";
import { navigationMenu } from "./utils/data";

import Logo from "./assets/favicon.svg";

export default function App() {
  return (
    <>
      <div className="p-6 shadow-md">
        <header className="mx-auto max-w-5xl sm:flex">
          <NavLink to="/" className="flex items-center gap-2">
            <img src={Logo} alt="BookSpot" className="w-10" />
            <h1 className="text-2xl font-semibold">BookSpot</h1>
          </NavLink>

          <nav className="mt-3 flex flex-1 items-center gap-6 sm:m-0 sm:justify-end">
            {navigationMenu?.map((navItem) => (
              <NavLink
                key={navItem}
                to="/"
                className="underline-offset-2 hover:underline focus:underline"
              >
                {navItem}
              </NavLink>
            ))}
          </nav>
        </header>
      </div>

      <div className="p-6">
        <Books />
      </div>
    </>
  );
}
