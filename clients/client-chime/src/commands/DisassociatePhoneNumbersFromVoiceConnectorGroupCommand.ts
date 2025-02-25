// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociatePhoneNumbersFromVoiceConnectorGroupRequest,
  DisassociatePhoneNumbersFromVoiceConnectorGroupRequestFilterSensitiveLog,
  DisassociatePhoneNumbersFromVoiceConnectorGroupResponse,
} from "../models/models_0";
import {
  de_DisassociatePhoneNumbersFromVoiceConnectorGroupCommand,
  se_DisassociatePhoneNumbersFromVoiceConnectorGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommand}.
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput
  extends DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {}
/**
 * @public
 *
 * The output of {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommand}.
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput
  extends DisassociatePhoneNumbersFromVoiceConnectorGroupResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector group.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DisassociatePhoneNumbersFromVoiceConnectorGroup.html">DisassociatePhoneNumbersFromVoiceConnectorGroup</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DisassociatePhoneNumbersFromVoiceConnectorGroupCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DisassociatePhoneNumbersFromVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // DisassociatePhoneNumbersFromVoiceConnectorGroupRequest
 *   VoiceConnectorGroupId: "STRING_VALUE", // required
 *   E164PhoneNumbers: [ // E164PhoneNumberList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociatePhoneNumbersFromVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * // { // DisassociatePhoneNumbersFromVoiceConnectorGroupResponse
 * //   PhoneNumberErrors: [ // PhoneNumberErrorList
 * //     { // PhoneNumberError
 * //       PhoneNumberId: "STRING_VALUE",
 * //       ErrorCode: "BadRequest" || "Conflict" || "Forbidden" || "NotFound" || "PreconditionFailed" || "ResourceLimitExceeded" || "ServiceFailure" || "AccessDenied" || "ServiceUnavailable" || "Throttled" || "Throttling" || "Unauthorized" || "Unprocessable" || "VoiceConnectorGroupAssociationsExist" || "PhoneNumberAssociationsExist",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput - {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput}
 * @returns {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput}
 * @see {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput} for command's `response` shape.
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
 * @deprecated Replaced by DisassociatePhoneNumbersFromVoiceConnectorGroup in the Amazon Chime SDK Voice Namespace
 */
export class DisassociatePhoneNumbersFromVoiceConnectorGroupCommand extends $Command
  .classBuilder<
    DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput,
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
  .s("UCBuzzConsoleService", "DisassociatePhoneNumbersFromVoiceConnectorGroup", {})
  .n("ChimeClient", "DisassociatePhoneNumbersFromVoiceConnectorGroupCommand")
  .f(DisassociatePhoneNumbersFromVoiceConnectorGroupRequestFilterSensitiveLog, void 0)
  .ser(se_DisassociatePhoneNumbersFromVoiceConnectorGroupCommand)
  .de(de_DisassociatePhoneNumbersFromVoiceConnectorGroupCommand)
  .build() {}
