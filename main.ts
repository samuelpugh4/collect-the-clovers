sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.rings, 200)
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 200)
    music.powerDown.play()
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let projectile: Sprite = null
scene.setBackgroundImage(img`
    ...............................................77777777777777777777.............77777777777..............................................55555555555555555555555
    ............................................777777777777777777777777..........77777777777777.............................................55555555555555555555555
    .........................................7777777777777777777777777777........777777777777777.............................................55555555555555555555555
    ........................................777777777777777777777777777777777..777777777777777777............................................55555555555555555555555
    .......................................777777777777777........7777777777777777777777777777777............................................55555555555555555555555
    .......................................777777777777............777777777777777777777...777777............................................55555555555555555555555
    ......................................7777777777...............7777777777777777777.....777777.............................................5555555555555555555555
    ......................................7777777....................7777777777777777.......77777.............................................5555555555555555555555
    ....................................77777777.........................7777777777.........77777.........................555555555555555555555555555555555555555555
    ..................................7777777777...........................7777777..........77777..............................................555555555555555555555
    ...............................777777777777.............................................777777.............................................555555555555555555555
    ..............................7777777777777.............................................777777..............................................55555555555555555555
    ............................777777777777777.............................................777777...............................................5555555555555555555
    ..........................77777777777777................................................777777..................................................5555555555555555
    .........................7777777777777..................................................777777..................................................5.55555555555555
    ........................77777777777......................................................77777.................................................5...5555555555555
    .......................77777777777.......................................................77777................................................5.....555555555555
    .......................777777777........................................................777777...............................................5.......55555555555
    ......................77777777.......................................................777777777..............................................5..........555555555
    ......................7777777........................................................777777777.............................................5.............5555555
    ......................777777.........................................................777777777............................................5..............5.55555
    ......................777777........................................................777777777............................................5...............5..5555
    ......................77777........................................................777777777...........................................55................5......
    ......................777777.....................................................7777777777...........................................5..................5......
    ......................777777...................................................77777777777..........................................55...................5......
    ......................777777...................................................7777777777..........................................5.....................5......
    ......................777777...................................................777777777..........................................5......................5......
    ......................777777..................................................777777777..................................................................5......
    .......................77777.................................777777777.....7777777777....................................................................5......
    .......................77777......................77777777777777777777777777777777777....................................................................5......
    .......................77777................7777777777777777777777777777777777777777.....................................................................5......
    .......................77777................777777777777777777777777777777777777777......................................................................5......
    .......................77777................77777777777777777777777777777777777777.......................................................................5......
    .......................777777...............777777777777777777777e7777777777777.........................................................................55......
    .......................777777.77777.......7777777777777777777777.eeeee...................................................................................5......
    .......................777777.77777...77777777777ee....eeeee.....eeeee..........................................................................................
    .......................777777777777.7777777777777ee....eeeee.....eeeee..........................................................................................
    ........................7777777777777777777777777ee....eeeee.....eeeeee.........................................................................................
    ........................777777777777777777777777eee....eeeee.....eeeeee.........................................................................................
    ........................77777777777777777777777eee.....eeeee.....eeeeee.........................................................................................
    ........................7777777777777777777777eeee.....eeeee.....eeeeee.........................................................................................
    .........................777777777777777.....eeeee.....eeeee......eeeee.........................................................................................
    ............................................eeeeee.....eeeee......eeeee.........................................................................................
    ............................................eeeeee.....eeeee......eeeee.........................................................................................
    ............................................eeeeee.....eeeee......eeeeee........................................................................................
    ............................................eeeeee.....eeeee......eeeeee........................................................................................
    ............................................eeeee......eeeee......eeeeee........................................................................................
    ............................................eeeee......eeeee......eeeeee........................................................................................
    ............................................eeeee......eeeee.......eeeee........................................................................................
    ............................................eeeee......eeeee.......eeeee........................................................................................
    ............................................eeeee......eeeee.......eeeee........................................................................................
    ...........................................eeeeee......eeeee.......eeeeee.......................................................................................
    ...........................................eeeeee......eeeee.......eeeeee.......................................................................................
    ...........................................eeeeee......eeeee.......eeeeee.......................................................................................
    ...........................................eeeeee......eeeee......7eeeeee7777777777777777777777777777777777777777...............................................
    ...........................................eeeee.......eeeee77777777eeeee77777777777777777777777777777777777777777777777........................................
    ...........................................eeeee...7777eeeee77777777eeeee7777777777777777777777777777777777777777777777777777...................................
    ...........................................eeeee777...7eeeee77777777eeeee777777777777777777777777777777777777777777777777777777777..............................
    ........................................77eeeeee7777777eeeee77777777eeeeee77777777777777777777777777777777777777777777777777777777777...........................
    .....................................777..eeeeee7777777eeeee77777777eeeeee7777777777777777777777777777777777777777777777777777777777777.........................
    .............................7777777777777eeeeee7777777eeeee77777777eeeeee777777777777777777777777777777777777777777777777777777777777777.......................
    ..7777777777777777777777777777777777777777eeeeee7777777eeeee77777777eeeeee777777777777777777777777777777777777777777777777777777777777777777....................
    ....................7777777777777777777777eeeee77777777eeeee777777777eeeee77777777777....777777777.7777777777777777777777777777777777777777777..................
    .................777777777777777777777777eeeeee77777777eeeee777777777eeeeee7777777777777777777777.........77777777777777777777777777777777777777................
    ..............777777777777777777777777777eeeeee77777777eeeee777777777eeeeee77777777777777777777777777777777777777777777777777777777777777777777777..............
    ............7777777777777777777777777777eeeeeee........eeeee.........eeeeee777777777777777777777777777777777777777777777777777777777777777777777777.............
    ............7777777777777777777777777777eeeeeee........eeeee......777eeeeee7777777777777777777777777777777777777777777777777777777777777777777777777............
    ............7777777777777777777777777777eeeeee.........eeeee7777777777eeeee77777777777777777777777777777777777777777777777777777777777777777777777777...........
    ............77777777777777777777777777.eeeeeee..7777777eeeee7777777777eeeee777777777777777777777777777777777777777777777777777777777777777777777777777..........
    ...........777777777777777777777777...eeeeeee7777777777eeeee7777777777eeeee77777777777777777777777777777777777777777...77777777777777777777777777777777.........
    .........777777777777777777777777..77eeeeeeee7777777777eeeee7777777777eeeeee777777777777777777777777777777777777777.......777777777777777777777777777777........
    ........7777777777777777777777777777eeeeeeeee7777777777eeeee7777777777eeeeee7777777777777777777777777777777777777............7777777777777777777777777777.......
    .......7777777777777777777777777777eeeeeeeee77777777777eeeee7777777777eeeeeee77777777777777.77777777777777777777777............7..777777777777777777777777......
    .......777777777777777777777777777eeeeeeeee777777777777eeeee7777777777eeeeeeeee77777777777777777777777777777777777777...........7..77777777777777777777777......
    .......77777777..77777777777777777eeeeeeee7777777777777eeeee7777777777eeeeeeeeee777777777777777777777777777777777777777..........77.7.777777777777777777777.....
    ......7777777....77777777777777777eeeeeee77777777777777eeeee77777777777eeeeeeeee7777777777777777777777777777777777777777...........7.7..77777777777777777777....
    .....7.77777.....77777777777777777eeeeee7777777777.777777777777777777777eeeeeeee7777777777777777777777777777777777777777............77...7777777777777777777....
    ...77..777777...777777777777777777eeeee7777777777777777777777777777777777eeeeeee777777777777777777777777777777.777777777............7.7....77777777777777777....
    ..7....777777777777777777777.7777777777777777777777777777777777777777777777eeeee7777777777777777777777777777777..7777777.............77.....777777777.777777....
    .7.....7777777777777777777.777777777777777777777777777777777777777777777777777777777777777777777777777777777777...777777.............7.7....777777777.777777....
    .7.....77777777777777777..77777777777777777777777777777777777777777777777777777777777777777...77777777777777777..7777777.............7.7...77777777777777777....
    7.......777777777777777.7777777777777777777777777777777777777777777777777777777777777777777777..777777777777777777777777.............7.7..777777777777777777....
    7.......77777777777777777777777777777777777777777777777777777777777777777777777777777777777777.....777777777777777777777.............7.7.7777777777777777777....
    7......7777777777777777777777777777777777777777777777777777777777777.............7777777777777....777777777777777777777.............7..77777777777777777777.....
    7......777777777777777777777777.....777777777...............77777777.................777777777..7777777777777777777777............77..77777777777777777777......
    7......77777777777777777777777......7777777.................777777777...............777777777777777777777777777777777............7...77777777777777777777.......
    7......777777777777777777777.7......777777..................77777777777...........7777777777777777777777777777777777...........77...77777777777777777777........
    .77....77777..777777777777777.7.....77777777.................777777777777......77777777777777777777777777777777777..........777....77777777777777777777.........
    ...77..777777..7777777777777777.....7777777777................777777777777..7777777777777777777777777777777777777.......7777......77777777777777777777..........
    .....7.777777...77777777777777777...77777777777777..............777777777777777777777777777777777777777777777777.....777........777777777777777777777...........
    ......77777777....77777777777777777..77777777777777777...........7777777777777777777777777777777777777777777777777777.........7777777777777777777777............
    .......77777777.....777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777...........7777777777777777777777..............
    ........7777777.......7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777.........7777777777777777777777................
    ........7777777777......77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777.....77777777777777777777777777................
    .........77777777777.....77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777..7................
    ..........777777777.7777...7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777..77.................
    ..........7777777777....7777.777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777...7...................
    ...........77777777777......77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777....7....................
    ............77777777777.........77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777....77.....................
    ..............7777777777...........7777777777777777777777777.........7777777777777777777777777777777777777777777777777777777777777....777.......................
    ...............77777777777............7777777777777777777777777777777...7777777777777777777777777777777777777777777777777777777...7777..........................
    ................777777777777............777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777..............................
    ..................7777777777777...........7777777777777777777777777777777777777777777777777777777777777777777777777777777.......................................
    ...................77777777777777............77777777777777777777777777777777777777777777777777777777777777777777777............................................
    ....................7777777777777777............777777777777777777777777777777777777777777777777777777777777777.................................................
    ......................77777777777777777.............77777777777777777777777777777777777777777777777777777.......................................................
    ........................777777777777777777..............77777777777777777777777777777777777777777...............................................................
    ...........................777777777777777777................77777777777777777777777777.........................................................................
    .............................77777777777777777777777........777777777777777777777777............................................................................
    ................................77777777777777777777777777777777777777777777777777..............................................................................
    ...................................77777777777777777777777777777777777777777777.................................................................................
    ......................................7777777777777777777777777777777777777.....................................................................................
    .........................................777777777777777777777777777777.........................................................................................
    ................................................7777777777777777................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 f 5 5 f . 
    . . . f 5 5 5 5 5 5 5 4 5 f . . 
    . . . . f 5 4 5 f 5 f f f . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(5000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 5 5 . . . . . . 6 6 5 5 . . 
        . . 6 5 5 5 . . . 6 6 5 5 . . . 
        . . 6 6 5 5 5 . 6 6 5 . . . . . 
        . . . 6 6 5 5 5 5 5 . . . . . . 
        . . . . . 6 5 5 5 . . . . . . . 
        . . . . . . 6 5 . . . . . . . . 
        . . . . . . 5 5 6 6 . . . . . . 
        . . . . . 6 5 5 5 5 6 . . . . . 
        . . . 6 6 5 5 5 6 5 5 6 6 . . . 
        . . 6 6 5 5 . 5 6 . 5 5 6 . . . 
        . . . 5 5 . . 5 6 . . 5 5 . . . 
        . . 5 5 . . 6 6 6 . . . 5 . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . d d . . . d d d . . . 
        . . . . . . d d . d d . . . . . 
        . 5 5 5 . . . d d d . . . . . . 
        . 5 f 5 . . . d d . . . . . . . 
        f 5 5 5 5 5 5 5 f 5 5 f 5 . . . 
        . . . 5 5 f 5 5 f . . f 5 5 . . 
        . . . 5 . f . . f . . f . 5 f . 
        . . . 5 5 f . . f . . f 5 5 . . 
        . . . . 5 5 5 5 5 5 5 f 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
