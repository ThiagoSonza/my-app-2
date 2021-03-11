import React from 'react';
import Results from './Results';


class Search extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            showResults: false
        }

        this.onClick = this.onClick.bind(this);
    }
    
    onClick(e) {
        e.preventDefault();
        this.setState({ showResults: true });
    }
    
    render() {
        return(
            <div>
                <input type="submit" value="Search" onClick={this.onClick} />
                { this.state.showResults ? <Results /> : null }
            </div>
        )
        
    };
    
 }

export default Search;