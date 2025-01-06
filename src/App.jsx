import { ScrollToTop } from "./components";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-slate-950 text-white styled-scrollbar-hidden">
      <>
        <Home />
        <ScrollToTop />
      </>
    </div>
  );
};

export default App;
