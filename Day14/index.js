// index.js

import axios from "axios";
async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log("API Response:", response.data);
  } catch (error) {
    console.error("Error while fetching data:", error);
  }
}

fetchData();
