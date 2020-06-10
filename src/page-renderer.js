import React from "react";
import { useRouteMatch } from "react-router";

const generatePage = (page) => {
  const component = () => require(`./pages/${page}`).default;

  try {
    return React.createElement(component());
  } catch (err) {
    console.warn(err);
    return React.createElement(() => 404);
  }
};
const PageRenderer = () => {
  const {
    params: { page },
  } = useRouteMatch();

  return generatePage(page);
};

export default PageRenderer;
