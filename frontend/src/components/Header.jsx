import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
  SearchOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Badge, Avatar, Dropdown } from 'antd';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Món ăn', path: '/meals' },
    { label: 'Đóng góp', path: '/contribute' },
    { label: 'Blog', path: '/blog' },
    { label: 'Giới thiệu', path: '/about' },
  ];

  const userMenuItems = [
    { key: 'profile', label: <Link to="/profile">Tài khoản của tôi</Link> },
    { key: 'orders', label: <Link to="/orders">Yêu thích</Link> },
    { key: 'settings', label: <Link to="/settings">Cài đặt</Link> },
    { type: 'divider' },
    { key: 'logout', label: 'Đăng xuất', danger: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      {/* <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-300 text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>Nấu ăn không khó, khó là ở bạn </span>
          <div className="hidden md:flex gap-4">
            <Link to="/help" className="hover:text-amber-400 transition-colors">Trợ giúp</Link>
            <Link to="/tracking" className="hover:text-amber-400 transition-colors">Theo dõi đơn hàng</Link>
          </div>
        </div>
      </div> */}

      {/* Main header */}
      <div className="bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-18 py-3">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-orange-500/30">
                  <span className="text-white font-black text-xl">Y</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 to-rose-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent tracking-tight">
                  yoon
                </h1>
                <p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Premium Store</p>
              </div>
            </Link>

            {/* Search bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder="Tìm kiếm món ăn, nguyên liệu"
                  className="w-full pl-5 pr-12 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-amber-400 focus:bg-white focus:shadow-lg focus:shadow-amber-500/10 transition-all duration-300"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300">
                  <SearchOutlined className="text-lg" />
                </button>
              </div>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                      isActive 
                        ? 'text-amber-600' 
                        : 'text-slate-600 hover:text-amber-600'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 rounded-full ${
                      isActive 
                        ? 'w-3/4' 
                        : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Search toggle - Mobile */}
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="lg:hidden p-2.5 text-slate-600 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-all"
              >
                <SearchOutlined className="text-xl" />
              </button>

              {/* Wishlist */}
              <Link 
                to="/wishlist" 
                className="relative p-2.5 text-slate-600 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all group"
              >
                <Badge count={3} size="small" color="#f43f5e" offset={[-2, 2]}>
                  <HeartOutlined className="text-xl group-hover:scale-110 transition-transform" />
                </Badge>
              </Link>

              {/* Cart */}
              {/* <Link 
                to="/cart" 
                className="relative p-2.5 text-slate-600 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-all group"
              >
                <Badge count={5} size="small" color="#f59e0b" offset={[-2, 2]}>
                  <ShoppingCartOutlined className="text-xl group-hover:scale-110 transition-transform" />
                </Badge>
              </Link> */}

              {/* User dropdown */}
              <Dropdown
                menu={{ items: userMenuItems }}
                placement="bottomRight"
                trigger={['click']}
                overlayClassName="header-dropdown"
              >
                <button className="flex items-center gap-2 p-1.5 pl-1.5 pr-3 bg-gradient-to-r from-slate-50 to-slate-100 hover:from-amber-50 hover:to-orange-50 rounded-full transition-all group border border-slate-200 hover:border-amber-300">
                  <Avatar 
                    size={32}
                    icon={<UserOutlined />}
                    className="bg-gradient-to-br from-amber-400 to-orange-500"
                  />
                  <span className="hidden sm:block text-sm font-medium text-slate-700 group-hover:text-amber-700">
                    Tài khoản
                  </span>
                  <DownOutlined className="hidden sm:block text-xs text-slate-400 group-hover:text-amber-600" />
                </button>
              </Dropdown>

              {/* Mobile menu button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2.5 text-slate-600 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-all"
              >
                {mobileMenuOpen ? (
                  <CloseOutlined className="text-xl" />
                ) : (
                  <MenuOutlined className="text-xl" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile search bar */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${searchOpen ? 'max-h-20 pb-4' : 'max-h-0'}`}>
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-amber-400 focus:bg-white transition-all"
              />
              <SearchOutlined className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`xl:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <nav className="bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                      isActive 
                        ? 'text-amber-600 bg-amber-50' 
                        : 'text-slate-600 hover:text-amber-600 hover:bg-amber-50'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      isActive 
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 scale-125' 
                        : 'bg-gradient-to-r from-amber-400 to-orange-500'
                    }`}></span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

