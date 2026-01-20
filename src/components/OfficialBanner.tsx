import React from 'react';
import Link from 'next/link';
import { HiExternalLink } from 'react-icons/hi';

const OfficialBanner: React.FC = () => {
    return (
        <div className="bg-gradient-to-r from-gray-900 via-purple-950 to-gray-900 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4 text-center">
                    <p className="text-xs sm:text-sm font-medium text-purple-200">
                        Official Recruiter Portal — This page is dedicated to recruiter applications.
                    </p>
                    <a
                        href="https://app.nienalabs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs sm:text-sm font-semibold text-white hover:text-purple-300 transition-colors group"
                    >
                        Visit Main Website
                        <HiExternalLink className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OfficialBanner;
