import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LogIn, 
  UserPlus, 
  Plus, 
  Minus, 
  Check, 
  X, 
  Home, 
  BarChart3, 
  Settings, 
  Users,
  School,
  CreditCard,
  QrCode,
  Download,
  Trophy,
  Star,
  Award,
  TrendingUp,
  Zap,
  Heart,
  Users2,
  GraduationCap,
  BookOpen,
  Lightbulb,
  Target,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  Shield,
  Lock,
  Eye,
  EyeOff,
  ChevronDown,
  Sparkles,
  User,
  Building2,
  Medal,
  Crown,
  BadgeCheck,
  Info,
  ChevronRight,
  Search,
  Filter,
  Grid3X3,
  List,
  AwardIcon,
  Trash2,
  Edit3,
  Upload,
  Database,
  PieChart,
  Activity,
  FileText,
  Key,
  UserCheck,
  UserX,
  Package,
  Wallet,
  Receipt,
  TrendingDown,
  ArrowRight,
  UsersRound,
  Vote,
  CrownIcon,
  Bell,
  MessageCircle,
  HelpCircle,
  LogOut,
  UserCircle,
  Menu,
  MoreHorizontal,
  Gift,
  Coins,
  Timer,
  AlertCircle,
  CheckCircle,
  AlertTriangle,
  Share2,
  Copy,
  ExternalLink,
  RefreshCw,
  History,
  Tag,
  GiftIcon,
  Percent,
  ShoppingCart,
  Ticket,
  Verified,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Flag,
  Ban,
  ShieldCheck,
  ShieldAlert,
  CircleDollarSign,
  PiggyBank,
  Scale
} from 'lucide-react';

// Comprehensive mock data with realistic scenarios
const generateCandidates = () => {
  const categories = ['Innovation', 'Leadership', 'Community Service', 'Education', 'Healthcare', 'Environment', 'Arts', 'Sports', 'Technology', 'Business'];
  const locations = ['Jakarta', 'Bandung', 'Surabaya', 'Medan', 'Makassar', 'Yogyakarta', 'Bali', 'Palembang', 'Semarang', 'Malang'];
  const colors = ['4f46e5', 'ec4899', '0ea5e9', '10b981', 'f59e0b', '8b5cf6', 'ef4444', '06b6d4', '84cc16', '0891b2'];
  
  return Array.from({ length: 70 }, (_, i) => ({
    id: i + 1,
    name: `Candidate ${i + 1}`,
    category: categories[i % categories.length],
    description: `Dedicated ${categories[i % categories.length].toLowerCase()} professional with outstanding contributions to the community. Known for innovative approaches and exceptional leadership in their field.`,
    image: `https://placehold.co/300x300/${colors[i % colors.length]}/white?text=C${i + 1}`,
    votes: Math.floor(Math.random() * 2000) + 100,
    location: locations[i % locations.length],
    achievements: [
      `${Math.floor(Math.random() * 5) + 1} years of experience`,
      `Served ${Math.floor(Math.random() * 1000) + 100} community members`,
      `Led ${Math.floor(Math.random() * 10) + 1} successful projects`
    ],
    socialImpact: Math.floor(Math.random() * 100) + 50,
    isActive: true,
    verified: Math.random() > 0.3,
    createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  }));
};

const mockCandidates = generateCandidates();

// Enhanced user data with token management
const mockUsers = [
  { 
    id: 1, 
    name: "Ahmad Fauzi", 
    email: "ahmad@email.com", 
    avatar: "https://placehold.co/100x100/4f46e5/white?text=AF",
    totalVotes: 15, 
    purchasedTokens: 65,
    availableTokens: 50,
    role: 'user',
    lastLogin: '2024-01-15 14:30',
    verified: true,
    notifications: 3
  },
  { 
    id: 2, 
    name: "Siti Rahayu", 
    email: "siti@email.com", 
    avatar: "https://placehold.co/100x100/ec4899/white?text=SR",
    totalVotes: 8, 
    purchasedTokens: 25,
    availableTokens: 17,
    role: 'user',
    lastLogin: '2024-01-14 09:15',
    verified: true,
    notifications: 1
  },
  { 
    id: 3, 
    name: "Admin User", 
    email: "admin@email.com", 
    avatar: "https://placehold.co/100x100/0ea5e9/white?text=AU",
    totalVotes: 0, 
    purchasedTokens: 0,
    availableTokens: 0,
    role: 'admin',
    lastLogin: '2024-01-15 16:45',
    verified: true,
    notifications: 5
  },
];

// Token packages
const tokenPackages = [
  { id: 1, tokens: 10, price: 10000, discount: 0, popular: false },
  { id: 2, tokens: 25, price: 22500, discount: 10, popular: true },
  { id: 3, tokens: 50, price: 40000, discount: 20, popular: false },
];

// Enhanced Background Animation Component
const EnhancedBackground = () => {
  const floatingElements = [
    { type: 'circle', color: 'bg-indigo-200', size: 'w-2 h-2', duration: 12 },
    { type: 'square', color: 'bg-purple-200', size: 'w-1.5 h-1.5', duration: 15 },
    { type: 'star', color: 'text-yellow-200', size: 'w-2 h-2', duration: 18 },
    { type: 'crown', color: 'text-orange-200', size: 'w-2 h-2', duration: 20 },
    { type: 'award', color: 'text-green-200', size: 'w-1.5 h-1.5', duration: 16 },
    { type: 'trophy', color: 'text-pink-200', size: 'w-2 h-2', duration: 14 },
    { type: 'medal', color: 'text-blue-200', size: 'w-1.5 h-1.5', duration: 17 },
    { type: 'heart', color: 'text-red-200', size: 'w-1.5 h-1.5', duration: 13 },
    { type: 'gift', color: 'text-purple-200', size: 'w-2 h-2', duration: 19 },
    { type: 'coins', color: 'text-yellow-300', size: 'w-1.5 h-1.5', duration: 15 },
  ];

  const gradientLayers = [
    { from: 'from-indigo-100', to: 'to-transparent', opacity: 0.3, duration: 20 },
    { from: 'from-purple-100', to: 'to-transparent', opacity: 0.2, duration: 25 },
    { from: 'from-yellow-100', to: 'to-transparent', opacity: 0.1, duration: 30 },
    { from: 'from-pink-100', to: 'to-transparent', opacity: 0.15, duration: 22 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Layers */}
      {gradientLayers.map((layer, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 bg-gradient-to-br ${layer.from} ${layer.to}`}
          animate={{
            opacity: [layer.opacity, layer.opacity * 0.5, layer.opacity],
          }}
          transition={{
            duration: layer.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 2
          }}
        />
      ))}

      {/* Floating Elements */}
      {floatingElements.map((element, index) => {
        const positions = Array.from({ length: 6 }, (_, i) => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
        }));

        return positions.map((pos, posIndex) => {
          let ElementComponent;
          if (element.type === 'star') ElementComponent = Star;
          else if (element.type === 'crown') ElementComponent = Crown;
          else if (element.type === 'award') ElementComponent = Award;
          else if (element.type === 'trophy') ElementComponent = Trophy;
          else if (element.type === 'medal') ElementComponent = Medal;
          else if (element.type === 'heart') ElementComponent = Heart;
          else if (element.type === 'gift') ElementComponent = Gift;
          else if (element.type === 'coins') ElementComponent = Coins;
          else ElementComponent = 'div';

          return (
            <motion.div
              key={`${index}-${posIndex}`}
              className={`${element.color} ${element.size} ${
                element.type === 'circle' ? 'rounded-full' : 
                element.type === 'square' ? '' : ''
              }`}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: element.type !== 'circle' && element.type !== 'square' ? [0, 360] : [0, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (index + posIndex) * 0.5
              }}
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
              }}
            >
              {element.type !== 'circle' && element.type !== 'square' && (
                <ElementComponent className="w-full h-full" />
              )}
            </motion.div>
          );
        });
      })}

      {/* Pulsing Circles */}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="absolute w-96 h-96 rounded-full border border-indigo-200 opacity-20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 1
          }}
          style={{
            left: index === 0 ? '-20%' : index === 1 ? '50%' : '120%',
            top: index === 0 ? '20%' : index === 1 ? '-20%' : '60%',
          }}
        />
      ))}
    </div>
  );
};

// Loading Animation Component
const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="text-center relative">
        <EnhancedBackground />
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 mx-auto mb-4 relative z-10"
        >
          <Crown className="w-full h-full text-indigo-600" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 font-medium relative z-10"
        >
          Memuat Community Choice Awards...
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-32 h-1 bg-indigo-200 rounded-full mx-auto mt-4 overflow-hidden relative z-10"
        >
          <motion.div
            animate={{ width: ["0%", "100%"] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-full bg-indigo-600 rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Horizontal Bar Chart Component for Live Vote
const HorizontalBarChart = ({ candidates }) => {
  if (candidates.length === 0) return null;
  
  const maxValue = Math.max(...candidates.map(c => c.votes));
  
  return (
    <div className="space-y-3">
      {candidates.map((candidate, index) => (
        <motion.div
          key={candidate.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          className="flex items-center space-x-3"
        >
          <div className="flex items-center space-x-2 min-w-[80px]">
            <span className="text-sm font-medium text-gray-600 w-6">
              #{index + 4}
            </span>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <img 
                src={candidate.image} 
                alt={candidate.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-900 truncate">
                {candidate.name}
              </span>
              <span className="text-sm font-bold text-indigo-600 ml-2">
                {candidate.votes.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(candidate.votes / maxValue) * 100}%` }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.05 + 0.1,
                  ease: "easeOut"
                }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Top 3 Candidates Display
const Top3Candidates = ({ candidates }) => {
  if (candidates.length < 3) return null;
  
  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      {candidates.slice(0, 3).map((candidate, index) => (
        <motion.div
          key={candidate.id}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-center">
            <div className="relative inline-block mb-2">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-2 border-white shadow-lg">
                <img 
                  src={candidate.image} 
                  alt={candidate.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white ${
                index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                'bg-gradient-to-r from-amber-600 to-amber-800'
              }`}>
                <span className="text-xs font-bold text-white">{index + 1}</span>
              </div>
            </div>
            <h4 className="font-semibold text-gray-900 text-xs mb-1 truncate">
              {candidate.name}
            </h4>
            <p className="text-xs text-indigo-600 font-medium">
              {candidate.votes.toLocaleString()}
            </p>
            <div className="flex justify-center mt-1">
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Profile Dropdown Component
const ProfileDropdown = ({ user, onLogout, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
        </div>
        <ChevronDown className="w-4 h-4 text-gray-600" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
          >
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-600">{user.email}</p>
            </div>
            <button
              onClick={() => {
                onNavigate('profile');
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
            >
              <UserCircle className="w-4 h-4" />
              <span>Profil Saya</span>
            </button>
            <button
              onClick={() => {
                onNavigate('tokens');
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
            >
              <Coins className="w-4 h-4" />
              <span>Token Saya ({user.availableTokens})</span>
            </button>
            <button
              onClick={() => {
                onNavigate('voting');
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
            >
              <Vote className="w-4 h-4" />
              <span>Voting</span>
            </button>
            {user.role === 'admin' && (
              <button
                onClick={() => {
                  onNavigate('admin');
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
              >
                <Settings className="w-4 h-4" />
                <span>Admin Panel</span>
              </button>
            )}
            <div className="border-t border-gray-100 mt-1 pt-1">
              <button
                onClick={onLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Token Purchase Modal
const TokenPurchaseModal = ({ isOpen, onClose, onPurchase, user, isLoggedIn }) => {
  const [selectedPackage, setSelectedPackage] = useState(tokenPackages[1]);
  const [showQRIS, setShowQRIS] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [customTokens, setCustomTokens] = useState(10);
  const [customPrice, setCustomPrice] = useState(10000);

  // Calculate custom price based on tokens
  useEffect(() => {
    setCustomPrice(customTokens * 1000);
  }, [customTokens]);

  const handlePurchase = () => {
    if (!isLoggedIn) {
      onClose();
      return;
    }
    setShowQRIS(true);
  };

  const handlePaymentSuccess = () => {
    setShowQRIS(false);
    setPaymentSuccess(true);
    setTimeout(() => {
      onPurchase(selectedPackage.tokens);
      setPaymentSuccess(false);
      onClose();
    }, 2000);
  };

  const handleCustomTokenChange = (e) => {
    const value = Math.max(1, Math.min(50, parseInt(e.target.value) || 1));
    setCustomTokens(value);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {!showQRIS && !paymentSuccess ? (
          <>
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Beli Token Vote</h3>
              <button onClick={onClose}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="mb-4">
                <p className="text-gray-600 text-sm">
                  Token digunakan untuk memberikan suara kepada kandidat. Anda dapat membeli hingga 50 token.
                </p>
                <div className="mt-2 flex items-center space-x-2 text-sm">
                  <Coins className="w-4 h-4 text-indigo-600" />
                  <span className="font-medium">Token tersedia: {user.availableTokens}/50</span>
                </div>
              </div>

              {/* Token Packages */}
              <div className="space-y-3">
                {tokenPackages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    whileHover={{ scale: 1.02 }}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                      selectedPackage.id === pkg.id
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-300'
                    }`}
                    onClick={() => setSelectedPackage(pkg)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-lg">{pkg.tokens}</span>
                          <span className="text-gray-600">token</span>
                          {pkg.popular && (
                            <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">
                              Populer
                            </span>
                          )}
                        </div>
                        {pkg.discount > 0 && (
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm text-gray-500 line-through">
                              Rp{(pkg.tokens * 1000).toLocaleString()}
                            </span>
                            <span className="text-sm text-green-600 font-medium">
                              Hemat {pkg.discount}%
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-indigo-600">
                          Rp{pkg.price.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">
                          Rp{(pkg.price / pkg.tokens).toLocaleString()}/token
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Custom Token Selection */}
              <div className="mt-4 p-4 border border-gray-200 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-2">Beli Token Kustom</h4>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={customTokens}
                    onChange={handleCustomTokenChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <span className="text-gray-600">token</span>
                </div>
                <div className="mt-2 text-right">
                  <div className="font-bold text-indigo-600">
                    Rp{customPrice.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">
                    Rp{(customPrice / customTokens).toLocaleString()}/token
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedPackage({ tokens: customTokens, price: customPrice });
                  }}
                  className="w-full mt-3 py-2 bg-indigo-100 text-indigo-700 font-medium rounded-lg hover:bg-indigo-200 transition-all"
                >
                  Pilih Kustom
                </button>
              </div>

              {/* Purchase Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePurchase}
                disabled={user.availableTokens + selectedPackage.tokens > 50}
                className="w-full mt-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {user.availableTokens + selectedPackage.tokens > 50 ? (
                  <span>Batas maksimal 50 token</span>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Beli {selectedPackage.tokens} Token</span>
                  </div>
                )}
              </motion.button>
            </div>
          </>
        ) : showQRIS ? (
          /* QRIS Payment Modal */
          <div className="p-6 text-center">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-48 h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-indigo-300"
            >
              <QrCode className="w-24 h-24 text-indigo-600" />
            </motion.div>
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Rp {selectedPackage.price.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 mb-4">Scan QR Code di atas untuk membayar</p>
            <div className="space-y-2 text-left text-sm bg-gray-50 rounded-lg p-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Jumlah token:</span>
                <span className="font-medium">{selectedPackage.tokens}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total:</span>
                <span className="font-medium text-indigo-600">Rp {selectedPackage.price.toLocaleString()}</span>
              </div>
            </div>
            
            {/* Share/Screenshot Buttons */}
            <div className="flex space-x-3 mt-4">
              <button className="flex-1 py-2 bg-blue-100 text-blue-700 font-medium rounded-lg hover:bg-blue-200 transition-all flex items-center justify-center">
                <Share2 className="w-4 h-4 mr-2" />
                Bagikan
              </button>
              <button className="flex-1 py-2 bg-green-100 text-green-700 font-medium rounded-lg hover:bg-green-200 transition-all flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Screenshot
              </button>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePaymentSuccess}
              className="w-full mt-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all"
            >
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 mr-2" />
                Saya Sudah Bayar
              </div>
            </motion.button>
          </div>
        ) : paymentSuccess ? (
          /* Payment Success */
          <div className="p-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle className="w-8 h-8 text-green-600" />
            </motion.div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pembayaran Berhasil!</h3>
            <p className="text-gray-600 mb-4">
              Anda telah berhasil membeli {selectedPackage.tokens} token vote.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 rounded-lg p-3"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="text-green-800 font-medium">Token baru:</span>
                <span className="text-green-700">+{selectedPackage.tokens}</span>
              </div>
            </motion.div>
          </div>
        ) : null}
      </motion.div>
    </motion.div>
  );
};

// Profile Page Component
const ProfilePage = ({ user, onLogout, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <EnhancedBackground />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
          <button 
            onClick={() => onNavigate('voting')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Profil Saya</h1>
          <ProfileDropdown user={user} onLogout={onLogout} onNavigate={onNavigate} />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-200 shadow-sm text-center">
          <div className="relative inline-block mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-4 border-white shadow-lg">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            </div>
            {user.verified && (
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                <Check className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h2>
          <p className="text-gray-600 text-sm">{user.email}</p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <span className={`text-xs px-2 py-1 rounded-full ${
              user.role === 'admin' 
                ? 'bg-purple-100 text-purple-700' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              {user.role === 'admin' ? 'Admin' : 'Pengguna'}
            </span>
            {user.verified && (
              <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                Terverifikasi
              </span>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white rounded-xl p-1 mb-6 shadow-sm">
          {[
            { id: 'overview', label: 'Overview', icon: User },
            { id: 'tokens', label: 'Token', icon: Coins },
            { id: 'activity', label: 'Aktivitas', icon: Activity },
            { id: 'settings', label: 'Pengaturan', icon: Settings }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center py-2 px-1 rounded-lg text-xs font-medium transition-all ${
                activeTab === tab.id 
                  ? 'bg-indigo-100 text-indigo-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="w-4 h-4 mb-1" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {activeTab === 'overview' && (
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Token Tersedia</span>
                    <span className="font-medium text-indigo-600">{user.availableTokens}/50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Vote Digunakan</span>
                    <span className="font-medium text-green-600">{user.totalVotes}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Terakhir Login</span>
                    <span className="text-sm text-gray-600">{user.lastLogin}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Akun Dibuat</span>
                    <span className="text-sm text-gray-600">2024-01-01</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tokens' && (
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Coins className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Token Vote</h3>
                    <p className="text-gray-600 text-sm">Gunakan token untuk memberikan suara</p>
                  </div>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">{user.availableTokens}</div>
                      <div className="text-xs text-gray-600">Tersedia</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{user.totalVotes}</div>
                      <div className="text-xs text-gray-600">Digunakan</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{user.purchasedTokens}</div>
                      <div className="text-xs text-gray-600">Dibeli</div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onNavigate('tokens')}
                    className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-800 transition-all"
                  >
                    Beli Token Tambahan
                  </motion.button>
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Aktivitas Terbaru</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Coins className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">Membeli 25 token vote</p>
                      <p className="text-xs text-gray-600">15 Jan 2024, 14:30</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Vote className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">Memberikan suara kepada 5 kandidat</p>
                      <p className="text-xs text-gray-600">14 Jan 2024, 09:15</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">Mendaftar akun</p>
                      <p className="text-xs text-gray-600">13 Jan 2024, 16:45</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">Pengaturan Akun</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center justify-between">
                      <span className="text-sm text-gray-700">Notifikasi</span>
                      <div className="w-10 h-5 bg-indigo-600 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center justify-between">
                      <span className="text-sm text-gray-700">Keamanan</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center justify-between">
                      <span className="text-sm text-gray-700">Privasi</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

// Main App Component
export default function App() {
  const [currentView, setCurrentView] = useState('loading');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userVotes, setUserVotes] = useState({});
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [candidates, setCandidates] = useState(mockCandidates);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentView('landing');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Initialize user votes
  useEffect(() => {
    const initialVotes = {};
    candidates.forEach(candidate => {
      initialVotes[candidate.id] = 0;
    });
    setUserVotes(initialVotes);
  }, [candidates]);

  const handleLogin = (isAdminUser = false, user = null) => {
    const mockUser = user || mockUsers.find(u => u.email === (isAdminUser ? 'admin@email.com' : 'ahmad@email.com')) || mockUsers[0];
    setIsLoggedIn(true);
    setIsAdmin(isAdminUser);
    setCurrentUser(mockUser);
    setCurrentView('voting');
  };

  const handleRegister = () => {
    const newUser = { ...mockUsers[0], id: Date.now() };
    setIsLoggedIn(true);
    setIsAdmin(false);
    setCurrentUser(newUser);
    setCurrentView('voting');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setCurrentUser(null);
    setCurrentView('landing');
    setSelectedCandidate(null);
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  const handleVoteChange = (candidateId, increment) => {
    setUserVotes(prev => ({
      ...prev,
      [candidateId]: Math.max(0, prev[candidateId] + (increment ? 1 : -1))
    }));
  };

  const handleConfirmVote = () => {
    const totalVotesToCast = Object.values(userVotes).reduce((sum, count) => sum + count, 0);
    
    if (totalVotesToCast === 0) {
      alert('Silakan pilih minimal 1 suara untuk dikonfirmasi');
      return;
    }

    if (currentUser && currentUser.availableTokens < totalVotesToCast) {
      alert(`Token tidak cukup. Anda memiliki ${currentUser.availableTokens} token, butuh ${totalVotesToCast} token.`);
      return;
    }

    // Simulate API call
    console.log('Confirming votes:', userVotes);
    
    // Update user tokens
    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        availableTokens: currentUser.availableTokens - totalVotesToCast,
        totalVotes: currentUser.totalVotes + totalVotesToCast
      };
      setCurrentUser(updatedUser);
      
      // Update candidate votes
      const updatedCandidates = candidates.map(candidate => ({
        ...candidate,
        votes: candidate.votes + (userVotes[candidate.id] || 0)
      }));
      setCandidates(updatedCandidates);
    }
    
    // Reset votes after confirmation
    const resetVotes = {};
    candidates.forEach(candidate => {
      resetVotes[candidate.id] = 0;
    });
    setUserVotes(resetVotes);
    
    alert(`Berhasil memberikan ${totalVotesToCast} suara!`);
  };

  const handleTokenPurchase = (tokens) => {
    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        purchasedTokens: currentUser.purchasedTokens + tokens,
        availableTokens: Math.min(currentUser.availableTokens + tokens, 50)
      };
      setCurrentUser(updatedUser);
    }
  };

  // Get sorted candidates
  const sortedCandidates = [...candidates]
    .filter(c => c.isActive)
    .sort((a, b) => b.votes - a.votes);

  const top3Candidates = sortedCandidates.slice(0, 3);
  const liveVoteCandidates = sortedCandidates.slice(3, 10);

  const totalVotes = Object.values(userVotes).reduce((sum, count) => sum + count, 0);

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-50 relative overflow-hidden">
      <EnhancedBackground />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Community Choice Awards 2025</span>
          </motion.div>
          <div className="flex space-x-2">
            <button 
              onClick={() => setCurrentView('login')}
              className="px-3 py-1.5 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors text-sm"
            >
              Login
            </button>
            <button 
              onClick={() => setCurrentView('register')}
              className="px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-800 transition-all text-sm"
            >
              Daftar
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-4"
          >
            <Crown className="w-12 h-12 text-gradient-to-r from-indigo-600 to-purple-600 mx-auto" />
          </motion.div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Community Choice Awards 2025
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto text-sm">
            Pilih kandidat favorit Anda dari 70 nominasi luar biasa yang telah berkontribusi untuk kemajuan komunitas kita.
          </p>
        </motion.div>

        {/* Vote Button - Redirects based on login status */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => isLoggedIn ? setShowTokenModal(true) : setCurrentView('login')}
          className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-800 transition-all shadow-lg flex items-center justify-center space-x-2 mb-6"
        >
          <Vote className="w-5 h-5" />
          <span>{isLoggedIn ? 'Beli Token Vote' : 'Mulai Voting'}</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>

        {/* Top 3 Candidates */}
        {top3Candidates.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center justify-center">
              <Crown className="w-5 h-5 mr-2 text-yellow-500" />
              Kandidat Terbaik
            </h2>
            <Top3Candidates candidates={top3Candidates} />
          </motion.div>
        )}

        {/* Live Vote - Candidates 4-10 */}
        {liveVoteCandidates.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-5 mb-6 border border-gray-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-indigo-600" />
                Live Vote (Peringkat 4-10)
              </h2>
              <Sparkles className="w-4 h-4 text-yellow-500" />
            </div>
            <HorizontalBarChart candidates={liveVoteCandidates} />
          </motion.div>
        )}

        {/* Event Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm"
        >
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Info className="w-5 h-5 mr-2 text-indigo-600" />
            Tentang Acara
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Community Choice Awards 2025 adalah penghargaan tahunan yang mengakui individu-individu luar biasa 
            yang telah memberikan kontribusi signifikan bagi kemajuan komunitas kita. Melalui voting publik, 
            masyarakat memiliki kesempatan untuk memilih para pemimpin, inovator, dan pelayan komunitas 
            yang telah menginspirasi perubahan positif di berbagai bidang.
          </p>
          <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              Januari - Desember 2025
            </span>
            <span className="flex items-center">
              <UsersRound className="w-3 h-3 mr-1" />
              70 Kandidat
            </span>
          </div>
        </motion.div>

        {/* Admin Access Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center text-xs text-gray-500"
        >
          <p>Untuk akses admin, login dengan email: admin@email.com</p>
        </motion.div>
      </main>
    </div>
  );

  // Voting Page Component
  const VotingPage = () => {
    // Filter candidates
    const uniqueCategories = ['All', ...new Set(candidates.map(c => c.category))];
    const filteredCandidates = candidates.filter(candidate => {
      const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           candidate.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'All' || candidate.category === filterCategory;
      const isActive = candidate.isActive;
      return matchesSearch && matchesCategory && isActive;
    });

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <EnhancedBackground />
        
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-md mx-auto px-4 py-3">
            <div className="flex items-center justify-between mb-3">
              <button 
                onClick={() => handleNavigate('landing')}
                className="text-gray-600 hover:text-gray-900"
              >
                <Home className="w-5 h-5" />
              </button>
              <h1 className="text-lg font-semibold text-gray-900 text-center flex-1">70 Kandidat</h1>
              {isLoggedIn ? (
                <ProfileDropdown user={currentUser} onLogout={handleLogout} onNavigate={handleNavigate} />
              ) : (
                <button 
                  onClick={() => setCurrentView('login')}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <LogIn className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Search and Filters */}
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari kandidat atau kategori..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-2">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="flex-1 text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  {uniqueCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <button
                  onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                  className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  {viewMode === 'grid' ? <List className="w-4 h-4" /> : <Grid3X3 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-md mx-auto px-4 py-4 pb-20">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              {filteredCandidates.length} dari {candidates.filter(c => c.isActive).length} kandidat aktif
            </p>
            {totalVotes > 0 && (
              <span className="text-sm font-medium text-indigo-600">
                {totalVotes} suara dipilih
              </span>
            )}
          </div>

          {/* Token Status - Only for logged in users */}
          {isLoggedIn && currentUser && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-4 mb-4 border border-gray-200 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Coins className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="font-medium text-gray-900">Token Vote</p>
                    <p className="text-sm text-gray-600">
                      {currentUser.availableTokens} tersedia • {currentUser.totalVotes} digunakan
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowTokenModal(true)}
                  className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-sm font-medium rounded-lg hover:from-indigo-700 hover:to-purple-800 transition-all"
                >
                  Beli
                </button>
              </div>
            </motion.div>
          )}

          {/* Candidates Grid */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-4' : 'space-y-3'}>
            <AnimatePresence>
              {filteredCandidates.map((candidate) => (
                <motion.div
                  key={candidate.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <CandidateCard
                    candidate={candidate}
                    isSelected={selectedCandidate?.id === candidate.id}
                    onClick={() => setSelectedCandidate(candidate)}
                    userVotes={userVotes}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredCandidates.length === 0 && (
            <div className="text-center py-8">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600">Tidak ada kandidat yang ditemukan</p>
            </div>
          )}

          {/* Confirm Button */}
          {isLoggedIn && totalVotes > 0 && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleConfirmVote}
              className="w-full mt-6 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all shadow-lg"
            >
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 mr-2" />
                Konfirmasi ({totalVotes} suara)
              </div>
            </motion.button>
          )}
        </main>

        {/* Candidate Modal */}
        <AnimatePresence>
          {selectedCandidate && (
            <CandidateModal
              candidate={selectedCandidate}
              onClose={() => setSelectedCandidate(null)}
              onVoteChange={handleVoteChange}
              userVotes={userVotes}
              isLoggedIn={isLoggedIn}
            />
          )}
        </AnimatePresence>

        {/* Token Purchase Modal */}
        <TokenPurchaseModal
          isOpen={showTokenModal}
          onClose={() => setShowTokenModal(false)}
          onPurchase={handleTokenPurchase}
          user={currentUser || { availableTokens: 0, purchasedTokens: 0 }}
          isLoggedIn={isLoggedIn}
        />
      </div>
    );
  };

  // Login Page Component
  const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLoginSubmit = (e) => {
      e.preventDefault();
      const user = mockUsers.find(u => u.email === email);
      const isAdminUser = email === 'admin@email.com';
      handleLogin(isAdminUser, user);
      
      if (isAdminUser) {
        setTimeout(() => {
          setCurrentView('admin');
        }, 1000);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex flex-col relative overflow-hidden">
        <EnhancedBackground />
        
        <header className="p-4">
          <button 
            onClick={() => setCurrentView('landing')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <X className="w-5 h-5 mr-2" />
            Kembali
          </button>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-sm text-center mb-8 relative"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <Lock className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Community Choice Awards 2025</h1>
            <p className="text-gray-600">Masuk untuk memberikan suara Anda</p>
          </motion.div>

          <form className="w-full max-w-sm space-y-4" onSubmit={handleLoginSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-indigo-600" />
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="email@contoh.com"
                  required
                />
                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Lock className="w-4 h-4 mr-2 text-indigo-600" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pl-10 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
                <Lock className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600">Ingat saya</span>
              </label>
              <button type="button" className="text-sm text-indigo-600 hover:text-indigo-700">
                Lupa password?
              </button>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-800 transition-all shadow-lg"
            >
              Masuk
            </motion.button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Belum punya akun?{' '}
            <button 
              onClick={() => setCurrentView('register')}
              className="text-indigo-600 font-medium hover:text-indigo-700"
            >
              Daftar sekarang
            </button>
          </p>
          
          <p className="mt-4 text-center text-xs text-gray-500">
            Untuk akses admin, gunakan email: admin@email.com
          </p>
        </main>
      </div>
    );
  };

  // Register Page Component
  const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-indigo-100 flex flex-col relative overflow-hidden">
        <EnhancedBackground />
        
        <header className="p-4">
          <button 
            onClick={() => setCurrentView('landing')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <X className="w-5 h-5 mr-2" />
            Kembali
          </button>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-sm text-center mb-8"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <UserPlus className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Community Choice Awards 2025</h1>
            <p className="text-gray-600">Daftar untuk memberikan suara Anda</p>
          </motion.div>

          <form className="w-full max-w-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Users2 className="w-4 h-4 mr-2 text-indigo-600" />
                Nama Lengkap
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Nama lengkap Anda"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-indigo-600" />
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="email@contoh.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Lock className="w-4 h-4 mr-2 text-indigo-600" />
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Minimal 8 karakter"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Shield className="w-4 h-4 mr-2 text-indigo-600" />
                Konfirmasi Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Ulangi password"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => { e.preventDefault(); handleRegister(); }}
              className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all shadow-lg"
            >
              Daftar
            </motion.button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Sudah punya akun?{' '}
            <button 
              onClick={() => setCurrentView('login')}
              className="text-indigo-600 font-medium hover:text-indigo-700"
            >
              Masuk sekarang
            </button>
          </p>
        </main>
      </div>
    );
  };

  // Admin Dashboard Component
  const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    // Stats calculations
    const totalActiveCandidates = candidates.filter(c => c.isActive).length;
    const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);
    const totalUsers = mockUsers.length;
    const totalRevenue = mockUsers.reduce((sum, user) => sum + (user.purchasedTokens * 1000), 0);

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <EnhancedBackground />
        
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
            <button 
              onClick={() => handleNavigate('voting')}
              className="text-gray-600 hover:text-gray-900"
            >
              <X className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Admin Panel</h1>
            <ProfileDropdown user={currentUser} onLogout={handleLogout} onNavigate={handleNavigate} />
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex space-x-1 bg-white rounded-xl p-1 shadow-sm overflow-x-auto">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: PieChart },
              { id: 'candidates', label: 'Kandidat', icon: Users },
              { id: 'votes', label: 'Voting', icon: BarChart3 },
              { id: 'transactions', label: 'Transaksi', icon: CreditCard },
              { id: 'users', label: 'Pengguna', icon: Users2 }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center py-2 px-2 min-w-[80px] rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-indigo-100 text-indigo-700 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-4 h-4 mb-1" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <main className="max-w-md mx-auto px-4 pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {activeTab === 'dashboard' && (
                <>
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                    <PieChart className="w-5 h-5 mr-2 text-indigo-600" />
                    Overview
                  </h2>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <Users className="w-6 h-6 text-indigo-600" />
                        <span className="text-2xl font-bold text-gray-900">{totalActiveCandidates}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Kandidat Aktif</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                        <span className="text-2xl font-bold text-gray-900">{totalVotes.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Total Votes</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <Users2 className="w-6 h-6 text-purple-600" />
                        <span className="text-2xl font-bold text-gray-900">{totalUsers}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Pengguna</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <Wallet className="w-6 h-6 text-yellow-600" />
                        <span className="text-2xl font-bold text-gray-900">Rp{totalRevenue.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Pendapatan</p>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                    <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                      <Activity className="w-4 h-4 mr-2 text-indigo-600" />
                      Aktivitas Terbaru
                    </h3>
                    <div className="space-y-3">
                      {mockUsers.slice(0, 3).map(user => (
                        <div key={user.id} className="flex items-center justify-between text-sm">
                          <div>
                            <p className="font-medium text-gray-900">{user.name}</p>
                            <p className="text-gray-600">Membeli {user.purchasedTokens} token</p>
                          </div>
                          <span className="font-medium text-green-600">+{user.purchasedTokens}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'candidates' && (
                <>
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-indigo-600" />
                      Kelola Kandidat
                    </h2>
                    <button 
                      onClick={() => {
                        alert('Fitur tambah kandidat akan diimplementasikan');
                      }}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-sm font-medium rounded-lg hover:from-indigo-700 hover:to-purple-800 transition-all"
                    >
                      <Plus className="w-3 h-3 mr-1" />
                      Tambah
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {candidates.map(candidate => (
                      <motion.div
                        key={candidate.id}
                        whileHover={{ backgroundColor: '#f9fafb' }}
                        className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                              <img src={candidate.image} alt={candidate.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">{candidate.name}</h3>
                              <p className="text-sm text-gray-600">{candidate.category} • {candidate.votes.toLocaleString()} votes</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  candidate.isActive 
                                    ? 'bg-green-100 text-green-700' 
                                    : 'bg-gray-100 text-gray-700'
                                }`}>
                                  {candidate.isActive ? 'Aktif' : 'Nonaktif'}
                                </span>
                                {candidate.verified ? (
                                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                                    Terverifikasi
                                  </span>
                                ) : (
                                  <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                                    Menunggu Verifikasi
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => {
                                alert('Edit kandidat');
                              }}
                              className="text-indigo-600 hover:text-indigo-700"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => {
                                if (window.confirm('Hapus kandidat ini?')) {
                                  alert('Kandidat dihapus');
                                }
                              }}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 'votes' && (
                <>
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-indigo-600" />
                    Hasil Voting
                  </h2>
                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                    <div className="space-y-3">
                      {candidates
                        .filter(c => c.isActive)
                        .sort((a, b) => b.votes - a.votes)
                        .slice(0, 10)
                        .map((candidate, index) => (
                          <div key={candidate.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                            <div className="flex items-center space-x-3">
                              <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-yellow-800">#{index + 1}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <img 
                                  src={candidate.image} 
                                  alt={candidate.name}
                                  className="w-8 h-8 rounded-full object-cover"
                                />
                                <span className="font-medium text-gray-900 text-sm">{candidate.name}</span>
                              </div>
                            </div>
                            <span className="font-medium text-indigo-600 text-sm">{candidate.votes.toLocaleString()}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'transactions' && (
                <>
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-indigo-600" />
                    Transaksi
                  </h2>
                  {mockUsers.map(user => (
                    <motion.div
                      key={user.id}
                      whileHover={{ backgroundColor: '#f9fafb' }}
                      className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-600 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {user.lastLogin}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            Membeli {user.purchasedTokens} token • Rp{(user.purchasedTokens * 1000).toLocaleString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600">Rp{(user.purchasedTokens * 1000).toLocaleString()}</p>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                            Berhasil
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </>
              )}

              {activeTab === 'users' && (
                <>
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Users2 className="w-5 h-5 mr-2 text-indigo-600" />
                    Pengguna
                  </h2>
                  {mockUsers.map(user => (
                    <motion.div
                      key={user.id}
                      whileHover={{ backgroundColor: '#f9fafb' }}
                      className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{user.name}</h3>
                            <p className="text-sm text-gray-600">{user.email}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                user.role === 'admin' 
                                  ? 'bg-purple-100 text-purple-700' 
                                  : 'bg-blue-100 text-blue-700'
                              }`}>
                                {user.role}
                              </span>
                              {user.verified ? (
                                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                                  <Check className="w-3 h-3 inline" /> Terverifikasi
                                </span>
                              ) : (
                                <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                                  <AlertTriangle className="w-3 h-3 inline" /> Belum Verifikasi
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600 flex items-center">
                            <Coins className="w-3 h-3 mr-1 text-indigo-600" />
                            {user.availableTokens} token
                          </p>
                          <p className="text-xs text-gray-600">{user.totalVotes} suara</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    );
  };

  // Candidate Card Component
  const CandidateCard = ({ candidate, isSelected, onClick, userVotes }) => {
    const voteCount = userVotes[candidate.id] || 0;
    
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className={`bg-white rounded-xl border-2 ${
          isSelected 
            ? 'border-indigo-500 shadow-lg' 
            : 'border-gray-200 hover:border-indigo-300 shadow-sm'
        } overflow-hidden cursor-pointer transition-all duration-300`}
        onClick={onClick}
      >
        <div className="p-4">
          <div className="flex items-start space-x-3">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white shadow-md">
                <img 
                  src={candidate.image} 
                  alt={candidate.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {isSelected && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
              {candidate.verified && (
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-sm truncate">{candidate.name}</h3>
              <p className="text-xs text-indigo-600 font-medium">{candidate.category}</p>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs text-gray-500">{candidate.votes.toLocaleString()} votes</span>
              </div>
            </div>
            {voteCount > 0 && (
              <div className="flex-shrink-0 bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium">
                {voteCount}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  // Expanded Candidate Modal
  const CandidateModal = ({ candidate, onClose, onVoteChange, userVotes, isLoggedIn }) => {
    const voteCount = userVotes[candidate.id] || 0;
    
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <AwardIcon className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg font-semibold">Community Choice Awards 2025</h3>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[70vh]">
            {/* Hero Section */}
            <div className="relative">
              <div className="w-full h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white p-1">
                  <img 
                    src={candidate.image} 
                    alt={candidate.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-4 right-4 bg-white rounded-t-xl p-4 -mb-6 shadow-lg">
                <h2 className="text-xl font-bold text-gray-900">{candidate.name}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <BadgeCheck className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600">{candidate.category}</span>
                  {candidate.verified && (
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 flex items-center">
                      <Check className="w-3 h-3 mr-1" />
                      Terverifikasi
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-8 px-4 pb-4">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-indigo-50 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-700">{candidate.votes.toLocaleString()}</div>
                  <div className="text-xs text-gray-600">Total Votes</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-700">{candidate.socialImpact}%</div>
                  <div className="text-xs text-gray-600">Social Impact</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-700">{candidate.location}</div>
                  <div className="text-xs text-gray-600">Location</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Info className="w-4 h-4 mr-2 text-indigo-600" />
                  About
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {candidate.description}
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Medal className="w-4 h-4 mr-2 text-yellow-600" />
                  Key Achievements
                </h3>
                <div className="space-y-2">
                  {candidate.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Voting Controls - Only for logged in users */}
              {isLoggedIn && (
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Your Vote</h3>
                  <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => onVoteChange(candidate.id, false)}
                        disabled={voteCount === 0}
                        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center disabled:opacity-50 hover:bg-gray-300 transition-colors"
                      >
                        <Minus className="w-5 h-5 text-gray-600" />
                      </button>
                      <span className="text-2xl font-bold text-gray-900 min-w-[40px] text-center">
                        {voteCount}
                      </span>
                      <button 
                        onClick={() => onVoteChange(candidate.id, true)}
                        className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-700 transition-colors"
                      >
                        <Plus className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">votes</p>
                      {voteCount > 0 && (
                        <p className="text-xs text-indigo-600 font-medium">selected</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <button 
              onClick={onClose}
              className="w-full py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Render current view
  const renderCurrentView = () => {
    if (currentView === 'loading') {
      return <LoadingScreen />;
    }
    
    switch (currentView) {
      case 'landing':
        return <LandingPage />;
      case 'login':
        return <LoginPage />;
      case 'register':
        return <RegisterPage />;
      case 'voting':
        return <VotingPage />;
      case 'admin':
        return <AdminDashboard />;
      case 'profile':
        return <ProfilePage user={currentUser} onLogout={handleLogout} onNavigate={handleNavigate} />;
      case 'tokens':
        return <VotingPage />;
      default:
        return <LandingPage />;
    }
  };

  return renderCurrentView();
}
