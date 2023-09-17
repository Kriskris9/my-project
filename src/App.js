import React from 'react';
import './App.css';
import Navigation from './Navigation'; // Import the Navigation component

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="/images/profile.jpg" alt="Profile" className="profile-image" />
        <h1>Kristina Ahn</h1>
        <p>Full Stack Web Developer</p>
      </header>

      <Navigation />

      <main className="container">
        <section id="about">
          <h2>About Me</h2>
          <p>
            As a Full Stack Web Developer, I leverage my unique perspective from
            a background in Child Development to prioritize empathy, user
            experience, and accessibility in web applications. Proficient in
            HTML, CSS, JavaScript, React, Node.js, and SQL, I excel in delivering
            exceptional projects that not only meet but exceed client
            expectations, all while continually seeking fresh challenges to
            expand my skillset and create a positive societal impact.
          </p>
        </section>

        <section id="portfolio">
          <h2>Projects</h2>
          <section>
    
        <div class="project">
          <h3>Tech Blog </h3>
           
          <p>
            This is a tech blog, which allows users to view/comment on other users post as well as create, delete, and edit their own posts within the dashboard.
          </p>
          <a href="https://arcane-taiga-56538.herokuapp.com/">View Project</a>

        </div>


        <div class="project">
          <h3> Social-Network-API</h3>
           
          <p>
            This is a social network API that uses a NoSQL database to handle large amounts of unstructured data. It allows users to share their thoughts, react to friends' thoughts, and create a friends list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

          </p>
          <a href="https://watch.screencastify.com/v/sxHH8jJy2LHiIbJDaSW0">View Project</a>

        </div>
        <div class="project">
          <h3>Password Generator</h3>
           
          <p>
           
This website was created so that an individual would be able to create a randomized password between 8 to 120 characters. Once the individual presses the generate password button, they will be provided with a series of prompts. They will need to decide whether they would like to have uppercase or lowercase letters, special characters, numbers. Once completed, they will be provided with a randomized password.

          </p>
          <a href="https://kriskris9.github.io/PasswordGenerator/
          ">View Project</a>

        </div>
        <div class="project">
          <h3>Weather API</h3>
           
          <p>
            This is a weather dashboard. If you would like to find out what the current weather for a city is, you can just type the city name into the search bar. Once you click the search button, the screen will populate with information on the current weather for the day and with information on what the weather will be like for the next five days. If you would like to go back to see a recently searched item, click on the button in the search history and it will take you back to the weather information to that city!

          </p>
          <a href="https://kriskris9.github.io/WeatherAPI/">View Project</a>

        </div>
        <div class="project">
          <h3>Work Day Scheduler</h3>
           
          <p>
           
This website is a work day scheduler. It allows you to to keep track of your work day from 9-5pm. You can save important events within each time slot by clicking on the save icon button on the right hand side of the page. The slots change color based on what time it is. If it is present time the slot will be red. If it is past the current time the slot will be grey. And lastly, if it is in the future the slot will be green.

          </p>
          <a href="https://kriskris9.github.io/Work-Day-Scheduler/">View Project</a>

        </div>
        <div class="project">
          <h3>Note Taker</h3>
           
          <p>
            This is a note taker application, that allows you to take notes with express! All you have to do is add a note title and note text and press the save sign at the top right of the screen and your note will be saved. If you would like to delete a note, just press the delete button and your note will be deleted.

          </p>
          <a href="https://stark-coast-39946.herokuapp.com">View Project</a> 

        </div>
       
      </section>

        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <p> I am currently available for Full-time opportunities as well as contract work. I look forward to hearing from you!</p>
          <ul>
            <li> <strong>Email: </strong><a href= "mailto:kristinaahn9@gmail.com"> kristinaahn9@gmail.com </a> </li>
            <li><strong>Github: </strong> <a href= "https://github.com/Kriskris9">https://github.com/Kriskris9 </a></li>
            
            <li><strong>LinkedIn: </strong> <a href= "https://www.linkedin.com/in/kristina-ahn-266ba7274/">https://www.linkedin.com/in/kristina-ahn-266ba7274/</a></li>
            <li><strong> Phone Number:</strong> +13107211251</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;