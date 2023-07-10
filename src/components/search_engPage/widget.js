import { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import { Buscador } from "@/pages/search";
import { Get_request } from "@/model/model";
import { buscaLinear } from "@/model/controller";
import { useRouter } from "next/router";
export default function Widget_Search_eng() {
  const { data_search, set_data_search } = useContext(Buscador);

  const [data, set_data] = useState([]);
  const [seach, set_seach] = useState([]);
  const [load, set_load] = useState(false);
  const r = useRouter();
  const { name } = r.query;
  //===========================================================
  useEffect(() => {
    if (!load && name) {
      Get_request.plataform = "all";
      Get_request.genre = "";
      Get_request.filtter_url();
      Get_request.fetch_request().then((e) => {
        set_load(true);
        set_data(e);
        set_seach(name);
        const resultado = buscaLinear(e, name);
        // console.log(resultado);
        set_data_search(resultado);
        // console.log(name);
      });
    }
  });
  //===========================================================
  const fn_push = (seach) => {
    const resultado = buscaLinear(data, seach);
    if (resultado) {
      console.log("Encontrado:", resultado);
      set_data_search(resultado);
    } else {
      console.log("Nenhum resultado encontrado.");
    }
    console.log("paaaaa");
  };
  return (
    <>
      {" "}
      <div className={style.container_0}>
        <h1>
          Encontre seus <br />
          games favoritos
        </h1>
        <div className={style.container_00}>
          <div className={style.div_search}>
            <input
              type="text"
              value={seach}
              placeholder="🔎 search"
              onChange={(e) => set_seach(e.target.value)}
            />
          </div>
          <div
            className={style.btn_push}
            onClick={(e) => {
              fn_push(seach);
            }}
          >
            <h3>search</h3>
          </div>
        </div>
      </div>
    </>
  );
}
