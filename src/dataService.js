const URL =
  'http://localhost:3000/posts';
const locationsURL=
  'http://localhost:3000/locations';
export async function apiGetAll() {
  try {
    const resp = await fetch(URL);
    return resp.json();
  } catch (err) {
  }
}

export async function apiGetLocations() {
  try {
    const resp2 = await fetch(locationsURL);
    return resp2.json();
  } catch (err) {
  }
}
