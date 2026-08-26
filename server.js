const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

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

// Start server locally (Vercel handles this automatically in production)
app.listen(PORT, () => {
    console.log(`Vusani Ikhaya Server running on http://localhost:${PORT}`);
});
