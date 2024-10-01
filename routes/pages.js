const express = require('express');
const router = express.Router();

// Route for the registration page
router.get('/login', (req, res) => {
    res.render('pages/registration', { 
        title: 'Acorn SH - Account', 
        description: 'Create your account for Acorn SH services'
    });
});

// Route for the projects page
router.get('/hosting', (req, res) => {
    res.render('pages/hosting', { 
        title: 'Acorn SH - My Projects', 
        description: 'View and manage your projects on Acorn SH'
    });
});

// Route for the networks project page
router.get('/networks', (req, res) => {
    res.render('pages/networks', { 
        title: 'Acorn SH - networks', 
        description: 'Start a new project with Acorn SH'
    });
});

// Route for the storage project page
router.get('/storage', (req, res) => {
    res.render('pages/storage', { 
        title: 'Acorn SH - Storage', 
        description: 'Upload files to Acorn SH storage'
    });
});

// Route for the storage project page
router.get('/download-page', (req, res) => {
    res.render('pages/download-page', { 
        title: 'Acorn SH - Download client', 
        description: 'Download Acorn SH client'
    });
});

// Route for the storage project page
router.get('/whitepaper', (req, res) => {
    res.render('pages/whitepaper', { 
        title: 'Acorn SH - Whitepaper', 
        description: 'Learn more from our whitepaper'
    });
});

// Route for the storage project page
router.get('/tutorials', (req, res) => {
    res.render('pages/tutorials', { 
        title: 'Acorn SH - tutorials', 
        description: 'Learn more from our experts'
    });
});

// Route for the storage project page
router.get('/careers', (req, res) => {
    res.render('pages/careers', { 
        title: 'Acorn SH - careers', 
        description: 'Join us to build the decentralized and distributed internet'
    });
});

// Route for the storage project page
router.get('/quick-start', (req, res) => {
    res.render('pages/quick-start', { 
        title: 'Acorn SH - quick start', 
        description: 'Install in 3 simple steps'
    });
});

module.exports = router;