const URL =
  'https://my-json-server.typicode.com/letisendev/fakeJSONServer/posts';
const locationsURL=
  'https://my-json-server.typicode.com/letisendev/fakeJSONServer/locations';
export async function apiGetAll() {
  try {
    const resp = await fetch(URL);
    return resp.json();
  } catch (err) {
    console.log(err);
  }
}

export async function apiGetLocations() {
  try {
    const resp2 = await fetch(locationsURL);
    return resp2.json();
  } catch (err) {
    console.log(err);
  }
}
