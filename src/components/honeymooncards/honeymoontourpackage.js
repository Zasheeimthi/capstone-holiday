import React, { useState } from "react";
import TotalCard from "../../components/totalcard"; // Ensure the import path is correct
import bali from "../../img/andaman/8.jpg";
import bali2 from "../../img/tour/365.jpg";
import maldives from "../../img/kashmir/12.jpg";
import kerala from "../../img/kerala/6.jpg";
import rajasthan from "../../img/Rajasthan/10.jpg";
import Contentbg from "../../components/contentbg";
import Sidebar from "../../components/sidebar";
import Pagination from "../../components/blogpagination"; // Your Pagination component
import bg1 from "../../img/tour/99.jpg";

const TourList = () => {
  const tours = [
    {
      imgSrc: bali,
      title: "Andaman Honeymoon Tour",
      rating: 4.7,
      price: "19,900",
      duration: "5 Days 4 Nights",
      detailPath: "/tour/anadaman-honeymoon-tour-packages",
    },
    {
      imgSrc: bali2,
      title: "Bali Honeymoon Tour",
      rating: 4.7,
      price: "21,000",
      duration: "5 Days 4 Nights",
      detailPath: "/tour/bali-honeymoon-tour-packages",
    },
    {
      imgSrc: maldives,
      title: "Kashmir Honeymoon Tour",
      rating: 4.7,
      price: "20,500",
      duration: "5 Days 4 Nights",
      detailPath: "/tour/kashmir-honeymoon-tour-packages",
    },
    {
      imgSrc: kerala,
      title: "Kerala Honeymoon Tour",
      rating: 4.7,
      price: "19,000",
      duration: "5 Days 4 Nights",
      detailPath: "/tour/kerala-honeymoon-tour-packages",
    },
    {
      imgSrc: rajasthan,
      title: "Rajasthan Honeymoon Tour",
      rating: 4.7,
      price: "17,500",
      duration: "5 Days 4 Nights",
      detailPath: "/tour/rajasthan-honeymoon-tour-packages",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const totalPages = Math.ceil(tours.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTours = tours.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Contentbg heading={"Honeymoon Tour Packages"} backgroundImage={bg1} />

      <section className="space">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              {currentTours.map((tour, index) => (
                <TotalCard key={index} {...tour} />
              ))}
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
            <div className="col-xxl-4 col-lg-5">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourList;
