export const getAllRoadmapOptions = async () => {
  const res = await fetch("http://localhost:3001/roadmapOptions");

  if (!res.ok) throw new Error(res.statusText);

  return res.json();
};
