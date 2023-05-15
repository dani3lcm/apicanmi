const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class ClinicRepository {

    db = {};

    constructor() {
        this.db = connect();    
        // For Development
         this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
    }

    async getClinic() {
        
        try {
            const clinics = await this.db.clinic.findAll();
            console.log('clinics:::', clinics);
            return clinics;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createClinic(clinic) {
        let data = {};
        try {
            clinic.createdAt = new Date().toISOString();
            data = await this.db.clinic.create(clinic);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateClinic(clinic) {
        let data = {};
        try {
            clinic.updatedAt = new Date().toISOString();
            data = await this.db.clinic.update({...clinic}, {
                where: {
                    id: clinic.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteClinic(clinicId) {
        let data = {};
        try {
            data = await this.db.clinic.destroy({
                where: {
                    id: clinicId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new ClinicRepository();