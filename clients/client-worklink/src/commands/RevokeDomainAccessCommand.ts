// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RevokeDomainAccessRequest, RevokeDomainAccessResponse } from "../models/models_0";
import { de_RevokeDomainAccessCommand, se_RevokeDomainAccessCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RevokeDomainAccessCommand}.
 */
export interface RevokeDomainAccessCommandInput extends RevokeDomainAccessRequest {}
/**
 * @public
 *
 * The output of {@link RevokeDomainAccessCommand}.
 */
export interface RevokeDomainAccessCommandOutput extends RevokeDomainAccessResponse, __MetadataBearer {}

/**
 * <p>Moves a domain to INACTIVE status if it was in the ACTIVE status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, RevokeDomainAccessCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, RevokeDomainAccessCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // RevokeDomainAccessRequest
 *   FleetArn: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new RevokeDomainAccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeDomainAccessCommandInput - {@link RevokeDomainAccessCommandInput}
 * @returns {@link RevokeDomainAccessCommandOutput}
 * @see {@link RevokeDomainAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeDomainAccessCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link WorkLinkServiceException}
 * <p>Base exception class for all service exceptions from WorkLink service.</p>
 *
 * @public
 * @deprecated Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.
 */
export class RevokeDomainAccessCommand extends $Command
  .classBuilder<
    RevokeDomainAccessCommandInput,
    RevokeDomainAccessCommandOutput,
    WorkLinkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkLinkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkLink", "RevokeDomainAccess", {})
  .n("WorkLinkClient", "RevokeDomainAccessCommand")
  .f(void 0, void 0)
  .ser(se_RevokeDomainAccessCommand)
  .de(de_RevokeDomainAccessCommand)
  .build() {}
