export const getSortOptions = async () =>  {
  const res = await fetch("http://localhost:3001/sortOptions");

  if (!res.ok) throw new Error(res.statusText);

  return res.json();
}