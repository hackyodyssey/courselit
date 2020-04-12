const types = require('./types.js')
const logic = require('./logic.js');

module.exports = {
    getCustomisations: {
        type: types.customisationType,
        resolve: (root, {}, context) => logic.getCustomisations()
    }
}