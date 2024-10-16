import React, { useState } from "react";
import TotalCard from "../../components/totalcard"; // Ensure the import path is correct
import bali from "../../img/tour/12.jpg";
import bali2 from "../../img/tour/34.jpg";
import maldives from "../../img/bg/7.jpg";
import dubai from "../../img/Dubai/d4.jpg";
import thailand from "../../img/Thailand/895.jpg";
import turkey from "../../img/Turkey/313.jpg";
import mauritius from "../../img/mauritius/4224.jpg";
import singapore from "../../img/singapore/s5.jpg";
import vietnam from "../../img/vietnam/8.jpg";
import srilanka from "../../img/srilanka/travels-3758193_1920.jpg";
import Contentbg from "../../components/contentbg";
import Sidebar from "../../components/sidebar";
import Pagination from "../../components/blogpagination"; // Your Pagination component
import bg1 from "../../img/tour/emirates.jpg";

const TourList = () => {
  // The array of tour items
  const tours = [
    {
      imgSrc: bali,
      title: "Bali Tour Packages from Chennai",
      rating: 4.7,
      price: "20,825",
      duration: "6 Days 5 Nights",
      detailPath: "/tour/bali-tour-packages-from-chennai",
    },
    {
      imgSrc: bali2,
      title: "Bali Tourist Places",
      rating: 4.7,
      price: "6,800",
      duration: "3 Days 2 Nights (BALI)",
      detailPath: "/tour/bali-tour-places",
    },
    {
      imgSrc: maldives,
      title: "Maldives Tour Package from Chennai",
      rating: 4.7,
      price: "96,390",
      duration: "4 Days 5 Nights",
      detailPath: "/tour/maldives-tour-package-from-chennai",
    },
    {
      imgSrc: dubai,
      title: "Dubai Tour Packages from Chennai",
      rating: 4.7,
      price: "43,350",
      duration: "4 Nights, 5 Days",
      detailPath: "/tour/dubai-tour-packages-from-chennai",
    },
    {
      imgSrc: thailand,
      title: "Thailand Tour Package from Chennai 4N / 5D",
      rating: 4.7,
      price: "15,130",
      duration: "4 Nights, 5 Days",
      detailPath: "/tour/thailand-tour-package-from-chennai",
    },
    {
      imgSrc: turkey,
      title: "Turkey Tour Packages from India – 4N / 5D",
      rating: 4.7,
      price: "25,075",
      duration: "4 Nights, 5 Days",
      detailPath: '/tour/mauritius-tour-package-from-chennai',
    },
    {
      imgSrc: mauritius,
      title: "Mauritius Tour Package from Chennai",
      rating: 4.7,
      price: "135,320",
      duration: "4 Nights, 5 Days",
      detailPath: '/tour/turkey-tour-packages-from-india',
    },
    {
      imgSrc: singapore,
      title: "Singapore and Malaysia Tour Packages",
      rating: 4.7,
      price: "38,250",
      duration: "4 Nights, 5 Days",
      detailPath: '/tour/singapore-and-malaysia-tour-packages',
    },
    {
      imgSrc: vietnam,
      title: "Vietnam Cambodia Tour Package – 3N / 4D",
      rating: 4.7,
      price: "20,400",
      duration: "3 Nights, 4 Days",
      detailPath: '/tour/vietnam-cambodia-tour-package',
    },
    {
      imgSrc: srilanka,
      title: "Sri Lanka Tour Package from Chennai 4N/5D",
      rating: 4.7,
      price: "25,415",
      duration: "4 Nights, 5 Days",
      detailPath: '/tour/srilanka-tour-package-from-chennai',
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of items to show per page

  // Calculate total pages
  const totalPages = Math.ceil(tours.length / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTours = tours.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Contentbg heading={"International Tour Packages"} backgroundImage={bg1}/>

      <section className="space">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              {currentTours.map((tour, index) => (
                <TotalCard key={index} {...tour} />
              ))}
              {/* Pagination component */}
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
