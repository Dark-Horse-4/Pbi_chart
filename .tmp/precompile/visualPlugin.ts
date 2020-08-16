import { Visual } from "../../src/Chart";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var testchart7ABF92F98E1C4872A42B1383A838A82A_DEBUG: IVisualPlugin = {
    name: 'testchart7ABF92F98E1C4872A42B1383A838A82A_DEBUG',
    displayName: 'testchart',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["testchart7ABF92F98E1C4872A42B1383A838A82A_DEBUG"] = testchart7ABF92F98E1C4872A42B1383A838A82A_DEBUG;
}

export default testchart7ABF92F98E1C4872A42B1383A838A82A_DEBUG;