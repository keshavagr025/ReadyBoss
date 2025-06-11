// src/pages/Dashboard.jsx
import React from 'react';
import StatCard from '../components/StatCard';
import { 
  FileText, 
  Calendar, 
  TrendingUp, 
  Target, 
  Eye, 
  Clock,
  Building2,
  Star,
  ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Applications',
      value: '47',
      icon: FileText,
      change: '+12 this month',
      changeType: 'positive',
      color: 'blue'
    },
    {
      title: 'Interviews Scheduled',
      value: '8',
      icon: Calendar,
      change: '+3 this week',
      changeType: 'positive',
      color: 'green'
    },
    {
      title: 'Response Rate',
      value: '23%',
      icon: TrendingUp,
      change: '+5% this month',
      changeType: 'positive',
      color: 'purple'
    },
    {
      title: 'Average ATS Score',
      value: '85%',
      icon: Target,
      change: '+7 points',
      changeType: 'positive',
      color: 'orange'
    }
  ];

  const recentApplications = [
    {
      id: 1,
      company: 'Google',
      position: 'Senior Frontend Developer',
      status: 'Interview',
      appliedDate: '2024-06-08',
      score: 92
    },
    {
      id: 2,
      company: 'Microsoft',
      position: 'Full Stack Engineer',
      status: 'Applied',
      appliedDate: '2024-06-07',
      score: 88
    },
    {
      id: 3,
      company: 'Amazon',
      position: 'Software Development Engineer',
      status: 'Under Review',
      appliedDate: '2024-06-06',
      score: 85
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'interview':
        return 'bg-green-100 text-green-800';
      case 'applied':
        return 'bg-blue-100 text-blue-800';
      case 'under review':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, Alex! 👋
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your job search today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Applications */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Applications</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
              <span>View All</span>
              <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="space-y-4">
            {recentApplications.map((app) => (
              <div key={app.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Building2 size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{app.position}</h3>
                    <p className="text-sm text-gray-600">{app.company}</p>
                    <p className="text-xs text-gray-500">Applied {app.appliedDate}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-900">{app.score}%</p>
                    <p className="text-xs text-gray-500">ATS Score</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                    {app.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions & Insights */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors flex items-center space-x-3">
                <FileText size={20} />
                <span className="font-medium">Add New Application</span>
              </button>
              <button className="w-full p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors flex items-center space-x-3">
                <Target size={20} />
                <span className="font-medium">Optimize Resume</span>
              </button>
              <button className="w-full p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors flex items-center space-x-3">
                <Calendar size={20} />
                <span className="font-medium">Schedule Interview</span>
              </button>
            </div>
          </div>

          {/* Today's Tasks */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Tasks</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                <Clock size={16} className="text-orange-500" />
                <span className="text-sm text-gray-700">Follow up with Microsoft</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                <Star size={16} className="text-yellow-500" />
                <span className="text-sm text-gray-700">Prepare for Google interview</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                <Eye size={16} className="text-blue-500" />
                <span className="text-sm text-gray-700">Review Amazon job posting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;