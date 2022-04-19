// https://www.terraform.io/docs/providers/google-beta/r/google_iam_workload_identity_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleIamWorkloadIdentityPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the pool. Cannot exceed 256 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_workload_identity_pool#description GoogleIamWorkloadIdentityPool#description}
  */
  readonly description?: string;
  /**
  * Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use
existing tokens to access resources. If the pool is re-enabled, existing tokens grant
access again.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_workload_identity_pool#disabled GoogleIamWorkloadIdentityPool#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * A display name for the pool. Cannot exceed 32 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_workload_identity_pool#display_name GoogleIamWorkloadIdentityPool#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_workload_identity_pool#project GoogleIamWorkloadIdentityPool#project}
  */
  readonly project?: string;
  /**
  * The ID to use for the pool, which becomes the final component of the resource name. This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_workload_identity_pool#workload_identity_pool_id GoogleIamWorkloadIdentityPool#workload_identity_pool_id}
  */
  readonly workloadIdentityPoolId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_workload_identity_pool#timeouts GoogleIamWorkloadIdentityPool#timeouts}
  */
  readonly timeouts?: GoogleIamWorkloadIdentityPoolTimeouts;
}
export interface GoogleIamWorkloadIdentityPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_workload_identity_pool#create GoogleIamWorkloadIdentityPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_workload_identity_pool#delete GoogleIamWorkloadIdentityPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_workload_identity_pool#update GoogleIamWorkloadIdentityPool#update}
  */
  readonly update?: string;
}

export function googleIamWorkloadIdentityPoolTimeoutsToTerraform(struct?: GoogleIamWorkloadIdentityPoolTimeoutsOutputReference | GoogleIamWorkloadIdentityPoolTimeouts | cdktf.IResolvable): any {
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

export class GoogleIamWorkloadIdentityPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIamWorkloadIdentityPoolTimeouts | undefined {
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

  public set internalValue(value: GoogleIamWorkloadIdentityPoolTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_workload_identity_pool google_iam_workload_identity_pool}
*/
export class GoogleIamWorkloadIdentityPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_workload_identity_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_workload_identity_pool google_iam_workload_identity_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleIamWorkloadIdentityPoolConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleIamWorkloadIdentityPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_workload_identity_pool',
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
    this._description = config.description;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._project = config.project;
    this._workloadIdentityPoolId = config.workloadIdentityPoolId;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // workload_identity_pool_id - computed: false, optional: false, required: true
  private _workloadIdentityPoolId?: string; 
  public get workloadIdentityPoolId() {
    return this.getStringAttribute('workload_identity_pool_id');
  }
  public set workloadIdentityPoolId(value: string) {
    this._workloadIdentityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityPoolIdInput() {
    return this._workloadIdentityPoolId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleIamWorkloadIdentityPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleIamWorkloadIdentityPoolTimeouts) {
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
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      project: cdktf.stringToTerraform(this._project),
      workload_identity_pool_id: cdktf.stringToTerraform(this._workloadIdentityPoolId),
      timeouts: googleIamWorkloadIdentityPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
