import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-amber-100/40 to-orange-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-rose-100/30 to-pink-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white mt-20">
        {/* Newsletter section */}
        <div className="border-b border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">🍳 Nhận công thức mới mỗi tuần</h3>
                <p className="text-slate-400 text-sm">Đăng ký để nhận công thức nấu ăn mới và mẹo vặt nhà bếp</p>
              </div>
              <div className="flex w-full md:w-auto gap-2">
                <input
                  type="email"
                  placeholder="Email của bạn..."
                  className="flex-1 md:w-80 px-5 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 transition-all">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <span className="text-white font-black text-lg">Y</span>
                </div>
                <span className="text-xl font-bold">Yoon</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Nơi chia sẻ đam mê nấu ăn. Từ những món ăn đơn giản đến phức tạp, chúng tôi giúp bạn trở thành đầu bếp tại nhà.
              </p>
              <div className="flex gap-3">
                {['facebook', 'instagram', 'tiktok', 'youtube'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-slate-700/50 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 group"
                  >
                    <span className="text-slate-400 group-hover:text-white text-sm capitalize">
                      {social[0].toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold text-lg mb-6 relative inline-block">
                Khám phá
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></span>
              </h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                {['Công thức mới', 'Món ăn phổ biến', 'Món ăn theo mùa', 'Video hướng dẫn', 'Mẹo nhà bếp'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold text-lg mb-6 relative inline-block">
                Danh mục
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></span>
              </h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                {['Món Việt Nam', 'Món Châu Á', 'Món Châu Âu', 'Bánh & Tráng miệng', 'Đồ uống'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-6 relative inline-block">
                Liên hệ
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></span>
              </h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex gap-3">
                  <span className="text-amber-400">✉️</span>
                  <span>hello@yoon.vn</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400">💬</span>
                  <span>Gửi góp ý công thức</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400">🤝</span>
                  <span>Hợp tác với chúng tôi</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400">❓</span>
                  <span>Câu hỏi thường gặp</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
              <p>© 2025 Yoon. Nấu ăn không khó, khó là ở bạn 🍳</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-amber-400 transition-colors">Điều khoản sử dụng</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Chính sách bảo mật</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserLayout;

