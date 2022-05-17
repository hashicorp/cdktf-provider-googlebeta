// https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeRouterNatConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of URLs of the IP resources to be drained. These IPs must be
valid static external IPs that have been assigned to the NAT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#drain_nat_ips GoogleComputeRouterNat#drain_nat_ips}
  */
  readonly drainNatIps?: string[];
  /**
  * Specifies if endpoint independent mapping is enabled. This is enabled by default. For more information
see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#enable_endpoint_independent_mapping GoogleComputeRouterNat#enable_endpoint_independent_mapping}
  */
  readonly enableEndpointIndependentMapping?: boolean | cdktf.IResolvable;
  /**
  * Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#icmp_idle_timeout_sec GoogleComputeRouterNat#icmp_idle_timeout_sec}
  */
  readonly icmpIdleTimeoutSec?: number;
  /**
  * Minimum number of ports allocated to a VM from this NAT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#min_ports_per_vm GoogleComputeRouterNat#min_ports_per_vm}
  */
  readonly minPortsPerVm?: number;
  /**
  * Name of the NAT service. The name must be 1-63 characters long and
comply with RFC1035.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#name GoogleComputeRouterNat#name}
  */
  readonly name: string;
  /**
  * How external IPs should be allocated for this NAT. Valid values are
'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#nat_ip_allocate_option GoogleComputeRouterNat#nat_ip_allocate_option}
  */
  readonly natIpAllocateOption: string;
  /**
  * Self-links of NAT IPs. Only valid if natIpAllocateOption
is set to MANUAL_ONLY.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#nat_ips GoogleComputeRouterNat#nat_ips}
  */
  readonly natIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#project GoogleComputeRouterNat#project}
  */
  readonly project?: string;
  /**
  * Region where the router and NAT reside.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#region GoogleComputeRouterNat#region}
  */
  readonly region?: string;
  /**
  * The name of the Cloud Router in which this NAT will be configured.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#router GoogleComputeRouterNat#router}
  */
  readonly router: string;
  /**
  * How NAT should be configured per Subnetwork.
If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the
IP ranges in every Subnetwork are allowed to Nat.
If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP
ranges in every Subnetwork are allowed to Nat.
'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat
(specified in the field subnetwork below). Note that if this field
contains ALL_SUBNETWORKS_ALL_IP_RANGES or
ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
other RouterNat section in any Router for this network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES", "LIST_OF_SUBNETWORKS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#source_subnetwork_ip_ranges_to_nat GoogleComputeRouterNat#source_subnetwork_ip_ranges_to_nat}
  */
  readonly sourceSubnetworkIpRangesToNat: string;
  /**
  * Timeout (in seconds) for TCP established connections.
Defaults to 1200s if not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#tcp_established_idle_timeout_sec GoogleComputeRouterNat#tcp_established_idle_timeout_sec}
  */
  readonly tcpEstablishedIdleTimeoutSec?: number;
  /**
  * Timeout (in seconds) for TCP transitory connections.
Defaults to 30s if not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#tcp_transitory_idle_timeout_sec GoogleComputeRouterNat#tcp_transitory_idle_timeout_sec}
  */
  readonly tcpTransitoryIdleTimeoutSec?: number;
  /**
  * Timeout (in seconds) for UDP connections. Defaults to 30s if not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#udp_idle_timeout_sec GoogleComputeRouterNat#udp_idle_timeout_sec}
  */
  readonly udpIdleTimeoutSec?: number;
  /**
  * log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#log_config GoogleComputeRouterNat#log_config}
  */
  readonly logConfig?: GoogleComputeRouterNatLogConfig;
  /**
  * subnetwork block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#subnetwork GoogleComputeRouterNat#subnetwork}
  */
  readonly subnetwork?: GoogleComputeRouterNatSubnetwork[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#timeouts GoogleComputeRouterNat#timeouts}
  */
  readonly timeouts?: GoogleComputeRouterNatTimeouts;
}
export interface GoogleComputeRouterNatLogConfig {
  /**
  * Indicates whether or not to export logs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#enable GoogleComputeRouterNat#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#filter GoogleComputeRouterNat#filter}
  */
  readonly filter: string;
}

export function googleComputeRouterNatLogConfigToTerraform(struct?: GoogleComputeRouterNatLogConfigOutputReference | GoogleComputeRouterNatLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    filter: cdktf.stringToTerraform(struct!.filter),
  }
}

export class GoogleComputeRouterNatLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRouterNatLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRouterNatLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._filter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._filter = value.filter;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
export interface GoogleComputeRouterNatSubnetwork {
  /**
  * Self-link of subnetwork to NAT
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#name GoogleComputeRouterNat#name}
  */
  readonly name: string;
  /**
  * List of the secondary ranges of the subnetwork that are allowed
to use NAT. This can be populated only if
'LIST_OF_SECONDARY_IP_RANGES' is one of the values in
sourceIpRangesToNat
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#secondary_ip_range_names GoogleComputeRouterNat#secondary_ip_range_names}
  */
  readonly secondaryIpRangeNames?: string[];
  /**
  * List of options for which source IPs in the subnetwork
should have NAT enabled. Supported values include:
'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES',
'PRIMARY_IP_RANGE'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#source_ip_ranges_to_nat GoogleComputeRouterNat#source_ip_ranges_to_nat}
  */
  readonly sourceIpRangesToNat: string[];
}

export function googleComputeRouterNatSubnetworkToTerraform(struct?: GoogleComputeRouterNatSubnetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secondary_ip_range_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.secondaryIpRangeNames),
    source_ip_ranges_to_nat: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceIpRangesToNat),
  }
}

export interface GoogleComputeRouterNatTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#create GoogleComputeRouterNat#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#delete GoogleComputeRouterNat#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat#update GoogleComputeRouterNat#update}
  */
  readonly update?: string;
}

export function googleComputeRouterNatTimeoutsToTerraform(struct?: GoogleComputeRouterNatTimeoutsOutputReference | GoogleComputeRouterNatTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeRouterNatTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRouterNatTimeouts | undefined {
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

  public set internalValue(value: GoogleComputeRouterNatTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat google_compute_router_nat}
*/
export class GoogleComputeRouterNat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_router_nat";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_router_nat google_compute_router_nat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeRouterNatConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeRouterNatConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_router_nat',
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
    this._drainNatIps = config.drainNatIps;
    this._enableEndpointIndependentMapping = config.enableEndpointIndependentMapping;
    this._icmpIdleTimeoutSec = config.icmpIdleTimeoutSec;
    this._minPortsPerVm = config.minPortsPerVm;
    this._name = config.name;
    this._natIpAllocateOption = config.natIpAllocateOption;
    this._natIps = config.natIps;
    this._project = config.project;
    this._region = config.region;
    this._router = config.router;
    this._sourceSubnetworkIpRangesToNat = config.sourceSubnetworkIpRangesToNat;
    this._tcpEstablishedIdleTimeoutSec = config.tcpEstablishedIdleTimeoutSec;
    this._tcpTransitoryIdleTimeoutSec = config.tcpTransitoryIdleTimeoutSec;
    this._udpIdleTimeoutSec = config.udpIdleTimeoutSec;
    this._logConfig.internalValue = config.logConfig;
    this._subnetwork = config.subnetwork;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // drain_nat_ips - computed: false, optional: true, required: false
  private _drainNatIps?: string[]; 
  public get drainNatIps() {
    return cdktf.Fn.tolist(this.getListAttribute('drain_nat_ips'));
  }
  public set drainNatIps(value: string[]) {
    this._drainNatIps = value;
  }
  public resetDrainNatIps() {
    this._drainNatIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainNatIpsInput() {
    return this._drainNatIps;
  }

  // enable_endpoint_independent_mapping - computed: false, optional: true, required: false
  private _enableEndpointIndependentMapping?: boolean | cdktf.IResolvable; 
  public get enableEndpointIndependentMapping() {
    return this.getBooleanAttribute('enable_endpoint_independent_mapping');
  }
  public set enableEndpointIndependentMapping(value: boolean | cdktf.IResolvable) {
    this._enableEndpointIndependentMapping = value;
  }
  public resetEnableEndpointIndependentMapping() {
    this._enableEndpointIndependentMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEndpointIndependentMappingInput() {
    return this._enableEndpointIndependentMapping;
  }

  // icmp_idle_timeout_sec - computed: false, optional: true, required: false
  private _icmpIdleTimeoutSec?: number; 
  public get icmpIdleTimeoutSec() {
    return this.getNumberAttribute('icmp_idle_timeout_sec');
  }
  public set icmpIdleTimeoutSec(value: number) {
    this._icmpIdleTimeoutSec = value;
  }
  public resetIcmpIdleTimeoutSec() {
    this._icmpIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpIdleTimeoutSecInput() {
    return this._icmpIdleTimeoutSec;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // min_ports_per_vm - computed: false, optional: true, required: false
  private _minPortsPerVm?: number; 
  public get minPortsPerVm() {
    return this.getNumberAttribute('min_ports_per_vm');
  }
  public set minPortsPerVm(value: number) {
    this._minPortsPerVm = value;
  }
  public resetMinPortsPerVm() {
    this._minPortsPerVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPortsPerVmInput() {
    return this._minPortsPerVm;
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

  // nat_ip_allocate_option - computed: false, optional: false, required: true
  private _natIpAllocateOption?: string; 
  public get natIpAllocateOption() {
    return this.getStringAttribute('nat_ip_allocate_option');
  }
  public set natIpAllocateOption(value: string) {
    this._natIpAllocateOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpAllocateOptionInput() {
    return this._natIpAllocateOption;
  }

  // nat_ips - computed: false, optional: true, required: false
  private _natIps?: string[]; 
  public get natIps() {
    return cdktf.Fn.tolist(this.getListAttribute('nat_ips'));
  }
  public set natIps(value: string[]) {
    this._natIps = value;
  }
  public resetNatIps() {
    this._natIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpsInput() {
    return this._natIps;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // router - computed: false, optional: false, required: true
  private _router?: string; 
  public get router() {
    return this.getStringAttribute('router');
  }
  public set router(value: string) {
    this._router = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
  }

  // source_subnetwork_ip_ranges_to_nat - computed: false, optional: false, required: true
  private _sourceSubnetworkIpRangesToNat?: string; 
  public get sourceSubnetworkIpRangesToNat() {
    return this.getStringAttribute('source_subnetwork_ip_ranges_to_nat');
  }
  public set sourceSubnetworkIpRangesToNat(value: string) {
    this._sourceSubnetworkIpRangesToNat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSubnetworkIpRangesToNatInput() {
    return this._sourceSubnetworkIpRangesToNat;
  }

  // tcp_established_idle_timeout_sec - computed: false, optional: true, required: false
  private _tcpEstablishedIdleTimeoutSec?: number; 
  public get tcpEstablishedIdleTimeoutSec() {
    return this.getNumberAttribute('tcp_established_idle_timeout_sec');
  }
  public set tcpEstablishedIdleTimeoutSec(value: number) {
    this._tcpEstablishedIdleTimeoutSec = value;
  }
  public resetTcpEstablishedIdleTimeoutSec() {
    this._tcpEstablishedIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEstablishedIdleTimeoutSecInput() {
    return this._tcpEstablishedIdleTimeoutSec;
  }

  // tcp_transitory_idle_timeout_sec - computed: false, optional: true, required: false
  private _tcpTransitoryIdleTimeoutSec?: number; 
  public get tcpTransitoryIdleTimeoutSec() {
    return this.getNumberAttribute('tcp_transitory_idle_timeout_sec');
  }
  public set tcpTransitoryIdleTimeoutSec(value: number) {
    this._tcpTransitoryIdleTimeoutSec = value;
  }
  public resetTcpTransitoryIdleTimeoutSec() {
    this._tcpTransitoryIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTransitoryIdleTimeoutSecInput() {
    return this._tcpTransitoryIdleTimeoutSec;
  }

  // udp_idle_timeout_sec - computed: false, optional: true, required: false
  private _udpIdleTimeoutSec?: number; 
  public get udpIdleTimeoutSec() {
    return this.getNumberAttribute('udp_idle_timeout_sec');
  }
  public set udpIdleTimeoutSec(value: number) {
    this._udpIdleTimeoutSec = value;
  }
  public resetUdpIdleTimeoutSec() {
    this._udpIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpIdleTimeoutSecInput() {
    return this._udpIdleTimeoutSec;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new GoogleComputeRouterNatLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: GoogleComputeRouterNatLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: GoogleComputeRouterNatSubnetwork[] | cdktf.IResolvable; 
  public get subnetwork() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('subnetwork')));
  }
  public set subnetwork(value: GoogleComputeRouterNatSubnetwork[] | cdktf.IResolvable) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeRouterNatTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeRouterNatTimeouts) {
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
      drain_nat_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._drainNatIps),
      enable_endpoint_independent_mapping: cdktf.booleanToTerraform(this._enableEndpointIndependentMapping),
      icmp_idle_timeout_sec: cdktf.numberToTerraform(this._icmpIdleTimeoutSec),
      min_ports_per_vm: cdktf.numberToTerraform(this._minPortsPerVm),
      name: cdktf.stringToTerraform(this._name),
      nat_ip_allocate_option: cdktf.stringToTerraform(this._natIpAllocateOption),
      nat_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._natIps),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      router: cdktf.stringToTerraform(this._router),
      source_subnetwork_ip_ranges_to_nat: cdktf.stringToTerraform(this._sourceSubnetworkIpRangesToNat),
      tcp_established_idle_timeout_sec: cdktf.numberToTerraform(this._tcpEstablishedIdleTimeoutSec),
      tcp_transitory_idle_timeout_sec: cdktf.numberToTerraform(this._tcpTransitoryIdleTimeoutSec),
      udp_idle_timeout_sec: cdktf.numberToTerraform(this._udpIdleTimeoutSec),
      log_config: googleComputeRouterNatLogConfigToTerraform(this._logConfig.internalValue),
      subnetwork: cdktf.listMapper(googleComputeRouterNatSubnetworkToTerraform)(this._subnetwork),
      timeouts: googleComputeRouterNatTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
