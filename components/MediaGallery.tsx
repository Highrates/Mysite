import { CaseMedia, type CaseMediaCorners } from "@/components/CaseMedia";

type MediaGalleryProps = {
  items: string[];
  alt: string;
};

function getCorners(index: number, total: number): CaseMediaCorners {
  if (total === 1) return "all";
  if (index === 0) return "top";
  if (index === total - 1) return "bottom";
  return "none";
}

export function MediaGallery({ items, alt }: MediaGalleryProps) {
  return (
    <div className="blocks flex min-w-0 w-full flex-col text-lg">
      {items.map((src, index) => (
        <div key={src} className="min-w-0 w-full max-w-full">
          <CaseMedia
            src={src}
            alt={`${alt} ${index + 1}`}
            priority={index === 0}
            corners={getCorners(index, items.length)}
          />
        </div>
      ))}
    </div>
  );
}
