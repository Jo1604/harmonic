import { Group } from './three.min.js';
import { GLTFLoader } from './GLTFLoader.js';
import MODEL from './MainScene.gltf';

class MainScene extends Group {
    constructor() {
        // Call parent Group() constructor
        super();

        const loader = new GLTFLoader();

        this.name = 'MainScene';

        loader.load(MODEL, (gltf) => {
            this.add(gltf.scene);
        });
    }
}

export {MainScene};
