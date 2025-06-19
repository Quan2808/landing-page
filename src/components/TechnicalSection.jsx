import TechnicalSlider from "./TechnicalSlider";
import { CubeIcon, SparklesIcon, FilmIcon } from "@heroicons/react/20/solid";

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

export default function TechnicalSection() {
  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="font-semibold text-indigo-600">
                Streamlined Production
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Advanced 3D Workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Leverage industry-leading tools for modeling, rendering,
                animation, and post-production to create high-quality 3D content
                efficiently.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <TechnicalSlider></TechnicalSlider>
        </div>
      </div>
    </div>
  );
}
