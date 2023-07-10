import Image from "next/image";
import style from "./style.pc.module.css";
import style_1 from "./style.tablet.module.css";
import style_2 from "./style.smartphone.module.css";
import { Appdesafio } from "@/pages";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

export default function Widget_appBar() {
  const r = useRouter();
  return (
    <>
      <Layout_pc />
      <Layout_tablet />
      <Layout_smartphne />
    </>
  );
}

// ====================================================================================
//                  Layout pc - ate 1200px
function Layout_pc() {
  const r = useRouter();
  return (
    <>
      <div className={`${style.container_0} `}>
        {/*==================================================== */}
        {/* container_1 */}
        <div className={`${style.container_1}`}>
          <div>
            <h3 onClick={() => r.push("/")}>Home</h3>
            <h3 onClick={() => r.push("https://github.com/marco0antonio0")}>
              Github
            </h3>
            <h3 onClick={() => r.push("https://www.freetogame.com/")}>
              About api connect
            </h3>
          </div>
        </div>
        {/*==================================================== */}
        {/* container_2 */}
        <div className={`${style.container_2}`}>
          <img src="/images/logo.png" alt="" />
        </div>
        {/*==================================================== */}
        {/* container_3 */}
        <div
          className={`${style.container_3}`}
          onClick={() => r.push("/favorite")}
        >
          <div>
            <h3>favorite</h3>
            <div>
              <img src="/images/icon_coracao.png" alt="" />
            </div>
          </div>
        </div>
        {/*==================================================== */}
      </div>
    </>
  );
}
// ====================================================================================
//                  Layout tablet -  1200px a 800px
function Layout_tablet() {
  const r = useRouter();
  return (
    <>
      <div className={`${style_1.container_0} `}>
        {/*==================================================== */}
        {/* container_2 */}
        <div className={`${style_1.container_2}`}>
          <img src="/images/logo.png" alt="" />
        </div>
        {/*==================================================== */}
        {/* container_1 */}
        <div className={`${style_1.container_1}`}>
          <div>
            <h3 onClick={() => r.push("/")}>Home</h3>
            <h3 onClick={() => r.push("https://github.com/marco0antonio0")}>
              Github
            </h3>
            <h3 onClick={() => r.push("https://www.freetogame.com/")}>
              About api connect
            </h3>
          </div>
        </div>

        {/*==================================================== */}
        {/* container_3 */}
        <div
          className={`${style_1.container_3}`}
          onClick={() => r.push("/favorite")}
        >
          <div>
            <h3>favorite</h3>
            <div>
              <img src="/images/icon_coracao.png" alt="" />
            </div>
          </div>
        </div>
        {/*==================================================== */}
      </div>
    </>
  );
}
// ====================================================================================
//                  Layout tablet -  800px a xxxxxx
function Layout_smartphne() {
  const [status, setstatus] = useState(false);
  const r = useRouter();
  return (
    <>
      <div className={`${style_2.container_0} `}>
        {/*==================================================== */}
        <div className={style_2.container_1}>
          <div
            className={
              status ? style_2.animacao_rotate : style_2.animacao_rotate_inverse
            }
            onClick={() => setstatus((e) => (e ? false : true))}
          >
            <img src="/images/menu_on.png" alt="" />
          </div>
        </div>
        {/*==================================================== */}
        {/* container_2 */}
        <div className={`${style_2.container_2}`}>
          <img src="/images/logo.png" alt="" />
        </div>
        {/*==================================================== */}
        <div className={style_2.container_3}>
          <div
            onClick={() => {
              setstatus(false);
              r.push("/favorite");
            }}
          >
            <img src="/images/star.svg" alt="" />
          </div>
        </div>
        {/*==================================================== */}
      </div>
      <div className={status ? style_2.dropMenu : style_2.disable_box}>
        <h2
          onClick={() => {
            setstatus(false);
            r.push("/");
          }}
        >
          Home
        </h2>
        <h2
          onClick={() => {
            setstatus(false);
            r.push("https://github.com/marco0antonio0");
          }}
        >
          Github
        </h2>
        <h2
          onClick={() => {
            setstatus(false);
            r.push("https://www.freetogame.com/");
          }}
        >
          About api connect
        </h2>
      </div>
    </>
  );
}
