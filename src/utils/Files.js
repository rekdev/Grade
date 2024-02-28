import db from "./db";
import { v4 } from "uuid";

class Files {
  async initDb() {
    try {
      await db.setItem("files", []);
    } catch {
      throw new Error("The database cannot be initialised.");
    }
  }

  async getAll() {
    try {
      let allElements = await db.getItem("files");
      if (allElements === null) {
        await this.initDb();
        allElements = await db.getItem("files");
      }
      return await db.getItem("files");
    } catch {
      throw new Error("An error has occurred during data retrieval.");
    }
  }

  async createFolder(name) {
    try {
      const files = await this.getAll();

      const newFolder = {
        id: v4(),
        name: name,
        type: "folder",
        icon: "folder",
        children: [],
      };

      await db.setItem("files", files.concat(newFolder));
    } catch {
      throw new Error("The folder cannot be created.");
    }
  }

  async createNote(name) {
    try {
      const files = await this.getAll();

      const newNote = {
        id: v4(),
        name: name,
        type: "note",
        icon: "note",
        content: null,
      };
      
      await db.setItem("files", files.concat(newNote));
    } catch {
      throw new Error("Can't create the note.");
    }
  }

  async moveNoteToFolder(noteId, folderId) {
    let files = await this.getAll();
    const note = await this.getFile(noteId);
    const folder = await this.getFile(folderId);

    if (note.data.type === "note" && folder.data.type === "folder") {
      files[folder.index].children = files[folder.index].children.concat(
        note.data,
      );
      files.splice(note.index, 1);
      await db.setItem("files", files);
    } else {
      throw new Error("These elements do not exist.");
    }
  }

  async getFile(fileId) {
    const files = await this.getAll();

    let fileFinded = {
      data: null,
      index: null,
      parentIndex: null,
    };

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.id === fileId) {
        fileFinded.data = file;
        fileFinded.index = i;
      }

      if (file.type === "folder" && file.id != fileId) {
        let children = file.children;

        for (let j = 0; j < children.length; j++) {
          const child = children[j];

          if (child.id === fileId) {
            fileFinded.data = child;
            fileFinded.index = j;
            fileFinded.parentIndex = i;
          }
        }
      }
    }

    return fileFinded;
  }

  async deleteFile(fileId) {
    let files = await this.getAll();
    let file = await this.getFile(fileId);

    if (file.index != null) {
      if (file.parentIndex === null) {
        files.splice(file.index, 1);
      } else {
        files[file.parentIndex].children.splice(file.index, 1);
      }
      db.setItem("files", files);
    } else {
      throw new Error("The file does not exist.");
    }
  }

  async changeFileName(fileId, newName) {
    const files = await this.getAll();
    const file = await this.getFile(fileId);

    if (file.index != null) {
      if (file.parentIndex === null) {
        files[file.index].name = newName;
      } else {
        files[file.parentIndex].children[file.index].name = newName;
      }
      db.setItem("files", files);
    } else {
      throw new Error("The file does not exist.");
    }
  }

  async moveNoteToRoot(noteId) {
    let files = await this.getAll();
    const file = await this.getFile(noteId);

    if (file.index != null && file.parentIndex != null) {
      files[file.parentIndex].children.splice(file.index);
      files = files.concat(file.data);
      await db.setItem("files", files);
    } else {
      throw new Error("The note does not exist.");
    }
  }
}

export default Files;
