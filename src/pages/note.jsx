import Editor from "@/components/Editor"
import { useParams } from "wouter";

function Note() {
  const params = useParams()

  return (
    <>
      <h1></h1>
      <p>{params.noteId}</p>
      <Editor />
    </>
  );
}

export default Note;
