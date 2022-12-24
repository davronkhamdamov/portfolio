import React from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./Home/Home'));
const About = React.lazy(() => import('./About/About'));
const Contact = React.lazy(() => import('./Contact/Contact'));
const PageNotFound = React.lazy(() => import('./PageNotFound/PageNotFound'));
const Work = React.lazy(() => import('./Work/Work'));

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/contact" element={<Contact />} />;
      <Route path="/about" element={<About />} />;
      <Route path="/work" element={<Work />} />;
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
