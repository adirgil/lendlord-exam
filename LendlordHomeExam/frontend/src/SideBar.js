import 'date-fns';
import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { KeyboardDatePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import './SideBar.css'



class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            selectedDate: new Date(),
            address: "",
            propertyValue: 0,
            mortageBalance: 0
        }
    }

    handleAddressChange = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    handleDateChange = (date) => {
        this.setState({
            selectedDate: date
        })
    }

    handleValueChange = (e) => {
        this.setState({
            propertyValue: parseInt(e.target.value)
        })
    }

    handleBalanceChange = (e) => {
        this.setState({
            mortageBalance: parseInt(e.target.value)
        })
    }

    customSubmit = async (e) => {
        e.preventDefault()
        let obj = {
            date: this.state.selectedDate,
            address: this.state.address,
            value: this.state.propertyValue,
            balance: this.state.mortageBalance
        }
        await axios.post('http://localhost:8000/assets', obj)
        this.props.updateData()
        this.props.handleDrawerClose()
    }

    render() {
        return (
            <Drawer className="drawer" variant="persistent" anchor={'right'} open={this.props.open}>
                <form className="form" onSubmit={e => this.customSubmit(e)}>
                    <div className="sideBarHeader">
                        <div><b>Add Property</b></div>
                        <div className="btnsDiv">
                            <Button style={{backgroundColor: "#DCDCDC", marginRight:"2%"}} onClick={this.props.handleDrawerClose}>cancel</Button>
                            <Button style={{backgroundColor: "#FF8C00", color:"white"}}type="submit">done</Button>
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <label>PropertyAddress</label>
                        <TextField size="small" variant="outlined" onChange={this.handleAddressChange} />
                    </div>
                    <div className="input-wrapper">
                        <label>Date Of Purchase</label>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                size="small"
                                variant="inline"
                                inputVariant="outlined"
                                format="MM/dd/yyyy"
                                value={this.state.selectedDate}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>

                    </div>
                    <div className="input-wrapper">
                        <label>Property Value</label>
                        <TextField size="small" variant="outlined" onChange={this.handleValueChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">£</InputAdornment>,
                            }}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label>Mortgage Balance</label>
                        <TextField size="small" variant="outlined" onChange={this.handleBalanceChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">£</InputAdornment>,
                            }}
                        />
                    </div>
                </form>
            </Drawer>
        );
    }

}

export default SideBar;