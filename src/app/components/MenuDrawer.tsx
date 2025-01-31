"use client";

import { MailIcon, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Drawer } from "vaul";

import { cn } from "@/utils/cn";

import {
  DEV_LINK,
  EMAIl,
  NAVIGATION_LINKS,
  SOCIAL_LINKS,
} from "@/constants/common";

import { Button } from "@/components/common/Button";

import { NavigationLink } from "./NavigationLink";

export const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      direction="left"
      handleOnly
    >
      <Drawer.Trigger asChild>
        <Button className="ml-auto rounded-full px-2.5 sm:hidden">
          <MenuIcon />
        </Button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-black/40" />

        <Drawer.Content className="fixed top-0 bottom-0 left-0 z-50 flex outline-hidden">
          <div className="bg-background flex flex-col justify-between p-6">
            <div className="flex flex-col gap-10">
              <Header onClose={onClose} />
              <Navigation onClick={onClose} />
            </div>

            <div className="flex flex-col gap-4">
              <Socials />
              <Development />
              <Contact />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

const Header = ({ onClose }: { onClose: () => void }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Drawer.Title className="mb-2 text-2xl font-semibold">
          Hyein Lee
        </Drawer.Title>

        <Button
          onClick={onClose}
          className="size-6 p-0"
        >
          <XIcon />
        </Button>
      </div>

      <Drawer.Description>Navigation & Contacts</Drawer.Description>
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
      <MailIcon className="size-4" />
      {EMAIl}
    </a>
  );
};
