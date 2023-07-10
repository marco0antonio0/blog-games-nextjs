import { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import { Get_request, Load_request } from "@/model/model";
import { Appdesafio } from "@/pages";
export default function Widget_RowCards_mode_2({
  data = [
    {
      nome: "Windows",
      image: "/images/image_plataform_1.png",
    },
    {
      nome: "Web Browser",
      image: "/images/image_plataform_2.png",
    },
    { nome: "" },
  ],
  titulo_post = "Plataform",
}) {
  //==========================================================================
  const [Option, setOption] = useState([true, true]);
  const { data_RowCards, setdata_RowCards, setplataform, data_genre } =
    useContext(Appdesafio);
  //==========================================================================
  const fn_push_load = async function (i) {
    setOption((e) => e.map((e, ii) => (ii != i ? false : true)));
    setplataform(i == 0 ? "pc" : "browser");
    Get_request.genre = data_genre;
    Get_request.plataform = i == 0 ? "pc" : "browser";
    Get_request.filtter_url();
    Get_request.fetch_request().then((e) => setdata_RowCards(e));
  };
  const fn_push_load_2 = async function () {
    setplataform("all");
    Get_request.genre = data_genre;
    Get_request.plataform = "all";
    Get_request.filtter_url();
    Get_request.fetch_request().then((e) => setdata_RowCards(e));
    setOption([true, true]);
  };
  //==========================================================================
  useEffect(() => {
    if (data_RowCards.length == 0) {
      setplataform("all");
      Get_request.plataform = "all";
      Get_request.genre = data_genre;
      Get_request.filtter_url();
      Get_request.fetch_request().then((e) => setdata_RowCards(e));
    }
  }, [data_RowCards]);
  //==========================================================================
  return (
    <>
      <div className={style.container_0}>
        <div className={style.titulo_container_0}>
          <img src="/images/icon_controller.svg" alt="" />
          <h2>{titulo_post}</h2>
          <div>
            <h2 onClick={fn_push_load_2}>all platafom</h2>
          </div>
        </div>
        <div className={style.rowCards}>
          {data.map((e, i) => (
            <div
              className={`${style.card} ${
                !Option[i] ? style.opacity_box : null
              }`}
              key={i}
              onClick={() => fn_push_load(i)}
            >
              <Card_Data titulo={e.nome} image={e.image} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
//==========================================================================
const Card_Data = ({ image, titulo, subtitulo_1 = "", subtitulo_2 = "" }) => {
  return (
    <>
      {/*  */}
      <div className={titulo.length == 0 ? style.disable : style.card_in}>
        <div className={style.image_card}>
          <img src={image} alt="" />
        </div>
        <div className={style.content_card}>
          <h1> {titulo} </h1>
          {subtitulo_1.length > 0 && subtitulo_2.length > 0 ? (
            <h3>
              {subtitulo_1} <br /> {subtitulo_2}{" "}
            </h3>
          ) : (
            <h3>{subtitulo_1}</h3>
          )}
        </div>
      </div>
    </>
  );
};

//==========================================================================
