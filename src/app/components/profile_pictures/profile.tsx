"use client";
import style from "./profile.module.css";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
export default function Profile() {
  const slider = useRef<any>(null);
  const [index, setIndex] = useState<number>(0);
  const [click, setClick] = useState<boolean>(true);
  const timeoutRef = useRef<any>(null);
  const delay = 5000;
  const profile_pic = [
    "/IMG_2196.jpg",
    "/IMG_2198.jpg",
    "/IMG_2199.jpg",
    "/IMG_2253.jpg",
    "/IMG_2255.jpg",
    "/IMG_2254.jpg",
    "/IMG_2256.jpg",
  ];

  const slideLeft = useCallback(() => {
    slider.current.scrollLeft = slider.current.scrollLeft - 600;
    setClick(!click);
  }, [click]);
  const slideRight = useCallback(() => {
    slider.current.scrollLeft = slider.current.scrollLeft + 600;
    setClick(!click);
  }, [click]);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === profile_pic.length - 1 ? 0 : prevIndex + 1
      );
      slideRight();
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index, click]);

  return (
    <div className={style.trending}>
      <div className={style.container}>
        <div className={style.title_btns}>
          <h3></h3>
          <div className={style.btns}>
            <button title="scroll left" onClick={slideLeft}>
              <GoArrowLeft />
            </button>
            <button title="scroll right" onClick={slideRight}>
              <GoArrowRight />
            </button>
          </div>
        </div>
        <div className={style.row_container} ref={slider}>
          {profile_pic.map((pic, index) => (
            <div key={index} className={style.row_item}>
              <div className={style.item_header}>
                <Image
                  src={pic}
                  alt="Picture of the author"
                  width={650}
                  height={400}
                  quality={100}
                  sizes="100vw"
                  priority
                ></Image>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
