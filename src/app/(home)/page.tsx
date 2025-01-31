import { Metadata } from "next";

import { getFeatures } from "@/api/getFeatures";

import { ArtworkSection } from "./components/ArtworkSection";
import { BlogSection } from "./components/BlogSection";
import { GenerativeSection } from "./components/GenerativeSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectSection } from "./components/ProjectSection";

export const metadata: Metadata = {
  description: "Hyein Lee - law enthusiast, artist and AI creator",
};

export default async function Page() {
  const {
    featuredArtworks,
    featuredGeneratives,
    featuredProjects,
    featuredPosts,
  } = await getFeatures();

  return (
    <>
      <HeroSection />
      <ArtworkSection featuredArtworks={featuredArtworks} />
      <GenerativeSection featuredGeneratives={featuredGeneratives} />
      <ProjectSection featuredProjects={featuredProjects} />
      <BlogSection featuredPosts={featuredPosts} />
    </>
  );
}
