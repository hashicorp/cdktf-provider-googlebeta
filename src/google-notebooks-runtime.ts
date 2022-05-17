// https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleNotebooksRuntimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A reference to the zone where the machine resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#location GoogleNotebooksRuntime#location}
  */
  readonly location: string;
  /**
  * The name specified for the Notebook instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#name GoogleNotebooksRuntime#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#project GoogleNotebooksRuntime#project}
  */
  readonly project?: string;
  /**
  * access_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#access_config GoogleNotebooksRuntime#access_config}
  */
  readonly accessConfig?: GoogleNotebooksRuntimeAccessConfig;
  /**
  * software_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#software_config GoogleNotebooksRuntime#software_config}
  */
  readonly softwareConfig?: GoogleNotebooksRuntimeSoftwareConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#timeouts GoogleNotebooksRuntime#timeouts}
  */
  readonly timeouts?: GoogleNotebooksRuntimeTimeouts;
  /**
  * virtual_machine block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#virtual_machine GoogleNotebooksRuntime#virtual_machine}
  */
  readonly virtualMachine?: GoogleNotebooksRuntimeVirtualMachine;
}
export interface GoogleNotebooksRuntimeMetrics {
}

export function googleNotebooksRuntimeMetricsToTerraform(struct?: GoogleNotebooksRuntimeMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleNotebooksRuntimeMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleNotebooksRuntimeMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNotebooksRuntimeMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // system_metrics - computed: true, optional: false, required: false
  public systemMetrics(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'system_metrics').lookup(key);
  }
}

export class GoogleNotebooksRuntimeMetricsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleNotebooksRuntimeMetricsOutputReference {
    return new GoogleNotebooksRuntimeMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNotebooksRuntimeAccessConfig {
  /**
  * The type of access mode this instance. For valid values, see
'https://cloud.google.com/vertex-ai/docs/workbench/reference/
rest/v1/projects.locations.runtimes#RuntimeAccessType'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#access_type GoogleNotebooksRuntime#access_type}
  */
  readonly accessType?: string;
  /**
  * The owner of this runtime after creation. Format: 'alias@example.com'.
Currently supports one owner only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#runtime_owner GoogleNotebooksRuntime#runtime_owner}
  */
  readonly runtimeOwner?: string;
}

export function googleNotebooksRuntimeAccessConfigToTerraform(struct?: GoogleNotebooksRuntimeAccessConfigOutputReference | GoogleNotebooksRuntimeAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_type: cdktf.stringToTerraform(struct!.accessType),
    runtime_owner: cdktf.stringToTerraform(struct!.runtimeOwner),
  }
}

export class GoogleNotebooksRuntimeAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNotebooksRuntimeAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._runtimeOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeOwner = this._runtimeOwner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNotebooksRuntimeAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessType = undefined;
      this._runtimeOwner = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessType = value.accessType;
      this._runtimeOwner = value.runtimeOwner;
    }
  }

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // proxy_uri - computed: true, optional: false, required: false
  public get proxyUri() {
    return this.getStringAttribute('proxy_uri');
  }

  // runtime_owner - computed: false, optional: true, required: false
  private _runtimeOwner?: string; 
  public get runtimeOwner() {
    return this.getStringAttribute('runtime_owner');
  }
  public set runtimeOwner(value: string) {
    this._runtimeOwner = value;
  }
  public resetRuntimeOwner() {
    this._runtimeOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeOwnerInput() {
    return this._runtimeOwner;
  }
}
export interface GoogleNotebooksRuntimeSoftwareConfig {
  /**
  * Specify a custom Cloud Storage path where the GPU driver is stored.
If not specified, we'll automatically choose from official GPU drivers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#custom_gpu_driver_path GoogleNotebooksRuntime#custom_gpu_driver_path}
  */
  readonly customGpuDriverPath?: string;
  /**
  * Verifies core internal services are running. Default: True.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#enable_health_monitoring GoogleNotebooksRuntime#enable_health_monitoring}
  */
  readonly enableHealthMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Runtime will automatically shutdown after idle_shutdown_time.
Default: True
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#idle_shutdown GoogleNotebooksRuntime#idle_shutdown}
  */
  readonly idleShutdown?: boolean | cdktf.IResolvable;
  /**
  * Time in minutes to wait before shuting down runtime.
Default: 180 minutes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#idle_shutdown_timeout GoogleNotebooksRuntime#idle_shutdown_timeout}
  */
  readonly idleShutdownTimeout?: number;
  /**
  * Install Nvidia Driver automatically.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#install_gpu_driver GoogleNotebooksRuntime#install_gpu_driver}
  */
  readonly installGpuDriver?: boolean | cdktf.IResolvable;
  /**
  * Cron expression in UTC timezone for schedule instance auto upgrade.
Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#notebook_upgrade_schedule GoogleNotebooksRuntime#notebook_upgrade_schedule}
  */
  readonly notebookUpgradeSchedule?: string;
  /**
  * Path to a Bash script that automatically runs after a notebook instance
fully boots up. The path must be a URL or
Cloud Storage path (gs://path-to-file/file-name).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#post_startup_script GoogleNotebooksRuntime#post_startup_script}
  */
  readonly postStartupScript?: string;
}

export function googleNotebooksRuntimeSoftwareConfigToTerraform(struct?: GoogleNotebooksRuntimeSoftwareConfigOutputReference | GoogleNotebooksRuntimeSoftwareConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_gpu_driver_path: cdktf.stringToTerraform(struct!.customGpuDriverPath),
    enable_health_monitoring: cdktf.booleanToTerraform(struct!.enableHealthMonitoring),
    idle_shutdown: cdktf.booleanToTerraform(struct!.idleShutdown),
    idle_shutdown_timeout: cdktf.numberToTerraform(struct!.idleShutdownTimeout),
    install_gpu_driver: cdktf.booleanToTerraform(struct!.installGpuDriver),
    notebook_upgrade_schedule: cdktf.stringToTerraform(struct!.notebookUpgradeSchedule),
    post_startup_script: cdktf.stringToTerraform(struct!.postStartupScript),
  }
}

export class GoogleNotebooksRuntimeSoftwareConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNotebooksRuntimeSoftwareConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customGpuDriverPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGpuDriverPath = this._customGpuDriverPath;
    }
    if (this._enableHealthMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHealthMonitoring = this._enableHealthMonitoring;
    }
    if (this._idleShutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleShutdown = this._idleShutdown;
    }
    if (this._idleShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleShutdownTimeout = this._idleShutdownTimeout;
    }
    if (this._installGpuDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.installGpuDriver = this._installGpuDriver;
    }
    if (this._notebookUpgradeSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookUpgradeSchedule = this._notebookUpgradeSchedule;
    }
    if (this._postStartupScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStartupScript = this._postStartupScript;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNotebooksRuntimeSoftwareConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customGpuDriverPath = undefined;
      this._enableHealthMonitoring = undefined;
      this._idleShutdown = undefined;
      this._idleShutdownTimeout = undefined;
      this._installGpuDriver = undefined;
      this._notebookUpgradeSchedule = undefined;
      this._postStartupScript = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customGpuDriverPath = value.customGpuDriverPath;
      this._enableHealthMonitoring = value.enableHealthMonitoring;
      this._idleShutdown = value.idleShutdown;
      this._idleShutdownTimeout = value.idleShutdownTimeout;
      this._installGpuDriver = value.installGpuDriver;
      this._notebookUpgradeSchedule = value.notebookUpgradeSchedule;
      this._postStartupScript = value.postStartupScript;
    }
  }

  // custom_gpu_driver_path - computed: false, optional: true, required: false
  private _customGpuDriverPath?: string; 
  public get customGpuDriverPath() {
    return this.getStringAttribute('custom_gpu_driver_path');
  }
  public set customGpuDriverPath(value: string) {
    this._customGpuDriverPath = value;
  }
  public resetCustomGpuDriverPath() {
    this._customGpuDriverPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGpuDriverPathInput() {
    return this._customGpuDriverPath;
  }

  // enable_health_monitoring - computed: false, optional: true, required: false
  private _enableHealthMonitoring?: boolean | cdktf.IResolvable; 
  public get enableHealthMonitoring() {
    return this.getBooleanAttribute('enable_health_monitoring');
  }
  public set enableHealthMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableHealthMonitoring = value;
  }
  public resetEnableHealthMonitoring() {
    this._enableHealthMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHealthMonitoringInput() {
    return this._enableHealthMonitoring;
  }

  // idle_shutdown - computed: false, optional: true, required: false
  private _idleShutdown?: boolean | cdktf.IResolvable; 
  public get idleShutdown() {
    return this.getBooleanAttribute('idle_shutdown');
  }
  public set idleShutdown(value: boolean | cdktf.IResolvable) {
    this._idleShutdown = value;
  }
  public resetIdleShutdown() {
    this._idleShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleShutdownInput() {
    return this._idleShutdown;
  }

  // idle_shutdown_timeout - computed: false, optional: true, required: false
  private _idleShutdownTimeout?: number; 
  public get idleShutdownTimeout() {
    return this.getNumberAttribute('idle_shutdown_timeout');
  }
  public set idleShutdownTimeout(value: number) {
    this._idleShutdownTimeout = value;
  }
  public resetIdleShutdownTimeout() {
    this._idleShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleShutdownTimeoutInput() {
    return this._idleShutdownTimeout;
  }

  // install_gpu_driver - computed: false, optional: true, required: false
  private _installGpuDriver?: boolean | cdktf.IResolvable; 
  public get installGpuDriver() {
    return this.getBooleanAttribute('install_gpu_driver');
  }
  public set installGpuDriver(value: boolean | cdktf.IResolvable) {
    this._installGpuDriver = value;
  }
  public resetInstallGpuDriver() {
    this._installGpuDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installGpuDriverInput() {
    return this._installGpuDriver;
  }

  // notebook_upgrade_schedule - computed: false, optional: true, required: false
  private _notebookUpgradeSchedule?: string; 
  public get notebookUpgradeSchedule() {
    return this.getStringAttribute('notebook_upgrade_schedule');
  }
  public set notebookUpgradeSchedule(value: string) {
    this._notebookUpgradeSchedule = value;
  }
  public resetNotebookUpgradeSchedule() {
    this._notebookUpgradeSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookUpgradeScheduleInput() {
    return this._notebookUpgradeSchedule;
  }

  // post_startup_script - computed: false, optional: true, required: false
  private _postStartupScript?: string; 
  public get postStartupScript() {
    return this.getStringAttribute('post_startup_script');
  }
  public set postStartupScript(value: string) {
    this._postStartupScript = value;
  }
  public resetPostStartupScript() {
    this._postStartupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartupScriptInput() {
    return this._postStartupScript;
  }
}
export interface GoogleNotebooksRuntimeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#create GoogleNotebooksRuntime#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#delete GoogleNotebooksRuntime#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#update GoogleNotebooksRuntime#update}
  */
  readonly update?: string;
}

export function googleNotebooksRuntimeTimeoutsToTerraform(struct?: GoogleNotebooksRuntimeTimeoutsOutputReference | GoogleNotebooksRuntimeTimeouts | cdktf.IResolvable): any {
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

export class GoogleNotebooksRuntimeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNotebooksRuntimeTimeouts | undefined {
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

  public set internalValue(value: GoogleNotebooksRuntimeTimeouts | undefined) {
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
export interface GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig {
  /**
  * Count of cores of this accelerator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#core_count GoogleNotebooksRuntime#core_count}
  */
  readonly coreCount?: number;
  /**
  * Accelerator model. For valid values, see
'https://cloud.google.com/vertex-ai/docs/workbench/reference/
rest/v1/projects.locations.runtimes#AcceleratorType'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#type GoogleNotebooksRuntime#type}
  */
  readonly type?: string;
}

export function googleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigToTerraform(struct?: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference | GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_count: cdktf.numberToTerraform(struct!.coreCount),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreCount = this._coreCount;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coreCount = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coreCount = value.coreCount;
      this._type = value.type;
    }
  }

  // core_count - computed: false, optional: true, required: false
  private _coreCount?: number; 
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }
  public set coreCount(value: number) {
    this._coreCount = value;
  }
  public resetCoreCount() {
    this._coreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreCountInput() {
    return this._coreCount;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages {
  /**
  * The path to the container image repository.
For example: gcr.io/{project_id}/{imageName}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#repository GoogleNotebooksRuntime#repository}
  */
  readonly repository: string;
  /**
  * The tag of the container image. If not specified, this defaults to the latest tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#tag GoogleNotebooksRuntime#tag}
  */
  readonly tag?: string;
}

export function googleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesToTerraform(struct?: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}

export interface GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams {
  /**
  * Provide this property when creating the disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#description GoogleNotebooksRuntime#description}
  */
  readonly description?: string;
  /**
  * Specifies the disk name. If not specified, the default is
to use the name of the instance. If the disk with the
instance name exists already in the given zone/region, a
new name will be automatically generated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#disk_name GoogleNotebooksRuntime#disk_name}
  */
  readonly diskName?: string;
  /**
  * Specifies the size of the disk in base-2 GB. If not
specified, the disk will be the same size as the image
(usually 10GB). If specified, the size must be equal to
or larger than 10GB. Default 100 GB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#disk_size_gb GoogleNotebooksRuntime#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * The type of the boot disk attached to this runtime,
defaults to standard persistent disk. For valid values,
see 'https://cloud.google.com/vertex-ai/docs/workbench/
reference/rest/v1/projects.locations.runtimes#disktype'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#disk_type GoogleNotebooksRuntime#disk_type}
  */
  readonly diskType?: string;
  /**
  * Labels to apply to this disk. These can be later modified
by the disks.setLabels method. This field is only
applicable for persistent disks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#labels GoogleNotebooksRuntime#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function googleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsToTerraform(struct?: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference | GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}

export class GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._diskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskName = this._diskName;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._diskName = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._diskName = value.diskName;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._labels = value.labels;
    }
  }

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

  // disk_name - computed: false, optional: true, required: false
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  public resetDiskName() {
    this._diskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
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
}
export interface GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk {
  /**
  * "Specifies the disk interface to use for attaching this disk,
which is either SCSI or NVME. The default is SCSI. Persistent
disks must always use SCSI and the request will fail if you attempt
to attach a persistent disk in any other format than SCSI. Local SSDs
can use either NVME or SCSI. For performance characteristics of SCSI
over NVMe, see Local SSD performance. Valid values: * NVME * SCSI".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#interface GoogleNotebooksRuntime#interface}
  */
  readonly interface?: string;
  /**
  * The mode in which to attach this disk, either READ_WRITE
or READ_ONLY. If not specified, the default is to attach
the disk in READ_WRITE mode.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#mode GoogleNotebooksRuntime#mode}
  */
  readonly mode?: string;
  /**
  * Specifies a valid partial or full URL to an existing
Persistent Disk resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#source GoogleNotebooksRuntime#source}
  */
  readonly source?: string;
  /**
  * Specifies the type of the disk, either SCRATCH or PERSISTENT.
If not specified, the default is PERSISTENT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#type GoogleNotebooksRuntime#type}
  */
  readonly type?: string;
  /**
  * initialize_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#initialize_params GoogleNotebooksRuntime#initialize_params}
  */
  readonly initializeParams?: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams;
}

export function googleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskToTerraform(struct?: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference | GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    mode: cdktf.stringToTerraform(struct!.mode),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    initialize_params: googleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsToTerraform(struct!.initializeParams),
  }
}

export class GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._initializeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializeParams = this._initializeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interface = undefined;
      this._mode = undefined;
      this._source = undefined;
      this._type = undefined;
      this._initializeParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interface = value.interface;
      this._mode = value.mode;
      this._source = value.source;
      this._type = value.type;
      this._initializeParams.internalValue = value.initializeParams;
    }
  }

  // auto_delete - computed: true, optional: false, required: false
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }

  // boot - computed: true, optional: false, required: false
  public get boot() {
    return this.getBooleanAttribute('boot');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // guest_os_features - computed: true, optional: false, required: false
  public get guestOsFeatures() {
    return this.getListAttribute('guest_os_features');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // licenses - computed: true, optional: false, required: false
  public get licenses() {
    return this.getListAttribute('licenses');
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // initialize_params - computed: false, optional: true, required: false
  private _initializeParams = new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference(this, "initialize_params");
  public get initializeParams() {
    return this._initializeParams;
  }
  public putInitializeParams(value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams) {
    this._initializeParams.internalValue = value;
  }
  public resetInitializeParams() {
    this._initializeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeParamsInput() {
    return this._initializeParams.internalValue;
  }
}
export interface GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig {
  /**
  * The Cloud KMS resource identifier of the customer-managed
encryption key used to protect a resource, such as a disks.
It has the following format:
'projects/{PROJECT_ID}/locations/{REGION}/keyRings/
{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#kms_key GoogleNotebooksRuntime#kms_key}
  */
  readonly kmsKey?: string;
}

export function googleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigToTerraform(struct?: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference | GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}

export class GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
Enables monitoring and attestation of the boot integrity of
the instance. The attestation is performed against the
integrity policy baseline. This baseline is initially derived
from the implicitly trusted boot image when the instance is
created. Enabled by default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#enable_integrity_monitoring GoogleNotebooksRuntime#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.Secure
Boot helps ensure that the system only runs authentic software
by verifying the digital signature of all boot components, and
halting the boot process if signature verification fails.
Disabled by default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#enable_secure_boot GoogleNotebooksRuntime#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has the vTPM enabled. Enabled by
default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#enable_vtpm GoogleNotebooksRuntime#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

export function googleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigToTerraform(struct?: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference | GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
    enable_vtpm: cdktf.booleanToTerraform(struct!.enableVtpm),
  }
}

export class GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    if (this._enableVtpm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVtpm = this._enableVtpm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
      this._enableVtpm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
      this._enableVtpm = value.enableVtpm;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }

  // enable_vtpm - computed: false, optional: true, required: false
  private _enableVtpm?: boolean | cdktf.IResolvable; 
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm');
  }
  public set enableVtpm(value: boolean | cdktf.IResolvable) {
    this._enableVtpm = value;
  }
  public resetEnableVtpm() {
    this._enableVtpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVtpmInput() {
    return this._enableVtpm;
  }
}
export interface GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig {
  /**
  * If true, runtime will only have internal IP addresses. By default,
runtimes are not restricted to internal IP addresses, and will
have ephemeral external IP addresses assigned to each vm. This
'internal_ip_only' restriction can only be enabled for subnetwork
enabled networks, and all dependencies must be configured to be
accessible without external IP addresses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#internal_ip_only GoogleNotebooksRuntime#internal_ip_only}
  */
  readonly internalIpOnly?: boolean | cdktf.IResolvable;
  /**
  * The labels to associate with this runtime. Label **keys** must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#labels GoogleNotebooksRuntime#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The Compute Engine machine type used for runtimes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#machine_type GoogleNotebooksRuntime#machine_type}
  */
  readonly machineType: string;
  /**
  * The Compute Engine metadata entries to add to virtual machine.
(see [Project and instance metadata](https://cloud.google.com
/compute/docs/storing-retrieving-metadata#project_and_instance
_metadata)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#metadata GoogleNotebooksRuntime#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The Compute Engine network to be used for machine communications.
Cannot be specified with subnetwork. If neither 'network' nor
'subnet' is specified, the "default" network of the project is
used, if it exists. A full URL or partial URI. Examples:
  * 'https://www.googleapis.com/compute/v1/projects/[project_id]/
  regions/global/default'
  * 'projects/[project_id]/regions/global/default'
Runtimes are managed resources inside Google Infrastructure.
Runtimes support the following network configurations:
  * Google Managed Network (Network & subnet are empty)
  * Consumer Project VPC (network & subnet are required). Requires
  configuring Private Service Access.
  * Shared VPC (network & subnet are required). Requires
  configuring Private Service Access.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#network GoogleNotebooksRuntime#network}
  */
  readonly network?: string;
  /**
  * The type of vNIC to be used on this interface. This may be gVNIC
or VirtioNet. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#nic_type GoogleNotebooksRuntime#nic_type}
  */
  readonly nicType?: string;
  /**
  * The Compute Engine subnetwork to be used for machine
communications. Cannot be specified with network. A full URL or
partial URI are valid. Examples:
  * 'https://www.googleapis.com/compute/v1/projects/[project_id]/
  regions/us-east1/subnetworks/sub0'
  * 'projects/[project_id]/regions/us-east1/subnetworks/sub0'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#subnet GoogleNotebooksRuntime#subnet}
  */
  readonly subnet?: string;
  /**
  * The Compute Engine tags to add to runtime (see [Tagging instances]
(https://cloud.google.com/compute/docs/
label-or-tag-resources#tags)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#tags GoogleNotebooksRuntime#tags}
  */
  readonly tags?: string[];
  /**
  * accelerator_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#accelerator_config GoogleNotebooksRuntime#accelerator_config}
  */
  readonly acceleratorConfig?: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig;
  /**
  * container_images block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#container_images GoogleNotebooksRuntime#container_images}
  */
  readonly containerImages?: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages[] | cdktf.IResolvable;
  /**
  * data_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#data_disk GoogleNotebooksRuntime#data_disk}
  */
  readonly dataDisk: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk;
  /**
  * encryption_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#encryption_config GoogleNotebooksRuntime#encryption_config}
  */
  readonly encryptionConfig?: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig;
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#shielded_instance_config GoogleNotebooksRuntime#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig;
}

export function googleNotebooksRuntimeVirtualMachineVirtualMachineConfigToTerraform(struct?: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference | GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_ip_only: cdktf.booleanToTerraform(struct!.internalIpOnly),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    network: cdktf.stringToTerraform(struct!.network),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    accelerator_config: googleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigToTerraform(struct!.acceleratorConfig),
    container_images: cdktf.listMapper(googleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesToTerraform)(struct!.containerImages),
    data_disk: googleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskToTerraform(struct!.dataDisk),
    encryption_config: googleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
    shielded_instance_config: googleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
  }
}

export class GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIpOnly = this._internalIpOnly;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._nicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicType = this._nicType;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._acceleratorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorConfig = this._acceleratorConfig?.internalValue;
    }
    if (this._containerImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImages = this._containerImages;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._internalIpOnly = undefined;
      this._labels = undefined;
      this._machineType = undefined;
      this._metadata = undefined;
      this._network = undefined;
      this._nicType = undefined;
      this._subnet = undefined;
      this._tags = undefined;
      this._acceleratorConfig.internalValue = undefined;
      this._containerImages = undefined;
      this._dataDisk.internalValue = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._internalIpOnly = value.internalIpOnly;
      this._labels = value.labels;
      this._machineType = value.machineType;
      this._metadata = value.metadata;
      this._network = value.network;
      this._nicType = value.nicType;
      this._subnet = value.subnet;
      this._tags = value.tags;
      this._acceleratorConfig.internalValue = value.acceleratorConfig;
      this._containerImages = value.containerImages;
      this._dataDisk.internalValue = value.dataDisk;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
    }
  }

  // guest_attributes - computed: true, optional: false, required: false
  public guestAttributes(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'guest_attributes').lookup(key);
  }

  // internal_ip_only - computed: false, optional: true, required: false
  private _internalIpOnly?: boolean | cdktf.IResolvable; 
  public get internalIpOnly() {
    return this.getBooleanAttribute('internal_ip_only');
  }
  public set internalIpOnly(value: boolean | cdktf.IResolvable) {
    this._internalIpOnly = value;
  }
  public resetInternalIpOnly() {
    this._internalIpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpOnlyInput() {
    return this._internalIpOnly;
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

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // metadata - computed: true, optional: true, required: false
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // nic_type - computed: false, optional: true, required: false
  private _nicType?: string; 
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }
  public set nicType(value: string) {
    this._nicType = value;
  }
  public resetNicType() {
    this._nicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicTypeInput() {
    return this._nicType;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // accelerator_config - computed: false, optional: true, required: false
  private _acceleratorConfig = new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference(this, "accelerator_config");
  public get acceleratorConfig() {
    return this._acceleratorConfig;
  }
  public putAcceleratorConfig(value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig) {
    this._acceleratorConfig.internalValue = value;
  }
  public resetAcceleratorConfig() {
    this._acceleratorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorConfigInput() {
    return this._acceleratorConfig.internalValue;
  }

  // container_images - computed: false, optional: true, required: false
  private _containerImages?: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages[] | cdktf.IResolvable; 
  public get containerImages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('container_images');
  }
  public set containerImages(value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages[] | cdktf.IResolvable) {
    this._containerImages = value;
  }
  public resetContainerImages() {
    this._containerImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImagesInput() {
    return this._containerImages;
  }

  // data_disk - computed: false, optional: false, required: true
  private _dataDisk = new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference(this, "data_disk");
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk) {
    this._dataDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }
}
export interface GoogleNotebooksRuntimeVirtualMachine {
  /**
  * virtual_machine_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime#virtual_machine_config GoogleNotebooksRuntime#virtual_machine_config}
  */
  readonly virtualMachineConfig?: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig;
}

export function googleNotebooksRuntimeVirtualMachineToTerraform(struct?: GoogleNotebooksRuntimeVirtualMachineOutputReference | GoogleNotebooksRuntimeVirtualMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_machine_config: googleNotebooksRuntimeVirtualMachineVirtualMachineConfigToTerraform(struct!.virtualMachineConfig),
  }
}

export class GoogleNotebooksRuntimeVirtualMachineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNotebooksRuntimeVirtualMachine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualMachineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineConfig = this._virtualMachineConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNotebooksRuntimeVirtualMachine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualMachineConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualMachineConfig.internalValue = value.virtualMachineConfig;
    }
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // virtual_machine_config - computed: false, optional: true, required: false
  private _virtualMachineConfig = new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference(this, "virtual_machine_config");
  public get virtualMachineConfig() {
    return this._virtualMachineConfig;
  }
  public putVirtualMachineConfig(value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig) {
    this._virtualMachineConfig.internalValue = value;
  }
  public resetVirtualMachineConfig() {
    this._virtualMachineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineConfigInput() {
    return this._virtualMachineConfig.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime google_notebooks_runtime}
*/
export class GoogleNotebooksRuntime extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_notebooks_runtime";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_runtime google_notebooks_runtime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleNotebooksRuntimeConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleNotebooksRuntimeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_notebooks_runtime',
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
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._accessConfig.internalValue = config.accessConfig;
    this._softwareConfig.internalValue = config.softwareConfig;
    this._timeouts.internalValue = config.timeouts;
    this._virtualMachine.internalValue = config.virtualMachine;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // health_state - computed: true, optional: false, required: false
  public get healthState() {
    return this.getStringAttribute('health_state');
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

  // metrics - computed: true, optional: false, required: false
  private _metrics = new GoogleNotebooksRuntimeMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // access_config - computed: false, optional: true, required: false
  private _accessConfig = new GoogleNotebooksRuntimeAccessConfigOutputReference(this, "access_config");
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: GoogleNotebooksRuntimeAccessConfig) {
    this._accessConfig.internalValue = value;
  }
  public resetAccessConfig() {
    this._accessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig.internalValue;
  }

  // software_config - computed: false, optional: true, required: false
  private _softwareConfig = new GoogleNotebooksRuntimeSoftwareConfigOutputReference(this, "software_config");
  public get softwareConfig() {
    return this._softwareConfig;
  }
  public putSoftwareConfig(value: GoogleNotebooksRuntimeSoftwareConfig) {
    this._softwareConfig.internalValue = value;
  }
  public resetSoftwareConfig() {
    this._softwareConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareConfigInput() {
    return this._softwareConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleNotebooksRuntimeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleNotebooksRuntimeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_machine - computed: false, optional: true, required: false
  private _virtualMachine = new GoogleNotebooksRuntimeVirtualMachineOutputReference(this, "virtual_machine");
  public get virtualMachine() {
    return this._virtualMachine;
  }
  public putVirtualMachine(value: GoogleNotebooksRuntimeVirtualMachine) {
    this._virtualMachine.internalValue = value;
  }
  public resetVirtualMachine() {
    this._virtualMachine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineInput() {
    return this._virtualMachine.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      access_config: googleNotebooksRuntimeAccessConfigToTerraform(this._accessConfig.internalValue),
      software_config: googleNotebooksRuntimeSoftwareConfigToTerraform(this._softwareConfig.internalValue),
      timeouts: googleNotebooksRuntimeTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_machine: googleNotebooksRuntimeVirtualMachineToTerraform(this._virtualMachine.internalValue),
    };
  }
}
