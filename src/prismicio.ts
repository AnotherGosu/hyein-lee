import config from "../slicemachine.config.json";
import {
  createClient as baseCreateClient,
  type ClientConfig,
  type Route,
} from "@prismicio/client";
import { cache } from "react";

export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

const routes: Route[] = [
  {
    type: "artwork",
    path: "/artworks/:uid",
  },
  {
    type: "generative",
    path: "/generatives/:uid",
  },
  {
    type: "post",
    path: "/blog/:uid",
  },
];

export const createClient = cache((config: ClientConfig = {}) => {
  const client = baseCreateClient(repositoryName, {
    routes,
    fetchOptions: { next: { tags: ["prismic"] }, cache: "force-cache" },
    ...config,
  });

  return client;
});
