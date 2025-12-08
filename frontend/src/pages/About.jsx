import { Link } from 'react-router-dom';
import { 
  HeartOutlined, 
  TeamOutlined, 
  TrophyOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  RightOutlined
} from '@ant-design/icons';

const About = () => {
  // Stats
  const stats = [
    { value: '50K+', label: 'Người dùng', icon: '👥' },
    { value: '5,000+', label: 'Công thức', icon: '📖' },
    { value: '100+', label: 'Đầu bếp', icon: '👨‍🍳' },
    { value: '3', label: 'Năm hoạt động', icon: '🎂' },
  ];

  // Team members
  const team = [
    { 
      name: 'Nguyễn Minh Yoon', 
      role: 'Founder & CEO', 
      avatar: '👨‍💼',
      bio: 'Đam mê ẩm thực và công nghệ',
      social: { facebook: '#', instagram: '#' }
    },
    { 
      name: 'Trần Thu Hà', 
      role: 'Head of Content', 
      avatar: '👩‍💻',
      bio: 'Chuyên gia nội dung ẩm thực',
      social: { facebook: '#', instagram: '#' }
    },
    { 
      name: 'Lê Hoàng Long', 
      role: 'Lead Developer', 
      avatar: '👨‍💻',
      bio: 'Xây dựng trải nghiệm người dùng',
      social: { facebook: '#', instagram: '#' }
    },
    { 
      name: 'Phạm Ngọc Ánh', 
      role: 'Community Manager', 
      avatar: '👩‍🎨',
      bio: 'Kết nối cộng đồng yêu bếp',
      social: { facebook: '#', instagram: '#' }
    },
  ];

  // Values
  const values = [
    {
      icon: '❤️',
      title: 'Đam mê',
      description: 'Chúng tôi tin rằng mỗi món ăn đều chứa đựng tình yêu và câu chuyện riêng.',
    },
    {
      icon: '🤝',
      title: 'Cộng đồng',
      description: 'Xây dựng không gian kết nối những người yêu ẩm thực trên khắp Việt Nam.',
    },
    {
      icon: '✨',
      title: 'Chất lượng',
      description: 'Cam kết mang đến những công thức đã được kiểm chứng và dễ thực hiện.',
    },
    {
      icon: '🌱',
      title: 'Phát triển',
      description: 'Không ngừng học hỏi và cải tiến để phục vụ cộng đồng tốt hơn.',
    },
  ];

  // Timeline
  const timeline = [
    { year: '2022', title: 'Khởi đầu', description: 'Ra mắt phiên bản đầu tiên với 100 công thức' },
    { year: '2023', title: 'Phát triển', description: 'Đạt 10,000 người dùng và 1,000 công thức' },
    { year: '2024', title: 'Mở rộng', description: 'Ra mắt tính năng đóng góp cộng đồng và blog' },
    { year: '2025', title: 'Tương lai', description: 'Hướng đến nền tảng ẩm thực số 1 Việt Nam' },
  ];

  // Partners/Features
  const features = [
    'Công thức được kiểm duyệt kỹ lưỡng',
    'Video hướng dẫn chi tiết từng bước',
    'Cộng đồng đầu bếp nhiệt tình',
    'Cập nhật món mới mỗi ngày',
    'Hỗ trợ nhiều vùng miền ẩm thực',
    'Hoàn toàn miễn phí',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-16 mb-16">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] opacity-5">🍳</div>
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full mb-6">
            Về chúng tôi
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nơi <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">đam mê</span> ẩm thực
            <br />được chia sẻ
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Yoon là nền tảng chia sẻ công thức nấu ăn, kết nối những người yêu bếp 
            trên khắp Việt Nam. Chúng tôi tin rằng mỗi bữa ăn đều xứng đáng được 
            trở nên đặc biệt.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <span className="text-4xl block mb-3">{stat.icon}</span>
            <p className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              {stat.value}
            </p>
            <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-orange-500/20">
            🎯
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Sứ mệnh</h2>
          <p className="text-slate-600 leading-relaxed">
            Mang ẩm thực Việt Nam đến gần hơn với mọi người. Chúng tôi muốn mỗi người 
            đều có thể tự tin vào bếp và tạo ra những món ăn ngon cho gia đình, 
            dù họ là đầu bếp chuyên nghiệp hay người mới bắt đầu.
          </p>
        </div>

        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 border border-violet-100">
          <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-purple-500/20">
            🌟
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Tầm nhìn</h2>
          <p className="text-slate-600 leading-relaxed">
            Trở thành nền tảng ẩm thực hàng đầu Việt Nam, nơi mà mọi công thức 
            truyền thống được lưu giữ và chia sẻ cho thế hệ sau. Xây dựng cộng đồng 
            yêu bếp lớn mạnh và gắn kết.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Giá trị cốt lõi</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Những giá trị định hướng mọi hoạt động của chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all group"
            >
              <span className="text-5xl block mb-4 group-hover:scale-110 transition-transform">
                {value.icon}
              </span>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{value.title}</h3>
              <p className="text-sm text-slate-500">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Hành trình phát triển</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Từ ý tưởng nhỏ đến nền tảng ẩm thực được yêu thích
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-orange-400 to-rose-400"></div>

          <div className="space-y-8 md:space-y-0">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`bg-white rounded-2xl shadow-lg p-6 ${
                    index % 2 === 0 ? 'md:ml-auto' : ''
                  } max-w-md`}>
                    <span className="text-amber-500 font-bold text-lg">{item.year}</span>
                    <h3 className="text-xl font-bold text-slate-800 mt-1">{item.title}</h3>
                    <p className="text-slate-500 mt-2">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full border-4 border-white shadow-lg"></div>

                {/* Spacer */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Đội ngũ của chúng tôi</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Những người đam mê đứng sau nền tảng Yoon
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
            >
              {/* Avatar */}
              <div className="h-48 bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform">{member.avatar}</span>
              </div>
              
              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="font-bold text-slate-800">{member.name}</h3>
                <p className="text-amber-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-slate-500 text-sm">{member.bio}</p>
                
                {/* Social */}
                <div className="flex justify-center gap-3 mt-4">
                  <a href={member.social.facebook} className="w-8 h-8 bg-slate-100 hover:bg-blue-100 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 transition-colors">
                    f
                  </a>
                  <a href={member.social.instagram} className="w-8 h-8 bg-slate-100 hover:bg-pink-100 rounded-full flex items-center justify-center text-slate-500 hover:text-pink-600 transition-colors">
                    📷
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Tại sao chọn <span className="text-amber-400">Yoon</span>?
            </h2>
            <p className="text-slate-300 mb-8">
              Chúng tôi không chỉ là một trang web công thức nấu ăn. Yoon là cộng đồng, 
              là nơi kết nối những người yêu bếp với nhau.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircleOutlined className="text-green-400 text-lg" />
                  <span className="text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-8 text-center">
              <span className="text-8xl block mb-4">🍳</span>
              <p className="text-white/90 text-lg font-medium mb-6">
                "Mỗi bữa ăn là một cơ hội để tạo nên kỷ niệm đẹp"
              </p>
              <Link 
                to="/meals"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-600 font-bold rounded-xl hover:shadow-lg transition-all"
              >
                Khám phá ngay <RightOutlined />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 rounded-3xl p-8 md:p-12">
        <span className="text-6xl block mb-4">🤝</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Hãy cùng chúng tôi xây dựng cộng đồng!
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-8">
          Dù bạn là đầu bếp chuyên nghiệp hay người mới bắt đầu, Yoon luôn chào đón bạn.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/contribute"
            className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-orange-500/30 transform hover:scale-105 transition-all"
          >
            Đóng góp công thức
          </Link>
          <Link 
            to="/meals"
            className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all"
          >
            Khám phá món ăn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;


