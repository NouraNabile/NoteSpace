
import { useState } from "react";
import "./Sidebar.css";

type SidebarProps = {
  onNavigate?: (page: string) => void;
};

function Sidebar({ onNavigate }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Home");
  const [pages, setPages] = useState([
    "Notes",
    "Tasks",
    "Goals",
  ]);

  const handleNavigate = (item: string) => {
    setActiveItem(item);
    onNavigate?.(item);
  };

  const handleNewPage = () => {
    const pageName = `New Page ${pages.length - 2}`;
    setPages((currentPages) => [...currentPages, pageName]);
    handleNavigate(pageName);
  };

  return (
    <aside className="sidebar">
      {/* Workspace */}
      <div className="workspace-header">
        <div className="workspace-logo">N</div>

        <div className="workspace-info">
          <h2>My Workspace</h2>
          <p>Personal workspace</p>
        </div>

        <button
          className="workspace-menu"
          aria-label="Workspace menu"
        >
          ⋯
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="sidebar-nav">
        <button
          className={`sidebar-link ${
            activeItem === "Home" ? "active" : ""
          }`}
          onClick={() => handleNavigate("Home")}
        >
          <span className="sidebar-icon">⌂</span>
          <span>Home</span>
        </button>

        <button
          className={`sidebar-link ${
            activeItem === "Search" ? "active" : ""
          }`}
          onClick={() => handleNavigate("Search")}
        >
          <span className="sidebar-icon">⌕</span>
          <span>Search</span>
        </button>

        <button
          className={`sidebar-link ${
            activeItem === "Inbox" ? "active" : ""
          }`}
          onClick={() => handleNavigate("Inbox")}
        >
          <span className="sidebar-icon">▤</span>
          <span>Inbox</span>
        </button>

        <button
          className={`sidebar-link ${
            activeItem === "Settings" ? "active" : ""
          }`}
          onClick={() => handleNavigate("Settings")}
        >
          <span className="sidebar-icon">⚙</span>
          <span>Settings</span>
        </button>
      </nav>

      {/* Favorites */}
      <section className="sidebar-section">
        <h3 className="sidebar-heading">FAVORITES</h3>

        {["My Tasks", "Study Plan", "Project Ideas"].map(
          (item) => (
            <button
              key={item}
              className={`sidebar-link ${
                activeItem === item ? "active" : ""
              }`}
              onClick={() => handleNavigate(item)}
            >
              <span className="sidebar-icon">☆</span>
              <span>{item}</span>
            </button>
          )
        )}
      </section>

      {/* Personal Pages */}
      <section className="sidebar-section">
        <h3 className="sidebar-heading">PERSONAL</h3>

        {pages.map((page, index) => (
          <button
            key={`${page}-${index}`}
            className={`sidebar-link ${
              activeItem === page ? "active" : ""
            }`}
            onClick={() => handleNavigate(page)}
          >
            <span className="sidebar-icon">
              {page.includes("Task")
                ? "☑"
                : page.includes("Goal")
                ? "◎"
                : "▧"}
            </span>

            <span>{page}</span>
          </button>
        ))}
      </section>

      {/* Projects */}
      <section className="sidebar-section">
        <h3 className="sidebar-heading">PROJECTS</h3>

        {["ContentForge", "UI/UX Portfolio"].map((project) => (
          <button
            key={project}
            className={`sidebar-link ${
              activeItem === project ? "active" : ""
            }`}
            onClick={() => handleNavigate(project)}
          >
            <span className="project-dot" />
            <span>{project}</span>
          </button>
        ))}
      </section>

      {/* New Page */}
      <button
        className="new-page-button"
        onClick={handleNewPage}
      >
        <span>＋</span>
        <span>New Page</span>
      </button>
    </aside>
  );
}

export default Sidebar;
