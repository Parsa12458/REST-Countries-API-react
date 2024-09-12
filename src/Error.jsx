import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="mx-auto mt-8 w-fit rounded bg-red-200 px-5 py-4 text-center text-sm lg:px-10 lg:py-6 lg:text-base xl:px-20 xl:py-8">
      <p className="font-semibold">Something went wrong!</p>
      <span className="block">( {error.data || error.message} )</span>
      <Link
        to={-1}
        className="mt-3 inline-block rounded border-2 border-red-400 px-4 py-2 font-semibold transition-all duration-300 hover:scale-105"
      >
        Go Back
      </Link>
    </div>
  );
}

export default Error;
