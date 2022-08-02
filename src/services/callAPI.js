import axios from "axios";

class GymDataService {
    findDiet(id) {
        return axios.get(`http://gymmanagement.azurewebsites.net/Diet/GetAllDietsByUser?userId=${id}`);
    }
}

export default new GymDataService();