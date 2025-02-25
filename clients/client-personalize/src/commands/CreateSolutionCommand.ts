// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSolutionRequest, CreateSolutionResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_CreateSolutionCommand, se_CreateSolutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSolutionCommand}.
 */
export interface CreateSolutionCommandInput extends CreateSolutionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSolutionCommand}.
 */
export interface CreateSolutionCommandOutput extends CreateSolutionResponse, __MetadataBearer {}

/**
 * <p>Creates the configuration for training a model. A trained model is known as
 *       a solution version. After the configuration is created, you train the model (create a solution version)
 *       by calling the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> operation. Every time you call
 *       <code>CreateSolutionVersion</code>, a new version of the solution is created.</p>
 *          <p>After creating a solution version, you check its accuracy by calling
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html">GetSolutionMetrics</a>. When you are satisfied with the version, you
 *       deploy it using <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>. The campaign provides recommendations
 *       to a client through the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
 *          <p>To train a model, Amazon Personalize requires training data and a recipe. The training data
 *       comes from the dataset group that you provide in the request. A recipe specifies
 *       the training algorithm and a feature transformation. You can specify one of the predefined
 *       recipes provided by Amazon Personalize. </p>
 *          <note>
 *             <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code>
 *         for solution hyperparameter optimization at this time.</p>
 *          </note>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A solution can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>. Wait
 *       until the status shows as ACTIVE before calling <code>CreateSolutionVersion</code>.</p>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateSolutionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateSolutionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // CreateSolutionRequest
 *   name: "STRING_VALUE", // required
 *   performHPO: true || false,
 *   performAutoML: true || false,
 *   recipeArn: "STRING_VALUE",
 *   datasetGroupArn: "STRING_VALUE", // required
 *   eventType: "STRING_VALUE",
 *   solutionConfig: { // SolutionConfig
 *     eventValueThreshold: "STRING_VALUE",
 *     hpoConfig: { // HPOConfig
 *       hpoObjective: { // HPOObjective
 *         type: "STRING_VALUE",
 *         metricName: "STRING_VALUE",
 *         metricRegex: "STRING_VALUE",
 *       },
 *       hpoResourceConfig: { // HPOResourceConfig
 *         maxNumberOfTrainingJobs: "STRING_VALUE",
 *         maxParallelTrainingJobs: "STRING_VALUE",
 *       },
 *       algorithmHyperParameterRanges: { // HyperParameterRanges
 *         integerHyperParameterRanges: [ // IntegerHyperParameterRanges
 *           { // IntegerHyperParameterRange
 *             name: "STRING_VALUE",
 *             minValue: Number("int"),
 *             maxValue: Number("int"),
 *           },
 *         ],
 *         continuousHyperParameterRanges: [ // ContinuousHyperParameterRanges
 *           { // ContinuousHyperParameterRange
 *             name: "STRING_VALUE",
 *             minValue: Number("double"),
 *             maxValue: Number("double"),
 *           },
 *         ],
 *         categoricalHyperParameterRanges: [ // CategoricalHyperParameterRanges
 *           { // CategoricalHyperParameterRange
 *             name: "STRING_VALUE",
 *             values: [ // CategoricalValues
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *     },
 *     algorithmHyperParameters: { // HyperParameters
 *       "<keys>": "STRING_VALUE",
 *     },
 *     featureTransformationParameters: { // FeatureTransformationParameters
 *       "<keys>": "STRING_VALUE",
 *     },
 *     autoMLConfig: { // AutoMLConfig
 *       metricName: "STRING_VALUE",
 *       recipeList: [ // ArnList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     optimizationObjective: { // OptimizationObjective
 *       itemAttribute: "STRING_VALUE",
 *       objectiveSensitivity: "LOW" || "MEDIUM" || "HIGH" || "OFF",
 *     },
 *     trainingDataConfig: { // TrainingDataConfig
 *       excludedDatasetColumns: { // ExcludedDatasetColumns
 *         "<keys>": [ // ColumnNamesList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       tagKey: "STRING_VALUE", // required
 *       tagValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSolutionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSolutionResponse
 * //   solutionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSolutionCommandInput - {@link CreateSolutionCommandInput}
 * @returns {@link CreateSolutionCommandOutput}
 * @see {@link CreateSolutionCommandInput} for command's `input` shape.
 * @see {@link CreateSolutionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of requests per second has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have exceeded the maximum number of tags you can apply to this resource. </p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 * @public
 */
export class CreateSolutionCommand extends $Command
  .classBuilder<
    CreateSolutionCommandInput,
    CreateSolutionCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "CreateSolution", {})
  .n("PersonalizeClient", "CreateSolutionCommand")
  .f(void 0, void 0)
  .ser(se_CreateSolutionCommand)
  .de(de_CreateSolutionCommand)
  .build() {}
