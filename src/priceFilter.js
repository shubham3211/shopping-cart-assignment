import React from 'react'
import { Grid } from '@material-ui/core';
import Select from '@material-ui/core/Select';

const PriceFilter = ({filter, setFilter}) => {
  return (
    <Grid container>
      <Grid item xs={12} style={{textAlign: "right"}}>
        <Select native name="price-filter" value={filter} onChange={(e) => setFilter(e.target.value)} id="price-filter">
          <option value="">Select</option>
          <option value="increase">Lowest to Highest</option>
          <option value="decrease">Highest to Lowest</option>
        </Select>
      </Grid>
    </Grid>
  );
}
 
export default React.memo(PriceFilter);