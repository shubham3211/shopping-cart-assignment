import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import SizeEle from './SizeEle';
import  './Sizes.css';

const Sizes = ({setSize}) => {
  let sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
  console.log('Sizes rendering');
  return (
    <Box pl={3}>
      <Grid container>
        <Grid item xs={12}>
          <Box mb={1}>
            <Typography className="size-text" variant="subtitle1">
              <b>
                Sizes:
              </b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="sizes-container">
              {sizes.map((size, index) => (
                <Grid item>
                  <SizeEle
                    size={size}
                    setSize={setSize}
                    key={index}/>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
 
export default React.memo(Sizes);