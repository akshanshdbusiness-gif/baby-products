const configManager = require('./configManager.js');

const environment = process.env.CONTENTFUL_ENVIRONMENT;
const previewMode = process.env.CONTENTFUL_IS_PREVIEW;

const config = configManager.getConfig(environment, previewMode);

const client = require('contentful').createClient({
  space: config.spaceId,
  accessToken: config.accessToken,
  environment: config.environment,
});

export async function fetchEntries() {
  //   const response = await client.getContentType('productDetail');
  //   const entries = await client.getEntries();
  //   const types = await client.getContentTypes();
  //   console.log(types.items.map((t) => t.sys.id));
  //   console.log(response);
  //   console.log(entries);
  //if (entries.items) return entries.items;
}

export default { fetchEntries };
