// https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GooglePubsubLiteTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#id GooglePubsubLiteTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#name GooglePubsubLiteTopic#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#project GooglePubsubLiteTopic#project}
  */
  readonly project?: string;
  /**
  * The region of the pubsub lite topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#region GooglePubsubLiteTopic#region}
  */
  readonly region?: string;
  /**
  * The zone of the pubsub lite topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#zone GooglePubsubLiteTopic#zone}
  */
  readonly zone?: string;
  /**
  * partition_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#partition_config GooglePubsubLiteTopic#partition_config}
  */
  readonly partitionConfig?: GooglePubsubLiteTopicPartitionConfig;
  /**
  * reservation_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#reservation_config GooglePubsubLiteTopic#reservation_config}
  */
  readonly reservationConfig?: GooglePubsubLiteTopicReservationConfig;
  /**
  * retention_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#retention_config GooglePubsubLiteTopic#retention_config}
  */
  readonly retentionConfig?: GooglePubsubLiteTopicRetentionConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#timeouts GooglePubsubLiteTopic#timeouts}
  */
  readonly timeouts?: GooglePubsubLiteTopicTimeouts;
}
export interface GooglePubsubLiteTopicPartitionConfigCapacity {
  /**
  * Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#publish_mib_per_sec GooglePubsubLiteTopic#publish_mib_per_sec}
  */
  readonly publishMibPerSec: number;
  /**
  * Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#subscribe_mib_per_sec GooglePubsubLiteTopic#subscribe_mib_per_sec}
  */
  readonly subscribeMibPerSec: number;
}

export function googlePubsubLiteTopicPartitionConfigCapacityToTerraform(struct?: GooglePubsubLiteTopicPartitionConfigCapacityOutputReference | GooglePubsubLiteTopicPartitionConfigCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    publish_mib_per_sec: cdktf.numberToTerraform(struct!.publishMibPerSec),
    subscribe_mib_per_sec: cdktf.numberToTerraform(struct!.subscribeMibPerSec),
  }
}

export class GooglePubsubLiteTopicPartitionConfigCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubLiteTopicPartitionConfigCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publishMibPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishMibPerSec = this._publishMibPerSec;
    }
    if (this._subscribeMibPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribeMibPerSec = this._subscribeMibPerSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubLiteTopicPartitionConfigCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publishMibPerSec = undefined;
      this._subscribeMibPerSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publishMibPerSec = value.publishMibPerSec;
      this._subscribeMibPerSec = value.subscribeMibPerSec;
    }
  }

  // publish_mib_per_sec - computed: false, optional: false, required: true
  private _publishMibPerSec?: number; 
  public get publishMibPerSec() {
    return this.getNumberAttribute('publish_mib_per_sec');
  }
  public set publishMibPerSec(value: number) {
    this._publishMibPerSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishMibPerSecInput() {
    return this._publishMibPerSec;
  }

  // subscribe_mib_per_sec - computed: false, optional: false, required: true
  private _subscribeMibPerSec?: number; 
  public get subscribeMibPerSec() {
    return this.getNumberAttribute('subscribe_mib_per_sec');
  }
  public set subscribeMibPerSec(value: number) {
    this._subscribeMibPerSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeMibPerSecInput() {
    return this._subscribeMibPerSec;
  }
}
export interface GooglePubsubLiteTopicPartitionConfig {
  /**
  * The number of partitions in the topic. Must be at least 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#count GooglePubsubLiteTopic#count}
  */
  readonly count: number;
  /**
  * capacity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#capacity GooglePubsubLiteTopic#capacity}
  */
  readonly capacity?: GooglePubsubLiteTopicPartitionConfigCapacity;
}

export function googlePubsubLiteTopicPartitionConfigToTerraform(struct?: GooglePubsubLiteTopicPartitionConfigOutputReference | GooglePubsubLiteTopicPartitionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    capacity: googlePubsubLiteTopicPartitionConfigCapacityToTerraform(struct!.capacity),
  }
}

export class GooglePubsubLiteTopicPartitionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubLiteTopicPartitionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._capacity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubLiteTopicPartitionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._capacity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._capacity.internalValue = value.capacity;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity = new GooglePubsubLiteTopicPartitionConfigCapacityOutputReference(this, "capacity");
  public get capacity() {
    return this._capacity;
  }
  public putCapacity(value: GooglePubsubLiteTopicPartitionConfigCapacity) {
    this._capacity.internalValue = value;
  }
  public resetCapacity() {
    this._capacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity.internalValue;
  }
}
export interface GooglePubsubLiteTopicReservationConfig {
  /**
  * The Reservation to use for this topic's throughput capacity.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#throughput_reservation GooglePubsubLiteTopic#throughput_reservation}
  */
  readonly throughputReservation?: string;
}

export function googlePubsubLiteTopicReservationConfigToTerraform(struct?: GooglePubsubLiteTopicReservationConfigOutputReference | GooglePubsubLiteTopicReservationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    throughput_reservation: cdktf.stringToTerraform(struct!.throughputReservation),
  }
}

export class GooglePubsubLiteTopicReservationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubLiteTopicReservationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._throughputReservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputReservation = this._throughputReservation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubLiteTopicReservationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._throughputReservation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._throughputReservation = value.throughputReservation;
    }
  }

  // throughput_reservation - computed: false, optional: true, required: false
  private _throughputReservation?: string; 
  public get throughputReservation() {
    return this.getStringAttribute('throughput_reservation');
  }
  public set throughputReservation(value: string) {
    this._throughputReservation = value;
  }
  public resetThroughputReservation() {
    this._throughputReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputReservationInput() {
    return this._throughputReservation;
  }
}
export interface GooglePubsubLiteTopicRetentionConfig {
  /**
  * The provisioned storage, in bytes, per partition. If the number of bytes stored
in any of the topic's partitions grows beyond this value, older messages will be
dropped to make room for newer ones, regardless of the value of period.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#per_partition_bytes GooglePubsubLiteTopic#per_partition_bytes}
  */
  readonly perPartitionBytes: string;
  /**
  * How long a published message is retained. If unset, messages will be retained as
long as the bytes retained for each partition is below perPartitionBytes. A
duration in seconds with up to nine fractional digits, terminated by 's'.
Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#period GooglePubsubLiteTopic#period}
  */
  readonly period?: string;
}

export function googlePubsubLiteTopicRetentionConfigToTerraform(struct?: GooglePubsubLiteTopicRetentionConfigOutputReference | GooglePubsubLiteTopicRetentionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_partition_bytes: cdktf.stringToTerraform(struct!.perPartitionBytes),
    period: cdktf.stringToTerraform(struct!.period),
  }
}

export class GooglePubsubLiteTopicRetentionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubLiteTopicRetentionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perPartitionBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.perPartitionBytes = this._perPartitionBytes;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubLiteTopicRetentionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perPartitionBytes = undefined;
      this._period = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perPartitionBytes = value.perPartitionBytes;
      this._period = value.period;
    }
  }

  // per_partition_bytes - computed: false, optional: false, required: true
  private _perPartitionBytes?: string; 
  public get perPartitionBytes() {
    return this.getStringAttribute('per_partition_bytes');
  }
  public set perPartitionBytes(value: string) {
    this._perPartitionBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perPartitionBytesInput() {
    return this._perPartitionBytes;
  }

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }
}
export interface GooglePubsubLiteTopicTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#create GooglePubsubLiteTopic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#delete GooglePubsubLiteTopic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic#update GooglePubsubLiteTopic#update}
  */
  readonly update?: string;
}

export function googlePubsubLiteTopicTimeoutsToTerraform(struct?: GooglePubsubLiteTopicTimeoutsOutputReference | GooglePubsubLiteTopicTimeouts | cdktf.IResolvable): any {
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

export class GooglePubsubLiteTopicTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubLiteTopicTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GooglePubsubLiteTopicTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic google_pubsub_lite_topic}
*/
export class GooglePubsubLiteTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_pubsub_lite_topic";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_lite_topic google_pubsub_lite_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GooglePubsubLiteTopicConfig
  */
  public constructor(scope: Construct, id: string, config: GooglePubsubLiteTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_lite_topic',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.23.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._zone = config.zone;
    this._partitionConfig.internalValue = config.partitionConfig;
    this._reservationConfig.internalValue = config.reservationConfig;
    this._retentionConfig.internalValue = config.retentionConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // partition_config - computed: false, optional: true, required: false
  private _partitionConfig = new GooglePubsubLiteTopicPartitionConfigOutputReference(this, "partition_config");
  public get partitionConfig() {
    return this._partitionConfig;
  }
  public putPartitionConfig(value: GooglePubsubLiteTopicPartitionConfig) {
    this._partitionConfig.internalValue = value;
  }
  public resetPartitionConfig() {
    this._partitionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionConfigInput() {
    return this._partitionConfig.internalValue;
  }

  // reservation_config - computed: false, optional: true, required: false
  private _reservationConfig = new GooglePubsubLiteTopicReservationConfigOutputReference(this, "reservation_config");
  public get reservationConfig() {
    return this._reservationConfig;
  }
  public putReservationConfig(value: GooglePubsubLiteTopicReservationConfig) {
    this._reservationConfig.internalValue = value;
  }
  public resetReservationConfig() {
    this._reservationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationConfigInput() {
    return this._reservationConfig.internalValue;
  }

  // retention_config - computed: false, optional: true, required: false
  private _retentionConfig = new GooglePubsubLiteTopicRetentionConfigOutputReference(this, "retention_config");
  public get retentionConfig() {
    return this._retentionConfig;
  }
  public putRetentionConfig(value: GooglePubsubLiteTopicRetentionConfig) {
    this._retentionConfig.internalValue = value;
  }
  public resetRetentionConfig() {
    this._retentionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionConfigInput() {
    return this._retentionConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GooglePubsubLiteTopicTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GooglePubsubLiteTopicTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      zone: cdktf.stringToTerraform(this._zone),
      partition_config: googlePubsubLiteTopicPartitionConfigToTerraform(this._partitionConfig.internalValue),
      reservation_config: googlePubsubLiteTopicReservationConfigToTerraform(this._reservationConfig.internalValue),
      retention_config: googlePubsubLiteTopicRetentionConfigToTerraform(this._retentionConfig.internalValue),
      timeouts: googlePubsubLiteTopicTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
