export async function apiGetAll() {
  try {
    const resp = require('./positions.json');
    return resp.positions;
  } catch (err) {
  }
}

export async function apiGetLocations() {
  try {
    const resp = require('./positions.json');
    return resp.locations;
  } catch (err) {
  }
}
