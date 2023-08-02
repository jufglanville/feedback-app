export const getAllFeedback = async () => {
  const res = await fetch("http://localhost:3001/productRequests");

  if (!res.ok) throw new Error(res.statusText);

  return res.json();
};
