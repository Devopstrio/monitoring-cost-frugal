import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  BarChart3, 
  Activity, 
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Layers,
  ShieldCheck,
  Database,
  Briefcase
} from 'lucide-react';

const spendData = [
  { month: 'Jan', spend: 18500, savings: 2500 },
  { month: 'Feb', spend: 16200, savings: 4800 },
  { month: 'Mar', spend: 14800, savings: 6200 },
  { month: 'Apr', spend: 13500, savings: 7500 },
  { month: 'May', spend: 12100, savings: 8900 },
  { month: 'Jun', spend: 10500, savings: 10500 },
];

const storageTierBreakdown = [
  { name: 'Hot (Live)', value: 15, color: '#f59e0b' },
  { name: 'Warm (Queryable)', value: 35, color: '#fbbf24' },
  { name: 'Cold (Archive)', value: 50, color: '#fcd34d' },
];

const KPI_CARDS = [
  { title: 'Monthly Spend', value: '$10.5k', trend: '-12% (Frugal Mode)', color: 'amber', icon: TrendingDown },
  { title: 'Data Ingested', value: '1.2 TB', trend: 'Compressed (4:1)', color: 'amber', icon: Database },
  { title: 'Optimization Rate', value: '42%', trend: 'Manual Reduction', color: 'amber', icon: ShieldCheck },
  { title: 'Budget Status', value: 'Healthy', trend: 'Under $12k Cap', color: 'amber', icon: Briefcase },
];

const FrugalDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Observability FinOps Hub</h1>
          <p className="text-slate-400">Monitoring cost optimization, tiered storage management, and data frugality orchestration.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Analyze Cardinality
          </button>
          <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Optimize Retentions
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-amber-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-amber-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Spend Trend */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Monitoring Spend vs. Realized Savings</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={spendData}>
                <defs>
                  <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="spend" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorSpend)" name="Total Spend ($)" />
                <Area type="monotone" dataKey="savings" stroke="#34d399" strokeWidth={2} fill="transparent" name="Realized Savings ($)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Storage Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Tiered Storage Distribution</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={storageTierBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {storageTierBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {storageTierBreakdown.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Frugal Optimization Recommendations</h3>
          <button className="text-amber-400 hover:text-amber-300 text-sm font-medium">Auto-Remediate All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Recommendation</th>
                <th className="px-6 py-4 font-semibold">Impact</th>
                <th className="px-6 py-4 font-semibold">Potential Savings</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'Reduce Cardinality: cluster_id labels', impact: 'High', savings: '$1,200/mo', status: 'Pending' },
                { name: 'Downsample Metrics (1m -> 5m) > 30d', impact: 'Medium', savings: '$450/mo', status: 'Applied' },
                { name: 'Enable Loki Log Sampling (10%) for Dev', impact: 'High', savings: '$850/mo', status: 'Pending' },
                { name: 'Archive Cold Traces to S3 Glacier', impact: 'Medium', savings: '$320/mo', status: 'Applied' },
              ].map((rec, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-amber-400" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">{rec.name}</span>
                        <span className="text-xs text-slate-500 font-mono">ID: OPT-FRU-0{i+1}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      rec.impact === 'High' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {rec.impact}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300 font-medium">{rec.savings}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{rec.status}</td>
                  <td className="px-6 py-4">
                    <button className="text-xs font-bold text-amber-500 hover:text-amber-400">Apply</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FrugalDashboard;
