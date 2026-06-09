import axios from 'axios'

const API_URL = "https://ditkygyjwppiycfwxypl.supabase.co/rest/v1/note"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpdGt5Z3lqd3BwaXljZnd4eXBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NDUwMDUsImV4cCI6MjA5NjUyMTAwNX0.1jl6rCaLu2A__Ll0qCJwHb3CYeNzXOMn4q9Txc4tJxY"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}