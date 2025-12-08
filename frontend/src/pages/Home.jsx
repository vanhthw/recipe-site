import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { LeftOutlined, RightOutlined, DownOutlined } from '@ant-design/icons';
import RecipeGrid from '../components/RecipeGrid';
import FilterSidebar from '../components/FilterSidebar';
import TopContributors from '../components/TopContributors';
import { recipes as allRecipes, filterOptions as filters, initialFilterState } from '../data/recipes';

const Home = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
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

  // Scroll carousel
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 280; // card width + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-900 via-amber-800 to-orange-900 p-8 md:p-16 mb-12">
        {/* Food pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">🍳</div>
          <div className="absolute top-20 right-20 text-5xl">🥗</div>
          <div className="absolute bottom-10 left-1/4 text-4xl">🍜</div>
          <div className="absolute top-1/3 right-1/3 text-5xl">🍲</div>
          <div className="absolute bottom-20 right-10 text-6xl">🥘</div>
          <div className="absolute top-5 left-1/2 text-4xl">🌶️</div>
        </div>
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-amber-400/20 to-orange-500/20 text-amber-300 text-sm font-semibold rounded-full mb-6 border border-amber-400/30">
            🍴 Hơn 1000+ công thức nấu ăn
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Nấu ăn ngon mỗi ngày,
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent"> dễ như trở bàn tay</span>
          </h1>
          <p className="text-amber-100/80 text-lg mb-8">
            Khám phá hàng ngàn công thức nấu ăn từ đơn giản đến nâng cao. Hướng dẫn chi tiết từng bước, ai cũng có thể trở thành đầu bếp tại gia!
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300">
              🔥 Khám phá ngay
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              📖 Xem công thức
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-400/30 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-red-500/20 to-orange-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Regional Cuisines Carousel */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800">🌏 Ẩm thực các vùng miền</h2>
          <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">Xem tất cả →</button>
        </div>
        <div className="relative group/carousel">
          {/* Carousel container */}
          <div 
            ref={carouselRef}
            className={`overflow-x-auto pb-4 scrollbar-hide scroll-smooth ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="flex gap-5" style={{ width: 'max-content' }}>
              {[
                { 
                  icon: '🍜', 
                  title: 'Miền Bắc', 
                  desc: 'Phở, Bún chả, Bánh cuốn...', 
                  color: 'from-red-500 to-rose-600',
                  bgColor: 'from-red-50 to-rose-50'
                },
                { 
                  icon: '🍲', 
                  title: 'Miền Trung', 
                  desc: 'Bún bò Huế, Mì Quảng, Bánh xèo...', 
                  color: 'from-amber-500 to-orange-600',
                  bgColor: 'from-amber-50 to-orange-50'
                },
                { 
                  icon: '🥗', 
                  title: 'Miền Nam', 
                  desc: 'Hủ tiếu, Bánh mì, Cơm tấm...', 
                  color: 'from-emerald-500 to-teal-600',
                  bgColor: 'from-emerald-50 to-teal-50'
                },
                { 
                  icon: '🍱', 
                  title: 'Nhật Bản', 
                  desc: 'Sushi, Ramen, Tempura...', 
                  color: 'from-pink-500 to-rose-600',
                  bgColor: 'from-pink-50 to-rose-50'
                },
                { 
                  icon: '🥡', 
                  title: 'Hàn Quốc', 
                  desc: 'Kimchi, Bibimbap, BBQ...', 
                  color: 'from-blue-500 to-indigo-600',
                  bgColor: 'from-blue-50 to-indigo-50'
                },
                { 
                  icon: '🥟', 
                  title: 'Trung Quốc', 
                  desc: 'Dimsum, Vịt quay, Mì xào...', 
                  color: 'from-yellow-500 to-amber-600',
                  bgColor: 'from-yellow-50 to-amber-50'
                },
                { 
                  icon: '🍛', 
                  title: 'Thái Lan', 
                  desc: 'Tom Yum, Pad Thai, Cà ri...', 
                  color: 'from-orange-500 to-red-600',
                  bgColor: 'from-orange-50 to-red-50'
                },
                { 
                  icon: '🍝', 
                  title: 'Ý', 
                  desc: 'Pizza, Pasta, Risotto...', 
                  color: 'from-green-500 to-emerald-600',
                  bgColor: 'from-green-50 to-emerald-50'
                },
              ].map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  // 90% các website dùng once: true vì mục đích là tạo first impression khi user lần đầu khám phá trang.
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative overflow-hidden p-6 bg-gradient-to-br ${region.bgColor} rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex-shrink-0 w-64 select-none`}
                >
                  {/* Background decoration */}
                  <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${region.color} rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500`}></div>
                  
                  <div className="relative z-10">
                    <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">{region.icon}</span>
                    <h3 className={`font-bold text-lg bg-gradient-to-r ${region.color} bg-clip-text text-transparent mb-2`}>
                      {region.title}
                    </h3>
                    <p className="text-sm text-slate-600">{region.desc}</p>
                  </div>
                  
                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-md">
                    <span className={`text-sm bg-gradient-to-r ${region.color} bg-clip-text text-transparent font-bold`}>→</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Floating navigation buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-12 h-12 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center text-slate-600 hover:text-amber-600 hover:scale-110 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 z-10 border border-slate-100"
          >
            <LeftOutlined className="text-lg" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-12 h-12 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center text-slate-600 hover:text-amber-600 hover:scale-110 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 z-10 border border-slate-100"
          >
            <RightOutlined className="text-lg" />
          </button>
          
          {/* Scroll fade indicators */}
          <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white via-white/60 to-transparent pointer-events-none"></div>
          <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800">🍽️ Danh mục phổ biến</h2>
          <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">Xem tất cả →</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { icon: '🍜', name: 'Món Việt', count: 156 },
            { icon: '🍝', name: 'Món Âu', count: 89 },
            { icon: '🍱', name: 'Món Nhật', count: 72 },
            { icon: '🥡', name: 'Món Hàn', count: 64 },
            { icon: '🍰', name: 'Bánh ngọt', count: 128 },
            { icon: '🥤', name: 'Đồ uống', count: 95 },
          ].map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center border border-slate-100 hover:border-amber-200"
            >
              <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">{category.icon}</span>
              <h3 className="font-semibold text-slate-700 mb-1">{category.name}</h3>
              <p className="text-xs text-slate-400">{category.count} công thức</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Recipes */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800">⭐ Công thức nổi bật</h2>
          <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">Xem tất cả →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Phở Bò Hà Nội', time: '45 phút', level: 'Trung bình', emoji: '🍜' },
            { name: 'Bánh Mì Thịt Nướng', time: '30 phút', level: 'Dễ', emoji: '🥖' },
            { name: 'Gỏi Cuốn Tôm Thịt', time: '25 phút', level: 'Dễ', emoji: '🥗' },
          ].map((recipe, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{recipe.emoji}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">{recipe.name}</h3>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">⏱️ {recipe.time}</span>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">{recipe.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recipes with Filter Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800">🍳 Khám phá món ăn</h2>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Hiển thị {allRecipes.length} món</span>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              selectedFilters={selectedFilters}
              openFilters={openFilters}
              onToggleFilter={toggleFilter}
              onToggleOption={toggleFilterOption}
              onClearAll={clearAllFilters}
            />
          </div>

          {/* Recipes Grid */}
          <RecipeGrid 
            recipes={allRecipes} 
            itemsPerPage={9}
            selectedFilters={selectedFilters}
            filters={filters}
            onRemoveFilter={removeFilter}
            onClearAllFilters={clearAllFilters}
          />
        </div>
      </div>

      {/* Top Contributors Section */}
      <TopContributors />
    </div>
  );
};

export default Home;

