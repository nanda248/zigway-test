import React, {Component} from 'react';
import {getBorrowers} from 'utils/requests';
import './Borrower.scss';

class Borrower extends Component {

    constructor() {
        super();
        this.state = {
            borrowers: []
        }
    }

    async componentDidMount() {
        const borrowers = await getBorrowers();
        console.log("Borrowers: ", borrowers);
    }

    render() {
        const {borrowers} = this.state;
        if(borrowers.length === 0) {
            return <h2>No borrowers</h2>
        }
        return (
            <div>
                <h2>Borrowers List</h2>
            </div>
        )
    }

}

export default Borrower;