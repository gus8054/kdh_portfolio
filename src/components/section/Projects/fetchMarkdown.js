const fetchMarkdown = async (url) => {
  const res = await fetch(url);
  if (res.ok) {
    return res.text();
  }
  throw new Error(res.statusText);
};
export default fetchMarkdown;
