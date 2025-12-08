import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import Home from './pages/Home';
import Meals from './pages/Meals';
import RecipeDetail from './pages/RecipeDetail';
import Contribution from './pages/Contribution';
import Blog from './pages/Blog';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Layout Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="meals" element={<Meals />} />
          <Route path="recipe/:id" element={<RecipeDetail />} />
          <Route path="contribute" element={<Contribution />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
