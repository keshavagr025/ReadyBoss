// import React, { useState, useRef, useEffect } from 'react';
// import {
//   User, Settings, LogOut
// } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const profileRef = useRef();
//   const navigate = useNavigate();

//   // Replace this with real user data
//   const user = {
//     name: "Keshav",
//     avatar: "https://ui-avatars.com/api/?name=Keshav"
//   };

//   const navItems = [
//     { id: 'dashboard', label: 'Dashboard' },
//     { id: 'applications', label: 'Applications' },
//     { id: 'career-roadmap', label: 'Career Roadmap' },
//     { id: 'mock-interviews', label: 'Mock Interviews' },
//     { id: 'salary-insights', label: 'Salary Insights' },
//     { id: 'analytics', label: 'Analytics' }
//   ];

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/');
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             <img src='./public/logo.jpeg' alt='logo' className="h-12 w-auto"/>
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center gap-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.id}
//                 to={`/${item.id}`}
//                 onClick={() => setActiveTab(item.id)}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-gray-100 ${
//                   activeTab === item.id
//                     ? 'bg-blue-100 text-blue-700'
//                     : 'text-gray-600'
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           {/* Profile */}
//           <div className="relative" ref={profileRef}>
//             <button
//               onClick={() => setProfileOpen(!profileOpen)}
//               className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-gray-100 transition"
//             >
//               <img
//                 src={user.avatar}
//                 alt="avatar"
//                 className="w-8 h-8 rounded-full"
//               />
//               <span className="hidden md:block font-medium text-sm">{user.name}</span>
//             </button>

//             {profileOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-xl z-50">
//                 <Link
//                   to="/profile"
//                   className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   <User size={16} className="mr-2" /> Profile
//                 </Link>
//                 <Link
//                   to="/settings"
//                   className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   <Settings size={16} className="mr-2" /> Settings
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//                 >
//                   <LogOut size={16} className="mr-2" /> Logout
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Nav */}
//         {mobileOpen && (
//           <div className="md:hidden flex flex-col gap-1 mt-2 pb-2">
//             {navItems.map((item) => (
//               <Link
//                 key={item.id}
//                 to={`/${item.id}`}
//                 onClick={() => {
//                   setActiveTab(item.id);
//                   setMobileOpen(false);
//                 }}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
//                   activeTab === item.id
//                     ? 'bg-blue-100 text-blue-700'
//                     : 'text-gray-600 hover:bg-gray-50'
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
