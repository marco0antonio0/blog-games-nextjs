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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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