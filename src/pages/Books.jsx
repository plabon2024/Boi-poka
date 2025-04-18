import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  const handleClick = () => {};
  
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Our Books Collection</h2>
          <div className="grid gap-6 container mx-auto  grid-cols-3">
            {books.map((book) => (
              <Link key={book.bookId} to={`/bookdetails/${book.bookId}`}>
                <div
                  
                  onClick={handleClick}
                  className="card  p-6 border border-slate-300 cursor-pointer"
                >
                  <div className="w-32 rounded mx-auto">
                    <img src={book.image} />
                  </div>
                  <h3 className="text-lg font-semibold">{book.bookName}</h3>
                  <p className="text-gray-600">by {book.author}</p>
                  <p className="mt-2">
                    {book.category},{" "}
                    {book.tags.map((tag, index) => (
                      <span key={index}>
                        {tag}
                        {index < book.tags.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                  {/* <button class="btn bg-[#FF9900] text-black border-[#e17d00 mx-auto">Add to cart</button> */}
                </div>
              </Link>
            ))}
          </div>
          <Link className="btn btn-secondary m-8" to={"/"}>
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Books;
