export async function loader({ params }) {
  const response = await fetch("http://localhost:5000/posts/" + params.postId);
  const resData = await response.json();
  return resData.post;
}
