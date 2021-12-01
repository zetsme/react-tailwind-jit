import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Home from './pages/Home';
const Comments = React.lazy(() => import('./pages/Comments'));

const App = () => {
  return (
    <BrowserRouter>
      <nav className='bg-blue-300'>
        <div className='container p-4'>
          <Link to='/' className='uppercase font-bold p-2 border-2 rounded-md'>
            Home
          </Link>
        </div>
      </nav>
      <div className='container mx-auto px-2 md:px-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/comments/:postId'
            element={
              <React.Suspense fallback={<>...</>}>
                <Comments />
              </React.Suspense>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
