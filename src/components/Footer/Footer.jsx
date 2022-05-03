import React from "react";
import "./footer.css";

export function Footer() {
  return (
    <footer className='footer flex-column align-items-center'>
      <p className='text-sm'>
        Made with{" "}
        <span className='footer-credit'>
          <i className='fas fa-heart'></i>{" "}
        </span>
        by <span className='footer-credit'>Ankit Kumain</span>
      </p>
      <ul className='flex-row footer-links'>
        <li className='list-unstyled'>
          <a
            className='nav-link md-ht-1 footer-menu-link'
            href='https://github.com/Maianki'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-github-square'></i>
          </a>
        </li>
        <li className='list-unstyled'>
          <a
            className='nav-link md-ht-1 footer-menu-link'
            href='https://twitter.com/Ankit_k10'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-twitter'></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
