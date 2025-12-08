import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  SearchOutlined, 
  CalendarOutlined, 
  EyeOutlined, 
  HeartOutlined,
  TagOutlined,
  RightOutlined,
  FireOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Categories
  const categories = [
    { key: 'all', label: 'Tất cả', count: 48 },
    { key: 'tips', label: 'Mẹo nấu ăn', count: 15, emoji: '💡' },
    { key: 'culture', label: 'Văn hóa ẩm thực', count: 12, emoji: '🌏' },
    { key: 'nutrition', label: 'Dinh dưỡng', count: 8, emoji: '🥗' },
    { key: 'stories', label: 'Câu chuyện', count: 7, emoji: '📖' },
    { key: 'review', label: 'Review', count: 6, emoji: '⭐' },
  ];

  // Featured post
  const featuredPost = {
    id: 1,
    title: 'Hành trình khám phá ẩm thực đường phố Việt Nam',
    excerpt: 'Từ Hà Nội đến Sài Gòn, mỗi góc phố đều ẩn chứa những hương vị độc đáo. Cùng khám phá những món ăn đường phố làm say đắm lòng người...',
    image: '🍜',
    category: 'culture',
    author: { name: 'Minh Anh', avatar: '👩‍🍳' },
    date: '15/12/2024',
    readTime: '8 phút',
    views: 12500,
    likes: 856,
  };

  // Blog posts
  const posts = [
    {
      id: 2,
      title: '10 mẹo nấu phở ngon như tiệm',
      excerpt: 'Bí quyết để có nồi phở thơm ngon, nước dùng trong veo như các đầu bếp chuyên nghiệp.',
      image: '🍲',
      category: 'tips',
      author: { name: 'Chef Hùng', avatar: '👨‍🍳' },
      date: '14/12/2024',
      readTime: '5 phút',
      views: 8200,
      likes: 432,
    },
    {
      id: 3,
      title: 'Tại sao món Việt lại healthy?',
      excerpt: 'Phân tích khoa học về giá trị dinh dưỡng của các món ăn truyền thống Việt Nam.',
      image: '🥬',
      category: 'nutrition',
      author: { name: 'Dr. Thu Hà', avatar: '👩‍⚕️' },
      date: '13/12/2024',
      readTime: '6 phút',
      views: 5600,
      likes: 289,
    },
    {
      id: 4,
      title: 'Câu chuyện bánh mì Việt Nam',
      excerpt: 'Từ món ăn của người Pháp đến biểu tượng ẩm thực đường phố nổi tiếng thế giới.',
      image: '🥖',
      category: 'stories',
      author: { name: 'Văn Đức', avatar: '👨' },
      date: '12/12/2024',
      readTime: '7 phút',
      views: 9800,
      likes: 567,
    },
    {
      id: 5,
      title: 'Review 5 quán bún chả ngon nhất Hà Nội',
      excerpt: 'Đã thử hết rồi mới dám chia sẻ! Top 5 địa chỉ bún chả đáng để thử khi đến thủ đô.',
      image: '🍖',
      category: 'review',
      author: { name: 'Food Hunter', avatar: '🕵️' },
      date: '11/12/2024',
      readTime: '4 phút',
      views: 7300,
      likes: 421,
    },
    {
      id: 6,
      title: 'Cách bảo quản rau củ tươi lâu',
      excerpt: 'Những mẹo đơn giản giúp rau củ trong tủ lạnh luôn tươi ngon như mới mua.',
      image: '🥕',
      category: 'tips',
      author: { name: 'Bếp Nhà', avatar: '👩‍🍳' },
      date: '10/12/2024',
      readTime: '3 phút',
      views: 4500,
      likes: 234,
    },
    {
      id: 7,
      title: 'Ẩm thực miền Tây mùa nước nổi',
      excerpt: 'Khám phá những món ăn độc đáo chỉ có vào mùa nước nổi ở đồng bằng sông Cửu Long.',
      image: '🐟',
      category: 'culture',
      author: { name: 'Hoàng Long', avatar: '👨‍🍳' },
      date: '09/12/2024',
      readTime: '6 phút',
      views: 6100,
      likes: 378,
    },
    {
      id: 8,
      title: 'Protein thực vật cho người ăn chay',
      excerpt: 'Hướng dẫn bổ sung protein đầy đủ cho người theo chế độ ăn thuần chay.',
      image: '🥜',
      category: 'nutrition',
      author: { name: 'Dr. Thu Hà', avatar: '👩‍⚕️' },
      date: '08/12/2024',
      readTime: '5 phút',
      views: 3200,
      likes: 198,
    },
  ];

  // Popular posts for sidebar
  const popularPosts = posts.slice(0, 4).sort((a, b) => b.views - a.views);

  // Tags
  const tags = ['Món Việt', 'Healthy', 'Street Food', 'Bánh', 'Nước dùng', 'Gia vị', 'Đồ ngọt', 'Món chay'];

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const getCategoryEmoji = (category) => {
    const cat = categories.find(c => c.key === category);
    return cat?.emoji || '📝';
  };

  const getCategoryLabel = (category) => {
    const cat = categories.find(c => c.key === category);
    return cat?.label || category;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          📝 Blog Ẩm Thực
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Khám phá những câu chuyện, mẹo nấu ăn và kiến thức bổ ích về ẩm thực
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        <Link 
          to={`/blog/${featuredPost.id}`}
          className="group block bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center relative">
              <span className="text-[120px] group-hover:scale-110 transition-transform duration-500">{featuredPost.image}</span>
              <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-amber-600">
                ✨ Nổi bật
              </span>
            </div>
            
            {/* Content */}
            <div className="md:w-1/2 p-8 md:p-12 text-white">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4">
                {getCategoryEmoji(featuredPost.category)} {getCategoryLabel(featuredPost.category)}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform">
                {featuredPost.title}
              </h2>
              <p className="text-white/80 mb-6 line-clamp-2">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{featuredPost.author.avatar}</span>
                  <div>
                    <p className="font-semibold">{featuredPost.author.name}</p>
                    <p className="text-sm text-white/70">{featuredPost.date} • {featuredPost.readTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <span className="flex items-center gap-1 text-sm">
                    <EyeOutlined /> {(featuredPost.views / 1000).toFixed(1)}K
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <HeartOutlined /> {featuredPost.likes}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Posts Grid */}
        <div className="lg:flex-1">
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
              />
              <SearchOutlined className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
            
            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.slice(0, 4).map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.key
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-amber-300'
                  }`}
                >
                  {cat.emoji} {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-slate-100 hover:border-amber-200"
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center relative">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{post.image}</span>
                  <span className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-600">
                    {getCategoryEmoji(post.category)} {getCategoryLabel(post.category)}
                  </span>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{post.author.avatar}</span>
                      <span className="text-sm text-slate-600">{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <ClockCircleOutlined /> {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <HeartOutlined /> {post.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-8">
              <button className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium rounded-xl transition-colors">
                Xem thêm bài viết
              </button>
            </div>
          )}

          {/* No results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <span className="text-6xl block mb-4">🔍</span>
              <p className="text-slate-500">Không tìm thấy bài viết phù hợp</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:w-80 space-y-6">
          {/* Categories */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <TagOutlined className="text-amber-500" /> Danh mục
            </h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    activeCategory === cat.key
                      ? 'bg-gradient-to-r from-amber-50 to-orange-50 text-amber-600 border border-amber-200'
                      : 'hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {cat.emoji} {cat.label}
                  </span>
                  <span className={`text-sm ${activeCategory === cat.key ? 'text-amber-500' : 'text-slate-400'}`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Popular Posts */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <FireOutlined className="text-rose-500" /> Phổ biến nhất
            </h3>
            <div className="space-y-4">
              {popularPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="flex items-start gap-3 group"
                >
                  <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                    index === 0 ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-slate-700 line-clamp-2 group-hover:text-amber-600 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                      <EyeOutlined /> {(post.views / 1000).toFixed(1)}K lượt xem
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Tags Cloud */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-slate-800 mb-4">🏷️ Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-700 text-sm rounded-lg transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-6 text-white">
            <h3 className="font-bold mb-2">📬 Đăng ký nhận tin</h3>
            <p className="text-sm text-white/80 mb-4">
              Nhận bài viết mới nhất mỗi tuần
            </p>
            <input
              type="email"
              placeholder="Email của bạn"
              className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30 transition-all mb-3"
            />
            <button className="w-full py-3 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-lg transition-all">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;


