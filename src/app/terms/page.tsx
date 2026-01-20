import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function TermsPage() {
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
                                <span>Terms of Service</span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                        Terms of <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Service</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Please read these terms carefully before using our services. Your use of the platform constitutes agreement to these terms.
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
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                                <p>
                                    This website is operated by Niena Labs. Throughout the site, the terms “we”, “us” and “our” refer to Niena Labs. We offer this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
                                </p>
                                <p className="mt-4">
                                    By visiting our site and/or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">General Conditions</h2>
                                <p>
                                    We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">User Content</h2>
                                <p>
                                    If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Section 3 - Accuracy of Information</h2>
                                <p>
                                    We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Section 4 - Modifications to the Service</h2>
                                <p>
                                    Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Uses</h2>
                                <p>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content:</p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li>Any unlawful purpose;</li>
                                    <li>To solicit others to perform or participate in any unlawful acts;</li>
                                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others;</li>
                                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate;</li>
                                    <li>To submit false or misleading information;</li>
                                    <li>To collect or track the personal information of others.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Section 6 - Governing Law</h2>
                                <p>
                                    These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Ghana under the 1992 constitution.
                                </p>
                            </section>
                        </div>

                        <div className="mt-16 pt-8 border-t border-gray-100 italic text-gray-500 text-sm">
                            Questions about the Terms of Service should be sent to us at <a href="mailto:support@nienalabs.com" className="text-purple-600 hover:text-purple-700">support@nienalabs.com</a>.
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
