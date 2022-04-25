// https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleStorageBucketObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the containing bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#bucket GoogleStorageBucketObject#bucket}
  */
  readonly bucket: string;
  /**
  * Cache-Control directive to specify caching behavior of object data. If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#cache_control GoogleStorageBucketObject#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * Data as string to be uploaded. Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#content GoogleStorageBucketObject#content}
  */
  readonly content?: string;
  /**
  * Content-Disposition of the object data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#content_disposition GoogleStorageBucketObject#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Content-Encoding of the object data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#content_encoding GoogleStorageBucketObject#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Content-Language of the object data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#content_language GoogleStorageBucketObject#content_language}
  */
  readonly contentLanguage?: string;
  /**
  * Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#content_type GoogleStorageBucketObject#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#detect_md5hash GoogleStorageBucketObject#detect_md5hash}
  */
  readonly detectMd5Hash?: string;
  /**
  * Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#event_based_hold GoogleStorageBucketObject#event_based_hold}
  */
  readonly eventBasedHold?: boolean | cdktf.IResolvable;
  /**
  * Resource name of the Cloud KMS key that will be used to encrypt the object. Overrides the object metadata's kmsKeyName value, if any.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#kms_key_name GoogleStorageBucketObject#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * User-provided metadata, in key/value pairs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#metadata GoogleStorageBucketObject#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The name of the object. If you're interpolating the name of this object, see output_name instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#name GoogleStorageBucketObject#name}
  */
  readonly name: string;
  /**
  * A path to the data you want to upload. Must be defined if content is not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#source GoogleStorageBucketObject#source}
  */
  readonly source?: string;
  /**
  * The StorageClass of the new bucket object. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#storage_class GoogleStorageBucketObject#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#temporary_hold GoogleStorageBucketObject#temporary_hold}
  */
  readonly temporaryHold?: boolean | cdktf.IResolvable;
  /**
  * customer_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#customer_encryption GoogleStorageBucketObject#customer_encryption}
  */
  readonly customerEncryption?: GoogleStorageBucketObjectCustomerEncryption;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#timeouts GoogleStorageBucketObject#timeouts}
  */
  readonly timeouts?: GoogleStorageBucketObjectTimeouts;
}
export interface GoogleStorageBucketObjectCustomerEncryption {
  /**
  * The encryption algorithm. Default: AES256
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#encryption_algorithm GoogleStorageBucketObject#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Base64 encoded customer supplied encryption key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#encryption_key GoogleStorageBucketObject#encryption_key}
  */
  readonly encryptionKey: string;
}

export function googleStorageBucketObjectCustomerEncryptionToTerraform(struct?: GoogleStorageBucketObjectCustomerEncryptionOutputReference | GoogleStorageBucketObjectCustomerEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
  }
}

export class GoogleStorageBucketObjectCustomerEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketObjectCustomerEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageBucketObjectCustomerEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionAlgorithm = undefined;
      this._encryptionKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._encryptionKey = value.encryptionKey;
    }
  }

  // encryption_algorithm - computed: false, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // encryption_key - computed: false, optional: false, required: true
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }
}
export interface GoogleStorageBucketObjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#create GoogleStorageBucketObject#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#delete GoogleStorageBucketObject#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object#update GoogleStorageBucketObject#update}
  */
  readonly update?: string;
}

export function googleStorageBucketObjectTimeoutsToTerraform(struct?: GoogleStorageBucketObjectTimeoutsOutputReference | GoogleStorageBucketObjectTimeouts | cdktf.IResolvable): any {
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

export class GoogleStorageBucketObjectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageBucketObjectTimeouts | undefined {
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

  public set internalValue(value: GoogleStorageBucketObjectTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object google_storage_bucket_object}
*/
export class GoogleStorageBucketObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_bucket_object";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_object google_storage_bucket_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleStorageBucketObjectConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleStorageBucketObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_bucket_object',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.19.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._cacheControl = config.cacheControl;
    this._content = config.content;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentType = config.contentType;
    this._detectMd5Hash = config.detectMd5Hash;
    this._eventBasedHold = config.eventBasedHold;
    this._kmsKeyName = config.kmsKeyName;
    this._metadata = config.metadata;
    this._name = config.name;
    this._source = config.source;
    this._storageClass = config.storageClass;
    this._temporaryHold = config.temporaryHold;
    this._customerEncryption.internalValue = config.customerEncryption;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string; 
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string; 
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string; 
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }
  public set contentLanguage(value: string) {
    this._contentLanguage = value;
  }
  public resetContentLanguage() {
    this._contentLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLanguageInput() {
    return this._contentLanguage;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // crc32c - computed: true, optional: false, required: false
  public get crc32C() {
    return this.getStringAttribute('crc32c');
  }

  // detect_md5hash - computed: false, optional: true, required: false
  private _detectMd5Hash?: string; 
  public get detectMd5Hash() {
    return this.getStringAttribute('detect_md5hash');
  }
  public set detectMd5Hash(value: string) {
    this._detectMd5Hash = value;
  }
  public resetDetectMd5Hash() {
    this._detectMd5Hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectMd5HashInput() {
    return this._detectMd5Hash;
  }

  // event_based_hold - computed: false, optional: true, required: false
  private _eventBasedHold?: boolean | cdktf.IResolvable; 
  public get eventBasedHold() {
    return this.getBooleanAttribute('event_based_hold');
  }
  public set eventBasedHold(value: boolean | cdktf.IResolvable) {
    this._eventBasedHold = value;
  }
  public resetEventBasedHold() {
    this._eventBasedHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBasedHoldInput() {
    return this._eventBasedHold;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_name - computed: true, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // md5hash - computed: true, optional: false, required: false
  public get md5Hash() {
    return this.getStringAttribute('md5hash');
  }

  // media_link - computed: true, optional: false, required: false
  public get mediaLink() {
    return this.getStringAttribute('media_link');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // output_name - computed: true, optional: false, required: false
  public get outputName() {
    return this.getStringAttribute('output_name');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // temporary_hold - computed: false, optional: true, required: false
  private _temporaryHold?: boolean | cdktf.IResolvable; 
  public get temporaryHold() {
    return this.getBooleanAttribute('temporary_hold');
  }
  public set temporaryHold(value: boolean | cdktf.IResolvable) {
    this._temporaryHold = value;
  }
  public resetTemporaryHold() {
    this._temporaryHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryHoldInput() {
    return this._temporaryHold;
  }

  // customer_encryption - computed: false, optional: true, required: false
  private _customerEncryption = new GoogleStorageBucketObjectCustomerEncryptionOutputReference(this, "customer_encryption");
  public get customerEncryption() {
    return this._customerEncryption;
  }
  public putCustomerEncryption(value: GoogleStorageBucketObjectCustomerEncryption) {
    this._customerEncryption.internalValue = value;
  }
  public resetCustomerEncryption() {
    this._customerEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerEncryptionInput() {
    return this._customerEncryption.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleStorageBucketObjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleStorageBucketObjectTimeouts) {
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
      bucket: cdktf.stringToTerraform(this._bucket),
      cache_control: cdktf.stringToTerraform(this._cacheControl),
      content: cdktf.stringToTerraform(this._content),
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      content_language: cdktf.stringToTerraform(this._contentLanguage),
      content_type: cdktf.stringToTerraform(this._contentType),
      detect_md5hash: cdktf.stringToTerraform(this._detectMd5Hash),
      event_based_hold: cdktf.booleanToTerraform(this._eventBasedHold),
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      source: cdktf.stringToTerraform(this._source),
      storage_class: cdktf.stringToTerraform(this._storageClass),
      temporary_hold: cdktf.booleanToTerraform(this._temporaryHold),
      customer_encryption: googleStorageBucketObjectCustomerEncryptionToTerraform(this._customerEncryption.internalValue),
      timeouts: googleStorageBucketObjectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
