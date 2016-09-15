import React, { Component } from 'react'
import { Link } from 'react-router'

class YearButtons extends Component {

    listYears() {
        let yearsNewToOld = this.props.years.reverse()
        return(
            <div>   
                {
                    yearsNewToOld.map((year) => {
                        return(
                            <div key={year.year} className="col-xs-4 col-sm-3 col-md-2">
                                <Link to={`/${this.props.params.make}/${this.props.params.model}/${year.year}`}>
                                    <button value={year.year} onClick={this.props.fetchTrims}>{year.year}</button>
                                </Link>
                            </div>
                        )
                    }) 
                }
            </div>
        )
        
    }

    render() {
        return this.listYears()
    }

}

export default YearButtons