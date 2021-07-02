import React from 'react'
import { Paper, TextField } from "@material-ui/core";
class Searchbar extends React.Component {

    state = {
        searchTerm: "",
        setdata:false
    }
    handelchange =(event)=>{
        
        this.setState({searchTerm:event.target.value});
        
    }
    handelsubmit=(event)=>{
        const{searchTerm}=this.state;
        const{onFormSubmit}=this.props;
        
        onFormSubmit(searchTerm);
        event.preventDefault();

    }
    


    render() {
        return (
            <Paper elevation={6} style={{ padding: "10px" }}>
                <form onSubmit={this.handelsubmit}>
                    <TextField fullWidth label="search..." onChange={this.handelchange} />
                </form>
            </Paper>
        )
    }
}

export default Searchbar;
