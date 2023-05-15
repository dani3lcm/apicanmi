const clinicService  = require('../service/clinic.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getClinic() {
        logger.info('Controller: getClinic')
        return await clinicService.getClinic();
    }

    async createClinic(clinic) {
        logger.info('Controller: createClinic', clinic);
        return await clinicService.createClinic(clinic);
    }

    async updateClinic(clinic) {
        logger.info('Controller: updateClinic', clinic);
        return await clinicService.updateClinic(clinic);
    }

    async deleteClinic(clinicId) {
        logger.info('Controller: deleteClinic', clinicId);
        return await clinicService.deleteClinic(clinicId);
    }
}
module.exports = new TodoController();