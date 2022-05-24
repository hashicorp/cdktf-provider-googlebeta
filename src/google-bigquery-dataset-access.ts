// https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBigqueryDatasetAccessAConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique ID for this dataset, without the project name. The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#dataset_id GoogleBigqueryDatasetAccessA#dataset_id}
  */
  readonly datasetId: string;
  /**
  * A domain to grant access to. Any users signed in with the
domain specified will be granted the specified access
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#domain GoogleBigqueryDatasetAccessA#domain}
  */
  readonly domain?: string;
  /**
  * An email address of a Google Group to grant access to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#group_by_email GoogleBigqueryDatasetAccessA#group_by_email}
  */
  readonly groupByEmail?: string;
  /**
  * Some other type of member that appears in the IAM Policy but isn't a user,
group, domain, or special group. For example: 'allUsers'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#iam_member GoogleBigqueryDatasetAccessA#iam_member}
  */
  readonly iamMember?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#project GoogleBigqueryDatasetAccessA#project}
  */
  readonly project?: string;
  /**
  * Describes the rights granted to the user specified by the other
member of the access object. Basic, predefined, and custom roles are
supported. Predefined roles that have equivalent basic roles are
swapped by the API to their basic counterparts, and will show a diff
post-create. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#role GoogleBigqueryDatasetAccessA#role}
  */
  readonly role?: string;
  /**
  * A special group to grant access to. Possible values include:


* 'projectOwners': Owners of the enclosing project.


* 'projectReaders': Readers of the enclosing project.


* 'projectWriters': Writers of the enclosing project.


* 'allAuthenticatedUsers': All authenticated BigQuery users.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#special_group GoogleBigqueryDatasetAccessA#special_group}
  */
  readonly specialGroup?: string;
  /**
  * An email address of a user to grant access to. For example:
fred@example.com
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#user_by_email GoogleBigqueryDatasetAccessA#user_by_email}
  */
  readonly userByEmail?: string;
  /**
  * dataset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#dataset GoogleBigqueryDatasetAccessA#dataset}
  */
  readonly dataset?: GoogleBigqueryDatasetAccessDatasetA;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#timeouts GoogleBigqueryDatasetAccessA#timeouts}
  */
  readonly timeouts?: GoogleBigqueryDatasetAccessTimeouts;
  /**
  * view block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#view GoogleBigqueryDatasetAccessA#view}
  */
  readonly view?: GoogleBigqueryDatasetAccessViewA;
}
export interface GoogleBigqueryDatasetAccessDatasetDatasetA {
  /**
  * The ID of the dataset containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#dataset_id GoogleBigqueryDatasetAccessA#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#project_id GoogleBigqueryDatasetAccessA#project_id}
  */
  readonly projectId: string;
}

export function googleBigqueryDatasetAccessDatasetDatasetAToTerraform(struct?: GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference | GoogleBigqueryDatasetAccessDatasetDatasetA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}

export class GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryDatasetAccessDatasetDatasetA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryDatasetAccessDatasetDatasetA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface GoogleBigqueryDatasetAccessDatasetA {
  /**
  * Which resources in the dataset this entry applies to. Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#target_types GoogleBigqueryDatasetAccessA#target_types}
  */
  readonly targetTypes: string[];
  /**
  * dataset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#dataset GoogleBigqueryDatasetAccessA#dataset}
  */
  readonly dataset: GoogleBigqueryDatasetAccessDatasetDatasetA;
}

export function googleBigqueryDatasetAccessDatasetAToTerraform(struct?: GoogleBigqueryDatasetAccessDatasetAOutputReference | GoogleBigqueryDatasetAccessDatasetA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetTypes),
    dataset: googleBigqueryDatasetAccessDatasetDatasetAToTerraform(struct!.dataset),
  }
}

export class GoogleBigqueryDatasetAccessDatasetAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryDatasetAccessDatasetA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTypes = this._targetTypes;
    }
    if (this._dataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryDatasetAccessDatasetA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetTypes = undefined;
      this._dataset.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetTypes = value.targetTypes;
      this._dataset.internalValue = value.dataset;
    }
  }

  // target_types - computed: false, optional: false, required: true
  private _targetTypes?: string[]; 
  public get targetTypes() {
    return this.getListAttribute('target_types');
  }
  public set targetTypes(value: string[]) {
    this._targetTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypesInput() {
    return this._targetTypes;
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset = new GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference(this, "dataset");
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: GoogleBigqueryDatasetAccessDatasetDatasetA) {
    this._dataset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }
}
export interface GoogleBigqueryDatasetAccessTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#create GoogleBigqueryDatasetAccessA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#delete GoogleBigqueryDatasetAccessA#delete}
  */
  readonly delete?: string;
}

export function googleBigqueryDatasetAccessTimeoutsToTerraform(struct?: GoogleBigqueryDatasetAccessTimeoutsOutputReference | GoogleBigqueryDatasetAccessTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class GoogleBigqueryDatasetAccessTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryDatasetAccessTimeouts | undefined {
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

  public set internalValue(value: GoogleBigqueryDatasetAccessTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface GoogleBigqueryDatasetAccessViewA {
  /**
  * The ID of the dataset containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#dataset_id GoogleBigqueryDatasetAccessA#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#project_id GoogleBigqueryDatasetAccessA#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the table. The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access#table_id GoogleBigqueryDatasetAccessA#table_id}
  */
  readonly tableId: string;
}

export function googleBigqueryDatasetAccessViewAToTerraform(struct?: GoogleBigqueryDatasetAccessViewAOutputReference | GoogleBigqueryDatasetAccessViewA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}

export class GoogleBigqueryDatasetAccessViewAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryDatasetAccessViewA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryDatasetAccessViewA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access google_bigquery_dataset_access}
*/
export class GoogleBigqueryDatasetAccessA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_dataset_access";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset_access google_bigquery_dataset_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBigqueryDatasetAccessAConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBigqueryDatasetAccessAConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_dataset_access',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.22.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._datasetId = config.datasetId;
    this._domain = config.domain;
    this._groupByEmail = config.groupByEmail;
    this._iamMember = config.iamMember;
    this._project = config.project;
    this._role = config.role;
    this._specialGroup = config.specialGroup;
    this._userByEmail = config.userByEmail;
    this._dataset.internalValue = config.dataset;
    this._timeouts.internalValue = config.timeouts;
    this._view.internalValue = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_updated_member - computed: true, optional: false, required: false
  public get apiUpdatedMember() {
    return this.getBooleanAttribute('api_updated_member');
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // group_by_email - computed: false, optional: true, required: false
  private _groupByEmail?: string; 
  public get groupByEmail() {
    return this.getStringAttribute('group_by_email');
  }
  public set groupByEmail(value: string) {
    this._groupByEmail = value;
  }
  public resetGroupByEmail() {
    this._groupByEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByEmailInput() {
    return this._groupByEmail;
  }

  // iam_member - computed: false, optional: true, required: false
  private _iamMember?: string; 
  public get iamMember() {
    return this.getStringAttribute('iam_member');
  }
  public set iamMember(value: string) {
    this._iamMember = value;
  }
  public resetIamMember() {
    this._iamMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamMemberInput() {
    return this._iamMember;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // special_group - computed: false, optional: true, required: false
  private _specialGroup?: string; 
  public get specialGroup() {
    return this.getStringAttribute('special_group');
  }
  public set specialGroup(value: string) {
    this._specialGroup = value;
  }
  public resetSpecialGroup() {
    this._specialGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialGroupInput() {
    return this._specialGroup;
  }

  // user_by_email - computed: false, optional: true, required: false
  private _userByEmail?: string; 
  public get userByEmail() {
    return this.getStringAttribute('user_by_email');
  }
  public set userByEmail(value: string) {
    this._userByEmail = value;
  }
  public resetUserByEmail() {
    this._userByEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userByEmailInput() {
    return this._userByEmail;
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset = new GoogleBigqueryDatasetAccessDatasetAOutputReference(this, "dataset");
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: GoogleBigqueryDatasetAccessDatasetA) {
    this._dataset.internalValue = value;
  }
  public resetDataset() {
    this._dataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBigqueryDatasetAccessTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBigqueryDatasetAccessTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // view - computed: false, optional: true, required: false
  private _view = new GoogleBigqueryDatasetAccessViewAOutputReference(this, "view");
  public get view() {
    return this._view;
  }
  public putView(value: GoogleBigqueryDatasetAccessViewA) {
    this._view.internalValue = value;
  }
  public resetView() {
    this._view.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset_id: cdktf.stringToTerraform(this._datasetId),
      domain: cdktf.stringToTerraform(this._domain),
      group_by_email: cdktf.stringToTerraform(this._groupByEmail),
      iam_member: cdktf.stringToTerraform(this._iamMember),
      project: cdktf.stringToTerraform(this._project),
      role: cdktf.stringToTerraform(this._role),
      special_group: cdktf.stringToTerraform(this._specialGroup),
      user_by_email: cdktf.stringToTerraform(this._userByEmail),
      dataset: googleBigqueryDatasetAccessDatasetAToTerraform(this._dataset.internalValue),
      timeouts: googleBigqueryDatasetAccessTimeoutsToTerraform(this._timeouts.internalValue),
      view: googleBigqueryDatasetAccessViewAToTerraform(this._view.internalValue),
    };
  }
}
