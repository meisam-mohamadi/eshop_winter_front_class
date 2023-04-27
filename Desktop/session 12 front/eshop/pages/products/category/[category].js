import { useRouter } from "next/router";
import React from "react";
import * as axiosRepository from "../../../repository/AxiosRepository";
import Card from "../../../components/Card";
import styles from "./[category].module.css";

const category = ({ data }) => {
  console.log(data);
  return (
    <div className={`${styles.outerContainer}`}>
      {data.map((item) => {
        return <Card product={item} />;
      })}
    </div>
  );
};

export default category;

export async function getServerSideProps(context) {
  //  console.log(context.params.category);
  let data = [];
  await axiosRepository
    .GET(`products/${context.params.category}`)
    .then((response) => {
      //console.log(response);
      data = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  if (data.length > 0) {
    return {
      props: { data },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
