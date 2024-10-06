import { GMail } from "@/components/icons/GMail";
import { Instagram } from "@/components/icons/Instagram";
import { LinkedIn } from "@/components/icons/LinkedIn";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between gap-4 py-4">
      <div>
        <div className="text-lg font-semibold">Hyein Lee</div>

        <div className="text-xs">
          Development by{" "}
          <a
            href="https://www.anothergosu.com/"
            target="_blank"
            className="underline"
          >
            Maksim Dubinin
          </a>
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href="https://www.instagram.com/hyeinnnnl/"
          target="_blank"
        >
          <Instagram className="hover:fill-primary-300 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/hyein-lee-04480924b/"
          target="_blank"
        >
          <LinkedIn className="hover:fill-primary-300 transition" />
        </a>

        <a
          href="mailto:hyein2399@gmail.com"
          target="_blank"
        >
          <GMail className="hover:fill-primary-300 transition" />
        </a>
      </div>
    </footer>
  );
};
