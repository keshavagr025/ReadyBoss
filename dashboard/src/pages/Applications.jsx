// // src/pages/Applications.jsx
// import React, { useState } from 'react';
// import { 
//   Plus, 
//   Filter, 
//   Search, 
//   Eye, 
//   Edit, 
//   Trash2, 
//   MapPin, 
//   Calendar,
//   DollarSign,
//   Building2,
//   ExternalLink
// } from 'lucide-react';

// const Applications = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterStatus, setFilterStatus] = useState('all');
  
//   const applications = [
//     {
//       id: 1,
//       company: 'Google',
//       position: 'Senior Frontend Developer',
//       status: 'Interview',
//       appliedDate: '2024-06-08',
//       score: 92,
//       location: 'Mountain View, CA',
//       salary: '$130K - $180K',
//       type: 'Full-time',
//       notes: 'Phone screening completed, technical interview scheduled'
//     },
//     {
//       id: 2,
//       company: 'Microsoft',
//       position: 'Full Stack Engineer',
//       status: 'Applied',
//       appliedDate: '2024-06-07',
//       score: 88,
//       location: 'Seattle, WA',
//       salary: '$120K - $160K',
//       type: 'Full-time',
//       notes: 'Application submitted via LinkedIn'
//     },
//     {
//       id: 3,
//       company: 'Amazon',
//       position: 'Software Development Engineer',
//       status: 'Under Review',
//       appliedDate: '2024-06-06',
//       score: 85,
//       location: 'Seattle, WA',
//       salary: '$115K - $155K',
//       type: 'Full-time',
//       notes: 'Recruiter reached out for initial discussion'
//     },
//     {
//       id: 4,
//       company: 'Meta',
//       position: 'Frontend Engineer',
//       status: 'Applied',
//       appliedDate: '2024-06-04',
//       score: 90,
//       location: 'Menlo Park, CA',
//       salary: '$140K - $190K',
//       type: 'Full-time',
//       notes: 'Applied through company website'
//     },
//     {
//       id: 5,
//       company: 'Netflix',
//       position: 'Senior Software Engineer',
//       status: 'Rejected',
//       appliedDate: '2024-05-28',
//       score: 78,
//       location: 'Los Gatos, CA',
//       salary: '$150K - $200K',
//       type: 'Full-time',
//       notes: 'Did not move forward after initial screening'
//     }
//   ];

//   const getStatusColor = (status) => {
//     switch (status.toLowerCase()) {
//       case 'interview':
//         return 'bg-green-100 text-green-800 border-green-200';
//       case 'applied':
//         return 'bg-blue-100 text-blue-800 border-blue-200';
//       case 'under review':
//         return 'bg-yellow-100 text-yellow-800 border-yellow-200';
//       case 'rejected':
//         return 'bg-red-100 text-red-800 border-red-200';
//       default:
//         return 'bg-gray-100 text-gray-800 border-gray-200';
//     }
//   };

//   const getScoreColor = (score) => {
//     if (score >= 90) return 'text-green-600 bg-green-50';
//     if (score >= 80) return 'text-blue-600 bg-blue-50';
//     if (score >= 70) return 'text-yellow-600 bg-yellow-50';
//     return 'text-red-600 bg-red-50';
//   };

//   const filteredApplications = applications.filter(app => {
//     const matchesSearch = app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          app.position.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesFilter = filterStatus === 'all' || app.status.toLowerCase() === filterStatus;
//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div className="p-6 space-y-6">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Applications</h1>
//           <p className="text-gray-600 mt-1">Track and manage your job applications</p>
//         </div>
        
//         <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//           <Plus size={20} />
//           <span>Add Application</span>
//         </button>
//       </div>

//       {/* Filters and Search */}
//       <div className="flex flex-col md:flex-row gap-4">
//         <div className="flex-1 relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//           <input
//             type="text"
//             placeholder="Search companies or positions..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//         </div>
        
//         <div className="flex items-center space-x-2">
//           <Filter size={20} className="text-gray-400" />
//           <select
//             value={filterStatus}
//             onChange={(e) => setFilterStatus(e.target.value)}
//             className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           >
//             <option value="all">All Status</option>
//             <option value="applied">Applied</option>
//             <option value="under review">Under Review</option>
//             <option value="interview">Interview</option>
//             <option value="rejected">Rejected</option>
//           </select>
//         </div>
//       </div>

//       {/* Applications Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {filteredApplications.map((app) => (
//           <div key={app.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200">
//             {/* Header */}
//             <div className="flex items-start justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                   <Building2 size={20} className="text-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900">{app.position}</h3>
//                   <p className="text-gray-600">{app.company}</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-2">
//                 <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
//                   <Eye size={18} />
//                 </button>
//                 <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
//                   <Edit size={18} />
//                 </button>
//                 <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
//                   <Trash2 size={18} />
//                 </button>
//               </div>
//             </div>

//             {/* Details */}
//             <div className="space-y-3 mb-4">
//               <div className="flex items-center space-x-2 text-sm text-gray-600">
//                 <MapPin size={16} />
//                 <span>{app.location}</span>
//               </div>
              
//               <div className="flex items-center space-x-2 text-sm text-gray-600">
//                 <DollarSign size={16} />
//                 <span>{app.salary}</span>
//               </div>
              
//               <div className="flex items-center space-x-2 text-sm text-gray-600">
//                 <Calendar size={16} />
//                 <span>Applied {app.appliedDate}</span>
//               </div>
//             </div>

//             {/* Status and Score */}
//             <div className="flex items-center justify-between mb-4">
//               <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(app.status)}`}>
//                 {app.status}
//               </span>
              
//               <div className={`px-3 py-1 rounded-lg text-sm font-semibold ${getScoreColor(app.score)}`}>
//                 ATS Score: {app.score}%
//               </div>
//             </div>

//             {/* Notes */}
//             {app.notes && (
//               <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700">
//                 <p className="font-medium text-gray-900 mb-2">Notes:</p>
//                 <p>{app.notes}</p>
//                 </div>
//             )}
//             {/* External Link */}
//             <div className="mt-4">
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-700 flex items-center space-x-1 text-sm font-medium"
//               >
//                 <span>View Application</span>
//                 <ExternalLink size={16} />
//               </a>
//             </div>
//           </div>
//         ))}
//         </div>
//         </div>
//     );
// }
// export default Applications;
import React, { useState } from 'react';
import { Plus, Download, Upload, Filter } from 'lucide-react';
import ApplicationTable from '../components/ApplicationTable';
import Button from '../components/Button';

export const Applications = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      company: 'Google',
      position: 'Senior Software Engineer',
      location: 'Mountain View, CA',
      status: 'interview',
      dateApplied: '2024-01-15',
      nextAction: 'Technical interview on Jan 25',
      salary: '$180,000',
      description: 'Full-stack development role focusing on cloud infrastructure'
    },
    {
      id: 2,
      company: 'Microsoft',
      position: 'Product Manager',
      location: 'Seattle, WA', 
      status: 'applied',
      dateApplied: '2024-01-10',
      nextAction: 'Wait for initial screening',
      salary: '$150,000',
      description: 'Lead product strategy for Azure services'
    },
    {
      id: 3,
      company: 'Apple',
      position: 'iOS Developer',
      location: 'Cupertino, CA',
      status: 'offer',
      dateApplied: '2024-01-08',
      nextAction: 'Review offer package',
      salary: '$160,000',
      description: 'Develop consumer-facing iOS applications'
    },
    {
      id: 4,
      company: 'Meta',
      position: 'Data Scientist',
      location: 'Menlo Park, CA',
      status: 'rejected',
      dateApplied: '2024-01-05',
      nextAction: 'Consider reapplying in 6 months',
      salary: '$140,000',
      description: 'Analyze user behavior and engagement metrics'
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingApplication, setEditingApplication] = useState(null);

  const handleAddApplication = () => {
    setShowAddModal(true);
  };

  const handleEditApplication = (application) => {
    setEditingApplication(application);
    setShowAddModal(true);
  };

  const handleDeleteApplication = (id) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      setApplications(applications.filter(app => app.id !== id));
    }
  };

  const handleViewApplication = (application) => {
    // View application details
    console.log('Viewing application:', application);
  };

  const saveApplication = (applicationData) => {
    if (editingApplication) {
      // Update existing application
      setApplications(applications.map(app => 
        app.id === editingApplication.id 
          ? { ...app, ...applicationData }
          : app
      ));
    } else {
      // Add new application
      const newApplication = {
        ...applicationData,
        id: Date.now(),
        dateApplied: new Date().toISOString().split('T')[0]
      };
      setApplications([...applications, newApplication]);
    }
    setShowAddModal(false);
    setEditingApplication(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Job Applications</h1>
          <p className="text-gray-600 mt-1">Track and manage your job applications</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" icon={Download}>
            Export
          </Button>
          <Button onClick={handleAddApplication} icon={Plus}>
            Add Application
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-semibold">📄</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Applications</p>
              <p className="text-2xl font-semibold text-gray-900">{applications.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 font-semibold">⏳</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">In Progress</p>
              <p className="text-2xl font-semibold text-gray-900">
                {applications.filter(app => app.status === 'applied' || app.status === 'interview').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-semibold">✅</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Offers</p>
              <p className="text-2xl font-semibold text-gray-900">
                {applications.filter(app => app.status === 'offer').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-semibold">📈</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Response Rate</p>
              <p className="text-2xl font-semibold text-gray-900">
                {Math.round((applications.filter(app => app.status !== 'applied').length / applications.length) * 100)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Applications Table */}
      <ApplicationTable
        applications={applications}
        onEdit={handleEditApplication}
        onDelete={handleDeleteApplication}
        onView={handleViewApplication}
      />

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-lg font-semibold mb-4">
              {editingApplication ? 'Edit Application' : 'Add New Application'}
            </h2>
            <ApplicationForm
              application={editingApplication}
              onSave={saveApplication}
              onCancel={() => {
                setShowAddModal(false);
                setEditingApplication(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Application Form Component
const ApplicationForm = ({ application, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    company: application?.company || '',
    position: application?.position || '',
    location: application?.location || '',
    status: application?.status || 'applied',
    salary: application?.salary || '',
    description: application?.description || '',
    nextAction: application?.nextAction || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Position
        </label>
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Salary Range
        </label>
        <input
          type="text"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          placeholder="e.g., $120,000 - $150,000"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="submit" className="flex-1">
          {application ? 'Update' : 'Add'} Application
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};
