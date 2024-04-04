import React, {useEffect} from "react";
import {useFetchTagsQuery} from "../hooks";
import {List, ListItem, Paper} from '@mui/material';
import './displayTags.css'

type DisplayTagsProps = {
  sortType: string,
  sortOrder: string,
  pageSize: string
}

type TagProps = {
  id: string,
  count: number,
  name: string
}

export const DisplayTags = ({sortType, sortOrder, pageSize}: DisplayTagsProps) => {
  const {data: tags, isLoading, isFetching, error, refetch} = useFetchTagsQuery({sortType, sortOrder, pageSize});

  useEffect(() => {
    refetch()
  }, [sortType, pageSize, sortOrder]);


  if (isLoading || isFetching) return <div>Loading...</div>;

  if (error) return <div>An error occurred: {error.message}</div>;


  return (
      <List className="List">
        {tags.items.map((tag: TagProps, index: number) => (
          <ListItem className="ListItem" key={index}>
            <Paper className="Paper">
                {tag.name} - No. of related posts: {tag.count}
            </Paper>
          </ListItem>
        ))}
      </List>
  )
}

export default DisplayTags