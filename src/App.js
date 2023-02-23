import WhatWeDo from './containers/WhatWeDo';
import OurTeam from './containers/OurTeam';
import Testimonials from './containers/Testimonials';
import ContactUs from './containers/ContactUs';
import Header from './containers/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <WhatWeDo />
        <OurTeam />
        <Testimonials />
        <ContactUs />
      </main>
      <footer>
        <p>Copyright © 2023</p>
      </footer>
    </div>
  );
}

export default App;
