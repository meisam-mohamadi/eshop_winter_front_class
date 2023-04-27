import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./TopBanner.module.css";
import * as axiosRepository from "../repository/AxiosRepository";
const TopBanner = () => {
  const [topBannerData, setTopBannerData] = useState({});

  useEffect(() => {
    axiosRepository
      .GET("topBanner")
      .then((response) => setTopBannerData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={`${styles.outerContainer}`}>
      <Image
        className={`${styles.bannerImage}`}
        fill
        alt="my shop"
        src={topBannerData.imageUrl}
      />
    </div>
  );
};

export default TopBanner;
