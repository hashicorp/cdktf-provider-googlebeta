// https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBigtableTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Bigtable instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table#instance_name GoogleBigtableTable#instance_name}
  */
  readonly instanceName: string;
  /**
  * The name of the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table#name GoogleBigtableTable#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table#project GoogleBigtableTable#project}
  */
  readonly project?: string;
  /**
  * A list of predefined keys to split the table on. !> Warning: Modifying the split_keys of an existing table will cause Terraform to delete/recreate the entire google_bigtable_table resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table#split_keys GoogleBigtableTable#split_keys}
  */
  readonly splitKeys?: string[];
  /**
  * column_family block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table#column_family GoogleBigtableTable#column_family}
  */
  readonly columnFamily?: GoogleBigtableTableColumnFamily[] | cdktf.IResolvable;
}
export interface GoogleBigtableTableColumnFamily {
  /**
  * The name of the column family.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table#family GoogleBigtableTable#family}
  */
  readonly family: string;
}

export function googleBigtableTableColumnFamilyToTerraform(struct?: GoogleBigtableTableColumnFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table google_bigtable_table}
*/
export class GoogleBigtableTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigtable_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table google_bigtable_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBigtableTableConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBigtableTableConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigtable_table',
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
    this._instanceName = config.instanceName;
    this._name = config.name;
    this._project = config.project;
    this._splitKeys = config.splitKeys;
    this._columnFamily = config.columnFamily;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
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

  // split_keys - computed: false, optional: true, required: false
  private _splitKeys?: string[]; 
  public get splitKeys() {
    return this.getListAttribute('split_keys');
  }
  public set splitKeys(value: string[]) {
    this._splitKeys = value;
  }
  public resetSplitKeys() {
    this._splitKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitKeysInput() {
    return this._splitKeys;
  }

  // column_family - computed: false, optional: true, required: false
  private _columnFamily?: GoogleBigtableTableColumnFamily[] | cdktf.IResolvable; 
  public get columnFamily() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('column_family')));
  }
  public set columnFamily(value: GoogleBigtableTableColumnFamily[] | cdktf.IResolvable) {
    this._columnFamily = value;
  }
  public resetColumnFamily() {
    this._columnFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnFamilyInput() {
    return this._columnFamily;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_name: cdktf.stringToTerraform(this._instanceName),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      split_keys: cdktf.listMapper(cdktf.stringToTerraform)(this._splitKeys),
      column_family: cdktf.listMapper(googleBigtableTableColumnFamilyToTerraform)(this._columnFamily),
    };
  }
}