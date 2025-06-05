import { Link } from "react-router-dom";
import { MdPostAdd, MdMessage } from "react-icons/md";

function MainHeader() {
  return (
    <header className="my-8 mx-[10%] px-4 py-4 text-center flex justify-between items-center border-b-2 border-[#ece1fa]">
      <h1 className="text-2xl flex items-center gap-6 text-[#ece1fa]">
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link
          to="/create-post"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#a990fb] text-[#2a2630] border-none rounded shadow-md cursor-pointer font-bold no-underline hover:bg-[#8c6cf7]"
        >
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
