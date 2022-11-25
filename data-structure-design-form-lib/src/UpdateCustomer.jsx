import React, { Component } from "react";

class UpdateCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", city: "", phone: "", photo: "" };
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <form>
            <h4 className="p-2 border-bottom">Edit Customer</h4>

            {/* customer name starts */}
            <div className="form-group form-row">
              <label className="col-lg-4">Customer Name</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={(event) => {
                    this.setState({ name: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            {/* customer name ends */}

            {/* city starts */}
            <div className="form-group form-row">
              <label className="col-lg-4">City</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.city}
                  onChange={(event) => {
                    this.setState({ city: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            {/* city ends */}

            {/* phone starts */}
            <div className="form-group form-row">
              <label className="col-lg-4">Phone</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.phone}
                  onChange={(event) => {
                    this.setState({ phone: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            {/* phone ends */}

            {/* photo starts */}
            <div className="form-group form-row">
              <label className="col-lg-4">Photo</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.photo}
                  onChange={(event) => {
                    this.setState({ photo: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            {/* photo ends */}

            <div className=" border-top p-2">
              <button className="btn btn-success" onClick={this.onSaveClick}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    //get id from route parameters
    let id = this.props.match.params.id;
    console.log(id);

    //make GET request to fetch customer object from database based on id
    let response = await fetch(`http://localhost:5000/customers/${id}`, {
      method: "GET",
    });
    let body = await response.json();

    this.setState({
      name: body.name,
      city: body.address.city,
      phone: body.phone,
      photo: body.photo,
    });
  };

  onSaveClick = async (event) => {
    event.preventDefault();
    let id = this.props.match.params.id;

    //fetch data from state into a new customer object
    var custmomer = {
      name: this.state.name,
      address: { city: this.state.city },
      phone: this.state.phone,
      photo: this.state.photo,
    };

    //make post request
    var response = await fetch(`http://localhost:5000/customers/${id}`, {
      method: "PUT",
      body: JSON.stringify(custmomer),
      headers: {
        "Content-type": "application/json",
      },
    });

    var body = await response.json();
    console.log(body);

    //after receiving response body, redirect to /customers
    if (body) {
      this.props.history.replace("/customers");
    }
  };
}

export default UpdateCustomer;
