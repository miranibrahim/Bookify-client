export const getSingleBook = async (id) => {
  const res = await fetch(`https://bookify-server-tawny.vercel.app/books/${id}`, {
    cache: "no-store",
  });
  return res.json();
};
