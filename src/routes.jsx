import { Switch, Route } from "wouter";
import Home from "@/pages/home.jsx";
import Note from "./pages/note";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/:noteId" component={Note} />
      </Switch>
    </>
  );
}

export default Routes;
