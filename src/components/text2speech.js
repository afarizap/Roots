// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Import other required libraries
const fs = require('fs');
const util = require('util');

// Creates a client
const projectId = 'roots-5fa0f '
const keyFilename = 'Roots-01dbeeb1ec5a.json'
const client = new textToSpeech.TextToSpeechClient({ projectId, keyFilename });

// Load Settings
const YourSetting = fs.readFileSync('setting.json');

// Await for event
async function Text2Speech(YourSetting) {
  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(JSON.parse(YourSetting));

// Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile(JSON.parse(YourSetting).outputFileName, response.audioContent, 'binary');
  console.log(`Audio content written to file: ${JSON.parse(YourSetting).outputFileName}`);
}
Text2Speech(YourSetting);
