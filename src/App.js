import React, { useEffect, useState } from 'react';
import { Box, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import CovidTable from './components/CovidTable';
import DrawerButton from './components/Drawer/DrawerButton';
import NavBar from './components/NavBar/NavBar';
import OpenTargetsTitle from './components/NavBar/OpenTargetsTitle';
import UpdatingModal from './components/UpdatingModal';

import { getNewestDatasetRevision, updateClient } from './db/update';
import ContentDrawer from './components/Drawer/ContentDrawer';
import FilterDrawer from './components/Drawer/FilterDrawer';
import { createIndexes } from './db/indexes';

function App() {
  const [content, setContent] = useState(null);
  const [contentOpen, setContentOpen] = useState(false);
  const [filter, setFilter] = useState([
    { FILTER_network: { $eq: true } },
    // { biotype: { $in: ['protein_coding'] } },
  ]);
  const [filterOpen, setFilterOpen] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [indexing, setIndexing] = useState(false);
  const [ready, setReady] = useState(false);

  const handleCloseIndexingInfo = () => {
    setIndexing(false);
  };

  const handleSetContent = (content) => {
    setContent(content);
    setContentOpen(true);
  };

  const handleSetFilter = (filter) => {
    setFilter(filter);
  };

  const handleToggleContentDrawer = () => {
    setContentOpen(!contentOpen);
  };

  const handleToggleFilterDrawer = () => {
    setFilterOpen(!filterOpen);
  };

  useEffect(() => {
    async function checkRevisionAndUpdate() {
      const currentDatasetRevision = await getNewestDatasetRevision();

      if (currentDatasetRevision) {
        setUpdating(true);
        await updateClient(currentDatasetRevision);
        setUpdating(false);

        setReady(true);

        setIndexing(true);
        await createIndexes();
        setIndexing(false);
      }

      setReady(true);
    }

    checkRevisionAndUpdate();
  }, []);

  return (
    <div className="App">
      <NavBar name="Platform" openLeft={filterOpen} openRight={contentOpen}>
        <DrawerButton
          onClick={handleToggleFilterDrawer}
          open={!filterOpen}
          position="left"
        />
        <OpenTargetsTitle subtitle="COVID-19" />
        <DrawerButton
          onClick={handleToggleContentDrawer}
          open={!contentOpen}
          position="right"
        />
      </NavBar>

      <Box display="flex" alignItems="flex-start">
        <FilterDrawer
          filter={filter}
          onSetFilter={handleSetFilter}
          onToggleDrawer={handleToggleFilterDrawer}
          open={filterOpen}
        />
        {ready ? (
          <CovidTable
            filter={filter}
            onClickCellContent={handleSetContent}
            sideBarsOpen={[filterOpen, contentOpen]}
          />
        ) : (
          <Box display="flex" width="100%" />
        )}
        <ContentDrawer
          onToggleDrawer={handleToggleContentDrawer}
          open={contentOpen}
        >
          {content}
        </ContentDrawer>
      </Box>
      <UpdatingModal open={updating} />
      <Snackbar open={indexing} onClose={handleCloseIndexingInfo}>
        <Alert severity="info" elevation={6} onClose={handleCloseIndexingInfo}>
          The first filter might be slow while the indexes are generated. This
          will only happen once. Please be patient.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
