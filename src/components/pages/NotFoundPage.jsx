import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="w-full h-auto dark:text-white pt-10 flex flex-col place-items-center place-content-center">
      <h1 className="text-2xl pb-5">Page Not Found</h1>
      <Link
        to="/"
        className="h-10 w-32 font-semibold place-items-center place-content-center px-2 bg-red-300 rounded-md hover:bg-red-400 transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
}

export default NotFoundPage;
