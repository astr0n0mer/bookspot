import { useRef, useState } from "react";

import BookCard from "../components/BookCard";
import BookDetails from "../components/BookDetails";
import InputForm from "../components/InputForm";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dialogRef = useRef(null);

  function handleBookCardClick(e) {
    const bookCard = e.target.closest("[data-canonical_isbn]");
    setSelectedBook(
      () =>
        books.filter(
          (book) => book.canonical_isbn === bookCard.dataset.canonical_isbn
        )[0]
    );
    dialogRef.current.showModal();
  }

  return (
    <>
      <InputForm
        setBooks={setBooks}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />

      <main className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
        {isLoading ? (
          <div>Searching for books...</div>
        ) : (
          books?.map((book) => (
            <BookCard
              key={book.canonical_isbn}
              book={{
                title: book.title,
                authors: book.authors,
                cover: book?.published_works[0]?.cover_art_url,
                summary: sliceText(book.summary),
              }}
              data-canonical_isbn={book.canonical_isbn}
              onClick={handleBookCardClick}
            />
          ))
        )}

        <dialog
          ref={dialogRef}
          className="mx-auto w-11/12 max-w-4xl rounded-lg shadow-xl"
        >
          {selectedBook && (
            <BookDetails book={selectedBook} dialogRef={dialogRef} />
          )}
        </dialog>
      </main>
    </>
  );
}

function sliceText(str, maxChars = 160) {
  str = str.slice(0, maxChars);
  if (str[-1] !== "") {
    str = str.slice(0, str.lastIndexOf(" ")) + "...";
  }
  return str;
}
