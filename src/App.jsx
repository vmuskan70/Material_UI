import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  duration,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { motion, scale } from "motion/react";

function App() {
  return (
    <>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Gyandeep
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Courses</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
        {/* hero section */}
      </AppBar>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
          py: 10,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            fontWeight="bold"
            component={motion.h1}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Learn React with MUI
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            We are going to learn about Material UI Design
          </Typography>
          <Button
            component={motion.button}
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{duration:0.5,delay:0.6}}
            whileHover={{scale:1.1}}
            whileTap={{scale:0.95}}
            variant="contained"
            color="secondary"
            size="large"
          >
            Get Started
          </Button>
        </Container>
      </Box>
      {/* cards section*/}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={5}>
          Why Choose Us ?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  Easy Learning
                  <Typography sx={{ mt: 2 }}>
                    Get Started with Beginner Level
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  Easy Learning
                  <Typography sx={{ mt: 2 }}>
                    Get Started with Beginner Level
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  Easy Learning
                  <Typography sx={{ mt: 2 }}>
                    Get Started with Beginner Level
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          backgroundColor: "#111",
          color: "white",
          py: 3,
          textAlign: "center",
        }}
      >
        <Typography>&copy; 2026 Gyandeep Session . All the Best</Typography>
      </Box>
    </>
  );
}

export default App;
