// https://www.terraform.io/docs/providers/google-beta/r/google_service_networking_peered_dns_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleServiceNetworkingPeeredDnsDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The DNS domain name suffix of the peered DNS domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_service_networking_peered_dns_domain#dns_suffix GoogleServiceNetworkingPeeredDnsDomain#dns_suffix}
  */
  readonly dnsSuffix: string;
  /**
  * Name of the peered DNS domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_service_networking_peered_dns_domain#name GoogleServiceNetworkingPeeredDnsDomain#name}
  */
  readonly name: string;
  /**
  * Network in the consumer project to peer with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_service_networking_peered_dns_domain#network GoogleServiceNetworkingPeeredDnsDomain#network}
  */
  readonly network: string;
  /**
  * The ID of the project that the service account will be created in. Defaults to the provider project configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_service_networking_peered_dns_domain#project GoogleServiceNetworkingPeeredDnsDomain#project}
  */
  readonly project?: string;
  /**
  * The name of the service to create a peered DNS domain for, e.g. servicenetworking.googleapis.com
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_service_networking_peered_dns_domain#service GoogleServiceNetworkingPeeredDnsDomain#service}
  */
  readonly service?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_service_networking_peered_dns_domain#timeouts GoogleServiceNetworkingPeeredDnsDomain#timeouts}
  */
  readonly timeouts?: GoogleServiceNetworkingPeeredDnsDomainTimeouts;
}
export interface GoogleServiceNetworkingPeeredDnsDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_service_networking_peered_dns_domain#create GoogleServiceNetworkingPeeredDnsDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_service_networking_peered_dns_domain#delete GoogleServiceNetworkingPeeredDnsDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_service_networking_peered_dns_domain#read GoogleServiceNetworkingPeeredDnsDomain#read}
  */
  readonly read?: string;
}

export function googleServiceNetworkingPeeredDnsDomainTimeoutsToTerraform(struct?: GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference | GoogleServiceNetworkingPeeredDnsDomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleServiceNetworkingPeeredDnsDomainTimeouts | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleServiceNetworkingPeeredDnsDomainTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_service_networking_peered_dns_domain google_service_networking_peered_dns_domain}
*/
export class GoogleServiceNetworkingPeeredDnsDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_service_networking_peered_dns_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_service_networking_peered_dns_domain google_service_networking_peered_dns_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleServiceNetworkingPeeredDnsDomainConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleServiceNetworkingPeeredDnsDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_networking_peered_dns_domain',
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
    this._dnsSuffix = config.dnsSuffix;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._service = config.service;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_suffix - computed: false, optional: false, required: true
  private _dnsSuffix?: string; 
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string) {
    this._dnsSuffix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleServiceNetworkingPeeredDnsDomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleServiceNetworkingPeeredDnsDomainTimeouts) {
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
      dns_suffix: cdktf.stringToTerraform(this._dnsSuffix),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      service: cdktf.stringToTerraform(this._service),
      timeouts: googleServiceNetworkingPeeredDnsDomainTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
