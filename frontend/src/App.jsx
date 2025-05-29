import { useState } from "react";
import Post from "./components/Post";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <Post />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
