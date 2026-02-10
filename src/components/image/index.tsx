import type { ImageProps } from "./types";

const Image : React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
      <img src={src} alt={alt} className={`${className}`} />
  );
};

export default Image;