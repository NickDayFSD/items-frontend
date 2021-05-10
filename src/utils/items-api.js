import request from 'superagent';

const URL = '/api/items';

export async function getItems() {
  const response = await request.get(URL);
  return response.body;
}

export async function getItem(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}