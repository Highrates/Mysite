import Image from "next/image";

export type CaseMediaCorners = "all" | "top" | "bottom" | "none";

const cornersClassName: Record<CaseMediaCorners, string> = {
  all: "rounded-2xl",
  top: "rounded-t-2xl",
  bottom: "rounded-b-2xl",
  none: "",
};

type CaseMediaProps = {
  src: string;
  alt: string;
  priority?: boolean;
  corners?: CaseMediaCorners;
};

export function CaseMedia({
  src,
  alt,
  priority = false,
  corners = "all",
}: CaseMediaProps) {
  return (
    <div
      className={`w-full min-w-0 max-w-full overflow-hidden ${cornersClassName[corners]}`}
    >
      {src.endsWith(".gif") ? (
        <img
          src={src}
          alt={alt}
          className="h-auto w-full max-w-full"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1200}
          priority={priority}
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="h-auto w-full max-w-full"
        />
      )}
    </div>
  );
}
