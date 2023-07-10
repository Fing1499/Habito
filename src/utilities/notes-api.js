import sendRequest from "./send-request";
const BASE_URL = '/api/notes';


export async function addHabit(formData) {
  console.log('sending request')
  console.log(formData)
  return sendRequest(`${BASE_URL}/add-note`, 'POST', formData)
}

export async function getAll() {
  return sendRequest(`${BASE_URL}/get-all`);
}

export async function getNoteById(id) {
  try {
    const response = await fetch(`/api/notes/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch note');
  }
}