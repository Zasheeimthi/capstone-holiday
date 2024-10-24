import React from "react";
import TotalCard from "../../components/totalcard"; // Ensure the import path is correct
import bali from "../../img/andaman/8.jpg";
import bali2 from "../../img/andaman/3.jpg";
import goa1 from "../../img/goa/2.jpg";
import goa2 from "../../img/goa/9.jpg";
import him1 from "../../img/Himachal/14.jpg";
import him2 from "../../img/Himachal/8.jpg";
import kerala from "../../img/kerala/5.jpg";
import munnar from "../../img/kerala/2.jpg";
import kashmir from "../../img/kashmir/6.jpg";
import Srinagar from "../../img/srilanka/6.jpg";
import agra from "../../img/sikkim/3.jpg";
import rajasthan from "../../img/Rajasthan/7.jpg";
import darjeeling from "../../img/tour/835.jpg";
import sikkim from "../../img/sikkim/12.jpg";
import Contentbg from "../../components/contentbg";
import Sidebar from "../../components/sidebar";
import bg1 from "../../img/bg/87.jpg";
import { Helmet } from "react-helmet";

const TourList = () => {
  // The array of tour items
  const tours = [
    {
      imgSrc: bali,
      title: "Andaman Tour Package",
      price: "9,435",
      duration: "4 Days 5 Nights",
      detailPath: "/tour/andaman-tour-package-from-chennai",
    },
    {
      imgSrc: bali2,
      title: "Andaman and Nicobar Islands Package",
      price: "8,245",
      duration: "3 Nights, 4 Days",
      detailPath: "/tour/andaman-and-nicobar-islands-package",
    },
    {
      imgSrc: goa1,
      title: "Goa Tour Package",
      price: "12,325",
      duration: "4 Days 3 Nights",
      detailPath: "/tour/goa-tour-package-from-chennai",
    },
    {
      imgSrc: goa2,
      title: "Goa Travel packages",
      price: "8,245",
      duration: "3 Days, 2 Nights",
      detailPath: "/tour/goa-travel-packages",
    },
    {
      imgSrc: him1,
      title: "Himachal – Shimla Manali Tour Package from Chennai",
      price: "10,540",
      duration: "6 Days 5 Nights",
      detailPath: "/tour/shimla-manali-tour-package-from-chennai",
    },
    {
      imgSrc: him2,
      title: "Himachal Tour Package",
      price: "7,735",
      duration: "6 Days, 5 Nights",
      detailPath: "/tour/himachal-tour-package",
    },
    {
      imgSrc: kerala,
      title: "Kerala Tour Packages",
      price: "10,370",
      duration: "4 Days 3 Nights",
      detailPath: "/tour/kerala-tour-packages-from-chennai",
    },
    {
      imgSrc: munnar,
      title: "Cochin Munnar Tour Package",
      price: "6,970",
      duration: "4 Days, 3 Nights",
      detailPath: "/tour/munnar-tour-package",
    },
    {
      imgSrc: kashmir,
      title: "Kashmir Tour Packages",
      price: "14,450",
      duration: "7 Days 6 Nights",
      detailPath: "/tour/kashmir-tour-packages-from-chennai",
    },
    {
      imgSrc: Srinagar,
      title: "Srinagar Gulmarg Pahalgam Tour Packages",
      price: "11,305",
      duration: "5 Days, 4 Nights",
      detailPath: "/tour/srinagar-tour-packages",
    },
    {
      imgSrc: agra,
      title: "Delhi Agra Jaipur Tour Package",
      price: "14,450",
      duration: "5 Days 4 Nights",
      detailPath: "/tour/delhi-agra-jaipur-tour-package",
    },
    {
      imgSrc: rajasthan,
      title: "Rajasthan Trip package",
      price: "8,075",
      duration: "4 Days, 3 Nights",
      detailPath: "/tour/rajasthan-trip-package",
    },
    {
      imgSrc: darjeeling,
      title: "Darjeeling Gangtok Tour Packages",
      price: "25,800",
      duration: "5 Days 4 Nights",
      detailPath: "/tour/darjeeling-gangtok-tour-packages",
    },
    {
      imgSrc: sikkim,
      title: "Sikkim Travel Packages",
      price: "24,200",
      duration: "4 Days, 3 Nights",
      detailPath: "/tour/sikkim-travel-packages",
    },
  ];

  const seoData = {
    title: "Domestic Tour Packages from Chennai | Coimbatore",
    keywords:
      "domestic tour packages from chennai, domestic tour packages in india, domestic tour packages, domestic tour",
    description:
      "With our Domestic tour packages from Chennai, you will visit every part of Incredible India in a personalized manner while taking all the safety steps.",
    schema: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Capstone Holidays",
      url: "https://www.capstoneholidays.in/domestic-tour-packages-from-chennai/",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.capstoneholidays.in/domestic-tour-packages-from-chennai/{search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <script type="application/ld+json">
          {JSON.stringify(seoData.schema)}
        </script>
      </Helmet>
      <Contentbg heading={"Domestic Tour Packages"} backgroundImage={bg1} />

      <section className="space">
        <div className="container">
          <div className="row">
            {tours.map((tour, index) => (
              <div className="col-md-4" key={index}>
                <TotalCard {...tour} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TourList;
