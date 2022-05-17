// https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleContainerAwsNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#annotations GoogleContainerAwsNodePool#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The awsCluster for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#cluster GoogleContainerAwsNodePool#cluster}
  */
  readonly cluster: string;
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#location GoogleContainerAwsNodePool#location}
  */
  readonly location: string;
  /**
  * The name of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#name GoogleContainerAwsNodePool#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#project GoogleContainerAwsNodePool#project}
  */
  readonly project?: string;
  /**
  * The subnet where the node pool node run.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#subnet_id GoogleContainerAwsNodePool#subnet_id}
  */
  readonly subnetId: string;
  /**
  * The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#version GoogleContainerAwsNodePool#version}
  */
  readonly version: string;
  /**
  * autoscaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#autoscaling GoogleContainerAwsNodePool#autoscaling}
  */
  readonly autoscaling: GoogleContainerAwsNodePoolAutoscaling;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#config GoogleContainerAwsNodePool#config}
  */
  readonly config: GoogleContainerAwsNodePoolConfigA;
  /**
  * max_pods_constraint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#max_pods_constraint GoogleContainerAwsNodePool#max_pods_constraint}
  */
  readonly maxPodsConstraint: GoogleContainerAwsNodePoolMaxPodsConstraint;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#timeouts GoogleContainerAwsNodePool#timeouts}
  */
  readonly timeouts?: GoogleContainerAwsNodePoolTimeouts;
}
export interface GoogleContainerAwsNodePoolAutoscaling {
  /**
  * Maximum number of nodes in the NodePool. Must be >= min_node_count.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#max_node_count GoogleContainerAwsNodePool#max_node_count}
  */
  readonly maxNodeCount: number;
  /**
  * Minimum number of nodes in the NodePool. Must be >= 1 and <= max_node_count.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#min_node_count GoogleContainerAwsNodePool#min_node_count}
  */
  readonly minNodeCount: number;
}

export function googleContainerAwsNodePoolAutoscalingToTerraform(struct?: GoogleContainerAwsNodePoolAutoscalingOutputReference | GoogleContainerAwsNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
  }
}

export class GoogleContainerAwsNodePoolAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAwsNodePoolAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAwsNodePoolAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
    }
  }

  // max_node_count - computed: false, optional: false, required: true
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: false, required: true
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }
}
export interface GoogleContainerAwsNodePoolConfigConfigEncryption {
  /**
  * The ARN of the AWS KMS key used to encrypt node pool configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#kms_key_arn GoogleContainerAwsNodePool#kms_key_arn}
  */
  readonly kmsKeyArn: string;
}

export function googleContainerAwsNodePoolConfigConfigEncryptionToTerraform(struct?: GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference | GoogleContainerAwsNodePoolConfigConfigEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}

export class GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAwsNodePoolConfigConfigEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAwsNodePoolConfigConfigEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // kms_key_arn - computed: false, optional: false, required: true
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface GoogleContainerAwsNodePoolConfigInstancePlacement {
  /**
  * The tenancy for the instance. Possible values: TENANCY_UNSPECIFIED, DEFAULT, DEDICATED, HOST
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#tenancy GoogleContainerAwsNodePool#tenancy}
  */
  readonly tenancy?: string;
}

export function googleContainerAwsNodePoolConfigInstancePlacementToTerraform(struct?: GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference | GoogleContainerAwsNodePoolConfigInstancePlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tenancy: cdktf.stringToTerraform(struct!.tenancy),
  }
}

export class GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAwsNodePoolConfigInstancePlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tenancy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenancy = this._tenancy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAwsNodePoolConfigInstancePlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tenancy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tenancy = value.tenancy;
    }
  }

  // tenancy - computed: true, optional: true, required: false
  private _tenancy?: string; 
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string) {
    this._tenancy = value;
  }
  public resetTenancy() {
    this._tenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyInput() {
    return this._tenancy;
  }
}
export interface GoogleContainerAwsNodePoolConfigProxyConfig {
  /**
  * The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#secret_arn GoogleContainerAwsNodePool#secret_arn}
  */
  readonly secretArn: string;
  /**
  * The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#secret_version GoogleContainerAwsNodePool#secret_version}
  */
  readonly secretVersion: string;
}

export function googleContainerAwsNodePoolConfigProxyConfigToTerraform(struct?: GoogleContainerAwsNodePoolConfigProxyConfigOutputReference | GoogleContainerAwsNodePoolConfigProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}

export class GoogleContainerAwsNodePoolConfigProxyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAwsNodePoolConfigProxyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAwsNodePoolConfigProxyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretArn = undefined;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretArn = value.secretArn;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_arn - computed: false, optional: false, required: true
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface GoogleContainerAwsNodePoolConfigRootVolume {
  /**
  * Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#iops GoogleContainerAwsNodePool#iops}
  */
  readonly iops?: number;
  /**
  * Optional. The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#kms_key_arn GoogleContainerAwsNodePool#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Optional. The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#size_gib GoogleContainerAwsNodePool#size_gib}
  */
  readonly sizeGib?: number;
  /**
  * Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#volume_type GoogleContainerAwsNodePool#volume_type}
  */
  readonly volumeType?: string;
}

export function googleContainerAwsNodePoolConfigRootVolumeToTerraform(struct?: GoogleContainerAwsNodePoolConfigRootVolumeOutputReference | GoogleContainerAwsNodePoolConfigRootVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    size_gib: cdktf.numberToTerraform(struct!.sizeGib),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export class GoogleContainerAwsNodePoolConfigRootVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAwsNodePoolConfigRootVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._sizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGib = this._sizeGib;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAwsNodePoolConfigRootVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iops = undefined;
      this._kmsKeyArn = undefined;
      this._sizeGib = undefined;
      this._volumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iops = value.iops;
      this._kmsKeyArn = value.kmsKeyArn;
      this._sizeGib = value.sizeGib;
      this._volumeType = value.volumeType;
    }
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // size_gib - computed: true, optional: true, required: false
  private _sizeGib?: number; 
  public get sizeGib() {
    return this.getNumberAttribute('size_gib');
  }
  public set sizeGib(value: number) {
    this._sizeGib = value;
  }
  public resetSizeGib() {
    this._sizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGibInput() {
    return this._sizeGib;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface GoogleContainerAwsNodePoolConfigSshConfig {
  /**
  * The name of the EC2 key pair used to login into cluster machines.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#ec2_key_pair GoogleContainerAwsNodePool#ec2_key_pair}
  */
  readonly ec2KeyPair: string;
}

export function googleContainerAwsNodePoolConfigSshConfigToTerraform(struct?: GoogleContainerAwsNodePoolConfigSshConfigOutputReference | GoogleContainerAwsNodePoolConfigSshConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ec2_key_pair: cdktf.stringToTerraform(struct!.ec2KeyPair),
  }
}

export class GoogleContainerAwsNodePoolConfigSshConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAwsNodePoolConfigSshConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ec2KeyPair !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2KeyPair = this._ec2KeyPair;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAwsNodePoolConfigSshConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ec2KeyPair = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ec2KeyPair = value.ec2KeyPair;
    }
  }

  // ec2_key_pair - computed: false, optional: false, required: true
  private _ec2KeyPair?: string; 
  public get ec2KeyPair() {
    return this.getStringAttribute('ec2_key_pair');
  }
  public set ec2KeyPair(value: string) {
    this._ec2KeyPair = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2KeyPairInput() {
    return this._ec2KeyPair;
  }
}
export interface GoogleContainerAwsNodePoolConfigTaints {
  /**
  * The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#effect GoogleContainerAwsNodePool#effect}
  */
  readonly effect: string;
  /**
  * Key for the taint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#key GoogleContainerAwsNodePool#key}
  */
  readonly key: string;
  /**
  * Value for the taint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#value GoogleContainerAwsNodePool#value}
  */
  readonly value: string;
}

export function googleContainerAwsNodePoolConfigTaintsToTerraform(struct?: GoogleContainerAwsNodePoolConfigTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface GoogleContainerAwsNodePoolConfigA {
  /**
  * The name of the AWS IAM role assigned to nodes in the pool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#iam_instance_profile GoogleContainerAwsNodePool#iam_instance_profile}
  */
  readonly iamInstanceProfile: string;
  /**
  * The OS image type to use on node pool instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#image_type GoogleContainerAwsNodePool#image_type}
  */
  readonly imageType?: string;
  /**
  * Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#instance_type GoogleContainerAwsNodePool#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#labels GoogleContainerAwsNodePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Optional. The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#security_group_ids GoogleContainerAwsNodePool#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Optional. Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#tags GoogleContainerAwsNodePool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * config_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#config_encryption GoogleContainerAwsNodePool#config_encryption}
  */
  readonly configEncryption: GoogleContainerAwsNodePoolConfigConfigEncryption;
  /**
  * instance_placement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#instance_placement GoogleContainerAwsNodePool#instance_placement}
  */
  readonly instancePlacement?: GoogleContainerAwsNodePoolConfigInstancePlacement;
  /**
  * proxy_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#proxy_config GoogleContainerAwsNodePool#proxy_config}
  */
  readonly proxyConfig?: GoogleContainerAwsNodePoolConfigProxyConfig;
  /**
  * root_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#root_volume GoogleContainerAwsNodePool#root_volume}
  */
  readonly rootVolume?: GoogleContainerAwsNodePoolConfigRootVolume;
  /**
  * ssh_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#ssh_config GoogleContainerAwsNodePool#ssh_config}
  */
  readonly sshConfig?: GoogleContainerAwsNodePoolConfigSshConfig;
  /**
  * taints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#taints GoogleContainerAwsNodePool#taints}
  */
  readonly taints?: GoogleContainerAwsNodePoolConfigTaints[] | cdktf.IResolvable;
}

export function googleContainerAwsNodePoolConfigAToTerraform(struct?: GoogleContainerAwsNodePoolConfigAOutputReference | GoogleContainerAwsNodePoolConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_instance_profile: cdktf.stringToTerraform(struct!.iamInstanceProfile),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    config_encryption: googleContainerAwsNodePoolConfigConfigEncryptionToTerraform(struct!.configEncryption),
    instance_placement: googleContainerAwsNodePoolConfigInstancePlacementToTerraform(struct!.instancePlacement),
    proxy_config: googleContainerAwsNodePoolConfigProxyConfigToTerraform(struct!.proxyConfig),
    root_volume: googleContainerAwsNodePoolConfigRootVolumeToTerraform(struct!.rootVolume),
    ssh_config: googleContainerAwsNodePoolConfigSshConfigToTerraform(struct!.sshConfig),
    taints: cdktf.listMapper(googleContainerAwsNodePoolConfigTaintsToTerraform)(struct!.taints),
  }
}

export class GoogleContainerAwsNodePoolConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAwsNodePoolConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamInstanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamInstanceProfile = this._iamInstanceProfile;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._configEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configEncryption = this._configEncryption?.internalValue;
    }
    if (this._instancePlacement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePlacement = this._instancePlacement?.internalValue;
    }
    if (this._proxyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConfig = this._proxyConfig?.internalValue;
    }
    if (this._rootVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolume = this._rootVolume?.internalValue;
    }
    if (this._sshConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshConfig = this._sshConfig?.internalValue;
    }
    if (this._taints !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAwsNodePoolConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iamInstanceProfile = undefined;
      this._imageType = undefined;
      this._instanceType = undefined;
      this._labels = undefined;
      this._securityGroupIds = undefined;
      this._tags = undefined;
      this._configEncryption.internalValue = undefined;
      this._instancePlacement.internalValue = undefined;
      this._proxyConfig.internalValue = undefined;
      this._rootVolume.internalValue = undefined;
      this._sshConfig.internalValue = undefined;
      this._taints = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iamInstanceProfile = value.iamInstanceProfile;
      this._imageType = value.imageType;
      this._instanceType = value.instanceType;
      this._labels = value.labels;
      this._securityGroupIds = value.securityGroupIds;
      this._tags = value.tags;
      this._configEncryption.internalValue = value.configEncryption;
      this._instancePlacement.internalValue = value.instancePlacement;
      this._proxyConfig.internalValue = value.proxyConfig;
      this._rootVolume.internalValue = value.rootVolume;
      this._sshConfig.internalValue = value.sshConfig;
      this._taints = value.taints;
    }
  }

  // iam_instance_profile - computed: false, optional: false, required: true
  private _iamInstanceProfile?: string; 
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }
  public set iamInstanceProfile(value: string) {
    this._iamInstanceProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile;
  }

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // config_encryption - computed: false, optional: false, required: true
  private _configEncryption = new GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference(this, "config_encryption");
  public get configEncryption() {
    return this._configEncryption;
  }
  public putConfigEncryption(value: GoogleContainerAwsNodePoolConfigConfigEncryption) {
    this._configEncryption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configEncryptionInput() {
    return this._configEncryption.internalValue;
  }

  // instance_placement - computed: false, optional: true, required: false
  private _instancePlacement = new GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference(this, "instance_placement");
  public get instancePlacement() {
    return this._instancePlacement;
  }
  public putInstancePlacement(value: GoogleContainerAwsNodePoolConfigInstancePlacement) {
    this._instancePlacement.internalValue = value;
  }
  public resetInstancePlacement() {
    this._instancePlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePlacementInput() {
    return this._instancePlacement.internalValue;
  }

  // proxy_config - computed: false, optional: true, required: false
  private _proxyConfig = new GoogleContainerAwsNodePoolConfigProxyConfigOutputReference(this, "proxy_config");
  public get proxyConfig() {
    return this._proxyConfig;
  }
  public putProxyConfig(value: GoogleContainerAwsNodePoolConfigProxyConfig) {
    this._proxyConfig.internalValue = value;
  }
  public resetProxyConfig() {
    this._proxyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigInput() {
    return this._proxyConfig.internalValue;
  }

  // root_volume - computed: false, optional: true, required: false
  private _rootVolume = new GoogleContainerAwsNodePoolConfigRootVolumeOutputReference(this, "root_volume");
  public get rootVolume() {
    return this._rootVolume;
  }
  public putRootVolume(value: GoogleContainerAwsNodePoolConfigRootVolume) {
    this._rootVolume.internalValue = value;
  }
  public resetRootVolume() {
    this._rootVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeInput() {
    return this._rootVolume.internalValue;
  }

  // ssh_config - computed: false, optional: true, required: false
  private _sshConfig = new GoogleContainerAwsNodePoolConfigSshConfigOutputReference(this, "ssh_config");
  public get sshConfig() {
    return this._sshConfig;
  }
  public putSshConfig(value: GoogleContainerAwsNodePoolConfigSshConfig) {
    this._sshConfig.internalValue = value;
  }
  public resetSshConfig() {
    this._sshConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshConfigInput() {
    return this._sshConfig.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints?: GoogleContainerAwsNodePoolConfigTaints[] | cdktf.IResolvable; 
  public get taints() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('taints');
  }
  public set taints(value: GoogleContainerAwsNodePoolConfigTaints[] | cdktf.IResolvable) {
    this._taints = value;
  }
  public resetTaints() {
    this._taints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints;
  }
}
export interface GoogleContainerAwsNodePoolMaxPodsConstraint {
  /**
  * The maximum number of pods to schedule on a single node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#max_pods_per_node GoogleContainerAwsNodePool#max_pods_per_node}
  */
  readonly maxPodsPerNode: number;
}

export function googleContainerAwsNodePoolMaxPodsConstraintToTerraform(struct?: GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference | GoogleContainerAwsNodePoolMaxPodsConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
  }
}

export class GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAwsNodePoolMaxPodsConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAwsNodePoolMaxPodsConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxPodsPerNode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxPodsPerNode = value.maxPodsPerNode;
    }
  }

  // max_pods_per_node - computed: false, optional: false, required: true
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }
}
export interface GoogleContainerAwsNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#create GoogleContainerAwsNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#delete GoogleContainerAwsNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool#update GoogleContainerAwsNodePool#update}
  */
  readonly update?: string;
}

export function googleContainerAwsNodePoolTimeoutsToTerraform(struct?: GoogleContainerAwsNodePoolTimeoutsOutputReference | GoogleContainerAwsNodePoolTimeouts | cdktf.IResolvable): any {
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

export class GoogleContainerAwsNodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAwsNodePoolTimeouts | undefined {
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

  public set internalValue(value: GoogleContainerAwsNodePoolTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool google_container_aws_node_pool}
*/
export class GoogleContainerAwsNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_aws_node_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_aws_node_pool google_container_aws_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleContainerAwsNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleContainerAwsNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_aws_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.21.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._annotations = config.annotations;
    this._cluster = config.cluster;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._subnetId = config.subnetId;
    this._version = config.version;
    this._autoscaling.internalValue = config.autoscaling;
    this._config.internalValue = config.config;
    this._maxPodsConstraint.internalValue = config.maxPodsConstraint;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // autoscaling - computed: false, optional: false, required: true
  private _autoscaling = new GoogleContainerAwsNodePoolAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: GoogleContainerAwsNodePoolAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // config - computed: false, optional: false, required: true
  private _config = new GoogleContainerAwsNodePoolConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleContainerAwsNodePoolConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // max_pods_constraint - computed: false, optional: false, required: true
  private _maxPodsConstraint = new GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference(this, "max_pods_constraint");
  public get maxPodsConstraint() {
    return this._maxPodsConstraint;
  }
  public putMaxPodsConstraint(value: GoogleContainerAwsNodePoolMaxPodsConstraint) {
    this._maxPodsConstraint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsConstraintInput() {
    return this._maxPodsConstraint.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleContainerAwsNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleContainerAwsNodePoolTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      cluster: cdktf.stringToTerraform(this._cluster),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      version: cdktf.stringToTerraform(this._version),
      autoscaling: googleContainerAwsNodePoolAutoscalingToTerraform(this._autoscaling.internalValue),
      config: googleContainerAwsNodePoolConfigAToTerraform(this._config.internalValue),
      max_pods_constraint: googleContainerAwsNodePoolMaxPodsConstraintToTerraform(this._maxPodsConstraint.internalValue),
      timeouts: googleContainerAwsNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
