import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
