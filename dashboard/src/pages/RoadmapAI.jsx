import React, { useState } from 'react';
import { Target, TrendingUp, Clock, CheckCircle, Circle, ArrowRight, Plus, Edit } from 'lucide-react';
import Button from '../components/Button';

const RoadmapAI = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Land Senior Software Engineer Role',
      description: 'Secure a senior-level position at a top tech company',
      category: 'Career Growth',
      priority: 'high',
      status: 'in-progress',
      targetDate: '2024-06-30',
      progress: 60,
      milestones: [
        { id: 1, title: 'Complete System Design Course', completed: true },
        { id: 2, title: 'Build 3 Portfolio Projects', completed: true },
        { id: 3, title: 'Apply to 20 Companies', completed: false },
        { id: 4, title: 'Complete Technical Interviews', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Develop Leadership Skills',
      description: 'Build management and team leadership capabilities',
      category: 'Skills',
      priority: 'medium',
      status: 'planned',
      targetDate: '2024-12-31',
      progress: 25,
      milestones: [
        { id: 1, title: 'Complete Leadership Training', completed: false },
        { id: 2, title: 'Mentor Junior Developers', completed: true },
        { id: 3, title: 'Lead a Team Project', completed: false },
        { id: 4, title: 'Get Management Certification', completed: false }
      ]
    },
    {
      id: 3,
      title: 'Increase Salary to $200K+',
      description: 'Achieve total compensation of $200,000 or more',
      category: 'Compensation',
      priority: 'high',
      status: 'in-progress',
      targetDate: '2024-08-31',
      progress: 45,
      milestones: [
        { id: 1, title: 'Research Market Rates', completed: true },
        { id: 2, title: 'Update Resume & LinkedIn', completed: true },
        { id: 3, title: 'Network with Recruiters', completed: false },
        { id: 4, title: 'Negotiate Offer', completed: false }
      ]
    }
  ]);

  const [showAddGoal, setShowAddGoal] = useState(false);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'planned': return 'bg-gray-100 text-gray-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddGoal = () => {
    setShowAddGoal(true);
  };

  const toggleMilestone = (goalId, milestoneId) => {
    setGoals(goals.map(goal => {
      if (goal.id === goalId) {
        const updatedMilestones = goal.milestones.map(milestone =>
          milestone.id === milestoneId
            ? { ...milestone, completed: !milestone.completed }
            : milestone
        );
        const completedCount = updatedMilestones.filter(m => m.completed).length;
        const progress = (completedCount / updatedMilestones.length) * 100;
        
        return {
          ...goal,
          milestones: updatedMilestones,
          progress: Math.round(progress)
        };
      }
      return goal;
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Career Roadmap</h1>
          <p className="text-gray-600 mt-1">Plan and track your career development goals</p>
        </div>
        <Button onClick={handleAddGoal} icon={Plus}>
          Add Goal
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <Target className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">{goals.length}</p>
              <p className="text-sm text-gray-500">Total Goals</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {goals.filter(g => g.status === 'in-progress').length}
              </p>
              <p className="text-sm text-gray-500">In Progress</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-purple-600 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {goals.filter(g => g.status === 'completed').length}
              </p>
              <p className="text-sm text-gray-500">Completed</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-orange-600 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length)}%
              </p>
              <p className="text-sm text-gray-500">Avg. Progress</p>
            </div>
          </div>
        </div>
      </div>

      {/* Goals List */}
      <div className="space-y-6">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {/* Goal Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(goal.priority)}`}>
                      {goal.priority.charAt(0).toUpperCase() + goal.priority.slice(1)}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(goal.status)}`}>
                      {goal.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{goal.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Target: {new Date(goal.targetDate).toLocaleDateString()}
                  </span>
                  <span>Category: {goal.category}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" icon={Edit}>
                Edit
              </Button>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm text-gray-500">{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Milestones */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Milestones</h4>
              <div className="space-y-2">
                {goal.milestones.map((milestone) => (
                  <div
                    key={milestone.id}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                    onClick={() => toggleMilestone(goal.id, milestone.id)}
                  >
                    {milestone.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <Circle className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${milestone.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                      {milestone.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Goal Modal */}
      {showAddGoal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6">
            <h2 className="text-lg font-semibold mb-4">Add New Goal</h2>
            <GoalForm
              onSave={(goalData) => {
                const newGoal = {
                  ...goalData,
                  id: Date.now(),
                  progress: 0,
                  milestones: goalData.milestones || []
                };
                setGoals([...goals, newGoal]);
                setShowAddGoal(false);
              }}
              onCancel={() => setShowAddGoal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Goal Form Component
const GoalForm = ({ goal, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: goal?.title || '',
    description: goal?.description || '',
    category: goal?.category || 'Career Growth',
    priority: goal?.priority || 'medium',
    status: goal?.status || 'planned',
    targetDate: goal?.targetDate || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Goal Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="Career Growth">Career Growth</option>
            <option value="Skills">Skills</option>
            <option value="Compensation">Compensation</option>
            <option value="Networking">Networking</option>
            <option value="Education">Education</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
          <select
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Target Date</label>
        <input
          type="date"
          value={formData.targetDate}
          onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="submit" className="flex-1">
          {goal ? 'Update Goal' : 'Add Goal'}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default RoadmapAI;