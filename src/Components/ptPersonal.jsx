import React from "react";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { Password, User } from "../Models/user";

const { alyGetInfo, alyAddInfo } = require("./Services");
class PtPersonal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersArr: [User],
      showModalEdit: false,
      selectedItem: User,
      passwordObj: Password,
    };
  }

  alyGetInfoFun() {
    alyGetInfo((res) => {
      console.log(res);
      this.setState({
        usersArr: res,
      });
    });
  }

  componentDidMount() {
    this.alyGetInfoFun();
  }

  handleEdit(item) {
    this.setState({ showModalEdit: true, selectedItem: item });
    console.log("The item is:", item);
  }

  handleAdd = () => {
    const emptyUser = new User("0", "", "", true, "", "", "", "", "", "");
    const emptyPasswordObj = new Password("", "");
    this.setState({
      selectedItem: emptyUser,
      passwordObj: emptyPasswordObj,
      showModalEdit: true,
    });
    // this.setState({ showModalEdit: true });
  };

  handleSubmit = () => {
    const item = this.state.selectedItem;
    const pass = this.state.passwordObj;
    if (this.state.selectedItem.Id === "0") {
      const myItem = {
        Job: item.Job,
        Gender: item.Gender,
        Password: pass.Password,
        ConfirmPassword: pass.ConfirmPassword,
        Name: item.Name,
        PhoneNumber: item.PhoneNumber,
        Addres: item.Addres,
        Email: item.Email,
        DOB: item.DOB,
      };
      alyAddInfo(myItem, (res) => {
        console.log("submitted", myItem);
        this.setState({ showModalEdit: false });
        this.alyGetInfoFun();
      });
    }
  };

  handleClose = () => {
    this.setState({ showModalEdit: false });
  };

  handleShow = () => {
    this.setState({ showModalEdit: true });
  };

  handleChange = (e) => {
    let item = { ...this.state.selectedItem };

    item[e.currentTarget.name] = e.currentTarget.value;

    this.setState({ selectedItem: item });
    console.log("changed");
  };
  handleChangePassword = (e) => {
    let item = { ...this.state.passwordObj };

    item[e.currentTarget.name] = e.currentTarget.value;

    this.setState({ passwordObj: item });
    console.log("changed");
  };
  handleChangeGender = (e) => {
    let item = { ...this.state.selectedItem };
    console.log("Gender radio", e.currentTarget.id);
    e.currentTarget.id === "Male"
      ? (item["Gender"] = true)
      : (item["Gender"] = false);
    // item["Gender"] = e.currentTarget.checked;
    this.setState({ selectedItem: item });
  };

  render() {
    return (
      <div style={{ marginRight: "3%", marginLeft: "3%" }}>
        <Modal show={this.state.showModalEdit} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  name="Name"
                  placeholder="Add user name"
                  value={this.state.selectedItem.Name}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="text"
                  name="PhoneNumber"
                  placeholder="Add phone number"
                  value={this.state.selectedItem.PhoneNumber}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput0"
              >
                <Form.Label>D.O.B.</Form.Label>
                <Form.Control
                  type="text"
                  name="DOB"
                  placeholder="Add Date of birth"
                  value={this.state.selectedItem.DOB}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Job</Form.Label>
                <Form.Control
                  type="text"
                  name="Job"
                  placeholder="Add job title"
                  value={this.state.selectedItem.Job}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="Addres"
                  placeholder="Add address"
                  value={this.state.selectedItem.Addres}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput5"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="Email"
                  placeholder="Add email"
                  value={this.state.selectedItem.Email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Label>
                Gender: <br />
              </Form.Label>
              <div className="mb-3">
                <Form.Check
                  inline
                  label="Male"
                  name="group1"
                  type="radio"
                  id="Male"
                  checked={this.state.selectedItem.Gender}
                  onChange={this.handleChangeGender}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="group1"
                  type="radio"
                  id="Female"
                  checked={!this.state.selectedItem.Gender}
                  onChange={this.handleChangeGender}
                />
              </div>

              <ShowPassword isNew={this.state.selectedItem.Id} self={this} />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Table striped bordered hover key="user table">
          <thead key="thead">
            <tr key="tr">
              <th>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={this.handleAdd}
                >
                  +
                </button>
              </th>
              <th>Name</th>
              <th>MRN</th>
              <th>Tel.</th>
              <th>Email</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Job</th>
              <th>Address</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody key="tbody">
            {this.state.usersArr.map((item) => (
              <tr key={`${item.Id}`}>
                <td>{this.state.usersArr.indexOf(item) + 1}</td>
                <td>{item.Name}</td>
                <td>123</td>
                <td>{}</td>
                <td>{item.PhoneNumber}</td>
                <td>{item.Gender ? "Male" : "Female"}</td>
                <td>{item.DOB}</td>
                <td>{item.Job}</td>
                <td>{item.Addres}</td>
                <td>
                  <button
                    onClick={() => {
                      this.handleEdit(item);
                    }}
                    className="btn btn-success btn-sm"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function ShowPassword(props) {
  const self = props.self;
  const isNew = props.isNew;
  if (isNew === "0") {
    return (
      <div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="Password"
            placeholder="Add password"
            onChange={self.handleChangePassword}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="text"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            onChange={self.handleChangePassword}
          />
        </Form.Group>
      </div>
    );
  }
  return null;
}

export default PtPersonal;
