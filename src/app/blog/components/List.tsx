import { PrismicImage } from "@prismicio/react";
import Link from "next/link";

import { createClient } from "@/prismicio";

export const List = async () => {
  const client = createClient();

  const pages = await client.getAllByType("post");

  return (
    <>
      {pages.map(({ uid, data }) => {
        return (
          <Link
            key={uid}
            href={`/blog/${uid}`}
            className="focus-ring group flex overflow-hidden rounded-md border border-primary-200"
          >
            <PrismicImage
              field={data.image}
              className="h-56 w-96 shrink-0 object-cover"
            />

            <div className="p-8 duration-500 group-hover:bg-primary-100">
              <h3 className="mb-2 text-2xl font-semibold text-primary-500">
                {data.title}
              </h3>

              <p className="text-lg">{data.subtitle}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};
