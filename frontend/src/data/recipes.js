// Recipes data - shared across pages
export const recipes = [
  // Miền Bắc
  { id: 1, name: 'Phở Bò Hà Nội', time: '45 phút', level: 'Trung bình', price: '80K', emoji: '🍜', region: 'Miền Bắc' },
  { id: 2, name: 'Bún Chả Hà Nội', time: '40 phút', level: 'Trung bình', price: '65K', emoji: '🍖', region: 'Miền Bắc' },
  { id: 3, name: 'Bánh Cuốn Thanh Trì', time: '50 phút', level: 'Khó', price: '45K', emoji: '🥟', region: 'Miền Bắc' },
  { id: 4, name: 'Chả Cá Lã Vọng', time: '55 phút', level: 'Khó', price: '120K', emoji: '🐟', region: 'Miền Bắc' },
  { id: 5, name: 'Xôi Xéo', time: '30 phút', level: 'Dễ', price: '25K', emoji: '🍚', region: 'Miền Bắc' },
  
  // Miền Trung
  { id: 6, name: 'Bún Bò Huế', time: '60 phút', level: 'Khó', price: '90K', emoji: '🍲', region: 'Miền Trung' },
  { id: 7, name: 'Mì Quảng', time: '45 phút', level: 'Trung bình', price: '55K', emoji: '🍜', region: 'Miền Trung' },
  { id: 8, name: 'Bánh Xèo Miền Trung', time: '35 phút', level: 'Trung bình', price: '40K', emoji: '🥞', region: 'Miền Trung' },
  { id: 9, name: 'Cao Lầu Hội An', time: '50 phút', level: 'Khó', price: '60K', emoji: '🍝', region: 'Miền Trung' },
  { id: 10, name: 'Bánh Bèo Huế', time: '40 phút', level: 'Trung bình', price: '35K', emoji: '🥧', region: 'Miền Trung' },
  
  // Miền Nam
  { id: 11, name: 'Cơm Tấm Sườn Bì', time: '40 phút', level: 'Trung bình', price: '60K', emoji: '🍚', region: 'Miền Nam' },
  { id: 12, name: 'Bánh Mì Thịt Nướng', time: '30 phút', level: 'Dễ', price: '35K', emoji: '🥖', region: 'Miền Nam' },
  { id: 13, name: 'Gỏi Cuốn Tôm Thịt', time: '25 phút', level: 'Dễ', price: '45K', emoji: '🥗', region: 'Miền Nam' },
  { id: 14, name: 'Hủ Tiếu Nam Vang', time: '50 phút', level: 'Trung bình', price: '55K', emoji: '🍜', region: 'Miền Nam' },
  { id: 15, name: 'Bún Mắm', time: '55 phút', level: 'Khó', price: '70K', emoji: '🍲', region: 'Miền Nam' },
  { id: 16, name: 'Bánh Tráng Trộn', time: '15 phút', level: 'Rất dễ', price: '25K', emoji: '🥗', region: 'Miền Nam' },
  
  // Hàn Quốc
  { id: 17, name: 'Kimchi Jjigae', time: '35 phút', level: 'Trung bình', price: '70K', emoji: '🥘', region: 'Hàn Quốc' },
  { id: 18, name: 'Bibimbap', time: '40 phút', level: 'Trung bình', price: '75K', emoji: '🍚', region: 'Hàn Quốc' },
  { id: 19, name: 'Tteokbokki', time: '25 phút', level: 'Dễ', price: '45K', emoji: '🍢', region: 'Hàn Quốc' },
  { id: 20, name: 'Bulgogi', time: '35 phút', level: 'Trung bình', price: '95K', emoji: '🥩', region: 'Hàn Quốc' },
  { id: 21, name: 'Gimbap', time: '30 phút', level: 'Dễ', price: '40K', emoji: '🍙', region: 'Hàn Quốc' },
  { id: 22, name: 'Samgyeopsal', time: '25 phút', level: 'Dễ', price: '110K', emoji: '🥓', region: 'Hàn Quốc' },
  
  // Nhật Bản
  { id: 23, name: 'Sushi Cá Hồi', time: '50 phút', level: 'Khó', price: '150K', emoji: '🍣', region: 'Nhật Bản' },
  { id: 24, name: 'Ramen Tonkotsu', time: '120 phút', level: 'Khó', price: '85K', emoji: '🍜', region: 'Nhật Bản' },
  { id: 25, name: 'Tempura Tôm', time: '30 phút', level: 'Trung bình', price: '90K', emoji: '🍤', region: 'Nhật Bản' },
  { id: 26, name: 'Gyudon', time: '25 phút', level: 'Dễ', price: '65K', emoji: '🍚', region: 'Nhật Bản' },
  { id: 27, name: 'Okonomiyaki', time: '35 phút', level: 'Trung bình', price: '55K', emoji: '🥞', region: 'Nhật Bản' },
  
  // Trung Quốc
  { id: 28, name: 'Dimsum Hấp', time: '45 phút', level: 'Trung bình', price: '85K', emoji: '🥟', region: 'Trung Quốc' },
  { id: 29, name: 'Vịt Quay Bắc Kinh', time: '180 phút', level: 'Rất khó', price: '250K', emoji: '🦆', region: 'Trung Quốc' },
  { id: 30, name: 'Mì Xào Bò', time: '25 phút', level: 'Dễ', price: '50K', emoji: '🍝', region: 'Trung Quốc' },
  { id: 31, name: 'Cơm Chiên Dương Châu', time: '20 phút', level: 'Dễ', price: '45K', emoji: '🍚', region: 'Trung Quốc' },
  { id: 32, name: 'Gà Kung Pao', time: '30 phút', level: 'Trung bình', price: '70K', emoji: '🍗', region: 'Trung Quốc' },
  
  // Thái Lan
  { id: 33, name: 'Pad Thai', time: '25 phút', level: 'Dễ', price: '55K', emoji: '🍝', region: 'Thái Lan' },
  { id: 34, name: 'Tom Yum Goong', time: '35 phút', level: 'Trung bình', price: '80K', emoji: '🍲', region: 'Thái Lan' },
  { id: 35, name: 'Cà Ri Xanh Thái', time: '40 phút', level: 'Trung bình', price: '75K', emoji: '🍛', region: 'Thái Lan' },
  { id: 36, name: 'Som Tam', time: '15 phút', level: 'Dễ', price: '35K', emoji: '🥗', region: 'Thái Lan' },
  { id: 37, name: 'Khao Pad', time: '20 phút', level: 'Dễ', price: '45K', emoji: '🍚', region: 'Thái Lan' },
  
  // Ý
  { id: 38, name: 'Pizza Margherita', time: '45 phút', level: 'Trung bình', price: '95K', emoji: '🍕', region: 'Ý' },
  { id: 39, name: 'Spaghetti Carbonara', time: '25 phút', level: 'Trung bình', price: '65K', emoji: '🍝', region: 'Ý' },
  { id: 40, name: 'Risotto Nấm', time: '35 phút', level: 'Trung bình', price: '80K', emoji: '🍚', region: 'Ý' },
  { id: 41, name: 'Lasagna', time: '60 phút', level: 'Khó', price: '90K', emoji: '🍝', region: 'Ý' },
  { id: 42, name: 'Tiramisu', time: '30 phút', level: 'Trung bình', price: '55K', emoji: '🍰', region: 'Ý' },
  
  // Món tráng miệng & đồ uống
  { id: 43, name: 'Chè Thái', time: '30 phút', level: 'Dễ', price: '25K', emoji: '🍨', region: 'Miền Nam' },
  { id: 44, name: 'Bánh Flan', time: '45 phút', level: 'Trung bình', price: '20K', emoji: '🍮', region: 'Miền Nam' },
  { id: 45, name: 'Trà Sữa Trân Châu', time: '20 phút', level: 'Dễ', price: '30K', emoji: '🧋', region: 'Miền Nam' },
];

// Filter options - shared across pages
export const filterOptions = [
  {
    key: 'region',
    label: '🌏 Vùng miền',
    options: ['Miền Bắc', 'Miền Trung', 'Miền Nam', 'Hàn Quốc', 'Nhật Bản', 'Trung Quốc', 'Thái Lan', 'Ý']
  },
  {
    key: 'price',
    label: '💰 Chi phí',
    options: ['Dưới 50K', '50K - 100K', '100K - 200K', '200K - 500K', 'Trên 500K']
  },
  {
    key: 'time',
    label: '⏱️ Thời gian',
    options: ['Dưới 15 phút', '15-30 phút', '30-60 phút', '1-2 giờ', 'Trên 2 giờ']
  },
  {
    key: 'difficulty',
    label: '📊 Độ khó',
    options: ['Rất dễ', 'Dễ', 'Trung bình', 'Khó', 'Rất khó']
  },
  {
    key: 'occasion',
    label: '🎉 Dịp',
    options: ['Hàng ngày', 'Cuối tuần', 'Tiệc tùng', 'Lễ Tết', 'Sinh nhật', 'Lãng mạn', 'Gia đình']
  },
  {
    key: 'dishType',
    label: '🍽️ Loại món',
    options: ['Món chính', 'Món phụ', 'Khai vị', 'Tráng miệng', 'Đồ uống', 'Ăn vặt', 'Súp', 'Salad']
  },
];

// Initial filter state
export const initialFilterState = {
  price: [],
  region: [],
  time: [],
  difficulty: [],
  occasion: [],
  dishType: [],
};

