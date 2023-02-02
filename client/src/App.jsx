import './App.scss';

//🔒

const App = () => {
  return (

    <body className="App">
      <header>

        <div className='logo'>
          <h1>cr<font color="#b22222">IT</font>ique<font color="#b22222">🖉</font></h1>
        </div>

        <div className='user'>
          <div className='sign-in'>
            <button>Sign-in 🗝️</button>
          </div>
          <br/>
          <div className='register'>
            <button>Register 📋</button>
          </div>
        </div>

      </header>

      <nav>
        <div className="link-nav"><img src="https://www.svgrepo.com/show/91435/star.svg"/></div>
        <div className="link-nav"><img src="http://cdn.onlinewebfonts.com/svg/img_238648.png"/></div>
        <div className="link-nav"><img src="https://cdn-icons-png.flaticon.com/512/4406/4406266.png"/></div>
        <div className="link-nav"><img src="http://cdn.onlinewebfonts.com/svg/img_453063.png"/></div>
        <div className="link-nav"><img src="https://icons.veryicon.com/png/o/education-technology/radio-and-tv-cloud/about-us-22.png"/></div>
      </nav>

      <main>

        <section className="left-side">

          <section className="critique-left">
            <div className="critique-select">

            </div>
          </section>

          <section className="stat-left">
            <div className="stat-select">

            </div>
          </section>

          <section className="explore-left">
            <div className="explore-select">

            </div>
          </section>

          <section className="profile-left">
            <div className="profile-select">

            </div>
          </section>

        </section>

        <section className="right-side">

          <section className="critique-right">
            <div className="critique-display">

            </div>
          </section>

          <section className="stat-right">
            <div className="stat-display">

            </div>
          </section>

          <section className="explore-right">
            <div className="explore-display">

            </div>
          </section>

          <section className="profile-right">
            <div className="profile-display">

            </div>
          </section>

        </section>

      </main>

      <section className='about-us'>
        <p>ABOUT</p>
        <p>US</p>
      </section>

      <footer>
        <h1><h1>cr<font color="#b22222">IT</font>ique<font color="#b22222">🖉</font></h1></h1>
      </footer>

    </body>
  );
}

export default App;
