import { useEffect, useState } from 'react';

import data from './data.json';
import CardBoard from './components/CardBoard/CardBoard';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';

function App() {
  const [jobLists, setJobLists] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobLists(data);
  }, []);

  const filterHandler = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }
    const tags = [role, level];

    if (tools) tags.push(...tools);
    if (languages) tags.push(...languages);

    return tags.some((tag) => filters.includes(tag));
  };

  const tagClickHandler = (tag) => {
    if (!filters.includes(tag)) {
      setFilters((prevValue) => [...prevValue, tag]);
    }
  };

  const removeTagHandler = (deletedTag) => {
    setFilters(filters.filter((f) => f !== deletedTag));
  };

  const clearTagHandler = () => {
    setFilters([]);
  };

  const filteredJobs = jobLists.filter(filterHandler);

  return (
    <div className='App'>
      <Header />

      {filters.length > 0 && (
        <Filter
          filters={filters}
          onRemoveFilter={removeTagHandler}
          onClearFilter={clearTagHandler}
        />
      )}

      {jobLists.length === 0 ? (
        <p>loading...</p>
      ) : (
        <CardBoard jobs={filteredJobs} onFilter={tagClickHandler} />
      )}
    </div>
  );
}

export default App;
