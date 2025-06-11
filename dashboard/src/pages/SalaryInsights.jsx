import React, { useState } from 'react';
import { DollarSign, TrendingUp, MapPin, Building2, Users, Search } from 'lucide-react';
import Button from '../components/Button';

const SalaryInsights = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [averageSalary, setAverageSalary] = useState(null);
  const [topCompanies, setTopCompanies] = useState([]);
  const [topLocations, setTopLocations] = useState([]);
  const [topJobTitles, setTopJobTitles] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [applications, setApplications] = useState([]);

  const fetchSalaryData = () => {
    // Dummy data simulation; in real-world use, fetch from API
    setAverageSalary(115000);
    setTopCompanies([
      { name: 'Google', salary: 130000 },
      { name: 'Microsoft', salary: 125000 },
    ]);
    setTopLocations([
      { location: 'Bangalore', salary: 120000 },
      { location: 'Hyderabad', salary: 110000 },
    ]);
    setTopJobTitles([
      { title: 'Frontend Developer', salary: 105000 },
      { title: 'Backend Developer', salary: 115000 },
    ]);
    setResumes([{}, {}, {}]); // example: 3 resumes
    setApplications([{}, {}, {}, {}]); // example: 4 applications
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Salary Insights</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <DollarSign className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Salary Insights</h2>
          </div>
          <Button onClick={fetchSalaryData} className="bg-blue-600 text-white hover:bg-blue-700">
            <Search className="h-4 w-4 mr-2" />
            Fetch Salary Data
          </Button>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by job title, location, or keyword"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Average Salary */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center space-x-4 mb-4">
              <DollarSign className="h-6 w-6 text-green-600" />
              <h3 className="text-lg font-semibold">Average Salary</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {averageSalary ? `$${averageSalary.toLocaleString()}` : 'N/A'}
            </p>
          </div>

          {/* Top Companies */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center space-x-4 mb-4">
              <Building2 className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold">Top Companies</h3>
            </div>
            <ul className="space-y-2">
              {topCompanies.map((company, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-gray-800">{company.name}</span>
                  <span className="text-gray-600">${company.salary.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Locations */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center space-x-4 mb-4">
              <MapPin className="h-6 w-6 text-purple-600" />
              <h3 className="text-lg font-semibold">Top Locations</h3>
            </div>
            <ul className="space-y-2">
              {topLocations.map((location, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-gray-800">{location.location}</span>
                  <span className="text-gray-600">${location.salary.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Job Titles */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center space-x-4 mb-4">
              <Users className="h-6 w-6 text-yellow-600" />
              <h3 className="text-lg font-semibold">Top Job Titles</h3>
            </div>
            <ul className="space-y-2">
              {topJobTitles.map((job, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-gray-800">{job.title}</span>
                  <span className="text-gray-600">${job.salary.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume Count */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{resumes.length}</p>
              <p className="text-sm text-gray-500 mt-1">Total Resumes</p>
            </div>
          </div>

          {/* Applications Count */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{applications.length}</p>
              <p className="text-sm text-gray-500 mt-1">Total Applications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryInsights;
