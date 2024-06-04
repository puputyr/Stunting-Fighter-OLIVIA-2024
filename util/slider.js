


class Slider {
    constructor(game) {
        this._this = game
    }

    getAll() {
        return this
    }
    createSlider({ shadow, object, arrowRight, arrowLeft, x, y
    }) {

        this.object = object
        this.object_now = object[1]
        this.index_object = this.object.indexOf(this.object_now)
        this.arrowLeft = arrowLeft
        this.arrowRight = arrowRight
        let kiri = this._this.add.image(480 - 350, 1200 - 100 - 20, this.arrowLeft);
        let kanan = this._this.add.image(480 + 350, 1200 - 100 - 20, this.arrowRight);
        this._shadow = this._this.add.image(480, 1650 + 100 - 40 + 10 - 150, shadow);
        // this._shadow.setScale(0)
        this._shadow.visible = false
        this.object_now.visible = true
        this._this.tweens.add({
            targets: this.object_now,
            scaleX: 2.2,
            scaleY: 2.2,
            duration: 80,
            ease: 'Power1'
        });
        this._this.tweens.add({
            targets: this._shadow,
            scaleX: 2.5,
            scaleY: 2.5,
            duration: 80,
            ease: 'Power1'
        });

        kiri.setScale(2.7);
        kanan.setScale(2.7);
        kanan.setInteractive();
        kiri.setInteractive();
        kiri.on('pointerdown', function () {
            this._this.tweens.add({
                targets: kiri,
                scaleX: 2.5,
                scaleY: 2.5,
                duration: 100,
                ease: 'Power1'
            });
            this.object_now.visible = false
            this._shadow.visible = false
        }, this);

        kiri.on('pointerup', function () {
            this._this.tweens.add({
                targets: kiri,
                scaleX: 2.7,
                scaleY: 2.7,
                duration: 100,
                ease: 'Power1'
            });
            // console.log(this)
            // console.log(this)
            this.index_object--
            this.object_now = this.object[this.index_object]
            console.log(this.index_object)
            this.object_now.setScale(0)
            this.object_now.visible = true
            this._shadow.visible = true
            this._this.tweens.add({
                targets: this.object_now,
                scaleX: 2.2,
                scaleY: 2.2,
                duration: 80,
                ease: 'Power1'
            });
            this._this.tweens.add({
                targets: this._shadow,
                scaleX: 2.5,
                scaleY: 2.5,
                duration: 80,
                ease: 'Power1'
            });
            if (this.index_object == 0) {
                kiri.visible = false
            } else {
                kiri.visible = true
            }
            if (this.index_object + 1 == this.object.length) {
                kanan.visible = false
            } else {
                kanan.visible = true
            }

        }, this);

        kiri.on('pointerout', function () {
            this._this.tweens.add({
                targets: kiri,
                scaleX: 2.7,
                scaleY: 2.7,
                duration: 100,
                ease: 'Power1'
            });
        }, this);


        kanan.on('pointerdown', function () {
            this._this.tweens.add({
                targets: kanan,
                scaleX: 2.5,
                scaleY: 2.5,
                duration: 100,
                ease: 'Power1'
            });
            this.object_now.visible = false
            this._shadow.visible = false
        }, this);

        kanan.on('pointerup', function () {
            this._this.tweens.add({
                targets: kanan,
                scaleX: 2.7,
                scaleY: 2.7,
                duration: 100,
                ease: 'Power1'
            });
            
            this.index_object++
            this.object_now = this.object[this.index_object]
            console.log(this.index_object)
            this.object_now.setScale(0)
            this._shadow.visible = true
            this.object_now.visible = true
            this._this.tweens.add({
                targets: this.object_now,
                scaleX: 2.2,
                scaleY: 2.2,
                duration: 100,
                ease: 'Power1'
            });
            this._this.tweens.add({
                targets: this._shadow,
                scaleX: 2.5,
                scaleY: 2.5,
                duration: 80,
                ease: 'Power1'
            });
            if (this.index_object == 0) {
                kiri.visible = false
            } else {
                kiri.visible = true
            }
            if (this.index_object == this.object.length - 1) {
                kanan.visible = false
            } else {
                kanan.visible = true
            }
        }, this);

        kanan.on('pointerout', function () {
            this._this.tweens.add({
                targets: kanan,
                scaleX: 2.7,
                scaleY: 2.7,
                duration: 100,
                ease: 'Power1'
            });
        }, this);


    }
    getCurrentIndex() {
        return this.index_object
    }
    getCurrentObject() {
        return this.object_now
    }
}

