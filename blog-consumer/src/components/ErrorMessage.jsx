import PageNotFoundMessage from "./PageNotFoundMessage";
import SomethingBrokeMessage from "./SomethingBrokeMessage";
import TooManyRequestsMessage from "./TooManyRequestsMessage";

const ErrorMessage = ({ error }) => {
  switch (error.status) {
    case 404:
      return <PageNotFoundMessage />;
    case 429:
      return <TooManyRequestsMessage />;
    default:
      return <SomethingBrokeMessage />;
  }
};

export default ErrorMessage;
