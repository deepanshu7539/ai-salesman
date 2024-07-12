import React, { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
// import QuoteModal from "./QuoteModal";

const pricing = {
  frequencies: [
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/year" },
  ],
  tiers: [
    {
      name: "Basic",
      id: 1,
      href: "#",
      price: { monthly: "$15", annually: "$144" },
      description: "The essentials to provide your best work for clients.",
      features: ["Phone Call"],
      mostPopular: false,
    },
    {
      name: "Intermediate",
      id: 2,
      href: "#",
      price: { monthly: "$30", annually: "$288" },
      description: "The essentials to provide your best work for clients.",
      features: [
        "Phone Call",
        "Email",
        "Follow Ups",
      ],
      mostPopular: true,
    },
    {
      name: "Advance",
      id: 3,
      href: "#",
      price: { monthly: "$60", annually: "$576" },
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "Phone Call",
        "Email",
        "Follow Ups",
        "Whatsapp"
      ],
      mostPopular: false,
    },
    {
      name: "Free Trial",
      id: 4,
      href: "#",
      price: { monthly: "$0", annually: "$0" },
      description: "Dedicated support and this is something",
      features: [
        "30 day free use Phone Call",
      ],
      mostPopular: false,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Plans({ onNext, onPrevious }) {
  const [frequency, setFrequency] = useState(pricing.frequencies[0]);
  const [selectedPlan, setSelectedPlan] = useState(1);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    console.log("plans");
    onNext(); // Ensure onNext is invoked properly
    // setIsModalOpen(true);
  };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   onNext();
  // };

  const handlePrevious = () => {
    onPrevious();
  };

  return (
    <div className="bg-white h-[90vh] overflow-y-scroll p-4 rounded-md">
      <main>
        {/* Pricing section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-1 border-b-2">
          <p className="mx-auto max-w-2xl text-center text-lg leading-8 text-gray-600">
            Choose an affordable plan
          </p>
          <div className="m-2 flex justify-center border-b-2 pb-4">
            <fieldset aria-label="Payment frequency">
              <RadioGroup
                value={frequency}
                onChange={setFrequency}
                className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
              >
                {pricing.frequencies.map((option) => (
                  <Radio
                    key={option.value}
                    value={option}
                    className={({ checked }) =>
                      classNames(
                        checked ? "bg-indigo-600 text-white" : "text-gray-500",
                        "cursor-pointer rounded-full px-2.5 py-1"
                      )
                    }
                  >
                    {option.label}
                  </Radio>
                ))}
              </RadioGroup>
            </fieldset>
          </div>
          <div className="isolate mx-auto m-4 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-2">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.id===selectedPlan ? "bg-gradient-to-t from-indigo-500 to to-indigo-800 text-white" : "text-gray-900",
                  "rounded-3xl p-4 shadow-md shadow-gray-500/50 cursor-pointer",
                  // selectedPlan && selectedPlan.id === tier.id ? "ring-2 ring-indigo-500" : ""
                )}
                onClick={() => setSelectedPlan(tier.id)}
              >
                <h2
                  id={tier.id}
                  className={classNames(
                    // tier.mostPopular ? "text-white" : "text-gray-900",
                    "text-lg font-semibold leading-8"
                  )}
                >
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm leading-6">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight">
                    {tier.price[frequency.value]}
                  </span>
                  <span className="text-sm font-semibold leading-6">
                    {frequency.priceSuffix}
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.id===selectedPlan
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                    "mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                >
                  Buy plan
                </a>
                <ul
                  role="list"
                  className="mt-3 space-y-1 text-sm leading-6"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-1 ">
                      <CheckIcon
                        className="h-6 w-5 flex-none"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Logo cloud */}
      </main>
      {/* Next button */}
      <div className="text-center mt-10 mb-10 flex justify-between">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      {/* <QuoteModal
        Modal={Modal}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      /> */}
    </div>
  );
}

export default Plans;
