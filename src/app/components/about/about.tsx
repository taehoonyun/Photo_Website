import Link from "next/link";
import Image from "next/image";
import style from './about.module.css';
export default function About() {
  return (
    <div className={style.about}>
      <div className={style.explain}>
        <span className={style.title}>ABOUT</span>
        <span className={style.contents}>Sarah Yun is a versatile photographer based in the Atlanta Metropolitan Area, seeking to document the splendor and allure of creation through honest imagery. </span>
      </div>
      <Image
        src={"/IMG_2198.jpg"}
        alt="Picture of the author"
        width={500}
        height={300}
        quality={100}
        sizes="100vw"
        style={{
          width: '45%',
          height: 'auto',
        }}
        priority
      ></Image>
    </div>
  );
}
