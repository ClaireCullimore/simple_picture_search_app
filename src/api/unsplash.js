import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
      Authorization: 'Client-ID cYHxvhPWe58Xva0RbOpPs5A1WYaGx2QVa3wLTZYVqXE'
    }
});
