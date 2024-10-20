import { NAVIGATION_LINKS } from "@/constants/common";

import { MenuDrawer } from "./MenuDrawer";
import { NavigationLink } from "./NavigationLink";

export const Header = () => {
  return (
    <header>
      <div className="mx-auto max-w-7xl p-4">
        <Navigation />
        <MenuDrawer />
      </div>
    </header>
  );
};

const Navigation = () => {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center justify-center gap-8">
        {NAVIGATION_LINKS.map((link) => (
          <li key={link.href}>
            <NavigationLink {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
