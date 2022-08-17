import { useState } from 'react';

function SearchResultsLogic() {
    const [searchResults, setSearchResults] = useState();

    return { searchResults, setSearchResults };
  }
  
  export default SearchResultsLogic;