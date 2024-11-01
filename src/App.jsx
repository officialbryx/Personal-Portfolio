import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="relative h-screen w-screen bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        {/* Main Content */}
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
