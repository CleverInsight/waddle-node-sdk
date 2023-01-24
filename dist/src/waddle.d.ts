declare class waddle {
    bearer: string;
    constructor(bearer: string);
    static build(env: any): Promise<waddle>;
    private static getToken;
    createBucket: () => Promise<any>;
    getBuckets: () => Promise<any>;
    deleteBucket: (id: string) => Promise<any>;
    updateBucket: (id: string) => Promise<any>;
    createMetrics: (id: string) => Promise<any>;
    getMetrics: (id: string) => Promise<any>;
    deleteMetrics: (id: string, metricsId: string) => Promise<any>;
    updateMetrics: (id: string, metric_id: string) => Promise<any>;
    getAnomaly: (id: string) => Promise<any>;
    getFilteredAnomaly: (id: string) => Promise<any>;
    getBucketAlert: (id: string) => Promise<any>;
    getMetricAlert: (id: string, metricsId: string) => Promise<any>;
    createAlert: (id: string, metricsId: string) => Promise<any>;
    deleteAlert: (id: string, metric_id: string, alert_id: string) => Promise<any>;
    updateAlert: (id: string, metric_id: string, alert_id: string) => Promise<any>;
    getEventCorrelation: (id: string) => Promise<any>;
    getBucketTelemetry: (id: string) => Promise<any>;
    getMetricTelemetry: (id: string, metric_id: string) => Promise<any>;
    addData: (id: string, metric_id: string) => Promise<any>;
    batchload: (id: string) => Promise<any>;
}
export default waddle;
//# sourceMappingURL=waddle.d.ts.map