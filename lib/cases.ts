export type CaseLayout = "default" | "gallery";

export type CaseMediaVideoInset = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type CaseMediaItem =
  | string
  | {
      src: string;
      video?: string;
      videoInset?: CaseMediaVideoInset;
    };

export type Case = {
  title: string;
  slug: string;
  description: string;
  cover: string;
  layout?: CaseLayout;
  media?: CaseMediaItem[];
  hidden?: boolean;
};
