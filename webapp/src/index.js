import { id as pluginId } from './manifest';
import CreepyLeftSidebarHeader from './creepy'
export default class Plugin {

    async initialize(registry) {
        registry.registerLeftSidebarHeaderComponent(CreepyLeftSidebarHeader);


    }
}

window.registerPlugin(pluginId, new Plugin());
