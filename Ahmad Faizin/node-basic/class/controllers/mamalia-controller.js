const MamaliaService = require('../services/mamalia-service')

class Mamaliacontroller{
    constructor () {
        this.mamaliaServices = new MamaliaService();
    }
    getSuara() {
        this.mamaliaServices.getSuara();
    }
}

module.exports = Mamaliacontroller