import './App.css';
import { Alert } from './Components/Alert';
import { Error } from './Components/Error';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Spinner } from './Components/Spinner';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  const err = false;
  const alert = false;
  const loading = false;

  return (
    <div className="bg-slate-900 h-screen max-h-screen">

    <Header />
    <AllRoutes />
    <Footer />
      {
        err === true && <Error />
      }

      {
        alert === true && <Alert />
      }

      {
        loading === true && <Spinner />
      }
    </div>
  );
}

export default App;
