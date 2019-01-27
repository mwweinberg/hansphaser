var config = {
    type: Phaser.AUTO,
    parent: 'canvas-container',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var y = 100;

var game = new Phaser.Game(config);

var varCountOneText;
var varCountTwoText;
var totalText;

var horse;
var loopTimes;

var variableNumber = 10;

function preload ()
{
    //loads all of the assets in the order they are listed
    //assigns a variable name and then indicates location

    this.load.image('plus', 'assets/plus_green.png');
    this.load.image('minus', 'assets/minus_green.png');
    this.load.image('hans4', 'assets/hans4.jpg');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create ()
{

    //background image
    this.add.image(400, 300, 'hans4');

    //this is the button section
    //this variable holds the number of clicks
    let varCountOne = 0;
    let varCountTwo = 0;
    let totalTextValue = 0;

    //these are the buttons
    const varCountOneUpButton = this.add.image(250, 250, 'plus');
    varCountOneUpButton.setInteractive()
    const varCountOneDownButton = this.add.image(250, 350, 'minus');
    varCountOneDownButton.setInteractive()

    const varCountTwoUpButton = this.add.image(550, 250, 'plus');
    varCountTwoUpButton.setInteractive()
    const varCountTwoDownButton = this.add.image(550, 350, 'minus');
    varCountTwoDownButton.setInteractive()

    const totalButton = this.add.text(300, 400, 'horse action', {fill: '#0f0', fontSize: '32px' });
    totalButton.setInteractive()

    //this is the total
    const totalText = this.add.text(400, 550, '', {fill: '#0f0', fontSize: '32px' });

    //this is the display variable
    varCountOneText = this.add.text(210, 80, varCountOne, { fontSize: '128px'});
    varCountTwoText = this.add.text(510, 80, varCountTwo, { fontSize: '128px'});

    //when you click the button..
    varCountOneUpButton.on('pointerdown', function () {
        //increate the value of varCountOne
        varCountOne = ++varCountOne ;
        //update the text for varCountOneText
        varCountOneText.setText(varCountOne);
    });
    varCountOneDownButton.on('pointerdown', function () {
        varCountOne = --varCountOne ;
        varCountOneText.setText(varCountOne);
    });

    varCountTwoUpButton.on('pointerdown', function () {
        varCountTwo = ++varCountTwo ;
        varCountTwoText.setText(varCountTwo);
    });
    varCountTwoDownButton.on('pointerdown', function () {
        varCountTwo = --varCountTwo ;
        varCountTwoText.setText(varCountTwo);
    });

    totalButton.on('pointerdown', function () {
        loopTimes = varCountOne + varCountTwo;
        totalText.setText(loopTimes);
        var i = 0;
        horse.anims.play('numerate');

    });


    //this puts the sprite on the screen
    horse = this.add.sprite(300, 450, 'dude');

    //this is the animation
    this.anims.create({
        key: 'numerate',
        frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
        frameRate: 10,
        //this reference to loopTimes is another failed attempt to control the looping
        repeat: variableNumber
    });

}
