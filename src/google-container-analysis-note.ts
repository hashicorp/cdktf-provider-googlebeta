// https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleContainerAnalysisNoteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time of expiration for this note. Leave empty if note does not expire.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#expiration_time GoogleContainerAnalysisNote#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * A detailed description of the note
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#long_description GoogleContainerAnalysisNote#long_description}
  */
  readonly longDescription?: string;
  /**
  * The name of the note.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#name GoogleContainerAnalysisNote#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#project GoogleContainerAnalysisNote#project}
  */
  readonly project?: string;
  /**
  * Names of other notes related to this note.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#related_note_names GoogleContainerAnalysisNote#related_note_names}
  */
  readonly relatedNoteNames?: string[];
  /**
  * A one sentence description of the note.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#short_description GoogleContainerAnalysisNote#short_description}
  */
  readonly shortDescription?: string;
  /**
  * attestation_authority block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#attestation_authority GoogleContainerAnalysisNote#attestation_authority}
  */
  readonly attestationAuthority: GoogleContainerAnalysisNoteAttestationAuthority;
  /**
  * related_url block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#related_url GoogleContainerAnalysisNote#related_url}
  */
  readonly relatedUrl?: GoogleContainerAnalysisNoteRelatedUrl[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#timeouts GoogleContainerAnalysisNote#timeouts}
  */
  readonly timeouts?: GoogleContainerAnalysisNoteTimeouts;
}
export interface GoogleContainerAnalysisNoteAttestationAuthorityHint {
  /**
  * The human readable name of this Attestation Authority, for
example "qa".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#human_readable_name GoogleContainerAnalysisNote#human_readable_name}
  */
  readonly humanReadableName: string;
}

export function googleContainerAnalysisNoteAttestationAuthorityHintToTerraform(struct?: GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference | GoogleContainerAnalysisNoteAttestationAuthorityHint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    human_readable_name: cdktf.stringToTerraform(struct!.humanReadableName),
  }
}

export class GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAnalysisNoteAttestationAuthorityHint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._humanReadableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanReadableName = this._humanReadableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAnalysisNoteAttestationAuthorityHint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._humanReadableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._humanReadableName = value.humanReadableName;
    }
  }

  // human_readable_name - computed: false, optional: false, required: true
  private _humanReadableName?: string; 
  public get humanReadableName() {
    return this.getStringAttribute('human_readable_name');
  }
  public set humanReadableName(value: string) {
    this._humanReadableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get humanReadableNameInput() {
    return this._humanReadableName;
  }
}
export interface GoogleContainerAnalysisNoteAttestationAuthority {
  /**
  * hint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#hint GoogleContainerAnalysisNote#hint}
  */
  readonly hint: GoogleContainerAnalysisNoteAttestationAuthorityHint;
}

export function googleContainerAnalysisNoteAttestationAuthorityToTerraform(struct?: GoogleContainerAnalysisNoteAttestationAuthorityOutputReference | GoogleContainerAnalysisNoteAttestationAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hint: googleContainerAnalysisNoteAttestationAuthorityHintToTerraform(struct!.hint),
  }
}

export class GoogleContainerAnalysisNoteAttestationAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAnalysisNoteAttestationAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hint = this._hint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAnalysisNoteAttestationAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hint.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hint.internalValue = value.hint;
    }
  }

  // hint - computed: false, optional: false, required: true
  private _hint = new GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference(this, "hint");
  public get hint() {
    return this._hint;
  }
  public putHint(value: GoogleContainerAnalysisNoteAttestationAuthorityHint) {
    this._hint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hintInput() {
    return this._hint.internalValue;
  }
}
export interface GoogleContainerAnalysisNoteRelatedUrl {
  /**
  * Label to describe usage of the URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#label GoogleContainerAnalysisNote#label}
  */
  readonly label?: string;
  /**
  * Specific URL associated with the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#url GoogleContainerAnalysisNote#url}
  */
  readonly url: string;
}

export function googleContainerAnalysisNoteRelatedUrlToTerraform(struct?: GoogleContainerAnalysisNoteRelatedUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface GoogleContainerAnalysisNoteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#create GoogleContainerAnalysisNote#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#delete GoogleContainerAnalysisNote#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note#update GoogleContainerAnalysisNote#update}
  */
  readonly update?: string;
}

export function googleContainerAnalysisNoteTimeoutsToTerraform(struct?: GoogleContainerAnalysisNoteTimeoutsOutputReference | GoogleContainerAnalysisNoteTimeouts | cdktf.IResolvable): any {
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

export class GoogleContainerAnalysisNoteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAnalysisNoteTimeouts | undefined {
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

  public set internalValue(value: GoogleContainerAnalysisNoteTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note google_container_analysis_note}
*/
export class GoogleContainerAnalysisNote extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_analysis_note";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_analysis_note google_container_analysis_note} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleContainerAnalysisNoteConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleContainerAnalysisNoteConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_analysis_note',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.22.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._expirationTime = config.expirationTime;
    this._longDescription = config.longDescription;
    this._name = config.name;
    this._project = config.project;
    this._relatedNoteNames = config.relatedNoteNames;
    this._shortDescription = config.shortDescription;
    this._attestationAuthority.internalValue = config.attestationAuthority;
    this._relatedUrl = config.relatedUrl;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expiration_time - computed: false, optional: true, required: false
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // long_description - computed: false, optional: true, required: false
  private _longDescription?: string; 
  public get longDescription() {
    return this.getStringAttribute('long_description');
  }
  public set longDescription(value: string) {
    this._longDescription = value;
  }
  public resetLongDescription() {
    this._longDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longDescriptionInput() {
    return this._longDescription;
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

  // related_note_names - computed: false, optional: true, required: false
  private _relatedNoteNames?: string[]; 
  public get relatedNoteNames() {
    return cdktf.Fn.tolist(this.getListAttribute('related_note_names'));
  }
  public set relatedNoteNames(value: string[]) {
    this._relatedNoteNames = value;
  }
  public resetRelatedNoteNames() {
    this._relatedNoteNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedNoteNamesInput() {
    return this._relatedNoteNames;
  }

  // short_description - computed: false, optional: true, required: false
  private _shortDescription?: string; 
  public get shortDescription() {
    return this.getStringAttribute('short_description');
  }
  public set shortDescription(value: string) {
    this._shortDescription = value;
  }
  public resetShortDescription() {
    this._shortDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortDescriptionInput() {
    return this._shortDescription;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // attestation_authority - computed: false, optional: false, required: true
  private _attestationAuthority = new GoogleContainerAnalysisNoteAttestationAuthorityOutputReference(this, "attestation_authority");
  public get attestationAuthority() {
    return this._attestationAuthority;
  }
  public putAttestationAuthority(value: GoogleContainerAnalysisNoteAttestationAuthority) {
    this._attestationAuthority.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationAuthorityInput() {
    return this._attestationAuthority.internalValue;
  }

  // related_url - computed: false, optional: true, required: false
  private _relatedUrl?: GoogleContainerAnalysisNoteRelatedUrl[] | cdktf.IResolvable; 
  public get relatedUrl() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('related_url')));
  }
  public set relatedUrl(value: GoogleContainerAnalysisNoteRelatedUrl[] | cdktf.IResolvable) {
    this._relatedUrl = value;
  }
  public resetRelatedUrl() {
    this._relatedUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedUrlInput() {
    return this._relatedUrl;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleContainerAnalysisNoteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleContainerAnalysisNoteTimeouts) {
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
      expiration_time: cdktf.stringToTerraform(this._expirationTime),
      long_description: cdktf.stringToTerraform(this._longDescription),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      related_note_names: cdktf.listMapper(cdktf.stringToTerraform)(this._relatedNoteNames),
      short_description: cdktf.stringToTerraform(this._shortDescription),
      attestation_authority: googleContainerAnalysisNoteAttestationAuthorityToTerraform(this._attestationAuthority.internalValue),
      related_url: cdktf.listMapper(googleContainerAnalysisNoteRelatedUrlToTerraform)(this._relatedUrl),
      timeouts: googleContainerAnalysisNoteTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
