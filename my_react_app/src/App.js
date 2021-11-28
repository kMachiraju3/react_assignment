import {Component} from 'react';
import './App.css';
import { Button, Card, CardBody, CardTitle, Jumbotron }  from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showSecondCard: false
    }
  }

  render(){
    let cname = "lead";
    return(
      <div>
        <Jumbotron>
          <h1 className="display-3">My First React App</h1>
          <p className={cname}>This is my first attempt at it</p>
          <hr className={"my-2"}/>
          <p>Playing with Reactstrap</p>
          <p className={cname}></p>
        </Jumbotron>
        <Card key="firstCard">
          <CardBody>
            <CardTitle>My Card</CardTitle>
            <Button onclick={() => this.setState({showSecondCard : true})}> Button </Button>
          </CardBody>
        </Card>
        {this.stateSecondCard ? <Card>
          <CardBody>
            <CardTitle>My Second Card</CardTitle>
            <Button onclick={() => this.setState({showSecondCard : false})}> Button </Button>
          </CardBody>
        </Card> : null }
      </div>
    )
  }
  //if something else something
  // if ? true : false
}

export default App;
