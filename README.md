# waddle-node-sdk

Access Waddle SDK to perform all `CREATE`, `READ`, `DELETE` and `UPDATE` bucket , metrics , alert.

## Installation and Setup Instructions

Clone down this repository. You will need `node` `npm` and `jest` installed globally on your machine.

## How to run

`npm run build`

To Run Development Server.

## How to run the test

`npm test`  

This runs a predefined command specified in the "test" property of a package`s "scripts" object.

## Waddle Login

### Waddle Authentication and Authorization

`getToken` method is used to get the token of waddle.

## Buckets

### To create a bucket 

`createBucket` method is used to create a bucket.

To create Bucked need to pass ,
        user_id
        interval
        location
        name
        retention_days
        type
        
### To fetch all bucket details

`getBuckets` method is used to fetch all the buckets.

### To delete a bucket

`deleteBucket method is used to delete a particular bucket.

To delete a bucket need to pass bucketId.

### To update a bucket

`updateBucket` method is used to update the bucket name of particular bucket.

To update a bucket name need to pass bucketId and also bucket_name and user_id also needed.

## Metrics

### To Create a metric

`createMetric` method is used to create a metric.

To create Bucked need to pass bucketId and metricId and also ,
        user_id
        name

### To fetch the metric details

`getMetric` method is used to fetch the metric details.

To fetch the metric details need to pass bucketId and metricId.

### To delete a metric 

`deleteMetric` method is used to delete the metric that is in a bucket.

To delete the metric  need to pass bucketId and metricId.


### To update a metric tag

`updateMetric` method is used to update the metric tag.

 note:can`t able to update metric name

To update metric name need to pass bucketId and metricId and also.
        user_id
        tag

## Anomaly

### To fetch the details of anomaly 

`getAnomaly` method is used to fetch the details of anomaly.

### To fetch and filter the details of anomaly

`getFilteredAnomaly` method is used to fetch and filter the deatils of anomaly.

## Alert 

## To create an Alert 

`createAlert` method is used to create an Alert.

To create alert need to pass bucketId and metricId also ,
        comparison
        lower_range
        metric_id
        name
        services
        type
        upper_range
        
### To fetch all Alert in Bucket level

`getBucketAlert` method is used to fetch all the buckets.

To fetch the alert of a bucket we need to pass bucketId.

### To fetch all Alert in Metrics level

`getMetricAlert` method is used to fetch all the buckets.

To fetch the alert of a bucket we need to pass bucketId and metricId.

### To delete an Alert

`deleteAlert` method is used to delete a particular Alert.

To delete a bucket need to pass bucketId and metricId.

### To update an Alert

`updateAlert` method is used to update the alert.

To update a bucket name need to pass bucketId and also,
        comparison
        lower_range
        metric_id
        name
        services
        type
        upper_range

## Event correlation

### To Fetch correlated data

`getEventCorrelation` method to fetch correlated data .

## Telemetry

### To Fetch Telemetric data of buckets

`getBucketTelemetry` method is used to fetch telemetric data of buckets.

### To Fetch Telemetric data of metrics

`getMetricTelemetry` method is used to fetch telemetric data of metrics.



