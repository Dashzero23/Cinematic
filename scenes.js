class UnderTale1 extends Phaser.Scene {
    constructor() {
        super({key: "UnderTale1"});
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("Under1", "image/Undertale1.png");
        this.load.image("bubble", "image/speech.png");
        this.load.audio("undertale", "audio/undertale.mp3");
    }    

    create() {
        let centerX = this.cameras.main.width / 2;
        this.isAnimationFinished = false;

        let undertale = this.sound.add("undertale", {loop : true, autoPlay: true});
        undertale.setVolume(1);
        undertale.play();
        
        let under1 = this.add.sprite(centerX, 200, "Under1");
        under1.alpha = 0;
        this.tweens.add({
          targets: under1,
          alpha: 1,
          duration: 1000,
        });

        let bub = this.add.sprite(800, 50, "bubble");
        bub.setScale(0.75);
        bub.alpha = 0;
        this.tweens.add({
          targets: bub,
          alpha: 1,
          duration: 1000,
        });
      
        let speech1 = this.add.text(805, 40, "I'm not bald,\nthe artist is lazy", {
            fontFamily: "myFONT",
            fontSize: "28px",
            fill: "#000000",
        }).setOrigin(0.5);

        speech1.alpha = 0;

        this.tweens.add({
          targets: speech1,
          alpha: 1,
          duration:3000,
        });

        let text1 = this.add.text(centerX, 450, "", {
            fontFamily: "myFONT",
            fontSize: "48px",
            fill: "#ffffff",
        }).setOrigin(0.5);
        
        let index = 0;
        
        this.time.addEvent({
            delay: 80,
            repeat: "Long ago, two races\nruled over Earth:\nHUMANS and MONSTERS.".length - 1,
            callback: () => {
                text1.text += "Long ago, two races\nruled over Earth:\nHUMANS and MONSTERS."[index];
                index++;
            },
            callbackScope: this,
        });
        
        this.time.addEvent({
            delay: 80 * ("Long ago, two races\nruled over Earth:\nHUMANS and MONSTERS.".length - 1),
            callback: () => {
                this.onAnimationComplete();
            },
            callbackScope: this
        });
        
    }

    onAnimationComplete() {
        this.isAnimationFinished = true;
    }

    update() {
        if (this.input.activePointer.leftButtonDown() && this.isAnimationFinished) {
          this.scene.start("UnderTale2");
        }
    }
}  


class UnderTale2 extends Phaser.Scene {
    constructor() {
        super({key: "UnderTale2"});
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("Under2", "image/Undertale2.png");
    }    

    create() {
        let centerX = this.cameras.main.width / 2;
        this.isAnimationFinished = false;

        let under2 = this.add.sprite(centerX, 200, "Under2");
        under2.alpha = 0;
        this.tweens.add({
          targets: under2,
          alpha: 1,
          duration: 1000,
        });

        let text2 = this.add.text(centerX, 450, "", {
            fontFamily: "myFONT",
            fontSize: "48px",
            fill: "#ffffff",
        }).setOrigin(0.5);
        
        let index = 0;
        
        this.time.addEvent({
            delay: 80,
            repeat: "One day, war broke\nout between the two\nraces.".length - 1,
            callback: () => {
                text2.text += "One day, war broke\nout between the two\nraces."[index];
                index++;
            },
            callbackScope: this,
        });

        this.time.addEvent({
            delay: 80 * ("One day, war broke\nout between the two\nraces.".length - 1),
            callback: () => {
                this.onAnimationComplete();
            },
            callbackScope: this
        });
    }

    onAnimationComplete() {
        this.isAnimationFinished = true;
    }

    update() {
        if (this.input.activePointer.leftButtonDown() && this.isAnimationFinished) {
          this.scene.start("UnderTale3");
        }
    }
}

class UnderTale3 extends Phaser.Scene {
    constructor() {
        super({key: "UnderTale3"});
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("Under3", "image/Undertale3.png");
        this.load.image("bubble", "image/speech.png");
    }    

    create() {
        let centerX = this.cameras.main.width / 2;
        this.isAnimationFinished = false;

        let under3 = this.add.sprite(centerX, 200, "Under3");
        under3.alpha = 0;
        this.tweens.add({
          targets: under3,
          alpha: 1,
          duration: 1000,
        });

        let bub = this.add.sprite(100, 520, "bubble");
        bub.setScale(0.75);
        bub.alpha = 0;
        this.tweens.add({
          targets: bub,
          alpha: 1,
          duration: 1000,
        });
      
        let speech1 = this.add.text(100, 500, "Isn't this\nUndertale?", {
            fontFamily: "myFONT",
            fontSize: "28px",
            fill: "#000000",
        }).setOrigin(0.5);

        let text3 = this.add.text(centerX, 450, "", {
            fontFamily: "myFONT",
            fontSize: "48px",
            fill: "#ffffff",
        }).setOrigin(0.5);
        
        let index = 0;
        
        this.time.addEvent({
            delay: 80,
            repeat: "After a long battle,\nthe human were\nvictorious.".length - 1,
            callback: () => {
                text3.text += "After a long battle,\nthe human were\nvictorious."[index];
                index++;
            },
            callbackScope: this,
        });

        this.time.addEvent({
            delay: 80 * ("After a long battle,\nthe human were\nvictorious.".length - 1),
            callback: () => {
                this.onAnimationComplete();
            },
            callbackScope: this
        });
    }

    onAnimationComplete() {
        this.isAnimationFinished = true;
    }

    update() {
        if (this.input.activePointer.leftButtonDown() && this.isAnimationFinished) {
          this.scene.start("HoldUp");
        }
    }
}

class HoldUp extends Phaser.Scene {
    constructor() {
        super({key: "HoldUp"});
    }

    preload() {
        this.load.path = "./assets/";
        this.load.audio("holdup", "audio/holdup.mp3");
    }    

    create() {
        let centerX = this.cameras.main.width / 2;
        let centerY = this.cameras.main.height / 2;
        this.isAnimationFinished = false;

        this.sound.stopAll();
        let hold = this.sound.add("holdup", {autoPlay: true});
        hold.setVolume(1);
        hold.play();

        let text4 = this.add.text(centerX, centerY, "", {
            fontFamily: "myFONT",
            fontSize: "48px",
            fill: "#ffffff",
        }).setOrigin(0.5);
        
        let index = 0;
        
        this.time.addEvent({
            delay: 50,
            repeat: "Hold up, wait a minute...\nThis isn't suppose to be Undertale.".length - 1,
            callback: () => {
                text4.text += "Hold up, wait a minute...\nThis isn't suppose to be Undertale."[index];
                index++;
            },
            callbackScope: this,
        });

        this.time.addEvent({
            delay: 50 * ("Hold up, wait a minute...\nThis isn't suppose to be Undertale.".length - 1),
            callback: () => {
                this.onAnimationComplete();
            },
            callbackScope: this
        });
    }

    onAnimationComplete() {
        this.isAnimationFinished = true;
    }

    update() {
        if (this.input.activePointer.leftButtonDown() && this.isAnimationFinished) {
            this.scene.start("HoldUp2");
        }
    } 
}

class HoldUp2 extends Phaser.Scene {
    constructor() {
        super({key: "HoldUp2"});
    }

    preload() {

    }    

    create() {
        let centerX = this.cameras.main.width / 2;
        let centerY = this.cameras.main.height / 2;
        this.isAnimationFinished = false;

        let text5 = this.add.text(centerX, centerY, "", {
            fontFamily: "myFONT",
            fontSize: "48px",
            fill: "#ffffff",
        }).setOrigin(0.5);
        
        let index2 = 0;
        
        this.time.addEvent({
            delay: 50,
            repeat: "The monsters won, now you go\nkill them to save human.".length - 1,
            callback: () => {
                text5.text += "The monsters won, now you go\nkill them to save human."[index2];
                index2++;
            },
            callbackScope: this,
        });

        this.time.addEvent({
            delay: 50 * ("The monsters won, now you go\nkill them to save human.".length - 1),
            callback: () => {
                this.onAnimationComplete();
            },
            callbackScope: this
        });
    }

    onAnimationComplete() {
        this.isAnimationFinished = true;
    }

    update() {
        let rect = this.add.rectangle(this.cameras.main.width / 2, this.cameras.main.height / 2, this.cameras.main.width, this.cameras.main.height, 0xffffff);

        // Set its alpha value to 0
        rect.setAlpha(0);

        // Add a tween to gradually increase its alpha value to 1
        if (this.input.activePointer.leftButtonDown() && this.isAnimationFinished) {
            this.tweens.add({
                targets: rect,
                alpha: 1,
                duration: 5000, // duration in milliseconds
                onComplete: () => {
                    // Once the tween is complete, start the next scene
                    this.scene.start("Menu");
                }
            });
        }
        
    } 
}

class Menu extends Phaser.Scene {
    constructor() {
        super({key: "Menu"});
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("title", "image/Title.png");
        this.load.image("sword", "image/sword.png");
        this.load.image("bg", "image/background.png");
    }    

    create() {
        this.cameras.main.fadeIn(1000, 255, 255, 255);
        let bg = this.add.image(0, 0, 'bg').setOrigin(0);

        let rect1 = this.add.graphics();
        rect1.fillStyle(0x000000, 1);
        rect1.fillRect(780, 510, 250, 60);

        let rect2 = this.add.graphics();
        rect2.fillStyle(0x000000, 1);
        rect2.fillRect(780, 400, 250, 60);

        let rect3 = this.add.graphics();
        rect3.fillStyle(0x000000, 1);
        rect3.fillRect(780, 290, 250, 60);

        let menu = this.add.text(900, 430, "PLAY\n\nSETTING\n\nNOT YET", {
            fontFamily: "myFONT",
            fontSize: "50px",
            fill: "#ffffff",
        }).setOrigin(0.5);

        let title = this.add.sprite(870, 95, "title");

        let sword = this.add.image(-100, this.cameras.main.centerY, "sword");

        // Add a tween to move it to the center of the screen
        this.tweens.add({
            targets: sword,
            x: 400,
            duration: 1000, // duration in milliseconds
            ease: 'Power1',
        });
    }
}
