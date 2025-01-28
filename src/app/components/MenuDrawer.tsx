"use client";

import { useState } from "react";
import { Drawer as VaulDrawer } from "vaul";

import { cn } from "@/utils/cn";

import {
  DEV_LINK,
  EMAIl,
  NAVIGATION_LINKS,
  SOCIAL_LINKS,
} from "@/constants/common";

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

        <VaulDrawer.Content className="fixed top-0 bottom-0 left-0 z-50 flex outline-hidden">
          <div className="bg-background flex flex-col justify-between p-8">
            <div className="flex flex-col gap-10">
              <Header />
              <Navigation onClick={() => setIsOpen(false)} />
            </div>

            <div className="flex flex-col gap-4">
              <Socials />
              <Development />
              <Contact />
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
    <div className="flex gap-4">
      {SOCIAL_LINKS.map(({ icon, href }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          className={cn(
            "outline-hidden transition",
            "hover:fill-primary-500 focus:fill-primary-500 active:fill-primary-600",
          )}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

const Development = () => {
  return (
    <a
      href={DEV_LINK}
      target="_blank"
      className={cn(
        "text-sm underline outline-hidden transition",
        "hover:text-primary-500 focus:text-primary-500 active:text-primary-600",
      )}
    >
      Development by Maksim Dubinin
    </a>
  );
};

const Contact = () => {
  return (
    <a
      href={`mailto:${EMAIl}`}
      target="_blank"
      className={cn(
        "flex items-center gap-1 rounded-xs outline-hidden transition",
        "hover:text-primary-500 focus:text-primary-500 active:text-primary-600",
      )}
    >
      <Mail />
      {EMAIl}
    </a>
  );
};
