// https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleMonitoringSloConfig extends cdktf.TerraformMetaArguments {
  /**
  * A calendar period, semantically "since the start of the current
<calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#calendar_period GoogleMonitoringSlo#calendar_period}
  */
  readonly calendarPeriod?: string;
  /**
  * Name used for UI elements listing this SLO.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#display_name GoogleMonitoringSlo#display_name}
  */
  readonly displayName?: string;
  /**
  * The fraction of service that must be good in order for this objective
to be met. 0 < goal <= 0.999
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#goal GoogleMonitoringSlo#goal}
  */
  readonly goal: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#project GoogleMonitoringSlo#project}
  */
  readonly project?: string;
  /**
  * A rolling time period, semantically "in the past X days".
Must be between 1 to 30 days, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#rolling_period_days GoogleMonitoringSlo#rolling_period_days}
  */
  readonly rollingPeriodDays?: number;
  /**
  * ID of the service to which this SLO belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#service GoogleMonitoringSlo#service}
  */
  readonly service: string;
  /**
  * The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#slo_id GoogleMonitoringSlo#slo_id}
  */
  readonly sloId?: string;
  /**
  * basic_sli block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#basic_sli GoogleMonitoringSlo#basic_sli}
  */
  readonly basicSli?: GoogleMonitoringSloBasicSli;
  /**
  * request_based_sli block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#request_based_sli GoogleMonitoringSlo#request_based_sli}
  */
  readonly requestBasedSli?: GoogleMonitoringSloRequestBasedSli;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#timeouts GoogleMonitoringSlo#timeouts}
  */
  readonly timeouts?: GoogleMonitoringSloTimeouts;
  /**
  * windows_based_sli block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#windows_based_sli GoogleMonitoringSlo#windows_based_sli}
  */
  readonly windowsBasedSli?: GoogleMonitoringSloWindowsBasedSli;
}
export interface GoogleMonitoringSloBasicSliAvailability {
  /**
  * Whether an availability SLI is enabled or not. Must be set to true. Defaults to 'true'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#enabled GoogleMonitoringSlo#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function googleMonitoringSloBasicSliAvailabilityToTerraform(struct?: GoogleMonitoringSloBasicSliAvailabilityOutputReference | GoogleMonitoringSloBasicSliAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class GoogleMonitoringSloBasicSliAvailabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloBasicSliAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloBasicSliAvailability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleMonitoringSloBasicSliLatency {
  /**
  * A duration string, e.g. 10s.
Good service is defined to be the count of requests made to
this service that return in no more than threshold.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#threshold GoogleMonitoringSlo#threshold}
  */
  readonly threshold: string;
}

export function googleMonitoringSloBasicSliLatencyToTerraform(struct?: GoogleMonitoringSloBasicSliLatencyOutputReference | GoogleMonitoringSloBasicSliLatency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}

export class GoogleMonitoringSloBasicSliLatencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloBasicSliLatency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloBasicSliLatency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface GoogleMonitoringSloBasicSli {
  /**
  * An optional set of locations to which this SLI is relevant.
Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#location GoogleMonitoringSlo#location}
  */
  readonly location?: string[];
  /**
  * An optional set of RPCs to which this SLI is relevant.
Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#method GoogleMonitoringSlo#method}
  */
  readonly method?: string[];
  /**
  * The set of API versions to which this SLI is relevant.
Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#version GoogleMonitoringSlo#version}
  */
  readonly version?: string[];
  /**
  * availability block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#availability GoogleMonitoringSlo#availability}
  */
  readonly availability?: GoogleMonitoringSloBasicSliAvailability;
  /**
  * latency block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#latency GoogleMonitoringSlo#latency}
  */
  readonly latency?: GoogleMonitoringSloBasicSliLatency;
}

export function googleMonitoringSloBasicSliToTerraform(struct?: GoogleMonitoringSloBasicSliOutputReference | GoogleMonitoringSloBasicSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.listMapper(cdktf.stringToTerraform)(struct!.location),
    method: cdktf.listMapper(cdktf.stringToTerraform)(struct!.method),
    version: cdktf.listMapper(cdktf.stringToTerraform)(struct!.version),
    availability: googleMonitoringSloBasicSliAvailabilityToTerraform(struct!.availability),
    latency: googleMonitoringSloBasicSliLatencyToTerraform(struct!.latency),
  }
}

export class GoogleMonitoringSloBasicSliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloBasicSli | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._availability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability?.internalValue;
    }
    if (this._latency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloBasicSli | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._method = undefined;
      this._version = undefined;
      this._availability.internalValue = undefined;
      this._latency.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._method = value.method;
      this._version = value.version;
      this._availability.internalValue = value.availability;
      this._latency.internalValue = value.latency;
    }
  }

  // location - computed: false, optional: true, required: false
  private _location?: string[]; 
  public get location() {
    return cdktf.Fn.tolist(this.getListAttribute('location'));
  }
  public set location(value: string[]) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string[]; 
  public get method() {
    return cdktf.Fn.tolist(this.getListAttribute('method'));
  }
  public set method(value: string[]) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string[]; 
  public get version() {
    return cdktf.Fn.tolist(this.getListAttribute('version'));
  }
  public set version(value: string[]) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // availability - computed: false, optional: true, required: false
  private _availability = new GoogleMonitoringSloBasicSliAvailabilityOutputReference(this, "availability");
  public get availability() {
    return this._availability;
  }
  public putAvailability(value: GoogleMonitoringSloBasicSliAvailability) {
    this._availability.internalValue = value;
  }
  public resetAvailability() {
    this._availability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability.internalValue;
  }

  // latency - computed: false, optional: true, required: false
  private _latency = new GoogleMonitoringSloBasicSliLatencyOutputReference(this, "latency");
  public get latency() {
    return this._latency;
  }
  public putLatency(value: GoogleMonitoringSloBasicSliLatency) {
    this._latency.internalValue = value;
  }
  public resetLatency() {
    this._latency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency.internalValue;
  }
}
export interface GoogleMonitoringSloRequestBasedSliDistributionCutRange {
  /**
  * max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#max GoogleMonitoringSlo#max}
  */
  readonly max?: number;
  /**
  * Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#min GoogleMonitoringSlo#min}
  */
  readonly min?: number;
}

export function googleMonitoringSloRequestBasedSliDistributionCutRangeToTerraform(struct?: GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference | GoogleMonitoringSloRequestBasedSliDistributionCutRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloRequestBasedSliDistributionCutRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloRequestBasedSliDistributionCutRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface GoogleMonitoringSloRequestBasedSliDistributionCut {
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#distribution_filter GoogleMonitoringSlo#distribution_filter}
  */
  readonly distributionFilter: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#range GoogleMonitoringSlo#range}
  */
  readonly range: GoogleMonitoringSloRequestBasedSliDistributionCutRange;
}

export function googleMonitoringSloRequestBasedSliDistributionCutToTerraform(struct?: GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference | GoogleMonitoringSloRequestBasedSliDistributionCut): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_filter: cdktf.stringToTerraform(struct!.distributionFilter),
    range: googleMonitoringSloRequestBasedSliDistributionCutRangeToTerraform(struct!.range),
  }
}

export class GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloRequestBasedSliDistributionCut | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributionFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionFilter = this._distributionFilter;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloRequestBasedSliDistributionCut | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distributionFilter = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributionFilter = value.distributionFilter;
      this._range.internalValue = value.range;
    }
  }

  // distribution_filter - computed: false, optional: false, required: true
  private _distributionFilter?: string; 
  public get distributionFilter() {
    return this.getStringAttribute('distribution_filter');
  }
  public set distributionFilter(value: string) {
    this._distributionFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionFilterInput() {
    return this._distributionFilter;
  }

  // range - computed: false, optional: false, required: true
  private _range = new GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: GoogleMonitoringSloRequestBasedSliDistributionCutRange) {
    this._range.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface GoogleMonitoringSloRequestBasedSliGoodTotalRatio {
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying bad service provided, either demanded service that
was not provided or demanded service that was of inadequate
quality.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#bad_service_filter GoogleMonitoringSlo#bad_service_filter}
  */
  readonly badServiceFilter?: string;
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying good service provided.
Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#good_service_filter GoogleMonitoringSlo#good_service_filter}
  */
  readonly goodServiceFilter?: string;
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying total demanded service.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#total_service_filter GoogleMonitoringSlo#total_service_filter}
  */
  readonly totalServiceFilter?: string;
}

export function googleMonitoringSloRequestBasedSliGoodTotalRatioToTerraform(struct?: GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference | GoogleMonitoringSloRequestBasedSliGoodTotalRatio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_service_filter: cdktf.stringToTerraform(struct!.badServiceFilter),
    good_service_filter: cdktf.stringToTerraform(struct!.goodServiceFilter),
    total_service_filter: cdktf.stringToTerraform(struct!.totalServiceFilter),
  }
}

export class GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloRequestBasedSliGoodTotalRatio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badServiceFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.badServiceFilter = this._badServiceFilter;
    }
    if (this._goodServiceFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodServiceFilter = this._goodServiceFilter;
    }
    if (this._totalServiceFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalServiceFilter = this._totalServiceFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloRequestBasedSliGoodTotalRatio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badServiceFilter = undefined;
      this._goodServiceFilter = undefined;
      this._totalServiceFilter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badServiceFilter = value.badServiceFilter;
      this._goodServiceFilter = value.goodServiceFilter;
      this._totalServiceFilter = value.totalServiceFilter;
    }
  }

  // bad_service_filter - computed: false, optional: true, required: false
  private _badServiceFilter?: string; 
  public get badServiceFilter() {
    return this.getStringAttribute('bad_service_filter');
  }
  public set badServiceFilter(value: string) {
    this._badServiceFilter = value;
  }
  public resetBadServiceFilter() {
    this._badServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badServiceFilterInput() {
    return this._badServiceFilter;
  }

  // good_service_filter - computed: false, optional: true, required: false
  private _goodServiceFilter?: string; 
  public get goodServiceFilter() {
    return this.getStringAttribute('good_service_filter');
  }
  public set goodServiceFilter(value: string) {
    this._goodServiceFilter = value;
  }
  public resetGoodServiceFilter() {
    this._goodServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodServiceFilterInput() {
    return this._goodServiceFilter;
  }

  // total_service_filter - computed: false, optional: true, required: false
  private _totalServiceFilter?: string; 
  public get totalServiceFilter() {
    return this.getStringAttribute('total_service_filter');
  }
  public set totalServiceFilter(value: string) {
    this._totalServiceFilter = value;
  }
  public resetTotalServiceFilter() {
    this._totalServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalServiceFilterInput() {
    return this._totalServiceFilter;
  }
}
export interface GoogleMonitoringSloRequestBasedSli {
  /**
  * distribution_cut block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#distribution_cut GoogleMonitoringSlo#distribution_cut}
  */
  readonly distributionCut?: GoogleMonitoringSloRequestBasedSliDistributionCut;
  /**
  * good_total_ratio block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#good_total_ratio GoogleMonitoringSlo#good_total_ratio}
  */
  readonly goodTotalRatio?: GoogleMonitoringSloRequestBasedSliGoodTotalRatio;
}

export function googleMonitoringSloRequestBasedSliToTerraform(struct?: GoogleMonitoringSloRequestBasedSliOutputReference | GoogleMonitoringSloRequestBasedSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_cut: googleMonitoringSloRequestBasedSliDistributionCutToTerraform(struct!.distributionCut),
    good_total_ratio: googleMonitoringSloRequestBasedSliGoodTotalRatioToTerraform(struct!.goodTotalRatio),
  }
}

export class GoogleMonitoringSloRequestBasedSliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloRequestBasedSli | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributionCut?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionCut = this._distributionCut?.internalValue;
    }
    if (this._goodTotalRatio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodTotalRatio = this._goodTotalRatio?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloRequestBasedSli | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distributionCut.internalValue = undefined;
      this._goodTotalRatio.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributionCut.internalValue = value.distributionCut;
      this._goodTotalRatio.internalValue = value.goodTotalRatio;
    }
  }

  // distribution_cut - computed: false, optional: true, required: false
  private _distributionCut = new GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference(this, "distribution_cut");
  public get distributionCut() {
    return this._distributionCut;
  }
  public putDistributionCut(value: GoogleMonitoringSloRequestBasedSliDistributionCut) {
    this._distributionCut.internalValue = value;
  }
  public resetDistributionCut() {
    this._distributionCut.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionCutInput() {
    return this._distributionCut.internalValue;
  }

  // good_total_ratio - computed: false, optional: true, required: false
  private _goodTotalRatio = new GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference(this, "good_total_ratio");
  public get goodTotalRatio() {
    return this._goodTotalRatio;
  }
  public putGoodTotalRatio(value: GoogleMonitoringSloRequestBasedSliGoodTotalRatio) {
    this._goodTotalRatio.internalValue = value;
  }
  public resetGoodTotalRatio() {
    this._goodTotalRatio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodTotalRatioInput() {
    return this._goodTotalRatio.internalValue;
  }
}
export interface GoogleMonitoringSloTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#create GoogleMonitoringSlo#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#delete GoogleMonitoringSlo#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#update GoogleMonitoringSlo#update}
  */
  readonly update?: string;
}

export function googleMonitoringSloTimeoutsToTerraform(struct?: GoogleMonitoringSloTimeoutsOutputReference | GoogleMonitoringSloTimeouts | cdktf.IResolvable): any {
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

export class GoogleMonitoringSloTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloTimeouts | undefined {
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

  public set internalValue(value: GoogleMonitoringSloTimeouts | undefined) {
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
export interface GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability {
  /**
  * Whether an availability SLI is enabled or not. Must be set to 'true. Defaults to 'true'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#enabled GoogleMonitoringSlo#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityToTerraform(struct?: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference | GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency {
  /**
  * A duration string, e.g. 10s.
Good service is defined to be the count of requests made to
this service that return in no more than threshold.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#threshold GoogleMonitoringSlo#threshold}
  */
  readonly threshold: string;
}

export function googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyToTerraform(struct?: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference | GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}

export class GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance {
  /**
  * An optional set of locations to which this SLI is relevant.
Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#location GoogleMonitoringSlo#location}
  */
  readonly location?: string[];
  /**
  * An optional set of RPCs to which this SLI is relevant.
Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#method GoogleMonitoringSlo#method}
  */
  readonly method?: string[];
  /**
  * The set of API versions to which this SLI is relevant.
Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#version GoogleMonitoringSlo#version}
  */
  readonly version?: string[];
  /**
  * availability block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#availability GoogleMonitoringSlo#availability}
  */
  readonly availability?: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability;
  /**
  * latency block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#latency GoogleMonitoringSlo#latency}
  */
  readonly latency?: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency;
}

export function googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceToTerraform(struct?: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference | GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.listMapper(cdktf.stringToTerraform)(struct!.location),
    method: cdktf.listMapper(cdktf.stringToTerraform)(struct!.method),
    version: cdktf.listMapper(cdktf.stringToTerraform)(struct!.version),
    availability: googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityToTerraform(struct!.availability),
    latency: googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyToTerraform(struct!.latency),
  }
}

export class GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._availability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability?.internalValue;
    }
    if (this._latency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._method = undefined;
      this._version = undefined;
      this._availability.internalValue = undefined;
      this._latency.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._method = value.method;
      this._version = value.version;
      this._availability.internalValue = value.availability;
      this._latency.internalValue = value.latency;
    }
  }

  // location - computed: false, optional: true, required: false
  private _location?: string[]; 
  public get location() {
    return cdktf.Fn.tolist(this.getListAttribute('location'));
  }
  public set location(value: string[]) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string[]; 
  public get method() {
    return cdktf.Fn.tolist(this.getListAttribute('method'));
  }
  public set method(value: string[]) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string[]; 
  public get version() {
    return cdktf.Fn.tolist(this.getListAttribute('version'));
  }
  public set version(value: string[]) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // availability - computed: false, optional: true, required: false
  private _availability = new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference(this, "availability");
  public get availability() {
    return this._availability;
  }
  public putAvailability(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability) {
    this._availability.internalValue = value;
  }
  public resetAvailability() {
    this._availability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability.internalValue;
  }

  // latency - computed: false, optional: true, required: false
  private _latency = new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference(this, "latency");
  public get latency() {
    return this._latency;
  }
  public putLatency(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency) {
    this._latency.internalValue = value;
  }
  public resetLatency() {
    this._latency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency.internalValue;
  }
}
export interface GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange {
  /**
  * max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#max GoogleMonitoringSlo#max}
  */
  readonly max?: number;
  /**
  * Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#min GoogleMonitoringSlo#min}
  */
  readonly min?: number;
}

export function googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeToTerraform(struct?: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference | GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut {
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#distribution_filter GoogleMonitoringSlo#distribution_filter}
  */
  readonly distributionFilter: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#range GoogleMonitoringSlo#range}
  */
  readonly range: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange;
}

export function googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutToTerraform(struct?: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference | GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_filter: cdktf.stringToTerraform(struct!.distributionFilter),
    range: googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeToTerraform(struct!.range),
  }
}

export class GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributionFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionFilter = this._distributionFilter;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distributionFilter = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributionFilter = value.distributionFilter;
      this._range.internalValue = value.range;
    }
  }

  // distribution_filter - computed: false, optional: false, required: true
  private _distributionFilter?: string; 
  public get distributionFilter() {
    return this.getStringAttribute('distribution_filter');
  }
  public set distributionFilter(value: string) {
    this._distributionFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionFilterInput() {
    return this._distributionFilter;
  }

  // range - computed: false, optional: false, required: true
  private _range = new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange) {
    this._range.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio {
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying bad service provided, either demanded service that
was not provided or demanded service that was of inadequate
quality. Exactly two of
good, bad, or total service filter must be defined (where
good + bad = total is assumed)

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#bad_service_filter GoogleMonitoringSlo#bad_service_filter}
  */
  readonly badServiceFilter?: string;
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying good service provided. Exactly two of
good, bad, or total service filter must be defined (where
good + bad = total is assumed)

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#good_service_filter GoogleMonitoringSlo#good_service_filter}
  */
  readonly goodServiceFilter?: string;
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
quantifying total demanded service. Exactly two of
good, bad, or total service filter must be defined (where
good + bad = total is assumed)

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#total_service_filter GoogleMonitoringSlo#total_service_filter}
  */
  readonly totalServiceFilter?: string;
}

export function googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioToTerraform(struct?: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference | GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_service_filter: cdktf.stringToTerraform(struct!.badServiceFilter),
    good_service_filter: cdktf.stringToTerraform(struct!.goodServiceFilter),
    total_service_filter: cdktf.stringToTerraform(struct!.totalServiceFilter),
  }
}

export class GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badServiceFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.badServiceFilter = this._badServiceFilter;
    }
    if (this._goodServiceFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodServiceFilter = this._goodServiceFilter;
    }
    if (this._totalServiceFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalServiceFilter = this._totalServiceFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badServiceFilter = undefined;
      this._goodServiceFilter = undefined;
      this._totalServiceFilter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badServiceFilter = value.badServiceFilter;
      this._goodServiceFilter = value.goodServiceFilter;
      this._totalServiceFilter = value.totalServiceFilter;
    }
  }

  // bad_service_filter - computed: false, optional: true, required: false
  private _badServiceFilter?: string; 
  public get badServiceFilter() {
    return this.getStringAttribute('bad_service_filter');
  }
  public set badServiceFilter(value: string) {
    this._badServiceFilter = value;
  }
  public resetBadServiceFilter() {
    this._badServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badServiceFilterInput() {
    return this._badServiceFilter;
  }

  // good_service_filter - computed: false, optional: true, required: false
  private _goodServiceFilter?: string; 
  public get goodServiceFilter() {
    return this.getStringAttribute('good_service_filter');
  }
  public set goodServiceFilter(value: string) {
    this._goodServiceFilter = value;
  }
  public resetGoodServiceFilter() {
    this._goodServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodServiceFilterInput() {
    return this._goodServiceFilter;
  }

  // total_service_filter - computed: false, optional: true, required: false
  private _totalServiceFilter?: string; 
  public get totalServiceFilter() {
    return this.getStringAttribute('total_service_filter');
  }
  public set totalServiceFilter(value: string) {
    this._totalServiceFilter = value;
  }
  public resetTotalServiceFilter() {
    this._totalServiceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalServiceFilterInput() {
    return this._totalServiceFilter;
  }
}
export interface GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance {
  /**
  * distribution_cut block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#distribution_cut GoogleMonitoringSlo#distribution_cut}
  */
  readonly distributionCut?: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut;
  /**
  * good_total_ratio block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#good_total_ratio GoogleMonitoringSlo#good_total_ratio}
  */
  readonly goodTotalRatio?: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio;
}

export function googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceToTerraform(struct?: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference | GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_cut: googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutToTerraform(struct!.distributionCut),
    good_total_ratio: googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioToTerraform(struct!.goodTotalRatio),
  }
}

export class GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributionCut?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionCut = this._distributionCut?.internalValue;
    }
    if (this._goodTotalRatio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodTotalRatio = this._goodTotalRatio?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distributionCut.internalValue = undefined;
      this._goodTotalRatio.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributionCut.internalValue = value.distributionCut;
      this._goodTotalRatio.internalValue = value.goodTotalRatio;
    }
  }

  // distribution_cut - computed: false, optional: true, required: false
  private _distributionCut = new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference(this, "distribution_cut");
  public get distributionCut() {
    return this._distributionCut;
  }
  public putDistributionCut(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut) {
    this._distributionCut.internalValue = value;
  }
  public resetDistributionCut() {
    this._distributionCut.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionCutInput() {
    return this._distributionCut.internalValue;
  }

  // good_total_ratio - computed: false, optional: true, required: false
  private _goodTotalRatio = new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference(this, "good_total_ratio");
  public get goodTotalRatio() {
    return this._goodTotalRatio;
  }
  public putGoodTotalRatio(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio) {
    this._goodTotalRatio.internalValue = value;
  }
  public resetGoodTotalRatio() {
    this._goodTotalRatio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodTotalRatioInput() {
    return this._goodTotalRatio.internalValue;
  }
}
export interface GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold {
  /**
  * If window performance >= threshold, the window is counted
as good.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#threshold GoogleMonitoringSlo#threshold}
  */
  readonly threshold?: number;
  /**
  * basic_sli_performance block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#basic_sli_performance GoogleMonitoringSlo#basic_sli_performance}
  */
  readonly basicSliPerformance?: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance;
  /**
  * performance block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#performance GoogleMonitoringSlo#performance}
  */
  readonly performance?: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance;
}

export function googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdToTerraform(struct?: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference | GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    basic_sli_performance: googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceToTerraform(struct!.basicSliPerformance),
    performance: googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceToTerraform(struct!.performance),
  }
}

export class GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._basicSliPerformance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicSliPerformance = this._basicSliPerformance?.internalValue;
    }
    if (this._performance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performance = this._performance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._basicSliPerformance.internalValue = undefined;
      this._performance.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._basicSliPerformance.internalValue = value.basicSliPerformance;
      this._performance.internalValue = value.performance;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // basic_sli_performance - computed: false, optional: true, required: false
  private _basicSliPerformance = new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference(this, "basic_sli_performance");
  public get basicSliPerformance() {
    return this._basicSliPerformance;
  }
  public putBasicSliPerformance(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance) {
    this._basicSliPerformance.internalValue = value;
  }
  public resetBasicSliPerformance() {
    this._basicSliPerformance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicSliPerformanceInput() {
    return this._basicSliPerformance.internalValue;
  }

  // performance - computed: false, optional: true, required: false
  private _performance = new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference(this, "performance");
  public get performance() {
    return this._performance;
  }
  public putPerformance(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance) {
    this._performance.internalValue = value;
  }
  public resetPerformance() {
    this._performance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInput() {
    return this._performance.internalValue;
  }
}
export interface GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange {
  /**
  * max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#max GoogleMonitoringSlo#max}
  */
  readonly max?: number;
  /**
  * Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#min GoogleMonitoringSlo#min}
  */
  readonly min?: number;
}

export function googleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeToTerraform(struct?: GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference | GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface GoogleMonitoringSloWindowsBasedSliMetricMeanInRange {
  /**
  * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
specifying the TimeSeries to use for evaluating window
The provided TimeSeries must have ValueType = INT64 or
ValueType = DOUBLE and MetricKind = GAUGE. Mean value 'X'
should satisfy 'range.min <= X <= range.max'
under good service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#time_series GoogleMonitoringSlo#time_series}
  */
  readonly timeSeries: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#range GoogleMonitoringSlo#range}
  */
  readonly range: GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange;
}

export function googleMonitoringSloWindowsBasedSliMetricMeanInRangeToTerraform(struct?: GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference | GoogleMonitoringSloWindowsBasedSliMetricMeanInRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_series: cdktf.stringToTerraform(struct!.timeSeries),
    range: googleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeToTerraform(struct!.range),
  }
}

export class GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloWindowsBasedSliMetricMeanInRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSeries = this._timeSeries;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloWindowsBasedSliMetricMeanInRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeSeries = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeSeries = value.timeSeries;
      this._range.internalValue = value.range;
    }
  }

  // time_series - computed: false, optional: false, required: true
  private _timeSeries?: string; 
  public get timeSeries() {
    return this.getStringAttribute('time_series');
  }
  public set timeSeries(value: string) {
    this._timeSeries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesInput() {
    return this._timeSeries;
  }

  // range - computed: false, optional: false, required: true
  private _range = new GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange) {
    this._range.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange {
  /**
  * max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#max GoogleMonitoringSlo#max}
  */
  readonly max?: number;
  /**
  * Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#min GoogleMonitoringSlo#min}
  */
  readonly min?: number;
}

export function googleMonitoringSloWindowsBasedSliMetricSumInRangeRangeToTerraform(struct?: GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference | GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface GoogleMonitoringSloWindowsBasedSliMetricSumInRange {
  /**
  * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
specifying the TimeSeries to use for evaluating window
quality. The provided TimeSeries must have
ValueType = INT64 or ValueType = DOUBLE and
MetricKind = GAUGE.

Summed value 'X' should satisfy
'range.min <= X <= range.max' for a good window.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#time_series GoogleMonitoringSlo#time_series}
  */
  readonly timeSeries: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#range GoogleMonitoringSlo#range}
  */
  readonly range: GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange;
}

export function googleMonitoringSloWindowsBasedSliMetricSumInRangeToTerraform(struct?: GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference | GoogleMonitoringSloWindowsBasedSliMetricSumInRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_series: cdktf.stringToTerraform(struct!.timeSeries),
    range: googleMonitoringSloWindowsBasedSliMetricSumInRangeRangeToTerraform(struct!.range),
  }
}

export class GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloWindowsBasedSliMetricSumInRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSeries = this._timeSeries;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloWindowsBasedSliMetricSumInRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeSeries = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeSeries = value.timeSeries;
      this._range.internalValue = value.range;
    }
  }

  // time_series - computed: false, optional: false, required: true
  private _timeSeries?: string; 
  public get timeSeries() {
    return this.getStringAttribute('time_series');
  }
  public set timeSeries(value: string) {
    this._timeSeries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesInput() {
    return this._timeSeries;
  }

  // range - computed: false, optional: false, required: true
  private _range = new GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange) {
    this._range.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface GoogleMonitoringSloWindowsBasedSli {
  /**
  * A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
with ValueType = BOOL. The window is good if any true values
appear in the window. One of 'good_bad_metric_filter',
'good_total_ratio_threshold', 'metric_mean_in_range',
'metric_sum_in_range' must be set for 'windows_based_sli'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#good_bad_metric_filter GoogleMonitoringSlo#good_bad_metric_filter}
  */
  readonly goodBadMetricFilter?: string;
  /**
  * Duration over which window quality is evaluated, given as a
duration string "{X}s" representing X seconds. Must be an
integer fraction of a day and at least 60s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#window_period GoogleMonitoringSlo#window_period}
  */
  readonly windowPeriod?: string;
  /**
  * good_total_ratio_threshold block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#good_total_ratio_threshold GoogleMonitoringSlo#good_total_ratio_threshold}
  */
  readonly goodTotalRatioThreshold?: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold;
  /**
  * metric_mean_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#metric_mean_in_range GoogleMonitoringSlo#metric_mean_in_range}
  */
  readonly metricMeanInRange?: GoogleMonitoringSloWindowsBasedSliMetricMeanInRange;
  /**
  * metric_sum_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo#metric_sum_in_range GoogleMonitoringSlo#metric_sum_in_range}
  */
  readonly metricSumInRange?: GoogleMonitoringSloWindowsBasedSliMetricSumInRange;
}

export function googleMonitoringSloWindowsBasedSliToTerraform(struct?: GoogleMonitoringSloWindowsBasedSliOutputReference | GoogleMonitoringSloWindowsBasedSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    good_bad_metric_filter: cdktf.stringToTerraform(struct!.goodBadMetricFilter),
    window_period: cdktf.stringToTerraform(struct!.windowPeriod),
    good_total_ratio_threshold: googleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdToTerraform(struct!.goodTotalRatioThreshold),
    metric_mean_in_range: googleMonitoringSloWindowsBasedSliMetricMeanInRangeToTerraform(struct!.metricMeanInRange),
    metric_sum_in_range: googleMonitoringSloWindowsBasedSliMetricSumInRangeToTerraform(struct!.metricSumInRange),
  }
}

export class GoogleMonitoringSloWindowsBasedSliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringSloWindowsBasedSli | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._goodBadMetricFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodBadMetricFilter = this._goodBadMetricFilter;
    }
    if (this._windowPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowPeriod = this._windowPeriod;
    }
    if (this._goodTotalRatioThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodTotalRatioThreshold = this._goodTotalRatioThreshold?.internalValue;
    }
    if (this._metricMeanInRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricMeanInRange = this._metricMeanInRange?.internalValue;
    }
    if (this._metricSumInRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSumInRange = this._metricSumInRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringSloWindowsBasedSli | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._goodBadMetricFilter = undefined;
      this._windowPeriod = undefined;
      this._goodTotalRatioThreshold.internalValue = undefined;
      this._metricMeanInRange.internalValue = undefined;
      this._metricSumInRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._goodBadMetricFilter = value.goodBadMetricFilter;
      this._windowPeriod = value.windowPeriod;
      this._goodTotalRatioThreshold.internalValue = value.goodTotalRatioThreshold;
      this._metricMeanInRange.internalValue = value.metricMeanInRange;
      this._metricSumInRange.internalValue = value.metricSumInRange;
    }
  }

  // good_bad_metric_filter - computed: false, optional: true, required: false
  private _goodBadMetricFilter?: string; 
  public get goodBadMetricFilter() {
    return this.getStringAttribute('good_bad_metric_filter');
  }
  public set goodBadMetricFilter(value: string) {
    this._goodBadMetricFilter = value;
  }
  public resetGoodBadMetricFilter() {
    this._goodBadMetricFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodBadMetricFilterInput() {
    return this._goodBadMetricFilter;
  }

  // window_period - computed: false, optional: true, required: false
  private _windowPeriod?: string; 
  public get windowPeriod() {
    return this.getStringAttribute('window_period');
  }
  public set windowPeriod(value: string) {
    this._windowPeriod = value;
  }
  public resetWindowPeriod() {
    this._windowPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowPeriodInput() {
    return this._windowPeriod;
  }

  // good_total_ratio_threshold - computed: false, optional: true, required: false
  private _goodTotalRatioThreshold = new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference(this, "good_total_ratio_threshold");
  public get goodTotalRatioThreshold() {
    return this._goodTotalRatioThreshold;
  }
  public putGoodTotalRatioThreshold(value: GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold) {
    this._goodTotalRatioThreshold.internalValue = value;
  }
  public resetGoodTotalRatioThreshold() {
    this._goodTotalRatioThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodTotalRatioThresholdInput() {
    return this._goodTotalRatioThreshold.internalValue;
  }

  // metric_mean_in_range - computed: false, optional: true, required: false
  private _metricMeanInRange = new GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference(this, "metric_mean_in_range");
  public get metricMeanInRange() {
    return this._metricMeanInRange;
  }
  public putMetricMeanInRange(value: GoogleMonitoringSloWindowsBasedSliMetricMeanInRange) {
    this._metricMeanInRange.internalValue = value;
  }
  public resetMetricMeanInRange() {
    this._metricMeanInRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMeanInRangeInput() {
    return this._metricMeanInRange.internalValue;
  }

  // metric_sum_in_range - computed: false, optional: true, required: false
  private _metricSumInRange = new GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference(this, "metric_sum_in_range");
  public get metricSumInRange() {
    return this._metricSumInRange;
  }
  public putMetricSumInRange(value: GoogleMonitoringSloWindowsBasedSliMetricSumInRange) {
    this._metricSumInRange.internalValue = value;
  }
  public resetMetricSumInRange() {
    this._metricSumInRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSumInRangeInput() {
    return this._metricSumInRange.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo google_monitoring_slo}
*/
export class GoogleMonitoringSlo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_monitoring_slo";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_slo google_monitoring_slo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleMonitoringSloConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleMonitoringSloConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_slo',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.18.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._calendarPeriod = config.calendarPeriod;
    this._displayName = config.displayName;
    this._goal = config.goal;
    this._project = config.project;
    this._rollingPeriodDays = config.rollingPeriodDays;
    this._service = config.service;
    this._sloId = config.sloId;
    this._basicSli.internalValue = config.basicSli;
    this._requestBasedSli.internalValue = config.requestBasedSli;
    this._timeouts.internalValue = config.timeouts;
    this._windowsBasedSli.internalValue = config.windowsBasedSli;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // calendar_period - computed: false, optional: true, required: false
  private _calendarPeriod?: string; 
  public get calendarPeriod() {
    return this.getStringAttribute('calendar_period');
  }
  public set calendarPeriod(value: string) {
    this._calendarPeriod = value;
  }
  public resetCalendarPeriod() {
    this._calendarPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarPeriodInput() {
    return this._calendarPeriod;
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

  // goal - computed: false, optional: false, required: true
  private _goal?: number; 
  public get goal() {
    return this.getNumberAttribute('goal');
  }
  public set goal(value: number) {
    this._goal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goalInput() {
    return this._goal;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // rolling_period_days - computed: false, optional: true, required: false
  private _rollingPeriodDays?: number; 
  public get rollingPeriodDays() {
    return this.getNumberAttribute('rolling_period_days');
  }
  public set rollingPeriodDays(value: number) {
    this._rollingPeriodDays = value;
  }
  public resetRollingPeriodDays() {
    this._rollingPeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingPeriodDaysInput() {
    return this._rollingPeriodDays;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // slo_id - computed: true, optional: true, required: false
  private _sloId?: string; 
  public get sloId() {
    return this.getStringAttribute('slo_id');
  }
  public set sloId(value: string) {
    this._sloId = value;
  }
  public resetSloId() {
    this._sloId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloIdInput() {
    return this._sloId;
  }

  // basic_sli - computed: false, optional: true, required: false
  private _basicSli = new GoogleMonitoringSloBasicSliOutputReference(this, "basic_sli");
  public get basicSli() {
    return this._basicSli;
  }
  public putBasicSli(value: GoogleMonitoringSloBasicSli) {
    this._basicSli.internalValue = value;
  }
  public resetBasicSli() {
    this._basicSli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicSliInput() {
    return this._basicSli.internalValue;
  }

  // request_based_sli - computed: false, optional: true, required: false
  private _requestBasedSli = new GoogleMonitoringSloRequestBasedSliOutputReference(this, "request_based_sli");
  public get requestBasedSli() {
    return this._requestBasedSli;
  }
  public putRequestBasedSli(value: GoogleMonitoringSloRequestBasedSli) {
    this._requestBasedSli.internalValue = value;
  }
  public resetRequestBasedSli() {
    this._requestBasedSli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBasedSliInput() {
    return this._requestBasedSli.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleMonitoringSloTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleMonitoringSloTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // windows_based_sli - computed: false, optional: true, required: false
  private _windowsBasedSli = new GoogleMonitoringSloWindowsBasedSliOutputReference(this, "windows_based_sli");
  public get windowsBasedSli() {
    return this._windowsBasedSli;
  }
  public putWindowsBasedSli(value: GoogleMonitoringSloWindowsBasedSli) {
    this._windowsBasedSli.internalValue = value;
  }
  public resetWindowsBasedSli() {
    this._windowsBasedSli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsBasedSliInput() {
    return this._windowsBasedSli.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      calendar_period: cdktf.stringToTerraform(this._calendarPeriod),
      display_name: cdktf.stringToTerraform(this._displayName),
      goal: cdktf.numberToTerraform(this._goal),
      project: cdktf.stringToTerraform(this._project),
      rolling_period_days: cdktf.numberToTerraform(this._rollingPeriodDays),
      service: cdktf.stringToTerraform(this._service),
      slo_id: cdktf.stringToTerraform(this._sloId),
      basic_sli: googleMonitoringSloBasicSliToTerraform(this._basicSli.internalValue),
      request_based_sli: googleMonitoringSloRequestBasedSliToTerraform(this._requestBasedSli.internalValue),
      timeouts: googleMonitoringSloTimeoutsToTerraform(this._timeouts.internalValue),
      windows_based_sli: googleMonitoringSloWindowsBasedSliToTerraform(this._windowsBasedSli.internalValue),
    };
  }
}
