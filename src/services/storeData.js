const { Firestore } = require('@google-cloud/firestore'); // hanya satu deklarasi

const path = require('path');
const pathKey = path.resolve('./submissionmlgc-narendradylan-06d57d9fe444.json');

async function storeData(id, data) {
  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-narendradylan',
      keyFilename: pathKey,
    });

    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = storeData;
