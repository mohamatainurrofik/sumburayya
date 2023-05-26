import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../../components/Header";
import Layout from "../layout/layout";

const Dashboard = () => {
    return (
        <Layout>
            <Box m="20px">
                {/* HEADER */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
                </Box>
            </Box>
        </Layout>
    )
}

export default Dashboard;