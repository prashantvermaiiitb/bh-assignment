/**
 * Constants to be used in images for categorisation purpose
 */
export const PLATFORMS = {
  DESKTOP: "desktop",
  MOBILE: "mobile",
  APP: {
    AOS: "android",
    IOS: "iphone",
    IPAD: "ipad",
  },
};

/**
 * Type of the multi-media associated with the cards.
 * These informations will be scanned as well while ingestion for removing
 * redundancy or updating the existing.
 */
export const IMAGE = "image";
export const VIDEO = "video";
export const DOCUMENT = "document";
export const GENERAL = "general";
