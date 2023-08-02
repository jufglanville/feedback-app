export const getAllCategories = async () => {
  const res = await fetch("http://localhost:3001/categories");

  if (!res.ok) throw new Error(res.statusText);

  return res.json();
};