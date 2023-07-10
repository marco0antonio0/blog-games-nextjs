import { useContext } from "react";
import style from "./style.module.css";
import { Appdesafio } from "@/pages";
export default function Widget_Search() {
  return (
    <>
      {" "}
      <div className={style.container_0}>
        <h1>
          Encontre seus <br />
          games favoritos
        </h1>
        <div className={style.div_search}>
          <input
            type="text"
            name=""
            id=""
            placeholder="🔎 search"
            onChange={(e) => {}}
          />
        </div>
      </div>
    </>
  );
}
