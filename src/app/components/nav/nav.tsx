import Link from "next/link";
import style from "./nav.module.css";
import Image from "next/image";
export default function Nav() {
  return (
    <div className={style.nav}>
      <div className={style.title}>
        <Image
          src="/logo.png"
          alt="log"
          width={100}
          height={100}
        ></Image>
      </div>
      <div className={style.menu}>
        <Link className={style.option} href="/">
          HOME
        </Link>
        <Link className={style.option} href="/portfolio">
          PORTFOLIO
        </Link>
        <Link className={style.option} href="/studio">
          STUDIO
        </Link>
        <Link className={style.option} href="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
