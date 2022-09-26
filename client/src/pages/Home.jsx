import Clients from "../components/Clients";
import AddClient from "../components/AddClient";
import Projects from "../components/Projects";
import AddProject from "../components/AddProject";
const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClient />
      </div>
      <Clients />
      <hr />
      <div className="d-flex gap-3 mb-4">
        <AddProject />
      </div>
      <Projects />
    </>
  );
};

export default Home;
