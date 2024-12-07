import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const DietPlan = () => {
  const theme = useTheme();

  const [dietPlans, setDietPlans] = useState([]);
  const [videoLinks, setVideoLinks] = useState([]);
  const [articleLinks, setArticleLinks] = useState([]);

  useEffect(() => {
    // Mock API data for diet plans
    const dietData = [
      { id: 1, name: 'Keto Diet', description: 'A low-carb, high-fat diet.' },
      { id: 2, name: 'Low Carb Diet', description: 'Reduces carb intake to control insulin levels.' },
      { id: 3, name: 'High Protein Diet', description: 'Increases muscle mass and aids in fat loss.' },
      { id: 4, name: 'Vegan Diet', description: 'Plant-based diet that eliminates all animal products.' },
    ];

    // Mock API data for YouTube video links
    const videoData = [
      { id: 1, title: 'Keto Diet Meal Prep', url: 'https://www.youtube.com/watch?v=lddvPqgnZ_A' },
      { id: 2, title: 'Low Carb Diet Tips', url: 'https://www.youtube.com/watch?v=UXAiapvLYTo' },
      { id: 3, title: 'High Protein Meals', url: 'https://www.youtube.com/watch?v=hqLI73ienf8' },
      { id: 4, title: 'Vegan Diet Ideas', url: 'https://www.youtube.com/watch?v=WdsBV3GA7Nk' },
    ];

    // Mock API data for article links
    const articlesData = [
      { id: 1, title: 'Keto Diet Article', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8153354/' },
      { id: 2, title: 'Low Carb Overview', url: 'https://www.ncbi.nlm.nih.gov/books/NBK537084/' },
      { id: 3, title: 'High Protein Study', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7539343/' },
      { id: 4, title: 'Vegan Diet Guide', url: 'https://www.healthline.com/nutrition/vegan-diet-guide' },
    ];

    setDietPlans(dietData);
    setVideoLinks(videoData);
    setArticleLinks(articlesData);
  }, []);

  return (
    <Box
      sx={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        Choose Your Diet Plan
      </Typography>

      {/* Diet Plans Section */}
      <Grid container spacing={3} justifyContent="center">
        {dietPlans.map((diet) => (
          <Grid item xs={12} sm={6} md={3} key={diet.id}>
            <Card
              sx={{
                borderRadius: '20px',
                boxShadow: '8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.7)',
                padding: '15px',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '12px 12px 20px rgba(0, 0, 0, 0.2), -12px -12px 20px rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {diet.name}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1, color: '#555' }}>
                  {diet.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Video Tutorials Section */}
      <Typography variant="h5" sx={{ marginTop: '40px', fontWeight: 'bold', color: '#333' }}>
        Diet Plan Video Tutorials
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ marginTop: '20px' }}>
        {videoLinks.map((video) => (
          <Grid item xs={12} sm={6} md={4} key={video.id}>
            <Card
              sx={{
                borderRadius: '20px',
                boxShadow: '8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.7)',
                padding: '15px',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '12px 12px 20px rgba(0, 0, 0, 0.2), -12px -12px 20px rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {video.title}
                </Typography>
                <iframe
                  width="100%"
                  height="200"
                  src={video.url.replace('watch?v=', 'embed/')}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: '10px', border: 'none' }}
                ></iframe>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Articles Section */}
      <Typography variant="h5" sx={{ marginTop: '40px', fontWeight: 'bold', color: '#333' }}>
        Diet Plan Articles
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ marginTop: '20px' }}>
        {articleLinks.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card
              sx={{
                borderRadius: '20px',
                boxShadow: '8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.7)',
                padding: '15px',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '12px 12px 20px rgba(0, 0, 0, 0.2), -12px -12px 20px rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {article.title}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    marginTop: 2,
                    borderRadius: '20px',
                    '&:hover': {
                      backgroundColor: '#5A9C7D',
                    },
                  }}
                  onClick={() => window.open(article.url, '_blank')}
                >
                  Read Article
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DietPlan;
