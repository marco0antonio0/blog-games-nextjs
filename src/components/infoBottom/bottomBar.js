import style from "./style.module.css";

export default function Widget_BottomBar() {
  return (
    <>
      <div className={style.container_0}>
        <div className={style.left}>
          <div>
            <h1>Play games</h1>
            <p>
              Play Games: Guaranteed fun with amazing games! Explore and have a
              great time with the best selection of games.
            </p>
          </div>
        </div>
        <div className={style.right}>
          <div>
            <h1>{"<DEV>"}</h1>
            <p>
              Hello, my name is Marco. I developed this website to study and
              enhance my programming and development skills.
            </p>
            <h1 className={style.person}>{"</DEV>"}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
