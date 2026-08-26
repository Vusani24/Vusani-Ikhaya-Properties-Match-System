const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Simple API endpoint to prove the backend is working
app.get('/api/health', (req, res) => {
    res.json({ status: 'success', message: 'Vusani Ikhaya Backend is running perfectly!' });
});

// Serve the main HTML file for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// For local development only
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Vusani Ikhaya Server running on http://localhost:${PORT}`);
    });
}

// Export the Express API so Vercel can run it as a Serverless Function
module.exports = app;
