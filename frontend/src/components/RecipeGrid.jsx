import { useState, useEffect } from 'react';
import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons';
import RecipeCard from './RecipeCard';

const RecipeGrid = ({ 
  recipes, 
  itemsPerPage = 9, 
  selectedFilters = {}, 
  filters = [],
  onRemoveFilter,
  onClearAllFilters 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(recipes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRecipes = recipes.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilters]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top of grid
      window.scrollTo({ top: document.getElementById('recipe-grid')?.offsetTop - 100, behavior: 'smooth' });
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  // Get filter label by key
  const getFilterLabel = (key) => {
    const filter = filters.find(f => f.key === key);
    return filter ? filter.label.replace(/^[^\s]+\s/, '') : key; // Remove emoji from label
  };

  // Check if any filters are selected
  const hasSelectedFilters = Object.values(selectedFilters).some(arr => arr.length > 0);

  // Get all selected filter tags
  const getSelectedFilterTags = () => {
    const tags = [];
    Object.entries(selectedFilters).forEach(([key, values]) => {
      values.forEach(value => {
        tags.push({ key, value, label: getFilterLabel(key) });
      });
    });
    return tags;
  };

  return (
    <div className="flex-1" id="recipe-grid">
      {/* Selected Filter Tags */}
      {hasSelectedFilters && (
        <div className="flex flex-wrap items-center gap-2 mb-5 pb-5 border-b border-slate-100">
          {getSelectedFilterTags().map((tag, index) => (
            <div
              key={`${tag.key}-${tag.value}-${index}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-full text-sm transition-colors group"
            >
              <span className="text-slate-500">{tag.label}:</span>
              <span className="font-medium text-slate-700">{tag.value}</span>
              <button
                onClick={() => onRemoveFilter && onRemoveFilter(tag.key, tag.value)}
                className="w-4 h-4 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
              >
                <CloseOutlined className="text-xs" />
              </button>
            </div>
          ))}
          
          {/* Clear all button */}
          <button
            onClick={onClearAllFilters}
            className="text-sm text-slate-500 hover:text-amber-600 font-medium ml-2 transition-colors"
          >
            Xóa tất cả
          </button>
        </div>
      )}

      {/* Results count */}
      {/* <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-slate-500">
          Hiển thị <span className="font-semibold text-slate-700">{recipes.length > 0 ? startIndex + 1 : 0}-{Math.min(endIndex, recipes.length)}</span> trong tổng số <span className="font-semibold text-slate-700">{recipes.length}</span> món
        </p>
      </div> */}

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {currentRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          {/* Previous button */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              currentPage === 1
                ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-600 shadow-sm'
            }`}
          >
            <LeftOutlined className="text-sm" />
          </button>

          {/* Page numbers */}
          {getPageNumbers().map((page, index) => (
            page === '...' ? (
              <span key={`ellipsis-${index}`} className="w-10 h-10 flex items-center justify-center text-slate-400">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-xl font-medium transition-all ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-600 shadow-sm'
                }`}
              >
                {page}
              </button>
            )
          ))}

          {/* Next button */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              currentPage === totalPages
                ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-600 shadow-sm'
            }`}
          >
            <RightOutlined className="text-sm" />
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeGrid;

