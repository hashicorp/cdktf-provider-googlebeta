// https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleVertexAiDatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user-defined name of the Dataset. The name can be up to 128 characters long and can be consist of any UTF-8 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_dataset#display_name GoogleVertexAiDataset#display_name}
  */
  readonly displayName: string;
  /**
  * A set of key/value label pairs to assign to this Workflow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_dataset#labels GoogleVertexAiDataset#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in gs://google-cloud-aiplatform/schema/dataset/metadata/.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_dataset#metadata_schema_uri GoogleVertexAiDataset#metadata_schema_uri}
  */
  readonly metadataSchemaUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_dataset#project GoogleVertexAiDataset#project}
  */
  readonly project?: string;
  /**
  * The region of the dataset. eg us-central1
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_dataset#region GoogleVertexAiDataset#region}
  */
  readonly region?: string;
  /**
  * encryption_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_dataset#encryption_spec GoogleVertexAiDataset#encryption_spec}
  */
  readonly encryptionSpec?: GoogleVertexAiDatasetEncryptionSpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_dataset#timeouts GoogleVertexAiDataset#timeouts}
  */
  readonly timeouts?: GoogleVertexAiDatasetTimeouts;
}
export interface GoogleVertexAiDatasetEncryptionSpec {
  /**
  * Required. The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. 
Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the resource is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_dataset#kms_key_name GoogleVertexAiDataset#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

export function googleVertexAiDatasetEncryptionSpecToTerraform(struct?: GoogleVertexAiDatasetEncryptionSpecOutputReference | GoogleVertexAiDatasetEncryptionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class GoogleVertexAiDatasetEncryptionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiDatasetEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiDatasetEncryptionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
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
}
export interface GoogleVertexAiDatasetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_dataset#create GoogleVertexAiDataset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_dataset#delete GoogleVertexAiDataset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_dataset#update GoogleVertexAiDataset#update}
  */
  readonly update?: string;
}

export function googleVertexAiDatasetTimeoutsToTerraform(struct?: GoogleVertexAiDatasetTimeoutsOutputReference | GoogleVertexAiDatasetTimeouts | cdktf.IResolvable): any {
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

export class GoogleVertexAiDatasetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiDatasetTimeouts | undefined {
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

  public set internalValue(value: GoogleVertexAiDatasetTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_dataset google_vertex_ai_dataset}
*/
export class GoogleVertexAiDataset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_dataset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_dataset google_vertex_ai_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_dataset',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.17.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._labels = config.labels;
    this._metadataSchemaUri = config.metadataSchemaUri;
    this._project = config.project;
    this._region = config.region;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
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

  // metadata_schema_uri - computed: false, optional: false, required: true
  private _metadataSchemaUri?: string; 
  public get metadataSchemaUri() {
    return this.getStringAttribute('metadata_schema_uri');
  }
  public set metadataSchemaUri(value: string) {
    this._metadataSchemaUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSchemaUriInput() {
    return this._metadataSchemaUri;
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

  // region - computed: true, optional: true, required: false
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new GoogleVertexAiDatasetEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: GoogleVertexAiDatasetEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiDatasetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiDatasetTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      metadata_schema_uri: cdktf.stringToTerraform(this._metadataSchemaUri),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      encryption_spec: googleVertexAiDatasetEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      timeouts: googleVertexAiDatasetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
