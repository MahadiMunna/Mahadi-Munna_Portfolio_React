import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <ParticleBackground/>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
