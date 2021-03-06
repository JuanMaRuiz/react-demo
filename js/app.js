class Dev extends React.Component {
  render () {
    return (
      <li className="list-group-item">
      <div className="media">
        <div className="media-left">
          <a href={this.props.twitter}>
            <img className="media-object" src={this.props.image} alt="{this.props.name}" width="64px" height="64px"/>
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">
            <a href={this.props.twitter}>
              {this.props.name}
            </a>
          </h4>
          <p>{this.props.info}</p>
        </div>
      </div>
      </li>
    )
  }
}

class DevList extends React.Component {
  render () {
    return (
      <div>
        <div class="page-header">
          <h1>React example</h1>
        </div>
        <ul className="col-sm-12 col-md-8 list-group">
          {
            this.props.jsDevs.map(dev => {
              return (<Dev name={dev.name} twitter={dev.twitter} image={dev.image}  info={dev.info} />);
            })
          }
        </ul>
        <form className="col-sm-12 col-md-4" onSubmit={this.props.onAddDev}>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Name" name="name" />
          </div>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Twitter" name="twitter" />
          </div>
          <button className="btn btn-primary" type="submit">Add developer</button>
        </form>
      </div>
    )
  }
}

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      jsDevs: [
        {
          name: "Addy Osmani",
          twitter: "https://twitter.com/addyosmani",
          image: "http://2016.render-conf.com/perch/resources/addy.jpeg",
          info: "Engineer at Google working on @GoogleChrome • Author • Creator of TodoMVC, @Yeoman, Material Design Lite, Critical • Husband"
        },
        {
          name: "Matt Gaunt",
          twitter: "https://twitter.com/gauntface",
          image: "https://pbs.twimg.com/profile_images/733873586381803520/UmK-lmzN_400x400.jpg",
          info: "Engineer @ Google working on web."
        },
        {
          name: "Paul Irish",
          twitter: "https://twitter.com/paul_irish",
          image: "https://pbs.twimg.com/profile_images/420826194083213312/CP1RmLa3_400x400.jpeg",
          info: "The web is awesome, let's make it even better • I work on web performance, @____lighthouse & @ChromeDevTools. Big fan of rye whiskey, data and whimsy"
        }
        ]
    }
  }

  handleOnAddDev (event) {
    event.preventDefault();
    let dev = {
      name: event.target.name.value,
      twitter: event.target.twitter.value,
      image: '../assets/img/default.png',
      info: "Minions ipsumo dolor sit amet"
    }

    this.setState({
      jsDevs: this.state.jsDevs.concat([dev])
    })

  }

  render () {
    return <DevList
      jsDevs={this.state.jsDevs}
      onAddDev={this.handleOnAddDev.bind(this)}
     />
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
