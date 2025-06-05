import { Link } from "react-router-dom";

function Post({ id, author, body }) {
  return (
    <li className="my-4 p-4 bg-[#9c7eee] rounded-lg shadow-md animate-in">
      <Link to={id} className="no-underline">
        <p className="text-[0.8rem] font-bold text-[#543280] uppercase m-0">
          {author}
        </p>
        <p className="whitespace-pre-wrap text-xl text-[#593884] italic mt-1 mb-0">
          {body}
        </p>
      </Link>
    </li>
  );
}

export default Post;
