import { NAVIGATION } from "@/constants/common";

import { NavigationLink } from "./NavigationLink";

export const Header = () => {
  return (
    <header className="flex items-center justify-center py-4">
      <nav>
        <ul className="flex gap-4">
          {NAVIGATION.map((link) => (
            <li key={link.href}>
              <NavigationLink {...link} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
