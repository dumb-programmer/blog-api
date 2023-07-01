import Header from "./components/Header";
import PostDetail from "./components/PostDetail";
import Posts from "./components/Posts";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        {/* <Posts /> */}
        <PostDetail />
      </main>
    </>
  );
};

export default App;
