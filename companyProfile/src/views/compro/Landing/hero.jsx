import { Box, Button, Typography, Stack, Container, Slide } from "@mui/material";
import { hero } from "../../../assets/compro/media";
import Title from "../../../components/Title";
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <Box sx={{ width: "100%" }}>
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: -10,
                    backgroundImage: `url(${hero})`,
                    width: "auto",
                    height: "100vh",
                    backgroundSize: "cover"
                }}
            >


            </Box>
            <Container
                sx={{
                    height: "80vh",

                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 3 }}
                >
                    <Stack sx={{ height: "100%", position: "relative" }} justifyContent="center">
                        <Title
                            color="white"
                            variant={{ xs: "h5", sm: "h5", md: "h4" }}
                            textAlign={{ xs: 'center', sm: 'center', md: 'left' }}
                            sx={{ mt: 20 }}
                        >
                            It's great to see you! <br />
                            Thanks for visiting <br />
                            Sumbu Rayya Busana
                        </Title>
                        <Title
                            color="white"
                            variant={{ xs: "h5", sm: "h5", md: "h4" }}
                            textAlign={{ xs: 'center', sm: 'center', md: 'left' }}
                            sx={{ mb: 5 }}
                        >
                            <br />
                            today :)
                        </Title>

                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            alignItems="center"
                            spacing={4}
                        >
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                onHoverStart={e => { }}
                                onHoverEnd={e => { }}
                            >
                                <Button variant="contained" size="large" color="warning" sx={{ borderRadius: '20px' }}>
                                    <Typography variant="h6" fontWeight="bold" color="white">
                                        Discover More
                                    </Typography>
                                </Button>
                            </motion.div>


                        </Stack>
                    </Stack>
                </motion.div>

            </Container>

        </Box>




    )
}

export default Hero;