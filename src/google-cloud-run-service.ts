// https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleCloudRunServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#autogenerate_revision_name GoogleCloudRunService#autogenerate_revision_name}
  */
  readonly autogenerateRevisionName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#id GoogleCloudRunService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the cloud run instance. eg us-central1
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#location GoogleCloudRunService#location}
  */
  readonly location: string;
  /**
  * Name must be unique within a namespace, within a Cloud Run region.
Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#name GoogleCloudRunService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#project GoogleCloudRunService#project}
  */
  readonly project?: string;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#metadata GoogleCloudRunService#metadata}
  */
  readonly metadata?: GoogleCloudRunServiceMetadata;
  /**
  * template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#template GoogleCloudRunService#template}
  */
  readonly template?: GoogleCloudRunServiceTemplate;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#timeouts GoogleCloudRunService#timeouts}
  */
  readonly timeouts?: GoogleCloudRunServiceTimeouts;
  /**
  * traffic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#traffic GoogleCloudRunService#traffic}
  */
  readonly traffic?: GoogleCloudRunServiceTraffic[] | cdktf.IResolvable;
}
export interface GoogleCloudRunServiceStatusConditions {
}

export function googleCloudRunServiceStatusConditionsToTerraform(struct?: GoogleCloudRunServiceStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleCloudRunServiceStatusConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleCloudRunServiceStatusConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceStatusConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleCloudRunServiceStatusConditionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleCloudRunServiceStatusConditionsOutputReference {
    return new GoogleCloudRunServiceStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunServiceStatus {
}

export function googleCloudRunServiceStatusToTerraform(struct?: GoogleCloudRunServiceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleCloudRunServiceStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleCloudRunServiceStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GoogleCloudRunServiceStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // latest_created_revision_name - computed: true, optional: false, required: false
  public get latestCreatedRevisionName() {
    return this.getStringAttribute('latest_created_revision_name');
  }

  // latest_ready_revision_name - computed: true, optional: false, required: false
  public get latestReadyRevisionName() {
    return this.getStringAttribute('latest_ready_revision_name');
  }

  // observed_generation - computed: true, optional: false, required: false
  public get observedGeneration() {
    return this.getNumberAttribute('observed_generation');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class GoogleCloudRunServiceStatusList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleCloudRunServiceStatusOutputReference {
    return new GoogleCloudRunServiceStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunServiceMetadata {
  /**
  * Annotations is a key value map stored with a resource that
may be set by external tools to store and retrieve arbitrary metadata. More
info: http://kubernetes.io/docs/user-guide/annotations

**Note**: The Cloud Run API may add additional annotations that were not provided in your config.
If terraform plan shows a diff where a server-side annotation is added, you can add it to your config
or apply the lifecycle.ignore_changes rule to the metadata.0.annotations field.

Cloud Run (fully managed) uses the following annotation keys to configure features on a Service:

- 'run.googleapis.com/ingress' sets the [ingress settings](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--ingress)
  for the Service. For example, '"run.googleapis.com/ingress" = "all"'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#annotations GoogleCloudRunService#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize
(scope and select) objects. May match selectors of replication controllers
and routes.
More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#labels GoogleCloudRunService#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * In Cloud Run the namespace must be equal to either the
project ID or project number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#namespace GoogleCloudRunService#namespace}
  */
  readonly namespace?: string;
}

export function googleCloudRunServiceMetadataToTerraform(struct?: GoogleCloudRunServiceMetadataOutputReference | GoogleCloudRunServiceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class GoogleCloudRunServiceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunServiceMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface GoogleCloudRunServiceTemplateMetadata {
  /**
  * Annotations is a key value map stored with a resource that
may be set by external tools to store and retrieve arbitrary metadata. More
info: http://kubernetes.io/docs/user-guide/annotations

**Note**: The Cloud Run API may add additional annotations that were not provided in your config.
If terraform plan shows a diff where a server-side annotation is added, you can add it to your config
or apply the lifecycle.ignore_changes rule to the metadata.0.annotations field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#annotations GoogleCloudRunService#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize
(scope and select) objects. May match selectors of replication controllers
and routes.
More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#labels GoogleCloudRunService#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name must be unique within a namespace, within a Cloud Run region.
Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#name GoogleCloudRunService#name}
  */
  readonly name?: string;
  /**
  * In Cloud Run the namespace must be equal to either the
project ID or project number. It will default to the resource's project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#namespace GoogleCloudRunService#namespace}
  */
  readonly namespace?: string;
}

export function googleCloudRunServiceTemplateMetadataToTerraform(struct?: GoogleCloudRunServiceTemplateMetadataOutputReference | GoogleCloudRunServiceTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class GoogleCloudRunServiceTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef {
  /**
  * A Cloud Secret Manager secret version. Must be 'latest' for the latest
version or an integer for a specific version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#key GoogleCloudRunService#key}
  */
  readonly key: string;
  /**
  * The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. 
If the secret is in another project, you must define an alias. 
An alias definition has the form: :projects/<project-id|project-number>/secrets/. 
If multiple alias definitions are needed, they must be separated by commas. 
The alias definitions must be set on the run.googleapis.com/secrets annotation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#name GoogleCloudRunService#name}
  */
  readonly name: string;
}

export function googleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefToTerraform(struct?: GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference | GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}
export interface GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom {
  /**
  * secret_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#secret_key_ref GoogleCloudRunService#secret_key_ref}
  */
  readonly secretKeyRef: GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef;
}

export function googleCloudRunServiceTemplateSpecContainersEnvValueFromToTerraform(struct?: GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference | GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: googleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretKeyRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: false, required: true
  private _secretKeyRef = new GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: GoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface GoogleCloudRunServiceTemplateSpecContainersEnv {
  /**
  * Name of the environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#name GoogleCloudRunService#name}
  */
  readonly name?: string;
  /**
  * Variable references $(VAR_NAME) are expanded
using the previous defined environment variables in the container and
any route environment variables. If a variable cannot be resolved,
the reference in the input string will be unchanged. The $(VAR_NAME)
syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped
references will never be expanded, regardless of whether the variable
exists or not.
Defaults to "".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#value GoogleCloudRunService#value}
  */
  readonly value?: string;
  /**
  * value_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#value_from GoogleCloudRunService#value_from}
  */
  readonly valueFrom?: GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom;
}

export function googleCloudRunServiceTemplateSpecContainersEnvToTerraform(struct?: GoogleCloudRunServiceTemplateSpecContainersEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: googleCloudRunServiceTemplateSpecContainersEnvValueFromToTerraform(struct!.valueFrom),
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpecContainersEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpecContainersEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new GoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: GoogleCloudRunServiceTemplateSpecContainersEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersEnvList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudRunServiceTemplateSpecContainersEnv[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference {
    return new GoogleCloudRunServiceTemplateSpecContainersEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference {
  /**
  * Name of the referent.
More info:
https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#name GoogleCloudRunService#name}
  */
  readonly name: string;
}

export function googleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceToTerraform(struct?: GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference | GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef {
  /**
  * Specify whether the ConfigMap must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#optional GoogleCloudRunService#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * local_object_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#local_object_reference GoogleCloudRunService#local_object_reference}
  */
  readonly localObjectReference?: GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference;
}

export function googleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefToTerraform(struct?: GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference | GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    local_object_reference: googleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceToTerraform(struct!.localObjectReference),
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._localObjectReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localObjectReference = this._localObjectReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optional = undefined;
      this._localObjectReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optional = value.optional;
      this._localObjectReference.internalValue = value.localObjectReference;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // local_object_reference - computed: false, optional: true, required: false
  private _localObjectReference = new GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference(this, "local_object_reference");
  public get localObjectReference() {
    return this._localObjectReference;
  }
  public putLocalObjectReference(value: GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference) {
    this._localObjectReference.internalValue = value;
  }
  public resetLocalObjectReference() {
    this._localObjectReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localObjectReferenceInput() {
    return this._localObjectReference.internalValue;
  }
}
export interface GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference {
  /**
  * Name of the referent.
More info:
https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#name GoogleCloudRunService#name}
  */
  readonly name: string;
}

export function googleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceToTerraform(struct?: GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference | GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef {
  /**
  * Specify whether the Secret must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#optional GoogleCloudRunService#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * local_object_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#local_object_reference GoogleCloudRunService#local_object_reference}
  */
  readonly localObjectReference?: GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference;
}

export function googleCloudRunServiceTemplateSpecContainersEnvFromSecretRefToTerraform(struct?: GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference | GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    local_object_reference: googleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceToTerraform(struct!.localObjectReference),
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._localObjectReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localObjectReference = this._localObjectReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optional = undefined;
      this._localObjectReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optional = value.optional;
      this._localObjectReference.internalValue = value.localObjectReference;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // local_object_reference - computed: false, optional: true, required: false
  private _localObjectReference = new GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference(this, "local_object_reference");
  public get localObjectReference() {
    return this._localObjectReference;
  }
  public putLocalObjectReference(value: GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference) {
    this._localObjectReference.internalValue = value;
  }
  public resetLocalObjectReference() {
    this._localObjectReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localObjectReferenceInput() {
    return this._localObjectReference.internalValue;
  }
}
export interface GoogleCloudRunServiceTemplateSpecContainersEnvFrom {
  /**
  * An optional identifier to prepend to each key in the ConfigMap.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#prefix GoogleCloudRunService#prefix}
  */
  readonly prefix?: string;
  /**
  * config_map_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#config_map_ref GoogleCloudRunService#config_map_ref}
  */
  readonly configMapRef?: GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#secret_ref GoogleCloudRunService#secret_ref}
  */
  readonly secretRef?: GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef;
}

export function googleCloudRunServiceTemplateSpecContainersEnvFromToTerraform(struct?: GoogleCloudRunServiceTemplateSpecContainersEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: googleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    secret_ref: googleCloudRunServiceTemplateSpecContainersEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpecContainersEnvFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._configMapRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRef = this._configMapRef?.internalValue;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpecContainersEnvFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._configMapRef.internalValue = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._configMapRef.internalValue = value.configMapRef;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // config_map_ref - computed: false, optional: true, required: false
  private _configMapRef = new GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference(this, "config_map_ref");
  public get configMapRef() {
    return this._configMapRef;
  }
  public putConfigMapRef(value: GoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef) {
    this._configMapRef.internalValue = value;
  }
  public resetConfigMapRef() {
    this._configMapRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefInput() {
    return this._configMapRef.internalValue;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: GoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersEnvFromList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudRunServiceTemplateSpecContainersEnvFrom[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference {
    return new GoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunServiceTemplateSpecContainersPorts {
  /**
  * Port number the container listens on. This must be a valid port number, 0 < x < 65536.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#container_port GoogleCloudRunService#container_port}
  */
  readonly containerPort?: number;
  /**
  * If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#name GoogleCloudRunService#name}
  */
  readonly name?: string;
  /**
  * Protocol for port. Must be "TCP". Defaults to "TCP".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#protocol GoogleCloudRunService#protocol}
  */
  readonly protocol?: string;
}

export function googleCloudRunServiceTemplateSpecContainersPortsToTerraform(struct?: GoogleCloudRunServiceTemplateSpecContainersPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpecContainersPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpecContainersPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
      this._name = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
      this._name = value.name;
      this._protocol = value.protocol;
    }
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  public resetContainerPort() {
    this._containerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersPortsList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudRunServiceTemplateSpecContainersPorts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference {
    return new GoogleCloudRunServiceTemplateSpecContainersPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunServiceTemplateSpecContainersResources {
  /**
  * Limits describes the maximum amount of compute resources allowed.
The values of the map is string form of the 'quantity' k8s type:
https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#limits GoogleCloudRunService#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required.
If Requests is omitted for a container, it defaults to Limits if that is
explicitly specified, otherwise to an implementation-defined value.
The values of the map is string form of the 'quantity' k8s type:
https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#requests GoogleCloudRunService#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function googleCloudRunServiceTemplateSpecContainersResourcesToTerraform(struct?: GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference | GoogleCloudRunServiceTemplateSpecContainersResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpecContainersResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpecContainersResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limits = undefined;
      this._requests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: true, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface GoogleCloudRunServiceTemplateSpecContainersVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted.  Must
not contain ':'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#mount_path GoogleCloudRunService#mount_path}
  */
  readonly mountPath: string;
  /**
  * This must match the Name of a Volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#name GoogleCloudRunService#name}
  */
  readonly name: string;
}

export function googleCloudRunServiceTemplateSpecContainersVolumeMountsToTerraform(struct?: GoogleCloudRunServiceTemplateSpecContainersVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpecContainersVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpecContainersVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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
}

export class GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudRunServiceTemplateSpecContainersVolumeMounts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference {
    return new GoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunServiceTemplateSpecContainers {
  /**
  * Arguments to the entrypoint.
The docker image's CMD is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container's
environment. If a variable cannot be resolved, the reference in the input
string will be unchanged. The $(VAR_NAME) syntax can be escaped with a
double $$, ie: $$(VAR_NAME). Escaped references will never be expanded,
regardless of whether the variable exists or not.
More info:
https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#args GoogleCloudRunService#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell.
The docker image's ENTRYPOINT is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container's
environment. If a variable cannot be resolved, the reference in the input
string will be unchanged. The $(VAR_NAME) syntax can be escaped with a
double $$, ie: $$(VAR_NAME). Escaped references will never be expanded,
regardless of whether the variable exists or not.
More info:
https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#command GoogleCloudRunService#command}
  */
  readonly command?: string[];
  /**
  * Docker image name. This is most often a reference to a container located
in the container registry, such as gcr.io/cloudrun/hello
More info: https://kubernetes.io/docs/concepts/containers/images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#image GoogleCloudRunService#image}
  */
  readonly image: string;
  /**
  * Container's working directory.
If not specified, the container runtime's default will be used, which
might be configured in the container image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#working_dir GoogleCloudRunService#working_dir}
  */
  readonly workingDir?: string;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#env GoogleCloudRunService#env}
  */
  readonly env?: GoogleCloudRunServiceTemplateSpecContainersEnv[] | cdktf.IResolvable;
  /**
  * env_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#env_from GoogleCloudRunService#env_from}
  */
  readonly envFrom?: GoogleCloudRunServiceTemplateSpecContainersEnvFrom[] | cdktf.IResolvable;
  /**
  * ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#ports GoogleCloudRunService#ports}
  */
  readonly ports?: GoogleCloudRunServiceTemplateSpecContainersPorts[] | cdktf.IResolvable;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#resources GoogleCloudRunService#resources}
  */
  readonly resources?: GoogleCloudRunServiceTemplateSpecContainersResources;
  /**
  * volume_mounts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#volume_mounts GoogleCloudRunService#volume_mounts}
  */
  readonly volumeMounts?: GoogleCloudRunServiceTemplateSpecContainersVolumeMounts[] | cdktf.IResolvable;
}

export function googleCloudRunServiceTemplateSpecContainersToTerraform(struct?: GoogleCloudRunServiceTemplateSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    env: cdktf.listMapper(googleCloudRunServiceTemplateSpecContainersEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(googleCloudRunServiceTemplateSpecContainersEnvFromToTerraform)(struct!.envFrom),
    ports: cdktf.listMapper(googleCloudRunServiceTemplateSpecContainersPortsToTerraform)(struct!.ports),
    resources: googleCloudRunServiceTemplateSpecContainersResourcesToTerraform(struct!.resources),
    volume_mounts: cdktf.listMapper(googleCloudRunServiceTemplateSpecContainersVolumeMountsToTerraform)(struct!.volumeMounts),
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpecContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpecContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._image = undefined;
      this._workingDir = undefined;
      this._env.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._image = value.image;
      this._workingDir = value.workingDir;
      this._env.internalValue = value.env;
      this._envFrom.internalValue = value.envFrom;
      this._ports.internalValue = value.ports;
      this._resources.internalValue = value.resources;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }

  // env - computed: false, optional: true, required: false
  private _env = new GoogleCloudRunServiceTemplateSpecContainersEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: GoogleCloudRunServiceTemplateSpecContainersEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom = new GoogleCloudRunServiceTemplateSpecContainersEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: GoogleCloudRunServiceTemplateSpecContainersEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new GoogleCloudRunServiceTemplateSpecContainersPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: GoogleCloudRunServiceTemplateSpecContainersPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new GoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: GoogleCloudRunServiceTemplateSpecContainersResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new GoogleCloudRunServiceTemplateSpecContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: GoogleCloudRunServiceTemplateSpecContainersVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}

export class GoogleCloudRunServiceTemplateSpecContainersList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudRunServiceTemplateSpecContainers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleCloudRunServiceTemplateSpecContainersOutputReference {
    return new GoogleCloudRunServiceTemplateSpecContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunServiceTemplateSpecVolumesSecretItems {
  /**
  * The Cloud Secret Manager secret version.
Can be 'latest' for the latest value or an integer for a specific version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#key GoogleCloudRunService#key}
  */
  readonly key: string;
  /**
  * Mode bits to use on this file, must be a value between 0000 and 0777. If
not specified, the volume defaultMode will be used. This might be in
conflict with other options that affect the file mode, like fsGroup, and
the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#mode GoogleCloudRunService#mode}
  */
  readonly mode?: number;
  /**
  * The relative path of the file to map the key to.
May not be an absolute path.
May not contain the path element '..'.
May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#path GoogleCloudRunService#path}
  */
  readonly path: string;
}

export function googleCloudRunServiceTemplateSpecVolumesSecretItemsToTerraform(struct?: GoogleCloudRunServiceTemplateSpecVolumesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpecVolumesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpecVolumesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudRunServiceTemplateSpecVolumesSecretItems[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference {
    return new GoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunServiceTemplateSpecVolumesSecret {
  /**
  * Mode bits to use on created files by default. Must be a value between 0000
and 0777. Defaults to 0644. Directories within the path are not affected by
this setting. This might be in conflict with other options that affect the
file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#default_mode GoogleCloudRunService#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * The name of the secret in Cloud Secret Manager. By default, the secret
is assumed to be in the same project.
If the secret is in another project, you must define an alias.
An alias definition has the form:
<alias>:projects/<project-id|project-number>/secrets/<secret-name>.
If multiple alias definitions are needed, they must be separated by
commas.
The alias definitions must be set on the run.googleapis.com/secrets
annotation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#secret_name GoogleCloudRunService#secret_name}
  */
  readonly secretName: string;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#items GoogleCloudRunService#items}
  */
  readonly items?: GoogleCloudRunServiceTemplateSpecVolumesSecretItems[] | cdktf.IResolvable;
}

export function googleCloudRunServiceTemplateSpecVolumesSecretToTerraform(struct?: GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference | GoogleCloudRunServiceTemplateSpecVolumesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    items: cdktf.listMapper(googleCloudRunServiceTemplateSpecVolumesSecretItemsToTerraform)(struct!.items),
  }
}

export class GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpecVolumesSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpecVolumesSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultMode = undefined;
      this._secretName = undefined;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultMode = value.defaultMode;
      this._secretName = value.secretName;
      this._items.internalValue = value.items;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // items - computed: false, optional: true, required: false
  private _items = new GoogleCloudRunServiceTemplateSpecVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: GoogleCloudRunServiceTemplateSpecVolumesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface GoogleCloudRunServiceTemplateSpecVolumes {
  /**
  * Volume's name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#name GoogleCloudRunService#name}
  */
  readonly name: string;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#secret GoogleCloudRunService#secret}
  */
  readonly secret: GoogleCloudRunServiceTemplateSpecVolumesSecret;
}

export function googleCloudRunServiceTemplateSpecVolumesToTerraform(struct?: GoogleCloudRunServiceTemplateSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secret: googleCloudRunServiceTemplateSpecVolumesSecretToTerraform(struct!.secret),
  }
}

export class GoogleCloudRunServiceTemplateSpecVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpecVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpecVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secret.internalValue = value.secret;
    }
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

  // secret - computed: false, optional: false, required: true
  private _secret = new GoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: GoogleCloudRunServiceTemplateSpecVolumesSecret) {
    this._secret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}

export class GoogleCloudRunServiceTemplateSpecVolumesList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudRunServiceTemplateSpecVolumes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleCloudRunServiceTemplateSpecVolumesOutputReference {
    return new GoogleCloudRunServiceTemplateSpecVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunServiceTemplateSpec {
  /**
  * ContainerConcurrency specifies the maximum allowed in-flight (concurrent)
requests per container of the Revision. Values are:
- '0' thread-safe, the system should manage the max concurrency. This is
    the default value.
- '1' not-thread-safe. Single concurrency
- '2-N' thread-safe, max concurrency of N
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#container_concurrency GoogleCloudRunService#container_concurrency}
  */
  readonly containerConcurrency?: number;
  /**
  * Email address of the IAM service account associated with the revision of the
service. The service account represents the identity of the running revision,
and determines what permissions the revision has. If not provided, the revision
will use the project's default service account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#service_account_name GoogleCloudRunService#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * TimeoutSeconds holds the max duration the instance is allowed for responding to a request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#timeout_seconds GoogleCloudRunService#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * containers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#containers GoogleCloudRunService#containers}
  */
  readonly containers?: GoogleCloudRunServiceTemplateSpecContainers[] | cdktf.IResolvable;
  /**
  * volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#volumes GoogleCloudRunService#volumes}
  */
  readonly volumes?: GoogleCloudRunServiceTemplateSpecVolumes[] | cdktf.IResolvable;
}

export function googleCloudRunServiceTemplateSpecToTerraform(struct?: GoogleCloudRunServiceTemplateSpecOutputReference | GoogleCloudRunServiceTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_concurrency: cdktf.numberToTerraform(struct!.containerConcurrency),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    containers: cdktf.listMapper(googleCloudRunServiceTemplateSpecContainersToTerraform)(struct!.containers),
    volumes: cdktf.listMapper(googleCloudRunServiceTemplateSpecVolumesToTerraform)(struct!.volumes),
  }
}

export class GoogleCloudRunServiceTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunServiceTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConcurrency = this._containerConcurrency;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerConcurrency = undefined;
      this._serviceAccountName = undefined;
      this._timeoutSeconds = undefined;
      this._containers.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerConcurrency = value.containerConcurrency;
      this._serviceAccountName = value.serviceAccountName;
      this._timeoutSeconds = value.timeoutSeconds;
      this._containers.internalValue = value.containers;
      this._volumes.internalValue = value.volumes;
    }
  }

  // container_concurrency - computed: true, optional: true, required: false
  private _containerConcurrency?: number; 
  public get containerConcurrency() {
    return this.getNumberAttribute('container_concurrency');
  }
  public set containerConcurrency(value: number) {
    this._containerConcurrency = value;
  }
  public resetContainerConcurrency() {
    this._containerConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConcurrencyInput() {
    return this._containerConcurrency;
  }

  // service_account_name - computed: true, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // serving_state - computed: true, optional: false, required: false
  public get servingState() {
    return this.getStringAttribute('serving_state');
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new GoogleCloudRunServiceTemplateSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: GoogleCloudRunServiceTemplateSpecContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new GoogleCloudRunServiceTemplateSpecVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: GoogleCloudRunServiceTemplateSpecVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface GoogleCloudRunServiceTemplate {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#metadata GoogleCloudRunService#metadata}
  */
  readonly metadata?: GoogleCloudRunServiceTemplateMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#spec GoogleCloudRunService#spec}
  */
  readonly spec?: GoogleCloudRunServiceTemplateSpec;
}

export function googleCloudRunServiceTemplateToTerraform(struct?: GoogleCloudRunServiceTemplateOutputReference | GoogleCloudRunServiceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: googleCloudRunServiceTemplateMetadataToTerraform(struct!.metadata),
    spec: googleCloudRunServiceTemplateSpecToTerraform(struct!.spec),
  }
}

export class GoogleCloudRunServiceTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunServiceTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new GoogleCloudRunServiceTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: GoogleCloudRunServiceTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new GoogleCloudRunServiceTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: GoogleCloudRunServiceTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface GoogleCloudRunServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#create GoogleCloudRunService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#delete GoogleCloudRunService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#update GoogleCloudRunService#update}
  */
  readonly update?: string;
}

export function googleCloudRunServiceTimeoutsToTerraform(struct?: GoogleCloudRunServiceTimeoutsOutputReference | GoogleCloudRunServiceTimeouts | cdktf.IResolvable): any {
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

export class GoogleCloudRunServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunServiceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GoogleCloudRunServiceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface GoogleCloudRunServiceTraffic {
  /**
  * LatestRevision may be optionally provided to indicate that the latest ready
Revision of the Configuration should be used for this traffic target. When
provided LatestRevision must be true if RevisionName is empty; it must be
false when RevisionName is non-empty.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#latest_revision GoogleCloudRunService#latest_revision}
  */
  readonly latestRevision?: boolean | cdktf.IResolvable;
  /**
  * Percent specifies percent of the traffic to this Revision or Configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#percent GoogleCloudRunService#percent}
  */
  readonly percent: number;
  /**
  * RevisionName of a specific revision to which to send this portion of traffic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#revision_name GoogleCloudRunService#revision_name}
  */
  readonly revisionName?: string;
  /**
  * Tag is optionally used to expose a dedicated url for referencing this target exclusively.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service#tag GoogleCloudRunService#tag}
  */
  readonly tag?: string;
}

export function googleCloudRunServiceTrafficToTerraform(struct?: GoogleCloudRunServiceTraffic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latest_revision: cdktf.booleanToTerraform(struct!.latestRevision),
    percent: cdktf.numberToTerraform(struct!.percent),
    revision_name: cdktf.stringToTerraform(struct!.revisionName),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}

export class GoogleCloudRunServiceTrafficOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleCloudRunServiceTraffic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latestRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.latestRevision = this._latestRevision;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._revisionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionName = this._revisionName;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunServiceTraffic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._latestRevision = undefined;
      this._percent = undefined;
      this._revisionName = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._latestRevision = value.latestRevision;
      this._percent = value.percent;
      this._revisionName = value.revisionName;
      this._tag = value.tag;
    }
  }

  // latest_revision - computed: false, optional: true, required: false
  private _latestRevision?: boolean | cdktf.IResolvable; 
  public get latestRevision() {
    return this.getBooleanAttribute('latest_revision');
  }
  public set latestRevision(value: boolean | cdktf.IResolvable) {
    this._latestRevision = value;
  }
  public resetLatestRevision() {
    this._latestRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestRevisionInput() {
    return this._latestRevision;
  }

  // percent - computed: false, optional: false, required: true
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // revision_name - computed: false, optional: true, required: false
  private _revisionName?: string; 
  public get revisionName() {
    return this.getStringAttribute('revision_name');
  }
  public set revisionName(value: string) {
    this._revisionName = value;
  }
  public resetRevisionName() {
    this._revisionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionNameInput() {
    return this._revisionName;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class GoogleCloudRunServiceTrafficList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudRunServiceTraffic[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleCloudRunServiceTrafficOutputReference {
    return new GoogleCloudRunServiceTrafficOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service google_cloud_run_service}
*/
export class GoogleCloudRunService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_run_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloud_run_service google_cloud_run_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCloudRunServiceConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCloudRunServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_run_service',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.23.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autogenerateRevisionName = config.autogenerateRevisionName;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._metadata.internalValue = config.metadata;
    this._template.internalValue = config.template;
    this._timeouts.internalValue = config.timeouts;
    this._traffic.internalValue = config.traffic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autogenerate_revision_name - computed: false, optional: true, required: false
  private _autogenerateRevisionName?: boolean | cdktf.IResolvable; 
  public get autogenerateRevisionName() {
    return this.getBooleanAttribute('autogenerate_revision_name');
  }
  public set autogenerateRevisionName(value: boolean | cdktf.IResolvable) {
    this._autogenerateRevisionName = value;
  }
  public resetAutogenerateRevisionName() {
    this._autogenerateRevisionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autogenerateRevisionNameInput() {
    return this._autogenerateRevisionName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // status - computed: true, optional: false, required: false
  private _status = new GoogleCloudRunServiceStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new GoogleCloudRunServiceMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: GoogleCloudRunServiceMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new GoogleCloudRunServiceTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: GoogleCloudRunServiceTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCloudRunServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCloudRunServiceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic = new GoogleCloudRunServiceTrafficList(this, "traffic", false);
  public get traffic() {
    return this._traffic;
  }
  public putTraffic(value: GoogleCloudRunServiceTraffic[] | cdktf.IResolvable) {
    this._traffic.internalValue = value;
  }
  public resetTraffic() {
    this._traffic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autogenerate_revision_name: cdktf.booleanToTerraform(this._autogenerateRevisionName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      metadata: googleCloudRunServiceMetadataToTerraform(this._metadata.internalValue),
      template: googleCloudRunServiceTemplateToTerraform(this._template.internalValue),
      timeouts: googleCloudRunServiceTimeoutsToTerraform(this._timeouts.internalValue),
      traffic: cdktf.listMapper(googleCloudRunServiceTrafficToTerraform)(this._traffic.internalValue),
    };
  }
}
