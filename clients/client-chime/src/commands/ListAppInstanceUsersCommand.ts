// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAppInstanceUsersRequest,
  ListAppInstanceUsersRequestFilterSensitiveLog,
  ListAppInstanceUsersResponse,
  ListAppInstanceUsersResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_ListAppInstanceUsersCommand, se_ListAppInstanceUsersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAppInstanceUsersCommand}.
 */
export interface ListAppInstanceUsersCommandInput extends ListAppInstanceUsersRequest {}
/**
 * @public
 *
 * The output of {@link ListAppInstanceUsersCommand}.
 */
export interface ListAppInstanceUsersCommandOutput extends ListAppInstanceUsersResponse, __MetadataBearer {}

/**
 * <p>List all <code>AppInstanceUsers</code>
 *             created under a single <code>AppInstance</code>.
 *         </p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_ListAppInstanceUsers.html">ListAppInstanceUsers</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                 <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListAppInstanceUsersCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListAppInstanceUsersCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // ListAppInstanceUsersRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAppInstanceUsersCommand(input);
 * const response = await client.send(command);
 * // { // ListAppInstanceUsersResponse
 * //   AppInstanceArn: "STRING_VALUE",
 * //   AppInstanceUsers: [ // AppInstanceUserList
 * //     { // AppInstanceUserSummary
 * //       AppInstanceUserArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Metadata: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppInstanceUsersCommandInput - {@link ListAppInstanceUsersCommandInput}
 * @returns {@link ListAppInstanceUsersCommandOutput}
 * @see {@link ListAppInstanceUsersCommandInput} for command's `input` shape.
 * @see {@link ListAppInstanceUsersCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
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
 * @deprecated Replaced by ListAppInstanceUsers in the Amazon Chime SDK Identity Namespace
 */
export class ListAppInstanceUsersCommand extends $Command
  .classBuilder<
    ListAppInstanceUsersCommandInput,
    ListAppInstanceUsersCommandOutput,
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
  .s("UCBuzzConsoleService", "ListAppInstanceUsers", {})
  .n("ChimeClient", "ListAppInstanceUsersCommand")
  .f(ListAppInstanceUsersRequestFilterSensitiveLog, ListAppInstanceUsersResponseFilterSensitiveLog)
  .ser(se_ListAppInstanceUsersCommand)
  .de(de_ListAppInstanceUsersCommand)
  .build() {}
