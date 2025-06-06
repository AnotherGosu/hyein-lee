import { Content } from "@prismicio/client";

export type FeaturedArtwork = Omit<Content.ArtworkDocument, "data"> & {
  data: Pick<Content.ArtworkDocumentData, "title" | "subtitle" | "image">;
};

export type FeaturedGenerative = Omit<Content.GenerativeDocument, "data"> & {
  data: Pick<Content.GenerativeDocumentData, "title" | "subtitle" | "images">;
};

export type FeaturedPost = Omit<Content.PostDocument, "data"> & {
  data: Pick<Content.PostDocumentData, "title" | "subtitle" | "image">;
};

export type FeaturedProject = Omit<Content.ProjectDocument, "data"> & {
  data: Pick<Content.ProjectDocumentData, "title" | "subtitle" | "images">;
};
