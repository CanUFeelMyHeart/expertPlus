import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import { InformationContainerComponent } from "../../components/InformationContainerComponent/InformationContainerComponent";
import data from "./data/news-data.json";
import "./NewsPage.css";

let PageSize = 6;

export const NewsPage = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const navigate = useNavigate();

   const currentNewsData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return data.slice(firstPageIndex, lastPageIndex);
   }, [currentPage]);

   function handleClick(ref) {
      navigate(ref);
   }

   return (
      <div className="newsPageComponent">
         <div className="container">
            <InformationContainerComponent header="Новости">
               {currentNewsData.map((singleNew, index) => (
                  <div className="newsPage__new_component">
                     <button
                        onClick={(e) => handleClick(singleNew.ref)}
                        className="newsPage__new_header"
                     >
                        {singleNew.header}
                     </button>
                     <h3 className="newsPage__new_description">
                        {singleNew.description}
                     </h3>
                  </div>
               ))}
               <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={data.length}
                  pageSize={PageSize}
                  onPageChange={(page) => setCurrentPage(page)}
               />
            </InformationContainerComponent>
         </div>
      </div>
   );
};
