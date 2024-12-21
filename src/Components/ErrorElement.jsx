import { Link } from "react-router-dom";

export default function ErrorElement() {
  return (
    <div className="my-12 flex flex-col gap-4">
      <img
        className="mx-auto mb-16 w-2/5"
        src="/undraw_page-not-found_6wni.svg"
        alt="Path NoT found"
      />
      <h1 className="mx-auto text-4xl">Page NOT found !!</h1>
      <p className="mx-auto self-center text-3xl">
        Uh oh, we can’t seem to find the page you’re looking for. Try going back
        to the previous page or{" "}
        <Link
          className="border-b-solid border-b border-b-transparent text-indigo-500 transition-colors hover:border-b-indigo-500"
          to="/contact"
        >
          contact with us
        </Link>{" "}
        if you have a problem.
      </p>
    </div>
  );
}
