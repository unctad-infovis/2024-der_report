import React from 'react';

import { createRoot } from 'react-dom/client';

import Footer from './jsx/Footer.jsx';

const containerFooter = document.getElementById('app-root-2024-der_report_footer');
if (containerFooter) {
  const root = createRoot(containerFooter);
  root.render(<Footer />);
}
