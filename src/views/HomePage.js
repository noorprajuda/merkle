import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/users");
      setPosts(res.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container mt-30 mb-30 pt-11 ml-10 my-30">
        {/* <Navbar /> */}
        <div className="mt-30 mb-30 pt-30 pb-30">
          <h1 className="mt-30 text-4xl mb-3 font-bold">Users List</h1>
          {/* {JSON.stringify(posts, null, 2)} */}
          <div className="ml-10">
            <div className="grid grid-cols-4 gap-4 mr-20 ml-20">
              <Posts posts={currentPosts} loading={loading} />
            </div>
            <div className="flex-row flex row">
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default HomePage;
