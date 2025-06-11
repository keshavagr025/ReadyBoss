import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Clock, Star, BookOpen, Video, Mic, Settings } from 'lucide-react';
import Button from '../components/Button';

export default function MockInterviews  () {
  const [activeInterview, setActiveInterview] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);

  const interviewTypes = [
    {
      id: 1,
      title: 'Technical Coding Interview',
      description: 'Practice data structures, algorithms, and coding problems',
      duration: '45-60 minutes',
      difficulty: 'Medium',
      questions: 25,
      icon: '💻'
    },
    {
      id: 2,
      title: 'System Design Interview',
      description: 'Design scalable systems and discuss architecture',
      duration: '60-90 minutes',
      difficulty: 'Hard',
      questions: 12,
      icon: '🏗️'
    },
    {
      id: 3,
      title: 'Behavioral Interview',
      description: 'STAR method practice and soft skills assessment',
      duration: '30-45 minutes',
      difficulty: 'Easy',
      questions: 20,
      icon: '🗣️'
    },
    {
      id: 4,
      title: 'Product Manager Interview',
      description: 'Product sense, strategy, and analytical thinking',
      duration: '45-60 minutes',
      difficulty: 'Medium',
      questions: 18,
      icon: '📊'
    }
  ];

  const recentSessions = [
    {
      id: 1,
      type: 'Technical Coding',
      date: '2024-01-15',
      duration: '52 minutes',
      score: 85,
      feedback: 'Strong algorithmic thinking, could improve on edge cases'
    },
    {
      id: 2,
      type: 'Behavioral',
      date: '2024-01-12',
      duration: '35 minutes',
      score: 78,
      feedback: 'Good storytelling, work on being more concise'
    },
    {
      id: 3,
      type: 'System Design',
      date: '2024-01-10',
      duration: '67 minutes',
      score: 72,
      feedback: 'Solid foundation, focus on scalability considerations'
    }
  ];

  const startInterview = (interviewType) => {
    setActiveInterview(interviewType);
    setTimer(0);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const endInterview = () => {
    setActiveInterview(null);
    setIsRecording(false);
    setTimer(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mock Interviews</h1>
          <p className="text-gray-600 mt-1">Practice and improve your interview skills</p>
        </div>
        <Button variant="outline" icon={Settings}>
          Settings
        </Button>
      </div>

      {/* Active Interview */}
      {activeInterview && (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">{activeInterview.title}</h2>
              <p className="text-blue-100">{activeInterview.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{formatTime(timer)}</div>
                <div className="text-sm text-blue-100">Duration</div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={isRecording ? "danger" : "success"}
                  size="sm"
                  onClick={toggleRecording}
                  icon={isRecording ? Pause : Play}
                >
                  {isRecording ? 'Pause' : 'Start'}
                </Button>
                <Button variant="outline" size="sm" onClick={endInterview}>
                  End Interview
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interview Types */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Choose Interview Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interviewTypes.map((interview) => (
            <div key={interview.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{interview.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{interview.title}</h3>
                    <p className="text-sm text-gray-600">{interview.description}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {interview.duration}
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {interview.questions} questions
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(interview.difficulty)}`}>
                  {interview.difficulty}
                </span>
              </div>

              <Button
                onClick={() => startInterview(interview)}
                disabled={activeInterview !== null}
                className="w-full"
                icon={Play}
              >
                Start Interview
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Sessions */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Sessions</h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Feedback</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentSessions.map((session) => (
                  <tr key={session.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{session.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(session.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{session.duration}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{session.score}/100</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{session.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Tips and Resources */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Interview Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">Before the Interview:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Research the company and role thoroughly</li>
              <li>• Prepare STAR method examples</li>
              <li>• Practice coding problems regularly</li>
              <li>• Set up a quiet, professional environment</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">During the Interview:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Think out loud and explain your approach</li>
              <li>• Ask clarifying questions</li>
              <li>• Stay calm and take your time</li>
              <li>• Show enthusiasm and curiosity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

