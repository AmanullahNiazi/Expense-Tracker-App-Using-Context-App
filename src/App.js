
import './App.css';
import Addtransaction from './components/Addtransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import Transaction from './components/Transaction';
import { AppProvider } from './context/Context';



function App() {

  return (
    <AppProvider>

   

    <div className="App">
      <Header />
      <Balance />
      <Transaction />
      <Addtransaction />
        
    </div>
     
    </AppProvider>
  );
}

export default App;
