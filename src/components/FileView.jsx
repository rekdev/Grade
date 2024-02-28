import { Link } from "wouter";
import folder from "../assets/icons/folder.svg";
import note from "../assets/icons/note.svg";

function FileView({ fileList }) {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-7 md:grid-cols-6">
      {fileList.map((file) => (
        <FileItem key={file.id} name={file.name} type={file.type} href={file.type === "folder" ? `/folder/${file.id}` : `/note/${file.id}`}/>
      ))}
    </div>
  );
}

function FileItem({ name, type, href }) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center gap-1 rounded-lg px-2 py-1 transition-colors ease-out hover:bg-grade-white-200 active:bg-grade-white-300">
        {type === "folder" ? <img src={folder} /> : <img src={note} />}{" "}
        <p className="line-clamp-2 w-full text-center">{name}</p>
      </div>
    </Link>
  );
}

export default FileView;
