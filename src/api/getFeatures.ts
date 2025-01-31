import type { Content } from "@prismicio/client";

import {
  FeaturedArtwork,
  FeaturedGenerative,
  FeaturedPost,
  FeaturedProject,
} from "@/types/feautres";

import { createClient } from "@/prismicio";

export const getFeatures = async () => {
  const { data } = await createClient().getSingle<FeaturedData>("features", {
    fetchLinks: [
      "artwork.title",
      "artwork.subtitle",
      "artwork.image",
      "generative.title",
      "generative.subtitle",
      "generative.images",
      "post.title",
      "post.subtitle",
      "post.image",
      "project.title",
      "project.subtitle",
      "project.image",
    ],
  });

  const featuredArtworks = [data.artwork_1, data.artwork_2, data.artwork_3];

  const featuredGeneratives = [
    data.generative_1,
    data.generative_2,
    data.generative_3,
  ];

  const featuredPosts = [data.post_1, data.post_2, data.post_3, data.post_4];

  const featuredProjects = [data.project_1, data.project_2];

  return {
    featuredArtworks,
    featuredGeneratives,
    featuredPosts,
    featuredProjects,
  };
};

type FeaturedData = Content.FeaturesDocument & {
  data: {
    artwork_1: FeaturedArtwork;
    artwork_2: FeaturedArtwork;
    artwork_3: FeaturedArtwork;
    generative_1: FeaturedGenerative;
    generative_2: FeaturedGenerative;
    generative_3: FeaturedGenerative;
    post_1: FeaturedPost;
    post_2: FeaturedPost;
    post_3: FeaturedPost;
    post_4: FeaturedPost;
    project_1: FeaturedProject;
    project_2: FeaturedProject;
  };
};
