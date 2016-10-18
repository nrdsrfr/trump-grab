var game = new Phaser.Game(1000, 900, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var arm ;

function preload() {
    game.load.image('trump','trump.png');
    game.load.image('arm','arm.png');
    game.load.image('woman','woman.png');
}

function create() {
    var trump = game.add.sprite(200,0,'trump');
    var woman = game.add.sprite(50,-100,'woman');
    
    arm = game.add.sprite(400,580,'arm');
    arm.anchor.set(0.8,1);
    arm.angle = -80;
    arm.inputEnabled = true;
    arm.events.onInputDown.add(grab, this);

}

function grab(){
    tween = game.add.tween(arm).to( {angle:-25}, 500, Phaser.Easing.Quadratic.InOut, true, 0,-1);
    tween.yoyo(true,1000);
}


function update() {
}