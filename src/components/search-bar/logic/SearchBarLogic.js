import { useState } from 'react';
const axios = require('axios').default;

function SearchBarLogic() {
    const [searchTerm, setSearchTerm] = useState();
    const [searchResults, setSearchResults] = useState();

    const getPersonInfo = async (searchParam) => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/?search=${searchParam}`);
        setSearchResults(response.data);
        console.log(response);
      } catch (error) {
        alert(error);
      }
    };

    return { searchTerm,searchResults, getPersonInfo, setSearchTerm };
  }
  
  export default SearchBarLogic;