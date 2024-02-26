import localforage from "localforage";

const db = localforage.createInstance({
  name: "db",
});

export default db;
