// https://www.terraform.io/docs/providers/google-beta/d/google_client_openid_userinfo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleClientOpenidUserinfoConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/d/google_client_openid_userinfo google_client_openid_userinfo}
*/
export class DataGoogleClientOpenidUserinfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_client_openid_userinfo";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/d/google_client_openid_userinfo google_client_openid_userinfo} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleClientOpenidUserinfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleClientOpenidUserinfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_client_openid_userinfo',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}