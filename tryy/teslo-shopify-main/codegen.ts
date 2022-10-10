import { CodegenConfig } from "@graphql-codegen/cli";
require("dotenv").config();

const config: CodegenConfig = {
	generates: {
		"./lib/shopify/generated/storefrontGenerated.ts": {
			schema: [
				{
					[`https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}`]:
						{
							headers: {
								"Content-Type": "application/json",
								"X-Shopify-Storefront-Access-Token":
									`${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_ACCESS_TOKEN}` ||
									"",
							},
						},
				},
			],
			documents: "./lib/shopify/storefront/**/*.ts",
			plugins: [
				"typescript",
				"typescript-operations",
				"typescript-graphql-request",
				"plugin-typescript-swr",
			],
			config: {
				rawRequest: false,
			},
		},
	},
};

export default config;
