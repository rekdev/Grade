import { useEffect, useState, useRef } from "react";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Main from "../components/Main";
import AddButton from "../components/AddButton";
import FileView from "../components/FileView";
import Modal from "../components/Modal";
import InputText from "../components/InputText";
import Select from "../components/Select";
import MainButton from "../components/MainButton";
import Files from "../utils/Files";

function Home() {
  const [fileList, setFilesList] = useState([]);
  const [newFileName, setNewFileName] = useState("");
  const [newFileType, setNewFileType] = useState();

  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(open ? false : true);
  };

  const orderItemsByType = (a, b) => {
    if (a.type === "folder" && b.type === "note") {
      return -1;
    }
    if (a.type === "note" && b.type === "folder") {
      return 1;
    }
    return 0;
  };

  const handleAddSubmit = async (e) => {
    try {
      e.preventDefault();
      const files = new Files();
      console.log(newFileType);

      if (newFileType === "folder") {
        await files.createFolder(newFileName);
      }
      if (newFileType === "note") {
        await files.createNote(newFileName);
      }
      await updateFiles();
      toggleModal();
    } catch (err) {
      console.log(err);
    }
  };

  const updateFiles = async () => {
    const files = new Files();
    let list = await files.getAll();
    list.sort(orderItemsByType);
    setFilesList(list);
  };

  useEffect(() => {
    async function initHome() {
      updateFiles();
    }

    initHome();
  }, []);

  return (
    <>
      <Main>
        <Title>Home</Title>
        <Subtitle>All</Subtitle>
        <FileView fileList={fileList} />
        <AddButton onClick={toggleModal} />
        <Modal
          id="add-dialog"
          openState={open}
          title="Create new file"
          toggleFunction={toggleModal}
        >
          <form onSubmit={handleAddSubmit} className="flex flex-col gap-8">
            <Select
              name="type"
              id="type"
              onChange={(e) => {
                setNewFileType(e.target.value);
              }}
            >
              <option value="folder">Folder </option>
              <option value="note">Note </option>
            </Select>
            <InputText
              name="name"
              id="name"
              placeholder="File name"
              type="text"
              onChange={(e) => {
                setNewFileName(e.target.value);
              }}
              autoComplete="off"
            />
            <MainButton>Create</MainButton>
          </form>
        </Modal>
      </Main>
    </>
  );
}

export default Home;
