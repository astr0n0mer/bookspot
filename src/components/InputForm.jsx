import { useEffect } from "react";
import { getBookList } from "../utils/data";

import { AiOutlineSearch } from "react-icons/ai";

export default function InputForm({ setBooks, isLoading, setIsLoading }) {
  function handleFormSubmit(e) {
    e.preventDefault();
    fetchBooks(e.target.elements.title.value);
  }

  function fetchBooks(title) {
    setIsLoading(true);
    getBookList(title).then((fetchedBooks) => {
      setBooks(() => fetchedBooks);
      setIsLoading(false);
    });
  }

  useEffect(() => fetchBooks("artificial intelligence"), []);

  return (
    <form
      className="sticky top-0 z-10 mx-auto mb-6 flex max-w-5xl gap-8 backdrop-blur sm:text-lg"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        className="flex-1 rounded-lg px-4 py-2 shadow-md"
        placeholder="Search books by title..."
        name="title"
        required
        minLength="2"
        accessKey="s"
        title="Shortcut: Alt + S"
        onFocus={(e) => e.target.select()}
      />
      <button
        type="submit"
        className="rounded-lg px-6 py-2 shadow-md disabled:bg-gray-200"
        disabled={isLoading}
      >
        <AiOutlineSearch style={{ fontSize: "1.5rem" }} />
      </button>
    </form>
  );
}
