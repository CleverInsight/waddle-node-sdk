# waddle-node-sdk

Access Waddle SDK to perform all `CREATE`, `READ`, `DELETE` and `UPDATE` bucket , metrics , alert .
To use this module first simply install the module using the below command.

## Install waddle package

`npm i waddle-node-sdk`

## How to use waddle-node-sdk

The current version of the module has only 21 functions to use

## Waddle Authentication and Authorization

`getToken` method is used to get the token of waddle.

## Buckets

### To create a bucket 

`createBucket` method is used to create a bucket.

To create Bucket need to pass,
        user_id  : string,
        interval : number,
        location : string,
        name  :string,
        retention_days : number,
        type : string
        
### To fetch all bucket details

`getBuckets` method is used to fetch all the buckets.

### To Archeive a bucket

`archieveBucket` method is used to archeive a particular bucket.

To archeive a bucket need to pass bucketId and data's like
        is_archived  : boolean,
        user_id : string

### To update a bucket

`updateBucket` method is used to update the bucket name of particular bucket.

To update a bucket name need to pass bucketId , metricId and data's like
        name  : string,
        user_id : string

## Metrics

### To Create a metric

`createMetric` method is used to create a metric.

To create Bucked need to pass bucketId and metricId and data's like ,
        user_id : string ,
        name : string

### To fetch the metric details

`getMetric` method is used to fetch the metric details.

To fetch the metric details need to pass bucketId and metricId.

### To delete a metric 

`deleteMetric` method is used to delete the metric that is in a bucket.

To delete the metric  need to pass bucketId and metricId.


### To update a metric tag

`updateMetric` method is used to update the metric tag.

 note:can`t able to update metric name

To update metric name need to pass bucketId and metricId and data's like.
        user_id : string
        tag : string

## Anomaly

### To fetch the details of anomaly 

`getAnomaly` method is used to fetch the details of anomaly.

### To fetch and filter the details of anomaly

`getFilteredAnomaly` method is used to fetch and filter the deatils of anomaly.

## Alert 

## To create an Alert 

`createAlert` method is used to create an Alert.

To create alert need to pass bucketId and metricId and data's like,
        comparison : string
        lower_range : number
        metric_id : string
        name : string
        services : Array of strings
        type : string
        upper_range : number
        
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

To update a bucket name need to pass bucketId and data's like,
        comparison : string
        lower_range : number
        metric_id : string
        name : string
        services : Array of strings
        type : string
        upper_range : number

## Event correlation

### To Fetch correlated data

`getEventCorrelation` method to fetch correlated data .

## Telemetry

### To Fetch Telemetric data of buckets

`getBucketTelemetry` method is used to fetch telemetric data of buckets.

### To Fetch Telemetric data of metrics

`getMetricTelemetry` method is used to fetch telemetric data of metrics.

## Batchload API

### To create batch of metrices and add data to those metrics

`batchload` method is used to create a bulk amount of metrics and add data to those metrics

To create batchload we need to pass bucketId and data's like
        batch : array of strings and values 
        tag : string
        timestamp : datetime format ex:`timestamp": "2023-01-25T20:23:06+05:30`
        Example:
        {
          "batch": 
        {
          "metrics2": 518.67,
          "metrics2": 1.3,
          "metrics3": 47.47
        },
        "tag":"demo",
        "timestamp": "2021-01-13T20:23:06+05:30"
        }      

## To add data to the metrics

`addData` method is used to add data to the metrics
To add data we need to pass bucketId , metricId and data's like 
        timestamp : datetime ; format ex : `timestamp": "2023-01-25T20:23:06+05:30`
        value : number
