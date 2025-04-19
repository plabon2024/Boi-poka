import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(stored);
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {bookmarks.length === 0 ? (
        <p className="text-slate-500">No books bookmarked yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-2">
          {bookmarks.map((book) => (
            <div
              key={book.bookId}
              className="bg-white rounded shadow hover:shadow-md transition flex p-5"
            >
              <div className="px-2">
                <img
                  src={book.image}
                  alt={book.bookName}
                  className="w-20 p-5 bg-slate-300 object-cover rounded"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold mt-2">{book.bookName}</h2>
                <p className="text-sm text-gray-600">By {book.author}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Category: {book.category}
                </p>
                <p className="text-sm mt-2">{book.review.slice(0, 80)}...</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
