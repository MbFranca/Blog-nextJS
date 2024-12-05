import { PURE_URL } from "@/config/app-config";

interface PostImageProps {
  url: string;
  alt: string;
  className?: string; // Permite adicionar uma classe personalizada
}

export default function PostImage({ url, alt, className = "" }: PostImageProps) {
  return (
    <div className={`post-item-img ${className}`}>
      <img 
        src={PURE_URL + url} 
        alt={alt} 
        className="item-img" 
      />
    </div>
  );
}
