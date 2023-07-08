import sendRequest from "./send-request";
const BASE_URL = '/api/habits';


export async function addHabit(formData) {
  console.log('sending request')
  console.log(formData)
  return sendRequest(`${BASE_URL}/add-habit`, 'POST', formData)
}