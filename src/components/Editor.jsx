import { useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import { useRef } from "react";

function Editor() {
  const editorRef = useRef(null);

  const initEditor = () => {
    const editor = new EditorJS("editor");

    editor.isReady.then(() => {
      editorRef.current = editor;
    });
  };

  useEffect(() => {
    if (editorRef.current === null) {
      initEditor();
    }

    return () => {
      editorRef?.current?.destroy();
      editorRef.current = null;
    };
  }, []);

  return <div id="editor" />;
}

export default Editor;
