import React, { Component } from 'react';
import Navigator from '../code/Navigator.js';
import HeaderSpan from '../code/HeaderSpan.js';
import { _peoplepath } from '../code/helper.js'
// import * as d3 from 'd3'
import { Col, Card } from 'react-bootstrap';
import { FiExternalLink } from "react-icons/fi";

let arr = ['current', 'current-non-human', 'alumni']

let nameMap = {
    'current': 'current members',
    'current-non-human': 'Non-human friends',
    'alumni': 'Alumni'
}

class People extends Component {


    constructor(props) {
        super(props);
        // this.createPeople = this.createPeople.bind(this)
    }


    componentDidMount() {
        // this.createVis()
        fetch(_peoplepath)
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => {
                    if (Math.abs(a.year - b.year) < 0.1) {
                        return a.month - b.month
                    }
                    return a.year - b.year
                })

                this.setState({ peopledata: data })
                let arr = ['current', 'current-non-human', 'alumni']
                // arr.forEach(c => {
                //     let subset = data.filter(p => p.catergory === c)
                // 
                // })

            });

    }

    componentDidUpdate() {
    }




    render() {
        return (
            <div>
                <div className='top-header'>
                    <div className="container">
                        <Navigator activeItem='people-nav' />
                    </div>
                </div>
                <HeaderSpan text='People' />
                <div class="container">
                    <div id='people' class="row">

                        {this.state && this.state.peopledata && arr.map(c => {

                            let subset = this.state.peopledata.filter(p => p.catergory === c)
    
                            return (subset.length > 0 && <div>
                                <div className='padding-top' ></div>
                                <h3>{nameMap[c]}</h3>
                                {subset.map(p => {
                                    return (<Card className='people-card'>

                                        <Card.Img variant="top" src={p.headshot} alt={p.name} className='headshot' />
                                        <Card.Title>
                                            {p.website != '' && <a href={p.website} target='_blank' className='people-name'>{p.name} &#8202;
                                                <FiExternalLink className='icon-adjustment' /></a>}
                                            {p.website == '' && <span href={p.website} target='_blank' className='people-name'>{p.name} </span>}
                                        </Card.Title>
                                        <Card.Body>
                                            <p className='people-info'>{p.position}</p>
                                            <p className='people-info' dangerouslySetInnerHTML={{__html: p.quote}}/>
                                            {p.year && <p className='people-info'>since <font className='people-little-info'>{p.year}</font></p>}
                                        </Card.Body>
                                    </Card>)
                                })}
                            </div>
                            )
                        })}



                    </div>
                </div>
            </div>
        )
    }

}


export default People;