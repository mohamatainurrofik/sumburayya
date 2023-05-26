import { Box, Container, Stack, Typography, Tab, Grid, Button } from "@mui/material";
import { TabList, TabContext, TabPanel } from '@mui/lab';
import { useState } from "react";
import { KeyboardArrowRight } from '@mui/icons-material'
import { hero, about1, about2 } from "../../../assets/compro/media";
import Topbar from "../layout/topbar";
import Title from "../../../components/Title";
import { motion } from 'framer-motion';
const About = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <>
            <Topbar />

            <Box
                width="100%"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    background: 'linear-gradient(to bottom, grey 30%, white 90%)'
                }}
            >
                <Box

                    sx={{
                        mt: -1,
                        ml: -1,

                        backgroundImage: `url(${hero})`,
                        backgroundPositionY: "80%",
                        width: "auto",
                        height: "50vh",
                        backgroundSize: "cover"

                    }}
                >
                    <Stack sx={{ height: "100%", position: "relative" }} justifyContent="center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ ease: "easeOut", duration: 3 }}
                        >
                            <Title
                                color="white"
                                variant={{ xs: "h5", sm: "h5", md: "h4" }}
                                textAlign={{ xs: 'center', sm: 'center', md: 'left' }}
                                sx={{ mt: 5, ml: { xs: 0, md: 8 } }}
                            >
                                Crafting Your <br />
                                Perfect Look <br />
                                <Typography
                                    sx={{ display: 'flex', color: 'white', fontSize: "20px", justifyContent: { xs: 'center', sm: 'center', md: 'left' }, fontFamily: "Arial", fontWeight: "1000" }}
                                >
                                    Sumbu <span style={{ color: "orange", marginLeft: 2, marginRight: 2 }}> Rayya </span> Busana
                                </Typography>
                            </Title>
                        </motion.div>
                    </Stack>

                </Box>
                {/* <Box
                    sx={{ position: 'absolute', ml: -1, width: "auto", height: "60vh", bgcolor: "grey" }}
                >

                </Box > */}
                <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                    style={{ marginBottom: '1rem' }}
                >
                    <Container
                        sx={{ p: 0, mt: { xs: -11, md: 0 } }}
                    >
                        <Box sx={{ position: { xs: "relative", md: "absolute" }, left: { xs: 15, sm: 15, md: 55 }, bottom: -19, width: '95%', height: "70%", bgcolor: 'transparent' }}>
                            <TabContext value={value}>
                                <Box display="flex" sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: "transparent", justifyContent: { xs: 'flex-start', sm: 'flex-end', md: 'flex-end' }, mr: { xs: 0, sm: 0, md: 20 }, mb: -0.2 }}>
                                    <TabList sx={{ borderRadius: '25% 25% 0 0' }} onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab sx={{ bgcolor: "white", color: "black" }} label={<Typography variant="button" sx={{ fontFamily: "Arial", fontWeight: "bold" }}> About</Typography>} value="1" />
                                    </TabList>
                                </Box>
                                <TabPanel sx={{ bgcolor: "white", height: "fit-content" }} value="1">
                                    <Grid
                                        container
                                        spacing={2}
                                    >
                                        <Grid
                                            item
                                            md={5}
                                            xs={12}
                                        >
                                            <Box display="flex" sx={{ mb: 3 }}>
                                                <Button variant="text">
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ fontFamily: "Arial", fontWeight: "600" }}
                                                    >
                                                        Lihat Workshop Kami
                                                    </Typography>
                                                    <KeyboardArrowRight />
                                                </Button>
                                            </Box>
                                            <Grid
                                                container
                                                spacing={2}

                                            >
                                                <Grid
                                                    item
                                                    md={5}
                                                    xs
                                                    sx={{ height: '50vh', backgroundSize: "cover", borderRadius: '25px 25px 25px 25px', mr: 2, ml: 4, backgroundImage: `url(${about1})`, }}

                                                >

                                                </Grid>
                                                <Grid
                                                    item
                                                    md={4}
                                                    xs
                                                    sx={{ height: '45vh', backgroundSize: "cover", backgroundImage: `url(${about2})`, borderRadius: '25px 25px 25px 25px', alignSelf: 'flex-end' }}
                                                >

                                                </Grid>
                                            </Grid>


                                        </Grid>
                                        <Grid
                                            item
                                            md={7}
                                        >
                                            <Typography
                                                align="right"
                                                sx={{ fontFamily: "Arial", fontWeight: 'bold', 'fontSize': "17px", mt: 3 }}
                                            >
                                                PT Sumbu Rayya Busana <br />
                                                is a company that specializes in producing garments on a micro-local scale, with a
                                                focus on transforming textile crafts into solid products. The company is located in
                                                Surabaya, East Java, and is a legal entity in the form of an individual limited liability
                                                company. <br /> <br />
                                                To develop its business, the company has established collaborations with various
                                                private, government, and school partners. It continually strives to provide optimal
                                                service and maintain product quality to grow and develop. It also aims to maintain
                                                good relationships with partners and business associates in the garment industry by
                                                providing excellent service and ensuring product quality.
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                </TabPanel>
                                {/* <TabPanel sx={{ bgcolor: "white", height: "50vh" }} value="2">Item Two</TabPanel>
                        <TabPanel sx={{ bgcolor: "white", height: "50vh" }} value="3">Item Three</TabPanel> */}
                            </TabContext>
                        </Box >

                    </Container>
                </motion.div>


            </Box >
        </>

    )
}


export default About;
