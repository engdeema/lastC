import React from "react";
import sweetStore from "../Store/sweetStore";
import { observer } from "mobx-react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
const SweetDetail = () => {
  // const { sweetSlug } = useParams();
  // if (sweetStore.isLoading) return <p>Loading</p>;
  // const sweet = sweetStore.sweets.find((sweet) => sweet.slug === sweetSlug);
  // if (!sweet) return <Navigate to="/SweetList" />;

  return <div></div>;
};

export default observer(SweetDetail);
