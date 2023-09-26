import React from 'react';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const TableLoaderSkeleton = () => {

    return (
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}} sx={{width: '100%'}}>
            {[1, 2, 3, 4]?.map(collection => (
                <Grid key={collection} item xs={12}>
                    <Box sx={{pb: 1}}>
                        <Skeleton variant="rectangular" height={70}/>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
}

export default TableLoaderSkeleton;
