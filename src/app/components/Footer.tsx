import { MailIcon } from "lucide-react";

import { cn } from "@/utils/cn";

import { DEV_LINK, EMAIl, SOCIAL_LINKS } from "@/constants/common";

export const Footer = () => {
  return (
    <footer className="bg-primary-100">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 p-4 sm:flex-row">
        <div className="flex flex-col gap-2">
          <Title />
          <Development />
        </div>

        <div className="flex flex-col gap-4">
          <Socials />
          <Contact />
        </div>
      </div>
    </footer>
  );
};

const Title = () => {
  return <h1 className="text-2xl font-semibold">Hyein Lee</h1>;
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

const Socials = () => {
  return (
    <div className="flex gap-4 sm:justify-end">
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
