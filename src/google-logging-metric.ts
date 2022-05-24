// https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleLoggingMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of this metric, which is used in documentation. The maximum length of the
description is 8000 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#description GoogleLoggingMetric#description}
  */
  readonly description?: string;
  /**
  * An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which
is used to match log entries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#filter GoogleLoggingMetric#filter}
  */
  readonly filter: string;
  /**
  * A map from a label key string to an extractor expression which is used to extract data from a log
entry field and assign as the label value. Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#label_extractors GoogleLoggingMetric#label_extractors}
  */
  readonly labelExtractors?: { [key: string]: string };
  /**
  * The client-assigned metric identifier. Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#name GoogleLoggingMetric#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#project GoogleLoggingMetric#project}
  */
  readonly project?: string;
  /**
  * A valueExtractor is required when using a distribution logs-based metric to extract the values to
record from a log entry. Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#value_extractor GoogleLoggingMetric#value_extractor}
  */
  readonly valueExtractor?: string;
  /**
  * bucket_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#bucket_options GoogleLoggingMetric#bucket_options}
  */
  readonly bucketOptions?: GoogleLoggingMetricBucketOptions;
  /**
  * metric_descriptor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#metric_descriptor GoogleLoggingMetric#metric_descriptor}
  */
  readonly metricDescriptor: GoogleLoggingMetricMetricDescriptor;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#timeouts GoogleLoggingMetric#timeouts}
  */
  readonly timeouts?: GoogleLoggingMetricTimeouts;
}
export interface GoogleLoggingMetricBucketOptionsExplicitBuckets {
  /**
  * The values must be monotonically increasing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#bounds GoogleLoggingMetric#bounds}
  */
  readonly bounds: number[];
}

export function googleLoggingMetricBucketOptionsExplicitBucketsToTerraform(struct?: GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference | GoogleLoggingMetricBucketOptionsExplicitBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bounds: cdktf.listMapper(cdktf.numberToTerraform)(struct!.bounds),
  }
}

export class GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleLoggingMetricBucketOptionsExplicitBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bounds !== undefined) {
      hasAnyValues = true;
      internalValueResult.bounds = this._bounds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleLoggingMetricBucketOptionsExplicitBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bounds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bounds = value.bounds;
    }
  }

  // bounds - computed: false, optional: false, required: true
  private _bounds?: number[]; 
  public get bounds() {
    return this.getNumberListAttribute('bounds');
  }
  public set bounds(value: number[]) {
    this._bounds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boundsInput() {
    return this._bounds;
  }
}
export interface GoogleLoggingMetricBucketOptionsExponentialBuckets {
  /**
  * Must be greater than 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#growth_factor GoogleLoggingMetric#growth_factor}
  */
  readonly growthFactor?: number;
  /**
  * Must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#num_finite_buckets GoogleLoggingMetric#num_finite_buckets}
  */
  readonly numFiniteBuckets?: number;
  /**
  * Must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#scale GoogleLoggingMetric#scale}
  */
  readonly scale?: number;
}

export function googleLoggingMetricBucketOptionsExponentialBucketsToTerraform(struct?: GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference | GoogleLoggingMetricBucketOptionsExponentialBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    growth_factor: cdktf.numberToTerraform(struct!.growthFactor),
    num_finite_buckets: cdktf.numberToTerraform(struct!.numFiniteBuckets),
    scale: cdktf.numberToTerraform(struct!.scale),
  }
}

export class GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleLoggingMetricBucketOptionsExponentialBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._growthFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.growthFactor = this._growthFactor;
    }
    if (this._numFiniteBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numFiniteBuckets = this._numFiniteBuckets;
    }
    if (this._scale !== undefined) {
      hasAnyValues = true;
      internalValueResult.scale = this._scale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleLoggingMetricBucketOptionsExponentialBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._growthFactor = undefined;
      this._numFiniteBuckets = undefined;
      this._scale = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._growthFactor = value.growthFactor;
      this._numFiniteBuckets = value.numFiniteBuckets;
      this._scale = value.scale;
    }
  }

  // growth_factor - computed: false, optional: true, required: false
  private _growthFactor?: number; 
  public get growthFactor() {
    return this.getNumberAttribute('growth_factor');
  }
  public set growthFactor(value: number) {
    this._growthFactor = value;
  }
  public resetGrowthFactor() {
    this._growthFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get growthFactorInput() {
    return this._growthFactor;
  }

  // num_finite_buckets - computed: false, optional: true, required: false
  private _numFiniteBuckets?: number; 
  public get numFiniteBuckets() {
    return this.getNumberAttribute('num_finite_buckets');
  }
  public set numFiniteBuckets(value: number) {
    this._numFiniteBuckets = value;
  }
  public resetNumFiniteBuckets() {
    this._numFiniteBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numFiniteBucketsInput() {
    return this._numFiniteBuckets;
  }

  // scale - computed: false, optional: true, required: false
  private _scale?: number; 
  public get scale() {
    return this.getNumberAttribute('scale');
  }
  public set scale(value: number) {
    this._scale = value;
  }
  public resetScale() {
    this._scale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale;
  }
}
export interface GoogleLoggingMetricBucketOptionsLinearBuckets {
  /**
  * Must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#num_finite_buckets GoogleLoggingMetric#num_finite_buckets}
  */
  readonly numFiniteBuckets?: number;
  /**
  * Lower bound of the first bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#offset GoogleLoggingMetric#offset}
  */
  readonly offset?: number;
  /**
  * Must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#width GoogleLoggingMetric#width}
  */
  readonly width?: number;
}

export function googleLoggingMetricBucketOptionsLinearBucketsToTerraform(struct?: GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference | GoogleLoggingMetricBucketOptionsLinearBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_finite_buckets: cdktf.numberToTerraform(struct!.numFiniteBuckets),
    offset: cdktf.numberToTerraform(struct!.offset),
    width: cdktf.numberToTerraform(struct!.width),
  }
}

export class GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleLoggingMetricBucketOptionsLinearBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numFiniteBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numFiniteBuckets = this._numFiniteBuckets;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleLoggingMetricBucketOptionsLinearBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numFiniteBuckets = undefined;
      this._offset = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numFiniteBuckets = value.numFiniteBuckets;
      this._offset = value.offset;
      this._width = value.width;
    }
  }

  // num_finite_buckets - computed: false, optional: true, required: false
  private _numFiniteBuckets?: number; 
  public get numFiniteBuckets() {
    return this.getNumberAttribute('num_finite_buckets');
  }
  public set numFiniteBuckets(value: number) {
    this._numFiniteBuckets = value;
  }
  public resetNumFiniteBuckets() {
    this._numFiniteBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numFiniteBucketsInput() {
    return this._numFiniteBuckets;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface GoogleLoggingMetricBucketOptions {
  /**
  * explicit_buckets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#explicit_buckets GoogleLoggingMetric#explicit_buckets}
  */
  readonly explicitBuckets?: GoogleLoggingMetricBucketOptionsExplicitBuckets;
  /**
  * exponential_buckets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#exponential_buckets GoogleLoggingMetric#exponential_buckets}
  */
  readonly exponentialBuckets?: GoogleLoggingMetricBucketOptionsExponentialBuckets;
  /**
  * linear_buckets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#linear_buckets GoogleLoggingMetric#linear_buckets}
  */
  readonly linearBuckets?: GoogleLoggingMetricBucketOptionsLinearBuckets;
}

export function googleLoggingMetricBucketOptionsToTerraform(struct?: GoogleLoggingMetricBucketOptionsOutputReference | GoogleLoggingMetricBucketOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_buckets: googleLoggingMetricBucketOptionsExplicitBucketsToTerraform(struct!.explicitBuckets),
    exponential_buckets: googleLoggingMetricBucketOptionsExponentialBucketsToTerraform(struct!.exponentialBuckets),
    linear_buckets: googleLoggingMetricBucketOptionsLinearBucketsToTerraform(struct!.linearBuckets),
  }
}

export class GoogleLoggingMetricBucketOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleLoggingMetricBucketOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitBuckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitBuckets = this._explicitBuckets?.internalValue;
    }
    if (this._exponentialBuckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exponentialBuckets = this._exponentialBuckets?.internalValue;
    }
    if (this._linearBuckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linearBuckets = this._linearBuckets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleLoggingMetricBucketOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._explicitBuckets.internalValue = undefined;
      this._exponentialBuckets.internalValue = undefined;
      this._linearBuckets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._explicitBuckets.internalValue = value.explicitBuckets;
      this._exponentialBuckets.internalValue = value.exponentialBuckets;
      this._linearBuckets.internalValue = value.linearBuckets;
    }
  }

  // explicit_buckets - computed: false, optional: true, required: false
  private _explicitBuckets = new GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference(this, "explicit_buckets");
  public get explicitBuckets() {
    return this._explicitBuckets;
  }
  public putExplicitBuckets(value: GoogleLoggingMetricBucketOptionsExplicitBuckets) {
    this._explicitBuckets.internalValue = value;
  }
  public resetExplicitBuckets() {
    this._explicitBuckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitBucketsInput() {
    return this._explicitBuckets.internalValue;
  }

  // exponential_buckets - computed: false, optional: true, required: false
  private _exponentialBuckets = new GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference(this, "exponential_buckets");
  public get exponentialBuckets() {
    return this._exponentialBuckets;
  }
  public putExponentialBuckets(value: GoogleLoggingMetricBucketOptionsExponentialBuckets) {
    this._exponentialBuckets.internalValue = value;
  }
  public resetExponentialBuckets() {
    this._exponentialBuckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentialBucketsInput() {
    return this._exponentialBuckets.internalValue;
  }

  // linear_buckets - computed: false, optional: true, required: false
  private _linearBuckets = new GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference(this, "linear_buckets");
  public get linearBuckets() {
    return this._linearBuckets;
  }
  public putLinearBuckets(value: GoogleLoggingMetricBucketOptionsLinearBuckets) {
    this._linearBuckets.internalValue = value;
  }
  public resetLinearBuckets() {
    this._linearBuckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linearBucketsInput() {
    return this._linearBuckets.internalValue;
  }
}
export interface GoogleLoggingMetricMetricDescriptorLabels {
  /**
  * A human-readable description for the label.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#description GoogleLoggingMetric#description}
  */
  readonly description?: string;
  /**
  * The label key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#key GoogleLoggingMetric#key}
  */
  readonly key: string;
  /**
  * The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#value_type GoogleLoggingMetric#value_type}
  */
  readonly valueType?: string;
}

export function googleLoggingMetricMetricDescriptorLabelsToTerraform(struct?: GoogleLoggingMetricMetricDescriptorLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    key: cdktf.stringToTerraform(struct!.key),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}

export interface GoogleLoggingMetricMetricDescriptor {
  /**
  * A concise name for the metric, which can be displayed in user interfaces. Use sentence case 
without an ending period, for example "Request count". This field is optional but it is 
recommended to be set for any metrics associated with user-visible concepts, such as Quota.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#display_name GoogleLoggingMetric#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether the metric records instantaneous values, changes to a value, etc.
Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to DELTA. Possible values: ["DELTA", "GAUGE", "CUMULATIVE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#metric_kind GoogleLoggingMetric#metric_kind}
  */
  readonly metricKind: string;
  /**
  * The unit in which the metric value is reported. It is only applicable if the valueType is
'INT64', 'DOUBLE', or 'DISTRIBUTION'. The supported units are a subset of
[The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#unit GoogleLoggingMetric#unit}
  */
  readonly unit?: string;
  /**
  * Whether the measurement is an integer, a floating-point number, etc.
Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to INT64. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION", "MONEY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#value_type GoogleLoggingMetric#value_type}
  */
  readonly valueType: string;
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#labels GoogleLoggingMetric#labels}
  */
  readonly labels?: GoogleLoggingMetricMetricDescriptorLabels[] | cdktf.IResolvable;
}

export function googleLoggingMetricMetricDescriptorToTerraform(struct?: GoogleLoggingMetricMetricDescriptorOutputReference | GoogleLoggingMetricMetricDescriptor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    metric_kind: cdktf.stringToTerraform(struct!.metricKind),
    unit: cdktf.stringToTerraform(struct!.unit),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    labels: cdktf.listMapper(googleLoggingMetricMetricDescriptorLabelsToTerraform)(struct!.labels),
  }
}

export class GoogleLoggingMetricMetricDescriptorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleLoggingMetricMetricDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._metricKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricKind = this._metricKind;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleLoggingMetricMetricDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._metricKind = undefined;
      this._unit = undefined;
      this._valueType = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._metricKind = value.metricKind;
      this._unit = value.unit;
      this._valueType = value.valueType;
      this._labels = value.labels;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // metric_kind - computed: false, optional: false, required: true
  private _metricKind?: string; 
  public get metricKind() {
    return this.getStringAttribute('metric_kind');
  }
  public set metricKind(value: string) {
    this._metricKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricKindInput() {
    return this._metricKind;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: GoogleLoggingMetricMetricDescriptorLabels[] | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('labels')));
  }
  public set labels(value: GoogleLoggingMetricMetricDescriptorLabels[] | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}
export interface GoogleLoggingMetricTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#create GoogleLoggingMetric#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#delete GoogleLoggingMetric#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric#update GoogleLoggingMetric#update}
  */
  readonly update?: string;
}

export function googleLoggingMetricTimeoutsToTerraform(struct?: GoogleLoggingMetricTimeoutsOutputReference | GoogleLoggingMetricTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class GoogleLoggingMetricTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleLoggingMetricTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleLoggingMetricTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric google_logging_metric}
*/
export class GoogleLoggingMetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_logging_metric";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_logging_metric google_logging_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleLoggingMetricConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleLoggingMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_metric',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.22.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._filter = config.filter;
    this._labelExtractors = config.labelExtractors;
    this._name = config.name;
    this._project = config.project;
    this._valueExtractor = config.valueExtractor;
    this._bucketOptions.internalValue = config.bucketOptions;
    this._metricDescriptor.internalValue = config.metricDescriptor;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label_extractors - computed: false, optional: true, required: false
  private _labelExtractors?: { [key: string]: string }; 
  public get labelExtractors() {
    return this.getStringMapAttribute('label_extractors');
  }
  public set labelExtractors(value: { [key: string]: string }) {
    this._labelExtractors = value;
  }
  public resetLabelExtractors() {
    this._labelExtractors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelExtractorsInput() {
    return this._labelExtractors;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // value_extractor - computed: false, optional: true, required: false
  private _valueExtractor?: string; 
  public get valueExtractor() {
    return this.getStringAttribute('value_extractor');
  }
  public set valueExtractor(value: string) {
    this._valueExtractor = value;
  }
  public resetValueExtractor() {
    this._valueExtractor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueExtractorInput() {
    return this._valueExtractor;
  }

  // bucket_options - computed: false, optional: true, required: false
  private _bucketOptions = new GoogleLoggingMetricBucketOptionsOutputReference(this, "bucket_options");
  public get bucketOptions() {
    return this._bucketOptions;
  }
  public putBucketOptions(value: GoogleLoggingMetricBucketOptions) {
    this._bucketOptions.internalValue = value;
  }
  public resetBucketOptions() {
    this._bucketOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOptionsInput() {
    return this._bucketOptions.internalValue;
  }

  // metric_descriptor - computed: false, optional: false, required: true
  private _metricDescriptor = new GoogleLoggingMetricMetricDescriptorOutputReference(this, "metric_descriptor");
  public get metricDescriptor() {
    return this._metricDescriptor;
  }
  public putMetricDescriptor(value: GoogleLoggingMetricMetricDescriptor) {
    this._metricDescriptor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDescriptorInput() {
    return this._metricDescriptor.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleLoggingMetricTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleLoggingMetricTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      filter: cdktf.stringToTerraform(this._filter),
      label_extractors: cdktf.hashMapper(cdktf.stringToTerraform)(this._labelExtractors),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      value_extractor: cdktf.stringToTerraform(this._valueExtractor),
      bucket_options: googleLoggingMetricBucketOptionsToTerraform(this._bucketOptions.internalValue),
      metric_descriptor: googleLoggingMetricMetricDescriptorToTerraform(this._metricDescriptor.internalValue),
      timeouts: googleLoggingMetricTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
