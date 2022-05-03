// https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleAppEngineApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain to authenticate users with when using App Engine's User API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application#auth_domain GoogleAppEngineApplication#auth_domain}
  */
  readonly authDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application#database_type GoogleAppEngineApplication#database_type}
  */
  readonly databaseType?: string;
  /**
  * The location to serve the app from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application#location_id GoogleAppEngineApplication#location_id}
  */
  readonly locationId: string;
  /**
  * The project ID to create the application under.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application#project GoogleAppEngineApplication#project}
  */
  readonly project?: string;
  /**
  * The serving status of the app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application#serving_status GoogleAppEngineApplication#serving_status}
  */
  readonly servingStatus?: string;
  /**
  * feature_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application#feature_settings GoogleAppEngineApplication#feature_settings}
  */
  readonly featureSettings?: GoogleAppEngineApplicationFeatureSettings;
  /**
  * iap block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application#iap GoogleAppEngineApplication#iap}
  */
  readonly iap?: GoogleAppEngineApplicationIap;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application#timeouts GoogleAppEngineApplication#timeouts}
  */
  readonly timeouts?: GoogleAppEngineApplicationTimeouts;
}
export interface GoogleAppEngineApplicationUrlDispatchRule {
}

export function googleAppEngineApplicationUrlDispatchRuleToTerraform(struct?: GoogleAppEngineApplicationUrlDispatchRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleAppEngineApplicationUrlDispatchRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAppEngineApplicationUrlDispatchRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineApplicationUrlDispatchRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class GoogleAppEngineApplicationUrlDispatchRuleList extends cdktf.ComplexList {

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
  public get(index: number): GoogleAppEngineApplicationUrlDispatchRuleOutputReference {
    return new GoogleAppEngineApplicationUrlDispatchRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAppEngineApplicationFeatureSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application#split_health_checks GoogleAppEngineApplication#split_health_checks}
  */
  readonly splitHealthChecks: boolean | cdktf.IResolvable;
}

export function googleAppEngineApplicationFeatureSettingsToTerraform(struct?: GoogleAppEngineApplicationFeatureSettingsOutputReference | GoogleAppEngineApplicationFeatureSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    split_health_checks: cdktf.booleanToTerraform(struct!.splitHealthChecks),
  }
}

export class GoogleAppEngineApplicationFeatureSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAppEngineApplicationFeatureSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitHealthChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitHealthChecks = this._splitHealthChecks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineApplicationFeatureSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._splitHealthChecks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._splitHealthChecks = value.splitHealthChecks;
    }
  }

  // split_health_checks - computed: false, optional: false, required: true
  private _splitHealthChecks?: boolean | cdktf.IResolvable; 
  public get splitHealthChecks() {
    return this.getBooleanAttribute('split_health_checks');
  }
  public set splitHealthChecks(value: boolean | cdktf.IResolvable) {
    this._splitHealthChecks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHealthChecksInput() {
    return this._splitHealthChecks;
  }
}
export interface GoogleAppEngineApplicationIap {
  /**
  * Adapted for use with the app
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application#enabled GoogleAppEngineApplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * OAuth2 client ID to use for the authentication flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application#oauth2_client_id GoogleAppEngineApplication#oauth2_client_id}
  */
  readonly oauth2ClientId: string;
  /**
  * OAuth2 client secret to use for the authentication flow. The SHA-256 hash of the value is returned in the oauth2ClientSecretSha256 field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application#oauth2_client_secret GoogleAppEngineApplication#oauth2_client_secret}
  */
  readonly oauth2ClientSecret: string;
}

export function googleAppEngineApplicationIapToTerraform(struct?: GoogleAppEngineApplicationIapOutputReference | GoogleAppEngineApplicationIap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    oauth2_client_id: cdktf.stringToTerraform(struct!.oauth2ClientId),
    oauth2_client_secret: cdktf.stringToTerraform(struct!.oauth2ClientSecret),
  }
}

export class GoogleAppEngineApplicationIapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAppEngineApplicationIap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._oauth2ClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientId = this._oauth2ClientId;
    }
    if (this._oauth2ClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientSecret = this._oauth2ClientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineApplicationIap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._oauth2ClientId = undefined;
      this._oauth2ClientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._oauth2ClientId = value.oauth2ClientId;
      this._oauth2ClientSecret = value.oauth2ClientSecret;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // oauth2_client_id - computed: false, optional: false, required: true
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }
  public set oauth2ClientId(value: string) {
    this._oauth2ClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_client_secret - computed: false, optional: false, required: true
  private _oauth2ClientSecret?: string; 
  public get oauth2ClientSecret() {
    return this.getStringAttribute('oauth2_client_secret');
  }
  public set oauth2ClientSecret(value: string) {
    this._oauth2ClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientSecretInput() {
    return this._oauth2ClientSecret;
  }

  // oauth2_client_secret_sha256 - computed: true, optional: false, required: false
  public get oauth2ClientSecretSha256() {
    return this.getStringAttribute('oauth2_client_secret_sha256');
  }
}
export interface GoogleAppEngineApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application#create GoogleAppEngineApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application#update GoogleAppEngineApplication#update}
  */
  readonly update?: string;
}

export function googleAppEngineApplicationTimeoutsToTerraform(struct?: GoogleAppEngineApplicationTimeoutsOutputReference | GoogleAppEngineApplicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class GoogleAppEngineApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAppEngineApplicationTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineApplicationTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application google_app_engine_application}
*/
export class GoogleAppEngineApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_app_engine_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application google_app_engine_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleAppEngineApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleAppEngineApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_application',
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
    this._authDomain = config.authDomain;
    this._databaseType = config.databaseType;
    this._locationId = config.locationId;
    this._project = config.project;
    this._servingStatus = config.servingStatus;
    this._featureSettings.internalValue = config.featureSettings;
    this._iap.internalValue = config.iap;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // auth_domain - computed: true, optional: true, required: false
  private _authDomain?: string; 
  public get authDomain() {
    return this.getStringAttribute('auth_domain');
  }
  public set authDomain(value: string) {
    this._authDomain = value;
  }
  public resetAuthDomain() {
    this._authDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDomainInput() {
    return this._authDomain;
  }

  // code_bucket - computed: true, optional: false, required: false
  public get codeBucket() {
    return this.getStringAttribute('code_bucket');
  }

  // database_type - computed: true, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // default_bucket - computed: true, optional: false, required: false
  public get defaultBucket() {
    return this.getStringAttribute('default_bucket');
  }

  // default_hostname - computed: true, optional: false, required: false
  public get defaultHostname() {
    return this.getStringAttribute('default_hostname');
  }

  // gcr_domain - computed: true, optional: false, required: false
  public get gcrDomain() {
    return this.getStringAttribute('gcr_domain');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_id - computed: false, optional: false, required: true
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
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

  // serving_status - computed: true, optional: true, required: false
  private _servingStatus?: string; 
  public get servingStatus() {
    return this.getStringAttribute('serving_status');
  }
  public set servingStatus(value: string) {
    this._servingStatus = value;
  }
  public resetServingStatus() {
    this._servingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servingStatusInput() {
    return this._servingStatus;
  }

  // url_dispatch_rule - computed: true, optional: false, required: false
  private _urlDispatchRule = new GoogleAppEngineApplicationUrlDispatchRuleList(this, "url_dispatch_rule", false);
  public get urlDispatchRule() {
    return this._urlDispatchRule;
  }

  // feature_settings - computed: false, optional: true, required: false
  private _featureSettings = new GoogleAppEngineApplicationFeatureSettingsOutputReference(this, "feature_settings");
  public get featureSettings() {
    return this._featureSettings;
  }
  public putFeatureSettings(value: GoogleAppEngineApplicationFeatureSettings) {
    this._featureSettings.internalValue = value;
  }
  public resetFeatureSettings() {
    this._featureSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSettingsInput() {
    return this._featureSettings.internalValue;
  }

  // iap - computed: false, optional: true, required: false
  private _iap = new GoogleAppEngineApplicationIapOutputReference(this, "iap");
  public get iap() {
    return this._iap;
  }
  public putIap(value: GoogleAppEngineApplicationIap) {
    this._iap.internalValue = value;
  }
  public resetIap() {
    this._iap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iapInput() {
    return this._iap.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleAppEngineApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleAppEngineApplicationTimeouts) {
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
      auth_domain: cdktf.stringToTerraform(this._authDomain),
      database_type: cdktf.stringToTerraform(this._databaseType),
      location_id: cdktf.stringToTerraform(this._locationId),
      project: cdktf.stringToTerraform(this._project),
      serving_status: cdktf.stringToTerraform(this._servingStatus),
      feature_settings: googleAppEngineApplicationFeatureSettingsToTerraform(this._featureSettings.internalValue),
      iap: googleAppEngineApplicationIapToTerraform(this._iap.internalValue),
      timeouts: googleAppEngineApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
