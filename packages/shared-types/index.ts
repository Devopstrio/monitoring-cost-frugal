export enum ObservabilityType {
  METRICS = "METRICS",
  LOGS = "LOGS",
  TRACES = "TRACES"
}

export enum StorageTier {
  HOT = "HOT",   // Fast, expensive, short retention
  WARM = "WARM", // Slower, cheaper, medium retention
  COLD = "COLD"  // Archive, cheapest, long retention
}

export interface MonitoringCost {
  type: ObservabilityType;
  ingestedGB: number;
  storedGB: number;
  estimatedCost: number;
  costPerDay: number;
}

export interface OptimizationRecommendation {
  id: string;
  type: "CARDINALITY" | "SAMPLING" | "RETENTION" | "TIDYING";
  description: string;
  potentialSavings: number;
  impactLevel: "HIGH" | "MEDIUM" | "LOW";
  status: "PENDING" | "APPLIED" | "IGNORED";
}

export interface FrugalKPIs {
  totalMonitoringSpend: number;
  savingsRealized: number;
  ingestionThroughput: number;
  avgQueryLatency: number;
  unnecessaryDataReductionRate: number; // %
}
