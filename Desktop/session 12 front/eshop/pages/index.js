import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as repository from "../repository/FetchApiRepository";
import Context from "../ContextApi/Context";
import MainSlider from "../components/MainSlider";
import SevenIcons from "../components/SevenIcons";

export default function Home({ data, sevenIcons }) {
  return (
    <Context.Provider value={{ mainSliderImages: data }}>
      <MainSlider />
      <SevenIcons data={sevenIcons} />
    </Context.Provider>
  );
}

export async function getStaticProps(context) {
  const mainSliderImagesResponse = await repository.GET("public/mainSlider");
  const mainSliderImages = await mainSliderImagesResponse.json();

  const sevenIconsResponse = await repository.GET("SevenIcons");
  const sevenIcons = await sevenIconsResponse.json();

  return {
    props: {
      data: mainSliderImages,
      sevenIcons,
    },
    revalidate: 600,
  };
}
