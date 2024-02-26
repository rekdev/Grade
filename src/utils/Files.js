import db from "./db";
import { v4 } from "uuid";

class Files {
  async init() {
    try {
      const files = await this.getAll();
      if (files === null || files === undefined) {
        await this.initDb();
      }
    } catch {}
  }

  async initDb() {
    try {
      await db.setItem("files", []);
    } catch {
      throw new Error("The database cannot be initialised.");
    }
  }

  async getAll() {
    try {
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
    try {
      let files = await this.getAll();

      const checkFile = (file, type, id) => {
        if (file.type === type && file.id === id) {
          return file;
        }
      };

      const note = files.find((file) => {
        return checkFile(file, "note", noteId);
      });

      const folderIndex = files.findIndex((file) => {
        return checkFile(file, "folder", folderId);
      });

      if (note === undefined) {
        throw new Error("The note does not exist.");
      }

      if (folderIndex === -1) {
        throw new Error("The folder does not exist.");
      }

      files[folderIndex].children = files[folderIndex].children.concat(note);

      files = files.filter((file) => {
        if (file.type != "note" && file.id != noteId) {
          return file;
        }
      });

      console.log(files);
      await db.setItem("files", files);
    } catch (err) {
      throw new Error(err);
    }
  }

  async getNote(id) {
    const files = await this.getAll();
    let note = null;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.type === "note" && file.type === id) {
        note = file;
      }

      if (file.type === "folder") {
        let children = file.children;

        for (let j = 0; j < children.length; j++) {
          let child = children[j];

          if (child.type === "note" && child.id === id) {
            note = child;
          }
        }
      }
    }

    return note;
  }

  async deleteFolder(id) {
    const files = await this.getAll();

    const newFiles = files.filter((file) => {
      if (file.type != "folder" && folder.id != id) {
        return file;
      }
    });

    await db.setItem("files", newFiles);
  }

  async deleteNote() {
    const files = await this.getAll();
    let note = null;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.type === "note" && file.type === id) {
        note = file;
      }

      if (file.type === "folder") {
        let children = file.children;

        for (let j = 0; j < children.length; j++) {
          let child = children[j];

          if (child.type === "note" && child.id === id) {
            note = child;
          }
        }
      }
    }

    return note;
  }
}

export default Files;
