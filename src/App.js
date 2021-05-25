import React, { useState, useEffect } from "react";
import axios from "axios";

// jsx
const App = () => {
  const [posts, setPosts] = useState([
    { userId: 1, id: 101, title: "hi", body: "welcome" },
    { userId: 2, id: 102, title: "bye", body: "eeeeeend" },
  ]);


  const getData = ()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/posts")

    .then((response) => {
      setPosts([...posts, ...response.data]);
    })

    .catch((err) => {
      throw err;
    });
  }


  useEffect(() => {
    getData()
  }, []);



  const newPosts = posts.map((element, index) => {
    return (
      <div key={index}>
        <p> title : {element.title} </p> <p>body : {element.body} </p>
      </div>
    );
  });



  const [userId, setUserId] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <>
      <h1>Blog App</h1>
      <p>{newPosts}</p>
      <p>userId: {userId}</p>
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>body: {body}</p>

      <button
        onClick={() => {
          setPosts([
            ...posts,
            { userId: userId, id: id, title: title, body: body },
          ]);
        }}
      >
        button
      </button>
      <input
        type="text"
        placeholder="userId"
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="id"
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="body"
        onChange={(e) => setBody(e.target.value)}
      />
    </>
  );
};

export default App;
