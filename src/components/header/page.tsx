import { SITE_NAME } from "@/config/app-config";
import '@/styles/globals.css'
import Link from "next/link";
export default function Header():JSX.Element {
    return(
        <div className="header">
            <Link href={'/'} className="header-tittle"><>{SITE_NAME}</></Link>
        </div>
    )    
}
