import Head from "next/head";
import Widget_appBar from "@/components/appBar/widget";
import { createContext, useContext, useEffect, useState } from "react";
import Widget_RowCards_mode_5 from "@/components/rowCards/mode_5";
import Widget_Search_eng from "@/components/search_engPage/widget";
export const Buscador = createContext(null);

export default function Home() {
  const [data_eng, set_data_eng] = useState("");
  const [data_search, set_data_search] = useState([]);
  return (
    <>
      {/*=================================================== */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Buscador.Provider
        value={{ data_eng, set_data_eng, data_search, set_data_search }}
      >
        <div className="colunm">
          {/*=================================================== */}
          <Widget_appBar />
          {/*=================================================== */}
          {/*=================================================== */}
          <div className="container_person">
            {/*=================================================== */}
            <Widget_Search_eng />
            <Widget_RowCards_mode_5 />
            {/*=================================================== */}
            {/*=================================================== */}
          </div>
        </div>
      </Buscador.Provider>
    </>
  );
}
