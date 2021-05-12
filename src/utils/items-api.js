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

export async function addItem(item) {
  const response = await (await request.post(URL)).send(item);
  return response.body;
}

export async function deleteItem(id) {
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}

export async function updateItem(item) {
  const response = await (await request.put(`${URL}/${item.id}`)).send(item);
  return response.body;
}