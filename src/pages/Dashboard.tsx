import Sidebar from "../components/Sidebar";
function Dashboard() {
return (
  <div className="dashboard-layout">
    <Sidebar />

    <main className="dashboard-main">
      <h1>Good morning, Noura!</h1>
      <p>Welcome back to your workspace.</p>

      {/* هنضيف باقي أجزاء الـ Dashboard هنا */}
    </main>
  </div>
);}
export default Dashboard;