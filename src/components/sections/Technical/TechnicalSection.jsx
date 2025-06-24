import TechnicalSlider from "./TechnicalSlider";
import useIntersectionObserver from "@hooks/useIntersectionObserver.js";
import { CubeIcon, SparklesIcon, FilmIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Modeling and Texturing",
    description:
      "Create detailed and realistic 3D models and textures using Character Creator 4, Maya 3D, and Cinema 4D for high-quality visual assets.",
    icon: CubeIcon,
  },
  {
    name: "Rendering",
    description:
      "Achieve stunning visual outputs with Arnold, delivering photorealistic renders for professional-grade projects.",
    icon: SparklesIcon,
  },
  {
    name: "Animation and Post-Production",
    description:
      "Craft dynamic animations with iClone 8 and After Effects, and finalize projects with seamless editing in Premiere Pro.",
    icon: FilmIcon,
  },
];

const renderDescriptionWithGradient = (description) => {
  const termsToStyle = [
    "Maya 3D",
    "Cinema 4D",
    "Character Creator 4",
    "Arnold",
    "iClone 8",
    "After Effects",
    "Premiere Pro",
  ];
  let formattedDescription = description;

  termsToStyle.forEach((term) => {
    const regex = new RegExp(`\\b${term}\\b`, "g");
    formattedDescription = formattedDescription.replace(
      regex,
      `<span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">${term}</span>`
    );
  });

  return <span dangerouslySetInnerHTML={{ __html: formattedDescription }} />;
};

export default function TechnicalSection() {
  const [sectionRef, isVisible] = useIntersectionObserver(0.3);

  return (
    <div ref={sectionRef} className="relative overflow-hidden py-24 sm:py-32 ">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-indigo-400/5 to-purple-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              {/* Badge
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full text-sm font-semibold text-indigo-700 mb-6 transition-all duration-1000 ease-out transform ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-4 scale-95"
                }`}
              >
                <SparklesIcon className="w-4 h-4" />
                Streamlined Production
              </div> */}

              {/* Main heading */}
              <h2
                className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 transition-all duration-1000 ease-out transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                Advanced{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  3D Workflow
                </span>
              </h2>

              {/* Description */}
              <p
                className={`text-lg leading-relaxed text-gray-600 mb-10 transition-all duration-1000 ease-out transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Leverage industry-leading tools for modeling, rendering,
                animation, and post-production to create high-quality 3D content
                efficiently.
              </p>

              {/* Features list */}
              <div
                className={`space-y-8 transition-all duration-1000 ease-out transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                {features.map((feature, index) => (
                  <div
                    key={feature.name}
                    className={`group relative flex gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-indigo-200 hover:bg-white/80 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
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

                    {/* Subtle hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <TechnicalSlider />
        </div>
      </div>
    </div>
  );
}
