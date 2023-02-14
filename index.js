const root = ReactDOM.createRoot(document.getElementById("root"));

const Navigation = () => {
  return (
    <div className="nav-div">
      <li>
        <a href="#" className="logo">
          ToDoer
        </a>
      </li>
      <li>
        <a href="#">Tasks</a>
      </li>
      <li>
        <a href="#">Notes</a>
      </li>
      <li>
        <a href="#">Lists</a>
      </li>
      <li>
        <a href="#">Outlines</a>
      </li>
      <li>
        <a href="#">Habits</a>
      </li>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <img src="https://cdn.pixabay.com/photo/2015/05/31/11/45/journal-791286_1280.jpg"></img>
    </div>
  );
};

const Lists = () => {
  return (
    <div className="todo">
      <h1>Your Past TodoZ</h1>
      <li>Go to Gym</li>
      <li>Do a certificate</li>
      <li>Eat Healthy</li>
      <li>Play Sports</li>
      <li>Sleep Early</li>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Copyright © 2023 Your Website</p>
    </footer>
  );
};

const About = () => {
  return (
    <div className="about-div">
      <h3>What is ToDoer?</h3>
      <p>
        Toodledo is a set of incredibly powerful tools to increase your
        productivity and organize your life. More than just a to-do list,
        Toodledo provides you with a place to write long notes, make custom
        lists, create structured outlines and track your habits. You can
        collaborate with friends, family or your co-workers, and we'll safely
        store and sync all your data to your devices.
      </p>
    </div>
  );
};

root.render(
  <div className="flex-wrapper">
    <Navigation />
    <Banner />
    <div class="container">
      <div class="row">
        <div class="col-6">
          <About />
        </div>
        <div class="col-6">
          <Lists />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
