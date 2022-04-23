// https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDialogflowCxEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_environment#description GoogleDialogflowCxEnvironment#description}
  */
  readonly description?: string;
  /**
  * The human-readable name of the environment (unique in an agent). Limit of 64 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_environment#display_name GoogleDialogflowCxEnvironment#display_name}
  */
  readonly displayName: string;
  /**
  * The Agent to create an Environment for. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_environment#parent GoogleDialogflowCxEnvironment#parent}
  */
  readonly parent?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_environment#timeouts GoogleDialogflowCxEnvironment#timeouts}
  */
  readonly timeouts?: GoogleDialogflowCxEnvironmentTimeouts;
  /**
  * version_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_environment#version_configs GoogleDialogflowCxEnvironment#version_configs}
  */
  readonly versionConfigs: GoogleDialogflowCxEnvironmentVersionConfigs[] | cdktf.IResolvable;
}
export interface GoogleDialogflowCxEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_environment#create GoogleDialogflowCxEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_environment#delete GoogleDialogflowCxEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_environment#update GoogleDialogflowCxEnvironment#update}
  */
  readonly update?: string;
}

export function googleDialogflowCxEnvironmentTimeoutsToTerraform(struct?: GoogleDialogflowCxEnvironmentTimeoutsOutputReference | GoogleDialogflowCxEnvironmentTimeouts | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxEnvironmentTimeouts | undefined {
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

  public set internalValue(value: GoogleDialogflowCxEnvironmentTimeouts | undefined) {
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
export interface GoogleDialogflowCxEnvironmentVersionConfigs {
  /**
  * Format: projects/{{project}}/locations/{{location}}/agents/{{agent}}/flows/{{flow}}/versions/{{version}}.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_environment#version GoogleDialogflowCxEnvironment#version}
  */
  readonly version: string;
}

export function googleDialogflowCxEnvironmentVersionConfigsToTerraform(struct?: GoogleDialogflowCxEnvironmentVersionConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_environment google_dialogflow_cx_environment}
*/
export class GoogleDialogflowCxEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_environment google_dialogflow_cx_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDialogflowCxEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDialogflowCxEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_environment',
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
    this._displayName = config.displayName;
    this._parent = config.parent;
    this._timeouts.internalValue = config.timeouts;
    this._versionConfigs = config.versionConfigs;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDialogflowCxEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDialogflowCxEnvironmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // version_configs - computed: false, optional: false, required: true
  private _versionConfigs?: GoogleDialogflowCxEnvironmentVersionConfigs[] | cdktf.IResolvable; 
  public get versionConfigs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('version_configs');
  }
  public set versionConfigs(value: GoogleDialogflowCxEnvironmentVersionConfigs[] | cdktf.IResolvable) {
    this._versionConfigs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionConfigsInput() {
    return this._versionConfigs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      parent: cdktf.stringToTerraform(this._parent),
      timeouts: googleDialogflowCxEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
      version_configs: cdktf.listMapper(googleDialogflowCxEnvironmentVersionConfigsToTerraform)(this._versionConfigs),
    };
  }
}