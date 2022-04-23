// https://www.terraform.io/docs/providers/google-beta/r/google_kms_key_ring_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleKmsKeyRingIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_kms_key_ring_iam_policy#key_ring_id GoogleKmsKeyRingIamPolicy#key_ring_id}
  */
  readonly keyRingId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_kms_key_ring_iam_policy#policy_data GoogleKmsKeyRingIamPolicy#policy_data}
  */
  readonly policyData: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_kms_key_ring_iam_policy google_kms_key_ring_iam_policy}
*/
export class GoogleKmsKeyRingIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_kms_key_ring_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_kms_key_ring_iam_policy google_kms_key_ring_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleKmsKeyRingIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleKmsKeyRingIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_key_ring_iam_policy',
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
    this._keyRingId = config.keyRingId;
    this._policyData = config.policyData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_ring_id - computed: false, optional: false, required: true
  private _keyRingId?: string; 
  public get keyRingId() {
    return this.getStringAttribute('key_ring_id');
  }
  public set keyRingId(value: string) {
    this._keyRingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingIdInput() {
    return this._keyRingId;
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData?: string; 
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }
  public set policyData(value: string) {
    this._policyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDataInput() {
    return this._policyData;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_ring_id: cdktf.stringToTerraform(this._keyRingId),
      policy_data: cdktf.stringToTerraform(this._policyData),
    };
  }
}