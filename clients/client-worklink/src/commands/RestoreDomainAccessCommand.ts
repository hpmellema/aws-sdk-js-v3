// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreDomainAccessRequest, RestoreDomainAccessResponse } from "../models/models_0";
import { de_RestoreDomainAccessCommand, se_RestoreDomainAccessCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RestoreDomainAccessCommand}.
 */
export interface RestoreDomainAccessCommandInput extends RestoreDomainAccessRequest {}
/**
 * @public
 *
 * The output of {@link RestoreDomainAccessCommand}.
 */
export interface RestoreDomainAccessCommandOutput extends RestoreDomainAccessResponse, __MetadataBearer {}

/**
 * <p>Moves a domain to ACTIVE status if it was in the INACTIVE status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, RestoreDomainAccessCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, RestoreDomainAccessCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // RestoreDomainAccessRequest
 *   FleetArn: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new RestoreDomainAccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RestoreDomainAccessCommandInput - {@link RestoreDomainAccessCommandInput}
 * @returns {@link RestoreDomainAccessCommandOutput}
 * @see {@link RestoreDomainAccessCommandInput} for command's `input` shape.
 * @see {@link RestoreDomainAccessCommandOutput} for command's `response` shape.
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
export class RestoreDomainAccessCommand extends $Command
  .classBuilder<
    RestoreDomainAccessCommandInput,
    RestoreDomainAccessCommandOutput,
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
  .s("WorkLink", "RestoreDomainAccess", {})
  .n("WorkLinkClient", "RestoreDomainAccessCommand")
  .f(void 0, void 0)
  .ser(se_RestoreDomainAccessCommand)
  .de(de_RestoreDomainAccessCommand)
  .build() {}
