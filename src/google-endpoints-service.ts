// https://www.terraform.io/docs/providers/google-beta/r/google_endpoints_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleEndpointsServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The full text of the Service Config YAML file (Example located here). If provided, must also provide protoc_output_base64. open_api config must not be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_endpoints_service#grpc_config GoogleEndpointsService#grpc_config}
  */
  readonly grpcConfig?: string;
  /**
  * The full text of the OpenAPI YAML configuration as described here. Either this, or both of grpc_config and protoc_output_base64 must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_endpoints_service#openapi_config GoogleEndpointsService#openapi_config}
  */
  readonly openapiConfig?: string;
  /**
  * The project ID that the service belongs to. If not provided, provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_endpoints_service#project GoogleEndpointsService#project}
  */
  readonly project?: string;
  /**
  * The full contents of the Service Descriptor File generated by protoc. This should be a compiled .pb file, base64-encoded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_endpoints_service#protoc_output_base64 GoogleEndpointsService#protoc_output_base64}
  */
  readonly protocOutputBase64?: string;
  /**
  * The name of the service. Usually of the form $apiname.endpoints.$projectid.cloud.goog.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_endpoints_service#service_name GoogleEndpointsService#service_name}
  */
  readonly serviceName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_endpoints_service#timeouts GoogleEndpointsService#timeouts}
  */
  readonly timeouts?: GoogleEndpointsServiceTimeouts;
}
export interface GoogleEndpointsServiceApisMethods {
}

export function googleEndpointsServiceApisMethodsToTerraform(struct?: GoogleEndpointsServiceApisMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleEndpointsServiceApisMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleEndpointsServiceApisMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEndpointsServiceApisMethods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // request_type - computed: true, optional: false, required: false
  public get requestType() {
    return this.getStringAttribute('request_type');
  }

  // response_type - computed: true, optional: false, required: false
  public get responseType() {
    return this.getStringAttribute('response_type');
  }

  // syntax - computed: true, optional: false, required: false
  public get syntax() {
    return this.getStringAttribute('syntax');
  }
}

export class GoogleEndpointsServiceApisMethodsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleEndpointsServiceApisMethodsOutputReference {
    return new GoogleEndpointsServiceApisMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleEndpointsServiceApis {
}

export function googleEndpointsServiceApisToTerraform(struct?: GoogleEndpointsServiceApis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleEndpointsServiceApisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleEndpointsServiceApis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEndpointsServiceApis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // methods - computed: true, optional: false, required: false
  private _methods = new GoogleEndpointsServiceApisMethodsList(this, "methods", false);
  public get methods() {
    return this._methods;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // syntax - computed: true, optional: false, required: false
  public get syntax() {
    return this.getStringAttribute('syntax');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class GoogleEndpointsServiceApisList extends cdktf.ComplexList {

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
  public get(index: number): GoogleEndpointsServiceApisOutputReference {
    return new GoogleEndpointsServiceApisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleEndpointsServiceEndpoints {
}

export function googleEndpointsServiceEndpointsToTerraform(struct?: GoogleEndpointsServiceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleEndpointsServiceEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleEndpointsServiceEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEndpointsServiceEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class GoogleEndpointsServiceEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleEndpointsServiceEndpointsOutputReference {
    return new GoogleEndpointsServiceEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleEndpointsServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_endpoints_service#create GoogleEndpointsService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_endpoints_service#delete GoogleEndpointsService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_endpoints_service#update GoogleEndpointsService#update}
  */
  readonly update?: string;
}

export function googleEndpointsServiceTimeoutsToTerraform(struct?: GoogleEndpointsServiceTimeoutsOutputReference | GoogleEndpointsServiceTimeouts | cdktf.IResolvable): any {
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

export class GoogleEndpointsServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEndpointsServiceTimeouts | undefined {
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

  public set internalValue(value: GoogleEndpointsServiceTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_endpoints_service google_endpoints_service}
*/
export class GoogleEndpointsService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_endpoints_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_endpoints_service google_endpoints_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleEndpointsServiceConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleEndpointsServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_endpoints_service',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.20.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._grpcConfig = config.grpcConfig;
    this._openapiConfig = config.openapiConfig;
    this._project = config.project;
    this._protocOutputBase64 = config.protocOutputBase64;
    this._serviceName = config.serviceName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apis - computed: true, optional: false, required: false
  private _apis = new GoogleEndpointsServiceApisList(this, "apis", false);
  public get apis() {
    return this._apis;
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // dns_address - computed: true, optional: false, required: false
  public get dnsAddress() {
    return this.getStringAttribute('dns_address');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new GoogleEndpointsServiceEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // grpc_config - computed: false, optional: true, required: false
  private _grpcConfig?: string; 
  public get grpcConfig() {
    return this.getStringAttribute('grpc_config');
  }
  public set grpcConfig(value: string) {
    this._grpcConfig = value;
  }
  public resetGrpcConfig() {
    this._grpcConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcConfigInput() {
    return this._grpcConfig;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // openapi_config - computed: false, optional: true, required: false
  private _openapiConfig?: string; 
  public get openapiConfig() {
    return this.getStringAttribute('openapi_config');
  }
  public set openapiConfig(value: string) {
    this._openapiConfig = value;
  }
  public resetOpenapiConfig() {
    this._openapiConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openapiConfigInput() {
    return this._openapiConfig;
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

  // protoc_output_base64 - computed: false, optional: true, required: false
  private _protocOutputBase64?: string; 
  public get protocOutputBase64() {
    return this.getStringAttribute('protoc_output_base64');
  }
  public set protocOutputBase64(value: string) {
    this._protocOutputBase64 = value;
  }
  public resetProtocOutputBase64() {
    this._protocOutputBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocOutputBase64Input() {
    return this._protocOutputBase64;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleEndpointsServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleEndpointsServiceTimeouts) {
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
      grpc_config: cdktf.stringToTerraform(this._grpcConfig),
      openapi_config: cdktf.stringToTerraform(this._openapiConfig),
      project: cdktf.stringToTerraform(this._project),
      protoc_output_base64: cdktf.stringToTerraform(this._protocOutputBase64),
      service_name: cdktf.stringToTerraform(this._serviceName),
      timeouts: googleEndpointsServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
