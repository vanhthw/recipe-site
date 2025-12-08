import { useParams, Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { 
  ClockCircleOutlined, 
  FireOutlined, 
  TeamOutlined,
  HeartOutlined,
  HeartFilled,
  ShareAltOutlined,
  PrinterOutlined,
  LeftOutlined,
  RightOutlined,
  PlayCircleOutlined,
  CheckOutlined
} from '@ant-design/icons';
import { Steps } from 'antd';
import { recipes } from '../data/recipes';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));
  const [liked, setLiked] = useState(false);
  const [checkedSteps, setCheckedSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [storyExpanded, setStoryExpanded] = useState(false);
  const [showFloatNav, setShowFloatNav] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const videoCarouselRef = useRef(null);

  // Handle scroll to show/hide float nav and track active section
  useEffect(() => {
    const handleScroll = () => {
      // Show float nav after scrolling 400px
      setShowFloatNav(window.scrollY > 400);

      // Track active section
      const sections = ['story-section', 'recipe-section', 'video-section'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Header offset
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  const navSections = [
    { id: 'story-section', title: 'Câu chuyện', icon: '📜' },
    { id: 'recipe-section', title: 'Công thức', icon: '👨‍🍳' },
    { id: 'video-section', title: 'Video', icon: '🎬' },
  ];

  // Mock detailed data - in real app, this would come from API
  const recipeDetails = {
    description: 'Một món ăn truyền thống đậm đà hương vị, được chế biến từ những nguyên liệu tươi ngon nhất. Món ăn này phù hợp cho bữa cơm gia đình hoặc những dịp đặc biệt.',
    servings: 4,
    calories: 450,
    prepTime: '15 phút',
    cookTime: recipe?.time || '30 phút',
    ingredients: [
      { name: 'Thịt bò', amount: '500g', note: 'Thái lát mỏng' },
      { name: 'Hành tây', amount: '2 củ', note: 'Thái múi cau' },
      { name: 'Tỏi băm', amount: '3 tép', note: '' },
      { name: 'Nước mắm', amount: '2 muỗng canh', note: '' },
      { name: 'Đường', amount: '1 muỗng cà phê', note: '' },
      { name: 'Tiêu', amount: '1/2 muỗng cà phê', note: '' },
      { name: 'Dầu ăn', amount: '2 muỗng canh', note: '' },
      { name: 'Hành lá', amount: '2 cây', note: 'Cắt khúc' },
    ],
    steps: [
      {
        step: 1,
        title: 'Sơ chế nguyên liệu',
        time: '10 phút',
        description: 'Thịt bò rửa sạch, thái lát mỏng. Ướp với 1 muỗng nước mắm, 1/2 muỗng đường, tiêu trong 15 phút. Hành tây bóc vỏ, thái múi cau. Hành lá rửa sạch, cắt khúc.',
        tip: 'Thái thịt bò ngược thớ để thịt mềm hơn khi nấu.'
      },
      {
        step: 2,
        title: 'Xào thịt bò',
        time: '5 phút',
        description: 'Bắc chảo lên bếp, cho dầu ăn vào đun nóng. Cho tỏi băm vào phi thơm. Cho thịt bò vào xào nhanh tay trên lửa lớn đến khi thịt chín tái, múc ra đĩa.',
        tip: 'Xào nhanh tay để thịt không bị dai.'
      },
      {
        step: 3,
        title: 'Xào hành tây',
        time: '3 phút',
        description: 'Dùng chảo đó, cho thêm một ít dầu. Cho hành tây vào xào đến khi hành mềm và có mùi thơm.',
        tip: 'Không xào hành quá lâu để giữ độ giòn.'
      },
      {
        step: 4,
        title: 'Hoàn thành',
        time: '2 phút',
        description: 'Cho thịt bò trở lại chảo, đảo đều với hành tây. Nêm thêm nước mắm, đường cho vừa ăn. Rắc hành lá lên trên, đảo đều và tắt bếp.',
        tip: 'Có thể thêm một ít tiêu xay để tăng hương vị.'
      },
    ],
    // Videos được lưu trong database, admin thêm thủ công YouTube ID
    // Sau này có thể dùng YouTube Data API để tự động tìm
    videos: [
      { id: 1, title: `Cách làm ${recipe?.name || 'món này'} chuẩn vị`, youtubeId: 'dQw4w9WgXcQ', duration: '10:25', channel: 'Bếp Nhà Ta' },
      { id: 2, title: `${recipe?.name || 'Món này'} - Bí quyết nhà hàng`, youtubeId: 'dQw4w9WgXcQ', duration: '15:30', channel: 'Chef Hùng' },
      { id: 3, title: `Nấu ${recipe?.name || 'món này'} siêu nhanh 15 phút`, youtubeId: 'dQw4w9WgXcQ', duration: '8:15', channel: 'Nấu Ăn Nhanh' },
      { id: 4, title: `${recipe?.name || 'Món này'} theo phong cách ${recipe?.region || 'truyền thống'}`, youtubeId: 'dQw4w9WgXcQ', duration: '12:45', channel: 'Ẩm Thực Việt' },
      { id: 5, title: `Review ${recipe?.name || 'món này'} ngon nhất Sài Gòn`, youtubeId: 'dQw4w9WgXcQ', duration: '7:20', channel: 'Food Reviewer' },
      { id: 6, title: `${recipe?.name || 'Món này'} phiên bản healthy`, youtubeId: 'dQw4w9WgXcQ', duration: '9:50', channel: 'Eat Clean VN' },
    ],
    author: {
      name: 'Minh Anh',
      avatar: '👩‍🍳',
      recipes: 128,
    },
    relatedRecipes: recipes.filter(r => r.region === recipe?.region && r.id !== recipe?.id).slice(0, 4),
  };

  const scrollVideos = (direction) => {
    if (videoCarouselRef.current) {
      const scrollAmount = 320;
      videoCarouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const toggleStep = (stepNum) => {
    setCheckedSteps(prev => 
      prev.includes(stepNum) 
        ? prev.filter(s => s !== stepNum)
        : [...prev, stepNum]
    );
  };

  if (!recipe) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <span className="text-6xl block mb-4">🍳</span>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Không tìm thấy công thức</h1>
        <p className="text-slate-500 mb-6">Công thức này có thể đã bị xóa hoặc không tồn tại.</p>
        <Link to="/meals" className="inline-block px-6 py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 transition-colors">
          Xem các công thức khác
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link to="/" className="hover:text-amber-600 transition-colors">Trang chủ</Link>
        <span>/</span>
        <Link to="/meals" className="hover:text-amber-600 transition-colors">Món ăn</Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">{recipe.name}</span>
      </nav>

      {/* Section 1: Hero - Image & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Image */}
        <div className="relative">
          <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl shadow-amber-200/50">
            <span className="text-[12rem] hover:scale-110 transition-transform duration-500">{recipe.emoji}</span>
          </div>
          
          {/* Action buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button 
              onClick={() => setLiked(!liked)}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all ${
                liked ? 'bg-rose-500 text-white' : 'bg-white/90 text-slate-600 hover:text-rose-500'
              }`}
            >
              {liked ? <HeartFilled className="text-xl" /> : <HeartOutlined className="text-xl" />}
            </button>
            <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-slate-600 hover:text-amber-600 shadow-lg transition-all">
              <ShareAltOutlined className="text-xl" />
            </button>
            <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-slate-600 hover:text-amber-600 shadow-lg transition-all">
              <PrinterOutlined className="text-xl" />
            </button>
          </div>

          {/* Region badge */}
          <div className="absolute bottom-4 left-4">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 shadow-lg">
              📍 {recipe.region}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              recipe.level === 'Dễ' || recipe.level === 'Rất dễ' ? 'bg-green-100 text-green-700' :
              recipe.level === 'Trung bình' ? 'bg-amber-100 text-amber-700' :
              'bg-red-100 text-red-700'
            }`}>
              {recipe.level}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{recipe.name}</h1>
          
          <p className="text-slate-600 mb-6 leading-relaxed">{recipeDetails.description}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-amber-50 rounded-2xl p-4 text-center">
              <ClockCircleOutlined className="text-2xl text-amber-600 mb-2" />
              <p className="text-xs text-slate-500 mb-1">Chuẩn bị</p>
              <p className="font-semibold text-slate-800">{recipeDetails.prepTime}</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-4 text-center">
              <FireOutlined className="text-2xl text-orange-600 mb-2" />
              <p className="text-xs text-slate-500 mb-1">Nấu</p>
              <p className="font-semibold text-slate-800">{recipeDetails.cookTime}</p>
            </div>
            <div className="bg-rose-50 rounded-2xl p-4 text-center">
              <TeamOutlined className="text-2xl text-rose-600 mb-2" />
              <p className="text-xs text-slate-500 mb-1">Khẩu phần</p>
              <p className="font-semibold text-slate-800">{recipeDetails.servings} người</p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-4 text-center">
              <span className="text-2xl block mb-2">🔥</span>
              <p className="text-xs text-slate-500 mb-1">Calories</p>
              <p className="font-semibold text-slate-800">{recipeDetails.calories} kcal</p>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center text-2xl">
              {recipeDetails.author.avatar}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-800">{recipeDetails.author.name}</p>
              <p className="text-sm text-slate-500">{recipeDetails.author.recipes} công thức</p>
            </div>
            <button className="px-4 py-2 bg-amber-500 text-white rounded-xl font-medium hover:bg-amber-600 transition-colors">
              Theo dõi
            </button>
          </div>

          {/* Price */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-slate-500">Chi phí ước tính:</span>
            <span className="text-2xl font-bold text-amber-600">{recipe.price}</span>
          </div>
        </div>
      </div>

      {/* Section: Story & Origin */}
      <div id="story-section" className="mb-12 scroll-mt-24">
        <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 rounded-3xl p-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-rose-200/30 to-pink-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📜</span>
              <h2 className="text-2xl font-bold text-slate-800">Câu chuyện món ăn</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main story */}
              <div className="lg:col-span-2">
                {/* Collapsible content */}
                <div className={`space-y-4 overflow-hidden transition-all duration-500 ${storyExpanded ? 'max-h-[2000px]' : 'max-h-[180px]'}`}>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    <span className="text-4xl font-serif text-amber-600 float-left mr-3 mt-1">"</span>
                    {recipe.name} là một trong những món ăn đặc trưng của ẩm thực {recipe.region}, 
                    mang đậm hương vị truyền thống được lưu truyền qua nhiều thế hệ. 
                    Món ăn này không chỉ là một phần của bữa cơm gia đình mà còn là biểu tượng 
                    văn hóa ẩm thực đầy tự hào.
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed">
                    Được biết đến với hương vị đặc trưng và cách chế biến công phu, {recipe.name} 
                    đã trở thành món ăn yêu thích của nhiều người. Mỗi gia đình có một bí quyết 
                    riêng để tạo nên hương vị độc đáo, nhưng điểm chung là sự tỉ mỉ trong từng 
                    công đoạn và nguyên liệu tươi ngon.
                  </p>

                  {/* Extended content - only visible when expanded */}
                  <p className="text-slate-600 leading-relaxed">
                    Theo các nghiên cứu lịch sử, {recipe.name} xuất hiện lần đầu tiên vào khoảng 
                    thế kỷ 19, khi những người dân địa phương sáng tạo ra công thức này từ những 
                    nguyên liệu sẵn có trong vùng. Qua thời gian, món ăn đã được cải tiến và hoàn 
                    thiện để có được hương vị như ngày nay.
                  </p>

                  <p className="text-slate-600 leading-relaxed">
                    Ngày nay, {recipe.name} không chỉ được yêu thích trong nước mà còn được nhiều 
                    du khách quốc tế tìm kiếm và thưởng thức. Nhiều nhà hàng đã đưa món ăn này 
                    vào thực đơn của mình, góp phần quảng bá văn hóa ẩm thực Việt Nam ra thế giới.
                  </p>

                  <p className="text-slate-600 leading-relaxed">
                    Một điều thú vị là mỗi vùng miền lại có cách chế biến {recipe.name} khác nhau, 
                    tạo nên sự đa dạng và phong phú cho món ăn này. Dù ở đâu, bạn cũng có thể 
                    tìm thấy một phiên bản độc đáo của món ăn, mang đậm dấu ấn địa phương.
                  </p>
                </div>

                {/* Gradient fade overlay when collapsed */}
                {!storyExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-amber-50 via-amber-50/80 to-transparent pointer-events-none lg:w-2/3"></div>
                )}

                {/* Read more button */}
                <div className="flex justify-center mt-4 relative z-10">
                  <button
                    onClick={() => setStoryExpanded(!storyExpanded)}
                    className="group flex items-center gap-2 px-6 py-2.5 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-amber-700 hover:bg-white hover:shadow-lg transition-all border border-amber-200/50"
                  >
                    <span>{storyExpanded ? 'Thu gọn' : 'Xem thêm câu chuyện'}</span>
                    <span className={`transition-transform duration-300 ${storyExpanded ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 pt-4 mt-2">
                  <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 shadow-sm">
                    🏛️ Nguồn gốc: {recipe.region}
                  </span>
                  <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 shadow-sm">
                    👨‍👩‍👧‍👦 Phù hợp: Gia đình
                  </span>
                  <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 shadow-sm">
                    🍽️ Bữa: Chính
                  </span>
                </div>
              </div>

              {/* Quick facts */}
              <div className="lg:col-span-1">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <span className="text-xl">💡</span> Bạn có biết?
                  </h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 text-sm">🌟</span>
                      <p className="text-sm text-slate-600">
                        Món ăn này được xem là một trong những đặc sản nổi tiếng nhất của vùng.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 text-sm">🔥</span>
                      <p className="text-sm text-slate-600">
                        Bí quyết ngon là sử dụng nguyên liệu tươi và nấu trên lửa vừa.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 text-sm">❤️</span>
                      <p className="text-sm text-slate-600">
                        Được hơn 10,000+ người yêu thích trên nền tảng của chúng tôi.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Ingredients & Steps */}
      <div id="recipe-section" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 scroll-mt-24">
        {/* Ingredients */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sticky top-24">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🥗 Nguyên liệu
              <span className="text-sm font-normal text-slate-500">({recipeDetails.ingredients.length} món)</span>
            </h2>
            
            <ul className="space-y-3">
              {recipeDetails.ingredients.map((ing, index) => (
                <li key={index} className="flex items-start gap-3 pb-3 border-b border-slate-100 last:border-b-0 last:pb-0">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                  <div className="flex-1">
                    <span className="font-medium text-slate-800">{ing.name}</span>
                    <span className="text-amber-600 ml-2">{ing.amount}</span>
                    {ing.note && <p className="text-sm text-slate-500">{ing.note}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Steps */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            👨‍🍳 Cách làm
            <span className="text-sm font-normal text-slate-500">({recipeDetails.steps.length} bước)</span>
          </h2>

          {/* Steps Overview */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 mb-6">
            <div className="overflow-x-auto pb-2">
              <Steps
                current={currentStep}
                onChange={setCurrentStep}
                size="small"
                className="recipe-steps"
                items={recipeDetails.steps.map((step, index) => ({
                  title: (
                    <span className={`font-medium ${checkedSteps.includes(step.step) ? 'text-green-600' : ''}`}>
                      {step.title}
                    </span>
                  ),
                  description: (
                    <span className="flex items-center gap-1 text-xs">
                      <ClockCircleOutlined /> {step.time}
                    </span>
                  ),
                  status: checkedSteps.includes(step.step) 
                    ? 'finish' 
                    : currentStep === index 
                      ? 'process' 
                      : 'wait',
                }))}
              />
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="text-sm text-slate-500">
                Tổng thời gian: <span className="font-semibold text-amber-600">{recipeDetails.cookTime}</span>
              </div>
              <div className="text-sm text-slate-500">
                Hoàn thành: <span className="font-semibold text-green-600">{checkedSteps.length}/{recipeDetails.steps.length}</span>
              </div>
            </div>
          </div>
          
          {/* Detailed Steps */}
          <div className="space-y-6">
            {recipeDetails.steps.map((step) => (
              <div 
                key={step.step}
                className={`bg-white rounded-2xl shadow-lg border-2 p-6 transition-all cursor-pointer ${
                  checkedSteps.includes(step.step) 
                    ? 'border-green-400 bg-green-50/50' 
                    : 'border-slate-100 hover:border-amber-200'
                }`}
                onClick={() => toggleStep(step.step)}
              >
                <div className="flex items-start gap-4">
                  {/* Step number */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold transition-all ${
                    checkedSteps.includes(step.step)
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-amber-400 to-orange-500 text-white'
                  }`}>
                    {checkedSteps.includes(step.step) ? <CheckOutlined /> : step.step}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`font-bold text-lg mb-2 ${
                      checkedSteps.includes(step.step) ? 'text-green-700 line-through' : 'text-slate-800'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`leading-relaxed mb-3 ${
                      checkedSteps.includes(step.step) ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {step.description}
                    </p>
                    
                    {step.tip && (
                      <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-xl">
                        <span className="text-amber-500">💡</span>
                        <p className="text-sm text-amber-700">{step.tip}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* Section 3: Video Tutorials */}
      <div id="video-section" className="mb-12 scroll-mt-24">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              🎬 Video tham khảo
            </h2>
            <p className="text-sm text-slate-500 mt-1">Các video nấu {recipe.name} từ YouTube</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => scrollVideos('left')}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-amber-600 hover:shadow-lg transition-all"
            >
              <LeftOutlined />
            </button>
            <button 
              onClick={() => scrollVideos('right')}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-amber-600 hover:shadow-lg transition-all"
            >
              <RightOutlined />
            </button>
          </div>
        </div>

        <div 
          ref={videoCarouselRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none' }}
        >
          {recipeDetails.videos.map((video) => (
            <div key={video.id} className="flex-shrink-0 w-[300px]">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all group">
                {/* Video thumbnail */}
                <div className="relative aspect-video bg-slate-900">
                  <img 
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a 
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 hover:scale-110 transition-all shadow-xl"
                    >
                      <PlayCircleOutlined className="text-3xl" />
                    </a>
                  </div>
                  <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {video.duration}
                  </span>
                </div>
                
                {/* Video info */}
                <div className="p-4">
                  <h3 className="font-semibold text-slate-800 group-hover:text-amber-600 transition-colors text-sm line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Recipes */}
      {recipeDetails.relatedRecipes.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            🍽️ Món ăn tương tự
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recipeDetails.relatedRecipes.map((r) => (
              <Link 
                key={r.id} 
                to={`/recipe/${r.id}`}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  <span className="text-5xl group-hover:scale-110 transition-transform">{r.emoji}</span>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-slate-800 text-sm line-clamp-1 group-hover:text-amber-600 transition-colors">
                    {r.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{r.time}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Comments Section */}
      <div className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            💬 Bình luận & Thảo luận
            <span className="text-sm font-normal text-slate-500">(24 bình luận)</span>
          </h2>
        </div>

        {/* Comment Input */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 mb-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center text-xl flex-shrink-0">
              👤
            </div>
            <div className="flex-1">
              <textarea
                placeholder="Chia sẻ ý kiến của bạn về công thức này..."
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm resize-none focus:outline-none focus:border-amber-400 focus:bg-white transition-all"
                rows={3}
              />
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2 text-slate-400">
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Thêm ảnh">
                    📷
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Thêm emoji">
                    😊
                  </button>
                </div>
                <button className="px-6 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                  Gửi bình luận
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {/* Sample comments */}
          {[
            {
              id: 1,
              name: 'Nguyễn Văn A',
              avatar: '👨',
              time: '2 giờ trước',
              content: 'Công thức rất chi tiết và dễ làm theo! Mình đã thử và cả nhà đều khen ngon. Cảm ơn tác giả nhiều!',
              likes: 15,
              replies: 2,
              isLiked: false,
            },
            {
              id: 2,
              name: 'Trần Thị B',
              avatar: '👩',
              time: '5 giờ trước',
              content: 'Mình nghĩ ở bước 2 nên xào thịt nhanh hơn một chút, khoảng 2-3 phút thôi để thịt không bị dai. Còn lại thì hoàn hảo!',
              likes: 8,
              replies: 1,
              isLiked: true,
              isHelpful: true,
            },
            {
              id: 3,
              name: 'Lê Văn C',
              avatar: '👨‍🍳',
              time: '1 ngày trước',
              content: 'Món này mình hay nấu cho gia đình. Tip thêm: có thể thêm một chút dầu hào để tăng độ bóng và vị umami nhé!',
              likes: 23,
              replies: 5,
              isLiked: false,
            },
          ].map((comment) => (
            <div key={comment.id} className="bg-white rounded-2xl shadow-md border border-slate-100 p-5 hover:shadow-lg transition-all">
              <div className="flex gap-4">
                {/* Avatar */}
                <div className="w-11 h-11 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  {comment.avatar}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-semibold text-slate-800">{comment.name}</span>
                    {comment.isHelpful && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        💡 Góp ý hữu ích
                      </span>
                    )}
                    <span className="text-xs text-slate-400">{comment.time}</span>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {comment.content}
                  </p>
                  
                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <button className={`flex items-center gap-1.5 text-sm transition-colors ${
                      comment.isLiked ? 'text-rose-500' : 'text-slate-400 hover:text-rose-500'
                    }`}>
                      {comment.isLiked ? '❤️' : '🤍'} {comment.likes}
                    </button>
                    <button className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-amber-600 transition-colors">
                      💬 Trả lời {comment.replies > 0 && `(${comment.replies})`}
                    </button>
                    <button className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
                      •••
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Load more button */}
          <div className="text-center pt-4">
            <button className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium rounded-xl transition-colors">
              Xem thêm bình luận
            </button>
          </div>
        </div>
      </div>

      {/* Floating Navigation */}
      <div 
        className={`fixed right-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
          showFloatNav ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'
        }`}
      >
        <div className="bg-white/90 backdrop-blur-md rounded-full shadow-xl border border-slate-200/50 p-2 flex flex-col gap-2">
          {navSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              title={section.title}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all ${
                activeSection === index
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg shadow-orange-500/30 scale-110'
                  : 'hover:bg-slate-100 hover:scale-105'
              }`}
            >
              {section.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;

