// https://www.terraform.io/docs/providers/google-beta/r/google_compute_shared_vpc_service_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeSharedVpcServiceProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of a host project to associate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_shared_vpc_service_project#host_project GoogleComputeSharedVpcServiceProject#host_project}
  */
  readonly hostProject: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_shared_vpc_service_project#id GoogleComputeSharedVpcServiceProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the project that will serve as a Shared VPC service project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_shared_vpc_service_project#service_project GoogleComputeSharedVpcServiceProject#service_project}
  */
  readonly serviceProject: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_shared_vpc_service_project#timeouts GoogleComputeSharedVpcServiceProject#timeouts}
  */
  readonly timeouts?: GoogleComputeSharedVpcServiceProjectTimeouts;
}
export interface GoogleComputeSharedVpcServiceProjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_shared_vpc_service_project#create GoogleComputeSharedVpcServiceProject#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_shared_vpc_service_project#delete GoogleComputeSharedVpcServiceProject#delete}
  */
  readonly delete?: string;
}

export function googleComputeSharedVpcServiceProjectTimeoutsToTerraform(struct?: GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference | GoogleComputeSharedVpcServiceProjectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSharedVpcServiceProjectTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSharedVpcServiceProjectTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_shared_vpc_service_project google_compute_shared_vpc_service_project}
*/
export class GoogleComputeSharedVpcServiceProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_shared_vpc_service_project";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_shared_vpc_service_project google_compute_shared_vpc_service_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeSharedVpcServiceProjectConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeSharedVpcServiceProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_shared_vpc_service_project',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.27.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hostProject = config.hostProject;
    this._id = config.id;
    this._serviceProject = config.serviceProject;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_project - computed: false, optional: false, required: true
  private _hostProject?: string; 
  public get hostProject() {
    return this.getStringAttribute('host_project');
  }
  public set hostProject(value: string) {
    this._hostProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProjectInput() {
    return this._hostProject;
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

  // service_project - computed: false, optional: false, required: true
  private _serviceProject?: string; 
  public get serviceProject() {
    return this.getStringAttribute('service_project');
  }
  public set serviceProject(value: string) {
    this._serviceProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProjectInput() {
    return this._serviceProject;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeSharedVpcServiceProjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeSharedVpcServiceProjectTimeouts) {
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
      host_project: cdktf.stringToTerraform(this._hostProject),
      id: cdktf.stringToTerraform(this._id),
      service_project: cdktf.stringToTerraform(this._serviceProject),
      timeouts: googleComputeSharedVpcServiceProjectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
