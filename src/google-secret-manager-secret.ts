// https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleSecretManagerSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Timestamp in UTC when the Secret is scheduled to expire. This is always provided on output, regardless of what was sent on input.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#expire_time GoogleSecretManagerSecret#expire_time}
  */
  readonly expireTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#id GoogleSecretManagerSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels assigned to this Secret.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#labels GoogleSecretManagerSecret#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#project GoogleSecretManagerSecret#project}
  */
  readonly project?: string;
  /**
  * This must be unique within the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#secret_id GoogleSecretManagerSecret#secret_id}
  */
  readonly secretId: string;
  /**
  * The TTL for the Secret.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#ttl GoogleSecretManagerSecret#ttl}
  */
  readonly ttl?: string;
  /**
  * replication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#replication GoogleSecretManagerSecret#replication}
  */
  readonly replication: GoogleSecretManagerSecretReplication;
  /**
  * rotation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#rotation GoogleSecretManagerSecret#rotation}
  */
  readonly rotation?: GoogleSecretManagerSecretRotation;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#timeouts GoogleSecretManagerSecret#timeouts}
  */
  readonly timeouts?: GoogleSecretManagerSecretTimeouts;
  /**
  * topics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#topics GoogleSecretManagerSecret#topics}
  */
  readonly topics?: GoogleSecretManagerSecretTopics[] | cdktf.IResolvable;
}
export interface GoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption {
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination secret.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#kms_key_name GoogleSecretManagerSecret#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionToTerraform(struct?: GoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference | GoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class GoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface GoogleSecretManagerSecretReplicationUserManagedReplicas {
  /**
  * The canonical IDs of the location to replicate data. For example: "us-east1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#location GoogleSecretManagerSecret#location}
  */
  readonly location: string;
  /**
  * customer_managed_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#customer_managed_encryption GoogleSecretManagerSecret#customer_managed_encryption}
  */
  readonly customerManagedEncryption?: GoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption;
}

export function googleSecretManagerSecretReplicationUserManagedReplicasToTerraform(struct?: GoogleSecretManagerSecretReplicationUserManagedReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    customer_managed_encryption: googleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionToTerraform(struct!.customerManagedEncryption),
  }
}

export class GoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleSecretManagerSecretReplicationUserManagedReplicas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._customerManagedEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerManagedEncryption = this._customerManagedEncryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecretManagerSecretReplicationUserManagedReplicas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._customerManagedEncryption.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._customerManagedEncryption.internalValue = value.customerManagedEncryption;
    }
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

  // customer_managed_encryption - computed: false, optional: true, required: false
  private _customerManagedEncryption = new GoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference(this, "customer_managed_encryption");
  public get customerManagedEncryption() {
    return this._customerManagedEncryption;
  }
  public putCustomerManagedEncryption(value: GoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption) {
    this._customerManagedEncryption.internalValue = value;
  }
  public resetCustomerManagedEncryption() {
    this._customerManagedEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedEncryptionInput() {
    return this._customerManagedEncryption.internalValue;
  }
}

export class GoogleSecretManagerSecretReplicationUserManagedReplicasList extends cdktf.ComplexList {
  public internalValue? : GoogleSecretManagerSecretReplicationUserManagedReplicas[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference {
    return new GoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSecretManagerSecretReplicationUserManaged {
  /**
  * replicas block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#replicas GoogleSecretManagerSecret#replicas}
  */
  readonly replicas: GoogleSecretManagerSecretReplicationUserManagedReplicas[] | cdktf.IResolvable;
}

export function googleSecretManagerSecretReplicationUserManagedToTerraform(struct?: GoogleSecretManagerSecretReplicationUserManagedOutputReference | GoogleSecretManagerSecretReplicationUserManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replicas: cdktf.listMapper(googleSecretManagerSecretReplicationUserManagedReplicasToTerraform)(struct!.replicas),
  }
}

export class GoogleSecretManagerSecretReplicationUserManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecretManagerSecretReplicationUserManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecretManagerSecretReplicationUserManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._replicas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._replicas.internalValue = value.replicas;
    }
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas = new GoogleSecretManagerSecretReplicationUserManagedReplicasList(this, "replicas", false);
  public get replicas() {
    return this._replicas;
  }
  public putReplicas(value: GoogleSecretManagerSecretReplicationUserManagedReplicas[] | cdktf.IResolvable) {
    this._replicas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas.internalValue;
  }
}
export interface GoogleSecretManagerSecretReplication {
  /**
  * The Secret will automatically be replicated without any restrictions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#automatic GoogleSecretManagerSecret#automatic}
  */
  readonly automatic?: boolean | cdktf.IResolvable;
  /**
  * user_managed block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#user_managed GoogleSecretManagerSecret#user_managed}
  */
  readonly userManaged?: GoogleSecretManagerSecretReplicationUserManaged;
}

export function googleSecretManagerSecretReplicationToTerraform(struct?: GoogleSecretManagerSecretReplicationOutputReference | GoogleSecretManagerSecretReplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic: cdktf.booleanToTerraform(struct!.automatic),
    user_managed: googleSecretManagerSecretReplicationUserManagedToTerraform(struct!.userManaged),
  }
}

export class GoogleSecretManagerSecretReplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecretManagerSecretReplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic;
    }
    if (this._userManaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userManaged = this._userManaged?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecretManagerSecretReplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automatic = undefined;
      this._userManaged.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automatic = value.automatic;
      this._userManaged.internalValue = value.userManaged;
    }
  }

  // automatic - computed: false, optional: true, required: false
  private _automatic?: boolean | cdktf.IResolvable; 
  public get automatic() {
    return this.getBooleanAttribute('automatic');
  }
  public set automatic(value: boolean | cdktf.IResolvable) {
    this._automatic = value;
  }
  public resetAutomatic() {
    this._automatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic;
  }

  // user_managed - computed: false, optional: true, required: false
  private _userManaged = new GoogleSecretManagerSecretReplicationUserManagedOutputReference(this, "user_managed");
  public get userManaged() {
    return this._userManaged;
  }
  public putUserManaged(value: GoogleSecretManagerSecretReplicationUserManaged) {
    this._userManaged.internalValue = value;
  }
  public resetUserManaged() {
    this._userManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userManagedInput() {
    return this._userManaged.internalValue;
  }
}
export interface GoogleSecretManagerSecretRotation {
  /**
  * Timestamp in UTC at which the Secret is scheduled to rotate.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#next_rotation_time GoogleSecretManagerSecret#next_rotation_time}
  */
  readonly nextRotationTime?: string;
  /**
  * The Duration between rotation notifications. Must be in seconds and at least 3600s (1h) and at most 3153600000s (100 years).
If rotationPeriod is set, 'next_rotation_time' must be set. 'next_rotation_time' will be advanced by this period when the service automatically sends rotation notifications.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#rotation_period GoogleSecretManagerSecret#rotation_period}
  */
  readonly rotationPeriod?: string;
}

export function googleSecretManagerSecretRotationToTerraform(struct?: GoogleSecretManagerSecretRotationOutputReference | GoogleSecretManagerSecretRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_rotation_time: cdktf.stringToTerraform(struct!.nextRotationTime),
    rotation_period: cdktf.stringToTerraform(struct!.rotationPeriod),
  }
}

export class GoogleSecretManagerSecretRotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecretManagerSecretRotation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextRotationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextRotationTime = this._nextRotationTime;
    }
    if (this._rotationPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationPeriod = this._rotationPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecretManagerSecretRotation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nextRotationTime = undefined;
      this._rotationPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nextRotationTime = value.nextRotationTime;
      this._rotationPeriod = value.rotationPeriod;
    }
  }

  // next_rotation_time - computed: false, optional: true, required: false
  private _nextRotationTime?: string; 
  public get nextRotationTime() {
    return this.getStringAttribute('next_rotation_time');
  }
  public set nextRotationTime(value: string) {
    this._nextRotationTime = value;
  }
  public resetNextRotationTime() {
    this._nextRotationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextRotationTimeInput() {
    return this._nextRotationTime;
  }

  // rotation_period - computed: false, optional: true, required: false
  private _rotationPeriod?: string; 
  public get rotationPeriod() {
    return this.getStringAttribute('rotation_period');
  }
  public set rotationPeriod(value: string) {
    this._rotationPeriod = value;
  }
  public resetRotationPeriod() {
    this._rotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }
}
export interface GoogleSecretManagerSecretTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#create GoogleSecretManagerSecret#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#delete GoogleSecretManagerSecret#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#update GoogleSecretManagerSecret#update}
  */
  readonly update?: string;
}

export function googleSecretManagerSecretTimeoutsToTerraform(struct?: GoogleSecretManagerSecretTimeoutsOutputReference | GoogleSecretManagerSecretTimeouts | cdktf.IResolvable): any {
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

export class GoogleSecretManagerSecretTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecretManagerSecretTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleSecretManagerSecretTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleSecretManagerSecretTopics {
  /**
  * The resource name of the Pub/Sub topic that will be published to, in the following format: projects/*\/topics/*.
For publication to succeed, the Secret Manager Service Agent service account must have pubsub.publisher permissions on the topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret#name GoogleSecretManagerSecret#name}
  */
  readonly name: string;
}

export function googleSecretManagerSecretTopicsToTerraform(struct?: GoogleSecretManagerSecretTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class GoogleSecretManagerSecretTopicsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleSecretManagerSecretTopics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecretManagerSecretTopics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class GoogleSecretManagerSecretTopicsList extends cdktf.ComplexList {
  public internalValue? : GoogleSecretManagerSecretTopics[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleSecretManagerSecretTopicsOutputReference {
    return new GoogleSecretManagerSecretTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret google_secret_manager_secret}
*/
export class GoogleSecretManagerSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_secret_manager_secret";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret google_secret_manager_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleSecretManagerSecretConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleSecretManagerSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'google_secret_manager_secret',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.24.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._expireTime = config.expireTime;
    this._id = config.id;
    this._labels = config.labels;
    this._project = config.project;
    this._secretId = config.secretId;
    this._ttl = config.ttl;
    this._replication.internalValue = config.replication;
    this._rotation.internalValue = config.rotation;
    this._timeouts.internalValue = config.timeouts;
    this._topics.internalValue = config.topics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expire_time - computed: true, optional: true, required: false
  private _expireTime?: string; 
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }

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

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // replication - computed: false, optional: false, required: true
  private _replication = new GoogleSecretManagerSecretReplicationOutputReference(this, "replication");
  public get replication() {
    return this._replication;
  }
  public putReplication(value: GoogleSecretManagerSecretReplication) {
    this._replication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInput() {
    return this._replication.internalValue;
  }

  // rotation - computed: false, optional: true, required: false
  private _rotation = new GoogleSecretManagerSecretRotationOutputReference(this, "rotation");
  public get rotation() {
    return this._rotation;
  }
  public putRotation(value: GoogleSecretManagerSecretRotation) {
    this._rotation.internalValue = value;
  }
  public resetRotation() {
    this._rotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationInput() {
    return this._rotation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleSecretManagerSecretTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleSecretManagerSecretTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // topics - computed: false, optional: true, required: false
  private _topics = new GoogleSecretManagerSecretTopicsList(this, "topics", false);
  public get topics() {
    return this._topics;
  }
  public putTopics(value: GoogleSecretManagerSecretTopics[] | cdktf.IResolvable) {
    this._topics.internalValue = value;
  }
  public resetTopics() {
    this._topics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expire_time: cdktf.stringToTerraform(this._expireTime),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      project: cdktf.stringToTerraform(this._project),
      secret_id: cdktf.stringToTerraform(this._secretId),
      ttl: cdktf.stringToTerraform(this._ttl),
      replication: googleSecretManagerSecretReplicationToTerraform(this._replication.internalValue),
      rotation: googleSecretManagerSecretRotationToTerraform(this._rotation.internalValue),
      timeouts: googleSecretManagerSecretTimeoutsToTerraform(this._timeouts.internalValue),
      topics: cdktf.listMapper(googleSecretManagerSecretTopicsToTerraform)(this._topics.internalValue),
    };
  }
}
