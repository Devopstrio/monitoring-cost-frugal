# Observability Economics Diagrams

## 11. Industrial Frugal Lifecycle (Detailed)
*The end-to-end orchestration of observability data from ingestion to archive.*

```mermaid
graph TD
    subgraph "Phase 1: Intelligent Ingestion"
        I1[Source Identification]
        I2[Metadata Enrichment]
        I3[Sampling Decision]
    end
    subgraph "Phase 2: Cardinality Control"
        C1[Label Scan]
        C2[Entropy Analysis]
        C3[Automated Redaction]
    end
    subgraph "Phase 3: Processing & Downsampling"
        P1[Rollup Aggregation]
        P2[Compression]
        P3[Encryption]
    end
    subgraph "Phase 4: Tiered Storage"
        S1[Hot Tier: SSD]
        S2[Warm Tier: Object Store]
        S3[Cold Tier: Archive]
    end
    subgraph "Phase 5: Governance & FinOps"
        G1[Budget Tracking]
        G2[Chargeback Report]
        G3[Retention Audit]
    end

    I1 --> I2 --> I3 --> C1 --> C2 --> C3 --> P1 --> P2 --> P3 --> S1 --> S2 --> S3 --> G1 --> G2 --> G3
```

## 15. Metrics Cardinality reduction flow
```mermaid
graph LR
    M[Metrics] --> C[Card]
    C --> R[Redu]
```

## 20. Log sampling and filtering logic
```mermaid
graph LR
    L[Logs] --> S[Samp]
    S --> F[Filt]
```

## 25. Trace sampling strategies flow
```mermaid
graph LR
    T[Traces] --> S[Samp]
    S --> S[Stra]
```
