<template>
  <div class="hello"  >
    <!-- home section starts  -->

    <section class="home" id="home">
      <div class="container">
        <div class="row min-vh-100 align-items-center text-center text-md-left">
          <div class="col-md-6 pr-md-5" data-aos="zoom-in">
            <img src="../assets/Doctors-bro.png" width="100%" alt="" />
          </div>

          <div class="col-md-6 pl-md-5 content" data-aos="fade-left">
            <h1><span>stay</span> safe, <span>stay</span> healthy.</h1>
            <h3>caring for you.</h3>
            <a href="/service"><button class="button">learn more</button></a>
          </div>
        </div>
      </div>
    </section>

    <!-- home section ends -->

    <!-- about section start  -->

    <section class="about" id="about">
      <div class="container">
        <div class="row min-vh-100 align-items-center">
          <div class="col-md-6 content" data-aos="fade-right">
            <div class="box">
              <h3><i class="fas fa-ambulance"></i> ambulance services</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                suscipit.
              </p>
            </div>

            <div class="box">
              <h3><i class="fas fa-procedures"></i> emergency rooms</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                suscipit.
              </p>
            </div>

            <div class="box">
              <h3><i class="fas fa-stethoscope"></i> free check-ups</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                suscipit.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-none d-md-block" data-aos="fade-left">
            <img src="../assets/nurse.jpg" width="100%" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- counter section ends -->

    <!-- contact section starts  -->

    <section class="contact" id="contact">
      <div class="container min-vh-100">
        <div class="row justify-content-center">
          <h1 class="heading">
            <span>'</span> make an appointment <span>'</span>
          </h1>

          <div class="col-md-10" data-aos="flip-down">
            <form action="">
              <div class="inputBox">
                <input type="text" placeholder="full name" />
                <input type="number" placeholder="phone" />
              </div>

              <div class="inputBox">
                <input type="email" placeholder="your email" />
                <select name="" id="">
                  <option value="" disabled selected>
                    make an appointment
                  </option>
                  <option value="09-11 am">09-11 am</option>
                  <option value="11-03 pm">11-03 pm</option>
                  <option value="03-06 pm">03-06 pm</option>
                  <option value="06-09 pm">06-09 pm</option>
                </select>
              </div>

              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="message ( optional )"
              ></textarea>

              <input
                type="submit"
                name=""
                id=""
                value="make appointment"
                class="button"
              />
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- contact section ends -->

    <!-- post section starts  -->

 

    <!-- post section ends -->

    <!-- footer section starts  -->
  </div>
</template>
 
<script>
AOS.init({
      duration: 1000,
      delay: 400,
    });
export default {
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  >
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap");

:root {
  --blue: #0188df;
  --black: #354046;
}

* {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none !important;
  outline: none !important;
  text-decoration: none !important;
  text-transform: capitalize;
  font-weight: 400;
  transition: all 0.2s linear;
}

*::selection {
  background: var(--black);
  color: #fff;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
}

section {
  overflow: hidden;
}

.button {
  height: 3.5rem;
  width: 15rem;
  background: var(--blue);
  color: #fff;
  font-size: 1.7rem;
  text-transform: capitalize;
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;
  z-index: 0;
  overflow: hidden;
  margin: 1rem 0;
}

.button::before {
  content: "";
  position: absolute;
  top: -100%;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--black);
  z-index: -1;
  transition: 0.2s linear;
}

.button:hover:before {
  top: 0%;
}

.button:hover {
  box-shadow: 0.1rem 0.5rem var(--blue), 0 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
}

.heading {
  text-align: center;
  font-size: 4rem;
  padding: 1rem;
  padding-top: 8rem;
  color: var(--black);
}

.heading span {
  color: var(--blue);
}

header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 1rem;
  z-index: 1000;
}

.header-active {
  background: #fff;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
}

header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header a {
  color: var(--black);
}

header a:hover {
  color: var(--blue);
}

header .container .logo {
  font-size: 3rem;
}

header .container .logo span {
  color: var(--blue);
}

header .nav ul {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
}

header .nav ul li {
  margin: 0 1rem;
}

header .nav ul li a {
  font-size: 2rem;
}

header .fa-bars {
  font-size: 3.5rem;
  color: var(--blue);
  cursor: pointer;
  display: none;
}

.home .content h1 {
  font-size: 5rem;
  color: var(--black);
}

.home .content h1 span {
  color: var(--blue);
}

.home .content h3 {
  font-size: 4rem;
  color: var(--black);
}

.about {
  background: #eee;
}

.about .content .box {
  margin: 3rem 0;
}

.about .content .box h3 {
  font-size: 2.5rem;
  color: var(--black);
}

.about .content .box h3 i {
  padding: 0 1rem;
  color: var(--blue);
}

.about .content .box p {
  font-size: 1.7rem;
  padding-left: 6rem;
  color: #666;
}


.counter .box-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 0;
}

.counter .box-container .box {
  margin: 2rem 5rem;
  text-align: center;
}

.counter .box-container .box i {
  color: var(--blue);
  font-size: 5rem;
}

.counter .box-container .box span {
  color: var(--black);
  font-size: 3rem;
  display: block;
  padding: 1rem 0;
}

.counter .box-container .box h3 {
  color: #666;
}

.contact {
  background: var(--black);
}

.contact .heading {
  color: #fff;
}

.contact form {
  text-align: center;
}

.contact form .inputBox {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.contact form .inputBox input,
select {
  height: 4rem;
  width: 49%;
  padding: 0 1rem;
  margin: 1rem 0;
  font-size: 1.7rem;
  color: var(--black);
}

.contact form textarea {
  height: 20rem;
  resize: none;
  padding: 1rem;
  font-size: 1.5rem;
  width: 100%;
}

.contact form input[type="submit"] {
  width: 20rem;
}

.contact form input[type="submit"]:hover {
  background: var(--black);
}


@media (max-width: 768px) {
  .hello {
    font-size: 55%;
  }

  header .fa-bars {
    display: block;
  }

  header .nav {
    position: fixed;
    top: -100rem;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    border: 0.3rem solid var(--blue) !important;
    background: #fff;
    width: 95%;
    opacity: 0;
  }

  header .nav ul {
    width: 100%;
    flex-flow: column;
    padding: 2rem 0;
  }

  header .nav ul li {
    width: 100%;
    text-align: center;
    margin: 1rem 0;
  }

  header .nav ul li a {
    font-size: 3rem;
    display: block;
  }

  header .nav-toggle {
    top: 50%;
    opacity: 1;
  }

  .contact form .inputBox input,
  select {
    width: 100%;
  }

  .contact form input[type="submit"] {
    width: 100%;
  }
}

</style>
