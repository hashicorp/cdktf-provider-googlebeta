// https://www.terraform.io/docs/providers/google-beta/r/google_firestore_document
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleFirestoreDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_firestore_document#collection GoogleFirestoreDocument#collection}
  */
  readonly collection: string;
  /**
  * The Firestore database id. Defaults to '"(default)"'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_firestore_document#database GoogleFirestoreDocument#database}
  */
  readonly database?: string;
  /**
  * The client-assigned document ID to use for this document during creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_firestore_document#document_id GoogleFirestoreDocument#document_id}
  */
  readonly documentId: string;
  /**
  * The document's [fields](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) formated as a json string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_firestore_document#fields GoogleFirestoreDocument#fields}
  */
  readonly fields: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_firestore_document#project GoogleFirestoreDocument#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_firestore_document#timeouts GoogleFirestoreDocument#timeouts}
  */
  readonly timeouts?: GoogleFirestoreDocumentTimeouts;
}
export interface GoogleFirestoreDocumentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_firestore_document#create GoogleFirestoreDocument#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_firestore_document#delete GoogleFirestoreDocument#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_firestore_document#update GoogleFirestoreDocument#update}
  */
  readonly update?: string;
}

export function googleFirestoreDocumentTimeoutsToTerraform(struct?: GoogleFirestoreDocumentTimeoutsOutputReference | GoogleFirestoreDocumentTimeouts | cdktf.IResolvable): any {
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

export class GoogleFirestoreDocumentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirestoreDocumentTimeouts | undefined {
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

  public set internalValue(value: GoogleFirestoreDocumentTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_firestore_document google_firestore_document}
*/
export class GoogleFirestoreDocument extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firestore_document";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_firestore_document google_firestore_document} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleFirestoreDocumentConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleFirestoreDocumentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firestore_document',
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
    this._collection = config.collection;
    this._database = config.database;
    this._documentId = config.documentId;
    this._fields = config.fields;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection - computed: false, optional: false, required: true
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // document_id - computed: false, optional: false, required: true
  private _documentId?: string; 
  public get documentId() {
    return this.getStringAttribute('document_id');
  }
  public set documentId(value: string) {
    this._documentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentIdInput() {
    return this._documentId;
  }

  // fields - computed: false, optional: false, required: true
  private _fields?: string; 
  public get fields() {
    return this.getStringAttribute('fields');
  }
  public set fields(value: string) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleFirestoreDocumentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleFirestoreDocumentTimeouts) {
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
      collection: cdktf.stringToTerraform(this._collection),
      database: cdktf.stringToTerraform(this._database),
      document_id: cdktf.stringToTerraform(this._documentId),
      fields: cdktf.stringToTerraform(this._fields),
      project: cdktf.stringToTerraform(this._project),
      timeouts: googleFirestoreDocumentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
