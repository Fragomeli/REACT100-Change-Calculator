import React, { Component } from 'react';
import './css/styles.css';


//==================================================================>
//              FUNCTIONS
//==================================================================>

//====================================================================>
//         CONSTRUCTORS
//====================================================================>

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountDue: Number,
      amountReceived: Number,
      changeDue: Number,
    };

    this.handleAmountDue = this.handleAmountDue.bind(this);
    this.handleAmountReceived = this.handleAmountReceived.bind(this);
    this.handleAllChange = this.handleAllChange.bind(this);
  }

  //=========================================================================>
  //          EVENT HANDLERS
  //=========================================================================>
  handleAmountDue(event) {
    this.setState({ amountDue: event.target.value });
  }
  handleAmountReceived(event) {
    this.setState({ amountReceived: event.target.value });
  }

  handleAllChange() {
    const calculateChange = (this.state.amountReceived - this.state.amountDue).toFixed(2);
    this.setState({
      changeDue: calculateChange,
      twenties: Number.parseFloat(Math.floor(calculateChange / 20).toFixed(2)),
      tens: Number.parseFloat(Math.floor((calculateChange / 10) % 2).toFixed(2)),
      fives: Number.parseFloat(Math.floor((calculateChange / 5) % 2).toFixed(2)),
      ones: Number.parseFloat(Math.floor(calculateChange % 5).toFixed(2)),
      quarters: Number.parseFloat(Math.floor(((calculateChange * 100) % 100) / 25).toFixed(2)),
      dimes: Number.parseFloat(Math.floor((((calculateChange * 100) % 100) % 25) / 10).toFixed(2)),
      nickels: Number.parseFloat(Math.floor(((((calculateChange * 100) % 100) % 25) % 10) / 5).toFixed(2)),
      pennies: Number.parseFloat(Math.floor((calculateChange * 100) % 5 + 0.01).toFixed(2))
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="display-3 mt-5 text-uppercase font-weight bold text-white">Change Calculator</h1>
        <h1 className="lead display-6 text-white mt-5 text-uppercase font-weight-bold">Change is Coming.</h1>


        <div className="row">
          <div className="col-md-4" >
            <div className="panel panel-sucess">
              <div className="panel-heading panel-title">Enter Information</div>

              <div className="panel-body"> How much is the amount due?
                    <input
                  className="form-control"
                  type="number"
                  name="amountDue"
                  onChange={this.handleAmountDue}
                  defaultValue={this.state.amountDue}
                  placeholder='Enter amount due here'
                />
              </div>
              <div className="panel-body"> How much money was received?
                    <input
                  className="form-control"
                  type="number"
                  name="amountReceived"
                  onChange={this.handleAmountReceived}
                  defaultValue={this.state.amountReceived}
                  placeholder='Enter amount paid here'
                />
              </div>


              <div className="panel-footer">
                <button
                  className="btn btn-lg btn-block"
                  type='button'
                  name='button'
                  onClick={this.handleAllChange}
                >CALCULATE</button>
              </div>
            </div>
          </div>

          <div className="col-sm-8">
            <div className="panel panel-default">
              <div className="alert alert-success text-center lead"
                role="alert">
                The total change due is ${this.state.changeDue}
              </div>

              <div className="row one">


                <div className="col-md-3 text-center">
                  {this.state.twenties ?
                    <img src="img/twenties.jpg" width="180px" />
                    : ''
                  }
                  {/* // This is a Ternary Operator. It will ask if there is a twenty to show image, but 
                //       if not then show no image . In this case an empty string '' // */}
                  <div className="well well-sm text-center">
                    <p className="lead">{this.state.twenties}</p> Twenties
                  <div className="Twenties"></div>
                  </div>
                </div>


                <div className="col-md-3 text-center">
                  {this.state.tens ?
                    <img src="img/tens.jpg" width="180px" />
                    : ''
                  }
                  <div className="well well-sm text-center">
                    <p className="lead">{this.state.tens}</p>Tens
                    <div className="Tens"></div>
                  </div>
                </div>


                <div className="col-md-3 text-center">
                  {this.state.fives ?
                    <img src="img/fivedollarbill.jpg" width="180px" />
                    : ''
                  }
                  <div className="well well-sm text-center">
                    <p className="lead">{this.state.fives}</p>Fives
                    <div className="Fives"></div>
                  </div>
                </div>

                <div className="col-md-3 text-center">
                  {this.state.ones ?
                    <img src="img/dollarbill.jpg" width="170px" />
                    : ''
                  }
                  <div className="well well-sm text-center">
                    <p className="lead">{this.state.ones}</p>Ones
                          </div>
                </div>
              </div>
              <div className="row two">

                <div className="col-md-3 text-center">
                  {this.state.quarters ?
                    <img src="img/quarter.jpg" width="100px" />
                    : ''
                  }
                  <div className="well well-sm text-center">
                    <p className="lead">{this.state.quarters}</p>Quarters
                          </div>
                </div>

                <div className="col-md-3 text-center">
                  {this.state.dimes ?
                    <img src="img/dime.jpg" width="100px" />
                    : ''
                  }
                  <div className="well well-sm text-center">
                    <p className="lead">{this.state.dimes}</p>Dimes
                          </div>
                </div>

                <div className="col-md-3 text-center">
                  {this.state.nickels ?
                    <img src="img/nickel.jpg" width="100px" />
                    : ''}
                  <div className="well well-sm text-center">
                    <p className="lead">{this.state.nickels}</p>Nickels
                          </div>
                </div>


                <div className="col-md-3 text-center">
                  {this.state.pennies ?
                    <img src="img/penny.jpg" width="100px" />
                    : ''
                  }
                  <div className="well well-sm text-center">
                    <p className="lead">{this.state.pennies}</p>Pennies
                          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
