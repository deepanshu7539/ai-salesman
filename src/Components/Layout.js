import { useState, useEffect, useRef } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import logo from '../assests/AI salesman.svg'
import logofull from '../assests/AI-salesman-logo.svg'
import Notification from './Notification'
import {
  Bars3Icon,
  BellIcon,
  UsersIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  InformationCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import { Fragment } from "react";
import ChatBox from "./ChatBox";
// import AdminBox from "./AdminBox";
import axios from "axios";

import AdminBox from "./AdminBox";

const navigation = [
  { name: "Ai Salesman", href: "#", icon: UsersIcon, current: true },

];


const teams = [
  { name: "Engineering", href: "#", initial: "E", current: true },
  { name: "Product", href: "#", initial: "P", current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeFormComponent, setActiveFormComponent] = useState("");
  const [messages, setMessages] = useState([]);
  const hasFetchedData = useRef(false);
const [navigationState, setNavigationState]=useState("Instant Quote");

const [step,setStep]=useState(0);
// const [messages, setMessages] = useState([]);

const changeNavigationState=(newState)=> {
  setNavigationState(newState);
}

  let timeoutId;

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsHovered(false);
    }, 500);
  };

  const [chatData, setChatData] = useState(null);
  const [renderKey, setRenderKey] = useState(0);
  const [resultView, setResultView] = useState("");
  const [isChatboxOpen, setIsChatboxOpen] = useState(true);
  const [openSidebar, setOpenSidebar]=useState(true);
  const [showComp,setShowComp]=useState(false);


    const [notificationKey, setNotificationKey] = useState(0);

    const showNotification = () => {
      setNotificationKey((prevKey) => prevKey + 1); // Increment key to trigger re-render
    };


   const toggleSidebar = () => {
    //  setIsChatboxOpen(isOpen);
    setOpenSidebar(!openSidebar);
    console.log("clicked");

   };

  const callResult = async (component) => {
    try {
      console.log("Line 77 of Layout.jsx. CALLING API NOW");
      console.log(
        "https://instantquotedemo.automationagencyindia.com/api/result/" +
        component
      );
      const response1 = await axios.get(
        "https://instantquotedemo.automationagencyindia.com/api/result/" +
        component
        // {
        //     component: component,
        // }
      );

      console.log("Line 86 of Layout.jsx. API RESULT IS: ");
      console.log(response1.data);
      setChatData(response1.data);
      setRenderKey((oldKey) => oldKey + 1);

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response1.data.messageText, sender: "system" },
      ]);
    } catch (error) {
      alert("There was an error processing your request. Please try again.");
    }
  };

  useEffect(() => {
    if (!hasFetchedData.current) {
      const fetchData = async () => {
        try {
          console.log("Line 102 of Layout.jsx. CALLING INIT API NOW");

          const response = await axios.get(
            "https://instantquotedemo.automationagencyindia.com/api/init"
          );
          if (!response.data) {
            throw new Error("Failed to fetch data");
          }
          setChatData(response.data);
          setMessages([{ text: "Welcome to AI Salesman! How can I assist you today?", sender: "system" }]);
          hasFetchedData.current = true;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();

    }

  console.log(navigationState);


    // console.log("called");
  }, [navigationState]);

  return (
    <>
      <div className="bg-white md:bg-white">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-40 flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        {/* <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-20 w-auto"
                        src={logofull}
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mr-2 -ml-1 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-50 text-indigo-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-indigo-600"
                                        : "text-gray-400 group-hover:text-indigo-600",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        {/*              <li>*/}
                        {/*                  <div className="text-xs font-semibold leading-6 text-gray-400">*/}
                        {/*                      Your teams*/}
                        {/*                  </div>*/}
                        {/*                  <ul role="list" className="-mx-2 mt-2 space-y-1">*/}
                        {/*                      {teams.map((team) => (*/}
                        {/*                          <li key={team.name}>*/}
                        {/*                              <a*/}
                        {/*                                  href={team.href}*/}
                        {/*                                  className={classNames(*/}
                        {/*                                      team.current*/}
                        {/*                                          ? "bg-gray-50 text-indigo-600"*/}
                        {/*                                          : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",*/}
                        {/*                                      "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"*/}
                        {/*                                  )}*/}
                        {/*                              >*/}
                        {/*<span*/}
                        {/*    className={classNames(*/}
                        {/*        team.current*/}
                        {/*            ? "border-indigo-600 text-indigo-600"*/}
                        {/*            : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",*/}
                        {/*        "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"*/}
                        {/*    )}*/}
                        {/*>*/}
                        {/*  {team.initial}*/}
                        {/*</span>*/}
                        {/*                                  <span className="truncate">{team.name}</span>*/}
                        {/*                              </a>*/}
                        {/*                          </li>*/}
                        {/*                      ))}*/}
                        {/*                  </ul>*/}
                        {/*              </li>*/}
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                          >
                            {/* <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                              aria-hidden="true"
                            /> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                              />
                            </svg>
                            Help
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div
          className={`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex ${
            openSidebar ? "lg:w-45" : "lg:w-5"
          } lg:flex-col transition-all duration-300 ease-in-out `}
        >
          <div className="flex grow flex-col gap-y-5 overflow-y-auto overflow-x-hidden border-r border-gray-200 bg-white px-6">
            <div className="flex h-16 shrink-0 items-center justify-start border-b-2">
              {openSidebar && (
                <img
                  className="h-[7rem] items-center w-auto mt-4"
                  src={logofull}
                  alt="Your Company"
                />
              )}
            </div>

            <nav className="flex flex-1 flex-col ">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mr-1 -ml-4 space-y-1">
                    {!openSidebar && (
                      <img
                        className="h-10 items-center w-auto fixed top-3 left-1"
                        src={logo}
                        alt="Your Company"
                      />
                    )}
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          onClick={() => changeNavigationState(item.name)}
                          className={classNames(
                            item.current
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-indigo-600"
                                : "text-gray-400 group-hover:text-indigo-600",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {/*      <li>*/}
                {/*          <div className="text-xs font-semibold leading-6 text-gray-400">*/}
                {/*              Your teams*/}
                {/*          </div>*/}
                {/*          <ul role="list" className="-mx-2 mt-2 space-y-1">*/}
                {/*              {teams.map((team) => (*/}
                {/*                  <li key={team.name}>*/}
                {/*                      <a*/}
                {/*                          href={team.href}*/}
                {/*                          className={classNames(*/}
                {/*                              team.current*/}
                {/*                                  ? "bg-gray-50 text-indigo-600"*/}
                {/*                                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",*/}
                {/*                              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"*/}
                {/*                          )}*/}
                {/*                      >*/}
                {/*<span*/}
                {/*    className={classNames(*/}
                {/*        team.current*/}
                {/*            ? "border-indigo-600 text-indigo-600"*/}
                {/*            : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",*/}
                {/*        "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"*/}
                {/*    )}*/}
                {/*>*/}
                {/*  {team.initial}*/}
                {/*</span>*/}
                {/*                          <span className="truncate">{team.name}</span>*/}
                {/*                      </a>*/}
                {/*                  </li>*/}
                {/*              ))}*/}
                {/*          </ul>*/}
                {/*      </li>*/}
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    {/* <InformationCircleIcon
                      className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                      aria-hidden="true"
                    /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600 -ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                      />
                    </svg>
                    Help
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* <div className="bg-gradient-to-b from-transparent via-pink-200  to-transparent absolute h-full left-[174px] w-[20px]">
          </div> */}
        </div>

        <div
          className={`  ${
            openSidebar ? "lg:pl-40" : "lg:pl-14"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6 lg:pr-8 lg:pl-0">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form
                className="relative flex justify-between items-center flex-1"
                action="#"
                method="GET"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 hidden lg:flex cursor-pointer"
                  onClick={toggleSidebar}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                  />
                </svg>

                <div className="">
                  <div
                    className="inline-block relative mr-2 "
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/*    <div className="flex bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-200 focus:outline-none focus:bg-green-600 hidden md:flex">*/}
                    {/*        <svg*/}
                    {/*            xmlns="http://www.w3.org/2000/svg"*/}
                    {/*            fill="none"*/}
                    {/*            viewBox="0 0 24 24"*/}
                    {/*            strokeWidth="1.5"*/}
                    {/*            stroke="currentColor"*/}
                    {/*            className="size-4 mt-1 m-1"*/}
                    {/*        >*/}
                    {/*            <path*/}
                    {/*                strokeLinecap="round"*/}
                    {/*                strokeLinejoin="round"*/}
                    {/*                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"*/}
                    {/*            />*/}
                    {/*        </svg>*/}
                    {/*        Personal*/}
                    {/*        <svg*/}
                    {/*            xmlns="http://www.w3.org/2000/svg"*/}
                    {/*            fill="none"*/}
                    {/*            viewBox="0 0 24 24"*/}
                    {/*            strokeWidth={1.5}*/}
                    {/*            stroke="currentColor"*/}
                    {/*            className="size-5 text-center m-1"*/}
                    {/*        >*/}
                    {/*            <path*/}
                    {/*                strokeLinecap="round"*/}
                    {/*                strokeLinejoin="round"*/}
                    {/*                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"*/}
                    {/*            />*/}
                    {/*        </svg>*/}
                    {/*    </div>*/}
                    {/*    {isHovered && (*/}
                    {/*        <div*/}
                    {/*            className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10"*/}
                    {/*            onMouseEnter={handleMouseEnter}*/}
                    {/*            onMouseLeave={handleMouseLeave}*/}
                    {/*        >*/}
                    {/*            /!* Input field with search icon *!/*/}
                    {/*            <div className="flex items-center px-4 py-2 border border-green-300 rounded-lg">*/}
                    {/*                <MagnifyingGlassIcon className="h-5 w-5 mr-2 text-gray-400" />*/}
                    {/*                <input*/}
                    {/*                    type="text"*/}
                    {/*                    className="py-1 px-2 w-full border-none focus:outline-none"*/}
                    {/*                    placeholder="Search..."*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <a*/}
                    {/*                href="#"*/}
                    {/*                className="block bg-green-200 m-1 rounded px-4 py-2 text-gray-800 hover:bg-gray-200 text-center"*/}
                    {/*            >*/}
                    {/*                Personal*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                  </div>

                  <div
                    className="inline-block relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/*<div className="flex bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-200 focus:outline-none focus:bg-green-600 hidden md:flex">*/}
                    {/*    <svg*/}
                    {/*        xmlns="http://www.w3.org/2000/svg"*/}
                    {/*        fill="none"*/}
                    {/*        viewBox="0 0 24 24"*/}
                    {/*        strokeWidth="1.5"*/}
                    {/*        stroke="currentColor"*/}
                    {/*        className="size-4 mt-1 m-1"*/}
                    {/*    >*/}
                    {/*        <path*/}
                    {/*            strokeLinecap="round"*/}
                    {/*            strokeLinejoin="round"*/}
                    {/*            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"*/}
                    {/*        />*/}
                    {/*    </svg>*/}
                    {/*    Default Project*/}
                    {/*    <svg*/}
                    {/*        xmlns="http://www.w3.org/2000/svg"*/}
                    {/*        fill="none"*/}
                    {/*        viewBox="0 0 24 24"*/}
                    {/*        strokeWidth={1.5}*/}
                    {/*        stroke="currentColor"*/}
                    {/*        className="size-5 text-center m-1"*/}
                    {/*    >*/}
                    {/*        <path*/}
                    {/*            strokeLinecap="round"*/}
                    {/*            strokeLinejoin="round"*/}
                    {/*            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"*/}
                    {/*        />*/}
                    {/*    </svg>*/}
                    {/*</div>*/}
                  </div>
                </div>
                <div>
                  <ul className="flex justify-center items-center text-gray-600 gap-x-3  p-2 text-m font-semibold leading-6">
                    <li className="flex items-center space-x-3 hover:text-indigo-600 cursor-pointer">
                      <div className="relative">
                        <a
                          onClick={showNotification}
                          className="cursor-pointer"
                        >
                          <svg
                            className="w-7 h-7 text-gray-600 animate-wiggle hover:text-blue-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                              d="M15.585 15.5H5.415A1.65 1.65 0 0 1 4 13a10.526 10.526 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.415 2.5zm1.915-11c-.267-.934-.6-1.6-1-2s-1.066-.733-2-1m-10.912 3c.209-.934.512-1.6.912-2s1.096-.733 2.088-1M13 17c-.667 1-1.5 1.5-2.5 1.5S8.667 18 8 17"
                            />
                          </svg>
                        </a>
                        <div className="px-2 py-0.5 bg-red-600 rounded-full text-white text-xs absolute -top-3 -right-2">
                          3
                        </div>
                        <Notification
                          key={notificationKey}
                          message="This is a notification!"
                          type="info"
                          duration={3000}  
                        />
                      </div>
                    </li>

                    <li className="flex items-center space-x-2 hover:text-indigo-600">
                      <a
                        href="https://zimeshare.com"
                        target="_blank"
                        className="flex items-center space-x-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 text-gray-600 hover:text-blue-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>

                        {/* <span className="text-gray-800">Contact Us</span> */}
                      </a>
                    </li>

                    {/*<li className="hover:text-indigo-600">Docs</li>*/}
                    {/*<li className="hover:text-indigo-600">API reference</li>*/}
                  </ul>
                </div>
              </form>
              {/*        <div className="flex items-center gap-x-4 lg:gap-x-6">*/}
              {/*            <button*/}
              {/*                type="button"*/}
              {/*                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"*/}
              {/*            >*/}
              {/*                <span className="sr-only">View notifications</span>*/}
              {/*                <Cog6ToothIcon className="h-6 w-6" aria-hidden="true" />*/}
              {/*            </button>*/}

              {/*            /!* Separator *!/*/}
              {/*            <div*/}
              {/*                className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"*/}
              {/*                aria-hidden="true"*/}
              {/*            />*/}

              {/*            /!* Profile dropdown *!/*/}
              {/*/!*            <Menu as="div" className="relative">*!/*/}
              {/*/!*                <Menu.Button className="-m-1.5 flex items-center p-1.5">*!/*/}
              {/*/!*                    <span className="sr-only">Open user menu</span>*!/*/}
              {/*/!*                    <img*!/*/}
              {/*/!*                        className="h-8 w-8 rounded-full bg-gray-50"*!/*/}
              {/*/!*                        src="https://media.licdn.com/dms/image/D4D35AQGIxV-VP7p3nQ/profile-framedphoto-shrink_100_100/0/1714034901757?e=1718794800&v=beta&t=6R3vB0SKmRk7OlnQCY8kGsCSNNICotEGRCNh5LJ136Q"*!/*/}
              {/*/!*                        alt=""*!/*/}
              {/*/!*                    />*!/*/}
              {/*/!*                    <span className="hidden lg:flex lg:items-center">*!/*/}
              {/*/!*  <span*!/*/}
              {/*/!*      className="ml-4 text-sm font-semibold leading-6 text-gray-900"*!/*/}
              {/*/!*      aria-hidden="true"*!/*/}
              {/*/!*  >*!/*/}
              {/*/!*    Tom Cook*!/*/}
              {/*/!*  </span>*!/*/}
              {/*/!*  <ChevronDownIcon*!/*/}
              {/*/!*      className="ml-2 h-5 w-5 text-gray-400"*!/*/}
              {/*/!*      aria-hidden="true"*!/*/}
              {/*/!*  />*!/*/}
              {/*/!*</span>*!/*/}
              {/*/!*                </Menu.Button>*!/*/}
              {/*                /!*<Transition*!/*/}
              {/*                /!*    as={Fragment}*!/*/}
              {/*                /!*    enter="transition ease-out duration-100"*!/*/}
              {/*                /!*    enterFrom="transform opacity-0 scale-95"*!/*/}
              {/*                /!*    enterTo="transform opacity-100 scale-100"*!/*/}
              {/*                /!*    leave="transition ease-in duration-75"*!/*/}
              {/*                /!*    leaveFrom="transform opacity-100 scale-100"*!/*/}
              {/*                /!*    leaveTo="transform opacity-0 scale-95"*!/*/}
              {/*                /!*>*!/*/}
              {/*                /!*    <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">*!/*/}
              {/*                /!*        {userNavigation.map((item) => (*!/*/}
              {/*                /!*            <Menu.Item key={item.name}>*!/*/}
              {/*                /!*                {({ active }) => (*!/*/}
              {/*                /!*                    <a*!/*/}
              {/*                /!*                        href={item.href}*!/*/}
              {/*                /!*                        className={classNames(*!/*/}
              {/*                /!*                            active ? "bg-gray-100" : "",*!/*/}
              {/*                /!*                            "block px-3 py-1 text-sm leading-6 text-gray-900"*!/*/}
              {/*                /!*                        )}*!/*/}
              {/*                /!*                    >*!/*/}
              {/*                /!*                        {item.name}*!/*/}
              {/*                /!*                    </a>*!/*/}
              {/*                /!*                )}*!/*/}
              {/*                /!*            </Menu.Item>*!/*/}
              {/*                /!*        ))}*!/*/}
              {/*                /!*    </Menu.Items>*!/*/}
              {/*                /!*</Transition>*!/*/}
              {/*            /!*</Menu>*!/*/}
              {/*        </div>*/}
            </div>
          </div>

          <main className="relative h-[90vh]">
            <div
              className={`${
                showComp
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
                  : "mx-auto max-w-xl"
              }`}
            >
              <div className="rounded-b-[45px] drop-shadow-md md:rounded-lg overflow-hidden ">
                {chatData && (
                  <ChatBox
                    chatData={chatData}
                    messages={messages}
                    setMessages={setMessages}
                    step={step}
                    setStep={setStep}
                    showComp={showComp}
                  />
                )}
              </div>
              <div
                className={`${
                  showComp ? "grid grid-cols-1 lg:grid-cols-1" : "-translate-x-6"   
                }`}
              >
                <div className="drop-shadow-lg p-4 md:p-0 rounded-xl md:pl-2 overflow-hidden">
     
                  <AdminBox
                    setMessages={setMessages}
                    step={step}
                    setStep={setStep}
                    showComp={showComp}
                    setShowComp={setShowComp}
                  />
                </div>
   
              </div>
            </div>

 
          </main>
        </div>
      </div>
    </>
  );
}

