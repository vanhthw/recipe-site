import { DownOutlined } from '@ant-design/icons';

const FilterSidebar = ({ 
  filters, 
  selectedFilters, 
  openFilters, 
  onToggleFilter, 
  onToggleOption, 
  onClearAll 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden sticky top-24">
      {/* Filter Header */}
      <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-800">🔍 Bộ lọc</h3>
          <button 
            onClick={onClearAll}
            className="text-xs text-amber-600 hover:text-amber-700 font-medium"
          >
            Xóa tất cả
          </button>
        </div>
      </div>
      
      {/* Filter Groups */}
      <div className="divide-y divide-slate-100">
        {filters.map((filter) => (
          <div key={filter.key} className="overflow-hidden">
            {/* Filter Header */}
            <button
              onClick={() => onToggleFilter(filter.key)}
              className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <span className="font-medium text-slate-700 text-sm">{filter.label}</span>
              <div className="flex items-center gap-2">
                {selectedFilters[filter.key]?.length > 0 && (
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                    {selectedFilters[filter.key].length}
                  </span>
                )}
                <DownOutlined 
                  className={`text-xs text-slate-400 transition-transform duration-300 ${openFilters[filter.key] ? 'rotate-180' : ''}`} 
                />
              </div>
            </button>
            
            {/* Filter Options */}
            <div 
              className={`overflow-hidden transition-all duration-300 ${openFilters[filter.key] ? 'max-h-64' : 'max-h-0'}`}
            >
              <div className="px-4 pb-3 space-y-1 max-h-52 overflow-y-auto">
                {filter.options.map((option) => (
                  <div
                    key={option}
                    onClick={() => onToggleOption(filter.key, option)}
                    className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-slate-50 cursor-pointer group transition-colors"
                  >
                    <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all ${
                      selectedFilters[filter.key]?.includes(option)
                        ? 'bg-gradient-to-r from-amber-400 to-orange-500 border-transparent'
                        : 'border-slate-300 group-hover:border-amber-400'
                    }`}>
                      {selectedFilters[filter.key]?.includes(option) && (
                        <span className="text-white text-xs">✓</span>
                      )}
                    </div>
                    <span className="text-sm text-slate-600">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;

