import { Link } from 'react-router-dom';
import { 
  TrophyOutlined, 
  HeartOutlined, 
  FireOutlined, 
  StarOutlined,
  RiseOutlined,
  CrownOutlined,
  GiftOutlined,
  TeamOutlined,
  PlusOutlined
} from '@ant-design/icons';

const Contribution = () => {
  // Stats data
  const stats = [
    { icon: '📖', label: 'Công thức', value: '1,234', color: 'from-amber-400 to-orange-500' },
    { icon: '👨‍🍳', label: 'Đầu bếp', value: '456', color: 'from-blue-400 to-indigo-500' },
    { icon: '❤️', label: 'Lượt thích', value: '89K', color: 'from-rose-400 to-pink-500' },
    { icon: '👀', label: 'Lượt xem', value: '2.5M', color: 'from-emerald-400 to-teal-500' },
  ];

  // Top contributors
  const topContributors = [
    { id: 1, name: 'Minh Anh', avatar: '👩‍🍳', recipes: 128, likes: 15600, badge: 'gold', specialty: 'Món Việt' },
    { id: 2, name: 'Hoàng Long', avatar: '👨‍🍳', recipes: 95, likes: 12300, badge: 'silver', specialty: 'Món Hàn' },
    { id: 3, name: 'Thu Hương', avatar: '👩‍🍳', recipes: 82, likes: 9800, badge: 'bronze', specialty: 'Bánh ngọt' },
    { id: 4, name: 'Văn Đức', avatar: '👨‍🍳', recipes: 67, likes: 7500, specialty: 'Món Nhật' },
    { id: 5, name: 'Ngọc Linh', avatar: '👩‍🍳', recipes: 54, likes: 6200, specialty: 'Đồ uống' },
  ];

  // Most liked recipes
  const popularRecipes = [
    { id: 1, name: 'Phở Bò Hà Nội', emoji: '🍜', likes: 2340, author: 'Minh Anh', region: 'Miền Bắc' },
    { id: 2, name: 'Bún Bò Huế', emoji: '🍲', likes: 1890, author: 'Thu Hương', region: 'Miền Trung' },
    { id: 3, name: 'Cơm Tấm Sườn', emoji: '🍚', likes: 1650, author: 'Hoàng Long', region: 'Miền Nam' },
    { id: 4, name: 'Bánh Mì Thịt', emoji: '🥖', likes: 1420, author: 'Văn Đức', region: 'Miền Nam' },
    { id: 5, name: 'Gỏi Cuốn', emoji: '🥗', likes: 1280, author: 'Ngọc Linh', region: 'Miền Nam' },
    { id: 6, name: 'Bún Chả', emoji: '🍖', likes: 1150, author: 'Minh Anh', region: 'Miền Bắc' },
  ];

  // Recent contributions
  const recentContributions = [
    { id: 1, name: 'Canh Chua Cá Lóc', author: 'Thanh Tâm', time: '2 giờ trước', emoji: '🍲' },
    { id: 2, name: 'Chè Đậu Xanh', author: 'Hồng Nhung', time: '5 giờ trước', emoji: '🍨' },
    { id: 3, name: 'Gà Kho Gừng', author: 'Minh Tuấn', time: '1 ngày trước', emoji: '🍗' },
  ];

  // Benefits
  const benefits = [
    { icon: '🏆', title: 'Xếp hạng', desc: 'Lên top bảng xếp hạng đầu bếp' },
    { icon: '🎖️', title: 'Huy hiệu', desc: 'Nhận badge độc quyền' },
    { icon: '💝', title: 'Cộng đồng', desc: 'Được yêu thích và theo dõi' },
    { icon: '🎁', title: 'Phần thưởng', desc: 'Quà tặng cho top contributor' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 p-8 md:p-12 mb-12">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] opacity-5">👨‍🍳</div>
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6">
            🌟 Cùng xây dựng cộng đồng ẩm thực
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Chia sẻ công thức,
            <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent"> lan tỏa đam mê!</span>
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Mỗi công thức bạn đóng góp là một câu chuyện, một hương vị được truyền tải đến hàng ngàn người yêu bếp khác.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/submit-recipe"
              className="px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all flex items-center gap-2"
            >
              <PlusOutlined /> Đóng góp công thức
            </Link>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
            <span className="text-4xl block mb-3">{stat.icon}</span>
            <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
              {stat.value}
            </p>
            <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Top Contributors - 2 columns */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <TrophyOutlined className="text-amber-500" /> Bảng xếp hạng đầu bếp
                </h2>
                <span className="text-sm text-amber-600 font-medium">Tháng này</span>
              </div>
            </div>

            {/* Top 3 Podium */}
            <div className="p-6 bg-gradient-to-b from-slate-50 to-white">
              <div className="flex items-end justify-center gap-4 mb-6">
                {/* 2nd place */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center text-3xl mb-2 ring-4 ring-slate-300">
                    {topContributors[1].avatar}
                  </div>
                  <p className="font-semibold text-slate-700 text-sm">{topContributors[1].name}</p>
                  <p className="text-xs text-slate-500">{topContributors[1].recipes} công thức</p>
                  <div className="mt-2 w-16 h-16 bg-gradient-to-b from-slate-300 to-slate-400 rounded-t-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                </div>

                {/* 1st place */}
                <div className="text-center -mt-4">
                  <CrownOutlined className="text-3xl text-yellow-400 mb-1" />
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center text-4xl mb-2 ring-4 ring-yellow-400">
                    {topContributors[0].avatar}
                  </div>
                  <p className="font-bold text-slate-800">{topContributors[0].name}</p>
                  <p className="text-xs text-slate-500">{topContributors[0].recipes} công thức</p>
                  <div className="mt-2 w-20 h-24 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-t-lg flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                </div>

                {/* 3rd place */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center text-3xl mb-2 ring-4 ring-amber-500">
                    {topContributors[2].avatar}
                  </div>
                  <p className="font-semibold text-slate-700 text-sm">{topContributors[2].name}</p>
                  <p className="text-xs text-slate-500">{topContributors[2].recipes} công thức</p>
                  <div className="mt-2 w-16 h-12 bg-gradient-to-b from-amber-500 to-amber-600 rounded-t-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rest of leaderboard */}
            <div className="divide-y divide-slate-100">
              {topContributors.slice(3).map((contributor, index) => (
                <div key={contributor.id} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors">
                  <span className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-bold text-slate-500">
                    {index + 4}
                  </span>
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center text-xl">
                    {contributor.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-700">{contributor.name}</p>
                    <p className="text-xs text-slate-400">{contributor.specialty}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-amber-600">{contributor.recipes}</p>
                    <p className="text-xs text-slate-400">công thức</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 text-center">
              <Link to="/leaderboard" className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                Xem bảng xếp hạng đầy đủ →
              </Link>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Benefits Card */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <GiftOutlined /> Quyền lợi khi đóng góp
            </h3>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                  <span className="text-2xl">{benefit.icon}</span>
                  <div>
                    <p className="font-semibold text-sm">{benefit.title}</p>
                    <p className="text-xs text-white/70">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Contributions */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <RiseOutlined className="text-green-500" /> Mới đóng góp
              </h3>
            </div>
            <div className="divide-y divide-slate-100">
              {recentContributions.map((item) => (
                <div key={item.id} className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors">
                  <span className="text-2xl">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-700 text-sm truncate">{item.name}</p>
                    <p className="text-xs text-slate-400">bởi {item.author} • {item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popular Recipes */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <HeartOutlined className="text-rose-500" /> Công thức được yêu thích nhất
          </h2>
          <Link to="/meals" className="text-amber-600 hover:text-amber-700 font-medium text-sm">
            Xem tất cả →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularRecipes.map((recipe, index) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all relative"
            >
              {/* Rank badge */}
              {index < 3 && (
                <div className={`absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white z-10 ${
                  index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-slate-400' : 'bg-amber-500'
                }`}>
                  {index + 1}
                </div>
              )}
              
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <span className="text-5xl group-hover:scale-110 transition-transform">{recipe.emoji}</span>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-slate-800 text-sm line-clamp-1 group-hover:text-amber-600 transition-colors">
                  {recipe.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-slate-400">{recipe.region}</span>
                  <span className="flex items-center gap-1 text-xs text-rose-500">
                    ❤️ {recipe.likes.toLocaleString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10">
          <span className="text-6xl block mb-4">🍳</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Bạn có công thức độc đáo?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8">
            Đừng giữ riêng cho mình! Chia sẻ với cộng đồng và trở thành đầu bếp được yêu thích nhất.
          </p>
          <Link 
            to="/submit-recipe"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-orange-500/30 transform hover:scale-105 transition-all"
          >
            <PlusOutlined /> Bắt đầu đóng góp ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contribution;

