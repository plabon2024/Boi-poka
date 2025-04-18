import React from "react";
import { useLoaderData, useParams } from "react-router";

const Bookdetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    bookName,
    image,
    category,
    publisher,
    yearOfPublishing,
    totalPages,
    author,
    review,
    rating,
  } = singleBook || {};
  console.log(singleBook);
  return (
    <>
      <div className="container mx-auto my-36">
        <div className="flex">
          <div className="rounded bg-slate-200 p-20">
            <img className="w-48" src={image} alt={bookName} />
          </div>
          <div className="p-5">
            <h2 className="font-bold text-2xl py-5">{bookName}</h2>
            <h3 className="font-semibold py-2">By:{author}</h3>
            <div className="border-t-[0.5px] border-dashed w-3/5"></div>
            <h3 className="font-semibold py-2">{category}</h3>
            <div className="border-t-[0.5px] border-dashed w-3/5"></div>
            <h3 className="p-2 w-3/5 ">
              <span className="font-bold">Review:</span>
              {review}
            </h3>
            <h3 className="p-2 w-3/5">
              <span className="font-bold">Tag: </span>
              {singleBook.tags.map((tag, index) => (
                <span key={index}>
                  {tag}
                  {index < singleBook.tags.length - 1 ? ", " : ""}
                </span>
              ))}
            </h3>
            <div className="border-t border-slate-600 w-3/5"></div>

            <table className="w-1/3">
              <tbody>
                <tr>
                  <td className="pt-2 font-bold text-slate-500">
                    Number of Pages:
                  </td>
                  <td>{totalPages}</td>
                </tr>
                <tr>
                  <td className="pt-2 font-bold text-slate-500">Publisher:</td>
                  <td>{publisher}</td>
                </tr>
                <tr>
                  <td className="pt-2 font-bold text-slate-500">
                    Year of Publishing:
                  </td>
                  <td>{yearOfPublishing}</td>
                </tr>
                <tr>
                  <td className="pt-2 font-bold text-slate-500">Rating:</td>
                  <td>{rating}</td>
                </tr>
              </tbody>
            </table>
            <div className="pt-5">
              <button className="btn bg-white text-black border-[#e5e5e5]">
                Mark as read
              </button>
              <button className="btn mx-3 bg-[#FF9900] text-black border-[#e17d00]">
                Add to Bookmark
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookdetails;
