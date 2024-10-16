import React from "react";
import BlogList from "../components/blogList";
import Pagination from "../components/blogpagination";
import ContentSection from "../components/contentbg";
import Sidebar from "../components/sidebar";
import blogbg from "../assets/blogsimg/city-4864747_1920.jpg";


const BlogPage = () => {
  return (
    <>
     <ContentSection heading={"Blogs"} children={""} backgroundImage={blogbg} />
      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-lg-12">
            {/* <h3 className="blog-title" style={{textAlign:"center"}}>TourPackages Blogs</h3> */}
              <BlogList />
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
   
  );
};

export default BlogPage;
