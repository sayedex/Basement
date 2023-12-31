import Head from "next/head";
import { GetStaticProps } from "next";
import Image from "next/image";
import { useEffect } from "react";
import { Story } from "../components/Home/Story";
import { useAppSelector, useAppdispatch } from "../hooks/redux";
import Main from "../components/Home/Main";
export default function Home() {
  return (
    <div>
      <div className="dark:bg-[#12121200] snap-y snap-mandatory   z-0 scroll-smooth">
        <div className="layout">
          <Main />
        </div>
      </div>
    </div>
  );
}
