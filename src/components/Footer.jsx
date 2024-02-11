import React, { useState } from "react";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";

const Footer = () => {
  return (
    // <footer classNameName="absolute inset-x-0 bottom-0 h-16">
    //   {<div>1</div>/* Footer content goes here */}
    // </footer>
  
    <footer className="inset-x-0 bottom-0 h-50 bg-white dark:bg-blue-600">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-6 gap-10 sm:gap-10 sm:grid-cols-6">
              <div>
                  <h2 className="mb-6 text-base font-bold text-gray-900 dark:text-white">About Us</h2>
                  <ul className="text-gray-500 dark:text-white font-normal">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Who we are</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Our Team</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Values</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-base font-bold text-gray-900 dark:text-white">Projects</h2>
                  <ul className="text-gray-500 dark:text-white font-normal">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Ongoing</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Past</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-base font-bold text-gray-900 dark:text-white">For Students</h2>
                  <ul className="text-gray-500 dark:text-white font-normal">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Why join us?</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Our Values</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Our Team</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-base font-bold text-gray-900 dark:text-white">For Non-Profits</h2>
                  <ul className="text-gray-500 dark:text-white font-normal">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Why choose us?</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Our criteria</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Our Process</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Our Process</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Proposal</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-base font-bold text-gray-900 dark:text-white">Sponsor Us</h2>
                  <ul className="text-gray-500 dark:text-white font-normal">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Why choose us?</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Sponsorship tiers</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">In-kind sponsorships</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Contact</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-base font-bold text-gray-900 dark:text-white">Connect</h2>
                  <ul className="text-gray-500 dark:text-white font-normal">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Email</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">LinkedIn</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Medium</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Github</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Discord</a>
                      </li>
                    </ul>
              </div>
          </div>
      </div>
      
      
      
      
      
      <hr className="my-6 border-gray-200 sm:mx-auto dark:white lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-base text-gray-500 sm:text-center dark:text-white">
          </span>
      </div>
    </div>
</footer>
  );
};

export default Footer;