import React from 'react';
import {
  UserIcon,
  HandThumbUpIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";

const icons = [
  {
    id: 0,
    icon: UserIcon,
    iconBackground: "bg-gray-400",
    status: "started",
  },
  {
    id: 1,
    icon: HandThumbUpIcon,
    iconBackground: "bg-blue-500",
    status: "in",
  },
  {
    id: 2,
    icon: CheckIcon,
    iconBackground: "bg-green-500",
    status: "completed",
  },
];

const timeline = [
  {
    id: 1,
    content: "What is your business Name",
    status: "completed",
  },
  {
    id: 2,
    content: "What is your business Email",
    status: "in",
  },
  {
    id: 3,
    content: "Overview of products and services",
    status: "started",
  },
  {
    id: 4,
    content: "Who are your target customers or clients?",
    status: "started",
  },
  {
    id: 5,
    content: "Are there specific challenges or pain points in your current sales process?",
    status: "started",
  },
  {
    id: 6,
    content: "Do you have any preferences for the tone or style of communication?",
    status: "started",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Setup = () => {
  return (
<div className="bg-white h-[50vh] md:h-[90vh] overflow-y-auto p-4 rounded-md">
      <h2 className="text-xl mb-6 text-[#444444] font-bold ml-4">
        Setup Process:
      </h2>
      <ul role="list" className="p-4 -mt-6">
        {timeline.map((event, eventIdx) => (
          <li key={event.id} className='py-3 flex'>
            <div className="relative pb-4 w-full shadow-sm rounded-md">
              {eventIdx !== timeline.length - 1 && (
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex space-x-3 ">
                <div>
                  <span
                    className={classNames(
                      icons.find((icon) => icon.status === event.status)?.iconBackground,
                      "flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white mt-[2px]"
                    )}
                  >
                    {icons.map((icon) => {
                      if (icon.status === event.status) {
                        const IconComponent = icon.icon;
                        return (
                          <IconComponent
                            key={event.id}
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        );
                      }
                      return null;
                    })}
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5">
                  <div>
                    <p className="text-md text-black">
                      {event.content}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Setup;
