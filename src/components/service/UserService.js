



import axios from "axios";

class UserService {
    static BASE_URL = "http://localhost:8080";

    static async login(email, password) {
        try {
            const response = await axios.post(`${UserService.BASE_URL}/auth/login`, { email, password });
            console.log(response.data.ourUsers.email);
            return response;
        } catch (err) {
            throw err;
        }
    }

    static async register(userData) {
        try {
            const response = await axios.post(`${UserService.BASE_URL}/auth/register`, userData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // Add any required authorization headers if necessary
                },
            });
            return response.data;
        } catch (error) {
            if (error.response) {
                switch (error.response.status) {
                    case 403:
                        console.error("Forbidden: You don't have permission to register.");
                        break;
                    case 409:
                        console.error("Conflict: Email is already registered.");
                        break;
                    default:
                        console.error("Registration failed:", error.response.data);
                }
            } else {
                console.error("Error during registration:", error);
            }
            throw error;
        }
    }
    
    

    static async getAllUsers(token) {
        try {
            const response = await axios.get(`${UserService.BASE_URL}/admin/get-all-users`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    static async getYourProfile(token) {
        try {
            const response = await axios.get(`${UserService.BASE_URL}/adminuser/get-profile`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    static async getUserById(userId, token) {
        try {
            const response = await axios.get(`${UserService.BASE_URL}/admin/get-users/${userId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    static async deleteUser(userId, token) {
        try {
            const response = await axios.delete(`${UserService.BASE_URL}/admin/delete/${userId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    static async updateUser(userId, userData, token) {
        try {
            const response = await axios.put(`${UserService.BASE_URL}/admin/update/${userId}`, userData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    static logout() {
        localStorage.removeItem('token');
    }

    static isAuthenticated() {
        const token = localStorage.getItem('token');
        return !!token;
    }
}

export default UserService;
