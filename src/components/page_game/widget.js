import { useEffect, useState } from "react";
import style from "./style.module.css";
import { useRouter } from "next/router";
import { Get_request, Op__storage } from "@/model/model";
export default function Widget_page_game() {
  const [data_id, set_data_id] = useState("");
  const [data_temp, set_data_temp] = useState();
  const [start, setstar] = useState();
  const [ask, setask] = useState(false);
  const r = useRouter();
  const { id } = r.query;
  //====================================================

  useEffect(() => {
    if (id && data_id.length == 0) {
      Get_request.id_content = id;
      Get_request.filtter_url_id();
      Get_request.fetch_request().then((e) => {
        set_data_id(e);
      });
    }
    try {
      var temp = Op__storage.fn_get();
      temp.map((e) => (e.id == data_id.id ? setstar(true) : null));
    } catch (error) {}
  });
  //====================================================
  const fn_active = () => {
    try {
      var temp = Op__storage.fn_get();
      if (temp) {
        var isSearch = false;
        var cont = null;
        var listNw = temp
          .map((e, i) => {
            if (e.id == data_id.id) {
              isSearch = true;
              cont = i;
            } else {
              return e;
            }
          })
          .filter(Boolean);
        // se sim
        // remove da lista e seta para falso
        if (isSearch) {
          Op__storage.fn_set({ data: listNw });
          setstar(false);
        } else {
          // se não
          // adiciona e seta para verdadeiro
          var listNew = [...temp, data_id];
          Op__storage.fn_set({ data: listNew });
          setstar(true);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  //====================================================

  return (
    <>
      {data_id.length == 0 ? null : (
        <div className={style.container_0}>
          <div className={style.container_left}>
            <div>
              <img src={data_id.thumbnail} alt="" />
            </div>
          </div>
          <div className={style.container_right}>
            <div>
              <h1> {data_id.title} </h1>
              <img
                src="/images/icon_favorito_on.svg"
                alt=""
                className={`${start ? style.animacao_like : null} ${
                  !start ? style.fillterOn : null
                }`}
                onClick={() => {
                  fn_active();
                }}
              />
            </div>
            <h3>
              publisher: {data_id.publisher} <br />
              genre: {data_id.genre} <br />
              release date: {data_id.release_date}
            </h3>
            <h2>description</h2>
            <p>{!ask ? data_id.short_description : data_id.description}</p>
            <div
              className={style.btn_push}
              onClick={() => {
                setask((e) => (e ? false : true));
              }}
            >
              <h4>{!ask ? "more" : "close"}</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
