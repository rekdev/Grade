import localforage from "localforage";
import EditorJS from "@editorjs/editorjs";

class Note {
  constructor({ id }) {
    this.id = id;
    this.editor = new EditorJS(this.get());
  }

  async get() {
    return {};
  }

  async save() {
  }
}
