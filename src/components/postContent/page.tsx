import { marked } from "marked";
interface PostContentProps {
  content: Content[]; 
  className?: string; 
}
export default function PostContent({ content, className = "" }: PostContentProps) {
  const markdownContent = content
    .map((block) =>
      block.children.map((child) => child.text).join("")  
    )
    .join("\n"); 
  const htmlContent = marked(markdownContent);  
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} className={`post-content ${className}`} />;
}