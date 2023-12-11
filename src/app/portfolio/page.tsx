import Image from "next/image";
import styles from "./page.module.css";

export default function portfolio() {
  return (
    <>
      <div className={styles.header}>
        <Image
          src="/IMG_2255.jpg"
          alt="photo"
          width={500}
          height={300}
          quality={100}
          sizes="100vw"
          priority
        ></Image>
        <span>PORTFOLIO</span>
      </div>
      <div></div>
    </>
  );
}
