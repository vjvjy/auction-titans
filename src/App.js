// import logo from './logo.svg';
import './App.css';
import {store} from './../src/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Auction/components/SignUp';
import Home from './Auction/components/Home';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignUp} />
          <Route path="/Home" Component={Home} />
        </Routes>
        </BrowserRouter>
      {/* <AuctionPage /> */}
      </Provider>
    </div>
  );
}

export default App;
