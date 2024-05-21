export const getAllBooks = async () => {
    const res = await fetch(
      "https://bookify-server-tawny.vercel.app/books",
      {
        next: {
          revalidate: 30,
        },
      }
    );
    return res.json();
  };
  