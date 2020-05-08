class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    );
  }
}

class Header extends React.Component {
  state = {
    navList: ["Item 1", "Item 2", "Item 3", "Item 4"],
    isMobileMenuShown: false,
    welcomeMessage: "Welcome Message",
  };

  changeWelcomeMessage = () => {
    this.setState({ welcomeMessage: "Have a Good Time!" });
  };

  showMobileMenu = () => {
    this.setState({ isMobileMenuShown: true });
  };

  hideMobileMenu = () => {
    this.setState({ isMobileMenuShown: false });
  };

  render() {
    return (
      <div>
        <header className="main-header">
          <h1 className="main-header-title">Website Title / Logo</h1>
          <MainNav
            navList={this.state.navList}
            showMobileMenu={this.showMobileMenu}
          />
          <MobileMenu
            navList={this.state.navList}
            isMobileMenuShown={this.state.isMobileMenuShown}
            hideMobileMenu={this.hideMobileMenu}
          />
        </header>
        <div className="banner">
          <h2
            className="welcome-message"
            onClick={() => this.changeWelcomeMessage()}
          >
            {this.state.welcomeMessage}
          </h2>
        </div>
      </div>
    );
  }
}

const MainNav = (props) => (
  <nav className="main-nav">
    <span className="menu-trigger" onClick={props.showMobileMenu}>
      <img src="icon/iconfinder_ic_menu_48px_352539.svg" alt="menubar" />
    </span>
    <ul className="nav-list">
      {props.navList.map((navItem) => (
        <li key={navItem}>{navItem}</li>
      ))}
    </ul>
  </nav>
);

const MobileMenu = (props) => (
  <nav
    className={`mobile-menu mobile-menu_${
      props.isMobileMenuShown ? "shown" : "hidden"
    }`}
  >
    <button
      className="menu-close-button"
      type="button"
      onClick={props.hideMobileMenu}
    >
      X
    </button>
    <ul className="mobile-menu-list">
      {props.navList.map((navItem) => (
        <li key={navItem}>{navItem}</li>
      ))}
    </ul>
  </nav>
);

class MainContent extends React.Component {
  state = {
    isBoxesGroup1Displayed: true,
    isBoxesGroup2Displayed: false,
  };

  showMoreContentBoxes = () => {
    this.setState({ isBoxesGroup2Displayed: true });
  };

  render() {
    return (
      <section className="main-content">
        <h2 className="main-content-title">Section Title</h2>
        <ContentBoxes isDisplayed={this.state.isBoxesGroup1Displayed}>
          <ContentBox number={1} />
          <ContentBox number={2} />
          <ContentBox number={3} />
          <ContentBox number={4} />
        </ContentBoxes>
        <button
          className="action-button"
          onClick={() => {
            this.showMoreContentBoxes();
          }}
        >
          Call to Action
        </button>
        <ContentBoxes isDisplayed={this.state.isBoxesGroup2Displayed}>
          <ContentBox number={5} />
          <ContentBox number={6} />
          <ContentBox number={7} />
          <ContentBox number={8} />
        </ContentBoxes>
      </section>
    );
  }
}

const ContentBoxes = (props) => (
  <div
    className="content-boxes"
    style={{ display: props.isDisplayed ? "block" : "none" }}
  >
    <div className="row">{props.children}</div>
  </div>
);

const ContentBox = (props) => (
  <div className="content-box">
    <h3 className="content-box-title">Content Box {props.number}</h3>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
