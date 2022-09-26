import Clients from "../components/Clients";
import AddClient from "../components/AddClient";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClient />
      </div>
      <Clients />
      <hr />
      <Projects />
    </>
  );
};

export default Home;
