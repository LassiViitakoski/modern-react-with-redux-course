import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID N-6JzKWqsadTe_CkuNAcF6OfYbKqYr4MOy2Li_c0eSM' }
});