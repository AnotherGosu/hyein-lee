import config from "../slicemachine.config.json";
import {
  createClient as baseCreateClient,
  type ClientConfig,
  type Route,
} from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";

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

export const createClient = (config: ClientConfig = {}) => {
  const fetchOptions: any = {
    next: { tags: ["prismic"] },
    cache: "force-cache",
  };

  const client = baseCreateClient(repositoryName, {
    routes,
    fetchOptions,
    ...config,
  });

  enableAutoPreviews({ client });

  return client;
};
