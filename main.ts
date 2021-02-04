namespace SpriteKind {
    export const altın = SpriteKind.create()
}
game.splash("Arfbot Altın Avında..")
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level1`)
let arfbot = sprites.create(img`
    . . . 9 9 d d d d d d 9 9 . . . 
    . . . 9 d 8 8 8 8 8 8 d 9 . . . 
    . . . d 8 9 8 8 8 8 9 8 d . . . 
    . . . d 8 9 9 8 8 9 9 8 d . . . 
    . . . d 8 8 8 8 8 8 8 8 d . . . 
    . . . d 8 8 8 9 9 8 8 8 d . . . 
    . . . d 8 9 8 8 8 8 9 8 d . . . 
    . . . . d 8 9 9 9 9 8 d . . . . 
    . . . . . d d d d d d . . . . . 
    . . d d d d 9 9 9 9 d d d d . . 
    . . d . . d d 9 9 d d . . d . . 
    . . . . . d d d d d d . . . . . 
    . . . . . d d . . d d . . . . . 
    . . . . . d d . . d d . . . . . 
    . . . . . d d . . d d . . . . . 
    . . . . d d d . d d d . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(arfbot, 100, 0)
scene.cameraFollowSprite(arfbot)
arfbot.setPosition(30, 40)
arfbot.ay = 130
info.changeScoreBy(0)
info.setLife(3)
