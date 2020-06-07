import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core';
const SizeEle = ({size, setSize}) => {
  let [backgroundColor, setColor] = useState('#ececec');
  return (
    <Grid container>
      <Grid
        xs={12}
        item
        onClick={() => {
          setColor(preVal => {
            if(preVal === '#ececec'){
              preVal = '#1b1a20';
            }else{
              preVal = '#ececec';
            }
            return preVal;
          })
          setSize(prevSizes => {
            if(prevSizes[size]===1){
              delete prevSizes[size];
              return {...prevSizes};
            }
            return {...prevSizes, [size]: 1}
          })
        }}>
        <Grid
          className="size-ele"
          style={{backgroundColor: backgroundColor}}>
          <Typography variant="caption">
            {size}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
 
export default SizeEle;