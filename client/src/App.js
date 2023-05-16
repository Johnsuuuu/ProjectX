import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AffectionComputingPage from './components/studyPages/AffectionComputingPage';
import AffectionComputingStudyPage from './components/studyPages/AffectionComputingStudyPage';
import HapticsConfidencePage from './components/studyPages/HapticsConfidencePage';
import HapticsIllusionPage from './components/studyPages/HapticsIllusionPage';
import HomePage from './components/studyPages/HomePage';
import ResponseTimePage from './components/studyPages/ResponseTimePage';
import HapticsConfidenceStudyPage from './components/studyPages/HapticsConfidenceStudyPage';
import HapticsIllusionStudyPage from './components/studyPages/HapticsIllusionStudyPage';
import ResponseTimeStudyPage from './components/studyPages/ResponseTimeStudyPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/affectioncomputing" element={<AffectionComputingPage />} />
        <Route exact path="/hapticsconfidence" element={<HapticsConfidencePage />} />
        <Route exact path="/hapticsillusion" element={<HapticsIllusionPage />} />
        <Route exact path="/responsetime" element={<ResponseTimePage />} />
        <Route exact path="/affectioncomputing/trial/:trialNumber" element={<AffectionComputingStudyPage />} />
        <Route exact path="/hapticsconfidence/trial/:trialNumber" element={<HapticsConfidenceStudyPage />} />
        <Route exact path="/hapticsillusion/trial/:trialNumber" element={<HapticsIllusionStudyPage />} />
        <Route exact path="/responsetime/trial/:trialNumber" element={<ResponseTimeStudyPage />} />
      </Routes>
    </Router>
  );
}

export default App;