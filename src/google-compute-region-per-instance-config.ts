// https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeRegionPerInstanceConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#minimal_action GoogleComputeRegionPerInstanceConfig#minimal_action}
  */
  readonly minimalAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#most_disruptive_allowed_action GoogleComputeRegionPerInstanceConfig#most_disruptive_allowed_action}
  */
  readonly mostDisruptiveAllowedAction?: string;
  /**
  * The name for this per-instance config and its corresponding instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#name GoogleComputeRegionPerInstanceConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#project GoogleComputeRegionPerInstanceConfig#project}
  */
  readonly project?: string;
  /**
  * Region where the containing instance group manager is located
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#region GoogleComputeRegionPerInstanceConfig#region}
  */
  readonly region?: string;
  /**
  * The region instance group manager this instance config is part of.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#region_instance_group_manager GoogleComputeRegionPerInstanceConfig#region_instance_group_manager}
  */
  readonly regionInstanceGroupManager: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#remove_instance_state_on_destroy GoogleComputeRegionPerInstanceConfig#remove_instance_state_on_destroy}
  */
  readonly removeInstanceStateOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * preserved_state block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#preserved_state GoogleComputeRegionPerInstanceConfig#preserved_state}
  */
  readonly preservedState?: GoogleComputeRegionPerInstanceConfigPreservedState;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#timeouts GoogleComputeRegionPerInstanceConfig#timeouts}
  */
  readonly timeouts?: GoogleComputeRegionPerInstanceConfigTimeouts;
}
export interface GoogleComputeRegionPerInstanceConfigPreservedStateDisk {
  /**
  * A value that prescribes what should happen to the stateful disk when the VM instance is deleted.
The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#delete_rule GoogleComputeRegionPerInstanceConfig#delete_rule}
  */
  readonly deleteRule?: string;
  /**
  * A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#device_name GoogleComputeRegionPerInstanceConfig#device_name}
  */
  readonly deviceName: string;
  /**
  * The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#mode GoogleComputeRegionPerInstanceConfig#mode}
  */
  readonly mode?: string;
  /**
  * The URI of an existing persistent disk to attach under the specified device-name in the format
'projects/project-id/zones/zone/disks/disk-name'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#source GoogleComputeRegionPerInstanceConfig#source}
  */
  readonly source: string;
}

export function googleComputeRegionPerInstanceConfigPreservedStateDiskToTerraform(struct?: GoogleComputeRegionPerInstanceConfigPreservedStateDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_rule: cdktf.stringToTerraform(struct!.deleteRule),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    mode: cdktf.stringToTerraform(struct!.mode),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export interface GoogleComputeRegionPerInstanceConfigPreservedState {
  /**
  * Preserved metadata defined for this instance. This is a list of key->value pairs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#metadata GoogleComputeRegionPerInstanceConfig#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#disk GoogleComputeRegionPerInstanceConfig#disk}
  */
  readonly disk?: GoogleComputeRegionPerInstanceConfigPreservedStateDisk[] | cdktf.IResolvable;
}

export function googleComputeRegionPerInstanceConfigPreservedStateToTerraform(struct?: GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference | GoogleComputeRegionPerInstanceConfigPreservedState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    disk: cdktf.listMapper(googleComputeRegionPerInstanceConfigPreservedStateDiskToTerraform)(struct!.disk),
  }
}

export class GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionPerInstanceConfigPreservedState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionPerInstanceConfigPreservedState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
      this._disk = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
      this._disk = value.disk;
    }
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

  // disk - computed: false, optional: true, required: false
  private _disk?: GoogleComputeRegionPerInstanceConfigPreservedStateDisk[] | cdktf.IResolvable; 
  public get disk() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('disk')));
  }
  public set disk(value: GoogleComputeRegionPerInstanceConfigPreservedStateDisk[] | cdktf.IResolvable) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }
}
export interface GoogleComputeRegionPerInstanceConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#create GoogleComputeRegionPerInstanceConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#delete GoogleComputeRegionPerInstanceConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config#update GoogleComputeRegionPerInstanceConfig#update}
  */
  readonly update?: string;
}

export function googleComputeRegionPerInstanceConfigTimeoutsToTerraform(struct?: GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference | GoogleComputeRegionPerInstanceConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionPerInstanceConfigTimeouts | undefined {
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

  public set internalValue(value: GoogleComputeRegionPerInstanceConfigTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config google_compute_region_per_instance_config}
*/
export class GoogleComputeRegionPerInstanceConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_per_instance_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_per_instance_config google_compute_region_per_instance_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeRegionPerInstanceConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeRegionPerInstanceConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_per_instance_config',
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
    this._minimalAction = config.minimalAction;
    this._mostDisruptiveAllowedAction = config.mostDisruptiveAllowedAction;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._regionInstanceGroupManager = config.regionInstanceGroupManager;
    this._removeInstanceStateOnDestroy = config.removeInstanceStateOnDestroy;
    this._preservedState.internalValue = config.preservedState;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // minimal_action - computed: false, optional: true, required: false
  private _minimalAction?: string; 
  public get minimalAction() {
    return this.getStringAttribute('minimal_action');
  }
  public set minimalAction(value: string) {
    this._minimalAction = value;
  }
  public resetMinimalAction() {
    this._minimalAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalActionInput() {
    return this._minimalAction;
  }

  // most_disruptive_allowed_action - computed: false, optional: true, required: false
  private _mostDisruptiveAllowedAction?: string; 
  public get mostDisruptiveAllowedAction() {
    return this.getStringAttribute('most_disruptive_allowed_action');
  }
  public set mostDisruptiveAllowedAction(value: string) {
    this._mostDisruptiveAllowedAction = value;
  }
  public resetMostDisruptiveAllowedAction() {
    this._mostDisruptiveAllowedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostDisruptiveAllowedActionInput() {
    return this._mostDisruptiveAllowedAction;
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

  // region_instance_group_manager - computed: false, optional: false, required: true
  private _regionInstanceGroupManager?: string; 
  public get regionInstanceGroupManager() {
    return this.getStringAttribute('region_instance_group_manager');
  }
  public set regionInstanceGroupManager(value: string) {
    this._regionInstanceGroupManager = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInstanceGroupManagerInput() {
    return this._regionInstanceGroupManager;
  }

  // remove_instance_state_on_destroy - computed: false, optional: true, required: false
  private _removeInstanceStateOnDestroy?: boolean | cdktf.IResolvable; 
  public get removeInstanceStateOnDestroy() {
    return this.getBooleanAttribute('remove_instance_state_on_destroy');
  }
  public set removeInstanceStateOnDestroy(value: boolean | cdktf.IResolvable) {
    this._removeInstanceStateOnDestroy = value;
  }
  public resetRemoveInstanceStateOnDestroy() {
    this._removeInstanceStateOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInstanceStateOnDestroyInput() {
    return this._removeInstanceStateOnDestroy;
  }

  // preserved_state - computed: false, optional: true, required: false
  private _preservedState = new GoogleComputeRegionPerInstanceConfigPreservedStateOutputReference(this, "preserved_state");
  public get preservedState() {
    return this._preservedState;
  }
  public putPreservedState(value: GoogleComputeRegionPerInstanceConfigPreservedState) {
    this._preservedState.internalValue = value;
  }
  public resetPreservedState() {
    this._preservedState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preservedStateInput() {
    return this._preservedState.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeRegionPerInstanceConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeRegionPerInstanceConfigTimeouts) {
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
      minimal_action: cdktf.stringToTerraform(this._minimalAction),
      most_disruptive_allowed_action: cdktf.stringToTerraform(this._mostDisruptiveAllowedAction),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      region_instance_group_manager: cdktf.stringToTerraform(this._regionInstanceGroupManager),
      remove_instance_state_on_destroy: cdktf.booleanToTerraform(this._removeInstanceStateOnDestroy),
      preserved_state: googleComputeRegionPerInstanceConfigPreservedStateToTerraform(this._preservedState.internalValue),
      timeouts: googleComputeRegionPerInstanceConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}