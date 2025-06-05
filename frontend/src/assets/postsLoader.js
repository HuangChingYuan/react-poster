export async function loader() {
  const response = await fetch("http://localhost:5000/posts");
  const resData = await response.json();
  return resData.posts;
}
