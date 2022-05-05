/**
 * Receives a Json object to return a random entry
 * @param {*} json
 * @returns
 */
const pickRandomJSONEntry = async (json) => {
  return await new Promise((resolve) => {
    const keys = Object.keys(json);

    resolve(keys[Math.floor(keys.length * Math.random())]);
  });
};

export default pickRandomJSONEntry;
