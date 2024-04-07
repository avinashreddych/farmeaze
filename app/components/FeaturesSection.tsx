import Image, { StaticImageData } from "next/image";
import {
  ShoppingBagIcon,
  PresentationChartLineIcon,
  UserCircleIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  WrenchIcon,
  CheckBadgeIcon,
  CubeTransparentIcon,
} from "@heroicons/react/20/solid";

import AgriServeImage from "../../public/agri-serve.jpeg";
import TestingImage from "../../public/testing.jpeg";
import AllProductsImage from "../../public/all.jpeg";
import CabbageImage from "../../public/cabbage.jpeg";

const FeaturesList: {
  [key: string]: {
    values: {
      name: string;
      description: string;
      icon: React.ForwardRefExoticComponent<
        Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
          title?: string | undefined;
          titleId?: string | undefined;
        } & React.RefAttributes<SVGSVGElement>
      >;
    }[];
    image: StaticImageData;
  };
} = {
  freshnessList: {
    values: [
      {
        name: "Fresh Deliveries",
        description:
          "Get the freshest harvest delivered straight to your door, no matter your location in India.",
        icon: ShoppingBagIcon,
      },
      {
        name: "Business Growth",
        description:
          "Gain valuable insights and expert analysis to help your agribusiness grow and thrive.",
        icon: PresentationChartLineIcon,
      },
    ],
    image: AgriServeImage,
  },

  demandList: {
    values: [
      {
        name: "On-Demand Produce",
        description:
          "Don't waste time searching for quality produce - Farmeaze delivers on-demand to meet your specific needs.",
        icon: ChartBarIcon,
      },
      {
        name: "Expert Advice",
        description:
          "Get expert advice on your business with Farmeaze's analysis services. They'll help you make informed decisions for success.",
        icon: UserCircleIcon,
      },
    ],
    image: TestingImage,
  },

  customizationList: {
    values: [
      {
        name: "Your Needs Met",
        description:
          "Customize your agri-produce delivery to get exactly what you need, when you need it. No more settling for what's available.",
        icon: ClipboardDocumentListIcon,
      },
      {
        name: "Tailored Solutions",
        description:
          "Benefit from expert analysis tailored to your business. Farmeaze understands your needs and provides solutions that work for you.",
        icon: WrenchIcon,
      },
    ],
    image: AllProductsImage,
  },

  qualityList: {
    values: [
      {
        name: "Unmatched Quality",
        description:
          "Enjoy the unmatched freshness and quality of Farmeaze's agri-produce deliveries.",
        icon: CheckBadgeIcon,
      },
      {
        name: "Growth Potential",
        description:
          "Farmeaze empowers you with data-driven insights to unlock your business's full growth potential.",
        icon: CubeTransparentIcon,
      },
    ],
    image: CabbageImage,
  },
};

export default function FeaturesSection() {
  return (
    <section className="bg-[#F2EFE5] py-24 space-y-16 sm:py-32 lg:space-y-96">
      {Object.keys(FeaturesList).map((key, index) => {
        return (
          <div
            className={`flex flex-col gap-8 px-6 max-w-7xl mx-auto lg:gap-16 ${
              (index + 1) % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
            key={key}
          >
            <div className="mx-auto max-w-2xl self-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Freshness & Success
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We source the freshest produce directly from farms across India
                and deliver it quickly to your doorstep, ensuring good quality.
              </p>

              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {FeaturesList[key].values.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-green-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex h-[500px] w-full items-start justify-end relative lg:h-[450px]">
              <Image
                src={FeaturesList[key].image}
                placeholder="blur"
                fill
                alt="people exchanging vegetables"
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
