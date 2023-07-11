import { useRouter } from "next/router";
import style from "./style.module.css";
export default function Widget_Page_notFound() {
  const r = useRouter();
  return (
    <>
      <div className={style.container_0}>
        <h1>Page not found</h1>
        <div onClick={() => r.push("/")}>
          <h3> Home Page</h3>
        </div>
      </div>
    </>
  );
}
