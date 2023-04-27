import React from "react";
import { useContext } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Context from "../ContextApi/Context";
import ReactImageGallery from "react-image-gallery";

const MainSlider = () => {
  let { mainSliderImages } = useContext(Context);
  return (
    <div>
      <ReactImageGallery
        key={mainSliderImages.id}
        id={mainSliderImages.id}
        autoPlay={true}
        showPlayButton={false}
        showFullscreenButton={false}
        items={mainSliderImages}
        isRTL={true}
        lazyLoad={true}
        slideInterval={3000}
        onClick={(e) => {
          alert(e.target);
        }}
      />
    </div>
  );
};

export default MainSlider;
