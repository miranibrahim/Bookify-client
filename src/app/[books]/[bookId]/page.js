import { getSingleBook } from "@/utils/getSingleBook";
import Image from "next/image";

const BookDetailPage = async ({ params }) => {
  const book = await getSingleBook(params.bookId);
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-10">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className=" w-full object-cover md:w-48"
            src={book.cover_image}
            width={20}
            height={20}
            alt="Book Cover"
          />
        </div>
        <div className="p-8">
          <div className="block mt-1 text-lg leading-tight font-medium text-black">
            {book.title}
          </div>
          <p className="mt-2 text-gray-500">{book.author}</p>
          <p className="mt-2 text-gray-500">
            Publication Year: {book.publication_year}
          </p>
          <p className="mt-2 text-gray-800">{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
