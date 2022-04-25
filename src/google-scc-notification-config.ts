// https://www.terraform.io/docs/providers/google-beta/r/google_scc_notification_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleSccNotificationConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * This must be unique within the organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_scc_notification_config#config_id GoogleSccNotificationConfig#config_id}
  */
  readonly configId: string;
  /**
  * The description of the notification config (max of 1024 characters).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_scc_notification_config#description GoogleSccNotificationConfig#description}
  */
  readonly description?: string;
  /**
  * The organization whose Cloud Security Command Center the Notification
Config lives in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_scc_notification_config#organization GoogleSccNotificationConfig#organization}
  */
  readonly organization: string;
  /**
  * The Pub/Sub topic to send notifications to. Its format is
"projects/[project_id]/topics/[topic]".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_scc_notification_config#pubsub_topic GoogleSccNotificationConfig#pubsub_topic}
  */
  readonly pubsubTopic: string;
  /**
  * streaming_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_scc_notification_config#streaming_config GoogleSccNotificationConfig#streaming_config}
  */
  readonly streamingConfig: GoogleSccNotificationConfigStreamingConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_scc_notification_config#timeouts GoogleSccNotificationConfig#timeouts}
  */
  readonly timeouts?: GoogleSccNotificationConfigTimeouts;
}
export interface GoogleSccNotificationConfigStreamingConfig {
  /**
  * Expression that defines the filter to apply across create/update
events of assets or findings as specified by the event type. The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* >, <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_scc_notification_config#filter GoogleSccNotificationConfig#filter}
  */
  readonly filter: string;
}

export function googleSccNotificationConfigStreamingConfigToTerraform(struct?: GoogleSccNotificationConfigStreamingConfigOutputReference | GoogleSccNotificationConfigStreamingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
  }
}

export class GoogleSccNotificationConfigStreamingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSccNotificationConfigStreamingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSccNotificationConfigStreamingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }
}
export interface GoogleSccNotificationConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_scc_notification_config#create GoogleSccNotificationConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_scc_notification_config#delete GoogleSccNotificationConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_scc_notification_config#update GoogleSccNotificationConfig#update}
  */
  readonly update?: string;
}

export function googleSccNotificationConfigTimeoutsToTerraform(struct?: GoogleSccNotificationConfigTimeoutsOutputReference | GoogleSccNotificationConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleSccNotificationConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSccNotificationConfigTimeouts | undefined {
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

  public set internalValue(value: GoogleSccNotificationConfigTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_scc_notification_config google_scc_notification_config}
*/
export class GoogleSccNotificationConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_scc_notification_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_scc_notification_config google_scc_notification_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleSccNotificationConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleSccNotificationConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_scc_notification_config',
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
    this._configId = config.configId;
    this._description = config.description;
    this._organization = config.organization;
    this._pubsubTopic = config.pubsubTopic;
    this._streamingConfig.internalValue = config.streamingConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // pubsub_topic - computed: false, optional: false, required: true
  private _pubsubTopic?: string; 
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }
  public set pubsubTopic(value: string) {
    this._pubsubTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic;
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // streaming_config - computed: false, optional: false, required: true
  private _streamingConfig = new GoogleSccNotificationConfigStreamingConfigOutputReference(this, "streaming_config");
  public get streamingConfig() {
    return this._streamingConfig;
  }
  public putStreamingConfig(value: GoogleSccNotificationConfigStreamingConfig) {
    this._streamingConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingConfigInput() {
    return this._streamingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleSccNotificationConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleSccNotificationConfigTimeouts) {
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
      config_id: cdktf.stringToTerraform(this._configId),
      description: cdktf.stringToTerraform(this._description),
      organization: cdktf.stringToTerraform(this._organization),
      pubsub_topic: cdktf.stringToTerraform(this._pubsubTopic),
      streaming_config: googleSccNotificationConfigStreamingConfigToTerraform(this._streamingConfig.internalValue),
      timeouts: googleSccNotificationConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
