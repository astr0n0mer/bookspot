export const navigationMenu = ["Home", "About", "Contact", "Login"];

export async function getBookList(title = "") {
  const url = `https://book-finder1.p.rapidapi.com/api/search?page=1&results_per_page=30&title=${title}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_BOOK_FINDER_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
    },
  };

  const result = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((e) => console.error(e));
  return result;
}
