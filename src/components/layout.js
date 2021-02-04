import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import './printLayout.css';
import 'prismjs/themes/prism-coy.css';

export default ({ children, indexLink }) => (
  <div className="flex flex-col min-h-screen bg-gray-200"
  >
    <Helmet>
      <meta charSet="utf-8" />
      <title>Prog Content</title>
      <link rel="canonical" href="https://www.progcontent.com" />
    </Helmet>
    <header className="mb-2 p-2 bg-gray-400">
      <Link to="/">Prog Content</Link>
      &nbsp;&nbsp;{indexLink}
    </header>
    <div className="flex-1 px-2">{children}</div>
    <footer className="mt-2 pr-2 text-right">
      &copy; {new Date().getFullYear()} &nbsp;
      <a href="https://www.behrends.io">Erik Behrends</a>
      &nbsp;&nbsp;&nbsp;
      <Link to="/impressum">Impressum</Link>
    </footer>
  </div>
);
