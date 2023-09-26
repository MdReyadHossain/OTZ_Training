import { Box, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000);
    return (
        <>
            <Box>
                {
                    isLoading ? (
                        <Skeleton animation="wave" width={200} height={80} />
                    ) : (
                        <Typography variant="h4" color="initial" sx={{ marginTop: "10px", }}>Dashboard</Typography>
                    )
                }
            </Box>
        </>
    )
}

export default Dashboard;