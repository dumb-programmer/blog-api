import AlertIcon from "../icons/AlertIcon";

const SomethingBrokeMessage = () => {
  return (
    <div className="centered">
      <AlertIcon height={60} width={60} color="red" />
      <h2>Something broke</h2>
      <p>
        It seems there was an error but we're not sure what the error is, try
        refreshing this page.
      </p>
    </div>
  );
};

export default SomethingBrokeMessage;
