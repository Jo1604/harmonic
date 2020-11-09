import { Scene, Color } from 'three';
import { MainScene } from 'objects';
import { BasicLights } from 'lights';

class SeedScene extends Scene {
    constructor() {
        // Call parent Scene() constructor
        super();

        // Set background to a nice color
        this.background = new Color(0x7ec0ee);

        // Add meshes to scene
        const land = new MainScene();
        //const flower = new Flower(this);
        const lights = new BasicLights();
        this.add(land, lights);
    }
}

export default SeedScene;
