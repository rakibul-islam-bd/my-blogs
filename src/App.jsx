/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Blogs/Navbar/Navbar";
import Blogs from "./components/Blogs/Blogs";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked, blog]);
  };

  const handleMarkAsRead = (time, id) => {
    setReadingCount(readingCount + time);
    handleRemoveFromBookmark(id);
  };

  const handleRemoveFromBookmark = (id) => {
    const remainingBookmark = bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(remainingBookmark);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        </div>

        <div className="right-container w-[30%]">
          <h1>Reading Time: { readingCount} </h1>
          <h1>Bookmarked count: { bookmarked.length}</h1>
          {bookmarked.map((marked) => (
            <p key={marked.id} className="bg-slate-700 p-2 shadow m-2">
              {marked.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
