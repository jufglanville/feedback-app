export const getUser = async () =>  {
  const res = await fetch("http://localhost:3001/currentUser");

  if (!res.ok) throw new Error(res.statusText);

  return res.json();
}