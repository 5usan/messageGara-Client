import routes from "./routes/routes";
import styles from "./App.module.scss";
import React, { useEffect } from "react";
import { IRoutes } from "./routes/IRoutes";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Routes>
          {GenerateRoutes(routes)}
          <Route
            key={"mainRoute"}
            path="*"
            element={<ErrorPageHandler />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const GenerateRoutes = (routes: IRoutes[]) => {
  return (
    <>
      {routes.map((eachRoute, index) => {
        return (
          <Route
            key={index}
            path={eachRoute.path}
            element={<eachRoute.element />}
          ></Route>
        );
      })}
    </>
  );
};

const ErrorPageHandler = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  });

  return <></>;
};

export default App;
