import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-16 bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex mb-4 text-sm text-gray-500" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2">
                            <li><Link href="/" className="hover:text-purple-600 transition-colors">Home</Link></li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Privacy Policy</span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                        Privacy <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Policy</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="flex-grow py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 prose prose-gray prose-purple max-w-none">
                        <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
                            <div>
                                <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-1">Legal</p>
                                <p className="text-sm text-gray-500">Last updated: January 14, 2026</p>
                            </div>
                        </div>

                        <div className="space-y-12 text-gray-700 leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                                <p>
                                    This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                                </p>
                                <p className="mt-4">
                                    We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Interpretation and Definitions</h2>
                                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Interpretation</h3>
                                <p>
                                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Definitions</h3>
                                <ul className="list-disc pl-6 space-y-3">
                                    <li><strong>Account:</strong> A unique account created for You to access our Service.</li>
                                    <li><strong>Company:</strong> Refers to Niena Labs.</li>
                                    <li><strong>Cookies:</strong> Small files placed on Your device by a website.</li>
                                    <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable individual.</li>
                                    <li><strong>Service:</strong> Refers to the Application or the Website or both.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Collecting and Using Your Personal Data</h2>
                                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Types of Data Collected</h3>
                                <div className="space-y-4">
                                    <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Email address</li>
                                        <li>First name and last name</li>
                                        <li>Usage Data (IP address, browser type, pages visited)</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Your Personal Data</h2>
                                <p>The Company may use Personal Data for the following purposes:</p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li>To provide and maintain our Service.</li>
                                    <li>To manage Your Account.</li>
                                    <li>To contact You regarding updates or informative communications.</li>
                                    <li>To provide You with news and special offers.</li>
                                    <li>To manage Your requests.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Security of Your Personal Data</h2>
                                <p>
                                    The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                                <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                                <ul className="list-disc pl-6 mt-4">
                                    <li>By email: hello@nienalabs.com</li>
                                </ul>
                            </section>
                        </div>

                        <div className="mt-16 pt-8 border-t border-gray-100 italic text-gray-500 text-sm text-center">
                            Copyright © 2026 Niena Labs. All rights reserved.
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Section */}
            <section className="pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center space-x-6">
                        <Link href="https://x.com/LabsNiena86233" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600 transition-colors">
                            <FaXTwitter className="w-6 h-6" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/niena-labs/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                            <FaLinkedin className="w-6 h-6" />
                        </Link>
                        <Link href="https://github.com/Nienalabs-community" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                            <FaGithub className="w-6 h-6" />
                        </Link>
                        <Link href="https://www.instagram.com/nienalabs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
                            <FaInstagram className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
