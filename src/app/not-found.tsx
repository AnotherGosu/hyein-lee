import { ButtonLink } from "@/components/common/ButtonLink";

export default function NotFound() {
  return (
    <div className="flex h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-medium">
        <span className="text-primary-500">404</span> Not Found
      </h1>

      <p>The page you are looking for doesn&#39;t exist</p>

      <ButtonLink href="/">Home</ButtonLink>
    </div>
  );
}
