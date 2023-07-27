const TooManyRequestsMessage = () => {
  return (
    <div className="centered">
      <div
        className="content"
        style={{
          textAlign: "center",
        }}
      >
        <h2>Rate Limit Exceeded</h2>
        <p>Please wait a minute and then try again.</p>
      </div>
    </div>
  );
};

export default TooManyRequestsMessage;
