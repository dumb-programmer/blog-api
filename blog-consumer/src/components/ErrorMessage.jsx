import PageNotFoundMessage from "./PageNotFoundMessage";
import SomethingBrokeMessage from "./SomethingBrokeMessage";

const ErrorMessage = ({ error }) => {
  return (
    <div className="container">
      {error.status === 404 ? (
        <PageNotFoundMessage />
      ) : (
        <SomethingBrokeMessage />
      )}
    </div>
  );
};

export default ErrorMessage;
