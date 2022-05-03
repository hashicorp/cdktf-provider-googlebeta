// https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDialogflowCxEntityTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Represents kinds of entities.
* AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.
* AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity. Possible values: ["AUTO_EXPANSION_MODE_DEFAULT", "AUTO_EXPANSION_MODE_UNSPECIFIED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#auto_expansion_mode GoogleDialogflowCxEntityType#auto_expansion_mode}
  */
  readonly autoExpansionMode?: string;
  /**
  * The human-readable name of the entity type, unique within the agent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#display_name GoogleDialogflowCxEntityType#display_name}
  */
  readonly displayName: string;
  /**
  * Enables fuzzy entity extraction during classification.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#enable_fuzzy_extraction GoogleDialogflowCxEntityType#enable_fuzzy_extraction}
  */
  readonly enableFuzzyExtraction?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the entity type can be automatically expanded.
* KIND_MAP: Map entity types allow mapping of a group of synonyms to a canonical value.
* KIND_LIST: List entity types contain a set of entries that do not map to canonical values. However, list entity types can contain references to other entity types (with or without aliases).
* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#kind GoogleDialogflowCxEntityType#kind}
  */
  readonly kind: string;
  /**
  * The language of the following fields in entityType:
EntityType.entities.value
EntityType.entities.synonyms
EntityType.excluded_phrases.value
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#language_code GoogleDialogflowCxEntityType#language_code}
  */
  readonly languageCode?: string;
  /**
  * The agent to create a entity type for. 
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#parent GoogleDialogflowCxEntityType#parent}
  */
  readonly parent?: string;
  /**
  * Indicates whether parameters of the entity type should be redacted in log. If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#redact GoogleDialogflowCxEntityType#redact}
  */
  readonly redact?: boolean | cdktf.IResolvable;
  /**
  * entities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#entities GoogleDialogflowCxEntityType#entities}
  */
  readonly entities: GoogleDialogflowCxEntityTypeEntities[] | cdktf.IResolvable;
  /**
  * excluded_phrases block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#excluded_phrases GoogleDialogflowCxEntityType#excluded_phrases}
  */
  readonly excludedPhrases?: GoogleDialogflowCxEntityTypeExcludedPhrases[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#timeouts GoogleDialogflowCxEntityType#timeouts}
  */
  readonly timeouts?: GoogleDialogflowCxEntityTypeTimeouts;
}
export interface GoogleDialogflowCxEntityTypeEntities {
  /**
  * A collection of value synonyms. For example, if the entity type is vegetable, and value is scallions, a synonym could be green onions.
For KIND_LIST entity types: This collection must contain exactly one synonym equal to value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#synonyms GoogleDialogflowCxEntityType#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * The primary value associated with this entity entry. For example, if the entity type is vegetable, the value could be scallions.
For KIND_MAP entity types: A canonical value to be used in place of synonyms.
For KIND_LIST entity types: A string that can contain references to other entity types (with or without aliases).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#value GoogleDialogflowCxEntityType#value}
  */
  readonly value?: string;
}

export function googleDialogflowCxEntityTypeEntitiesToTerraform(struct?: GoogleDialogflowCxEntityTypeEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    synonyms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.synonyms),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface GoogleDialogflowCxEntityTypeExcludedPhrases {
  /**
  * The word or phrase to be excluded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#value GoogleDialogflowCxEntityType#value}
  */
  readonly value?: string;
}

export function googleDialogflowCxEntityTypeExcludedPhrasesToTerraform(struct?: GoogleDialogflowCxEntityTypeExcludedPhrases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface GoogleDialogflowCxEntityTypeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#create GoogleDialogflowCxEntityType#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#delete GoogleDialogflowCxEntityType#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type#update GoogleDialogflowCxEntityType#update}
  */
  readonly update?: string;
}

export function googleDialogflowCxEntityTypeTimeoutsToTerraform(struct?: GoogleDialogflowCxEntityTypeTimeoutsOutputReference | GoogleDialogflowCxEntityTypeTimeouts | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxEntityTypeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxEntityTypeTimeouts | undefined {
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

  public set internalValue(value: GoogleDialogflowCxEntityTypeTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type google_dialogflow_cx_entity_type}
*/
export class GoogleDialogflowCxEntityType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_entity_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_cx_entity_type google_dialogflow_cx_entity_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDialogflowCxEntityTypeConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDialogflowCxEntityTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_entity_type',
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
    this._autoExpansionMode = config.autoExpansionMode;
    this._displayName = config.displayName;
    this._enableFuzzyExtraction = config.enableFuzzyExtraction;
    this._kind = config.kind;
    this._languageCode = config.languageCode;
    this._parent = config.parent;
    this._redact = config.redact;
    this._entities = config.entities;
    this._excludedPhrases = config.excludedPhrases;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_expansion_mode - computed: false, optional: true, required: false
  private _autoExpansionMode?: string; 
  public get autoExpansionMode() {
    return this.getStringAttribute('auto_expansion_mode');
  }
  public set autoExpansionMode(value: string) {
    this._autoExpansionMode = value;
  }
  public resetAutoExpansionMode() {
    this._autoExpansionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExpansionModeInput() {
    return this._autoExpansionMode;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enable_fuzzy_extraction - computed: false, optional: true, required: false
  private _enableFuzzyExtraction?: boolean | cdktf.IResolvable; 
  public get enableFuzzyExtraction() {
    return this.getBooleanAttribute('enable_fuzzy_extraction');
  }
  public set enableFuzzyExtraction(value: boolean | cdktf.IResolvable) {
    this._enableFuzzyExtraction = value;
  }
  public resetEnableFuzzyExtraction() {
    this._enableFuzzyExtraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFuzzyExtractionInput() {
    return this._enableFuzzyExtraction;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // redact - computed: false, optional: true, required: false
  private _redact?: boolean | cdktf.IResolvable; 
  public get redact() {
    return this.getBooleanAttribute('redact');
  }
  public set redact(value: boolean | cdktf.IResolvable) {
    this._redact = value;
  }
  public resetRedact() {
    this._redact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactInput() {
    return this._redact;
  }

  // entities - computed: false, optional: false, required: true
  private _entities?: GoogleDialogflowCxEntityTypeEntities[] | cdktf.IResolvable; 
  public get entities() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('entities');
  }
  public set entities(value: GoogleDialogflowCxEntityTypeEntities[] | cdktf.IResolvable) {
    this._entities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities;
  }

  // excluded_phrases - computed: false, optional: true, required: false
  private _excludedPhrases?: GoogleDialogflowCxEntityTypeExcludedPhrases[] | cdktf.IResolvable; 
  public get excludedPhrases() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('excluded_phrases');
  }
  public set excludedPhrases(value: GoogleDialogflowCxEntityTypeExcludedPhrases[] | cdktf.IResolvable) {
    this._excludedPhrases = value;
  }
  public resetExcludedPhrases() {
    this._excludedPhrases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPhrasesInput() {
    return this._excludedPhrases;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDialogflowCxEntityTypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDialogflowCxEntityTypeTimeouts) {
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
      auto_expansion_mode: cdktf.stringToTerraform(this._autoExpansionMode),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_fuzzy_extraction: cdktf.booleanToTerraform(this._enableFuzzyExtraction),
      kind: cdktf.stringToTerraform(this._kind),
      language_code: cdktf.stringToTerraform(this._languageCode),
      parent: cdktf.stringToTerraform(this._parent),
      redact: cdktf.booleanToTerraform(this._redact),
      entities: cdktf.listMapper(googleDialogflowCxEntityTypeEntitiesToTerraform)(this._entities),
      excluded_phrases: cdktf.listMapper(googleDialogflowCxEntityTypeExcludedPhrasesToTerraform)(this._excludedPhrases),
      timeouts: googleDialogflowCxEntityTypeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
