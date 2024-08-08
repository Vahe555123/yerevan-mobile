// import React, { useEffect, useState } from "react";
// import { FilterSearchIcon, FilterSearchInput, FilterSerachDiv, Img, LinkTo, ProductInfoDiv, RamkaSigns, SearchProductDiv } from "./styled";
// import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// export const SearchProducts = () => {
//   const [openSearchDiv, setOpenSearchDiv] = useState(false);
//   const [value, setValue] = useState('');
//   const [products, setProducts] = useState([]);
//   const { t } = useTranslation()
//   useEffect(() => {
//     if (value === "") {
//       setOpenSearchDiv(false);
//     } else {
//       setOpenSearchDiv(true);
//     }
//   }, [value]);

//   useEffect(() => {
//     setProducts(JSON.parse(localStorage.getItem('products')))
//   }, []);

//   const closeSearch = () => {
//     setValue('')
//   }
//   const lang = localStorage.getItem('lang')
//   return (
//     <>
//       {openSearchDiv && <RamkaSigns onClick={closeSearch} />}

//       <FilterSerachDiv>

//         <FilterSearchInput onChange={(e) => setValue(e.target.value)} value={value} />
//         <FilterSearchIcon>
//         <FaSearch className="searchIcon" />
//         </FilterSearchIcon>
//         {openSearchDiv && (
//           <ProductInfoDiv>
//             {products
//               .filter((e) => e.name.toLowerCase().includes(value.toLowerCase()))
//               .map((e, i) => (
//                 <LinkTo key={i} to={`/shop/product/id/${e._id}`} onClick={closeSearch}>
//                   <SearchProductDiv>
//                     <p>{e.name}</p>
//                     {/* <Img src={`http://localhost:3002/uploads/${e.img}`} alt={e.title} /> */}
//                     <p>{t('Цена')} - {e.price}֏</p>

//                   </SearchProductDiv>
//                 </LinkTo>
//               ))}
//             <p>{t('Продукт больше нет')}</p>

//           </ProductInfoDiv>
//         )}
//       </FilterSerachDiv>
//     </>
//   );
// };




// SearchProducts.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FilterSerachDiv,
  FilterSearchIcon,
  FilterSearchInput,
  Img,
  LinkTo,
  ProductInfoDiv,
  RamkaSigns,
  SearchProductDiv,
} from "./styled";

export const SearchProducts = () => {
  const [openSearchDiv, setOpenSearchDiv] = useState(false);
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (value === "") {
      setOpenSearchDiv(false);
    } else {
      setOpenSearchDiv(true);
      fetchProducts(value);
    }
  }, [value]);

  const fetchProducts = async (searchTerm) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/search",
        {
          searchTerm: searchTerm,
        }
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  const closeSearch = () => {
    setValue("");
    setOpenSearchDiv(false);
  };
  return (
    <>
      {openSearchDiv && <RamkaSigns onClick={closeSearch} />}

      <FilterSerachDiv>
        <FilterSearchInput
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <FilterSearchIcon>
          <FaSearch className="searchIcon" />
        </FilterSearchIcon>
        {openSearchDiv && (
          <ProductInfoDiv>
            {products.length > 0 ? (
              products.map((e, i) => (
                <LinkTo
                  key={i}
                  to={`/product/${e._id}`}
                  onClick={closeSearch}
                >
                  <SearchProductDiv>
                    <p>{e.name}</p>
                    <Img src={`http://localhost:3001/uploads/${e.img}`} alt={e.title} />
                    <p>
                      {t("Цена")} - {e.price}֏
                    </p>
                  </SearchProductDiv>
                </LinkTo>
              ))
            ) : (
              <p>{t("Продукт больше нет")}</p>
            )}
          </ProductInfoDiv>
        )}
      </FilterSerachDiv>
    </>
  );
};


