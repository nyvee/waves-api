import { IRequestDefaults, IWavesConfig } from '../interfaces';


const config: IWavesConfig = Object.create(null);

export default {

    getNetworkByte(): number {
        return config.networkByte;
    },

    getNodeAddress(): string {
        return config.nodeAddress;
    },

    getMatcherAddress(): string {
        return config.matcherAddress;
    },

    getMinimumSeedLength(): number {
        return config.minimumSeedLength;
    },

    getRequestDefaults(): IRequestDefaults {
        return { ...config.requestDefaults };
    },

    set(newConfig: Partial<IWavesConfig>) {
        Object.keys(newConfig).forEach((key) => {
            config[key] = newConfig[key];
        });
    }

}
