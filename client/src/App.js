import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact, HomePage, ShopPage, LoginPage, RegisterPage, PhonePage, ProductDivPage, AdminPage, ApplePage, SamsoungPage, ProfilePage, ComparePage,BasketPage,XiaomiPage } from "./containers/routes";
import { GlobalStyle } from "./globalStyle"
import { ProductPage } from "./containers/productPage";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locals/en/translation.json";
import translationRU from "./locals/ru/translation.json";
import translationAM from "./locals/am/translation.json";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { ForgotPassword } from "./containers/forgotPassword/script";
import { ResetPassword } from "./containers/resetPassword";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
    am: {
      translation: translationAM,
    },
  },
  lng: localStorage.getItem("lang") || "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

function App() {

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(`http://localhost:3001/profile?token=${localStorage.getItem("token")}`)
        if(!req.ok){
          localStorage.removeItem("token")
        }
        
      } catch (error) {
        console.log(error);
      }
    }
    getData()
    if (!localStorage.getItem("compare")) {
      localStorage.setItem("compare", JSON.stringify([]))
    }
  }, [])
  const pages = [
    { path: "/", component: <HomePage /> },
    { path: "/contact", component: <Contact /> },
    { path: "/shop", component: <ShopPage /> },
    { path: "/product/:i", component: <ProductPage /> },
    { path: "/login", component: <LoginPage /> },
    { path: "/register", component: <RegisterPage /> },
    { path: "/phones", component: <PhonePage /> },
    { path: "/productspage", component: <ProductDivPage /> },
    { path: "/adminpage", component: <AdminPage /> },
    { path: "/phones/apple", component: <ApplePage /> },
    { path: "/phones/samsoung", component: <SamsoungPage /> },
    { path: "/phones/xiaomi", component: <XiaomiPage /> },
    { path: "/profile", component: <ProfilePage /> },
    { path: "/compare", component: <ComparePage /> },
    { path: "/basket", component: <BasketPage /> },
    { path: "/forgot", component: <ForgotPassword /> },
    { path: "/reset-password/:token", component: <ResetPassword /> },
    
  ];

  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        zIndex={9999999999}
        style={{top:"100px"}}
      />
      <GlobalStyle />
      <Header />
      <Routes>
        {pages.map((e, i) => (
          <Route key={i} path={e.path} element={e.component} />
        ))}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
