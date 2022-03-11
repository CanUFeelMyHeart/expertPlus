// import React, { useState, useMemo } from 'react';
// import { AboutClinicComponent as AboutClinic } from "../../components/AboutClinicComponent/AboutClinicComponent";
// import { ServicesComponent } from "../../components/ServicesComponent/ServicesComponent";
// import { ReviewsComponent } from "../../components/ReviewsComponent/ReviewsComponent";
// import { InformationComponent } from "../../components/InformationComponent/InformationComponent";
import Pagination from "../../components/Pagination/Pagination";
// export const NewsPage = () => {

//     let PageSize = 10;
//     const [currentPage, setCurrentPage] = useState(1);

//     return (
//         <>
//             <div>
//                 news
//                 <Pagination
//                     className="pagination-bar"
//                     currentPage={currentPage}
//                     totalCount={10}
//                     pageSize={PageSize}
//                     onPageChange={(page) => setCurrentPage(page)}
//                 />
//             </div>
//         </>
//     );
// };

import React, { useState, useMemo } from 'react';
import data from './data/mock-data.json';

let PageSize = 10;

export const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map(item => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}