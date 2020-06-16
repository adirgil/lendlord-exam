import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

function Filter(props) {

    const filterHandler = (e) => {
        let newData = props.data.filter(asset => {
            return asset.PropertyAddress.startsWith(e.target.value)
        })
        props.setData(newData)
    }

    return (
        <div style={{ display: "flex" }}>
            <TextField size="small" variant="outlined"
                placeholder="filter…"
                onChange={filterHandler}
                InputProps={{
                    endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>
                }}
            />
        </div>
    );
}

export default Filter;