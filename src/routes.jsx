import Home from "./pages/home.jsx";
import Note from "./pages/note";
import SearchPage from "./pages/search.jsx"
import Markers from "./pages/markers";
import Settings from "./pages/settings";
import { Route } from "wouter";

function Routes() {
  return (
    <>
      <Route path="/note/:id" component={Note} />
      <Route path="/" component={Home} />
      <Route path="/search" component={SearchPage} />
      <Route path="/markers" component={Markers} />
      <Route path="/settings" component={Settings} />
    </>
  );
}

export default Routes;
