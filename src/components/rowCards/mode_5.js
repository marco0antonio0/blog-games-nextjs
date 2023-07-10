import { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import { useRouter } from "next/router";
import { Get_request } from "@/model/model";
import { buscaLinear } from "@/model/controller";
import { Buscador } from "@/pages/search";
export default function Widget_RowCards_mode_5() {
  //==========================================================================
  const { data_search, set_data_search } = useContext(Buscador);
  const [cont_index, set_cont_index] = useState(500);
  const [data_searchfilter, set_data_searchfilter] = useState([]);

  //==========================================================================
  var fn_dd = () => {};
  //==========================================================================
  return (
    <>
      <div className={style.container_0}>
        <div className={style.titulo_container_0}>
          <h2 onClick={fn_dd}>Search game</h2>
        </div>
        <div className={style.rowCards}>
          {data_search.length > 0
            ? data_search.map((e, i) => {
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
        {/* <div
          className={`${style.BTN_moreGames} ${
            data_RowCards.length < cont_index ? style.opacity_box : null
          }`}
        >
          <h2
            onClick={() =>
              set_cont_index((e) => {
                var qtd = data_RowCards.length - e;
                if (qtd > 6) {
                  return e + 6;
                } else {
                  return qtd + e;
                }
              })
            }
          >
            more +
          </h2>
        </div> */}
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
