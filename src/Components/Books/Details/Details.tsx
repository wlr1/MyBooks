import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import fetchImage from "../../../assets/images/fetchError.jpg";

const Details: React.FC = () => {
  //removing html tags from description
  const removeHtmlTags = (htmlString: string) => {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  };

  const { id } = useParams();
  const [bookDetails, setBookDetails] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        setBookDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!bookDetails) {
    return <div>No book details available</div>;
  }

  const description = removeHtmlTags(bookDetails.volumeInfo.description);

  const authorsArr = bookDetails.volumeInfo.authors;
  const formattedAuthors = authorsArr.join(", ");

  return (
    <div>
      <div className="flex justify-center">
        <img
          className="w-56"
          src={
            bookDetails.volumeInfo.imageLinks
              ? bookDetails.volumeInfo.imageLinks.thumbnail
              : fetchImage
          }
          alt=""
        />
      </div>
      <div className="text-center mt-6 mb-6">
        <h2 className="font-lato text-purple-drk">
          Title: {bookDetails.volumeInfo.title}
        </h2>
        <h2 className="font-lato text-purple-drk">
          Authors: {formattedAuthors}
        </h2>
        <span>Pages: {bookDetails.volumeInfo.pageCount}</span>
      </div>
      <div className="w-10/12  m-auto text-center font-lato text-xl text-purple-drk">
        {description}
      </div>
      <div className="grid gap-2 grid-cols-3 text-center mt-16">
        <Link to="/">
          <button className="py-3 px-40 rounded-md border border-transparent font-semibold bg-purple-drk text-white font-lato focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 transition-all text-m  dark:focus:ring-offset-gray-800">
            Home
          </button>
        </Link>
        <Link to={bookDetails.volumeInfo.previewLink} target="_blank">
          <button className="py-3 px-40 rounded-md border border-transparent font-semibold bg-purple-drk text-white font-lato focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 transition-all text-m  dark:focus:ring-offset-gray-800">
            Preview
          </button>
        </Link>
        <Link to={bookDetails.volumeInfo.infoLink} target="_blank">
          <button className="py-3 px-40 rounded-md border border-transparent font-semibold bg-purple-drk text-white font-lato  focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 transition-all text-m dark:focus:ring-offset-gray-800">
            Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
