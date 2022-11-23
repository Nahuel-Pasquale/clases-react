import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import { Route, Routes as ReactDomRoutes } from "react-router-dom"
import Section from "../pages/section/Section"
import Product from "../pages/productos/Product"
import Contacto from "../pages/contacto/Contacto";
import Login from "../pages/login/Login";
import Error404 from "../pages/error404/Error404";
import User from "../pages/user/User";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Routes() {
  const { isAuth } = useContext(AuthContext);

  return (
    <Layout>
      <ReactDomRoutes>
        <Route path="/" element={ <Home /> } />
        <Route path="/product">
          <Route index element={ <Product /> } />
          <Route path=":product" element={ <Section /> } />
        </Route>

        <Route path="contacto" element={ <Contacto /> } />

        {!isAuth && <Route path="login" element={<Login />} />}
        <Route 
          path="usuario/:usuario"
          element={
            <ProtectedRoute redirectTo='/login'>
              <User />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Error404 />} />
      </ReactDomRoutes>  
    </Layout>
  );
}

export default Routes;
