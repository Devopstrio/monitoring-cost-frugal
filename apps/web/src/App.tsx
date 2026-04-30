import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import FrugalDashboard from './pages/FrugalDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Monitoring Cost Frugal Platform is currently orchestrating institutional observability spend and optimizing data retention lifecycles. Automated cardinality reduction and tiered storage synchronization will be fully operational once the FinOps budget engine is finalized.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<FrugalDashboard />} />
          <Route path="/cost" element={<Placeholder name="Monitoring Spend Breakdown" />} />
          <Route path="/metrics" element={<Placeholder name="Metrics Ingestion & Downsampling" />} />
          <Route path="/logs" element={<Placeholder name="Log Filtering & Sampling Analytics" />} />
          <Route path="/traces" element={<Placeholder name="Distributed Trace Optimization" />} />
          <Route path="/alerts" element={<Placeholder name="Cost-Aware Alert Governance" />} />
          <Route path="/optimization" element={<Placeholder name="Cardinality & Data Reduction Hub" />} />
          <Route path="/storage" element={<Placeholder name="Tiered Storage (Hot/Warm/Cold)" />} />
          <Route path="/policies" element={<Placeholder name="Budget-Aware Ingestion Policies" />} />
          <Route path="/slo" element={<Placeholder name="SLA/SLO-Based Optimization" />} />
          <Route path="/settings" element={<Placeholder name="Platform & Frugality Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
