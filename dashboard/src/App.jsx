import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ResumeTracker from './pages/ResumeTracker';
import RoadmapAI from './pages/RoadmapAI';
import SkillGap from './pages/SkillGap';
import MockInterviews from './pages/MockInterviews';
import SalaryPrediction from './pages/SalaryInsights';
import Navbar from './components/Navbar';
import { Applications } from './pages/Applications';
import Analytics from './pages/Analytics';

export default function App() {
  return (
    // Adding the Navbar component to the App component
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/Applications' element={<Applications />} />
        <Route path="/resumes" element={<ResumeTracker />} />
        <Route path="/career-roadmap" element={<RoadmapAI />} />
        <Route path="/skills" element={<SkillGap />} />
        <Route path="/mock-interviews" element={<MockInterviews />} />
        <Route path="/salary-insights" element={<SalaryPrediction />} />
        <Route path='/analytics' element={<Analytics/>}/>
      </Routes>
    </>
  );
}