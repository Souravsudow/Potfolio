import { motion, AnimatePresence } from 'framer-motion';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

const Contact = () => {
  usePageTitle('Contact');
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const iconHoverVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  const calendarVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -30,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1]
      }
    }
  };


  const eventTypes = [
    {
      id: "sourav-kumar-jimc9f/15min",
      title: "15 Min Chat",
      description: "Quick chat",
      duration: "15 min"
    },
    {
      id: "sourav-kumar-jimc9f/30min",
      title: "30 Min Chat",
      description: "Standard meeting",
      duration: "30 min"
    },
    {
      id: "sourav-kumar-jimc9f/60-min-meeting",
      title: "60 Min Chat",
      description: "In-depth conversation",
      duration: "60 min"
    }
  ];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        "cssVarsPerTheme": {
          "light": { "cal-brand": "#000000" },
          "dark": { "cal-brand": "#ffffff" }
        }
      });
    })();
  }, [selectedEvent]);

  return (
    <div>
      <FadeInSection>
        <motion.h1 className="text-3xl font-bold">
          Contact
        </motion.h1>
        <motion.p className="text-sm sm:text-base leading-relaxed mb-6">
          Let's connect.
        </motion.p>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Connect with me through any of these platforms.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <motion.a
              href="mailto:phillipche1@gmail.com"
              className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all group"
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="flex-shrink-0"
                variants={iconHoverVariants}
              >
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </motion.div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">souravkumar8oct@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/sourav-kumar08/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all group"
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="flex-shrink-0"
                variants={iconHoverVariants}
              >
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">LinkedIn</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">@sourav</p>
              </div>
            </motion.a>

          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-lg font-medium mb-2">Book a Call</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Schedule a call with me if you need a more in-depth conversation about anything you want!
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!selectedEvent ? (
              <motion.div
                key="event-selection"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {eventTypes.map((event, index) => (
                  <motion.button
                    key={event.id}
                    onClick={() => setSelectedEvent(event.id)}
                    className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all text-left group h-full flex flex-col"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{event.title}</h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        {event.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex-grow">
                      {event.description}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors mt-auto">
                      <span>Select this option</span>
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="calendar-view"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4"
              >
                <motion.button
                  onClick={() => setSelectedEvent(null)}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center space-x-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.3,
                      delay: 0.2,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Back to events</span>
                </motion.button>

                <motion.div
                  variants={calendarVariants}
                  initial="hidden"
                  animate="visible"
                  className="cal-embed-container rounded-xl"
                  style={{ height: "700px", overflow: "auto" }}
                >
                  <Cal
                    key={selectedEvent}
                    calLink={selectedEvent}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none"
                    }}
                    config={{
                      "theme": "auto"
                    }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Contact;