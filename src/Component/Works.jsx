import React from 'react';
import ecom from "../assets/ecommer.jpg"
import Bookit from "../assets/bookit.jpg"
import Wea from "../assets/wea.png"
import Quiz from "../assets/quiz.jpg"

const works = [
  {
    title: 'Mini E-commerce Website',
    description: 'The E-commerce Website is a fully functional, user-friendly platform designed to enable users to browse products, add them to the shopping cart, and complete secure purchases online. The app aims to provide a seamless shopping experience with a modern design, ensuring both customers and merchants can easily interact with the platform.',
    imageUrl: ecom, 
    liveUrl: 'https://mini-ecommerce-gray.vercel.app/', 
    repoUrl: 'https://github.com/DvSamM/Mini-Ecommerce', 
  },
  {
    title: 'Bookit App',
    description: 'The BookIt app serves as a comprehensive platform for users to effortlessly find and book various services tailored to their needs. At its core, the app emphasizes user experience, offering a seamless interface for searching accommodations, dining options, transportation, and activities. (Created by Dev Sam & Dev Exxxl)',
    imageUrl: Bookit, 
    liveUrl: 'https://bookit-app-topaz.vercel.app/',
    repoUrl: 'https://github.com/e-xxxxl/BOOKIT_APP',
  },
  {
    title: 'Weather App',
    description: 'The Weather App is a web application that allows users to quickly check the current weather conditions and forecast for their location or any city worldwide. The app fetches real-time data from a weather API and provides users with detailed information such as temperature, humidity, wind speed, and a daily forecast for the upcoming days.',
    imageUrl: Wea,
    liveUrl: 'https://weathersm.vercel.app/',
    repoUrl: 'https://github.com/DvSamM/Weather',
  },
  {
    title: 'Quiz App',
    description: 'The Quiz App is an interactive web application that allows users to test their knowledge on a wide variety of topics. The app provides an engaging and educational experience, featuring multiple quiz categories, a countdown timer for added excitement, and a leaderboard for users to compete against each other.',
    imageUrl: Quiz,
    liveUrl: 'https://quizsm.vercel.app/',
    repoUrl: 'https://github.com/DvSamM/Quiz',
  },
];

const Works = () => {
  return (
    <section className="py-16  text-white" id="work">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
            key={index}
            className="bg-black border text-white hover:text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
          
              <img src={work.imageUrl} alt={work.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{work.title}</h3>
                <p className="text-sm mb-4 font-mono">{work.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" px-2 py-1 font-semibold border rounded-sm shadow-lg bg-black transition duration-300 text-white sm:w-auto"
                  >
                  Live Preview
                  </a>
                  <a
                    href={work.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                     className=" px-2 py-1 font-semibold border rounded-sm shadow-lg bg-black transition duration-300 text-white sm:w-auto"
                  >
                   
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
