import React from "react";

export default function FeatureCard({ emoji, title, description }) {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-dradient-to-br from-[#1E4667] via-[#1C4D72] t0-[#1E4667] border border-white/10 hover:-translate-y-1.5 transition-transform duration-300 ease-in-out shadow-lg shadow-[#1C4D72] p-6 backdrop-blur-sm">
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full backdrop-blur-sm">
                    <span className="text-6xl">{emoji}</span>
                </div>
                <h3 className="mb-4 text-xl text-white">{title}</h3>
                <p className="text-white font-light leading-relaxed">
                    {description}
                </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"/>
        </div>
    );
}
