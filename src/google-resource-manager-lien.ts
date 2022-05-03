// https://www.terraform.io/docs/providers/google-beta/r/google_resource_manager_lien
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleResourceManagerLienConfig extends cdktf.TerraformMetaArguments {
  /**
  * A stable, user-visible/meaningful string identifying the origin
of the Lien, intended to be inspected programmatically. Maximum length of
200 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_resource_manager_lien#origin GoogleResourceManagerLien#origin}
  */
  readonly origin: string;
  /**
  * A reference to the resource this Lien is attached to.
The server will validate the parent against those for which Liens are supported.
Since a variety of objects can have Liens against them, you must provide the type
prefix (e.g. "projects/my-project-name").
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_resource_manager_lien#parent GoogleResourceManagerLien#parent}
  */
  readonly parent: string;
  /**
  * Concise user-visible strings indicating why an action cannot be performed
on a resource. Maximum length of 200 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_resource_manager_lien#reason GoogleResourceManagerLien#reason}
  */
  readonly reason: string;
  /**
  * The types of operations which should be blocked as a result of this Lien.
Each value should correspond to an IAM permission. The server will validate
the permissions against those for which Liens are supported.  An empty
list is meaningless and will be rejected.
e.g. ['resourcemanager.projects.delete']
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_resource_manager_lien#restrictions GoogleResourceManagerLien#restrictions}
  */
  readonly restrictions: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_resource_manager_lien#timeouts GoogleResourceManagerLien#timeouts}
  */
  readonly timeouts?: GoogleResourceManagerLienTimeouts;
}
export interface GoogleResourceManagerLienTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_resource_manager_lien#create GoogleResourceManagerLien#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_resource_manager_lien#delete GoogleResourceManagerLien#delete}
  */
  readonly delete?: string;
}

export function googleResourceManagerLienTimeoutsToTerraform(struct?: GoogleResourceManagerLienTimeoutsOutputReference | GoogleResourceManagerLienTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class GoogleResourceManagerLienTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleResourceManagerLienTimeouts | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleResourceManagerLienTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_resource_manager_lien google_resource_manager_lien}
*/
export class GoogleResourceManagerLien extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_resource_manager_lien";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_resource_manager_lien google_resource_manager_lien} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleResourceManagerLienConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleResourceManagerLienConfig) {
    super(scope, id, {
      terraformResourceType: 'google_resource_manager_lien',
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
    this._origin = config.origin;
    this._parent = config.parent;
    this._reason = config.reason;
    this._restrictions = config.restrictions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // origin - computed: false, optional: false, required: true
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // reason - computed: false, optional: false, required: true
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // restrictions - computed: false, optional: false, required: true
  private _restrictions?: string[]; 
  public get restrictions() {
    return this.getListAttribute('restrictions');
  }
  public set restrictions(value: string[]) {
    this._restrictions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleResourceManagerLienTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleResourceManagerLienTimeouts) {
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
      origin: cdktf.stringToTerraform(this._origin),
      parent: cdktf.stringToTerraform(this._parent),
      reason: cdktf.stringToTerraform(this._reason),
      restrictions: cdktf.listMapper(cdktf.stringToTerraform)(this._restrictions),
      timeouts: googleResourceManagerLienTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
