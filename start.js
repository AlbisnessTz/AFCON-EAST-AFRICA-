import app from './server.js';

const PORT = Number(process.env.PORT || 8787);
app.listen(PORT, '0.0.0.0', () => {
  console.log(`SportsLab Africa API listening on port ${PORT}`);
});
