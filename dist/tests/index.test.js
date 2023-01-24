"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const waddle_1 = __importDefault(require("../src/waddle"));
const config_json_1 = __importDefault(require("../config.json"));
describe('Authentication & Authorization', () => {
    test('Test bearer tokens are generated', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        expect(wd.bearer).toContain('Bearer');
    }));
});
describe('Buckets Fetch', () => {
    test('Test list of buckets returned', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const buckets = yield wd.getBuckets();
        expect(buckets).toBeDefined();
    }));
});
describe('Buckets Create', () => {
    test('Test buckets is created successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const buckets = yield wd.createBucket();
        expect(buckets).toBeDefined();
        expect(buckets).toHaveProperty('name');
    }));
});
describe('Buckets Delete', () => {
    test('Test buckets is deleted successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const buckets = yield wd.deleteBucket('3c0effe4-f069-4168-8ab8-dc926ebcd14d');
    }));
});
describe('Buckets Update', () => {
    test('Test to update bucket name succesfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const buckets = yield wd.updateBucket('72ed4dc9-e4bc-4d87-9da3-15b059b15027');
    }));
});
describe('Metrics Create', () => {
    test('Test metrics is created successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const metrics = yield wd.createMetrics('72ed4dc9-e4bc-4d87-9da3-15b059b15027');
        expect(metrics).toBeDefined();
        expect(metrics).toHaveProperty('name');
    }));
});
describe('Metrics Fetch', () => {
    test('Test list of metrics returned', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const metrics = yield wd.createMetrics('72ed4dc9-e4bc-4d87-9da3-15b059b15027');
        expect(metrics).toBeDefined();
    }));
});
describe('Metrics Delete', () => {
    test('Test metrics is deleted successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const metrics = yield wd.deleteMetrics('8430bc62-555a-4b5b-b239-972a101cd6a1', '5ed3f60c-0804-4a5d-909d-4bd8d3665f8f');
    }));
});
describe('Metrics Update', () => {
    test('Test to update bucket name succesfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const metrics = yield wd.updateMetrics('72ed4dc9-e4bc-4d87-9da3-15b059b15027', '361c775b-0049-447b-8c84-fc600188b8bc');
    }));
});
describe('Anomaly-Fetch', () => {
    test('Test - list of anomalies returned', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const anomaly = yield wd.getAnomaly('76d224a3-91ea-469d-9dbc-e0fe2cc7f109');
    }), 60000);
});
describe('Anomaly-Fetch with Filter', () => {
    test('Test - list of filtered anomalies returned', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const anomaly = yield wd.getFilteredAnomaly('76d224a3-91ea-469d-9dbc-e0fe2cc7f109');
    }), 60000);
});
describe('Bucket Alert-Fetch', () => {
    test('Test - list of alerts returned', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const alert = yield wd.getBucketAlert('76d224a3-91ea-469d-9dbc-e0fe2cc7f109');
    }), 60000);
});
describe('Metric Alert-Fetch', () => {
    test('Test - list of alerts returned', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const alert = yield wd.getMetricAlert('76d224a3-91ea-469d-9dbc-e0fe2cc7f109', '49499dc5-af72-43ca-804a-bec13c64a077');
        expect(alert).toBeDefined();
    }), 60000);
});
describe('Alert Create', () => {
    test('Test alerts is created successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const alert = yield wd.createAlert('72ed4dc9-e4bc-4d87-9da3-15b059b15027', '3206c6d0-da4d-4674-8dcf-b055d5cba960');
    }), 60000);
});
describe('Alert Delete', () => {
    test('Test alerts is deleted successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const alert = yield wd.deleteAlert('72ed4dc9-e4bc-4d87-9da3-15b059b15027', '3206c6d0-da4d-4674-8dcf-b055d5cba960', '68f54e29-74d4-4c2b-ad49-2e434d84cf0c');
    }), 60000);
});
describe('Alert Update', () => {
    test('Test to update alert details succesfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const alert = yield wd.updateAlert('72ed4dc9-e4bc-4d87-9da3-15b059b15027', '361c775b-0049-447b-8c84-fc600188b8bc', 'a8149911-8051-4bfa-8392-76c85c9e262b');
    }));
});
describe('Event Correlation Fetch', () => {
    test('Test to returned the list of correlated data', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const event = yield wd.getEventCorrelation('76d224a3-91ea-469d-9dbc-e0fe2cc7f109');
        expect(event).toBeDefined();
    }), 60000);
});
describe('Telemetry of Metrics - Fetch', () => {
    test('Test to return the telemetry of metrics', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const telemetry = yield wd.getMetricTelemetry('76d224a3-91ea-469d-9dbc-e0fe2cc7f109', 'fa27bfc2-f348-47fe-a448-e258051a4c20');
        expect(telemetry).toBeDefined();
    }), 60000);
});
describe('Telemetry of Buckets - Fetch', () => {
    test('Test to return the telemetry of buckets', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const telemetry = yield wd.getBucketTelemetry('76d224a3-91ea-469d-9dbc-e0fe2cc7f109');
        expect(telemetry).toBeDefined();
    }), 60000);
});
describe('Adding Data', () => {
    test('Test to adding data to be successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const data = yield wd.addData('42fdfa41-a18b-4060-af36-83cd6de8e283', 'f21301f1-7859-4df7-ba31-962339dcd996');
    }), 60000);
});
describe('BatchLoad', () => {
    test('Test to batchload data to be successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const wd = yield waddle_1.default.build(config_json_1.default);
        const data = yield wd.batchload('42fdfa41-a18b-4060-af36-83cd6de8e283');
    }), 60000);
});
//mock tests
describe('Buckets Fetch', () => {
    const mockUrl = '/buckets';
    const mockBuckets = [{
            bucket_name: "",
        }];
    const getBuckets = jest.fn(url => mockBuckets);
    it('returns buckets from an api call', () => {
        expect(getBuckets(mockUrl)).toBe(mockBuckets);
    });
    it('called getBuckets with a mockUrl', () => {
        expect(getBuckets).toHaveBeenCalledWith(mockUrl);
    });
});
describe('Buckets Create', () => {
    const mockUrl = '/buckets';
    const mockBuckets = [{
            interval: 12,
            location: 'Asia/Calcutta',
            name: 'Vehicles',
            retention_days: 30,
            type: 'time_series',
            user_id: 'rajan.s@cleverinsight.co',
        }];
    const createBuckets = jest.fn(url => mockBuckets);
    it('returns buckets from an api call', () => {
        expect(createBuckets(mockUrl)).toBe(mockBuckets);
    });
    it('called createBuckets with a mockUrl', () => {
        expect(createBuckets).toHaveBeenCalledWith(mockUrl);
    });
});
describe('Buckets Update', () => {
    const mockUrl = '/buckets';
    const mockBuckets = [{
            name: 'VehicleTest',
            user_id: 'rajan.s@cleverinsight.co',
        }];
    const updateBuckets = jest.fn(url => mockBuckets);
    it('updates buckets from an api call', () => {
        expect(updateBuckets(mockUrl)).toBe(mockBuckets);
    });
    it('called updateBuckets with a mockUrl', () => {
        expect(updateBuckets).toHaveBeenCalledWith(mockUrl);
    });
});
describe('Metrics Create', () => {
    const mockUrl = '/buckets/42fdfa41-a18b-4060-af36-83cd6de8e283/metrics';
    const mockMetrics = [{
            user_id: 'rajan.s@cleverinsight.co',
            name: 'test',
        }];
    const createMetrics = jest.fn(url => mockMetrics);
    it('returns metrics from an api call', () => {
        expect(createMetrics(mockUrl)).toBe(mockMetrics);
    });
    it('called createMetrics with a mockUrl', () => {
        expect(createMetrics).toHaveBeenCalledWith(mockUrl);
    });
});
describe('Metrics Fetch', () => {
    const mockUrl = '/buckets/72ed4dc9-e4bc-4d87-9da3-15b059b15027/metrics';
    const mockMetrics = [{
            user_id: 'rajan.s@cleverinsight.co',
            name: 'test',
        }];
    const getMetrics = jest.fn(url => mockMetrics);
    it('returns metrics from an api call', () => {
        expect(getMetrics(mockUrl)).toBe(mockMetrics);
    });
    it('called getMetrics with a mockUrl', () => {
        expect(getMetrics).toHaveBeenCalledWith(mockUrl);
    });
});
describe('Metrics Update', () => {
    const mockUrl = '/buckets/42fdfa41-a18b-4060-af36-83cd6de8e283/metrics/a35bab6c-2399-49f1-98f0-d4cd1eee4a91ss';
    const mockMetrics = [{
            user_id: 'rajan.s@cleverinsight.co',
            tag: 'zone',
        }];
    const updateMetrics = jest.fn(url => mockMetrics);
    it('updates metrics from an api call', () => {
        expect(updateMetrics(mockUrl)).toBe(mockMetrics);
    });
    it('called updateMetrics with a mockUrl', () => {
        expect(updateMetrics).toHaveBeenCalledWith(mockUrl);
    });
});
describe('Bucket Alert-Fetch', () => {
    const mockUrl = '/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/alert';
    const mockAlerts = [{
            bucket_name: "",
            metric: ""
        }];
    const getBucketAlert = jest.fn(url => mockAlerts);
    it('returns alerts from an api call', () => {
        expect(getBucketAlert(mockUrl)).toBe(mockAlerts);
    });
    it('called getBucketAlert with a mockUrl', () => {
        expect(getBucketAlert).toHaveBeenCalledWith(mockUrl);
    });
});
describe('Metric Alert-Fetch', () => {
    const mockUrl = '/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/metrics/49499dc5-af72-43ca-804a-bec13c64a077/alert';
    const mockAlerts = [{
            bucket_name: "",
            metric: ""
        }];
    const getMetricAlert = jest.fn(url => mockAlerts);
    it('returns alerts from an api call', () => {
        expect(getMetricAlert(mockUrl)).toBe(mockAlerts);
    });
    it('called getMetricAlerts with a mockUrl', () => {
        expect(getMetricAlert).toHaveBeenCalledWith(mockUrl);
    });
});
describe('Alert Create', () => {
    const mockUrl = '/buckets/72ed4dc9-e4bc-4d87-9da3-15b059b15027/metrics/3206c6d0-da4d-4674-8dcf-b055d5cba960//alert';
    const mockAlert = [{
            comparison: '>',
            lower_range: 78,
            metric_id: '3206c6d0-da4d-4674-8dcf-b055d5cba960',
            name: 'failure1',
            services: ['whatsapp'],
            type: 'Info',
            upper_range: 100,
        }];
    const createAlert = jest.fn(url => mockAlert);
    it('creates alerts from an api call', () => {
        expect(createAlert(mockUrl)).toBe(mockAlert);
    });
    it('called createAlert with a mockUrl', () => {
        expect(createAlert).toHaveBeenCalledWith(mockUrl);
    });
});
describe('Alert Update', () => {
    const mockUrl = '/buckets/72ed4dc9-e4bc-4d87-9da3-15b059b15027/metrics/3206c6d0-da4d-4674-8dcf-b055d5cba960//alert';
    const mockAlert = [{
            comparison: '>',
            lower_range: 78,
            metric_id: '3206c6d0-da4d-4674-8dcf-b055d5cba960',
            name: 'failure1',
            services: ['whatsapp'],
            type: 'Info',
            upper_range: 100,
        }];
    const updateAlert = jest.fn(url => mockAlert);
    it('returns alerts from an api call', () => {
        expect(updateAlert(mockUrl)).toBe(mockAlert);
    });
    it('called updateAlerts with a mockUrl', () => {
        expect(updateAlert).toHaveBeenCalledWith(mockUrl);
    });
});
//# sourceMappingURL=index.test.js.map