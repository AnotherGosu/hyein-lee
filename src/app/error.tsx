"use client";

import { ButtonLink } from "@/components/common/ButtonLink";
import { Alert } from "@/components/icons/Alert";

export default function Error() {
  return (
    <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-4 px-4">
      <div className="flex items-center gap-2">
        <Alert className="size-7 text-primary-500" />
        <h1 className="flex text-2xl font-medium">Something went wrong</h1>
      </div>

      <p>Please visit home page and try again</p>

      <ButtonLink href="/">Home</ButtonLink>
    </div>
  );
}
