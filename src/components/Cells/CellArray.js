import React from 'react';
import { List, ListItem, Link } from '@material-ui/core';

import NaLabel from './NaLabel';
import CellLink from './CellLink';
import ListTitle from '../Drawer/ListTitle';

export const CellArray = ({
  array,
  link,
  onClickCellContent,
  contentTitle = '',
  contentDescription = '',
}) => {
  if (!array || !array.length) return <NaLabel />;

  if (array.length <= 1)
    return link ? <CellLink {...link} accession={array[0]} /> : array[0];

  const contents = (
    <>
      <ListTitle
        title={contentTitle}
        description={contentDescription}
        subtitle={`${array.length} entries`}
      />
      <List>
        {array.map((accession, i) => (
          <ListItem key={i}>
            {link ? <CellLink {...link} accession={accession} /> : accession}
          </ListItem>
        ))}
      </List>
    </>
  );

  const handleClickArrayLink = () => {
    onClickCellContent(contents);
  };

  return (
    <Link href="#" onClick={handleClickArrayLink}>
      {array.length} entries
    </Link>
  );
};

export default CellArray;
