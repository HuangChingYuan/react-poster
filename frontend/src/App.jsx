import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./routes/Posts";
import { loader as postsLoader } from "./assets/postsLoader";
import NewPost from "./routes/NewPost";
import { action as newPostAction } from "./assets/newPostAction";
import PostDetails from "./routes/PostDetails";
import { loader as postDetailsLoader } from "./assets/postDetailsLoader";
import RootLayout from "./routes/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Posts />,
          loader: postsLoader,
          children: [
            {
              path: "/create-post",
              element: <NewPost />,
              action: newPostAction,
            },
            {
              path: "/:postId",
              element: <PostDetails />,
              loader: postDetailsLoader,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
