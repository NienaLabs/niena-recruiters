import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
                    {/* Brand */}
                    <div className="col-span-1 sm:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4 sm:mb-6">
                            <Image
                                src="/niena.png"
                                alt="Niena Recruits Logo"
                                width={40}
                                height={40}
                                className="rounded-xl"
                            />
                            <span className="text-lg sm:text-xl font-bold text-white">
                                Niena<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Recruits</span>
                            </span>
                        </Link>
                        <p className="text-sm sm:text-base text-gray-400 max-w-md leading-relaxed mb-4 sm:mb-6">
                            A modern recruitment platform focused on quality connections between companies and verified candidates. Built to make hiring more transparent and efficient.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://x.com/LabsNiena86233" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all text-white">
                                <FaXTwitter className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/company/niena-labs/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all text-white">
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/Nienalabs-community" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all text-white">
                                <FaGithub className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/nienalabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all text-white">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-bold text-white text-base sm:text-lg mb-4 sm:mb-6">Product</h4>
                        <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                            <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="#comparison" className="hover:text-white transition-colors">Comparison</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Beta Access</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-white text-base sm:text-lg mb-4 sm:mb-6">Company</h4>
                        <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                            <li><Link href="https://nienalabs.com/about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="https://nienalabs.com/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
                        © {new Date().getFullYear()} Niena Labs. All rights reserved.
                    </p>
                    <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
