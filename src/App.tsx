import Router from './Routes/Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SocialMedia from './components/SoicalMedia/SocialMedia';
import './index.css';
import React from 'react';
import Loading from './components/Loading/Loading';
function App() {
  return (
    <div className="wrapp">
      <React.Suspense fallback={<Loading />}>
        <Header />
        <SocialMedia />
        <div className="container">
          <Router />
        </div>
        <Footer />
      </React.Suspense>
    </div>
  );
}
export default App;
