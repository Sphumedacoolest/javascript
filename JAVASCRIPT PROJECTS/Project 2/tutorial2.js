// Simulate fetching data from an API
function fetchDataFromAPI(endpoint) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched from " + endpoint);
      }, Math.random() * 3000); // Simulate random delay for fetching data
    });
  }
  
  // Process the fetched data asynchronously
  async function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Processed data: " + data);
      }, Math.random() * 2000); // Simulate random processing time
    });
  }
  
  // Display the processed data
  function displayData(processedData) {
    console.log("Displaying data:", processedData);
  }
  
  // Main function to orchestrate the process
  async function main() {
    try {
      const endpoints = ["https://api.example.com/data1", "https://api.example.com/data2", "https://api.example.com/data3"];
      
      // Fetch data from multiple endpoints asynchronously
      const fetchedData = await Promise.all(endpoints.map(endpoint => fetchDataFromAPI(endpoint)));
  
      console.log("Data fetched:", fetchedData);
  
      // Process fetched data asynchronously
      const processedData = await Promise.all(fetchedData.map(data => processData(data)));
  
      console.log("Data processed:", processedData);
  
      // Display processed data
      processedData.forEach(displayData);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Run the main function
  main();
  