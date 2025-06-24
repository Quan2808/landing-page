import React from "react";
import useIntersectionObserver from "@hooks/useIntersectionObserver";

const FeatureList = ({ features }) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`space-y-8 transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: "300ms" }}
    >
      {features.map((feature, index) => (
        <div
          key={feature.name}
          className={`group relative flex gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-indigo-200 hover:bg-white/80 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
          style={{ transitionDelay: `${400 + index * 100}ms` }}
        >
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
              {feature.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {renderDescriptionWithGradient(feature.description)}
            </p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300"></div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
