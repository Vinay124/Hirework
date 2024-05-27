import Config from "../../../../config";
import axios from "axios";

const { apiUrl } = Config; 

export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${apiUrl}user/signup`, userData, {
            headers : {
                'Content-Type': 'application/json'
            }
        });

        localStorage.setItem('user', JSON.stringify(response.data));

        const data = await response.json();
        console.log(userData);
        return data;

    } catch (error) {
        console.error('Error creating user', error);
        throw error;
    }
};