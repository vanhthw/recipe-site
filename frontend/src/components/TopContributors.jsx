import { CrownOutlined, FireOutlined, PlusOutlined } from '@ant-design/icons';

const TopContributors = () => {
  // Sample contributors data
  const contributors = [
    {
      id: 1,
      name: 'Minh Anh',
      avatar: '👩‍🍳',
      recipes: 9765,
      specialty: 'Món Việt',
      rank: 1,
    },
    {
      id: 2,
      name: 'Hoàng Long',
      avatar: '👨‍🍳',
      recipes: 7567,
      specialty: 'Món Hàn',
      rank: 2,
    },
    {
      id: 3,
      name: 'Thu Hương',
      avatar: '👩‍🍳',
      recipes: 4674,
      specialty: 'Bánh ngọt',
      rank: 3,
    },
    {
      id: 4,
      name: 'Văn Đức',
      avatar: '👨‍🍳',
      recipes: 3521,
      specialty: 'Món Nhật',
      rank: 4,
    },
    {
      id: 5,
      name: 'Ngọc Linh',
      avatar: '👩‍🍳',
      recipes: 2890,
      specialty: 'Đồ uống',
      rank: 5,
    },
  ];

  // Reorder for podium: [2nd, 1st, 3rd]
  const podiumOrder = [contributors[1], contributors[0], contributors[2]];

  return (
    <div className="mb-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-1">🏆 Đầu bếp nổi bật</h2>
          <p className="text-sm text-slate-500">Những người đóng góp công thức nhiều nhất</p>
        </div>
        <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
          Xem tất cả →
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Podium Section */}
        <div className="lg:col-span-2">
          {/* Top 3 Podium */}
          <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 rounded-2xl p-6 pb-0 overflow-hidden relative">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full"></div>
              <div className="absolute top-5 right-20 w-32 h-32 bg-white/5 rounded-full"></div>
              <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/5 rounded-full"></div>
              {/* Stars */}
              <div className="absolute top-8 left-1/4 text-yellow-300/30 text-lg">✦</div>
              <div className="absolute top-16 right-1/4 text-yellow-300/20 text-sm">✦</div>
              <div className="absolute top-12 left-1/2 text-yellow-300/25 text-xl">✦</div>
            </div>

            {/* Podium */}
            <div className="relative z-10 flex items-end justify-center gap-2 sm:gap-4 md:gap-6 pt-4">
              {podiumOrder.map((contributor, index) => {
                const isFirst = index === 1; // Middle position is rank 1
                const isSecond = index === 0; // Left position is rank 2
                const isThird = index === 2; // Right position is rank 3
                
                return (
                  <div 
                    key={contributor.id}
                    className={`flex flex-col items-center flex-1 max-w-[140px] ${isFirst ? 'order-2' : isSecond ? 'order-1' : 'order-3'}`}
                  >
                    {/* Crown for #1 */}
                    {isFirst && (
                      <div className="mb-2 animate-bounce">
                        <CrownOutlined className="text-3xl md:text-4xl text-yellow-400 drop-shadow-lg" />
                      </div>
                    )}
                    
                    {/* Rank badge for 2 and 3 */}
                    {!isFirst && (
                      <div className={`mb-2 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg ${
                        isSecond ? 'bg-gradient-to-b from-slate-200 to-slate-400 text-slate-700' : 'bg-gradient-to-b from-amber-400 to-amber-600 text-white'
                      }`}>
                        {contributor.rank}
                      </div>
                    )}

                    {/* Avatar */}
                    <div className={`relative mb-2 transition-transform hover:scale-105 ${isFirst ? 'mb-3' : ''}`}>
                      <div className={`rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-2xl ${
                        isFirst 
                          ? 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-4xl sm:text-5xl md:text-6xl ring-4 ring-yellow-400 ring-offset-2 ring-offset-purple-600' 
                          : 'w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-3xl sm:text-3xl md:text-4xl ring-2 ring-white/40'
                      }`}>
                        {contributor.avatar}
                      </div>
                    </div>

                    {/* Name */}
                    <p className={`text-white font-semibold mb-2 text-center truncate w-full ${isFirst ? 'text-sm md:text-base' : 'text-xs md:text-sm'}`}>
                      @{contributor.name.toLowerCase().replace(' ', '')}
                    </p>

                    {/* Podium block */}
                    <div className={`w-full flex flex-col items-center rounded-t-2xl transition-all ${
                      isFirst 
                        ? 'bg-gradient-to-b from-yellow-400 via-yellow-500 to-amber-500 pt-5 min-h-[110px] shadow-lg shadow-yellow-500/30' 
                        : isSecond
                        ? 'bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 pt-4 min-h-[85px]'
                        : 'bg-gradient-to-b from-amber-500 via-amber-600 to-amber-700 pt-4 min-h-[70px]'
                    }`}>
                      {/* Big rank number */}
                      <span className={`font-black ${
                        isFirst ? 'text-yellow-900/80 text-4xl md:text-5xl' : 
                        isSecond ? 'text-slate-600/80 text-2xl md:text-3xl' : 
                        'text-amber-900/80 text-2xl md:text-3xl'
                      }`}>
                        {contributor.rank}
                      </span>
                      
                      {/* Recipe count */}
                      <div className="flex items-center gap-1 mt-1">
                        <FireOutlined className={`text-xs ${isFirst ? 'text-yellow-800' : isSecond ? 'text-slate-600' : 'text-amber-900'}`} />
                        <span className={`text-sm font-bold ${isFirst ? 'text-yellow-900' : isSecond ? 'text-slate-700' : 'text-white'}`}>
                          {contributor.recipes.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Rest of contributors */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 mt-4 overflow-hidden">
            {contributors.slice(3).map((contributor, index) => (
              <div 
                key={contributor.id}
                className="flex items-center gap-4 px-6 py-4 hover:bg-amber-50/50 transition-colors cursor-pointer border-b border-slate-100 last:border-b-0"
              >
                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500">
                  {index + 4}
                </span>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-2xl shadow-md">
                  {contributor.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-slate-700 truncate">@{contributor.name.toLowerCase().replace(' ', '')}</h4>
                  <p className="text-xs text-slate-400">{contributor.specialty}</p>
                </div>
                <div className="text-right flex items-center gap-2">
                  <FireOutlined className="text-amber-500" />
                  <span className="font-bold text-slate-700">{contributor.recipes.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 rounded-2xl p-6 text-white h-full flex flex-col justify-between relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <span className="text-5xl block mb-4">👨‍🍳</span>
              <h3 className="text-xl font-bold mb-2">Trở thành đầu bếp!</h3>
              <p className="text-white/80 text-sm mb-6">
                Chia sẻ công thức nấu ăn của bạn với cộng đồng. Nhận badge và điểm thưởng cho mỗi công thức được yêu thích!
              </p>
              
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</span>
                  Chia sẻ công thức độc quyền
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</span>
                  Nhận badge & xếp hạng
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</span>
                  Kết nối cộng đồng yêu bếp
                </li>
              </ul>
            </div>

            <button className="relative z-10 w-full py-3 bg-white text-amber-600 font-bold rounded-xl hover:bg-amber-50 transition-colors flex items-center justify-center gap-2 shadow-lg">
              <PlusOutlined />
              Đóng góp công thức
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContributors;
