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

  createBucket = async (data:any) => {
    return axios
      .post(
        `${baseURL}/buckets`,
        {
          interval:data.interval,
          location: data.location,
          name: data.name,
          retention_days: data.retention_days,
          type: data.type,
          user_id: data.user_id,
        },
        { headers: { Authorization: this.bearer } },
      )
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //getBucket to fetch the bucket

  getBuckets = async () => {
    return axios
      .get(`${baseURL}/buckets`, { headers: { Authorization: this.bearer } })
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //archieveBucket to archeive id matching bucket

  archieveBucket = async (id: string,data:any) => {
    return axios
      .put(`${baseURL}/buckets/${id}`,
      {
        is_archived: true,
        user_id: "rajan.s@cleverinsight.co"
      } ,{ headers: { Authorization: this.bearer } })
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //updateBucket to delete id matching bucket

  updateBucket = async (id: string,data:any) => {
    return axios
      .put(
        `${baseURL}/buckets/${id}`,
        {
          name: data.name,
          user_id: data.user_id,
        },
        { headers: { Authorization: this.bearer } },
      )
      .then((response) =>(response.data))
      .catch((err) => err);
  };

   //Metrics

  //createBucket method to create the buckets

  createMetrics = async (id: string,data:any) => {
    return axios
      .post(
        `${baseURL}/buckets/${id}/metrics`,
        {
          user_id: data.user_id,
          name: data.name,
        },
        { headers: { Authorization: this.bearer } },
      )
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //getMetrics method to create the buckets

  getMetrics = async (id: string) => {
    return axios
      .get(`${baseURL}/buckets/72ed4dc9-e4bc-4d87-9da3-15b059b15027/metrics`, {
        headers: { Authorization: this.bearer },
      })
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //archeiveMetric method to create the buckets

  archieveMetric = async (id: string, metricsId: string, data:any) => {
    return axios
      .put(`${baseURL}/buckets/${id}/metrics/${metricsId}`,
      {
        is_archived: data.is_archived,
        user_id: data.user_id
      } ,{ headers: { Authorization: this.bearer } })
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //updateMetrics to delete id matching bucket

  updateMetrics = async (id: string, metric_id: string , data:any) => {
    return axios
      .put(
        `${baseURL}/buckets/${id}/metrics/${metric_id}`,
        {
          user_id: data.user_id,
          tag: data.tag,
        },
        { headers: { Authorization: this.bearer } },
      )
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //Anomaly

  //getAnomaly method to fetch the anomaly details

    getAnomaly = async (id: string) => {
    return axios
      .get(`${baseURL}/buckets/${id}/anomaly`, {
        headers: { Authorization: this.bearer },
      })
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //getAnomaly method to fetch and filter the anomaly details

  getFilteredAnomaly = async (id: string) => {
    return axios
      .get(
        `${baseURL}/buckets/${id}/anomaly/filter`,
        {
          headers: { Authorization: this.bearer },
        },
      )
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //Alert

  //getBucketAlert method to fetch the alert details of bucket

  getBucketAlert = async (id: string) => {
    return axios
      .get(`${baseURL}/buckets/${id}/alert`, {
        headers: { Authorization: this.bearer },
      })
      .then((response) =>{
        return response.data
     })
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
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //createAlert method to create the buckets

  createAlert = async (id: string, metricsId: string,data:any) => {
    return axios
      .post(
        `${baseURL}/buckets/${id}/metrics/${metricsId}/alert`,
        {
          comparison: data.comparison,
          lower_range: data.lower_range,
          metric_id: data.metric_id,
          name: data.name,
          services: data.services,
          type: data.type,
          upper_range: data.upper_range,
        },
        { headers: { Authorization: this.bearer } },
      )
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //deleteAlert to delete id matching Alert

  deleteAlert = async (id: string, metric_id: string, alert_id: string) => {
    return axios
      .delete(
        `${baseURL}/buckets/${id}/metrics/${metric_id}/alert?${alert_id}`,
        { headers: { Authorization: this.bearer } },
      )
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //updateMetrics to delete id matching bucket

  updateAlert = async (id: string, metric_id: string, alert_id: string,data:any) => {
    return axios
      .put(
        `${baseURL}/buckets/${id}/metrics/${metric_id}/alert?${alert_id}`,
        {
          comparison: data.comparison,
          lower_range: data.lower_range,
          metric_id: data.metric_id,
          name: data.name,
          services: data.services,
          type: data.type,
          upper_range: data.upper_range,
        },
        { headers: { Authorization: this.bearer } },
      )
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //Event correlation

  //getEventCorrelation method to fetch correlated data

  getEventCorrelation = async (id: string) => {
    return axios
      .get(
        `${baseURL}/buckets/${id}/event?from=01/10/2023%2008:06:00&to=01/10/2023%2010:06:00&agg=mean`,
        {
          headers: { Authorization: this.bearer },
        },
      )
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //Telemetry

  //getBucketTelemetry method to fetch Telemetric data of buckets

  getBucketTelemetry = async (id: string) => {
    return axios
      .get(`${baseURL}/buckets/${id}/telemetry`, {
        headers: { Authorization: this.bearer },
      })
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //getMetricTelemetry method to fetch Telemetric data of metrics

  getMetricTelemetry = async (id: string, metric_id: string) => {
    return axios
      .get(
        `${baseURL}/buckets/${id}/metrics/${metric_id}/telemetry`,
        {
          headers: { Authorization: this.bearer },
        },
      )
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //Single Metric Data Load

  addData = async (id: string,metric_id:string,data:any) => {
    return axios
      .post(
        `${baseURL}/buckets/${id}/metrics/${metric_id}`,
        {
          timestamp: data.timestamp,
          value: data.value
        },
        { headers: { Authorization: this.bearer } },
      )
      .then((response) =>{
        return response.data
     })
      .catch((err) => err);
  };

  //batchload API

  batchload = async (id: string,data:any) => {
    return axios
      .post(
        `${baseURL}/buckets/${id}/batchload`,
        {
          
            batch:data.batch,
            tag:data.tag,
            timestamp: data.timestamp
          
        },
        { headers: { Authorization: this.bearer } },
      )
      .then((response) =>{
         return response.data
      })
      .catch((err) => err);
  };
}

export default waddle;
