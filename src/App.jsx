import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

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
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
          py: 10,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Learn React with MUI
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            We are going to learn about Material UI Design
          </Typography>
          <Button variant="contained" color="secondary" size="large">
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
