// https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleGkeHubMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of this entity type to be displayed on the console. This field is unavailable in v1 of the API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership#description GoogleGkeHubMembership#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership#id GoogleGkeHubMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels to apply to this membership.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership#labels GoogleGkeHubMembership#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The client-provided identifier of the membership.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership#membership_id GoogleGkeHubMembership#membership_id}
  */
  readonly membershipId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership#project GoogleGkeHubMembership#project}
  */
  readonly project?: string;
  /**
  * authority block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership#authority GoogleGkeHubMembership#authority}
  */
  readonly authority?: GoogleGkeHubMembershipAuthority;
  /**
  * endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership#endpoint GoogleGkeHubMembership#endpoint}
  */
  readonly endpoint?: GoogleGkeHubMembershipEndpoint;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership#timeouts GoogleGkeHubMembership#timeouts}
  */
  readonly timeouts?: GoogleGkeHubMembershipTimeouts;
}
export interface GoogleGkeHubMembershipAuthority {
  /**
  * A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://' and // be a valid 
with length <2000 characters. For example: 'https://container.googleapis.com/v1/projects/my-project/locations/us-west1/clusters/my-cluster' (must be 'locations' rather than 'zones'). If the cluster is provisioned with Terraform, this is '"https://container.googleapis.com/v1/${google_container_cluster.my-cluster.id}"'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership#issuer GoogleGkeHubMembership#issuer}
  */
  readonly issuer: string;
}

export function googleGkeHubMembershipAuthorityToTerraform(struct?: GoogleGkeHubMembershipAuthorityOutputReference | GoogleGkeHubMembershipAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}

export class GoogleGkeHubMembershipAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubMembershipAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubMembershipAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuer = value.issuer;
    }
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }
}
export interface GoogleGkeHubMembershipEndpointGkeCluster {
  /**
  * Self-link of the GCP resource for the GKE cluster.
For example: '//container.googleapis.com/projects/my-project/zones/us-west1-a/clusters/my-cluster'.
It can be at the most 1000 characters in length. If the cluster is provisioned with Terraform,
this can be '"//container.googleapis.com/${google_container_cluster.my-cluster.id}"' or
'google_container_cluster.my-cluster.id'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership#resource_link GoogleGkeHubMembership#resource_link}
  */
  readonly resourceLink: string;
}

export function googleGkeHubMembershipEndpointGkeClusterToTerraform(struct?: GoogleGkeHubMembershipEndpointGkeClusterOutputReference | GoogleGkeHubMembershipEndpointGkeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_link: cdktf.stringToTerraform(struct!.resourceLink),
  }
}

export class GoogleGkeHubMembershipEndpointGkeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubMembershipEndpointGkeCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLink = this._resourceLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubMembershipEndpointGkeCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceLink = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceLink = value.resourceLink;
    }
  }

  // resource_link - computed: false, optional: false, required: true
  private _resourceLink?: string; 
  public get resourceLink() {
    return this.getStringAttribute('resource_link');
  }
  public set resourceLink(value: string) {
    this._resourceLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLinkInput() {
    return this._resourceLink;
  }
}
export interface GoogleGkeHubMembershipEndpoint {
  /**
  * gke_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership#gke_cluster GoogleGkeHubMembership#gke_cluster}
  */
  readonly gkeCluster?: GoogleGkeHubMembershipEndpointGkeCluster;
}

export function googleGkeHubMembershipEndpointToTerraform(struct?: GoogleGkeHubMembershipEndpointOutputReference | GoogleGkeHubMembershipEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gke_cluster: googleGkeHubMembershipEndpointGkeClusterToTerraform(struct!.gkeCluster),
  }
}

export class GoogleGkeHubMembershipEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubMembershipEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gkeCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeCluster = this._gkeCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubMembershipEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gkeCluster.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gkeCluster.internalValue = value.gkeCluster;
    }
  }

  // gke_cluster - computed: false, optional: true, required: false
  private _gkeCluster = new GoogleGkeHubMembershipEndpointGkeClusterOutputReference(this, "gke_cluster");
  public get gkeCluster() {
    return this._gkeCluster;
  }
  public putGkeCluster(value: GoogleGkeHubMembershipEndpointGkeCluster) {
    this._gkeCluster.internalValue = value;
  }
  public resetGkeCluster() {
    this._gkeCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterInput() {
    return this._gkeCluster.internalValue;
  }
}
export interface GoogleGkeHubMembershipTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership#create GoogleGkeHubMembership#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership#delete GoogleGkeHubMembership#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership#update GoogleGkeHubMembership#update}
  */
  readonly update?: string;
}

export function googleGkeHubMembershipTimeoutsToTerraform(struct?: GoogleGkeHubMembershipTimeoutsOutputReference | GoogleGkeHubMembershipTimeouts | cdktf.IResolvable): any {
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

export class GoogleGkeHubMembershipTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubMembershipTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubMembershipTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership google_gke_hub_membership}
*/
export class GoogleGkeHubMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gke_hub_membership";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_membership google_gke_hub_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleGkeHubMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleGkeHubMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gke_hub_membership',
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
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._membershipId = config.membershipId;
    this._project = config.project;
    this._authority.internalValue = config.authority;
    this._endpoint.internalValue = config.endpoint;
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

  // labels - computed: false, optional: true, required: false
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

  // membership_id - computed: false, optional: false, required: true
  private _membershipId?: string; 
  public get membershipId() {
    return this.getStringAttribute('membership_id');
  }
  public set membershipId(value: string) {
    this._membershipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipIdInput() {
    return this._membershipId;
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

  // authority - computed: false, optional: true, required: false
  private _authority = new GoogleGkeHubMembershipAuthorityOutputReference(this, "authority");
  public get authority() {
    return this._authority;
  }
  public putAuthority(value: GoogleGkeHubMembershipAuthority) {
    this._authority.internalValue = value;
  }
  public resetAuthority() {
    this._authority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority.internalValue;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint = new GoogleGkeHubMembershipEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: GoogleGkeHubMembershipEndpoint) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleGkeHubMembershipTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleGkeHubMembershipTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      membership_id: cdktf.stringToTerraform(this._membershipId),
      project: cdktf.stringToTerraform(this._project),
      authority: googleGkeHubMembershipAuthorityToTerraform(this._authority.internalValue),
      endpoint: googleGkeHubMembershipEndpointToTerraform(this._endpoint.internalValue),
      timeouts: googleGkeHubMembershipTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
