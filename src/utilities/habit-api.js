import sendRequest from "./send-request";
const BASE_URL = '/api/habits';


export async function addHabit(formData) {
  console.log('sending request')
  console.log(formData)
  return sendRequest(`${BASE_URL}/add-habit`, 'POST', formData)
}

export async function getAll() {
  return sendRequest(BASE_URL)
}

export async function completeHabit(formData) {
  return sendRequest(`${BASE_URL}/complete-habit`, 'POST', formData)
}