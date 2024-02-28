import { Link } from "wouter";

function ListItem({ children, text, href = ""}) {
  return (
    <Link href={href}>
      <div className="flex gap-3 px-2 py-3 rounded-md hover:bg-grade-white-200 active:bg-grade-white-300 transition-colors">
        {children}
      </div>
    </Link>
  );
}

export default ListItem;
