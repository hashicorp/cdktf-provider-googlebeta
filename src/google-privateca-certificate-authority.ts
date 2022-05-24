// https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GooglePrivatecaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user provided Resource ID for this Certificate Authority.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#certificate_authority_id GooglePrivatecaCertificateAuthority#certificate_authority_id}
  */
  readonly certificateAuthorityId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#deletion_protection GooglePrivatecaCertificateAuthority#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#desired_state GooglePrivatecaCertificateAuthority#desired_state}
  */
  readonly desiredState?: string;
  /**
  * The name of a Cloud Storage bucket where this CertificateAuthority will publish content,
such as the CA certificate and CRLs. This must be a bucket name, without any prefixes
(such as 'gs://') or suffixes (such as '.googleapis.com'). For example, to use a bucket named
my-bucket, you would simply specify 'my-bucket'. If not specified, a managed bucket will be
created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#gcs_bucket GooglePrivatecaCertificateAuthority#gcs_bucket}
  */
  readonly gcsBucket?: string;
  /**
  * This field allows the CA to be deleted even if the CA has active certs. Active certs include both unrevoked and unexpired certs.
Use with care. Defaults to 'false'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#ignore_active_certificates_on_deletion GooglePrivatecaCertificateAuthority#ignore_active_certificates_on_deletion}
  */
  readonly ignoreActiveCertificatesOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * Labels with user-defined metadata.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#labels GooglePrivatecaCertificateAuthority#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#lifetime GooglePrivatecaCertificateAuthority#lifetime}
  */
  readonly lifetime?: string;
  /**
  * Location of the CertificateAuthority. A full list of valid locations can be found by
running 'gcloud privateca locations list'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#location GooglePrivatecaCertificateAuthority#location}
  */
  readonly location: string;
  /**
  * The name of the CaPool this Certificate Authority belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#pool GooglePrivatecaCertificateAuthority#pool}
  */
  readonly pool: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#project GooglePrivatecaCertificateAuthority#project}
  */
  readonly project?: string;
  /**
  * The Type of this CertificateAuthority.

~> **Note:** For 'SUBORDINATE' Certificate Authorities, they need to
be manually activated (via Cloud Console of 'gcloud') before they can
issue certificates. Default value: "SELF_SIGNED" Possible values: ["SELF_SIGNED", "SUBORDINATE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#type GooglePrivatecaCertificateAuthority#type}
  */
  readonly type?: string;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#config GooglePrivatecaCertificateAuthority#config}
  */
  readonly config: GooglePrivatecaCertificateAuthorityConfigA;
  /**
  * key_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#key_spec GooglePrivatecaCertificateAuthority#key_spec}
  */
  readonly keySpec: GooglePrivatecaCertificateAuthorityKeySpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#timeouts GooglePrivatecaCertificateAuthority#timeouts}
  */
  readonly timeouts?: GooglePrivatecaCertificateAuthorityTimeouts;
}
export interface GooglePrivatecaCertificateAuthorityAccessUrls {
}

export function googlePrivatecaCertificateAuthorityAccessUrlsToTerraform(struct?: GooglePrivatecaCertificateAuthorityAccessUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GooglePrivatecaCertificateAuthorityAccessUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GooglePrivatecaCertificateAuthorityAccessUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCertificateAuthorityAccessUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate_access_url - computed: true, optional: false, required: false
  public get caCertificateAccessUrl() {
    return this.getStringAttribute('ca_certificate_access_url');
  }

  // crl_access_urls - computed: true, optional: false, required: false
  public get crlAccessUrls() {
    return this.getListAttribute('crl_access_urls');
  }
}

export class GooglePrivatecaCertificateAuthorityAccessUrlsList extends cdktf.ComplexList {

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
  public get(index: number): GooglePrivatecaCertificateAuthorityAccessUrlsOutputReference {
    return new GooglePrivatecaCertificateAuthorityAccessUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject {
  /**
  * The common name of the distinguished name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#common_name GooglePrivatecaCertificateAuthority#common_name}
  */
  readonly commonName: string;
  /**
  * The country code of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#country_code GooglePrivatecaCertificateAuthority#country_code}
  */
  readonly countryCode?: string;
  /**
  * The locality or city of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#locality GooglePrivatecaCertificateAuthority#locality}
  */
  readonly locality?: string;
  /**
  * The organization of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#organization GooglePrivatecaCertificateAuthority#organization}
  */
  readonly organization: string;
  /**
  * The organizational unit of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#organizational_unit GooglePrivatecaCertificateAuthority#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * The postal code of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#postal_code GooglePrivatecaCertificateAuthority#postal_code}
  */
  readonly postalCode?: string;
  /**
  * The province, territory, or regional state of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#province GooglePrivatecaCertificateAuthority#province}
  */
  readonly province?: string;
  /**
  * The street address of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#street_address GooglePrivatecaCertificateAuthority#street_address}
  */
  readonly streetAddress?: string;
}

export function googlePrivatecaCertificateAuthorityConfigSubjectConfigSubjectToTerraform(struct?: GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference | GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    province: cdktf.stringToTerraform(struct!.province),
    street_address: cdktf.stringToTerraform(struct!.streetAddress),
  }
}

export class GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._streetAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetAddress = this._streetAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonName = undefined;
      this._countryCode = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._postalCode = undefined;
      this._province = undefined;
      this._streetAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonName = value.commonName;
      this._countryCode = value.countryCode;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._postalCode = value.postalCode;
      this._province = value.province;
      this._streetAddress = value.streetAddress;
    }
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: false, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string; 
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }
  public set streetAddress(value: string) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress;
  }
}
export interface GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName {
  /**
  * Contains only valid, fully-qualified host names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#dns_names GooglePrivatecaCertificateAuthority#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * Contains only valid RFC 2822 E-mail addresses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#email_addresses GooglePrivatecaCertificateAuthority#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#ip_addresses GooglePrivatecaCertificateAuthority#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Contains only valid RFC 3986 URIs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#uris GooglePrivatecaCertificateAuthority#uris}
  */
  readonly uris?: string[];
}

export function googlePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameToTerraform(struct?: GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference | GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsNames),
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emailAddresses),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipAddresses),
    uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.uris),
  }
}

export class GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNames = this._dnsNames;
    }
    if (this._emailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddresses = this._emailAddresses;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsNames = undefined;
      this._emailAddresses = undefined;
      this._ipAddresses = undefined;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsNames = value.dnsNames;
      this._emailAddresses = value.emailAddresses;
      this._ipAddresses = value.ipAddresses;
      this._uris = value.uris;
    }
  }

  // dns_names - computed: false, optional: true, required: false
  private _dnsNames?: string[]; 
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }
  public set dnsNames(value: string[]) {
    this._dnsNames = value;
  }
  public resetDnsNames() {
    this._dnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNamesInput() {
    return this._dnsNames;
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // uris - computed: false, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}
export interface GooglePrivatecaCertificateAuthorityConfigSubjectConfig {
  /**
  * subject block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#subject GooglePrivatecaCertificateAuthority#subject}
  */
  readonly subject: GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject;
  /**
  * subject_alt_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#subject_alt_name GooglePrivatecaCertificateAuthority#subject_alt_name}
  */
  readonly subjectAltName?: GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName;
}

export function googlePrivatecaCertificateAuthorityConfigSubjectConfigToTerraform(struct?: GooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference | GooglePrivatecaCertificateAuthorityConfigSubjectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject: googlePrivatecaCertificateAuthorityConfigSubjectConfigSubjectToTerraform(struct!.subject),
    subject_alt_name: googlePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameToTerraform(struct!.subjectAltName),
  }
}

export class GooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCertificateAuthorityConfigSubjectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject?.internalValue;
    }
    if (this._subjectAltName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltName = this._subjectAltName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCertificateAuthorityConfigSubjectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subject.internalValue = undefined;
      this._subjectAltName.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subject.internalValue = value.subject;
      this._subjectAltName.internalValue = value.subjectAltName;
    }
  }

  // subject - computed: false, optional: false, required: true
  private _subject = new GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }
  public putSubject(value: GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject) {
    this._subject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }

  // subject_alt_name - computed: false, optional: true, required: false
  private _subjectAltName = new GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference(this, "subject_alt_name");
  public get subjectAltName() {
    return this._subjectAltName;
  }
  public putSubjectAltName(value: GooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName) {
    this._subjectAltName.internalValue = value;
  }
  public resetSubjectAltName() {
    this._subjectAltName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNameInput() {
    return this._subjectAltName.internalValue;
  }
}
export interface GooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#object_id_path GooglePrivatecaCertificateAuthority#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function googlePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdToTerraform(struct?: GooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference | GooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export class GooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdPath = this._objectIdPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectIdPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectIdPath = value.objectIdPath;
    }
  }

  // object_id_path - computed: false, optional: false, required: true
  private _objectIdPath?: number[]; 
  public get objectIdPath() {
    return this.getNumberListAttribute('object_id_path');
  }
  public set objectIdPath(value: number[]) {
    this._objectIdPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdPathInput() {
    return this._objectIdPath;
  }
}
export interface GooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions {
  /**
  * Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#critical GooglePrivatecaCertificateAuthority#critical}
  */
  readonly critical: boolean | cdktf.IResolvable;
  /**
  * The value of this X.509 extension. A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#value GooglePrivatecaCertificateAuthority#value}
  */
  readonly value: string;
  /**
  * object_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#object_id GooglePrivatecaCertificateAuthority#object_id}
  */
  readonly objectId: GooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId;
}

export function googlePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsToTerraform(struct?: GooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.booleanToTerraform(struct!.critical),
    value: cdktf.stringToTerraform(struct!.value),
    object_id: googlePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdToTerraform(struct!.objectId),
  }
}

export interface GooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions {
  /**
  * When true, the "CA" in Basic Constraints extension will be set to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#is_ca GooglePrivatecaCertificateAuthority#is_ca}
  */
  readonly isCa: boolean | cdktf.IResolvable;
  /**
  * Refers to the "path length constraint" in Basic Constraints extension. For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#max_issuer_path_length GooglePrivatecaCertificateAuthority#max_issuer_path_length}
  */
  readonly maxIssuerPathLength?: number;
  /**
  * When true, the "CA" in Basic Constraints extension will be set to false. 
If both 'is_ca' and 'non_ca' are unset, the extension will be omitted from the CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#non_ca GooglePrivatecaCertificateAuthority#non_ca}
  */
  readonly nonCa?: boolean | cdktf.IResolvable;
  /**
  * When true, the "path length constraint" in Basic Constraints extension will be set to 0.
if both 'max_issuer_path_length' and 'zero_max_issuer_path_length' are unset,
the max path length will be omitted from the CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#zero_max_issuer_path_length GooglePrivatecaCertificateAuthority#zero_max_issuer_path_length}
  */
  readonly zeroMaxIssuerPathLength?: boolean | cdktf.IResolvable;
}

export function googlePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsToTerraform(struct?: GooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference | GooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_ca: cdktf.booleanToTerraform(struct!.isCa),
    max_issuer_path_length: cdktf.numberToTerraform(struct!.maxIssuerPathLength),
    non_ca: cdktf.booleanToTerraform(struct!.nonCa),
    zero_max_issuer_path_length: cdktf.booleanToTerraform(struct!.zeroMaxIssuerPathLength),
  }
}

export class GooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCa = this._isCa;
    }
    if (this._maxIssuerPathLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIssuerPathLength = this._maxIssuerPathLength;
    }
    if (this._nonCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonCa = this._nonCa;
    }
    if (this._zeroMaxIssuerPathLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroMaxIssuerPathLength = this._zeroMaxIssuerPathLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isCa = undefined;
      this._maxIssuerPathLength = undefined;
      this._nonCa = undefined;
      this._zeroMaxIssuerPathLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isCa = value.isCa;
      this._maxIssuerPathLength = value.maxIssuerPathLength;
      this._nonCa = value.nonCa;
      this._zeroMaxIssuerPathLength = value.zeroMaxIssuerPathLength;
    }
  }

  // is_ca - computed: false, optional: false, required: true
  private _isCa?: boolean | cdktf.IResolvable; 
  public get isCa() {
    return this.getBooleanAttribute('is_ca');
  }
  public set isCa(value: boolean | cdktf.IResolvable) {
    this._isCa = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isCaInput() {
    return this._isCa;
  }

  // max_issuer_path_length - computed: false, optional: true, required: false
  private _maxIssuerPathLength?: number; 
  public get maxIssuerPathLength() {
    return this.getNumberAttribute('max_issuer_path_length');
  }
  public set maxIssuerPathLength(value: number) {
    this._maxIssuerPathLength = value;
  }
  public resetMaxIssuerPathLength() {
    this._maxIssuerPathLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIssuerPathLengthInput() {
    return this._maxIssuerPathLength;
  }

  // non_ca - computed: false, optional: true, required: false
  private _nonCa?: boolean | cdktf.IResolvable; 
  public get nonCa() {
    return this.getBooleanAttribute('non_ca');
  }
  public set nonCa(value: boolean | cdktf.IResolvable) {
    this._nonCa = value;
  }
  public resetNonCa() {
    this._nonCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonCaInput() {
    return this._nonCa;
  }

  // zero_max_issuer_path_length - computed: false, optional: true, required: false
  private _zeroMaxIssuerPathLength?: boolean | cdktf.IResolvable; 
  public get zeroMaxIssuerPathLength() {
    return this.getBooleanAttribute('zero_max_issuer_path_length');
  }
  public set zeroMaxIssuerPathLength(value: boolean | cdktf.IResolvable) {
    this._zeroMaxIssuerPathLength = value;
  }
  public resetZeroMaxIssuerPathLength() {
    this._zeroMaxIssuerPathLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroMaxIssuerPathLengthInput() {
    return this._zeroMaxIssuerPathLength;
  }
}
export interface GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage {
  /**
  * The key may be used to sign certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#cert_sign GooglePrivatecaCertificateAuthority#cert_sign}
  */
  readonly certSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#content_commitment GooglePrivatecaCertificateAuthority#content_commitment}
  */
  readonly contentCommitment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used sign certificate revocation lists.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#crl_sign GooglePrivatecaCertificateAuthority#crl_sign}
  */
  readonly crlSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#data_encipherment GooglePrivatecaCertificateAuthority#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to decipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#decipher_only GooglePrivatecaCertificateAuthority#decipher_only}
  */
  readonly decipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for digital signatures.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#digital_signature GooglePrivatecaCertificateAuthority#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#encipher_only GooglePrivatecaCertificateAuthority#encipher_only}
  */
  readonly encipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used in a key agreement protocol.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#key_agreement GooglePrivatecaCertificateAuthority#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher other keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#key_encipherment GooglePrivatecaCertificateAuthority#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktf.IResolvable;
}

export function googlePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageToTerraform(struct?: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference | GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_sign: cdktf.booleanToTerraform(struct!.certSign),
    content_commitment: cdktf.booleanToTerraform(struct!.contentCommitment),
    crl_sign: cdktf.booleanToTerraform(struct!.crlSign),
    data_encipherment: cdktf.booleanToTerraform(struct!.dataEncipherment),
    decipher_only: cdktf.booleanToTerraform(struct!.decipherOnly),
    digital_signature: cdktf.booleanToTerraform(struct!.digitalSignature),
    encipher_only: cdktf.booleanToTerraform(struct!.encipherOnly),
    key_agreement: cdktf.booleanToTerraform(struct!.keyAgreement),
    key_encipherment: cdktf.booleanToTerraform(struct!.keyEncipherment),
  }
}

export class GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSign = this._certSign;
    }
    if (this._contentCommitment !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentCommitment = this._contentCommitment;
    }
    if (this._crlSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlSign = this._crlSign;
    }
    if (this._dataEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEncipherment = this._dataEncipherment;
    }
    if (this._decipherOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.decipherOnly = this._decipherOnly;
    }
    if (this._digitalSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalSignature = this._digitalSignature;
    }
    if (this._encipherOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.encipherOnly = this._encipherOnly;
    }
    if (this._keyAgreement !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAgreement = this._keyAgreement;
    }
    if (this._keyEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyEncipherment = this._keyEncipherment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certSign = undefined;
      this._contentCommitment = undefined;
      this._crlSign = undefined;
      this._dataEncipherment = undefined;
      this._decipherOnly = undefined;
      this._digitalSignature = undefined;
      this._encipherOnly = undefined;
      this._keyAgreement = undefined;
      this._keyEncipherment = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certSign = value.certSign;
      this._contentCommitment = value.contentCommitment;
      this._crlSign = value.crlSign;
      this._dataEncipherment = value.dataEncipherment;
      this._decipherOnly = value.decipherOnly;
      this._digitalSignature = value.digitalSignature;
      this._encipherOnly = value.encipherOnly;
      this._keyAgreement = value.keyAgreement;
      this._keyEncipherment = value.keyEncipherment;
    }
  }

  // cert_sign - computed: false, optional: true, required: false
  private _certSign?: boolean | cdktf.IResolvable; 
  public get certSign() {
    return this.getBooleanAttribute('cert_sign');
  }
  public set certSign(value: boolean | cdktf.IResolvable) {
    this._certSign = value;
  }
  public resetCertSign() {
    this._certSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSignInput() {
    return this._certSign;
  }

  // content_commitment - computed: false, optional: true, required: false
  private _contentCommitment?: boolean | cdktf.IResolvable; 
  public get contentCommitment() {
    return this.getBooleanAttribute('content_commitment');
  }
  public set contentCommitment(value: boolean | cdktf.IResolvable) {
    this._contentCommitment = value;
  }
  public resetContentCommitment() {
    this._contentCommitment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentCommitmentInput() {
    return this._contentCommitment;
  }

  // crl_sign - computed: false, optional: true, required: false
  private _crlSign?: boolean | cdktf.IResolvable; 
  public get crlSign() {
    return this.getBooleanAttribute('crl_sign');
  }
  public set crlSign(value: boolean | cdktf.IResolvable) {
    this._crlSign = value;
  }
  public resetCrlSign() {
    this._crlSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSignInput() {
    return this._crlSign;
  }

  // data_encipherment - computed: false, optional: true, required: false
  private _dataEncipherment?: boolean | cdktf.IResolvable; 
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment');
  }
  public set dataEncipherment(value: boolean | cdktf.IResolvable) {
    this._dataEncipherment = value;
  }
  public resetDataEncipherment() {
    this._dataEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEnciphermentInput() {
    return this._dataEncipherment;
  }

  // decipher_only - computed: false, optional: true, required: false
  private _decipherOnly?: boolean | cdktf.IResolvable; 
  public get decipherOnly() {
    return this.getBooleanAttribute('decipher_only');
  }
  public set decipherOnly(value: boolean | cdktf.IResolvable) {
    this._decipherOnly = value;
  }
  public resetDecipherOnly() {
    this._decipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decipherOnlyInput() {
    return this._decipherOnly;
  }

  // digital_signature - computed: false, optional: true, required: false
  private _digitalSignature?: boolean | cdktf.IResolvable; 
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }
  public set digitalSignature(value: boolean | cdktf.IResolvable) {
    this._digitalSignature = value;
  }
  public resetDigitalSignature() {
    this._digitalSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalSignatureInput() {
    return this._digitalSignature;
  }

  // encipher_only - computed: false, optional: true, required: false
  private _encipherOnly?: boolean | cdktf.IResolvable; 
  public get encipherOnly() {
    return this.getBooleanAttribute('encipher_only');
  }
  public set encipherOnly(value: boolean | cdktf.IResolvable) {
    this._encipherOnly = value;
  }
  public resetEncipherOnly() {
    this._encipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encipherOnlyInput() {
    return this._encipherOnly;
  }

  // key_agreement - computed: false, optional: true, required: false
  private _keyAgreement?: boolean | cdktf.IResolvable; 
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }
  public set keyAgreement(value: boolean | cdktf.IResolvable) {
    this._keyAgreement = value;
  }
  public resetKeyAgreement() {
    this._keyAgreement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAgreementInput() {
    return this._keyAgreement;
  }

  // key_encipherment - computed: false, optional: true, required: false
  private _keyEncipherment?: boolean | cdktf.IResolvable; 
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment');
  }
  public set keyEncipherment(value: boolean | cdktf.IResolvable) {
    this._keyEncipherment = value;
  }
  public resetKeyEncipherment() {
    this._keyEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEnciphermentInput() {
    return this._keyEncipherment;
  }
}
export interface GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage {
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#client_auth GooglePrivatecaCertificateAuthority#client_auth}
  */
  readonly clientAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#code_signing GooglePrivatecaCertificateAuthority#code_signing}
  */
  readonly codeSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#email_protection GooglePrivatecaCertificateAuthority#email_protection}
  */
  readonly emailProtection?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#ocsp_signing GooglePrivatecaCertificateAuthority#ocsp_signing}
  */
  readonly ocspSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#server_auth GooglePrivatecaCertificateAuthority#server_auth}
  */
  readonly serverAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#time_stamping GooglePrivatecaCertificateAuthority#time_stamping}
  */
  readonly timeStamping?: boolean | cdktf.IResolvable;
}

export function googlePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageToTerraform(struct?: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference | GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_auth: cdktf.booleanToTerraform(struct!.clientAuth),
    code_signing: cdktf.booleanToTerraform(struct!.codeSigning),
    email_protection: cdktf.booleanToTerraform(struct!.emailProtection),
    ocsp_signing: cdktf.booleanToTerraform(struct!.ocspSigning),
    server_auth: cdktf.booleanToTerraform(struct!.serverAuth),
    time_stamping: cdktf.booleanToTerraform(struct!.timeStamping),
  }
}

export class GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuth = this._clientAuth;
    }
    if (this._codeSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeSigning = this._codeSigning;
    }
    if (this._emailProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailProtection = this._emailProtection;
    }
    if (this._ocspSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspSigning = this._ocspSigning;
    }
    if (this._serverAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAuth = this._serverAuth;
    }
    if (this._timeStamping !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStamping = this._timeStamping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientAuth = undefined;
      this._codeSigning = undefined;
      this._emailProtection = undefined;
      this._ocspSigning = undefined;
      this._serverAuth = undefined;
      this._timeStamping = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientAuth = value.clientAuth;
      this._codeSigning = value.codeSigning;
      this._emailProtection = value.emailProtection;
      this._ocspSigning = value.ocspSigning;
      this._serverAuth = value.serverAuth;
      this._timeStamping = value.timeStamping;
    }
  }

  // client_auth - computed: false, optional: true, required: false
  private _clientAuth?: boolean | cdktf.IResolvable; 
  public get clientAuth() {
    return this.getBooleanAttribute('client_auth');
  }
  public set clientAuth(value: boolean | cdktf.IResolvable) {
    this._clientAuth = value;
  }
  public resetClientAuth() {
    this._clientAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth;
  }

  // code_signing - computed: false, optional: true, required: false
  private _codeSigning?: boolean | cdktf.IResolvable; 
  public get codeSigning() {
    return this.getBooleanAttribute('code_signing');
  }
  public set codeSigning(value: boolean | cdktf.IResolvable) {
    this._codeSigning = value;
  }
  public resetCodeSigning() {
    this._codeSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSigningInput() {
    return this._codeSigning;
  }

  // email_protection - computed: false, optional: true, required: false
  private _emailProtection?: boolean | cdktf.IResolvable; 
  public get emailProtection() {
    return this.getBooleanAttribute('email_protection');
  }
  public set emailProtection(value: boolean | cdktf.IResolvable) {
    this._emailProtection = value;
  }
  public resetEmailProtection() {
    this._emailProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailProtectionInput() {
    return this._emailProtection;
  }

  // ocsp_signing - computed: false, optional: true, required: false
  private _ocspSigning?: boolean | cdktf.IResolvable; 
  public get ocspSigning() {
    return this.getBooleanAttribute('ocsp_signing');
  }
  public set ocspSigning(value: boolean | cdktf.IResolvable) {
    this._ocspSigning = value;
  }
  public resetOcspSigning() {
    this._ocspSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspSigningInput() {
    return this._ocspSigning;
  }

  // server_auth - computed: false, optional: true, required: false
  private _serverAuth?: boolean | cdktf.IResolvable; 
  public get serverAuth() {
    return this.getBooleanAttribute('server_auth');
  }
  public set serverAuth(value: boolean | cdktf.IResolvable) {
    this._serverAuth = value;
  }
  public resetServerAuth() {
    this._serverAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAuthInput() {
    return this._serverAuth;
  }

  // time_stamping - computed: false, optional: true, required: false
  private _timeStamping?: boolean | cdktf.IResolvable; 
  public get timeStamping() {
    return this.getBooleanAttribute('time_stamping');
  }
  public set timeStamping(value: boolean | cdktf.IResolvable) {
    this._timeStamping = value;
  }
  public resetTimeStamping() {
    this._timeStamping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStampingInput() {
    return this._timeStamping;
  }
}
export interface GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#object_id_path GooglePrivatecaCertificateAuthority#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function googlePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesToTerraform(struct?: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export interface GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage {
  /**
  * base_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#base_key_usage GooglePrivatecaCertificateAuthority#base_key_usage}
  */
  readonly baseKeyUsage: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage;
  /**
  * extended_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#extended_key_usage GooglePrivatecaCertificateAuthority#extended_key_usage}
  */
  readonly extendedKeyUsage: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage;
  /**
  * unknown_extended_key_usages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#unknown_extended_key_usages GooglePrivatecaCertificateAuthority#unknown_extended_key_usages}
  */
  readonly unknownExtendedKeyUsages?: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[] | cdktf.IResolvable;
}

export function googlePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageToTerraform(struct?: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference | GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_key_usage: googlePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageToTerraform(struct!.baseKeyUsage),
    extended_key_usage: googlePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageToTerraform(struct!.extendedKeyUsage),
    unknown_extended_key_usages: cdktf.listMapper(googlePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesToTerraform)(struct!.unknownExtendedKeyUsages),
  }
}

export class GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseKeyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseKeyUsage = this._baseKeyUsage?.internalValue;
    }
    if (this._extendedKeyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedKeyUsage = this._extendedKeyUsage?.internalValue;
    }
    if (this._unknownExtendedKeyUsages !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownExtendedKeyUsages = this._unknownExtendedKeyUsages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseKeyUsage.internalValue = undefined;
      this._extendedKeyUsage.internalValue = undefined;
      this._unknownExtendedKeyUsages = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseKeyUsage.internalValue = value.baseKeyUsage;
      this._extendedKeyUsage.internalValue = value.extendedKeyUsage;
      this._unknownExtendedKeyUsages = value.unknownExtendedKeyUsages;
    }
  }

  // base_key_usage - computed: false, optional: false, required: true
  private _baseKeyUsage = new GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference(this, "base_key_usage");
  public get baseKeyUsage() {
    return this._baseKeyUsage;
  }
  public putBaseKeyUsage(value: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage) {
    this._baseKeyUsage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseKeyUsageInput() {
    return this._baseKeyUsage.internalValue;
  }

  // extended_key_usage - computed: false, optional: false, required: true
  private _extendedKeyUsage = new GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference(this, "extended_key_usage");
  public get extendedKeyUsage() {
    return this._extendedKeyUsage;
  }
  public putExtendedKeyUsage(value: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage) {
    this._extendedKeyUsage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage.internalValue;
  }

  // unknown_extended_key_usages - computed: false, optional: true, required: false
  private _unknownExtendedKeyUsages?: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[] | cdktf.IResolvable; 
  public get unknownExtendedKeyUsages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('unknown_extended_key_usages');
  }
  public set unknownExtendedKeyUsages(value: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[] | cdktf.IResolvable) {
    this._unknownExtendedKeyUsages = value;
  }
  public resetUnknownExtendedKeyUsages() {
    this._unknownExtendedKeyUsages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownExtendedKeyUsagesInput() {
    return this._unknownExtendedKeyUsages;
  }
}
export interface GooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#object_id_path GooglePrivatecaCertificateAuthority#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function googlePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsToTerraform(struct?: GooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export interface GooglePrivatecaCertificateAuthorityConfigX509Config {
  /**
  * Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#aia_ocsp_servers GooglePrivatecaCertificateAuthority#aia_ocsp_servers}
  */
  readonly aiaOcspServers?: string[];
  /**
  * additional_extensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#additional_extensions GooglePrivatecaCertificateAuthority#additional_extensions}
  */
  readonly additionalExtensions?: GooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions[] | cdktf.IResolvable;
  /**
  * ca_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#ca_options GooglePrivatecaCertificateAuthority#ca_options}
  */
  readonly caOptions: GooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions;
  /**
  * key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#key_usage GooglePrivatecaCertificateAuthority#key_usage}
  */
  readonly keyUsage: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage;
  /**
  * policy_ids block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#policy_ids GooglePrivatecaCertificateAuthority#policy_ids}
  */
  readonly policyIds?: GooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds[] | cdktf.IResolvable;
}

export function googlePrivatecaCertificateAuthorityConfigX509ConfigToTerraform(struct?: GooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference | GooglePrivatecaCertificateAuthorityConfigX509Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aia_ocsp_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.aiaOcspServers),
    additional_extensions: cdktf.listMapper(googlePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsToTerraform)(struct!.additionalExtensions),
    ca_options: googlePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsToTerraform(struct!.caOptions),
    key_usage: googlePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageToTerraform(struct!.keyUsage),
    policy_ids: cdktf.listMapper(googlePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsToTerraform)(struct!.policyIds),
  }
}

export class GooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCertificateAuthorityConfigX509Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiaOcspServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiaOcspServers = this._aiaOcspServers;
    }
    if (this._additionalExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalExtensions = this._additionalExtensions;
    }
    if (this._caOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caOptions = this._caOptions?.internalValue;
    }
    if (this._keyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage?.internalValue;
    }
    if (this._policyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyIds = this._policyIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCertificateAuthorityConfigX509Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aiaOcspServers = undefined;
      this._additionalExtensions = undefined;
      this._caOptions.internalValue = undefined;
      this._keyUsage.internalValue = undefined;
      this._policyIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aiaOcspServers = value.aiaOcspServers;
      this._additionalExtensions = value.additionalExtensions;
      this._caOptions.internalValue = value.caOptions;
      this._keyUsage.internalValue = value.keyUsage;
      this._policyIds = value.policyIds;
    }
  }

  // aia_ocsp_servers - computed: false, optional: true, required: false
  private _aiaOcspServers?: string[]; 
  public get aiaOcspServers() {
    return this.getListAttribute('aia_ocsp_servers');
  }
  public set aiaOcspServers(value: string[]) {
    this._aiaOcspServers = value;
  }
  public resetAiaOcspServers() {
    this._aiaOcspServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiaOcspServersInput() {
    return this._aiaOcspServers;
  }

  // additional_extensions - computed: false, optional: true, required: false
  private _additionalExtensions?: GooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions[] | cdktf.IResolvable; 
  public get additionalExtensions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_extensions');
  }
  public set additionalExtensions(value: GooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions[] | cdktf.IResolvable) {
    this._additionalExtensions = value;
  }
  public resetAdditionalExtensions() {
    this._additionalExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExtensionsInput() {
    return this._additionalExtensions;
  }

  // ca_options - computed: false, optional: false, required: true
  private _caOptions = new GooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference(this, "ca_options");
  public get caOptions() {
    return this._caOptions;
  }
  public putCaOptions(value: GooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions) {
    this._caOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caOptionsInput() {
    return this._caOptions.internalValue;
  }

  // key_usage - computed: false, optional: false, required: true
  private _keyUsage = new GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }
  public putKeyUsage(value: GooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage) {
    this._keyUsage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage.internalValue;
  }

  // policy_ids - computed: false, optional: true, required: false
  private _policyIds?: GooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds[] | cdktf.IResolvable; 
  public get policyIds() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('policy_ids');
  }
  public set policyIds(value: GooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds[] | cdktf.IResolvable) {
    this._policyIds = value;
  }
  public resetPolicyIds() {
    this._policyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdsInput() {
    return this._policyIds;
  }
}
export interface GooglePrivatecaCertificateAuthorityConfigA {
  /**
  * subject_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#subject_config GooglePrivatecaCertificateAuthority#subject_config}
  */
  readonly subjectConfig: GooglePrivatecaCertificateAuthorityConfigSubjectConfig;
  /**
  * x509_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#x509_config GooglePrivatecaCertificateAuthority#x509_config}
  */
  readonly x509Config: GooglePrivatecaCertificateAuthorityConfigX509Config;
}

export function googlePrivatecaCertificateAuthorityConfigAToTerraform(struct?: GooglePrivatecaCertificateAuthorityConfigAOutputReference | GooglePrivatecaCertificateAuthorityConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_config: googlePrivatecaCertificateAuthorityConfigSubjectConfigToTerraform(struct!.subjectConfig),
    x509_config: googlePrivatecaCertificateAuthorityConfigX509ConfigToTerraform(struct!.x509Config),
  }
}

export class GooglePrivatecaCertificateAuthorityConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCertificateAuthorityConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subjectConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectConfig = this._subjectConfig?.internalValue;
    }
    if (this._x509Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509Config = this._x509Config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCertificateAuthorityConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subjectConfig.internalValue = undefined;
      this._x509Config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subjectConfig.internalValue = value.subjectConfig;
      this._x509Config.internalValue = value.x509Config;
    }
  }

  // subject_config - computed: false, optional: false, required: true
  private _subjectConfig = new GooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference(this, "subject_config");
  public get subjectConfig() {
    return this._subjectConfig;
  }
  public putSubjectConfig(value: GooglePrivatecaCertificateAuthorityConfigSubjectConfig) {
    this._subjectConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectConfigInput() {
    return this._subjectConfig.internalValue;
  }

  // x509_config - computed: false, optional: false, required: true
  private _x509Config = new GooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference(this, "x509_config");
  public get x509Config() {
    return this._x509Config;
  }
  public putX509Config(value: GooglePrivatecaCertificateAuthorityConfigX509Config) {
    this._x509Config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x509ConfigInput() {
    return this._x509Config.internalValue;
  }
}
export interface GooglePrivatecaCertificateAuthorityKeySpec {
  /**
  * The algorithm to use for creating a managed Cloud KMS key for a for a simplified
experience. All managed keys will be have their ProtectionLevel as HSM. Possible values: ["SIGN_HASH_ALGORITHM_UNSPECIFIED", "RSA_PSS_2048_SHA256", "RSA_PSS_3072_SHA256", "RSA_PSS_4096_SHA256", "RSA_PKCS1_2048_SHA256", "RSA_PKCS1_3072_SHA256", "RSA_PKCS1_4096_SHA256", "EC_P256_SHA256", "EC_P384_SHA384"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#algorithm GooglePrivatecaCertificateAuthority#algorithm}
  */
  readonly algorithm?: string;
  /**
  * The resource name for an existing Cloud KMS CryptoKeyVersion in the format
'projects/*\/locations/*\/keyRings/*\/cryptoKeys/*\/cryptoKeyVersions/*'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#cloud_kms_key_version GooglePrivatecaCertificateAuthority#cloud_kms_key_version}
  */
  readonly cloudKmsKeyVersion?: string;
}

export function googlePrivatecaCertificateAuthorityKeySpecToTerraform(struct?: GooglePrivatecaCertificateAuthorityKeySpecOutputReference | GooglePrivatecaCertificateAuthorityKeySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    cloud_kms_key_version: cdktf.stringToTerraform(struct!.cloudKmsKeyVersion),
  }
}

export class GooglePrivatecaCertificateAuthorityKeySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCertificateAuthorityKeySpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._cloudKmsKeyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudKmsKeyVersion = this._cloudKmsKeyVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePrivatecaCertificateAuthorityKeySpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._cloudKmsKeyVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._cloudKmsKeyVersion = value.cloudKmsKeyVersion;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // cloud_kms_key_version - computed: false, optional: true, required: false
  private _cloudKmsKeyVersion?: string; 
  public get cloudKmsKeyVersion() {
    return this.getStringAttribute('cloud_kms_key_version');
  }
  public set cloudKmsKeyVersion(value: string) {
    this._cloudKmsKeyVersion = value;
  }
  public resetCloudKmsKeyVersion() {
    this._cloudKmsKeyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudKmsKeyVersionInput() {
    return this._cloudKmsKeyVersion;
  }
}
export interface GooglePrivatecaCertificateAuthorityTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#create GooglePrivatecaCertificateAuthority#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#delete GooglePrivatecaCertificateAuthority#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority#update GooglePrivatecaCertificateAuthority#update}
  */
  readonly update?: string;
}

export function googlePrivatecaCertificateAuthorityTimeoutsToTerraform(struct?: GooglePrivatecaCertificateAuthorityTimeoutsOutputReference | GooglePrivatecaCertificateAuthorityTimeouts | cdktf.IResolvable): any {
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

export class GooglePrivatecaCertificateAuthorityTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePrivatecaCertificateAuthorityTimeouts | undefined {
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

  public set internalValue(value: GooglePrivatecaCertificateAuthorityTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority google_privateca_certificate_authority}
*/
export class GooglePrivatecaCertificateAuthority extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_privateca_certificate_authority";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_privateca_certificate_authority google_privateca_certificate_authority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GooglePrivatecaCertificateAuthorityConfig
  */
  public constructor(scope: Construct, id: string, config: GooglePrivatecaCertificateAuthorityConfig) {
    super(scope, id, {
      terraformResourceType: 'google_privateca_certificate_authority',
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
    this._certificateAuthorityId = config.certificateAuthorityId;
    this._deletionProtection = config.deletionProtection;
    this._desiredState = config.desiredState;
    this._gcsBucket = config.gcsBucket;
    this._ignoreActiveCertificatesOnDeletion = config.ignoreActiveCertificatesOnDeletion;
    this._labels = config.labels;
    this._lifetime = config.lifetime;
    this._location = config.location;
    this._pool = config.pool;
    this._project = config.project;
    this._type = config.type;
    this._config.internalValue = config.config;
    this._keySpec.internalValue = config.keySpec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_urls - computed: true, optional: false, required: false
  private _accessUrls = new GooglePrivatecaCertificateAuthorityAccessUrlsList(this, "access_urls", false);
  public get accessUrls() {
    return this._accessUrls;
  }

  // certificate_authority_id - computed: false, optional: false, required: true
  private _certificateAuthorityId?: string; 
  public get certificateAuthorityId() {
    return this.getStringAttribute('certificate_authority_id');
  }
  public set certificateAuthorityId(value: string) {
    this._certificateAuthorityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityIdInput() {
    return this._certificateAuthorityId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // gcs_bucket - computed: false, optional: true, required: false
  private _gcsBucket?: string; 
  public get gcsBucket() {
    return this.getStringAttribute('gcs_bucket');
  }
  public set gcsBucket(value: string) {
    this._gcsBucket = value;
  }
  public resetGcsBucket() {
    this._gcsBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsBucketInput() {
    return this._gcsBucket;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_active_certificates_on_deletion - computed: false, optional: true, required: false
  private _ignoreActiveCertificatesOnDeletion?: boolean | cdktf.IResolvable; 
  public get ignoreActiveCertificatesOnDeletion() {
    return this.getBooleanAttribute('ignore_active_certificates_on_deletion');
  }
  public set ignoreActiveCertificatesOnDeletion(value: boolean | cdktf.IResolvable) {
    this._ignoreActiveCertificatesOnDeletion = value;
  }
  public resetIgnoreActiveCertificatesOnDeletion() {
    this._ignoreActiveCertificatesOnDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreActiveCertificatesOnDeletionInput() {
    return this._ignoreActiveCertificatesOnDeletion;
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

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: string; 
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }
  public set lifetime(value: string) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pem_ca_certificates - computed: true, optional: false, required: false
  public get pemCaCertificates() {
    return this.getListAttribute('pem_ca_certificates');
  }

  // pool - computed: false, optional: false, required: true
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // config - computed: false, optional: false, required: true
  private _config = new GooglePrivatecaCertificateAuthorityConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GooglePrivatecaCertificateAuthorityConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // key_spec - computed: false, optional: false, required: true
  private _keySpec = new GooglePrivatecaCertificateAuthorityKeySpecOutputReference(this, "key_spec");
  public get keySpec() {
    return this._keySpec;
  }
  public putKeySpec(value: GooglePrivatecaCertificateAuthorityKeySpec) {
    this._keySpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySpecInput() {
    return this._keySpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GooglePrivatecaCertificateAuthorityTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GooglePrivatecaCertificateAuthorityTimeouts) {
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
      certificate_authority_id: cdktf.stringToTerraform(this._certificateAuthorityId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      desired_state: cdktf.stringToTerraform(this._desiredState),
      gcs_bucket: cdktf.stringToTerraform(this._gcsBucket),
      ignore_active_certificates_on_deletion: cdktf.booleanToTerraform(this._ignoreActiveCertificatesOnDeletion),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      lifetime: cdktf.stringToTerraform(this._lifetime),
      location: cdktf.stringToTerraform(this._location),
      pool: cdktf.stringToTerraform(this._pool),
      project: cdktf.stringToTerraform(this._project),
      type: cdktf.stringToTerraform(this._type),
      config: googlePrivatecaCertificateAuthorityConfigAToTerraform(this._config.internalValue),
      key_spec: googlePrivatecaCertificateAuthorityKeySpecToTerraform(this._keySpec.internalValue),
      timeouts: googlePrivatecaCertificateAuthorityTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
