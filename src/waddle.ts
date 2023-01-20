import axios from 'axios';

const baseURL = 'https://api.waddle.cloud/beta';

class waddle {
  bearer: string;
  constructor(bearer: string) {
    this.bearer = bearer;
  }

  public static async build(env: any): Promise<waddle> {
    const bearer = await this.getToken(env);
    return new waddle(bearer);
  }

  //getToken method to fetch the token

  private static async getToken(env: any) {
    return axios
      .post(`${env.baseURL}/auth/login`, env)
      .then((response) => response.data.accessToken)
      .catch((err) => err.message);
  }

  //Buckets

  //createBucket method to create the buckets

  createBucket = async () => {
    return axios
      .post(
        `${baseURL}/buckets`,
        {
          interval: 12,
          location: 'Asia/Calcutta',
          name: 'Vehicles',
          retention_days: 30,
          type: 'time_series',
          user_id: 'rajan.s@cleverinsight.co',
        },
        { headers: { Authorization: this.bearer } },
      )
      .then((response) => (response.data))
      .catch((err) => err);
  };

  //getBucket to fetch the bucket

  getBuckets = async () => {
    return axios
      .get(`${baseURL}/buckets`, { headers: { Authorization: this.bearer } })
      .then((response) => response.data)
      .catch((err) => err);
  };

  //deleteBucket to delete id matching bucket

  deleteBucket = async (id: string) => {
    return axios
      .delete(`${baseURL}/buckets/653649db-df2f-46ec-8c58-2cccb2b451c9`, { headers: { Authorization: this.bearer } })
      .then((response) => response)
      .catch((err) => err);
  };

  //updateBucket to delete id matching bucket

  updateBucket = async (id: string) => {
    return axios
      .put(
        `${baseURL}/buckets/42fdfa41-a18b-4060-af36-83cd6de8e283`,
        {
          name: 'VehicleTest',
          user_id: 'rajan.s@cleverinsight.co',
        },
        { headers: { Authorization: this.bearer } },
      )
      .then((response) =>(response.data))
      .catch((err) => err);
  };

   //Metrics

  //createBucket method to create the buckets

  createMetrics = async (id: string) => {
    return axios
      .post(
        `${baseURL}/buckets/42fdfa41-a18b-4060-af36-83cd6de8e283/metrics`,
        {
          user_id: 'rajan.s@cleverinsight.co',
          name: 'test',
        },
        { headers: { Authorization: this.bearer } },
      )
      .then((response) => response.data)
      .catch((err) => err);
  };

  //getMetrics method to create the buckets

  getMetrics = async (id: string) => {
    return axios
      .get(`${baseURL}/buckets/72ed4dc9-e4bc-4d87-9da3-15b059b15027/metrics`, {
        headers: { Authorization: this.bearer },
      })
      .then((response) => (response.data))
      .catch((err) => err);
  };

  //deleteMetrics method to create the buckets

  deleteMetrics = async (id: string, metricsId: string) => {
    return axios
      .delete(`${baseURL}/buckets/42fdfa41-a18b-4060-af36-83cd6de8e283/metrics/a35bab6c-2399-49f1-98f0-d4cd1eee4a91ss`, {
        headers: { Authorization: this.bearer },
      })
      .then((response) => response.data)
      .catch((err) => err);
  };

  //updateMetrics to delete id matching bucket

  updateMetrics = async (id: string, metric_id: string) => {
    return axios
      .put(
        `${baseURL}/buckets/42fdfa41-a18b-4060-af36-83cd6de8e283/metrics/a35bab6c-2399-49f1-98f0-d4cd1eee4a91ss`,
        {
          user_id: 'rajan.s@cleverinsight.co',
          tag: 'zone',
        },
        { headers: { Authorization: this.bearer } },
      )
      .then((response) => (response.data))
      .catch((err) => err);
  };

  //Anomaly

  //getAnomaly method to fetch the anomaly details

  getAnomaly = async (id: string) => {
    return axios
      .get(`${baseURL}/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/anomaly`, {
        headers: { Authorization: this.bearer },
      })
      .then((response) => response.data)
      .catch((err) => err);
  };

  //getAnomaly method to fetch and filter the anomaly details

  getFilteredAnomaly = async (id: string) => {
    return axios
      .get(
        `${baseURL}/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/anomaly/filter?from=01/11/2023%2008:27:00&to=01/11/2023%2010:27:00&agg=mean`,
        {
          headers: { Authorization: this.bearer },
        },
      )
      .then((response) => response.data)
      .catch((err) => err);
  };

  //Alert

  //getBucketAlert method to fetch the alert details of bucket

  getBucketAlert = async (id: string) => {
    return axios
      .get(`${baseURL}/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/alert`, {
        headers: { Authorization: this.bearer },
      })
      .then((response) => response.data)
      .catch((err) => err);
  };

  //getMetricAlert method to fetch the alert details of bucket

  getMetricAlert = async (id: string, metricsId: string) => {
    return axios
      .get(
        `${baseURL}/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/metrics/49499dc5-af72-43ca-804a-bec13c64a077/alert`,
        {
          headers: { Authorization: this.bearer },
        },
      )
      .then((response) => response.data)
      .catch((err) => err);
  };

  //createAlert method to create the buckets

  createAlert = async (id: string, metricsId: string) => {
    return axios
      .post(
        `${baseURL}/buckets/72ed4dc9-e4bc-4d87-9da3-15b059b15027/metrics/3206c6d0-da4d-4674-8dcf-b055d5cba960//alert`,
        {
          comparison: '>',
          lower_range: 78,
          metric_id: '3206c6d0-da4d-4674-8dcf-b055d5cba960',
          name: 'failure1',
          services: ['whatsapp'],
          type: 'Info',
          upper_range: 100,
        },
        { headers: { Authorization: this.bearer } },
      )
      .then((response) => response.data)
      .catch((err) => err);
  };

  //deleteAlert to delete id matching Alert

  deleteAlert = async (id: string, metric_id: string, alert_id: string) => {
    return axios
      .delete(
        `${baseURL}/buckets/72ed4dc9-e4bc-4d87-9da3-15b059b15027/metrics/361c775b-0049-447b-8c84-fc600188b8bc/alert?id=68f54e29-74d4-4c2b-ad49-2e434d84cf0c`,
        { headers: { Authorization: this.bearer } },
      )
      .then((response) => response)
      .catch((err) => err);
  };

  //updateMetrics to delete id matching bucket

  updateAlert = async (id: string, metric_id: string, alert_id: string) => {
    return axios
      .put(
        `${baseURL}/buckets/72ed4dc9-e4bc-4d87-9da3-15b059b15027/metrics/361c775b-0049-447b-8c84-fc600188b8bc/alert?id=a8149911-8051-4bfa-8392-76c85c9e262b`,
        {
          comparison: '>',
          lower_range: 97.319712965,
          metric_id: '361c775b-0049-447b-8c84-fc600188b8bc',
          name: 'cpu failure',
          services: ['whatsapp'],
          type: 'Info',
          upper_range: 99.3561005523,
        },
        { headers: { Authorization: this.bearer } },
      )
      .then((response) => (response.data))
      .catch((err) => err);
  };

  //Event correlation

  //getEventCorrelation method to fetch correlated data

  getEventCorrelation = async (id: string) => {
    return axios
      .get(
        `${baseURL}/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/event?from=01/10/2023%2008:06:00&to=01/10/2023%2010:06:00&agg=mean`,
        {
          headers: { Authorization: this.bearer },
        },
      )
      .then((response) => response.data)
      .catch((err) => err);
  };

  //Telemetry

  //getBucketTelemetry method to fetch Telemetric data of buckets

  getBucketTelemetry = async (id: string) => {
    return axios
      .get(`${baseURL}/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/telemetry`, {
        headers: { Authorization: this.bearer },
      })
      .then((response) => response.data)
      .catch((err) => err);
  };

  //getMetricTelemetry method to fetch Telemetric data of metrics

  getMetricTelemetry = async (id: string, metric_id: string) => {
    return axios
      .get(
        `${baseURL}/buckets/76d224a3-91ea-469d-9dbc-e0fe2cc7f109/metrics/fa27bfc2-f348-47fe-a448-e258051a4c20/telemetry`,
        {
          headers: { Authorization: this.bearer },
        },
      )
      .then((response) => response.data)
      .catch((err) => err);
  };

  //Adding data to the metrics

  addData = async (id: string,metric_id:string) => {
    return axios
      .post(
        `${baseURL}/buckets/2fdfa41-a18b-4060-af36-83cd6de8e283/metrics/71ad0fea-27d2-4150-a552-29dc5cf39c2c`,
        {
          timestamp: "2023-01-19T12:01:43+05:30",
          value: 41.07893079486007
        },
        { headers: { Authorization: this.bearer } },
      )
      .then((response) => response.data)
      .catch((err) => err);
  };
}

export default waddle;
