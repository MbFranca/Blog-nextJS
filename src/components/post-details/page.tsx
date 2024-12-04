import { formateDate } from "@/lib/format-date";

interface PostDetailsProps {
    author: string;
    date: string;
  }
  
  export default function PostDetails({ author, date }: PostDetailsProps) {
    return (
      <div className="post-item-text-datails">Publicado por {author} em {formateDate(date)}</div>
    );
  }
  