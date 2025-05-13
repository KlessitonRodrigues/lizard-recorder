declare namespace Utils {
  type Paths = "/home";

  type TranslationFile = Record<string, string>;

  type ExperienceItems = {
    name: string;
    year: number;
    icon: IconTypes;
    type: ExperienceItemsTypes;
  };

  type ExperienceItemsTypes =
    | "backend"
    | "frontend"
    | "infra"
    | "language"
    | "tests";

  type IconTypes = "download";

  type TextTags =
    | "b"
    | "span"
    | "small"
    | "strong"
    | "mark"
    | "em"
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
declare module "*.ttf";
declare module "*.woff";
declare module "*.woff2";
