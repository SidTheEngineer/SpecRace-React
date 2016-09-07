import React, { Component } from 'react'

class YearButtons extends Component {

    listYears() {
        let yearsNewToOld = this.props.years.reverse()
        return(
            <div>   
                {
                    yearsNewToOld.map((year) => {
                        return(
                            <div key={year.year} className="col-xs-4 col-sm-3 col-md-2">
                                <button value={year.year} onClick={this.props.fetchTrims}>{year.year}</button>
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