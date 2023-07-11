import style from "./style.module.css";

export default function Widget_BottomBar() {
  return (
    <>
      <div className={style.container_0}>
        <div className={style.left}>
          <div>
            <h1>Play games</h1>
            <p>
              Site Play Games Diversão garantida com jogos incríveis! Explore e
              divirta-se com a melhor seleção de jogos.
            </p>
          </div>
        </div>
        <div className={style.right}>
          <div>
            <h1>{"<DEV>"}</h1>
            <p>
              Ola me chamo marco, desenvolvi esse site para estudar e
              desenvolver melhor minhas habilidades de progamação e
              desenvolvimento
            </p>
            <h1 className={style.person}>{"<DEV />"}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
