import Head from "next/head";
import Widget_appBar from "@/components/appBar/widget";
import { createContext, useEffect, useState } from "react";
import Widget_RowCards_mode_1 from "@/components/rowCards/mode_1";
import Widget_RowCards_mode_2 from "@/components/rowCards/mode_2";
import Widget_RowCards_mode_3 from "@/components/rowCards/mode_3";
import Widget_RowAnuncio from "@/components/rowAnuncios/widget";
import Widget_Search from "@/components/search/widget";
import Widget_Search_eng from "@/components/search_engPage/widget";
import Widget_Search_eng_1 from "@/components/search_engPage/widget_1";
export const Appdesafio = createContext(null);
export default function Home() {
  const [data_RowCards, setdata_RowCards] = useState([]);
  const [data_category, setdata_category] = useState(false);
  const [data_genre, setdata_genre] = useState("");
  const [data_plataform, setplataform] = useState("all");

  //============================================

  //============================================
  return (
    <>
      {/*=================================================== */}
      <Head>
        <title>Home - games</title>
        <meta name="description" content="Play games blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon_image/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon_image/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon_image/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon_image/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon_image/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon_image/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon_image/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon_image/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_image/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon_image/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_image/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon_image/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_image/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/favicon_image/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon_image/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Appdesafio.Provider
        value={{
          data_RowCards,
          setdata_RowCards,
          data_category,
          setdata_category,
          data_genre,
          setdata_genre,
          data_plataform,
          setplataform,
        }}
      >
        <div className="colunm">
          {/*=================================================== */}
          <Widget_appBar />
          {/*=================================================== */}
          {/*=================================================== */}
          <div className="container_person">
            {/*=================================================== */}
            <Widget_Search_eng_1 />
            <Widget_RowAnuncio />
            <Widget_RowCards_mode_2 />
            <Widget_RowCards_mode_3 />
            <Widget_RowCards_mode_1 />
            {/*=================================================== */}
            {/*=================================================== */}
            {/*=================================================== */}
          </div>
        </div>
      </Appdesafio.Provider>
    </>
  );
}
