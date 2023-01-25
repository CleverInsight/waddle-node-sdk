import waddle from '../src/waddle';
import env from '../config.json';


describe('Authentication & Authorization', () => {
  test('Test bearer tokens are generated', async () => {
    const wd = await waddle.build(env);
    expect(wd.bearer).toContain('Bearer');
  });
});

describe('Buckets Fetch', () => {
  test('Test list of buckets returned', async () => {
    const wd = await waddle.build(env);
    const buckets = await wd.getBuckets();
    expect(buckets).toBeDefined();
    expect(buckets[0]).toHaveProperty('bucket_name')
    expect(buckets[0]).toHaveProperty('bucket_location')
    expect(buckets[0]).toHaveProperty('bucket_interval')
  });
  
});

describe('Buckets Create', () => {
  test('Test buckets is created successfully', async () => {
    const wd = await waddle.build(env);
    const buckets = await wd.createBucket({
          interval: 12,
          location: 'Asia/Calcutta',
          name: 'Hospi',
          retention_days: 30,
          type: 'time_series',
          user_id: 'rajan.s@cleverinsight.co',
    });
    expect(buckets).toBeDefined();
  });
});

describe('Buckets Delete', () => {
  test('Test buckets is archeived successfully', async () => {
    const wd = await waddle.build(env);
    const buckets = await wd.archieveBucket('bfc8ba3f-3452-4528-8a07-2cf0ffa46181',{
      is_archived: true,
      user_id: "rajan.s@cleverinsight.co"
    });
  });
});

describe('Buckets Update', () => {
  test('Test to update bucket name succesfully', async () => {
    const wd = await waddle.build(env);
    const buckets = await wd.updateBucket('bfc8ba3f-3452-4528-8a07-2cf0ffa46181',{
          name:'HOSPITAL123456',
          user_id: 'rajan.s@cleverinsight.co',
    });
    expect(buckets).toBeDefined();
  });
});

describe('Metrics Create', () => {
  test('Test metrics is created successfully', async () => {
    const wd = await waddle.build(env);
    const metrics = await wd.createMetrics('42fdfa41-a18b-4060-af36-83cd6de8e283',{
      user_id: 'rajan.s@cleverinsight.co',
      name: 'vehicle'
    });
    expect(metrics).toBeDefined();
  });
});

describe('Metrics Fetch', () => {
  test('Test list of metrics returned', async () => {
    const wd = await waddle.build(env);
    const metrics = await wd.getMetrics('72ed4dc9-e4bc-4d87-9da3-15b059b15027');
    expect(metrics).toBeDefined();
  });
});

describe('Metrics Archeive', () => {
  test('Test metrics is archeived successfully', async () => {
    const wd = await waddle.build(env);
    const metrics = await wd.archieveMetric(
      '42fdfa41-a18b-4060-af36-83cd6de8e283',
      'f21301f1-7859-4df7-ba31-962339dcd996',
      {
        is_archived: true,
        user_id: "rajan.s@cleverinsight.co"
      }
    );
  });
});

describe('Metrics Update', () => {
  test('Test to update bucket name succesfully', async () => {
    const wd = await waddle.build(env);
    const metrics = await wd.updateMetrics('42fdfa41-a18b-4060-af36-83cd6de8e283','ba5778cb-60f2-4a02-9f13-e087324d77d9',{
      user_id: 'rajan.s@cleverinsight.co',
      tag: 'zone',
    });
  });
});

describe('Anomaly-Fetch', () => {
  test('Test - list of anomalies returned', async () => {
    const wd = await waddle.build(env);
    const anomaly = await wd.getAnomaly('76d224a3-91ea-469d-9dbc-e0fe2cc7f109');
  }, 60_000);
});

describe('Anomaly-Fetch with Filter', () => {
  test('Test - list of filtered anomalies returned', async () => {
    const wd = await waddle.build(env);
    const anomaly = await wd.getFilteredAnomaly('76d224a3-91ea-469d-9dbc-e0fe2cc7f109');
    
  }, 60_000);
});

describe('Bucket Alert-Fetch', () => {
  test('Test - list of alerts returned', async () => {
    const wd = await waddle.build(env);
    const alert = await wd.getBucketAlert('76d224a3-91ea-469d-9dbc-e0fe2cc7f109');
  }, 60_000);
});

describe('Metric Alert-Fetch', () => {
  test('Test - list of alerts returned', async () => {
    const wd = await waddle.build(env);
    const alert = await wd.getMetricAlert(
      '76d224a3-91ea-469d-9dbc-e0fe2cc7f109',
      '49499dc5-af72-43ca-804a-bec13c64a077',
    );
    expect(alert).toBeDefined();
  }, 60_000);
});

describe('Alert Create', () => {
  test('Test alerts is created successfully', async () => {
    const wd = await waddle.build(env);
    const alert = await wd.createAlert(
      '72ed4dc9-e4bc-4d87-9da3-15b059b15027',
      '3206c6d0-da4d-4674-8dcf-b055d5cba960',{
        comparison: '>',
          lower_range: 78,
          metric_id: '3206c6d0-da4d-4674-8dcf-b055d5cba960',
          name: 'failure1',
          services: ['whatsapp'],
          type: 'Info',
          upper_range: 100,
      }
    );
  }, 60_000);
});

describe('Alert Delete', () => {
  test('Test alerts is deleted successfully', async () => {
    const wd = await waddle.build(env);
    const alert = await wd.deleteAlert(
      '72ed4dc9-e4bc-4d87-9da3-15b059b15027',
      '3206c6d0-da4d-4674-8dcf-b055d5cba960',
      '68f54e29-74d4-4c2b-ad49-2e434d84cf0c',
    );
  }, 60_000);
});

describe('Alert Update', () => {
  test('Test to update alert details succesfully', async () => {
    const wd = await waddle.build(env);
    const alert = await wd.updateAlert('72ed4dc9-e4bc-4d87-9da3-15b059b15027','361c775b-0049-447b-8c84-fc600188b8bc','a8149911-8051-4bfa-8392-76c85c9e262b',{
      comparison: '>',
          lower_range: 97.319712965,
          metric_id: '361c775b-0049-447b-8c84-fc600188b8bc',
          name: 'cpu failure',
          services: ['whatsapp'],
          type: 'Info',
          upper_range: 99.3561005523,
    });
  });
});

describe('Event Correlation Fetch', () => {
  test('Test to returned the list of correlated data', async () => {
    const wd = await waddle.build(env);
    const event = await wd.getEventCorrelation('76d224a3-91ea-469d-9dbc-e0fe2cc7f109');
    expect(event).toBeDefined();
  }, 60_000);
});

describe('Telemetry of Metrics - Fetch', () => {
  test('Test to return the telemetry of metrics', async () => {
    const wd = await waddle.build(env);
    const telemetry = await wd.getMetricTelemetry(
      '76d224a3-91ea-469d-9dbc-e0fe2cc7f109',
      'fa27bfc2-f348-47fe-a448-e258051a4c20',
    );
    expect(telemetry).toBeDefined();
  }, 60_000);
});

describe('Telemetry of Buckets - Fetch', () => {
  test('Test to return the telemetry of buckets', async () => {
    const wd = await waddle.build(env);
    const telemetry = await wd.getBucketTelemetry('76d224a3-91ea-469d-9dbc-e0fe2cc7f109');
    expect(telemetry).toBeDefined();
  }, 60_000);
});

describe('Adding Data', () => {
  test('Test to adding data to be successfully', async () => {
    const wd = await waddle.build(env);
    const data = await wd.addData(
      '42fdfa41-a18b-4060-af36-83cd6de8e283',
      'ba5778cb-60f2-4a02-9f13-e087324d77d9',{
        timestamp: "2023-01-23T15:50:06+05:30",
        value: 27.4633989336599
      }
    );
  }, 60_000);
});

describe('BatchLoad', () => {
  test('Test to batchload data to be successfully', async () => {
    const wd = await waddle.build(env);
    const data = await wd.batchload(
      '42fdfa41-a18b-4060-af36-83cd6de8e283',{
        "batch": {
          "hpcdegradation.onecondition.sensor1": 518.67,
          "hpcdegradation.onecondition.sensor10": 1.3,
          "hpcdegradation.onecondition.sensor11": 47.47,
          "hpcdegradation.onecondition.sensor12": 521.66,
          "hpcdegradation.onecondition.sensor13": 2388.02,
          "hpcdegradation.onecondition.sensor14": 8138.62,
          "hpcdegradation.onecondition.sensor15": 8.4195,
          "hpcdegradation.onecondition.sensor16": 0.03,
          "hpcdegradation.onecondition.sensor17": 392,
          "hpcdegradation.onecondition.sensor18": 2388,
          "hpcdegradation.onecondition.sensor19": 100,
          "hpcdegradation.onecondition.sensor2": 641.82,
          "hpcdegradation.onecondition.sensor20": 39.06,
          "hpcdegradation.onecondition.sensor21": 23.419,
          "hpcdegradation.onecondition.sensor3": 1589.7,
          "hpcdegradation.onecondition.sensor4": 1400.6,
          "hpcdegradation.onecondition.sensor5": 14.62,
          "hpcdegradation.onecondition.sensor6": 21.61,
          "hpcdegradation.onecondition.sensor7": 554.36,
          "hpcdegradation.onecondition.sensor8": 2388.06,
          "hpcdegradation.onecondition.sensor9": 9046.19,
          "hpcdegradation.onecondition.setting1": -0.0007,
          "hpcdegradation.onecondition.setting2": -0.0004,
          "hpcdegradation.onecondition.setting3": 100,
          "hpcdegradation.onecondition.setting4": 100,
          "hpcdegradation.onecondition.setting5": 100,
          "hpcdegradation.onecondition.setting6": 100
        },
        "tag":"NASAtest",
        "timestamp": "2023-01-25T20:23:06+05:30"
      }
    );
    expect(data).toBe("Inserted to Queue")
  }, 60_000);
});

// //mock tests

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
     metric:""
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
     metric:""
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
