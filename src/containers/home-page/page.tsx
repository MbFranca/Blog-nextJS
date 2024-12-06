import '@/styles/globals.css'
import React from "react";
import Header from "@/components/header/page";
import PostCards from "@/components/posts/page";
import Footer from "@/components/footer/page";
import Head from 'next/head';
import { SITE_NAME } from '@/config/app-config';
export default async function HomePage() {
    
    return (
    <div className="homePage">
      <Head>
            <title>{SITE_NAME}</title>
            <meta name='description' content='Este é meu blog de dicas, moda, aventuras e dia a dia.'/>
      </Head>
      <Header></Header>
      <PostCards ></PostCards>
      <Footer></Footer>
    </div>
  );
}
