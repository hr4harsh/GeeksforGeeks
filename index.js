$.ajax({
    url: 'https://api.example.com/data',
    method: 'GET',
    success: function(response) {
      const parsedData = JSON.parse(response);
      // Process the parsed data here
    },
    error: function(xhr, status, error) {
      // Handle any errors
    }
  });

  


  axios.get('URL')
  .then(response => {
    const responseData = response.data; // Access the response data
    // Process the response data here
  })
  .catch(error => {
    // Handle any errors
  });
