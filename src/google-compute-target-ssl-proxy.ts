// https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_ssl_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeTargetSslProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A reference to the BackendService resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_ssl_proxy#backend_service GoogleComputeTargetSslProxy#backend_service}
  */
  readonly backendService: string;
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_ssl_proxy#description GoogleComputeTargetSslProxy#description}
  */
  readonly description?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_ssl_proxy#name GoogleComputeTargetSslProxy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_ssl_proxy#project GoogleComputeTargetSslProxy#project}
  */
  readonly project?: string;
  /**
  * Specifies the type of proxy header to append before sending data to
the backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_ssl_proxy#proxy_header GoogleComputeTargetSslProxy#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * A list of SslCertificate resources that are used to authenticate
connections between users and the load balancer. At least one
SSL certificate must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_ssl_proxy#ssl_certificates GoogleComputeTargetSslProxy#ssl_certificates}
  */
  readonly sslCertificates: string[];
  /**
  * A reference to the SslPolicy resource that will be associated with
the TargetSslProxy resource. If not set, the TargetSslProxy
resource will not have any SSL policy configured.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_ssl_proxy#ssl_policy GoogleComputeTargetSslProxy#ssl_policy}
  */
  readonly sslPolicy?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_ssl_proxy#timeouts GoogleComputeTargetSslProxy#timeouts}
  */
  readonly timeouts?: GoogleComputeTargetSslProxyTimeouts;
}
export interface GoogleComputeTargetSslProxyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_ssl_proxy#create GoogleComputeTargetSslProxy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_ssl_proxy#delete GoogleComputeTargetSslProxy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_ssl_proxy#update GoogleComputeTargetSslProxy#update}
  */
  readonly update?: string;
}

export function googleComputeTargetSslProxyTimeoutsToTerraform(struct?: GoogleComputeTargetSslProxyTimeoutsOutputReference | GoogleComputeTargetSslProxyTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeTargetSslProxyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeTargetSslProxyTimeouts | undefined {
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

  public set internalValue(value: GoogleComputeTargetSslProxyTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_ssl_proxy google_compute_target_ssl_proxy}
*/
export class GoogleComputeTargetSslProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_target_ssl_proxy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_ssl_proxy google_compute_target_ssl_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeTargetSslProxyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeTargetSslProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_target_ssl_proxy',
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
    this._backendService = config.backendService;
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._proxyHeader = config.proxyHeader;
    this._sslCertificates = config.sslCertificates;
    this._sslPolicy = config.sslPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // proxy_id - computed: true, optional: false, required: false
  public get proxyId() {
    return this.getNumberAttribute('proxy_id');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // ssl_certificates - computed: false, optional: false, required: true
  private _sslCertificates?: string[]; 
  public get sslCertificates() {
    return this.getListAttribute('ssl_certificates');
  }
  public set sslCertificates(value: string[]) {
    this._sslCertificates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificatesInput() {
    return this._sslCertificates;
  }

  // ssl_policy - computed: false, optional: true, required: false
  private _sslPolicy?: string; 
  public get sslPolicy() {
    return this.getStringAttribute('ssl_policy');
  }
  public set sslPolicy(value: string) {
    this._sslPolicy = value;
  }
  public resetSslPolicy() {
    this._sslPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPolicyInput() {
    return this._sslPolicy;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeTargetSslProxyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeTargetSslProxyTimeouts) {
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
      backend_service: cdktf.stringToTerraform(this._backendService),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      proxy_header: cdktf.stringToTerraform(this._proxyHeader),
      ssl_certificates: cdktf.listMapper(cdktf.stringToTerraform)(this._sslCertificates),
      ssl_policy: cdktf.stringToTerraform(this._sslPolicy),
      timeouts: googleComputeTargetSslProxyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}