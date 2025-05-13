import { Route, createRoutesFromElements } from "react-router-dom";

const Router = createRoutesFromElements(
  <>
    <Route path="/*" lazy={() => import("./home")} />
  </>
);

export default Router;
