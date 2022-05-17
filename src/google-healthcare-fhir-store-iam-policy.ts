// https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleHealthcareFhirStoreIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store_iam_policy#fhir_store_id GoogleHealthcareFhirStoreIamPolicy#fhir_store_id}
  */
  readonly fhirStoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store_iam_policy#policy_data GoogleHealthcareFhirStoreIamPolicy#policy_data}
  */
  readonly policyData: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store_iam_policy google_healthcare_fhir_store_iam_policy}
*/
export class GoogleHealthcareFhirStoreIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_healthcare_fhir_store_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store_iam_policy google_healthcare_fhir_store_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleHealthcareFhirStoreIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleHealthcareFhirStoreIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_fhir_store_iam_policy',
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
    this._fhirStoreId = config.fhirStoreId;
    this._policyData = config.policyData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // fhir_store_id - computed: false, optional: false, required: true
  private _fhirStoreId?: string; 
  public get fhirStoreId() {
    return this.getStringAttribute('fhir_store_id');
  }
  public set fhirStoreId(value: string) {
    this._fhirStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fhirStoreIdInput() {
    return this._fhirStoreId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      fhir_store_id: cdktf.stringToTerraform(this._fhirStoreId),
      policy_data: cdktf.stringToTerraform(this._policyData),
    };
  }
}
