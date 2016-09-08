import React, { Component } from 'react'
import ButtonGrid from './middleComponents/ButtonGrid'
import MakeButtons from './middleComponents/buttons/MakeButtons'
import ModelButtons from './middleComponents/buttons/ModelButtons'
import YearButtons from './middleComponents/buttons/YearButtons'
import TrimButtons from './middleComponents/buttons/TrimButtons'
import config from '!json!../../config' // API keys and URLs, this will not be used in production.

class Middle extends Component {

    fetchModels(event) {
        this.props.modelActions.fetchModels(event.target.value)
    }

    fetchYears(event) {
        this.props.yearActions.fetchYears(event.target.value)
    }

    fetchTrims(event) {
        let make = this.props.models.selectedMake
        let model = this.props.years.selectedModel
        let selectedYear = event.target.value
        let trimUrl = config.vehicleUrlStart
                        + [make, model, selectedYear].join('/')
                        + config.trimUrlEnding
                        + config.apiKey

        this.props.trimActions.fetchTrims(trimUrl)

    }

    chooseTrim(event) {
        console.log(event.target)
    }

    render() {
        console.log(this.props)
        // Display the current page
        switch(this.props.page.currentPage) {
            case 'makes':
                return(
                    <div>
                       <ButtonGrid >
                           <MakeButtons makes={this.props.makes.makes} fetchModels={this.fetchModels.bind(this)}/>
                       </ButtonGrid>
                    </div>
                )
            
            case 'models':
                return(
                    <div>
                        <ButtonGrid>
                            <ModelButtons models={this.props.models.models} fetchYears={this.fetchYears.bind(this)} />
                        </ButtonGrid>
                    </div>
                )

            case 'years':
                return(
                    <div>
                        <ButtonGrid>
                            <YearButtons years={this.props.years.years} fetchTrims={this.fetchTrims.bind(this)} />
                        </ButtonGrid>
                    </div>
                )

            case 'trims':
                return(
                    <div>
                        <ButtonGrid>
                            <TrimButtons trims={this.props.trims.trims} chooseTrim={this.chooseTrim.bind(this)} />
                        </ButtonGrid>
                    </div>
                )

            default:
                return(
                    <div className="loading">
                        <p>Loading ...</p>
                    </div>
                )
        }
    }
}

export default Middle