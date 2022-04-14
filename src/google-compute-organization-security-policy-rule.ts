// https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeOrganizationSecurityPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Action to perform when the client connection triggers the rule. Can currently be either
"allow", "deny" or "goto_next".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#action GoogleComputeOrganizationSecurityPolicyRule#action}
  */
  readonly action: string;
  /**
  * A description of the rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#description GoogleComputeOrganizationSecurityPolicyRule#description}
  */
  readonly description?: string;
  /**
  * The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#direction GoogleComputeOrganizationSecurityPolicyRule#direction}
  */
  readonly direction?: string;
  /**
  * Denotes whether to enable logging for a particular rule.
If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#enable_logging GoogleComputeOrganizationSecurityPolicyRule#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * The ID of the OrganizationSecurityPolicy this rule applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#policy_id GoogleComputeOrganizationSecurityPolicyRule#policy_id}
  */
  readonly policyId: string;
  /**
  * If set to true, the specified action is not enforced.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#preview GoogleComputeOrganizationSecurityPolicyRule#preview}
  */
  readonly preview?: boolean | cdktf.IResolvable;
  /**
  * An integer indicating the priority of a rule in the list. The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest prority.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#priority GoogleComputeOrganizationSecurityPolicyRule#priority}
  */
  readonly priority: number;
  /**
  * A list of network resource URLs to which this rule applies.
This field allows you to control which network's VMs get
this rule. If this field is left blank, all VMs
within the organization will receive the rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#target_resources GoogleComputeOrganizationSecurityPolicyRule#target_resources}
  */
  readonly targetResources?: string[];
  /**
  * A list of service accounts indicating the sets of
instances that are applied with this rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#target_service_accounts GoogleComputeOrganizationSecurityPolicyRule#target_service_accounts}
  */
  readonly targetServiceAccounts?: string[];
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#match GoogleComputeOrganizationSecurityPolicyRule#match}
  */
  readonly match: GoogleComputeOrganizationSecurityPolicyRuleMatch;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#timeouts GoogleComputeOrganizationSecurityPolicyRule#timeouts}
  */
  readonly timeouts?: GoogleComputeOrganizationSecurityPolicyRuleTimeouts;
}
export interface GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config {
  /**
  * The IP protocol to which this rule applies. The protocol
type is required when creating a firewall rule.
This value can either be one of the following well
known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),
or the IP protocol number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#ip_protocol GoogleComputeOrganizationSecurityPolicyRule#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * An optional list of ports to which this rule applies. This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: ["22"], ["80","443"], and
["12345-12349"].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#ports GoogleComputeOrganizationSecurityPolicyRule#ports}
  */
  readonly ports?: string[];
}

export function googleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    ports: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ports),
  }
}

export interface GoogleComputeOrganizationSecurityPolicyRuleMatchConfig {
  /**
  * Destination IP address range in CIDR format. Required for
EGRESS rules.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#dest_ip_ranges GoogleComputeOrganizationSecurityPolicyRule#dest_ip_ranges}
  */
  readonly destIpRanges?: string[];
  /**
  * Source IP address range in CIDR format. Required for
INGRESS rules.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#src_ip_ranges GoogleComputeOrganizationSecurityPolicyRule#src_ip_ranges}
  */
  readonly srcIpRanges?: string[];
  /**
  * layer4_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#layer4_config GoogleComputeOrganizationSecurityPolicyRule#layer4_config}
  */
  readonly layer4Config: GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config[] | cdktf.IResolvable;
}

export function googleComputeOrganizationSecurityPolicyRuleMatchConfigToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference | GoogleComputeOrganizationSecurityPolicyRuleMatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destIpRanges),
    src_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.srcIpRanges),
    layer4_config: cdktf.listMapper(googleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigToTerraform)(struct!.layer4Config),
  }
}

export class GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRuleMatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIpRanges = this._destIpRanges;
    }
    if (this._srcIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpRanges = this._srcIpRanges;
    }
    if (this._layer4Config !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer4Config = this._layer4Config;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRuleMatchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destIpRanges = undefined;
      this._srcIpRanges = undefined;
      this._layer4Config = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destIpRanges = value.destIpRanges;
      this._srcIpRanges = value.srcIpRanges;
      this._layer4Config = value.layer4Config;
    }
  }

  // dest_ip_ranges - computed: false, optional: true, required: false
  private _destIpRanges?: string[]; 
  public get destIpRanges() {
    return this.getListAttribute('dest_ip_ranges');
  }
  public set destIpRanges(value: string[]) {
    this._destIpRanges = value;
  }
  public resetDestIpRanges() {
    this._destIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpRangesInput() {
    return this._destIpRanges;
  }

  // src_ip_ranges - computed: false, optional: true, required: false
  private _srcIpRanges?: string[]; 
  public get srcIpRanges() {
    return this.getListAttribute('src_ip_ranges');
  }
  public set srcIpRanges(value: string[]) {
    this._srcIpRanges = value;
  }
  public resetSrcIpRanges() {
    this._srcIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpRangesInput() {
    return this._srcIpRanges;
  }

  // layer4_config - computed: false, optional: false, required: true
  private _layer4Config?: GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config[] | cdktf.IResolvable; 
  public get layer4Config() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('layer4_config');
  }
  public set layer4Config(value: GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config[] | cdktf.IResolvable) {
    this._layer4Config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layer4ConfigInput() {
    return this._layer4Config;
  }
}
export interface GoogleComputeOrganizationSecurityPolicyRuleMatch {
  /**
  * A description of the rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#description GoogleComputeOrganizationSecurityPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Preconfigured versioned expression. For organization security policy rules,
the only supported type is "FIREWALL". Default value: "FIREWALL" Possible values: ["FIREWALL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#versioned_expr GoogleComputeOrganizationSecurityPolicyRule#versioned_expr}
  */
  readonly versionedExpr?: string;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#config GoogleComputeOrganizationSecurityPolicyRule#config}
  */
  readonly config: GoogleComputeOrganizationSecurityPolicyRuleMatchConfig;
}

export function googleComputeOrganizationSecurityPolicyRuleMatchToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference | GoogleComputeOrganizationSecurityPolicyRuleMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    versioned_expr: cdktf.stringToTerraform(struct!.versionedExpr),
    config: googleComputeOrganizationSecurityPolicyRuleMatchConfigToTerraform(struct!.config),
  }
}

export class GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRuleMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._versionedExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionedExpr = this._versionedExpr;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRuleMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._versionedExpr = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._versionedExpr = value.versionedExpr;
      this._config.internalValue = value.config;
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

  // versioned_expr - computed: false, optional: true, required: false
  private _versionedExpr?: string; 
  public get versionedExpr() {
    return this.getStringAttribute('versioned_expr');
  }
  public set versionedExpr(value: string) {
    this._versionedExpr = value;
  }
  public resetVersionedExpr() {
    this._versionedExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionedExprInput() {
    return this._versionedExpr;
  }

  // config - computed: false, optional: false, required: true
  private _config = new GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleComputeOrganizationSecurityPolicyRuleMatchConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface GoogleComputeOrganizationSecurityPolicyRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#create GoogleComputeOrganizationSecurityPolicyRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#delete GoogleComputeOrganizationSecurityPolicyRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule#update GoogleComputeOrganizationSecurityPolicyRule#update}
  */
  readonly update?: string;
}

export function googleComputeOrganizationSecurityPolicyRuleTimeoutsToTerraform(struct?: GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference | GoogleComputeOrganizationSecurityPolicyRuleTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeOrganizationSecurityPolicyRuleTimeouts | undefined {
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

  public set internalValue(value: GoogleComputeOrganizationSecurityPolicyRuleTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule google_compute_organization_security_policy_rule}
*/
export class GoogleComputeOrganizationSecurityPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_organization_security_policy_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule google_compute_organization_security_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeOrganizationSecurityPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeOrganizationSecurityPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_organization_security_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.17.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._description = config.description;
    this._direction = config.direction;
    this._enableLogging = config.enableLogging;
    this._policyId = config.policyId;
    this._preview = config.preview;
    this._priority = config.priority;
    this._targetResources = config.targetResources;
    this._targetServiceAccounts = config.targetServiceAccounts;
    this._match.internalValue = config.match;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // preview - computed: false, optional: true, required: false
  private _preview?: boolean | cdktf.IResolvable; 
  public get preview() {
    return this.getBooleanAttribute('preview');
  }
  public set preview(value: boolean | cdktf.IResolvable) {
    this._preview = value;
  }
  public resetPreview() {
    this._preview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // target_resources - computed: false, optional: true, required: false
  private _targetResources?: string[]; 
  public get targetResources() {
    return this.getListAttribute('target_resources');
  }
  public set targetResources(value: string[]) {
    this._targetResources = value;
  }
  public resetTargetResources() {
    this._targetResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourcesInput() {
    return this._targetResources;
  }

  // target_service_accounts - computed: false, optional: true, required: false
  private _targetServiceAccounts?: string[]; 
  public get targetServiceAccounts() {
    return this.getListAttribute('target_service_accounts');
  }
  public set targetServiceAccounts(value: string[]) {
    this._targetServiceAccounts = value;
  }
  public resetTargetServiceAccounts() {
    this._targetServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceAccountsInput() {
    return this._targetServiceAccounts;
  }

  // match - computed: false, optional: false, required: true
  private _match = new GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: GoogleComputeOrganizationSecurityPolicyRuleMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeOrganizationSecurityPolicyRuleTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      direction: cdktf.stringToTerraform(this._direction),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      policy_id: cdktf.stringToTerraform(this._policyId),
      preview: cdktf.booleanToTerraform(this._preview),
      priority: cdktf.numberToTerraform(this._priority),
      target_resources: cdktf.listMapper(cdktf.stringToTerraform)(this._targetResources),
      target_service_accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._targetServiceAccounts),
      match: googleComputeOrganizationSecurityPolicyRuleMatchToTerraform(this._match.internalValue),
      timeouts: googleComputeOrganizationSecurityPolicyRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
