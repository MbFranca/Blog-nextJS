import '@/styles/globals.css';
interface PostTitleProps {
    title: string;
    className?:string
  }
  export default function PostTitle({ title, className = ''}: PostTitleProps) {
    return <>
    <p className={className}>{title}</p>

    </>;
  }