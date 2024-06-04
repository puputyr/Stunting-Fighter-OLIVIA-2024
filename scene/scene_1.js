// let slider;

// class GameScene extends Phaser.Scene {
// constructor() {
//     super({ key: 'GameScene' });
// }

// preload() {
//     this.load.image("kanan", "assets/kanan.png");
//     this.load.image("kiri", "assets/kiri.png");
//     this.load.image("baby_1", "assets/baby_1.png");
//     this.load.image("baby_0", "assets/baby_0.png");
//     this.load.image("shadow", "assets/shadow.png");
//     slider = new phaseSlider(game);
// }

//     create() {
//         // Set background color to white
//         this.cameras.main.setBackgroundColor('#ffffff');

// let char1 = this.add.image(0, 0, "baby_1");
// let char2 = this.add.image(0, 0, "baby_0");

//         // let group1 = this.add.group();
//         // group1.width = 500;
//         // group1.height = 400;
//         // char1.setScale(0.5, 0.5);
//         // char1.x = 500 / 2 - char1.width / 2;
//         // char1.y = 100;

//         // //////////
//         // let group2 = this.add.group();
//         // group2.width = 500;
//         // group2.height = 400;
//         // char2.setScale(0.5, 0.5);
//         // char2.x = 500 / 2 - char2.width / 2;
//         // char2.y = 100;
//         // ///////////





//         // slider.createSlider({
//         //     customSliderBG: false,
//         //     sliderBGAlpha: 0.8,
//         //     x: 500,
//         //     y: 500,
//         //     customHandleNext: "kanan",
//         //     customHandlePrev: "kiri",
//         //     objects: [char1, char2],
//         //     onNextCallback: function () {
//         //        console.log("next");
//         //     },
//         //     onPrevCallback: function () {
//         //        console.log("prev")
//         //     }
//         // });

//         slider.createSlider({
//             customSliderBG: false,
//             mode: "horizontal",
//             sliderBGAlpha: 0.8,
//             x: 500,
//             y: 500,
//             objects: [char1, char2]
//         });



//         // let btn = this.add.image((game.width / 2 - 80 / 2), (game.height / 2 - 80 / 2) + 180, "accept");
//         // btn.inputEnabled = true;
//         // btn.events.onInputDown.add(function (e, pointer) {
//         //     let index = slider.getCurrentIndex();
//         //     let text = this.add.text(0, 0, "You selected -> ", {
//         //         fontSize: 22,
//         //         fill: "#1e1e1e"
//         //     });
//         //     text.updateText();

//         //     text.x = game.width / 2 - text.width / 2;
//         //     text.y = 80;

//         //     let img = game.add.image(text.x + text.width + 10, text.y - 30, "char" + (index + 1));
//         //     img.scale.setTo(0.2, 0.2);

//         // }, this);
//     }

//     update() {
//         // Game logic for the game scene
//     }
// }





//   2
let slider;
let pilih;
let kiri;
let kanan;
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.image("pilih", "assets/pilih.png");
        this.load.image("kanan", "assets/kanan.png");
        this.load.image("kiri", "assets/kiri.png");
        this.load.image("baby_1", "assets/baby_1.png");
        this.load.image("baby_0", "assets/baby_0.png");
        this.load.image("shadow", "assets/shadow.png");
        slider = new Slider(this)

    }
    create() {
        this.cameras.main.setBackgroundColor('#F5F5F5');

        let char1 = this.add.image(480, 1200 - 10 - 150, "baby_1");
        let char2 = this.add.image(480, 1200 - 10 - 150, "baby_0");
        let char3 = this.add.image(480, 1200 - 10 - 150, "baby_1");
        char1.visible = false
        char2.visible = false
        char3.visible = false

        // let object = [char1, char2]
        // let object_now = object[1]
        // let index_object = object.indexOf(object_now)
        // let kiri = this.add.image(480 - 350, 1200 - 100, 'pilij');
        // let kanan = this.add.image(480 + 350, 1200 - 100, 'kanan');
        // let _shadow = this.add.image(480, 1650 - 100, 'shadow');
        // _shadow.setScale(2.2);
        // kiri.setScale(2.7);
        // kanan.setScale(2.7);

        // if (object.indexOf(object_now) == 0) {
        //     kiri.visible = false
        // }
        // if (object.indexOf(object_now) == object.length - 1) {
        //     kanan.visible = false
        // }
        pilih = this.add.image(480, 1800, "pilih");
        pilih.setScale(2.3)
        pilih.setInteractive();
        slider.createSlider({
            object: [char1, char2, char3, char2, char1, char2],
            arrowRight: "kanan",
            arrowLeft: "kiri",
            shadow: "shadow"
        })
        pilih.on('pointerdown', function () {
            this.tweens.add({
                targets: pilih,
                scaleX: 2.1,
                scaleY: 2.1,
                duration: 100,
                ease: 'Power1'
            });
        }, this);

        pilih.on('pointerup', function () {
            this.tweens.add({
                targets: pilih,
                scaleX: 2.3, // Mengembalikan ukuran tombol ke nilai semula
                scaleY: 2.3, // Mengembalikan ukuran tombol ke nilai semula
                duration: 100,
                ease: 'Power1',
                onComplete: () => {
                    console.log('mulaiii');
                }
            });
            console.log(slider.getCurrentIndex())
        }, this);

        pilih.on('pointerout', function () {
            this.tweens.add({
                targets: pilih,
                scaleX: 2.3,
                scaleY: 2.3,
                duration: 100,
                ease: 'Power1'
            });
        }, this);
        // bayi = this.add.image(480, 1200 - 100, "baby_0");
        // bayi.setScale(2.2);
        // shadow = this.add.image(480, 1650 - 100, "shadow");
        // shadow.setScale(2.2);


        // kiri = this.add.image(480-350, 1200 - 100, "kiri");
        // kiri.setScale(2.7);
        // kanan = this.add.image(480+350, 1200 - 100, "kanan");
        // kanan.setScale(2.7);
        // this.tweens.add({
        //     targets: kanan,
        //     scaleX: 2.8,
        //     scaleY: 2.8,
        //     yoyo: true,
        //     repeat: -1
        // });
        // this.tweens.add({
        //     targets: kiri,
        //     scaleX: 2.8,
        //     scaleY: 2.8,
        //     yoyo: true,
        //     repeat: -1
        // });


        // pilih = this.add.image(480, 1800, "pilih");
        // pilih.setScale(2.2);
        // pilih.setInteractive();
        // pilih.on('pointerdown', function () {
        //     this.tweens.add({
        //         targets: pilih,
        //         scaleX: 2.2,
        //         scaleY: 2.2,
        //         duration: 100,
        //         ease: 'Power1'
        //     });
        // }, this);

        // pilih.on('pointerup', function () {
        //     this.tweens.add({
        //         targets: pilih,
        //         scaleX: 2.3, // Mengembalikan ukuran tombol ke nilai semula
        //         scaleY: 2.3, // Mengembalikan ukuran tombol ke nilai semula
        //         duration: 100,
        //         ease: 'Power1',
        //         onComplete: () => {
        //             console.log('mulaiii');
        //         }
        //     });
        // }, this);

        // pilih.on('pointerout', function () {
        //     this.tweens.add({
        //         targets: pilih,
        //         scaleX: 2.4,
        //         scaleY: 2.4,
        //         duration: 100,
        //         ease: 'Power1'
        //     });
        // }, this);

        // // Tambahkan efek yoyo dan repeat untuk membuat animasi lebih halus
        // this.tweens.add({
        //     targets: pilih,
        //     scaleX: 2.3,
        //     scaleY: 2.3,
        //     yoyo: true,
        //     repeat: -1
        // });





        // console.log(this)
        // console.log(this.game.config.width)
        // var char1 = this.add.image(0, 0, "baby_1");
        // var char2 = this.add.image(0, 0, "baby_1");


        // slider.createSlider({
        //     animationEasing:'Cubic.Out',
        //     customSliderBG: false,
        //     mode: "horizontal",
        //     sliderBGAlpha: 0.8,
        //     x: this.game.config.width / 2 - 500 / 2,
        //     y: this.game.config.height / 2 - 400 / 2,
        //     objects: [char1, char2]
        // });
    }

}
