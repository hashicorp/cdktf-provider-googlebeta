// https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleCloudAssetProjectFeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of the full names of the assets to receive updates. You must specify either or both of 
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#asset_names GoogleCloudAssetProjectFeed#asset_names}
  */
  readonly assetNames?: string[];
  /**
  * A list of types of the assets to receive updates. You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#asset_types GoogleCloudAssetProjectFeed#asset_types}
  */
  readonly assetTypes?: string[];
  /**
  * The project whose identity will be used when sending messages to the
destination pubsub topic. It also specifies the project for API 
enablement check, quota, and billing. If not specified, the resource's
project will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#billing_project GoogleCloudAssetProjectFeed#billing_project}
  */
  readonly billingProject?: string;
  /**
  * Asset content type. If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "ACCESS_POLICY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#content_type GoogleCloudAssetProjectFeed#content_type}
  */
  readonly contentType?: string;
  /**
  * This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#feed_id GoogleCloudAssetProjectFeed#feed_id}
  */
  readonly feedId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#project GoogleCloudAssetProjectFeed#project}
  */
  readonly project?: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#condition GoogleCloudAssetProjectFeed#condition}
  */
  readonly condition?: GoogleCloudAssetProjectFeedCondition;
  /**
  * feed_output_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#feed_output_config GoogleCloudAssetProjectFeed#feed_output_config}
  */
  readonly feedOutputConfig: GoogleCloudAssetProjectFeedFeedOutputConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#timeouts GoogleCloudAssetProjectFeed#timeouts}
  */
  readonly timeouts?: GoogleCloudAssetProjectFeedTimeouts;
}
export interface GoogleCloudAssetProjectFeedCondition {
  /**
  * Description of the expression. This is a longer text which describes the expression,
e.g. when hovered over it in a UI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#description GoogleCloudAssetProjectFeed#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#expression GoogleCloudAssetProjectFeed#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a file 
name and a position in the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#location GoogleCloudAssetProjectFeed#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose.
This can be used e.g. in UIs which allow to enter the expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#title GoogleCloudAssetProjectFeed#title}
  */
  readonly title?: string;
}

export function googleCloudAssetProjectFeedConditionToTerraform(struct?: GoogleCloudAssetProjectFeedConditionOutputReference | GoogleCloudAssetProjectFeedCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export class GoogleCloudAssetProjectFeedConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudAssetProjectFeedCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudAssetProjectFeedCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination {
  /**
  * Destination on Cloud Pubsub topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#topic GoogleCloudAssetProjectFeed#topic}
  */
  readonly topic: string;
}

export function googleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationToTerraform(struct?: GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference | GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export class GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topic = value.topic;
    }
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface GoogleCloudAssetProjectFeedFeedOutputConfig {
  /**
  * pubsub_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#pubsub_destination GoogleCloudAssetProjectFeed#pubsub_destination}
  */
  readonly pubsubDestination: GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination;
}

export function googleCloudAssetProjectFeedFeedOutputConfigToTerraform(struct?: GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference | GoogleCloudAssetProjectFeedFeedOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub_destination: googleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationToTerraform(struct!.pubsubDestination),
  }
}

export class GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudAssetProjectFeedFeedOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsubDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubDestination = this._pubsubDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudAssetProjectFeedFeedOutputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pubsubDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pubsubDestination.internalValue = value.pubsubDestination;
    }
  }

  // pubsub_destination - computed: false, optional: false, required: true
  private _pubsubDestination = new GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference(this, "pubsub_destination");
  public get pubsubDestination() {
    return this._pubsubDestination;
  }
  public putPubsubDestination(value: GoogleCloudAssetProjectFeedFeedOutputConfigPubsubDestination) {
    this._pubsubDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubDestinationInput() {
    return this._pubsubDestination.internalValue;
  }
}
export interface GoogleCloudAssetProjectFeedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#create GoogleCloudAssetProjectFeed#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#delete GoogleCloudAssetProjectFeed#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed#update GoogleCloudAssetProjectFeed#update}
  */
  readonly update?: string;
}

export function googleCloudAssetProjectFeedTimeoutsToTerraform(struct?: GoogleCloudAssetProjectFeedTimeoutsOutputReference | GoogleCloudAssetProjectFeedTimeouts | cdktf.IResolvable): any {
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

export class GoogleCloudAssetProjectFeedTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudAssetProjectFeedTimeouts | undefined {
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

  public set internalValue(value: GoogleCloudAssetProjectFeedTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed google_cloud_asset_project_feed}
*/
export class GoogleCloudAssetProjectFeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_asset_project_feed";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_project_feed google_cloud_asset_project_feed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCloudAssetProjectFeedConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCloudAssetProjectFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_asset_project_feed',
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
    this._assetNames = config.assetNames;
    this._assetTypes = config.assetTypes;
    this._billingProject = config.billingProject;
    this._contentType = config.contentType;
    this._feedId = config.feedId;
    this._project = config.project;
    this._condition.internalValue = config.condition;
    this._feedOutputConfig.internalValue = config.feedOutputConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_names - computed: false, optional: true, required: false
  private _assetNames?: string[]; 
  public get assetNames() {
    return this.getListAttribute('asset_names');
  }
  public set assetNames(value: string[]) {
    this._assetNames = value;
  }
  public resetAssetNames() {
    this._assetNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetNamesInput() {
    return this._assetNames;
  }

  // asset_types - computed: false, optional: true, required: false
  private _assetTypes?: string[]; 
  public get assetTypes() {
    return this.getListAttribute('asset_types');
  }
  public set assetTypes(value: string[]) {
    this._assetTypes = value;
  }
  public resetAssetTypes() {
    this._assetTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTypesInput() {
    return this._assetTypes;
  }

  // billing_project - computed: false, optional: true, required: false
  private _billingProject?: string; 
  public get billingProject() {
    return this.getStringAttribute('billing_project');
  }
  public set billingProject(value: string) {
    this._billingProject = value;
  }
  public resetBillingProject() {
    this._billingProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingProjectInput() {
    return this._billingProject;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // feed_id - computed: false, optional: false, required: true
  private _feedId?: string; 
  public get feedId() {
    return this.getStringAttribute('feed_id');
  }
  public set feedId(value: string) {
    this._feedId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feedIdInput() {
    return this._feedId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // condition - computed: false, optional: true, required: false
  private _condition = new GoogleCloudAssetProjectFeedConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: GoogleCloudAssetProjectFeedCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // feed_output_config - computed: false, optional: false, required: true
  private _feedOutputConfig = new GoogleCloudAssetProjectFeedFeedOutputConfigOutputReference(this, "feed_output_config");
  public get feedOutputConfig() {
    return this._feedOutputConfig;
  }
  public putFeedOutputConfig(value: GoogleCloudAssetProjectFeedFeedOutputConfig) {
    this._feedOutputConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feedOutputConfigInput() {
    return this._feedOutputConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCloudAssetProjectFeedTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCloudAssetProjectFeedTimeouts) {
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
      asset_names: cdktf.listMapper(cdktf.stringToTerraform)(this._assetNames),
      asset_types: cdktf.listMapper(cdktf.stringToTerraform)(this._assetTypes),
      billing_project: cdktf.stringToTerraform(this._billingProject),
      content_type: cdktf.stringToTerraform(this._contentType),
      feed_id: cdktf.stringToTerraform(this._feedId),
      project: cdktf.stringToTerraform(this._project),
      condition: googleCloudAssetProjectFeedConditionToTerraform(this._condition.internalValue),
      feed_output_config: googleCloudAssetProjectFeedFeedOutputConfigToTerraform(this._feedOutputConfig.internalValue),
      timeouts: googleCloudAssetProjectFeedTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
