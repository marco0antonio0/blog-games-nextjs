import { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import style_person from "./cssPerson.module.css";
import { Get_request, Load_request } from "@/model/model";
import { Appdesafio } from "@/pages";
export default function Widget_RowCards_mode_3() {
  var list_genre = [
    "all",
    "mmorpg",
    "shooter",
    "strategy",
    "moba",
    "racing",
    "sports",
    "social",
    "sandbox",
    "open-world",
    "survival",
    "pvp",
    "pve",
    "pixel",
    "voxel",
    "zombie",
    "turn - based",
    "first - person",
    "third - Person",
    "top - down",
    "tank",
    "space",
    "sailing",
    "side - scroller",
    "superhero",
    "permadeath",
    "card",
    "battle - royale",
    "mmo",
    "mmofps",
    "mmotps",
    "3d",
    "2d",
    "anime",
    "fantasy",
    "sci - fi",
    "fighting",
    "action - rpg",
    "action",
    "military",
    "martial - arts",
    "flight",
    "low - spec",
    " tower - defense",
    "horror",
    "mmorts",
  ];
  //==========================================================================
  const { setdata_RowCards, data_genre, setdata_genre, data_plataform } =
    useContext(Appdesafio);
  //==========================================================================
  const fn_push_load = async function (i, e) {
    setdata_genre(e);
    Get_request.genre = e;
    Get_request.plataform = data_plataform;
    Get_request.filtter_url();
    Get_request.fetch_request().then((x) => setdata_RowCards(x));
  };
  //==========================================================================
  const [menuStatus, setmenuStatus] = useState(false);
  const fn_BTN = () => setmenuStatus((e) => (e ? false : true));

  //==========================================================================
  return (
    <>
      <div className={style.container_0}>
        <div className={style_person.container_Genre} onClick={fn_BTN}>
          <h2>Genre - {data_genre.length > 0 ? data_genre : "all"}</h2>
          <img
            src={menuStatus ? "/images/menu_off.png" : "/images/menu_on.png"}
            alt=""
          />
        </div>
        <div className={menuStatus ? style.rowCards : style.disable}>
          {list_genre.map((e, i) => (
            <div
              className={`${style.card} `}
              key={i}
              onClick={() => {
                fn_push_load(i, e);
                fn_BTN();
                setdata_genre(e);
              }}
            >
              <Card_Data titulo={e} />
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
