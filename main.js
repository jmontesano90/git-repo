const apiKey = "d566301ea6614a83a3a2b3d9475a9df2";
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
  
    console.log(url);
  
    const options = {
      headers: new Headers({
        "X-Api-Key": apiKey})
    };
}
