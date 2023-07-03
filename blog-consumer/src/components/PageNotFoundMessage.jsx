import AlertIcon from "../icons/AlertIcon";

const PageNotFoundMessage = () => {
  return (
    <div className="centered">
      <AlertIcon height={60} width={60} color="red" />
      <h2>Page Not Found</h2>
      <p>Sorry we weren't able to locate the page you're seeking</p>
    </div>
  );
};

export default PageNotFoundMessage;
