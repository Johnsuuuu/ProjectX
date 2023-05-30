import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AffectionComputingPage from './components/studyPages/AffectionComputingPage';
import AffectionComputingStudyPage from './components/studyPages/AffectionComputingStudyPage';
import HapticsRealismPage from './components/studyPages/HapticsRealismPage';
import HapticsIntensityPage from './components/studyPages/HapticsIntensityPage';
import HomePage from './components/studyPages/HomePage';
import ResponseTimePage from './components/studyPages/ResponseTimePage';
import HapticsRealismStudyPage from './components/studyPages/HapticsRealismStudyPage';
import HapticsIntensityStudyPage from './components/studyPages/HapticsIntensityStudyPage';
import ResponseTimeStudyPage from './components/studyPages/ResponseTimeStudyPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/affectioncomputing" element={<AffectionComputingPage />} />
        <Route exact path="/hapticsrealism" element={<HapticsRealismPage />} />
        <Route exact path="/hapticsintensity" element={<HapticsIntensityPage />} />
        <Route exact path="/responsetime" element={<ResponseTimePage />} />
        <Route exact path="/affectioncomputing/trial/:trialNumber" element={<AffectionComputingStudyPage />} />
        <Route exact path="/hapticsrealism/trial/:trialNumber" element={<HapticsRealismStudyPage />} />
        <Route exact path="/hapticsintensity/trial/:trialNumber" element={<HapticsIntensityStudyPage />} />
        <Route exact path="/responsetime/trial/:trialNumber" element={<ResponseTimeStudyPage />} />
      </Routes>
    </Router>
  );
}

export default App;