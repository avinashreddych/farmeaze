import {
  BriefcaseIcon,
  ChatBubbleBottomCenterIcon,
  PresentationChartLineIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Agri-produce supply",
    description:
      "We bring the finest agri-produce directly from farms to your doorstep, anywhere in India. We cater to individual consumers, businesses, and wholesalers, ensuring consistent supply and quality based on your specific needs.",
    icon: RectangleStackIcon,
  },
  {
    name: "Strategic business consulting",
    description:
      "Grow your agribusiness with Farmeaze's expert consulting services. Our team of specialists provides strategic guidance on market trends, production optimization, and profitability improvement.",
    icon: BriefcaseIcon,
  },
  {
    name: "Tech Services",
    description:
      "Farmeaze offers a range of tech services tailored to the unique needs of the agribusiness industry. From farm management software to e-commerce platforms, we equip you with the tools to thrive in the digital age.",
    icon: PresentationChartLineIcon,
  },
  {
    name: "QC management consulting",
    description:
      "Ensure the highest quality standards throughout your agricultural supply chain with Farmeaze's QC management consulting services. Our experts help you implement robust quality control procedures, fostering trust and brand reputation.",
    icon: ChatBubbleBottomCenterIcon,
  },
];

export default function DetailsSection() {
  return (
    <div className="bg-[#F2EFE5]  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fresh Produce, Delivered Fresh to Your Area. Every Time.
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
