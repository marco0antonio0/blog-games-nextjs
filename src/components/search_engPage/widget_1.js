import { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import { Buscador } from "@/pages/search";
import { Get_request } from "@/model/model";
import { buscaLinear } from "@/model/controller";
import { useRouter } from "next/router";
export default function Widget_Search_eng_1() {
  const [data, set_data] = useState([]);
  const [seach, set_seach] = useState("");
  const [load, set_load] = useState(false);
  const r = useRouter();
  //===========================================================
  useEffect(() => {
    if (!load) {
      Get_request.plataform = "all";
      Get_request.genre = "";
      Get_request.filtter_url();
      Get_request.fetch_request().then((e) => {
        set_load(true);
        set_data(e);
      });
    }
  });
  //===========================================================
  const fn_push = (seach) => {
    if (seach && seach.trim().length > 0) {
      r.push("/search?name=" + seach);
    }
  };
  return (
    <>
      {" "}
      <div className={style.container_0}>
        <h1>
          Find your <br />
          favorite games
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
