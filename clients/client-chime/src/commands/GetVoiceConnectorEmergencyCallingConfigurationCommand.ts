// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetVoiceConnectorEmergencyCallingConfigurationRequest,
  GetVoiceConnectorEmergencyCallingConfigurationResponse,
  GetVoiceConnectorEmergencyCallingConfigurationResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  de_GetVoiceConnectorEmergencyCallingConfigurationCommand,
  se_GetVoiceConnectorEmergencyCallingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetVoiceConnectorEmergencyCallingConfigurationCommand}.
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationCommandInput
  extends GetVoiceConnectorEmergencyCallingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceConnectorEmergencyCallingConfigurationCommand}.
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationCommandOutput
  extends GetVoiceConnectorEmergencyCallingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Gets the emergency calling configuration details for the specified Amazon Chime Voice Connector.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetVoiceConnectorEmergencyCallingConfiguration.html">GetVoiceConnectorEmergencyCallingConfiguration</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetVoiceConnectorEmergencyCallingConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetVoiceConnectorEmergencyCallingConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // GetVoiceConnectorEmergencyCallingConfigurationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new GetVoiceConnectorEmergencyCallingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetVoiceConnectorEmergencyCallingConfigurationResponse
 * //   EmergencyCallingConfiguration: { // EmergencyCallingConfiguration
 * //     DNIS: [ // DNISEmergencyCallingConfigurationList
 * //       { // DNISEmergencyCallingConfiguration
 * //         EmergencyPhoneNumber: "STRING_VALUE", // required
 * //         TestPhoneNumber: "STRING_VALUE",
 * //         CallingCountry: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVoiceConnectorEmergencyCallingConfigurationCommandInput - {@link GetVoiceConnectorEmergencyCallingConfigurationCommandInput}
 * @returns {@link GetVoiceConnectorEmergencyCallingConfigurationCommandOutput}
 * @see {@link GetVoiceConnectorEmergencyCallingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorEmergencyCallingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 * @deprecated Replaced by GetVoiceConnectorEmergencyCallingConfiguration in the Amazon Chime SDK Voice Namespace
 */
export class GetVoiceConnectorEmergencyCallingConfigurationCommand extends $Command
  .classBuilder<
    GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    GetVoiceConnectorEmergencyCallingConfigurationCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "GetVoiceConnectorEmergencyCallingConfiguration", {})
  .n("ChimeClient", "GetVoiceConnectorEmergencyCallingConfigurationCommand")
  .f(void 0, GetVoiceConnectorEmergencyCallingConfigurationResponseFilterSensitiveLog)
  .ser(se_GetVoiceConnectorEmergencyCallingConfigurationCommand)
  .de(de_GetVoiceConnectorEmergencyCallingConfigurationCommand)
  .build() {}
