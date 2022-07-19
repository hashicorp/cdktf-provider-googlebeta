// https://www.terraform.io/docs/providers/google-beta/r/google_organization_access_approval_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleOrganizationAccessApprovalSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The asymmetric crypto key version to use for signing approval requests.
Empty active_key_version indicates that a Google-managed key should be used for signing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_access_approval_settings#active_key_version GoogleOrganizationAccessApprovalSettings#active_key_version}
  */
  readonly activeKeyVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_access_approval_settings#id GoogleOrganizationAccessApprovalSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of email addresses to which notifications relating to approval requests should be sent.
Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_access_approval_settings#notification_emails GoogleOrganizationAccessApprovalSettings#notification_emails}
  */
  readonly notificationEmails?: string[];
  /**
  * ID of the organization of the access approval settings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_access_approval_settings#organization_id GoogleOrganizationAccessApprovalSettings#organization_id}
  */
  readonly organizationId: string;
  /**
  * enrolled_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_access_approval_settings#enrolled_services GoogleOrganizationAccessApprovalSettings#enrolled_services}
  */
  readonly enrolledServices: GoogleOrganizationAccessApprovalSettingsEnrolledServices[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_access_approval_settings#timeouts GoogleOrganizationAccessApprovalSettings#timeouts}
  */
  readonly timeouts?: GoogleOrganizationAccessApprovalSettingsTimeouts;
}
export interface GoogleOrganizationAccessApprovalSettingsEnrolledServices {
  /**
  * The product for which Access Approval will be enrolled. Allowed values are listed (case-sensitive):
  all
  appengine.googleapis.com
  bigquery.googleapis.com
  bigtable.googleapis.com
  cloudkms.googleapis.com
  compute.googleapis.com
  dataflow.googleapis.com
  iam.googleapis.com
  pubsub.googleapis.com
  storage.googleapis.com
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_access_approval_settings#cloud_product GoogleOrganizationAccessApprovalSettings#cloud_product}
  */
  readonly cloudProduct: string;
  /**
  * The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_access_approval_settings#enrollment_level GoogleOrganizationAccessApprovalSettings#enrollment_level}
  */
  readonly enrollmentLevel?: string;
}

export function googleOrganizationAccessApprovalSettingsEnrolledServicesToTerraform(struct?: GoogleOrganizationAccessApprovalSettingsEnrolledServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_product: cdktf.stringToTerraform(struct!.cloudProduct),
    enrollment_level: cdktf.stringToTerraform(struct!.enrollmentLevel),
  }
}

export class GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleOrganizationAccessApprovalSettingsEnrolledServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProduct !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProduct = this._cloudProduct;
    }
    if (this._enrollmentLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollmentLevel = this._enrollmentLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOrganizationAccessApprovalSettingsEnrolledServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudProduct = undefined;
      this._enrollmentLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudProduct = value.cloudProduct;
      this._enrollmentLevel = value.enrollmentLevel;
    }
  }

  // cloud_product - computed: false, optional: false, required: true
  private _cloudProduct?: string; 
  public get cloudProduct() {
    return this.getStringAttribute('cloud_product');
  }
  public set cloudProduct(value: string) {
    this._cloudProduct = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProductInput() {
    return this._cloudProduct;
  }

  // enrollment_level - computed: false, optional: true, required: false
  private _enrollmentLevel?: string; 
  public get enrollmentLevel() {
    return this.getStringAttribute('enrollment_level');
  }
  public set enrollmentLevel(value: string) {
    this._enrollmentLevel = value;
  }
  public resetEnrollmentLevel() {
    this._enrollmentLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentLevelInput() {
    return this._enrollmentLevel;
  }
}

export class GoogleOrganizationAccessApprovalSettingsEnrolledServicesList extends cdktf.ComplexList {
  public internalValue? : GoogleOrganizationAccessApprovalSettingsEnrolledServices[] | cdktf.IResolvable

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
  public get(index: number): GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference {
    return new GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOrganizationAccessApprovalSettingsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_access_approval_settings#create GoogleOrganizationAccessApprovalSettings#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_access_approval_settings#delete GoogleOrganizationAccessApprovalSettings#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_access_approval_settings#update GoogleOrganizationAccessApprovalSettings#update}
  */
  readonly update?: string;
}

export function googleOrganizationAccessApprovalSettingsTimeoutsToTerraform(struct?: GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference | GoogleOrganizationAccessApprovalSettingsTimeouts | cdktf.IResolvable): any {
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

export class GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOrganizationAccessApprovalSettingsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleOrganizationAccessApprovalSettingsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_access_approval_settings google_organization_access_approval_settings}
*/
export class GoogleOrganizationAccessApprovalSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_organization_access_approval_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_access_approval_settings google_organization_access_approval_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleOrganizationAccessApprovalSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleOrganizationAccessApprovalSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_organization_access_approval_settings',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.29.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._activeKeyVersion = config.activeKeyVersion;
    this._id = config.id;
    this._notificationEmails = config.notificationEmails;
    this._organizationId = config.organizationId;
    this._enrolledServices.internalValue = config.enrolledServices;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_key_version - computed: false, optional: true, required: false
  private _activeKeyVersion?: string; 
  public get activeKeyVersion() {
    return this.getStringAttribute('active_key_version');
  }
  public set activeKeyVersion(value: string) {
    this._activeKeyVersion = value;
  }
  public resetActiveKeyVersion() {
    this._activeKeyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeKeyVersionInput() {
    return this._activeKeyVersion;
  }

  // ancestor_has_active_key_version - computed: true, optional: false, required: false
  public get ancestorHasActiveKeyVersion() {
    return this.getBooleanAttribute('ancestor_has_active_key_version');
  }

  // enrolled_ancestor - computed: true, optional: false, required: false
  public get enrolledAncestor() {
    return this.getBooleanAttribute('enrolled_ancestor');
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

  // invalid_key_version - computed: true, optional: false, required: false
  public get invalidKeyVersion() {
    return this.getBooleanAttribute('invalid_key_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_emails - computed: true, optional: true, required: false
  private _notificationEmails?: string[]; 
  public get notificationEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_emails'));
  }
  public set notificationEmails(value: string[]) {
    this._notificationEmails = value;
  }
  public resetNotificationEmails() {
    this._notificationEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailsInput() {
    return this._notificationEmails;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // enrolled_services - computed: false, optional: false, required: true
  private _enrolledServices = new GoogleOrganizationAccessApprovalSettingsEnrolledServicesList(this, "enrolled_services", true);
  public get enrolledServices() {
    return this._enrolledServices;
  }
  public putEnrolledServices(value: GoogleOrganizationAccessApprovalSettingsEnrolledServices[] | cdktf.IResolvable) {
    this._enrolledServices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enrolledServicesInput() {
    return this._enrolledServices.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleOrganizationAccessApprovalSettingsTimeouts) {
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
      active_key_version: cdktf.stringToTerraform(this._activeKeyVersion),
      id: cdktf.stringToTerraform(this._id),
      notification_emails: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationEmails),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      enrolled_services: cdktf.listMapper(googleOrganizationAccessApprovalSettingsEnrolledServicesToTerraform)(this._enrolledServices.internalValue),
      timeouts: googleOrganizationAccessApprovalSettingsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
