const URL =
  'https://my-json-server.typicode.com/letisendev/fakeJSONServer/posts';

export async function apiGetAll() {
  try {
    const resp = await fetch(URL);
    return resp.json();
  } catch (err) {
    console.log(err);
  }
}
