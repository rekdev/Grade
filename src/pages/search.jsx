import { Search } from "lucide-react";
import Subtitle from "../components/Subtitle";
import Main from "../components/Main";
import InputText from "../components/InputText";
import ListItem from "../components/ListItem";
import { FolderClosed, StickyNote } from "lucide-react";

function SearchPage() {
  return (
    <>
      <Main>
        <InputText
          placeholder="Search"
          id="search"
          name="search"
        >
          <Search className="absolute right-1 top-[14px] h-5 stroke-grade-black-100" />
        </InputText>
        <div className="h-4"></div>
        <Subtitle>Recently visited</Subtitle>
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

export default SearchPage;
