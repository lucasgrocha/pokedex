import React from "react";
import { Layout } from "./styles";

interface Props {}

const PagesLayout: React.FC<Props> = (props) => {
  return <Layout>{props.children}</Layout>;
};

export default PagesLayout;
