/**
 * App Image object
 */
class App extends Component {
  constructor(data) {
    this.src = data.src;
    this.alt = data.alt;
    this.height = data.height;
    this.width = data.width;
  }
  getImage() {
    return {};
  }
}

export default App;
