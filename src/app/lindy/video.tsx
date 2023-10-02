import { type HTMLAttributes, type ForwardedRef, forwardRef } from "react";
import { cn } from "../utils/utils";

interface VideoProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
}

const Video = forwardRef<HTMLDivElement, VideoProps>(
  ({ src, className, ...props }, ref) => {
    console.log(src);
    return (
      <div
        className={cn(
          "shadow-blackA7 h-screen overflow-hidden rounded-2xl",
          className
        )}
        ref={ref}
        {...props}
      >
        <video
          key={src}
          autoPlay
          playsInline
          muted
          loop
          className="shadow-2xl hover:shadow-2xl"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        >
          <source src={src} />
        </video>
      </div>
    );
  }
);

Video.displayName = "Video";

export default Video;
