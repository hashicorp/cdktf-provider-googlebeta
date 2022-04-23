// https://www.terraform.io/docs/providers/google-beta/d/google_kms_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleKmsSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_kms_secret#additional_authenticated_data DataGoogleKmsSecret#additional_authenticated_data}
  */
  readonly additionalAuthenticatedData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_kms_secret#ciphertext DataGoogleKmsSecret#ciphertext}
  */
  readonly ciphertext: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_kms_secret#crypto_key DataGoogleKmsSecret#crypto_key}
  */
  readonly cryptoKey: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/d/google_kms_secret google_kms_secret}
*/
export class DataGoogleKmsSecret extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_kms_secret";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/d/google_kms_secret google_kms_secret} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleKmsSecretConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleKmsSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_secret',
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
    this._additionalAuthenticatedData = config.additionalAuthenticatedData;
    this._ciphertext = config.ciphertext;
    this._cryptoKey = config.cryptoKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_authenticated_data - computed: false, optional: true, required: false
  private _additionalAuthenticatedData?: string; 
  public get additionalAuthenticatedData() {
    return this.getStringAttribute('additional_authenticated_data');
  }
  public set additionalAuthenticatedData(value: string) {
    this._additionalAuthenticatedData = value;
  }
  public resetAdditionalAuthenticatedData() {
    this._additionalAuthenticatedData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAuthenticatedDataInput() {
    return this._additionalAuthenticatedData;
  }

  // ciphertext - computed: false, optional: false, required: true
  private _ciphertext?: string; 
  public get ciphertext() {
    return this.getStringAttribute('ciphertext');
  }
  public set ciphertext(value: string) {
    this._ciphertext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphertextInput() {
    return this._ciphertext;
  }

  // crypto_key - computed: false, optional: false, required: true
  private _cryptoKey?: string; 
  public get cryptoKey() {
    return this.getStringAttribute('crypto_key');
  }
  public set cryptoKey(value: string) {
    this._cryptoKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // plaintext - computed: true, optional: false, required: false
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_authenticated_data: cdktf.stringToTerraform(this._additionalAuthenticatedData),
      ciphertext: cdktf.stringToTerraform(this._ciphertext),
      crypto_key: cdktf.stringToTerraform(this._cryptoKey),
    };
  }
}