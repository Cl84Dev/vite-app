import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import MyCard from "./MyCard";

const App = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container text-center d-flex flex-column align-items-center">
      <h1 className="text-danger">Hello world!</h1>
      {comments.map((comment) => (
        <MyCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default App;
