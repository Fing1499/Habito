import sendRequest from "./send-request";
const BASE_URL = '/api/mood';


export async function addMood(formData) {
  console.log('sending request')
  console.log(formData)
  return sendRequest(`${BASE_URL}/add-mood`, 'POST', formData)
}