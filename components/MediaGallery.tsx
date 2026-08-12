import {
  CaseMedia,
  type CaseMediaCorners,
  type CaseMediaVideoInset,
} from "@/components/CaseMedia";

export type GalleryMediaItem =
  | string
  | {
      src: string;
      video?: string;
      videoInset?: CaseMediaVideoInset;
    };

type MediaGalleryProps = {
  items: GalleryMediaItem[];
  alt: string;
};

function getCorners(index: number, total: number): CaseMediaCorners {
  if (total === 1) return "all";
  if (index === 0) return "top";
  if (index === total - 1) return "bottom";
  return "none";
}

function normalizeItem(item: GalleryMediaItem): {
  src: string;
  video?: string;
  videoInset?: CaseMediaVideoInset;
} {
  if (typeof item === "string") {
    return { src: item };
  }

  return item;
}

export function MediaGallery({ items, alt }: MediaGalleryProps) {
  return (
    <div className="blocks flex min-w-0 w-full flex-col text-lg">
      {items.map((item, index) => {
        const media = normalizeItem(item);

        return (
          <div key={media.src} className="min-w-0 w-full max-w-full">
            <CaseMedia
              src={media.src}
              alt={`${alt} ${index + 1}`}
              priority={index === 0}
              corners={getCorners(index, items.length)}
              video={media.video}
              videoInset={media.videoInset}
            />
          </div>
        );
      })}
    </div>
  );
}
