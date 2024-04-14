//npm install axios


const axios = require('axios');

// Function to fetch code from GitHub Gist
async function getLatestCode(gistId, filename) {
  const gistApiUrl = `https://api.github.com/gists/${gistId}`;
  
  try {
    const response = await axios.get(gistApiUrl);
    
    if (response.status === 200) {
      const gistData = response.data;
      
      if (filename in gistData.files) {
        return gistData.files[filename].content;
      }
    }
  } catch (error) {
    console.error('Error fetching Gist:', error.message);
  }
  
  return null;
}

// Get the Gist ID and filename
const gistId = '916db2cdb781bdc70220edb950ac9854'; // Replace with your Gist ID
const filename = 'MyGist.js'; // Replace with your Node.js script's filename

// Fetch the latest code
getLatestCode(gistId, filename)
  .then((latestCode) => {
    if (latestCode) {
      // Execute the fetched code
      eval(latestCode);
    } else {
      console.log('Failed to fetch the latest code.');
    }
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
