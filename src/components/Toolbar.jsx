import { useLocation, useRoute } from "wouter";
import { Home, Search, Bookmark, CircleUser } from "lucide-react";

function Toolbar() {
  const [location, setLocation] = useLocation();

  return (
    <>
      <nav className="fixed bottom-0 left-0 flex h-16 w-screen justify-center border-t-2 border-grade-white-500 bg-grade-white-100">
        <ToolbarButton href="/" n>
          <Home />
        </ToolbarButton>
        <ToolbarButton href="/search">
          <Search />
        </ToolbarButton>
        <ToolbarButton href="/markers">
          <Bookmark />
        </ToolbarButton>
        <ToolbarButton>
          <CircleUser />
        </ToolbarButton>
      </nav>
    </>
  );
}

function ToolbarButton({ children, onClick, href }) {
  const [isActive] = useRoute(href);
  const [location, setLocation] = useLocation();

  const redirect = (href) => {
    if (href != undefined) {
      setLocation(href);
    }
  };

  return (
    <button
      className={`grid h-16 w-16 place-content-center stroke-grade-black-100 hover:bg-grade-white-200 active:bg-grade-white-300 transition-colors *:h-7 *:w-auto ${isActive && href != undefined ? "border-b-[6px] border-grade-black-100 *:translate-y-[2.8px]" : " border-none"}`}
      onClick={() => {
        redirect(href);
        if (onClick != undefined) {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
  HomeIcon;
}

export default Toolbar;
