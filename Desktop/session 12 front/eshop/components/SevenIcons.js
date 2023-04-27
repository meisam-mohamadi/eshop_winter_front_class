import Image from "next/image";
import React from "react";
import styles from "./SevenIcons.module.css";
import Link from "next/link";

const SevenIcons = (props) => {
  return (
    <div className={`${styles.outerContainer}`}>
      {props.data.map((item) => {
        return (
          <Link href={`products/category/${item.url}`}>
            <div className={`${styles.itemContainer}`}>
              <Image src={`/images/${item.iconName}`} height={50} width={50} />
              <label className={`${styles.label}`}>{item.label}</label>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SevenIcons;
