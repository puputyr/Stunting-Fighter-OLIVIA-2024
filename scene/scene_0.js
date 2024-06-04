let backgroundImage;
let button;
let bayi;
let start;
let shadow;

class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenu' });
    }

    preload() {
        this.load.image("start", "assets/start.png");
        this.load.image("setting", "assets/setting.png");
        this.load.image("bg_0", "assets/background_0.png");
        this.load.image("baby_0", "assets/baby_0.png");
        this.load.image("shadow", "assets/shadow.png");

    }

    create() {
        backgroundImage = this.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'bg_0');
        backgroundImage.setOrigin(0, 0);

        button = this.add.image(150, 200, 'setting');
        button.setScale(3);
        button.setInteractive();
        this.tweens.add({
            targets: button,
            scaleX: 2.6,
            scaleY: 2.6,
            duration: 1000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        bayi = this.add.image(480, 1100, "baby_0");
        bayi.setScale(2.5);
        shadow = this.add.image(480, 1600, "shadow");
        shadow.setScale(2.5);

        start = this.add.image(480, 1800, "start");
        start.setScale(2.5);
        start.setInteractive();

        start.on('pointerdown', function () {
            this.tweens.add({
                targets: start,
                scaleX: 2.3,
                scaleY: 2.3,
                duration: 100,
                ease: 'Power1'
            });
        }, this);

        start.on('pointerup', function () {
            this.tweens.add({
                targets: start,
                scaleX: 2.5,
                scaleY: 2.5,
                duration: 100,
                ease: 'Power1'
            });
            this.scene.start('GameScene');
        }, this);

        start.on('pointerout', function () {
            this.tweens.add({
                targets: start,
                scaleX: 2.5,
                scaleY: 2.5,
                duration: 100,
                ease: 'Power1'
            });
        }, this);
    }

    update() {
        backgroundImage.tilePositionY -= 1.2;
    }
}