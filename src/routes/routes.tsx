import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllBook from "../pages/AllBook";
import BookDetails from "../pages/BookDetails";
import BookList from "../pages/BookList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BookList />,
      },
      {
        path: "/all-books",
        element: <AllBook />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <App />,
  },
  {
    path: "/sign-in",
    element: <App />,
  },
]);
