import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

const paragraphsStyle = "mx-auto self-center text-3xl",
  linksStyle =
    "border-b-solid border-b border-b-transparent text-indigo-500 transition-colors hover:border-b-indigo-500";

export default function ErrorElement() {
  const [count, setCount] = useState(12);
  const navigate = useNavigate();

  useEffect(() => {
    if (count > 0) {
      const countInterval = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 990);

      return () => clearInterval(countInterval);
    } else {
      navigate("/");
    }
  }, [count, navigate]);

  return (
    <>
      <Header />
      <div className="my-12 flex flex-col gap-4">
        <img
          className="mx-auto mb-16 w-2/5"
          src="/undraw_page-not-found_6wni.svg"
          alt="Path NoT found"
        />
        <h1 className="mx-auto text-4xl">Page NOT found !!</h1>
        <p className={paragraphsStyle}>
          Uh oh, we can’t seem to find the page you’re looking for. Try going
          back to the previous page or{" "}
          <Link className={linksStyle} to="/contact">
            contact with us
          </Link>{" "}
          if you have a problem.
        </p>
        <p className={paragraphsStyle}>
          Redirecting to{" "}
          <Link to="/" className={linksStyle}>
            Home page
          </Link>{" "}
          in {count} seconds.
        </p>
      </div>
    </>
  );
}
