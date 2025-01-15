import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="p-4 flex overflow-hidden gap-5">
      <div className="relative ">
        <Header />
        <SideBar />
      </div>
      <MainContent />
    </main>
  )
}

export default App
