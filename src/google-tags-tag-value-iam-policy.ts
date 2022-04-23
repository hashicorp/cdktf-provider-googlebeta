// https://www.terraform.io/docs/providers/google-beta/r/google_tags_tag_value_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleTagsTagValueIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_tags_tag_value_iam_policy#policy_data GoogleTagsTagValueIamPolicy#policy_data}
  */
  readonly policyData: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_tags_tag_value_iam_policy#tag_value GoogleTagsTagValueIamPolicy#tag_value}
  */
  readonly tagValue: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_tags_tag_value_iam_policy google_tags_tag_value_iam_policy}
*/
export class GoogleTagsTagValueIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_tags_tag_value_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_tags_tag_value_iam_policy google_tags_tag_value_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleTagsTagValueIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleTagsTagValueIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_tags_tag_value_iam_policy',
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
    this._policyData = config.policyData;
    this._tagValue = config.tagValue;
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

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_data: cdktf.stringToTerraform(this._policyData),
      tag_value: cdktf.stringToTerraform(this._tagValue),
    };
  }
}