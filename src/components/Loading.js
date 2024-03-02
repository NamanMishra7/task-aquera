import React from 'react'
import { CircularProgress } from '@mui/material';

function Loading(props) {
  return (
    <div div style={{ width: "100%", height: '100%', display: "flex" }}>
      <CircularProgress size={props.size != null ? props.size : 100} sx={{ margin: "auto" }} />
    </div>
  );
}

export default Loading;