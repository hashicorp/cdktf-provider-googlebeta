// https://www.terraform.io/docs/providers/google-beta/d/google_spanner_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleSpannerInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the instance's configuration (similar but not
quite the same as a region) which defines the geographic placement and
replication of your databases in this instance. It determines where your data
is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc.
In order to obtain a valid list please consult the
[Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_spanner_instance#config DataGoogleSpannerInstance#config}
  */
  readonly config?: string;
  /**
  * The descriptive name for this instance as it appears in UIs. Must be
unique per project and between 4 and 30 characters in length.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_spanner_instance#display_name DataGoogleSpannerInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * A unique identifier for the instance, which cannot be changed after
the instance is created. The name must be between 6 and 30 characters
in length.


If not provided, a random string starting with 'tf-' will be selected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_spanner_instance#name DataGoogleSpannerInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_spanner_instance#project DataGoogleSpannerInstance#project}
  */
  readonly project?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/d/google_spanner_instance google_spanner_instance}
*/
export class DataGoogleSpannerInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_spanner_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/d/google_spanner_instance google_spanner_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleSpannerInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleSpannerInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_spanner_instance',
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
    this._config = config.config;
    this._displayName = config.displayName;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // force_destroy - computed: true, optional: false, required: false
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'labels').lookup(key);
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

  // num_nodes - computed: true, optional: false, required: false
  public get numNodes() {
    return this.getNumberAttribute('num_nodes');
  }

  // processing_units - computed: true, optional: false, required: false
  public get processingUnits() {
    return this.getNumberAttribute('processing_units');
  }

  // project - computed: false, optional: true, required: false
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      display_name: cdktf.stringToTerraform(this._displayName),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
