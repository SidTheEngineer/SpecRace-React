const NOT_AVAILABLE = ''

export let setEngineName = (specs) => {

    let displacement = specs.specs.engine.size
    ? specs.specs.engine.size
    : NOT_AVAILABLE

    let engineConfig = specs.specs.engine.configuration 
    ? specs.specs.engine.configuration 
    : NOT_AVAILABLE

    let cylinder = specs.specs.engine.cylinder 
    ? specs.specs.engine.cylinder 
    : NOT_AVAILABLE

    let compressorType = specs.specs.engine.compressorType 
    ? specs.specs.engine.compressorType 
    : NOT_AVAILABLE

    let engineName = [
        displacement + 'L',
        engineConfig,
        cylinder,
    ].join(' ')
    + ' ('
    + compressorType
    + ')'

    if(cylinder) {
        return engineName
    }
    else {
        return specs.specs.engine.name
    }

}

export let setHorsepowerAndTorque = (specs) => {

    try {
        var horsepower = specs.specs.engine.horsepower
        ? specs.specs.engine.horsepower
        : NOT_AVAILABLE

        var hpRpm = specs.specs.engine.rpm.horsepower
        ? specs.specs.engine.rpm.horsepower
        : NOT_AVAILABLE

        var torque = specs.specs.engine.torque 
        ? specs.specs.engine.torque
        : NOT_AVAILABLE

        var tqRpm = specs.specs.engine.rpm.torque
        ? specs.specs.engine.rpm.torque
        : NOT_AVAILABLE

        return [
            horsepower + ' @ ' + hpRpm,
            torque + ' @ ' + tqRpm
        ]

    }
    catch(e) {
        return [NOT_AVAILABLE, NOT_AVAILABLE]
    }
    finally {
        console.log("Horsepower or torque were not available for this vehicle.")
    }
    




}

export let setTransmission = (specs) => {

    let numberOfSpeeds = specs.specs.transmission.numberOfSpeeds
    ? specs.specs.transmission.numberOfSpeeds
    : NOT_AVAILABLE                   

    let transmissionType = specs.specs.transmission.transmissionType
    ? specs.specs.transmission.transmissionType
    : NOT_AVAILABLE

    if(numberOfSpeeds) {
        return numberOfSpeeds
        + '-speed '
        + transmissionType.replace('_', ' ').toLowerCase()
    }
    else {
        return NOT_AVAILABLE
    }
}

export let setWeightAndZeroToSixty = (equipment) => {

    // Initially not available.
    let weightAndZeroToSixty = [NOT_AVAILABLE, NOT_AVAILABLE]

    if(equipment) {
        for(let i=0; i<equipment.length; i++) {
            // Get the curb weight of the vehicle.
            if(equipment[i].name === 'Curb Weight') {
                weightAndZeroToSixty[0] = equipment[i].value + ' lbs'
            }
            // Get the 0-60 if available.
            if(equipment[i].name === 'Manufacturer 0 60mph Acceleration Time (seconds)') {
                weightAndZeroToSixty[1] = equipment[i].value + ' seconds'
            }
        }
    }

    return weightAndZeroToSixty
}

export let setDrivetrain = (specs) => {
    return specs.specs.drivenWheels ? specs.specs.drivenWheels : NOT_AVAILABLE
}