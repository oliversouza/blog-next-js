import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://wkejnwycnazumrekunsh.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrZWpud3ljbmF6dW1yZWt1bnNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0Mzg5MTUsImV4cCI6MjA2ODAxNDkxNX0.t5oK0SizbKrKHDaxGKsgI8-EvQyQpn7nIFPBFD1HwzU",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrZWpud3ljbmF6dW1yZWt1bnNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0Mzg5MTUsImV4cCI6MjA2ODAxNDkxNX0.t5oK0SizbKrKHDaxGKsgI8-EvQyQpn7nIFPBFD1HwzU"
    }
})