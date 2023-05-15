const clinicRepository  = require('../repository/clinic.repository');

class ClinicService {

    constructor() {}

    async getClinic() {
        return await clinicRepository.getClinic();
    }

    async createClinic(clinic) {
        return await clinicRepository.createClinic(clinic);
    }

    async updateClinic(clinic) {
        return await clinicRepository.updateClinic(clinic);
    }

    async deleteClinic(clinic) {
        return await clinicRepository.deleteClinic(clinic);
    }

}

module.exports = new ClinicService();