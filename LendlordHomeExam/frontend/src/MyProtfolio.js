import React, { Component } from 'react';
import './MyProtfolio.css';
import axios from 'axios';
import Table from './Table'
import { Button } from '@material-ui/core';
import Filter from './Filter'
import Container from '@material-ui/core/Container';
import Summary from './Summary'
import SideBar from './SideBar'
import AddCircleIcon from '@material-ui/icons/AddCircle';




class MyProtfolio extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            fullData: [],
            open: false,
        }
    }


    componentDidMount() {
        this.updateData();
    }

    updateData = async () => {
        const allData = await axios.get('http://localhost:8000/assets')
        this.setState({
            data: allData.data,
            fullData : allData.data
        })
    }

    handleDrawerOpen = () => {
        document.getElementsByTagName("body")[0].classList.add("open");
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        document.getElementsByTagName("body")[0].classList.remove("open");
        this.setState({ open: false })
    };

    setData = (newData)=>{
        this.setState({data: newData})
    }


    render() {
        return (
            <Container maxWidth={false} className="main">
                <h2>MY PROTFOLIO</h2>
                <Summary data={this.state.data} />
                <div className="actions">
                    <Button variant="outlined" style={{color:"blue",backgroundColor: "#fff", marginRight:"2%"}}
                    onClick={this.handleDrawerOpen}><AddCircleIcon style={{color:"blue"}} />Add Property</Button>
                    <Filter setData={this.setData} data={this.state.fullData}/>
                </div>
                <Table data={this.state.data} />
                <SideBar updateData={this.updateData} handleDrawerClose={this.handleDrawerClose} open={this.state.open} />
            </Container>
        );
    }

}

export default MyProtfolio;