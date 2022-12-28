import React from 'react';
import Links from './Links';

function About() {
  return (
    <div>
    <Links />
     about 
     <a
        href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        download
      >
        Click to download
      </a>
    </div>
  )
}

export default About
