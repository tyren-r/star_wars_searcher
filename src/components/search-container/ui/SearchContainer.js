import SearchBar from '../../search-bar/ui/SearchBar';
import SearchResultsTable from '../../search-results/ui/ResultTable';
import '../styles/search-container-styles.css';

function SearchContainer() {
  return (
    <div className="container">
      <h1>A long time ago - in a galaxy far, far away...</h1>
      <SearchBar/>
      <SearchResultsTable/>
    </div>
  );
}

export default SearchContainer;
