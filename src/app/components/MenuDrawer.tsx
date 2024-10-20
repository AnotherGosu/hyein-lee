"use client";

import { useState } from "react";
import { Drawer as VaulDrawer } from "vaul";

import { NAVIGATION_LINKS, SOCIAL_LINKS } from "@/constants/common";

import { Button } from "@/components/common/Button";
import { Mail } from "@/components/icons/Mail";
import { Menu } from "@/components/icons/Menu";

import { NavigationLink } from "./NavigationLink";

export const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VaulDrawer.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      direction="left"
      handleOnly
    >
      <VaulDrawer.Trigger asChild>
        <Button className="ml-auto rounded-full px-2.5 sm:hidden">
          <Menu />
        </Button>
      </VaulDrawer.Trigger>

      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className="fixed inset-0 z-40 bg-black/40" />

        <VaulDrawer.Content className="fixed bottom-0 left-0 top-0 z-50 flex outline-none">
          <div className="flex flex-col justify-between bg-background p-8">
            <div className="flex flex-col gap-10">
              <Header />
              <Navigation onClick={() => setIsOpen(false)} />
            </div>

            <div className="flex flex-col gap-4">
              <Socials />
              <Contacts />
            </div>
          </div>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
};

const Header = () => {
  return (
    <div>
      <VaulDrawer.Title className="mb-2 text-2xl font-semibold">
        Hyein Lee
      </VaulDrawer.Title>

      <VaulDrawer.Description>Navigation & Contacts</VaulDrawer.Description>
    </div>
  );
};

const Navigation = ({ onClick }: { onClick: () => void }) => {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        {NAVIGATION_LINKS.map((link) => (
          <li key={link.href}>
            <NavigationLink
              onClick={onClick}
              {...link}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Socials = () => {
  return (
    <div className="flex justify-between">
      {SOCIAL_LINKS.map(({ icon, href }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          className="focus-ring rounded-sm *:size-6 hover:fill-primary-300"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

const Contacts = () => {
  return (
    <>
      <a
        href="mailto:hyein2399@gmail.com"
        target="_blank"
        className="focus-ring flex items-center gap-1 rounded-sm"
      >
        <Mail />
        hyein2399@gmail.com
      </a>

      <a
        href="https://www.anothergosu.com/"
        target="_blank"
        className="focus-ring rounded-sm text-xs underline"
      >
        Development by Maksim Dubinin
      </a>
    </>
  );
};
