import { Component } from "react";
import "./App.css";

class Test1 extends Component {
  constructor() {
    super();
    this.state = { cars: [] };
  }

  async componentDidMount() {
    // set title
    const TITLE = 'My Cars';
    document.title = TITLE;

    // get data
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append("Origin", "http://localhost:8080");

    const response = await fetch("api", {
      mode: "cors",
      credentials: "include",
      method: "GET",
      headers: headers,
    });

    const body = await response.json();
    this.setState({ cars: body });
  }

  render() {
    return (
      <>
        <h1>Hello world!</h1>
        <table>
          <tbody>
            <tr>
              <th>Car Name</th>
              <th>Year</th>
            </tr>
            {this.state.cars.map((c) => {
              return (
                <tr>
                  <td>{c.name}</td>
                  <td>{c.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Test1 />
    </div>
  );
}

export default App;
