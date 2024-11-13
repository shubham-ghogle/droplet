import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function getData() {
      const data = await fetch("http://localhost:4000/");
      const res = await data.json();
      console.log(res);
    }

    getData();
  }, []);

  return <div>Hello</div>;
}

export default App;
