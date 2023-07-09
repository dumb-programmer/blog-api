import PropType from "prop-types";
import NotFoundError from "../components/NotFoundError";
import TooManyRequestsError from "../components/TooManyRequestsError";
import UnkownError from "../components/UnkownError";

const ErrorPage = ({ error }) => {
  switch (error.status) {
    case 404:
      return <NotFoundError />;
    case 429:
      return <TooManyRequestsError />;
    default:
      return <UnkownError />;
  }
};

ErrorPage.propTypes = {
  error: PropType.object.isRequired,
};

export default ErrorPage;
