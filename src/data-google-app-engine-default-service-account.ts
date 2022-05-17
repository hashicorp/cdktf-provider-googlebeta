// https://www.terraform.io/docs/providers/google-beta/d/google_app_engine_default_service_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleAppEngineDefaultServiceAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_app_engine_default_service_account#project DataGoogleAppEngineDefaultServiceAccount#project}
  */
  readonly project?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/d/google_app_engine_default_service_account google_app_engine_default_service_account}
*/
export class DataGoogleAppEngineDefaultServiceAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_app_engine_default_service_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/d/google_app_engine_default_service_account google_app_engine_default_service_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleAppEngineDefaultServiceAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleAppEngineDefaultServiceAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_default_service_account',
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
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
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

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
