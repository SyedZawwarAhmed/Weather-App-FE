import { getCities } from "../Services/getCities";

export async function citiesResponse() {
  return await getCities();
}
