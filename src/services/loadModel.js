const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/model-storage-production-dylan/model-in-priod/model.json');
}
module.exports = loadModel;