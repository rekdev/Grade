import { FolderClosed, StickyNote } from "lucide-react";
import ListItem from "../components/ListItem";
import Title from "../components/Title";
import Main from "../components/Main";

function Markers() {
  return (
    <>
      <Main>
        <Title>Markers</Title>
        <div className="">
          <ListItem>
            <FolderClosed />
            <p>Folder</p>
          </ListItem>
          <ListItem>
            <StickyNote />
            <p>Note</p>
          </ListItem>
        </div>
      </Main>
    </>
  );
}

export default Markers;
