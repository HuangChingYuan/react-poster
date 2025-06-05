import { Link, Form } from "react-router-dom";

import Modal from "../components/Modal";

function NewPost() {
  return (
    <Modal>
      <Form method="post" className="bg-[#6233b9] p-4 w-80">
        <p>
          <label
            htmlFor="body"
            className="block mb-[0.05rem] text-[#eadbfb] font-bold"
          >
            Text
          </label>
          <textarea
            id="body"
            name="body"
            required
            rows={3}
            className="block w-full font-inherit p-2 rounded-md border-none bg-[#c4a9e4] text-[#28262c]"
          />
        </p>
        <p>
          <label
            htmlFor="name"
            className="block mb-[0.05rem] text-[#eadbfb] font-bold"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="author"
            required
            className="block w-full font-inherit p-2 rounded-md border-none bg-[#c4a9e4] text-[#28262c]"
          />
        </p>
        <p className="flex justify-end items-center gap-2">
          <Link
            to=".."
            type="button"
            className="bg-transparent no-underline text-[#e5d5f7] hover:text-[#d1bee6]"
          >
            Cancel
          </Link>
          <button className="cursor-pointer font-inherit px-6 py-2 border-none rounded bg-[#34036c] text-[#e5d5f7] hover:bg-[#23014a]">
            Submit
          </button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;
