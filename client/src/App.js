import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="bg-slate-900 h-screen max-h-screen">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
