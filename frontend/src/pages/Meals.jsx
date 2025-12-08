import { useState } from 'react';
import { recipes, filterOptions, initialFilterState } from '../data/recipes';
import FilterSidebar from '../components/FilterSidebar';
import RecipeGrid from '../components/RecipeGrid';

const Meals = () => {
  // Filter states
  const [openFilters, setOpenFilters] = useState({});
  const [selectedFilters, setSelectedFilters] = useState(initialFilterState);

  const toggleFilter = (filterName) => {
    setOpenFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const toggleFilterOption = (filterName, option) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterName]: prev[filterName].includes(option)
        ? prev[filterName].filter(item => item !== option)
        : [...prev[filterName], option]
    }));
  };

  const removeFilter = (filterKey, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterKey]: prev[filterKey].filter(item => item !== value)
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters(initialFilterState);
  };

  // Filter recipes based on selected filters
  const filteredRecipes = recipes.filter(recipe => {
    // Region filter
    if (selectedFilters.region.length > 0 && !selectedFilters.region.includes(recipe.region)) {
      return false;
    }
    
    // Difficulty filter
    if (selectedFilters.difficulty.length > 0 && !selectedFilters.difficulty.includes(recipe.level)) {
      return false;
    }
    
    // Add more filter logic as needed...
    
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4">
          <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
          <span>/</span>
          <span className="text-slate-800 font-medium">Món ăn</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">🍳 Tất cả món ăn</h1>
        <p className="text-slate-500">Khám phá {recipes.length}+ công thức nấu ăn từ khắp nơi trên thế giới</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar */}
        <div className="lg:w-72 flex-shrink-0">
          <FilterSidebar
            filters={filterOptions}
            selectedFilters={selectedFilters}
            openFilters={openFilters}
            onToggleFilter={toggleFilter}
            onToggleOption={toggleFilterOption}
            onClearAll={clearAllFilters}
          />
        </div>

        {/* Recipes Grid - 30 items per page */}
        <RecipeGrid 
          recipes={filteredRecipes} 
          itemsPerPage={30}
          selectedFilters={selectedFilters}
          filters={filterOptions}
          onRemoveFilter={removeFilter}
          onClearAllFilters={clearAllFilters}
        />
      </div>
    </div>
  );
};

export default Meals;

