import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './authRoutes.js';
import eventRoutes from './eventRoutes.js';
import matchRoutes from './matchRoutes.js';
import uploadRoutes from './uploadRoutes.js';
import chatRoutes from './chatRoutes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendPath = path.join(__dirname, '..', '..', 'app', 'frontend', 'dist');
dotenv.config();

const app = express();
const PORT = process.env.port || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(frontendPath));

// API routes
app.use('/api', authRoutes);
app.use('/api', eventRoutes);
app.use('/api', matchRoutes);
app.use('/api', uploadRoutes);
app.use('/api', chatRoutes);

// Serve frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});