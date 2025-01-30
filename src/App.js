// import logo from './logo.svg';
import logo from './clipart1152511.png'
import './App.css';
import Parent from './Parent';
import UserDetails from './UserDetails/UserDetails';
import {store} from './../src/store'
import { Provider } from 'react-redux'
import NodeJs from './UserDetails/NodeJs';
import AuctionPage from './Auction/components/AuctionPage';
import UserTable from './UserTable';
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
