import { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
// import { Appdesafio } from "@/pages";
import { useRouter } from "next/router";
import { Op__storage } from "@/model/model";
export default function Widget_RowCards_mode_4() {
  // const { data_RowCards, data_plataform, data_genre } = useContext(Appdesafio);
  //==========================================================================
  const [cont_index, set_cont_index] = useState(6);
  const [data_get, setdata_get] = useState([]);
  const [load, set_load] = useState(false);
  //==========================================================================
  useEffect(() => {
    if (!load) {
      try {
        if (data_get.length == 0) {
          setdata_get(Op__storage.fn_get());
          set_load(true);
        }
      } catch (error) {
        setdata_get([]);
        console.log(error);
      }
    }
  });
  //==========================================================================
  var data = [
    {
      titulo: "aaaaaa",
      publisher: "aaaa",
      platform: "aaaaa",
      thumbnail11: "",
      id: "",
    },
  ];
  //==========================================================================
  return (
    <>
      <div className={style.container_0}>
        <div className={style.titulo_container_0}>
          <h2>Best games Favorite</h2>
        </div>
        <div className={style.rowCards}>
          {data_get.length > 0
            ? data_get.map((e, i) => {
                if (i < cont_index) {
                  return (
                    <Card_Data
                      key={i}
                      titulo={`${e.title}`}
                      subtitulo_1={e.publisher}
                      subtitulo_2={e.platform}
                      image={e.thumbnail}
                      id={e.id}
                    />
                  );
                }
              })
            : null}
        </div>
      </div>
    </>
  );
}
//==========================================================================
const Card_Data = ({
  image,
  titulo,
  subtitulo_1 = "",
  subtitulo_2 = "",
  id = "",
}) => {
  const r = useRouter();

  return (
    <>
      <div className={style.card} onClick={() => r.push(`/game?id=${id}`)}>
        <div className={titulo.length == 0 ? style.disable : style.card_in}>
          <div className={style.image_card}>
            <img src={image} alt="" />
          </div>
          <div className={style.content_card}>
            <h1>{titulo}</h1>
            {subtitulo_1.length > 0 && subtitulo_2.length > 0 ? (
              <h3>
                {subtitulo_1} <br /> {subtitulo_2}{" "}
              </h3>
            ) : (
              <h3>{subtitulo_1}</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

//==========================================================================
