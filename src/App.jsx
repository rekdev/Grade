import { useEffect, useState } from "react";
import Routes from "./routes";
import Toolbar from "./components/Toolbar";
import Files from "./utils/Files";

function App() {
  useEffect(() => {
    async function initApp() {
      const files = new Files();
      // const file = await files.getFile("fb91fa84-054c-4885-8983-0c03d64f57d3") 
      // console.log(file)
    }

    initApp()
  }, [])

  return (
    <>
      <Toolbar />
      <Routes />
    </>
  );
}

export default App;
