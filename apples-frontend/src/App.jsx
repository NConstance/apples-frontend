import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [apples, setApples] = useState([]);

  // const fetchApples = async () => {
  //   try {
  //     const getApple = await fetch("http://localhost:2025/apples");
  //     const hasApples = await getApple.json();
  //     console.log(hasApples);
  //     setApples(hasApples);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // fetchApples();

  useEffect(() => {
    const fetchApples = async () => {
      try {
        const getApple = await fetch(
          "https://apples-backend.onrender.com/apples"
        );
        const hasApples = await getApple.json();
        // console.log(hasApples);
        setApples(hasApples);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApples();
  });

  return (
    <div>
      <h1>Apples</h1>
      <div>
        {apples.map((apple) => {
          return (
            <div key={apple._id}>
              <p>{apple.name}</p>
              <p>{apple.amount}</p>
              <p>{apple.readyToEat}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
