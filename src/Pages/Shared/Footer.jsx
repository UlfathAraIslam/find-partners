import React from 'react';
import logo from '../../assets/footerLogo.png'
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-blue-700 to-purple-900 px-4 pt-16 md:px-24 lg:px-8 text-white">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
                <img src={logo} alt="" />
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 lg:grid-cols-5 md:grid-cols-3">
            {/* 1 */}
            <div>
              <p className="font-semibold tracking-wide">
                Category
              </p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a
                    href="/"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            {/* 2 */}
            <div>
              <p className="font-semibold tracking-wide">
                Category
              </p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a
                    href="/"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            {/* 3 */}
            <div>
              <p className="font-semibold tracking-wide">
                Business
              </p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a
                    href="/"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            {/* 4 */}
            <div>
              <p className="font-semibold tracking-wide">Apples</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a
                    href="/"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    Educational
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            {/* 5 */}
            <div>
              <p className="font-semibold tracking-wide">Cherry</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a
                    href="/"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
          <p className="text-sm ">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="0 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <BiLogoFacebookCircle size={20}/>
            </a>
            <a
              href="/"
              className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="/"
              className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaLinkedin size={20}/>
            </a>
            <a
              href="/"
              className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
            <FaWhatsapp size={20}/>
            </a>
          </div>
        </div>
      </div>
  
    );
};

export default Footer;