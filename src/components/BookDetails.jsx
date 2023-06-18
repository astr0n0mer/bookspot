import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

function getAmazonSearchUrl(isbn) {
  return isbn ? `https://www.amazon.com/s?i=stripbooks&rh=p_66:${isbn}` : null;
}

export default function BookDetails({ book, dialogRef }) {
  return (
    <figure className="relative grid place-items-center gap-4 pt-3 sm:m-3 sm:grid-cols-[2fr_3fr] sm:p-0 ">
      <button
        className="absolute right-0 top-0 sm:-translate-y-2/3 sm:translate-x-2/3"
        onClick={() => dialogRef.current.close()}
      >
        <AiOutlineCloseCircle style={{ fontSize: "1.5rem" }} />
      </button>

      <div className="overflow-hidden rounded-xl shadow-lg">
        <img
          src={book?.published_works[0]?.cover_art_url}
          alt={book.title}
          className="max-h-[50vh] object-cover"
        />
      </div>

      <figcaption>
        <h3 className="text-lg font-semibold sm:text-xl md:text-2xl">
          {book.title}
        </h3>

        <div className="my-1 text-sm">{book.authors.join(", ")}</div>

        <div className="my-4 flex flex-col items-start gap-2">
          <p className="text-justify text-sm md:text-base">
            <span className="font-semibold">Description: </span>
            {book.summary}
          </p>

          <p>
            <span className="font-semibold">Categories: </span>
            {book?.categories.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Copyright: </span>
            <span>{book.copyright}</span>
          </p>
          <p>
            <span className="font-semibold">Language: </span>
            <span className="capitalize">{book.language}</span>
          </p>

          <Link
            to={getAmazonSearchUrl(book.canonical_isbn)}
            target="_blank"
            className="mx-auto mt-4 inline-flex items-center gap-3 rounded-lg border px-6 py-2 shadow-md transition hover:shadow-lg sm:mx-0"
          >
            Buy Now <FiExternalLink />
          </Link>
        </div>
      </figcaption>
    </figure>
  );
}
