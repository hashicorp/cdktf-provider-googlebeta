// https://www.terraform.io/docs/providers/google-beta/d/google_service_networking_peered_dns_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleServiceNetworkingPeeredDnsDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_service_networking_peered_dns_domain#name DataGoogleServiceNetworkingPeeredDnsDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_service_networking_peered_dns_domain#network DataGoogleServiceNetworkingPeeredDnsDomain#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_service_networking_peered_dns_domain#project DataGoogleServiceNetworkingPeeredDnsDomain#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_service_networking_peered_dns_domain#service DataGoogleServiceNetworkingPeeredDnsDomain#service}
  */
  readonly service: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/d/google_service_networking_peered_dns_domain google_service_networking_peered_dns_domain}
*/
export class DataGoogleServiceNetworkingPeeredDnsDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_service_networking_peered_dns_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/d/google_service_networking_peered_dns_domain google_service_networking_peered_dns_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleServiceNetworkingPeeredDnsDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleServiceNetworkingPeeredDnsDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_networking_peered_dns_domain',
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
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_suffix - computed: true, optional: false, required: false
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      service: cdktf.stringToTerraform(this._service),
    };
  }
}