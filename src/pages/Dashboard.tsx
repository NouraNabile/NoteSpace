import { useMemo, useState } from "react";
import {
  Home, Search, Inbox, Settings, Star, CheckSquare, BookOpen, Lightbulb,
  FileText, Folder, Plus, Bell, ChevronDown, ArrowRight, CalendarDays,
  Link2, Check, Sparkles, Sun, Menu, X, Clock3, PanelLeft
} from "lucide-react";
import "./Dashboard.css";

type Task = { id: number; title: string; done: boolean };
type Project = { name: string; status: string; tone: string };

const initialTasks: Task[] = [
  { id: 1, title: "Finish Notion Clone UI", done: true },
  { id: 2, title: "Study React Hooks", done: true },
  { id: 3, title: "Work on Project Ideas", done: false },
  { id: 4, title: "Read a tech article", done: false },
];

const projects: Project[] = [
  { name: "ContentForge", status: "In Progress", tone: "purple" },
  { name: "Notion Clone", status: "Planning", tone: "blue" },
  { name: "Portfolio Website", status: "Not Started", tone: "gray" },
];

const week = [
  { day: "Mon", value: 2 }, { day: "Tue", value: 3 }, { day: "Wed", value: 2.7 },
  { day: "Thu", value: 4 }, { day: "Fri", value: 5 }, { day: "Sat", value: 4 },
  { day: "Sun", value: 4 },
];

function ProgressChart() {
  const points = useMemo(() => week.map((p, i) => ({
    x: 24 + i * 82,
    y: 140 - (p.value / 6) * 112,
    ...p,
  })), []);
  const line = points.map(p => `${p.x},${p.y}`).join(" ");
  const area = `24,140 ${line} ${points[points.length - 1].x},140`;
  return (
    <div className="chart-wrap">
      <div className="chart-y-labels"><span>6</span><span>4</span><span>2</span><span>0</span></div>
      <svg className="chart" viewBox="0 0 560 166" role="img" aria-label="Tasks completed during the week">
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b8cff" stopOpacity=".22" />
            <stop offset="100%" stopColor="#3b8cff" stopOpacity=".02" />
          </linearGradient>
        </defs>
        {[28, 65, 102, 140].map(y => <line key={y} x1="24" x2="516" y1={y} y2={y} className="grid-line" />)}
        {points.map(p => <line key={p.day} x1={p.x} x2={p.x} y1="20" y2="140" className="grid-line vertical" />)}
        <polygon points={area} fill="url(#chartFill)" />
        <polyline points={line} fill="none" stroke="#3285ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {points.map(p => <circle key={p.day} cx={p.x} cy={p.y} r="4.5" fill="#3285ff" stroke="white" strokeWidth="1.5" />)}
      </svg>
      <div className="chart-x-labels">{week.map(p => <span key={p.day}>{p.day}</span>)}</div>
    </div>
  );
}

export default function Dashboard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newTask, setNewTask] = useState("");
  const completed = tasks.filter(t => t.done).length;
  const toggleTask = (id: number) => setTasks(current => current.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const addTask = () => {
    const title = newTask.trim();
    if (!title) return;
    setTasks(current => [...current, { id: Date.now(), title, done: false }]);
    setNewTask("");
  };

  return (
    <div className="dashboard-app">
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="brand-row">
          <div className="brand-mark">N</div>
          <strong>My Workspace</strong>
          <ChevronDown size={16} />
          <button className="mobile-close icon-button" onClick={() => setSidebarOpen(false)} aria-label="Close menu"><X size={19}/></button>
        </div>
        <nav className="nav-main" aria-label="Main navigation">
          <a className="nav-item active" href="#home"><Home size={20}/>Home</a>
          <a className="nav-item" href="#search"><Search size={20}/>Search</a>
          <a className="nav-item" href="#inbox"><Inbox size={20}/>Inbox<span className="notification-count">3</span></a>
          <a className="nav-item" href="#settings"><Settings size={20}/>Settings</a>
        </nav>
        <nav className="nav-main nav-spaced" aria-label="Favorites">
          <a className="nav-item" href="#favorites"><Star className="yellow" size={20}/>Favorites</a>
          <a className="nav-item" href="#tasks"><CheckSquare className="purple" size={20}/>My Tasks</a>
          <a className="nav-item" href="#study"><BookOpen className="blue" size={20}/>Study Plan</a>
          <a className="nav-item" href="#ideas"><FileText className="muted-icon" size={20}/>Project Ideas</a>
        </nav>
        <div className="nav-label">Workspace</div>
        <div className="workspace-group">
          <a className="nav-item" href="#personal"><span className="tiny-emoji">♙</span>Personal<span className="dot purple-dot"/></a>
          <a className="nav-subitem" href="#notes"><FileText size={17}/>Notes</a>
          <a className="nav-subitem" href="#tasks"><FileText size={17}/>Tasks</a>
          <a className="nav-subitem" href="#goals"><FileText size={17}/>Goals</a>
          <a className="nav-item" href="#projects"><span className="tiny-emoji blue-emoji">◈</span>Projects<span className="dot blue-dot"/></a>
          <a className="nav-subitem" href="#contentforge"><FileText size={17}/>ContentForge</a>
          <a className="nav-subitem" href="#portfolio"><FileText size={17}/>UI/UX Portfolio</a>
        </div>
        <button className="new-page"><Plus size={20}/>New Page</button>
      </aside>

      {sidebarOpen && <button className="sidebar-backdrop" aria-label="Close sidebar" onClick={() => setSidebarOpen(false)} />}
      <main className="main-content">
        <header className="topbar">
          <button className="icon-button mobile-menu" onClick={() => setSidebarOpen(true)} aria-label="Open menu"><Menu size={21}/></button>
          <div className="search-box"><Search size={20}/><input placeholder="Search anything..." aria-label="Search anything"/><kbd>⌘ K</kbd></div>
          <div className="topbar-spacer"/>
          <button className="icon-button bell-button" aria-label="Notifications"><Bell size={21}/><span/></button>
          <div className="avatar" aria-label="Profile">N</div>
        </header>

        <section className="welcome-banner" id="home">
          <div className="welcome-copy">
            <h1>Good morning, Noura! <span>☀️</span></h1>
            <p>Let’s make today productive <Sparkles size={17} className="inline-sparkle"/></p>
          </div>
          <div className="banner-decor" aria-hidden="true"><span className="plant">♧</span><span className="cup">☕</span><span className="cat">🐱</span><span className="book-stack">▰<br/>▰</span></div>
        </section>

        <section className="stats-grid" aria-label="Productivity overview">
          <article className="stat-card">
            <div className="stat-icon check-bg"><CheckSquare size={21}/></div>
            <div className="stat-main"><span className="stat-label">Tasks Today</span><strong>{completed} / {tasks.length}</strong><div className="progress-track"><div style={{width: `${tasks.length ? completed / tasks.length * 100 : 0}%`}}/></div></div>
            <div className="success-mark"><Check size={27}/></div>
          </article>
          <article className="stat-card">
            <div className="stat-icon calendar-bg"><CalendarDays size={21}/></div>
            <div className="stat-main"><span className="stat-label">This Week</span><strong>5 Tasks <small className="growth">↑ +1</small></strong></div>
            <svg className="sparkline" viewBox="0 0 120 48" aria-hidden="true"><path d="M2 37 C16 29 19 8 33 18 S50 31 64 14 S83 8 94 22 S109 29 118 17" /></svg>
          </article>
          <article className="stat-card">
            <div className="stat-icon idea-bg"><Lightbulb size={21}/></div>
            <div className="stat-main"><span className="stat-label">Ideas</span><strong>12</strong></div>
            <svg className="sparkline purple-line" viewBox="0 0 180 48" aria-hidden="true"><path d="M2 39 C16 32 18 17 31 28 S48 31 61 21 S78 36 94 19 S112 5 126 19 S145 32 158 14 S172 10 178 16" /></svg>
          </article>
        </section>

        <section className="middle-grid">
          <article className="panel progress-panel">
            <div className="panel-heading"><h2>Your Progress</h2><button className="text-select">This Week <ChevronDown size={16}/></button></div>
            <ProgressChart />
          </article>
          <article className="panel today-panel">
            <div className="panel-heading"><h2><span className="sun-icon">☀️</span> Today’s Plan</h2><button className="text-select">Oct 17, 2026 <ChevronDown size={16}/></button></div>
            <div className="today-content">
              <div className="task-list">
                {tasks.slice(0, 4).map(task => <label className={`task-row ${task.done ? "task-done" : ""}`} key={task.id}>
                  <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
                  <span className="custom-check">{task.done && <Check size={14}/>}</span><span>{task.title}</span>
                </label>)}
                <div className="add-task-row"><input value={newTask} onChange={e => setNewTask(e.target.value)} onKeyDown={e => e.key === "Enter" && addTask()} placeholder="+ Add a task..." aria-label="New task"/><button onClick={addTask} aria-label="Add task"><Plus size={17}/></button></div>
              </div>
              <div className="laptop-doodle" aria-hidden="true"><span>♡</span><div className="laptop-screen">⌣<br/>• •</div><div className="laptop-base"/></div>
            </div>
          </article>
        </section>

        <section className="bottom-grid">
          <article className="panel collections-panel">
            <div className="panel-heading"><h2><Link2 size={20}/> Linked Collections</h2><a className="view-all" href="#collections">View all <ArrowRight size={15}/></a></div>
            <div className="collection-grid">
              <div className="collection-card"><h3><CheckSquare size={17}/>Tasks</h3>{tasks.slice(0,3).map(t=><div className="collection-row" key={t.id}><span className={`mini-check ${t.done ? "mini-done" : ""}`}>{t.done ? "✓" : ""}</span><span className={t.done ? "line-through" : ""}>{t.title}</span></div>)}<button className="add-link" onClick={() => document.querySelector<HTMLInputElement>(".add-task-row input")?.focus()}><Plus size={15}/>New Task</button></div>
              <div className="collection-card"><h3><Folder size={17}/>Projects</h3>{projects.map(p=><div className="project-row" key={p.name}><span className="folder-emoji">▣</span><span>{p.name}</span><span className={`status-pill ${p.tone}`}>{p.status}</span></div>)}<button className="add-link" onClick={() => alert("You can connect this button to your Projects page next.")}><Plus size={15}/>New Project</button></div>
              <div className="collection-card"><h3><FileText size={17}/>Notes</h3>{["React Tips", "UI Design Ideas", "Career Goals"].map((note,i)=><div className="note-row" key={note}><span className={`note-icon note-${i}`}>{i===0?"♧":i===1?"▤":"✦"}</span>{note}</div>)}<button className="add-link" onClick={() => alert("You can connect this button to your Notes page next.")}><Plus size={15}/>New Note</button></div>
            </div>
            <div className="quote-banner"><span className="quote-mark">“</span><span>Small steps every day lead to big results. 💙</span><div className="quote-waves"/></div>
          </article>
          <article className="panel upcoming-panel">
            <div className="panel-heading"><h2><CalendarDays size={21}/> Upcoming</h2><a className="view-all" href="#upcoming">View all <ArrowRight size={15}/></a></div>
            <div className="timeline">
              <div className="timeline-item"><span className="timeline-dot"/><span className="timeline-date">Tomorrow</span><strong>Project Review</strong><small>10:00 AM</small></div>
              <div className="timeline-item"><span className="timeline-dot"/><span className="timeline-date">Sun, Oct 18</span><strong>Learn TypeScript</strong><small>7:00 PM</small></div>
              <div className="timeline-item"><span className="timeline-dot"/><span className="timeline-date">Mon, Oct 19</span><strong>Build Dashboard</strong><small>3:00 PM</small></div>
            </div>
          </article>
        </section>
        <footer className="footer-note"><span>✦</span> Built one small step at a time <span>💙</span></footer>
      </main>
    </div>
  );
}
