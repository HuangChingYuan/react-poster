import { useLoaderData, Link } from "react-router-dom";

import Modal from "../components/Modal";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className="p-4 w-[30rem]">
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className="no-underline">
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className="p-4 w-[30rem]">
        <p className="text-xs font-bold text-[#543280] m-0 uppercase">
          {post.author}
        </p>
        <p className="whitespace-pre-wrap text-xl mt-1 text-[#593884] italic">
          {post.body}
        </p>
      </main>
    </Modal>
  );
}

export default PostDetails;
