import sendRequest from "./send-request";
const BASE_URL = '/api/habits';


export async function addHabit(formData) {
  console.log('sending request')
  console.log(formData)
  return sendRequest(`${BASE_URL}/add-habit`, 'POST', formData)
}

export async function getAll() {
  return sendRequest(BASE_URL, 'POST')
}

export async function completeHabit(formData) {
  return sendRequest(`${BASE_URL}/complete-habit`, 'POST', formData)
}

export async function getCheckedValues() {
  return sendRequest(`${BASE_URL}/check-value`)
}

export async function getChartData() {
  return sendRequest(`${BASE_URL}/get-chart-data`)
}