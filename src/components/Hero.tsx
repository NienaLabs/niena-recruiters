import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <section className="relative pt-36 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
            {/* Background gradients - Purple to Blue */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 animate-fade-in-up">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8">
                            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                            <span className="text-xs sm:text-sm font-medium text-purple-900">Now in Beta</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                            Great teams don't happen by chance,
                            <br />
                            <span className="gradient-text">Find yours faster</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                            Join our platform to access quality job seekers actively looking for opportunities. Apply to become a recruiter on <Link className="gradient-text" href="https://app.nienalabs.com">Niena</Link> and start connecting with candidates today.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                            <Link
                                href="https://app.nienalabs.com/recruiters/apply"
                                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center"
                            >
                                Apply as Recruiter →
                            </Link>
                            <Link
                                href="#features"
                                className="w-full sm:w-auto bg-white border-2 border-gray-200 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:border-gray-300 transition-all hover:shadow-lg text-center"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:block relative w-full max-w-md ml-auto">
                        <div className="animate-float relative px-6">
                            {/* Four-point Star 1 */}
                            <div className="absolute top-0 left-2 z-10 animate-rotate-pause">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" className="fill-purple-500" />
                                </svg>
                            </div>

                            <Image
                                src="/niena3d.png"
                                alt="Niena 3D App Interface"
                                width={1000}
                                height={667}
                                priority
                                unoptimized
                                className="w-full h-auto drop-shadow-2xl rounded-2xl relative z-0"
                            />

                            {/* Four-point Star 2 */}
                            <div className="absolute bottom-2 right-4 z-10 animate-rotate-pause" style={{ animationDelay: '1s' }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" className="fill-blue-500" />
                                </svg>
                            </div>

                            {/* Additional Icon 1: Plus/Cross */}
                            <div className="absolute top-1/2 -right-2 z-10 animate-rotate-pause" style={{ animationDelay: '2s' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4V20M4 12H20" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </div>

                            {/* Additional Icon 2: Ring/Circle */}
                            <div className="absolute bottom-4 left-6 z-10 animate-rotate-pause" style={{ animationDelay: '0.5s' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="3" />
                                </svg>
                            </div>

                            {/* Decorative glow below image */}
                            <div className="absolute -inset-4 bg-purple-400/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
