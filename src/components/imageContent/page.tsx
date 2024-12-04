// src/components/PostImage.tsx
import Image from "next/image";
import { PURE_URL } from "@/config/app-config";
interface PostImageProps {
  url: string;
  alt: string;
  className?: string;  // Propriedade para a classe CSS personalizada
}

export default function PostImage({ url, alt, className = "" }: PostImageProps) {
  return (
    <div className={`${className}`}>
      <Image
        src={PURE_URL + url}
        alt={alt}
        width={300}
        height={250}
        quality={100}
        priority
      />
    </div>
  );
}
