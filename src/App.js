import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Topbar from './components/Topbar'
import PageHeading from './components/PageHeading'
import SmallCard from './components/SmallCard'
import BigCardText from './components/BigCardText'
import BigCardButtons from './components/BigCardButtons'

import './App.css';
import './assets/css/app.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="wrapper">
              <Sidebar />
              <div id="content-wrapper" className="d-flex flex-column">
                  <Topbar />
                  <div className="container-fluid">
                      <PageHeading />
                      <div className="row">
                        <SmallCard />
                        <SmallCard />
                        <SmallCard />
                      </div>
                      <div className="row">
                        <BigCardText />
                        <BigCardButtons />
                      </div>
                  </div>
                  <Footer />
              </div>
          </div>
      </header>
    </div>
  );
}

export default App;
