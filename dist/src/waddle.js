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
const axios_1 = __importDefault(require("axios"));
const baseURL = 'https://api.waddle.cloud/beta';
class waddle {
    constructor(bearer) {
        //Buckets
        //createBucket method to create the buckets
        this.createBucket = () => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .post(`${baseURL}/buckets`, {
                interval: 12,
                location: 'Asia/Calcutta',
<<<<<<< HEAD
                name: 'Manufact',
=======
                name: 'Vehicles',
>>>>>>> 250fe02c0730a00412208b297f5087af95177fce
                retention_days: 30,
                type: 'time_series',
                user_id: 'rajan.s@cleverinsight.co',
            }, { headers: { Authorization: this.bearer } })
<<<<<<< HEAD
                .then((response) => (response.data))
=======
                .then((response) => console.log(response.data))
>>>>>>> 250fe02c0730a00412208b297f5087af95177fce
                .catch((err) => err);
        });
        //getBucket to fetch the bucket
        this.getBuckets = () => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .get(`${baseURL}/buckets`, { headers: { Authorization: this.bearer } })
                .then((response) => response.data)
                .catch((err) => err);
        });
        //deleteBucket to delete id matching bucket
        this.deleteBucket = (id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .delete(`${baseURL}/buckets/653649db-df2f-46ec-8c58-2cccb2b451c9`, { headers: { Authorization: this.bearer } })
                .then((response) => response)
                .catch((err) => err);
        });
        //updateBucket to delete id matching bucket
        this.updateBucket = (id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .put(`${baseURL}/buckets/42fdfa41-a18b-4060-af36-83cd6de8e283`, {
                name: 'VehicleTest',
                user_id: 'rajan.s@cleverinsight.co',
            }, { headers: { Authorization: this.bearer } })
<<<<<<< HEAD
                .then((response) => (response.data))
=======
                .then((response) => console.log(response.data))
>>>>>>> 250fe02c0730a00412208b297f5087af95177fce
                .catch((err) => err);
        });
        //Metrics
        //createBucket method to create the buckets
        this.createMetrics = (id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .post(`${baseURL}/buckets/42fdfa41-a18b-4060-af36-83cd6de8e283/metrics`, {
                user_id: 'rajan.s@cleverinsight.co',
                name: 'test',
            }, { headers: { Authorization: this.bearer } })
                .then((response) => response.data)
                .catch((err) => err);
        });
        //getMetrics method to create the buckets
        this.getMetrics = (id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .get(`${baseURL}/buckets/72ed4dc9-e4bc-4d87-9da3-15b059b15027/metrics`, {
                headers: { Authorization: this.bearer },
            })
<<<<<<< HEAD
                .then((response) => (response.data))
=======
                .then((response) => console.log(response.data))
>>>>>>> 250fe02c0730a00412208b297f5087af95177fce
                .catch((err) => err);
        });
        //deleteMetrics method to create the buckets
        this.deleteMetrics = (id, metricsId) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .delete(`${baseURL}/buckets/42fdfa41-a18b-4060-af36-83cd6de8e283/metrics/a35bab6c-2399-49f1-98f0-d4cd1eee4a91ss`, {
                headers: { Authorization: this.bearer },
            })
                .then((response) => response.data)
                .catch((err) => err);
        });
        //updateMetrics to delete id matching bucket
        this.updateMetrics = (id, metric_id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .put(`${baseURL}/buckets/42fdfa41-a18b-4060-af36-83cd6de8e283/metrics/a35bab6c-2399-49f1-98f0-d4cd1eee4a91ss`, {
                user_id: 'rajan.s@cleverinsight.co',
                tag: 'zone',
            }, { headers: { Authorization: this.bearer } })
                .then((response) => (response.data))
                .catch((err) => err);
        });
        //Anomaly
        //getAnomaly method to fetch the anomaly details
        this.getAnomaly = (id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .get(`${baseURL}/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/anomaly`, {
                headers: { Authorization: this.bearer },
            })
                .then((response) => response.data)
                .catch((err) => err);
        });
        //getAnomaly method to fetch and filter the anomaly details
        this.getFilteredAnomaly = (id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .get(`${baseURL}/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/anomaly/filter?from=01/11/2023%2008:27:00&to=01/11/2023%2010:27:00&agg=mean`, {
                headers: { Authorization: this.bearer },
            })
                .then((response) => response.data)
                .catch((err) => err);
        });
        //Alert
        //getBucketAlert method to fetch the alert details of bucket
        this.getBucketAlert = (id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .get(`${baseURL}/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/alert`, {
                headers: { Authorization: this.bearer },
            })
                .then((response) => response.data)
                .catch((err) => err);
        });
        //getMetricAlert method to fetch the alert details of bucket
        this.getMetricAlert = (id, metricsId) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .get(`${baseURL}/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/metrics/49499dc5-af72-43ca-804a-bec13c64a077/alert`, {
                headers: { Authorization: this.bearer },
            })
                .then((response) => response.data)
                .catch((err) => err);
        });
        //createAlert method to create the buckets
        this.createAlert = (id, metricsId) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .post(`${baseURL}/buckets/72ed4dc9-e4bc-4d87-9da3-15b059b15027/metrics/3206c6d0-da4d-4674-8dcf-b055d5cba960//alert`, {
                comparison: '>',
                lower_range: 78,
                metric_id: '3206c6d0-da4d-4674-8dcf-b055d5cba960',
                name: 'failure1',
                services: ['whatsapp'],
                type: 'Info',
                upper_range: 100,
            }, { headers: { Authorization: this.bearer } })
                .then((response) => response.data)
                .catch((err) => err);
        });
        //deleteAlert to delete id matching Alert
        this.deleteAlert = (id, metric_id, alert_id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .delete(`${baseURL}/buckets/72ed4dc9-e4bc-4d87-9da3-15b059b15027/metrics/361c775b-0049-447b-8c84-fc600188b8bc/alert?id=68f54e29-74d4-4c2b-ad49-2e434d84cf0c`, { headers: { Authorization: this.bearer } })
                .then((response) => response)
                .catch((err) => err);
        });
        //updateMetrics to delete id matching bucket
        this.updateAlert = (id, metric_id, alert_id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .put(`${baseURL}/buckets/72ed4dc9-e4bc-4d87-9da3-15b059b15027/metrics/361c775b-0049-447b-8c84-fc600188b8bc/alert?id=a8149911-8051-4bfa-8392-76c85c9e262b`, {
                comparison: '>',
                lower_range: 97.319712965,
                metric_id: '361c775b-0049-447b-8c84-fc600188b8bc',
                name: 'cpu failure',
                services: ['whatsapp'],
                type: 'Info',
                upper_range: 99.3561005523,
            }, { headers: { Authorization: this.bearer } })
                .then((response) => (response.data))
                .catch((err) => err);
        });
        //Event correlation
        //getEventCorrelation method to fetch correlated data
        this.getEventCorrelation = (id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .get(`${baseURL}/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/event?from=01/10/2023%2008:06:00&to=01/10/2023%2010:06:00&agg=mean`, {
                headers: { Authorization: this.bearer },
            })
                .then((response) => response.data)
                .catch((err) => err);
        });
        //Telemetry
        //getBucketTelemetry method to fetch Telemetric data of buckets
        this.getBucketTelemetry = (id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .get(`${baseURL}/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/telemetry`, {
                headers: { Authorization: this.bearer },
            })
                .then((response) => response.data)
                .catch((err) => err);
        });
        //getMetricTelemetry method to fetch Telemetric data of metrics
        this.getMetricTelemetry = (id, metric_id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .get(`${baseURL}/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/metrics/fa27bfc2-f348-47fe-a448-e258051a4c20/telemetry`, {
                headers: { Authorization: this.bearer },
            })
                .then((response) => response.data)
                .catch((err) => err);
        });
<<<<<<< HEAD
        //Single Metric Data Load
        this.addData = (id, metric_id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .post(`${baseURL}/buckets/2fdfa41-a18b-4060-af36-83cd6de8e283/metrics/71ad0fea-27d2-4150-a552-29dc5cf39c2c`, {
                timestamp: "2023-01-19T12:01:43+05:30",
=======
        //Adding data to the metrics
        this.addData = (id, metric_id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .post(`${baseURL}/buckets/2fdfa41-a18b-4060-af36-83cd6de8e283/metrics/71ad0fea-27d2-4150-a552-29dc5cf39c2c`, {
                timestamp: "2023-01-18T12:01:43+05:30",
>>>>>>> 250fe02c0730a00412208b297f5087af95177fce
                value: 41.07893079486007
            }, { headers: { Authorization: this.bearer } })
                .then((response) => response.data)
                .catch((err) => err);
        });
<<<<<<< HEAD
        //batchload API
        this.batchload = (id) => __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .post(`${baseURL}/buckets/42fdfa41-a18b-4060-af36-83cd6de8e283/batchload`, {
                batch: {
                    "sensor1": 518.67,
                    "sensor10": 1.3,
                    "sensor11": 47.47,
                    "sensor12": 521.66,
                    "sensor13": 2388.02,
                },
                tag: "test",
                timestamp: "2023-01-13T20:23:06+05:30"
            }, { headers: { Authorization: this.bearer } })
                .then((response) => console.log(response.data))
                .catch((err) => err);
        });
=======
>>>>>>> 250fe02c0730a00412208b297f5087af95177fce
        this.bearer = bearer;
    }
    static build(env) {
        return __awaiter(this, void 0, void 0, function* () {
            const bearer = yield this.getToken(env);
            return new waddle(bearer);
        });
    }
    //getToken method to fetch the token
    static getToken(env) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default
                .post(`${env.baseURL}/auth/login`, env)
                .then((response) => response.data.accessToken)
                .catch((err) => err.message);
        });
    }
}
exports.default = waddle;
//# sourceMappingURL=waddle.js.map