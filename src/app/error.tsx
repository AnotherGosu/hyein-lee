"use client";

import { CloudOffIcon } from "lucide-react";

import { ButtonLink } from "@/components/common/ButtonLink";

export default function Error() {
  return (
    <div className="absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-6 px-4">
      <div className="flex items-center gap-2">
        <CloudOffIcon className="text-primary-500 size-7" />
        <h1 className="flex text-2xl font-medium">Something went wrong</h1>
      </div>

      <p>Please visit home page and try again</p>

      <ButtonLink href="/">Home</ButtonLink>
    </div>
  );
}
