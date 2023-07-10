import { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import { Appdesafio } from "@/pages";
import { useRouter } from "next/router";
export default function Widget_RowCards_mode_1({ titulo_post = "All games" }) {
  const { data_RowCards, data_plataform, data_genre } = useContext(Appdesafio);
  //==========================================================================
  const [cont_index, set_cont_index] = useState(6);
  //==========================================================================
  return (
    <>
      <div className={style.container_0}>
        <div className={style.titulo_container_0}>
          {!titulo_post ? null : (
            <h2>
              {titulo_post} {">"} {data_plataform} {">"} {data_genre}
            </h2>
          )}
        </div>
        <div className={style.rowCards}>
          {data_RowCards.length > 0
            ? data_RowCards.map((e, i) => {
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
        <div
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
