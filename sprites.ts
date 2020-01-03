namespace tileworld {

// all sprites go here
export const colorCursor = img`
    5 5 5 5 5 5 5 5
    5 . . . . . . 5
    5 . . . . . . 5
    5 . . . . . . 5
    5 . . . . . . 5
    5 . . . . . . 5
    5 . . . . . . 5
    5 5 5 5 5 5 5 5
`;
export const paintCursor = img`
    5 5 5 5 5 5
    5 . . . . 5
    5 . . . . 5
    5 . . . . 5
    5 . . . . 5
    5 5 5 5 5 5
`;
export const play = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . 7 7 . . . . . . . . . . .
    . . . 7 7 7 7 . . . . . . . . .
    . . . 7 7 7 7 7 7 . . . . . . .
    . . . 7 7 7 7 7 7 7 7 . . . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 . . . . .
    . . . 7 7 7 7 7 7 . . . . . . .
    . . . 7 7 7 7 . . . . . . . . .
    . . . 7 7 . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const debug = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 2 2 . . . . . . .
    . . . . . . 1 2 2 1 . . . . . .
    . . . . . 1 1 2 2 1 1 . . . . .
    . . 2 . . 2 2 2 2 2 2 . . 2 . .
    . . 2 2 . e e e e e e . 2 2 . .
    . . . . e 2 2 2 2 2 2 e . . . .
    . . . . e 2 f 2 2 f 2 e . . . .
    . . 2 2 e 2 2 2 2 2 2 e 2 2 . .
    . . . . e 2 f 2 2 f 2 e . . . .
    . . . . e 2 2 2 2 2 2 e . . . .
    . . 2 2 e 2 f 2 2 f 2 e 2 2 . .
    . . 2 . . e 2 2 2 2 e . . 2 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const pencil = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . 3 . . . .
    . . . . . . . . . . 3 3 3 . . .
    . . . . . . . . . 4 1 3 3 3 . .
    . . . . . . . . 4 4 e 1 3 . . .
    . . . . . . . 4 4 e 4 4 . . . .
    . . . . . . 4 4 e 4 4 . . . . .
    . . . . . 4 4 e 4 4 . . . . . .
    . . . . 4 4 e 4 4 . . . . . . .
    . . . 4 4 e 4 4 . . . . . . . .
    . . 4 4 e 4 4 . . . . . . . . .
    . . 1 e 4 4 . . . . . . . . . .
    . . 1 1 4 . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const paint = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . 4 1 4 1 4 1 4 1 . . . .
    . . . . 4 1 4 1 4 1 4 1 . . . .
    . . . . 1 1 1 1 1 1 1 1 . . . .
    . . . . 1 1 1 1 1 1 1 1 . . . .
    . . . . 9 9 9 9 9 9 9 9 . . . .
    . . . . d e e e e e e e . . . .
    . . . . d e e e e e e e . . . .
    . . . . . . d e e e . . . . . .
    . . . . . . d e e e . . . . . .
    . . . . . . d e e e . . . . . .
    . . . . . . d f f e . . . . . .
    . . . . . . d e e e . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const music = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . 9 . . . . . . .
    . . . . . . . . 9 9 . . . . . .
    . . . . . . . . 9 9 9 . . . . .
    . . . . . . . . 9 . 9 9 . . . .
    . . . . . . . . 9 . . 9 . . . .
    . . . . . . . . 9 . . . . . . .
    . . . . . . . . 9 . . . . . . .
    . . . . . . . . 9 . . . . . . .
    . . . . . . . . 9 . . . . . . .
    . . . . 9 9 9 9 9 . . . . . . .
    . . . 9 9 9 9 9 9 . . . . . . .
    . . . 9 9 9 9 9 9 . . . . . . .
    . . . . 9 9 9 9 . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const emptyTile = img`
    b b b b b b b b b b b b b b b c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    b f f f f f f f f f f f f f f c
    c c c c c c c c c c c c c c c c
`;
export const cursorIn = img`
    . . . . . . . . . . . . . . . .
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
    . 1 1 . . . . . . . . . . 1 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . 1 1 . . . . . 1 .
    . 1 . . . . . 1 1 . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 1 . . . . . . . . . . 1 1 .
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
    . . . . . . . . . . . . . . . .
`;
export const cursorOut = img`
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
    1 1 . . . . . . . . . . . . 1 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 1 . . . . . . . . . . . . 1 1
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
`;
export const collisionSprite = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . f 2 2 2 2 f . . . . .
    . . . . f 2 2 2 2 2 2 f . . . .
    . . . . f 2 2 2 2 2 2 f . . . .
    . . . . f 2 2 2 2 2 2 f . . . .
    . . . . f 2 2 2 2 2 2 f . . . .
    . . . . . f 2 2 2 2 f . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const genericSprite = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . f b b b b f . . . . .
    . . . . f b b b b b b f . . . .
    . . . . f b b b b b b f . . . .
    . . . . f b b b b b b f . . . .
    . . . . f b b b b b b f . . . .
    . . . . . f b b b b f . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const exclude = img`
    . f 2 2 2 2 f .
    f 2 2 f f 2 2 f
    2 2 2 2 f f 2 2
    2 f 2 2 2 f f 2
    2 f f 2 2 2 f 2
    2 2 f f 2 2 2 2
    f 2 2 f f 2 2 f
    . f 2 2 2 2 f .
`;
export const include = img`
    . . . . . . f 7
    . . . . . f 7 7
    f . . . . f 7 f
    7 f . . f 7 7 f
    7 7 f . f 7 f .
    f 7 7 f 7 7 f .
    . f 7 7 7 f . .
    . . f 7 f . . .
`;
export const oneof = img`
    . f f f f f f .
    f f 5 5 5 5 f f
    f 5 5 5 5 5 5 f
    f 5 5 5 5 5 5 f
    f 5 5 5 5 5 5 f
    f 5 5 5 5 5 5 f
    f f 5 5 5 5 f f
    . f f f f f f .
`;
export const ok = img`
    . f 7 7 7 7 f .
    f 7 7 f f 7 7 f
    7 7 f f f f 7 7
    7 f f f f f f 7
    7 f f f f f f 7
    7 7 f f f f 7 7
    f 7 7 f f 7 7 f
    . f 7 7 7 7 f .
`;
export const downArrow = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . f f f f f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . f f f 9 9 9 f f f . . . .
    . . . f 9 9 9 9 9 9 9 f . . . .
    . . . . f 9 9 9 9 9 f . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . . f 9 f . . . . . . .
    . . . . . . . f . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const downHand = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . e e e e e . . . . . . .
    . . . e 4 4 4 4 4 e . . . . . .
    . . e 4 4 4 4 4 4 4 e . . . . .
    . . 4 4 4 4 4 4 4 4 4 e . . . .
    . . 4 4 4 4 4 4 4 4 4 4 e . . .
    . . 4 e 4 4 4 4 4 4 4 4 4 . . .
    . . 4 e 4 e 4 4 4 4 . 4 4 . . .
    . . . . 4 e 4 e 4 4 . . 4 . . .
    . . . . . . 4 e 4 4 . . . . . .
    . . . . . . . . 4 4 . . . . . .
    . . . . . . . . 4 4 . . . . . .
    . . . . . . . . 4 4 . . . . . .
    . . . . . . . . . 4 . . . . . .
`;
export const upArrow = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . f . . . . . . . .
    . . . . . . f 9 f . . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . f 9 9 9 9 9 f . . . . .
    . . . f 9 9 9 9 9 9 9 f . . . .
    . . . f f f 9 9 9 f f f . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f f f f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const upHand = img`
    . . . . . . . . . 4 . . . . . .
    . . . . . . . . 4 4 . . . . . .
    . . . . . . . . 4 4 . . . . . .
    . . . . . . . . 4 4 . . . . . .
    . . . . . . 4 e 4 4 . . . . . .
    . . . . 4 e 4 e 4 4 . . 4 . . .
    . . 4 e 4 e 4 4 4 4 . 4 4 . . .
    . . 4 e 4 4 4 4 4 4 4 4 4 . . .
    . . 4 4 4 4 4 4 4 4 4 4 e . . .
    . . 4 4 4 4 4 4 4 4 4 e . . . .
    . . e 4 4 4 4 4 4 4 e . . . . .
    . . . e 4 4 4 4 4 e . . . . . .
    . . . . e e e e e . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const rightArrow = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . f f . . . . .
    . . . . . . . . . f 9 f . . . .
    . . . . f f f f f f 9 9 f . . .
    . . . . f 9 9 9 9 9 9 9 9 f . .
    . . . . f 9 9 9 9 9 9 9 9 9 f .
    . . . . f 9 9 9 9 9 9 9 9 f . .
    . . . . f f f f f f 9 9 f . . .
    . . . . . . . . . f 9 f . . . .
    . . . . . . . . . f f . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const rightHand = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . e 4 4 4 . . . . .
    . . . . . . e 4 4 4 . . . . . .
    . . . . . e 4 4 4 . . . . . . .
    . . . . e 4 4 4 4 4 4 4 4 4 4 4
    . . . e 4 4 4 4 4 4 4 4 4 4 4 .
    . . . e 4 4 4 4 4 4 e e . . . .
    . . . e 4 4 4 4 4 4 4 4 . . . .
    . . . e 4 4 4 4 4 e e . . . . .
    . . . e 4 4 4 4 4 4 4 . . . . .
    . . . . e 4 4 4 e e . . . . . .
    . . . . . e 4 4 4 4 . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const leftArrow = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . f f . . . . . . . . .
    . . . . f 9 f . . . . . . . . .
    . . . f 9 9 f f f f f f . . . .
    . . f 9 9 9 9 9 9 9 9 f . . . .
    . f 9 9 9 9 9 9 9 9 9 f . . . .
    . . f 9 9 9 9 9 9 9 9 f . . . .
    . . . f 9 9 f f f f f f . . . .
    . . . . f 9 f . . . . . . . . .
    . . . . . f f . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const leftHand = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 4 4 4 e . . . . . . .
    . . . . . . 4 4 4 e . . . . . .
    . . . . . . . 4 4 4 e . . . . .
    4 4 4 4 4 4 4 4 4 4 4 e . . . .
    . 4 4 4 4 4 4 4 4 4 4 4 e . . .
    . . . . e e 4 4 4 4 4 4 e . . .
    . . . . 4 4 4 4 4 4 4 4 e . . .
    . . . . . e e 4 4 4 4 4 e . . .
    . . . . . 4 4 4 4 4 4 4 e . . .
    . . . . . . e e 4 4 4 e . . . .
    . . . . . . 4 4 4 4 e . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
/*
export const flipHoriz = img`
    . . . . . . . . . . . . . . . .
    . . . . . b b . . 9 9 . . . . .
    . . . . . b b . . 9 9 . . . . .
    . . . . b b b . . 9 9 9 . . . .
    . . . . b b b . . 9 9 9 . . . .
    . . . . b b b . . 9 9 9 . . . .
    . . . b b b b . . 9 9 9 9 . . .
    . . . b b b b . . 9 9 9 9 . . .
    . . . b b b b . . 9 9 9 9 . . .
    . . b b b b b . . 9 8 9 9 9 . .
    . . b b b b b . . 9 8 8 9 9 . .
    . . b b 8 8 8 8 8 8 8 8 8 9 . .
    . b b b b b b . . 9 8 8 9 9 9 .
    . b b b b b b . . 9 8 9 9 9 9 .
    . b b b b b b . . 9 9 9 9 9 9 .
    . . . . . . . . . . . . . . . .
`;
export const flipVert = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . 9 9 9 .
    . . . . . . . . . 9 9 9 9 9 9 .
    . . . . . . 9 9 9 9 9 8 9 9 9 .
    . . . 9 9 9 9 9 9 9 8 8 8 9 9 .
    . 9 9 9 9 9 9 9 9 8 8 8 8 8 9 .
    . 9 9 9 9 9 9 9 9 9 9 8 9 9 9 .
    . . . . . . . . . . . 8 . . . .
    . . . . . . . . . . . 8 . . . .
    . b b b b b b b b b b 8 b b b .
    . b b b b b b b b b b 8 b b b .
    . . . b b b b b b b b 8 b b b .
    . . . . . . b b b b b b b b b .
    . . . . . . . . . b b b b b b .
    . . . . . . . . . . . . b b b .
    . . . . . . . . . . . . . . . .
`;
export const rotateLeft = img`
    . . . . . . . . . . . . . . . .
    . . . . . . 8 . . . . . . . . .
    . . . . . 8 8 . . . . . . . . .
    . . . . 8 8 8 8 8 8 . . . . . .
    . . . . . 8 8 . . 8 8 . . . . .
    . . . . . . 8 . . . 8 8 . . . .
    . . . . . . . . . . . 8 8 . . .
    . 9 9 9 . . . . . . . . 8 . . .
    . 9 9 9 9 9 9 . . . . . 8 . . .
    . 9 9 9 9 9 9 9 9 9 . . . . . .
    . 9 9 9 9 9 9 9 9 9 9 9 9 . . .
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 .
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
*/
export const eat = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 5 5 5 5 5 . . . . . .
    . . . . 5 5 5 5 5 5 5 . . . . .
    . . . 5 5 5 5 5 5 5 5 5 . . . .
    . . 5 5 5 5 5 5 5 5 5 . . . . .
    . . 5 5 5 5 5 5 5 . . 2 2 . . .
    . . 5 5 5 5 5 5 . . 2 2 2 2 . .
    . . 5 5 5 5 5 5 . . 2 2 2 2 . .
    . . 5 5 5 5 5 5 5 . . 2 2 . . .
    . . 5 5 5 5 5 5 5 5 5 . . . . .
    . . . 5 5 5 5 5 5 5 5 5 . . . .
    . . . . 5 5 5 5 5 5 5 . . . . .
    . . . . . 5 5 5 5 5 . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const stopSign = img`
    . . . . . . . . . . . . . . . .
    . . . . . 1 1 1 1 1 1 . . . . .
    . . . . 1 2 2 2 2 2 2 1 . . . .
    . . . 1 2 2 2 2 2 2 2 2 1 . . .
    . . 1 2 2 2 1 1 1 1 2 2 2 1 . .
    . 1 2 2 2 1 2 2 2 2 1 2 2 2 1 .
    . 1 2 2 2 1 2 2 2 2 2 2 2 2 1 .
    . 1 2 2 2 2 1 1 1 1 2 2 2 2 1 .
    . 1 2 2 2 2 2 2 2 2 1 2 2 2 1 .
    . 1 2 2 2 2 2 2 2 2 1 2 2 2 1 .
    . 1 2 2 2 1 2 2 2 2 1 2 2 2 1 .
    . . 1 2 2 2 1 1 1 1 2 2 2 1 . .
    . . . 1 2 2 2 2 2 2 2 2 1 . . .
    . . . . 1 2 2 2 2 2 2 1 . . . .
    . . . . . 1 1 1 1 1 1 . . . . .
    . . . . . . . . . . . . . . . .
`;
export const uTurn = img`
    . . . f 5 5 5 5 5 5 5 5 f . . .
    . . f 5 5 5 5 5 5 5 5 5 5 f . .
    . f 5 5 5 5 f f f f 5 5 5 5 f .
    f 5 5 5 5 f f f f f f 5 5 5 5 f
    5 5 5 5 f f f 5 5 f f f 5 5 5 5
    5 5 5 f f f 5 5 5 5 f f f 5 5 5
    5 5 5 f f 5 5 5 5 5 5 f f 5 5 5
    5 5 5 f f 5 5 5 5 5 5 f f 5 5 5
    5 5 5 f f 5 5 5 5 5 5 f f 5 5 5
    5 f f f f f f 5 5 5 5 f f 5 5 5
    5 5 f f f f 5 5 5 5 5 f f 5 5 5
    5 5 f f f f 5 5 5 5 5 f f 5 5 5
    f 5 5 f f 5 5 5 5 5 5 f f 5 5 f
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f .
    . . f 5 5 5 5 5 5 5 5 5 5 f . .
    . . . f 5 5 5 5 5 5 5 5 f . . .
`;
export const addRule = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 7 7 . . . . . . .
    . . . . . . . 7 7 . . . . . . .
    . . . . . . . 7 7 . . . . . . .
    . . . . . . . 7 7 . . . . . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . 7 7 7 7 7 7 7 7 7 7 . . .
    . . . . . . . 7 7 . . . . . . .
    . . . . . . . 7 7 . . . . . . .
    . . . . . . . 7 7 . . . . . . .
    . . . . . . . 7 7 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const garbageCan = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . b b b b b . . . . .
    . . . . . b b . . . b b . . . .
    . . b b b b b b b b b b b b b .
    . . . b b b b b b b b b b b . .
    . . . . b c b c b c b c b . . .
    . . . . b c b c b c b c b . . .
    . . . . b c b c b c b c b . . .
    . . . . b c b c b c b c b . . .
    . . . . b c b c b c b c b . . .
    . . . . b c b c b c b c b . . .
    . . . . b c b c b c b c b . . .
    . . . . . b b b b b b b . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const help = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . d d d d d d d d . . . .
    . . . d d d a a a a d d d . . .
    . . d d d a c c c c a d d d . .
    . . d d a c d d d d a c d d . .
    . . d d a c d d d d a c d d . .
    . . d d d d d d d a c d d d . .
    . . d d d d d d a c d d d d . .
    . . d d d d d a a c d d d d . .
    . . d d d d d a c d d d d d . .
    . . d d d d d d d d d d d d . .
    . . . d d d d a c d d d d . . .
    . . . . d d d d d d d d . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const gameIcon = img`
    . . . . . . . . . . . . . . . .
    . . f 7 7 7 7 f . . . . . . . .
    . f 7 7 7 7 7 7 f . . . . . . .
    . 7 7 7 f f f f f . . . . . . .
    . 7 7 f f f f f f . . . . . . .
    . 7 7 f f 7 7 7 f . . . . . . .
    . 7 7 f f f f 7 7 . . . . . . .
    . 7 7 7 f f f 7 7 . . . . . . .
    . f 7 7 7 7 7 7 f 5 5 5 5 5 . .
    . . f 7 7 7 7 f . 5 5 5 5 . 5 .
    . . . . . . . 5 . 5 5 5 5 . 5 .
    . . . . . . . 5 . 5 5 5 5 . 5 .
    . . . . . . . . 5 5 5 5 5 5 . .
    . . . . . . . . . 5 5 5 5 . . .
    . . . . . . . . 5 5 5 5 5 5 . .
    . . . . . . . . . . . . . . . .
`;
export const trophyUp = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . 4 5 5 5 5 5 5 5 5 5 5 1 . .
    . . . 4 5 5 5 5 5 5 5 5 1 . . .
    . 5 5 5 4 5 5 5 5 5 5 5 5 5 5 .
    . 5 . . 4 5 6 5 5 6 5 1 . . 5 .
    . 5 . . 4 5 5 5 5 5 5 1 . . 5 .
    . . 5 . 4 5 5 5 5 5 5 1 . 5 . .
    . . . 5 4 5 6 5 5 6 5 1 5 . . .
    . . . . 4 5 5 6 6 5 5 1 . . . .
    . . . . . 4 5 5 5 5 1 . . . . .
    . . . . . . 4 4 4 4 . . . . . .
    . . . . . 4 5 5 5 5 1 . . . . .
    . . . . 4 5 5 5 5 5 5 1 . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const trophyDown = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . 1 5 5 5 5 5 5 4 . . . .
    . . . . . 1 5 5 5 5 4 . . . . .
    . . . . . . 4 4 4 4 . . . . . .
    . . . . . 1 5 5 5 5 4 . . . . .
    . . . . 1 5 5 5 5 5 5 4 . . . .
    . . . 5 1 5 2 5 5 2 5 4 5 . . .
    . . 5 . 1 5 5 5 5 5 5 4 . 5 . .
    . 5 . . 1 5 5 5 5 5 5 4 . . 5 .
    . 5 . . 1 5 5 2 2 5 5 4 . . 5 .
    . 5 5 5 5 5 2 5 5 2 5 4 5 5 5 .
    . . . 1 5 5 5 5 5 5 5 5 4 . . .
    . . 1 5 5 5 5 5 5 5 5 5 5 4 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;
export const equalZero = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . 1 1 1 1 1 . .
    . . . . . . . . 1 1 . . . 1 1 .
    . . 1 1 1 1 . . 1 . . . 1 . 1 .
    . . . . . . . . 1 . . 1 . . 1 .
    . . 1 1 1 1 . . 1 . . 1 . . 1 .
    . . . . . . . . 1 . 1 . . . 1 .
    . . . . . . . . 1 1 . . . 1 1 .
    . . . . . . . . . 1 1 1 1 1 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`;

export const arrowImages = [leftArrow, rightArrow, upArrow, downArrow];
export const handImages = [leftHand, rightHand, upHand, downHand];
export const attrImages = [include, exclude, ok, oneof];
export const attrValues = [AttrType.Include, AttrType.Exclude, AttrType.OK, AttrType.OneOf];
export const commandImages = [paint, pencil, play, debug, music, help];
export const gameImages = [ trophyUp, trophyDown ];
export const categoryImages = [rightArrow, paint, collisionSprite, equalZero, gameIcon ];

}