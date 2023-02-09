//React Libraries
import { React, Component } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//css files
import "../../assets/css/bootstrap.min.scss";
import "../../assets/css/style.scss";
import "../../assets/css/board.scss";
//component files
import Menubar from "../../component/navbar";
import Footer from "../../component/footer";
export default class Antarctica extends Component {
    render() {
        return (
            <>
                <Menubar />
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/community/community_antarctica.jpg`} alt="" className="img-responsive" />
                    <h1 className="main-text">
                        Antarctica Community<br />
                        This is the Antarctica Community Page where you find all the Antarctica Experiences.
                    </h1>
                </div>
                <div className="table">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Select</th>
                                <th>Number</th>
                                <th>Title</th>
                                <th>Writer</th>
                                <th>Reporting Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                                <td>1</td>
                                <td>게시글1</td>
                                <td>artistJay</td>
                                <td>2022-03-19</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                                <td>2</td>
                                <td>게시글2</td>
                                <td>artistJay</td>
                                <td>2022-03-19</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                                <td>3</td>
                                <td>게시글2</td>
                                <td>artistJay</td>
                                <td>2022-03-19</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <center>
                    <Button className="boardHelper" variant="info"><Link to="/Write">New Writes</Link></Button>
                    <Button className="boardHelper" variant="secondary">Edit</Button>
                    <Button className="boardHelper" variant="danger">Delete</Button>
                </center>
                <Footer />
            </>
        );
    }
};