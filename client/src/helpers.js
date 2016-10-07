export let setEngineName = (specs) => {

    let notAvailable = ''

    // Display 'not available' if the data is undefined
    let displacement = specs.specs.engine.size
    ? specs.specs.engine.size
    : notAvailable

    let engineConfig = specs.specs.engine.configuration 
    ? specs.specs.engine.configuration 
    : notAvailable

    let cylinder = specs.specs.engine.cylinder 
    ? specs.specs.engine.cylinder 
    : notAvailable

    let compressorType = specs.specs.engine.compressorType 
    ? specs.specs.engine.compressorType 
    : notAvailable

    let engineName = [
        displacement + 'L',
        engineConfig,
        cylinder,
    ].join(' ')
    + ' ('
    + compressorType
    + ')'

    return engineName
}

export let setHorsepowerAndTorque = (specs) => {

    let notAvailable = ''

    let horsepower = specs.specs.engine.horsepower
    ? specs.specs.engine.horsepower
    : notAvailable

    let hpRpm = specs.specs.engine.rpm.horsepower
    ? specs.specs.engine.rpm.horsepower
    : notAvailable

    let torque = specs.specs.engine.torque 
    ? specs.specs.engine.torque
    : notAvailable

    let tqRpm = specs.specs.engine.rpm.torque
    ? specs.specs.engine.rpm.torque
    : notAvailable

    return [
        horsepower + ' @ ' + hpRpm,
        torque + ' @ ' + tqRpm
    ]

}