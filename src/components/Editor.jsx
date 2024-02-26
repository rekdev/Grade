import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header"
import List from "@editorjs/list"


function Editor() {
  const editorRef = useRef();

  useEffect(() => {
    if (editorRef.current === null) {
      const editor = new EditorJS({
        holder: "editor",
        autofocus: true,
        onReady: () => {
          editorRef.current = editor;
        },
        tools: {
          header: Header,
          list: List
        }
      });
    }

    return () => {
      editorRef?.current?.destroy();
      editorRef.current = null;
    };
  }, []);

  return (
    <>
      <div id="editor" />
    </>
  );
}

export default Editor;
