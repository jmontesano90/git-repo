const searchURL = 'https://api.github.com/users/';

function watchForm() {
    $('form').submit(event => {
      console.log("submit was pressed");
      event.preventDefault();
      const searchTerm = $('#js-search-term').val();
      getRepo(searchTerm);
    });
}

function getRepo(query) {
    let endLink = "/repos";
    const url = searchURL + query + endLink;
    let testUrl ="https://api.github.com/users/jmontesano90/repos";
    console.log(url);
  
    // const options = {
    //   headers: new Headers({
    //     "X-Api-Key": apiKey})
    // };
    
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function displayResults(responseJson){
  console.log(responseJson);
  $('#results-list').empty();
  
  for (let i = 0; i < responseJson.length; i++){
  $('#results-list').append(
    `<li><h3><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></h3>
    </li>`
  )};

$('#results').removeClass('hidden');
}


$(watchForm);