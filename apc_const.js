module.exports = {
    manufacturer: 'APC',

    paramList: {
        "1.3.6.1.4.1.318.1.1.1.1.1.1.0": "ups.model",
        "1.3.6.1.4.1.318.1.1.1.1.2.3.0": "ups.serial",
        "1.3.6.1.4.1.318.1.1.1.3.3.1.0": "input.voltage",
        "1.3.6.1.4.1.318.1.1.1.3.3.2.0": "input.voltage.maximum",
        "1.3.6.1.4.1.318.1.1.1.3.3.3.0": "input.voltage.minimum",
        "1.3.6.1.4.1.318.1.1.1.3.3.4.0": "input.frequency",
        "1.3.6.1.4.1.318.1.1.1.4.3.3.0": "ups.load",
        "1.3.6.1.4.1.318.1.1.1.2.3.1.0": "battery.charge",
        "1.3.6.1.4.1.318.1.1.1.2.3.4.0": "battery.voltage",
        "1.3.6.1.4.1.318.1.1.1.2.2.7.0": "battery.voltage.nominal",
        "1.3.6.1.4.1.318.1.1.1.2.3.5.0": "battery.current",
        "1.3.6.1.4.1.318.1.1.1.1.1.2.0": "ups.id",
        "1.3.6.1.4.1.318.1.1.1.4.3.1.0": "output.voltage",
        "1.3.6.1.4.1.318.1.1.1.4.3.2.0": "output.frequency",
        "1.3.6.1.4.1.318.1.1.1.4.3.4.0": "output.current",
        "1.3.6.1.4.1.318.1.1.1.5.2.1.0": "output.voltage.nominal"
    },

    cmdList: {
        "load.off": "1.3.6.1.4.1.318.1.1.1.6.2.1.0",
        "load.on": "1.3.6.1.4.1.318.1.1.1.6.2.6.0",
        "shutdown.stayoff": "1.3.6.1.4.1.318.1.1.1.6.2.1.0",
        "shutdown.return": "1.3.6.1.4.1.318.1.1.1.6.1.1.0",
        "test.failure.start": "1.3.6.1.4.1.318.1.1.1.6.2.4.0",
        "test.panel.start": "1.3.6.1.4.1.318.1.1.1.6.2.5.0",
        "bypass.start": "1.3.6.1.4.1.318.1.1.1.6.2.7.0",
        "bypass.stop": "1.3.6.1.4.1.318.1.1.1.6.2.7.0",
        "test.battery.start": "1.3.6.1.4.1.318.1.1.1.7.2.2.0",
        "calibrate.start": "1.3.6.1.4.1.318.1.1.1.7.2.5.0",
        "calibrate.stop": "1.3.6.1.4.1.318.1.1.1.7.2.5.0",
        "reset.input.minmax": "1.3.6.1.4.1.318.1.1.1.9.1.1.0"
    }
};