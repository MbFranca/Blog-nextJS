import '@/styles/globals.css'
import React from "react";
import Header from "@/components/header/page";
import PostCards from "@/components/posts/page";
import Footer from "@/components/footer/page";
export default async function HomePage() {
    
    return (
    <div className="homePage">
      <Header></Header>
      <PostCards ></PostCards>
      <Footer></Footer>
    </div>
  );
}
