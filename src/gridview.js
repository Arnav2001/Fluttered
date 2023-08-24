import React from 'react';
import { useSpring, animated } from 'react-spring';
import './gridview.css';
const topics = [
  {title: 'Widgets', 
  description: 'Flutter is built around a widget-based architecture. Widgets are the building blocks of the user interface, and understanding how to use and create widgets is fundamental to Flutter development.' },
  { title: 'Layouts',
   description: 'Flutter provides a variety of layout widgets to arrange UI elements. Learning how to create responsive layouts using widgets like Row, Column, and Container is essential for designing Flutter apps.' },
  { title: 'State Management',
   description: 'Managing app state efficiently is crucial in Flutter. Explore different state management approaches like Provider, Bloc, and GetX to handle data and UI updates effectively.' },
  { title: 'Navigation',
   description: 'Flutter offers robust navigation solutions. Learn how to navigate between screens, pass data between routes, and implement navigation drawers and bottom navigation bars.' },
  { title: 'Animations',
   description: "Adding animations enhances the user experience. Flutter's animation framework allows you to create complex animations and transitions, making your app more engaging." },
  { title: 'Theming and Styling',
   description: 'Customize the look and feel of your Flutter app using themes and styles. Create consistent designs and manage app-wide styling with ease.' },
  { title: 'HTTP and APIs',
   description: "Accessing data from web services and APIs is common in app development. Learn how to make HTTP requests and handle responses using packages like http and Dio." },
  { title: 'Firebase Integration',
   description: 'Firebase provides a suite of powerful tools for app development, including authentication, real-time databases, and cloud storage. Integrate Firebase into your Flutter app for enhanced functionality.' },
  { title: 'Testing and Debugging',
   description: "Effective testing and debugging are essential for maintaining the quality of your app. Discover Flutter's testing framework and debugging tools to identify and fix issues efficiently." },
  // Add more topics as needed
];

const AnimatedGrid = () => {
  // Animation configuration
  const fade = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

  return (
    <animated.div style={fade} className="animated-grid">
      {topics.map((topic, index) => (
        <animated.div key={index} className="topic-card">
          <h2>{topic.title}</h2>
          <p>{topic.description}</p>
        </animated.div>
      ))}
    </animated.div>
  );
};

export default AnimatedGrid;
