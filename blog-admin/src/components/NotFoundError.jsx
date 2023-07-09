const NotFoundError = () => {
  return (
    <div className="centered">
      <div className="content" style={{ textAlign: "center" }}>
        <h2>404 Not Found</h2>
        <p>{"The resource you're trying to get doesn't exist."}</p>
      </div>
    </div>
  );
};

export default NotFoundError;
