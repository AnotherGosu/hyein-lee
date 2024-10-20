import type { Content } from "@prismicio/client";

import { createClient } from "@/prismicio";

export const getFeatures = async () => {
  const client = createClient();

  const { data } = await client.getSingle<LinkedData>("features", {
    fetchLinks: [
      "artwork.title",
      "artwork.subtitle",
      "artwork.image",
      "generative.title",
      "generative.subtitle",
      "generative.images",
      "post.title",
      "post.subtitle",
    ],
  });

  const featuredArtworks = [data.artwork_1, data.artwork_2, data.artwork_3];

  const featuredGeneratives = [
    data.generative_1,
    data.generative_2,
    data.generative_3,
  ];

  const featuredPosts = [data.post_1, data.post_2, data.post_3, data.post_4];

  return { featuredArtworks, featuredGeneratives, featuredPosts };
};

interface LinkedArtwork extends Omit<Content.ArtworkDocument, "data"> {
  data: Pick<Content.ArtworkDocumentData, "title" | "subtitle" | "image">;
}

interface LinkedGenerative extends Omit<Content.GenerativeDocument, "data"> {
  data: Pick<Content.GenerativeDocumentData, "title" | "subtitle" | "images">;
}

interface LinkedPost extends Omit<Content.PostDocument, "data"> {
  data: Pick<Content.PostDocumentData, "title" | "subtitle">;
}

type LinkedData = Content.FeaturesDocument & {
  data: {
    artwork_1: LinkedArtwork;
    artwork_2: LinkedArtwork;
    artwork_3: LinkedArtwork;
    generative_1: LinkedGenerative;
    generative_2: LinkedGenerative;
    generative_3: LinkedGenerative;
    post_1: LinkedPost;
    post_2: LinkedPost;
    post_3: LinkedPost;
    post_4: LinkedPost;
  };
};
