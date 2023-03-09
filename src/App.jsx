import './App.css';
import MainPage from './components/Pages/MainPage/MainPage';
import { DarkModeContextProvider } from './components/utilities/darkModeContext';

function App() {
  return (
    <div className="App">
      <DarkModeContextProvider>
        <MainPage></MainPage>
      </DarkModeContextProvider>
    </div>
  );
}

export default App;
