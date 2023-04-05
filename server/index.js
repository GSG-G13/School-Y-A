const app = require('./app');
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is live on http://localhost:${PORT}`);
});