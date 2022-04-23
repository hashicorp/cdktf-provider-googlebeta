// https://www.terraform.io/docs/providers/google-beta/r/google_data_catalog_taxonomy_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataCatalogTaxonomyIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_catalog_taxonomy_iam_policy#policy_data GoogleDataCatalogTaxonomyIamPolicy#policy_data}
  */
  readonly policyData: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_catalog_taxonomy_iam_policy#project GoogleDataCatalogTaxonomyIamPolicy#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_catalog_taxonomy_iam_policy#region GoogleDataCatalogTaxonomyIamPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_catalog_taxonomy_iam_policy#taxonomy GoogleDataCatalogTaxonomyIamPolicy#taxonomy}
  */
  readonly taxonomy: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_catalog_taxonomy_iam_policy google_data_catalog_taxonomy_iam_policy}
*/
export class GoogleDataCatalogTaxonomyIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_catalog_taxonomy_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_catalog_taxonomy_iam_policy google_data_catalog_taxonomy_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataCatalogTaxonomyIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataCatalogTaxonomyIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_catalog_taxonomy_iam_policy',
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
    this._project = config.project;
    this._region = config.region;
    this._taxonomy = config.taxonomy;
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

  // taxonomy - computed: false, optional: false, required: true
  private _taxonomy?: string; 
  public get taxonomy() {
    return this.getStringAttribute('taxonomy');
  }
  public set taxonomy(value: string) {
    this._taxonomy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taxonomyInput() {
    return this._taxonomy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_data: cdktf.stringToTerraform(this._policyData),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      taxonomy: cdktf.stringToTerraform(this._taxonomy),
    };
  }
}