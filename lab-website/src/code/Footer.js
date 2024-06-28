






import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import LabName from './LabName.js';
import * as d3 from 'd3';
import { VscGithub } from "react-icons/vsc";

class Footer extends Component {



    constructor(props) {
        super(props);
    }


    componentDidMount() {
        // this.createVis()
        Date.prototype.getMonthName = function () {
            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return months[this.getMonth()];
        };


        var x = new Date(document.lastModified)
        this.setState({ 'last': x.getMonthName() + " " + x.getFullYear() })

    }

    componentDidUpdate() {
        // this.createVis();
    }




    render() {
        return (


            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                <div className='container border-top'>
                    <div className='row'>
                        <div className='footer-bottom col-lg-6'>
                            Github <VscGithub className='icon-adjustment' /> <a href="https://github.com/fig-x" target='blank' className='plain-a'>fig-x</a>
                            {/* <hr style={{'width': '80%'}} className='float-center'/> */}
                            <p className='footer-span'>Copyright © <LabName /> <br />Last updated in {this.state && <span id='lastUpdate'>{this.state.last}</span>}
                            </p></div>

                        <div className=' footer-bottom col-lg-6 text-end'>
                        <p>Brendan Iribe Center <br/>8125 Paint Branch Dr. <br />College Park, MD 20742</p>
                        </div>      </div></div>
            </footer >


        )
    }

}


export default Footer;