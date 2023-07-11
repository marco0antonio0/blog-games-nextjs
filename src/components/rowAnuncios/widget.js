import { useRouter } from "next/router";
import style from "./style.module.css";
export default function Widget_RowAnuncio() {
  const r = useRouter();

  return (
    <>
      <div className={style.container_titulo}>
        <img src="/images/icon_world.svg" alt="" />
        <h2 className={style.title_container}>Best Topic</h2>
      </div>
      <div className={style.container_0}>
        <div className={`${style.container_0_1} ${style.disableMedia}`}>
          {/*================================================================== */}
          {/* image 1 */}
          <img
            src="/images/icon_app_1.png"
            alt=""
            onClick={() => r.push("https://www.freetogame.com/")}
          />
        </div>
        <div className={style.container_0_2}>
          {/*================================================================== */}
          {/* image 2 */}
          <img
            src="/images/icon_app_2.png"
            alt=""
            onClick={() =>
              r.push("https://github.com/marco0antonio0/blog-games-nextjs")
            }
          />
        </div>
        <div className={`${style.container_0_2} `}>
          {/*================================================================== */}
          {/* image 3 */}
          <img
            src="/images/icon_app_3.png"
            alt=""
            onClick={() => r.push("https://www.freetogame.com/api-doc")}
          />
        </div>
      </div>
      <div className={`${style.container_0} ${style.disableMedia_1}`}>
        <div className={`${style.container_0_1}`}>
          {/*================================================================== */}
          {/* image 1 */}
          <img
            src="/images/icon_app_1_1.png"
            alt=""
            onClick={() => r.push("https://www.freetogame.com/")}
          />
        </div>
      </div>
    </>
  );
}
