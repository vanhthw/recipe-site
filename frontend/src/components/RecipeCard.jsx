import { Link } from 'react-router-dom';
import { HeartOutlined, ClockCircleOutlined } from '@ant-design/icons';

const RecipeCard = ({ recipe }) => {
  return (
    <Link 
      to={`/recipe/${recipe.id}`}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-100 hover:border-amber-200 block"
    >
      {/* Recipe Image */}
      <div className="relative h-44 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center overflow-hidden">
        <span className="text-6xl group-hover:scale-125 transition-transform duration-500">{recipe.emoji}</span>
        
        {/* Wishlist button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // TODO: Add to wishlist logic
          }}
          className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-white transition-all shadow-md"
        >
          <HeartOutlined className="text-lg" />
        </button>
        
        {/* Region tag */}
        <span className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700 shadow-sm">
          {recipe.region}
        </span>
      </div>
      
      {/* Recipe Info */}
      <div className="p-4">
        <h3 className="font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors line-clamp-1">
          {recipe.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <ClockCircleOutlined /> {recipe.time}
            </span>
            <span className={`px-2 py-0.5 rounded-full font-medium ${
              recipe.level === 'Dễ' || recipe.level === 'Rất dễ' ? 'bg-green-100 text-green-700' :
              recipe.level === 'Trung bình' ? 'bg-amber-100 text-amber-700' :
              'bg-red-100 text-red-700'
            }`}>
              {recipe.level}
            </span>
          </div>
          <span className="font-bold text-amber-600 text-sm">{recipe.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
