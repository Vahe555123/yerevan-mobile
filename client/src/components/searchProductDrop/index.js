import React, { useEffect, useState } from "react";
import { FilterSearchIcon, FilterSearchInput, FilterSerachDiv, Img, LinkTo, ProductInfoDiv, RamkaSigns, SearchProductDiv } from "./styled";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

import { useTranslation } from "react-i18next";
export const SearchProductsDrop = () => {
  const [openSearchDiv, setOpenSearchDiv] = useState(false);
  const [value, setValue] = useState('');
  const [products, setProducts] = useState([]);
  const { t } = useTranslation()
  useEffect(() => {
    if (value === "") {
      setOpenSearchDiv(false);
    } else {
      setOpenSearchDiv(true);
    }
  }, [value]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')))
    fetchProducts(value);

  }, []);


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
    setValue('')
  }
  const lang = localStorage.getItem('lang')
  return (
    <>
      {openSearchDiv && <RamkaSigns onClick={closeSearch} />}

      <FilterSerachDiv>

        <FilterSearchInput onChange={(e) => setValue(e.target.value)} value={value} />
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
