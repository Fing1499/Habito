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