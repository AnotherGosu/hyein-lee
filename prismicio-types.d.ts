// Code generated by Slice Machine. DO NOT EDIT.
import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ArtworkDocumentDataSlicesSlice = never;

/**
 * Content for Artwork documents
 */
interface ArtworkDocumentData {
  /**
   * Title field in *Artwork*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Title of the artwork
   * - **API ID Path**: artwork.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Artwork*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Long artwork description
   * - **API ID Path**: artwork.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image field in *Artwork*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: artwork.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Tall field in *Artwork*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: artwork.tall
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  tall: prismic.BooleanField;

  /**
   * Highlight field in *Artwork*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: artwork.highlight
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  highlight: prismic.BooleanField;

  /**
   * Slice Zone field in *Artwork*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: artwork.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArtworkDocumentDataSlicesSlice> /**
   * Meta Title field in *Artwork*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: artwork.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Artwork*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: artwork.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Artwork*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: artwork.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Artwork document from Prismic
 *
 * - **API ID**: `artwork`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArtworkDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArtworkDocumentData>,
    "artwork",
    Lang
  >;

/**
 * Content for Features documents
 */
interface FeaturesDocumentData {
  /**
   * Artwork 1 field in *Features*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: features.artwork_1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  artwork_1: prismic.ContentRelationshipField<"artwork">;

  /**
   * Artwork 2 field in *Features*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: features.artwork_2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  artwork_2: prismic.ContentRelationshipField<"artwork">;

  /**
   * Artwork 3 field in *Features*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: features.artwork_3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  artwork_3: prismic.ContentRelationshipField<"artwork">;

  /**
   * Generative 1 field in *Features*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: features.generative_1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  generative_1: prismic.ContentRelationshipField<"generative">;

  /**
   * Generative 2 field in *Features*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: features.generative_2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  generative_2: prismic.ContentRelationshipField<"generative">;

  /**
   * Generative 3 field in *Features*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: features.generative_3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  generative_3: prismic.ContentRelationshipField<"generative">;

  /**
   * Post 1 field in *Features*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: features.post_1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  post_1: prismic.ContentRelationshipField<"post">;

  /**
   * Post 2 field in *Features*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: features.post_2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  post_2: prismic.ContentRelationshipField<"post">;

  /**
   * Post 3 field in *Features*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: features.post_3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  post_3: prismic.ContentRelationshipField<"post">;

  /**
   * Post 4 field in *Features*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: features.post_4
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  post_4: prismic.ContentRelationshipField<"post">;
}

/**
 * Features document from Prismic
 *
 * - **API ID**: `features`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FeaturesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FeaturesDocumentData>,
    "features",
    Lang
  >;

/**
 * Item in *Generative → Images*
 */
export interface GenerativeDocumentDataImagesItem {
  /**
   * Image field in *Generative → Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: generative.images[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

type GenerativeDocumentDataSlicesSlice = never;

/**
 * Content for Generative documents
 */
interface GenerativeDocumentData {
  /**
   * Title field in *Generative*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Generative title
   * - **API ID Path**: generative.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *Generative*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Short generative description
   * - **API ID Path**: generative.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Prompt field in *Generative*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Generative prompt
   * - **API ID Path**: generative.prompt
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  prompt: prismic.RichTextField;

  /**
   * Images field in *Generative*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: generative.images[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images: prismic.GroupField<Simplify<GenerativeDocumentDataImagesItem>>;

  /**
   * Tool field in *Generative*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Tool used for generation
   * - **Default Value**: Midjourney
   * - **API ID Path**: generative.tool
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  tool: prismic.SelectField<"Midjourney" | "Ideogram", "filled">;

  /**
   * Highlight field in *Generative*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: generative.highlight
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  highlight: prismic.BooleanField;

  /**
   * Slice Zone field in *Generative*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: generative.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<GenerativeDocumentDataSlicesSlice> /**
   * Meta Title field in *Generative*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: generative.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Generative*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: generative.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Generative*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: generative.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Generative document from Prismic
 *
 * - **API ID**: `generative`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GenerativeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<GenerativeDocumentData>,
    "generative",
    Lang
  >;

type PostDocumentDataSlicesSlice = never;

/**
 * Content for Post documents
 */
interface PostDocumentData {
  /**
   * Title field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Post title
   * - **API ID Path**: post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Short post description
   * - **API ID Path**: post.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Content field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Post content
   * - **API ID Path**: post.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Image field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Highlight field in *Post*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: post.highlight
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  highlight: prismic.BooleanField;

  /**
   * Slice Zone field in *Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PostDocumentDataSlicesSlice> /**
   * Meta Title field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;

/**
 * Item in *Product → Images*
 */
export interface ProductDocumentDataImagesItem {
  /**
   * Image field in *Product → Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product.images[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

type ProductDocumentDataSlicesSlice = never;

/**
 * Content for Product documents
 */
interface ProductDocumentData {
  /**
   * Title field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Product title
   * - **API ID Path**: product.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Product description
   * - **API ID Path**: product.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Type field in *Product*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Product type
   * - **API ID Path**: product.type
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  type: prismic.SelectField<"Book" | "Wallpaper">;

  /**
   * Price field in *Product*
   *
   * - **Field Type**: Number
   * - **Placeholder**: Product price
   * - **API ID Path**: product.price
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;

  /**
   * Images field in *Product*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: product.images[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images: prismic.GroupField<Simplify<ProductDocumentDataImagesItem>>;

  /**
   * Link field in *Product*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Product link
   * - **API ID Path**: product.link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Slice Zone field in *Product*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: product.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProductDocumentDataSlicesSlice> /**
   * Meta Title field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: product.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: product.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Product*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Product document from Prismic
 *
 * - **API ID**: `product`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProductDocumentData>,
    "product",
    Lang
  >;

export type AllDocumentTypes =
  | ArtworkDocument
  | FeaturesDocument
  | GenerativeDocument
  | PostDocument
  | ProductDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ArtworkDocument,
      ArtworkDocumentData,
      ArtworkDocumentDataSlicesSlice,
      FeaturesDocument,
      FeaturesDocumentData,
      GenerativeDocument,
      GenerativeDocumentData,
      GenerativeDocumentDataImagesItem,
      GenerativeDocumentDataSlicesSlice,
      PostDocument,
      PostDocumentData,
      PostDocumentDataSlicesSlice,
      ProductDocument,
      ProductDocumentData,
      ProductDocumentDataImagesItem,
      ProductDocumentDataSlicesSlice,
      AllDocumentTypes,
    };
  }
}
