import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';

// Styles
import "./styles/css/index.css";
import "./styles/scss/index.scss";
import "./styles/sass/index.sass";

// Create app root
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
