"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://bookify-server-tawny.vercel.app/books");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBooks(data.slice(0, 6)); // Limit to maximum 6 items
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBooks();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {books.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
        <h2 className="text-xl text-center">Total Books: {books.length}</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {books.map((book) => (
              <div
                key={book.id}
                className="max-w-sm rounded overflow-hidden shadow-lg bg-white border "
              >
                <div className="px-6 py-4">
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-xl mb-2">{book.title}</div>
                    <div className="text-blue-700 text-sm">
                      <Link href={`/book/${book._id}`}>
                        <button className="">See Details</button>
                      </Link>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base mb-2">
                    Author: {book.author}
                  </p>
                  <p className="text-gray-900 font-bold text-lg">
                    Price: ${book.publication_year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
