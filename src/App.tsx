import { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import TodoServiceContextProvider from './Context/TodoService';

export const MainLayout = lazy(() => import('./Layout/MainLayout'));
export const Home = lazy(() => import('./Pages/Home'));

function App() {
  return (
    <Suspense fallback="Loading...">
      <TodoServiceContextProvider>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route key="home" path="/" element={<Home />} />
            </Route>
          </Routes>
        </HashRouter>
      </TodoServiceContextProvider>
    </Suspense>
  );
}

export default App;
