import { Factory } from 'ember-cli-mirage';

function randoEl(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

let pugNames = ["Birthday Surprise", "Carrot Cake", "Choc. Chip Cookie Dough", "Chocolate Peanut Butter", "Chocolate Salted Caramel", "Chocolate Salted Caramel", "Kentucky Bourbon", "Lemonberry", "Mid. Magic Choc. Chip", "Miss Princess", "Nodini’s Coconut Caramel", "Orange Sunrise", "Peanut Butter Cup", "Scarlett’s Red Velvet", "Strawberries & Cream", "Strawberry Shortcake", "Sugar Free Choc. Magic", "Sugar Free Lemon Drop", "Texas Milk Chocolate", "Triple Chocolate Torte", "Wedding Cake", "White Midnight Magic", "Root Beer Float", "Cherry Limeade", "Chocolate Peanut Butter", "Chocolate Salted Caramel", "Orange Sunrise", "Strawberries & Cream", "Sugar Free Choc. Magic", "Sugar Free Lemon Drop", "Triple Chocolate Torte", "Mini Assorted Dozen", "Mini Bomb Pops Dozen", "Mini Chocolate Lover's Dozen", "Chocolate Chocolate Chip Cheesecake", "Classic Cheesecake", "Turtle Cheesecake", "Key West Key Lime Cheesecake", "Baker's Variety Box", "Birthday Box", "Chocolate Lover's Box", "Wedding Shower Box"];

// Sampling from imgur.com/r/pugs
let pugUrls = ["http://i.imgur.com/0nFUGDBb.jpg", "http://i.imgur.com/OL9H3blb.jpg", "http://i.imgur.com/mrsgiXNb.jpg", "http://i.imgur.com/eN0ThcXb.jpg", "http://i.imgur.com/V13heVNb.jpg", "http://i.imgur.com/MUAoTzTb.jpg", "http://i.imgur.com/sF40IRsb.jpg", "http://i.imgur.com/lmYPlNLb.jpg", "http://i.imgur.com/QwfOeJQb.jpg", "http://i.imgur.com/W3D54Zdb.jpg", "http://i.imgur.com/LdHKAG8b.jpg", "http://i.imgur.com/8BQKJPgb.jpg", "http://i.imgur.com/VJC6kYOb.jpg", "http://i.imgur.com/lG7rVVzb.jpg", "http://i.imgur.com/AmnftUhb.jpg", "http://i.imgur.com/DpinCYZb.jpg", "http://i.imgur.com/reyGHblb.jpg", "http://i.imgur.com/lqZdlaLb.jpg", "http://i.imgur.com/HqP7pxBb.jpg", "http://i.imgur.com/21P33tDb.jpg", "http://i.imgur.com/9upn2Ccb.jpg", "http://i.imgur.com/YYPfIpFb.jpg", "http://i.imgur.com/VpdaruSb.jpg", "http://i.imgur.com/1yyNWTcb.jpg", "http://i.imgur.com/5zUvPL7b.jpg", "http://i.imgur.com/oWWGWDyb.jpg", "http://i.imgur.com/wQBtAi6b.jpg", "http://i.imgur.com/dHPsjeLb.jpg", "http://i.imgur.com/GVT0Be2b.jpg", "http://i.imgur.com/8Amsnnqb.jpg", "http://i.imgur.com/rdqlfKEb.jpg", "http://i.imgur.com/rKjrttVb.jpg", "http://i.imgur.com/GVlzszlb.jpg", "http://i.imgur.com/8CqQJlpb.jpg", "http://i.imgur.com/HavfGoTb.jpg", "http://i.imgur.com/DlHgXrxb.jpg", "http://i.imgur.com/xgYdz20b.jpg", "http://i.imgur.com/ZiDQsmVb.jpg", "http://i.imgur.com/E0ty53Tb.jpg", "http://i.imgur.com/ET4HKjEb.jpg", "http://i.imgur.com/CJrRrZWb.jpg", "http://i.imgur.com/yHUZiTzb.jpg", "http://i.imgur.com/2jhaYhWb.jpg", "http://i.imgur.com/ZNURAzEb.jpg", "http://i.imgur.com/GftjJRAb.jpg", "http://i.imgur.com/fPiE1E4b.jpg", "http://i.imgur.com/zuFmos4b.jpg", "http://i.imgur.com/31I2gkzb.jpg", "http://i.imgur.com/v51WnGub.jpg", "http://i.imgur.com/pmr1cGKb.jpg", "http://i.imgur.com/V2csfrbb.jpg", "http://i.imgur.com/k591OK7b.jpg", "http://i.imgur.com/WKeMc6cb.jpg", "http://i.imgur.com/uIZvkB9b.jpg", "http://i.imgur.com/haC1ZHdb.jpg", "http://i.imgur.com/U2Sdj1Qb.jpg", "http://i.imgur.com/ASDjJ5Vb.jpg", "http://i.imgur.com/BoghXvub.jpg", "http://i.imgur.com/qE1Vzx9b.jpg", "http://i.imgur.com/AcdEpAzb.jpg"];

let bios = ["I can haz cheezburger. I is not a 'mallow kitteh Im in ur computer makin ur graphix kitteh I want moar foodz I iz serius purrrrr meow, I iz serius I is not amuzed. I tastes it meow, O hai mew purr meow, hsssssss purrrrr. O hai I want moar foodz I iz in ur desk workin on ur problemz meow. Mew mrrrrow I want moar foodz, meow, I want moar foodz mew surprize mrrrrow. Meow meow I want moar foodz miaow I tastes it I is not amuzed meow miaow Im in ur computer makin ur graphix miaow. O hai purr mrrrrow ffttttt, ffttttt surprize. You eated my cookee I want moar foodz You eated my cookee I tastes it mew. I iz in ur desk workin on ur problemz I is not a 'mallow ffttttt kitteh, ffttttt ffttttt I iz in ur desk workin on ur problemz mrrrrow kitteh. ", "Purr meow hsssssss I tastes it purr. I tastes it miaow mrrrrow I is not amuzed. You eated my cookee I iz in ur desk workin on ur problemz purrrrr kitteh I is not amuzed I iz in ur desk workin on ur problemz. Purrrrr meow meow meow. Purrrrr Im in ur computer makin ur graphix purr I iz serius meow. I iz serius I want moar foodz I is not a 'mallow purrrrr meow mrrrrow, meow meow I tastes it, I is not a 'mallow. ", "I must go. My planet needz me I is not amuzed purrrrr surprize I iz serius. I tastes it miaow mrrrrow mew purr O hai, I must go. My planet needz me purr. Mrrrrow I must go. My planet needz me meow, hsssssss You eated my cookee, surprize I iz serius I is not amuzed mew. Hsssssss I iz serius I want moar foodz purrrrr mew surprize You eated my cookee ffttttt surprize, I iz serius. You eated my cookee I must go. My planet needz me, miaow hsssssss mew miaow I iz in ur desk workin on ur problemz. Kitteh You eated my cookee meow kitteh meow. ", "Purrrrr, You eated my cookee surprize miaow I tastes it purr mew I must go. My planet needz me purrrrr mew. I is not a 'mallow miaow I is not a 'mallow purr ffttttt. Purrrrr Im in ur computer makin ur graphix, I is not a 'mallow I iz serius Im in ur computer makin ur graphix purr O hai. Miaow I is not amuzed I iz in ur desk workin on ur problemz Im in ur computer makin ur graphix I is not a 'mallow surprize kitteh. I tastes it I want moar foodz purrrrr I must go. My planet needz me miaow meow I must go. My planet needz me O hai surprize hsssssss. ", "Purr I is not a 'mallow ffttttt You eated my cookee I want moar foodz O hai I is not amuzed. Ffttttt hsssssss purrrrr meow. Miaow mrrrrow I must go. My planet needz me miaow I tastes it meow. Miaow ffttttt mew hsssssss meow hsssssss surprize I must go. My planet needz me. O hai I iz serius hsssssss purrrrr ffttttt hsssssss You eated my cookee I is not a 'mallow I is not amuzed. I is not a 'mallow surprize I must go. My planet needz me miaow hsssssss O hai I is not a 'mallow. Im in ur computer makin ur graphix meow miaow meow purr I want moar foodz. Miaow miaow meow purrrrr Im in ur computer makin ur graphix kitteh hsssssss surprize. ", "Purrrrr You eated my cookee, I iz in ur desk workin on ur problemz ffttttt meow miaow, You eated my cookee You eated my cookee, I must go. My planet needz me. Meow mrrrrow meow miaow surprize I is not a 'mallow miaow, meow I tastes it mew. Im in ur computer makin ur graphix Im in ur computer makin ur graphix meow purrrrr I is not amuzed I is not a 'mallow, miaow I iz in ur desk workin on ur problemz, mew. Mrrrrow kitteh ffttttt purr. Purrrrr mrrrrow I iz in ur desk workin on ur problemz miaow I must go. My planet needz me meow miaow purrrrr O hai, I iz in ur desk workin on ur problemz. I must go. My planet needz me, I want moar foodz You eated my cookee kitteh I tastes it, purr mew mrrrrow I is not amuzed I must go. My planet needz me. You eated my cookee meow I iz in ur desk workin on ur problemz I tastes it. Im in ur computer makin ur graphix Im in ur computer makin ur graphix ffttttt meow. ", "I iz serius I is not a 'mallow miaow purrrrr ffttttt O hai mew I is not amuzed. Mew purr O hai I iz in ur desk workin on ur problemz mrrrrow purr You eated my cookee. Kitteh I is not amuzed meow miaow I is not a 'mallow I iz serius meow kitteh I must go. My planet needz me. I want moar foodz O hai, meow I is not amuzed I tastes it miaow mew, meow O hai surprize. Im in ur computer makin ur graphix mew mew I want moar foodz purr I tastes it hsssssss purr purr I must go. My planet needz me. ", "I tastes it I want moar foodz purr hsssssss You eated my cookee I is not a 'mallow I is not a 'mallow I want moar foodz I is not a 'mallow purrrrr. Purr kitteh ffttttt mew. Surprize I must go. My planet needz me I must go. My planet needz me I tastes it mrrrrow. Hsssssss kitteh kitteh meow. Mew I tastes it mew I is not a 'mallow O hai purr I iz serius. I tastes it mew mew I tastes it I iz serius surprize hsssssss hsssssss mew. ", "Purrrrr I is not amuzed I iz in ur desk workin on ur problemz You eated my cookee miaow I iz in ur desk workin on ur problemz. Ffttttt I iz in ur desk workin on ur problemz mrrrrow purr, hsssssss I tastes it I want moar foodz. Meow mew I is not a 'mallow purrrrr. Purr I must go. My planet needz me I iz in ur desk workin on ur problemz purrrrr hsssssss surprize. I iz serius surprize ffttttt I tastes it. I tastes it mrrrrow purrrrr purr purr I must go. My planet needz me, ffttttt purrrrr. Hsssssss I tastes it kitteh mew. Mew meow surprize O hai, mrrrrow, purrrrr mew ffttttt O hai. ", "Miaow ffttttt, hsssssss kitteh I tastes it I iz in ur desk workin on ur problemz. Miaow I want moar foodz meow purr meow. I is not a 'mallow I tastes it I iz serius mew You eated my cookee I tastes it I want moar foodz meow meow I iz serius. You eated my cookee I iz serius purrrrr mew I iz in ur desk workin on ur problemz miaow. Ffttttt surprize surprize surprize. I is not a 'mallow purrrrr Im in ur computer makin ur graphix I is not amuzed. I must go. My planet needz me hsssssss meow You eated my cookee purrrrr. I iz in ur desk workin on ur problemz miaow I want moar foodz meow. ", "Mew I want moar foodz mew Im in ur computer makin ur graphix Im in ur computer makin ur graphix. Im in ur computer makin ur graphix, purr purrrrr I tastes it mew ffttttt. Mew I iz in ur desk workin on ur problemz hsssssss purrrrr I must go. My planet needz me Im in ur computer makin ur graphix, O hai hsssssss meow. Miaow, meow I iz serius I is not amuzed I iz in ur desk workin on ur problemz surprize purr O hai kitteh kitteh. I iz in ur desk workin on ur problemz mew meow mew, surprize, I iz in ur desk workin on ur problemz. I iz in ur desk workin on ur problemz purrrrr I iz in ur desk workin on ur problemz surprize. ", "Miaow I is not amuzed mrrrrow I want moar foodz. Miaow I tastes it I tastes it meow mew miaow I must go. My planet needz me I is not a 'mallow I want moar foodz kitteh. Surprize meow miaow O hai I iz in ur desk workin on ur problemz. Kitteh mrrrrow surprize mew. I tastes it hsssssss You eated my cookee ffttttt, I iz in ur desk workin on ur problemz I iz in ur desk workin on ur problemz mew meow, mrrrrow. You eated my cookee mrrrrow, I iz in ur desk workin on ur problemz hsssssss, You eated my cookee I is not a 'mallow, Im in ur computer makin ur graphix I want moar foodz meow. O hai miaow Im in ur computer makin ur graphix You eated my cookee Im in ur computer makin ur graphix. ", "O hai hsssssss, mrrrrow O hai I iz in ur desk workin on ur problemz I tastes it kitteh purr. Hsssssss purr meow mew mrrrrow meow mrrrrow I iz in ur desk workin on ur problemz You eated my cookee purrrrr. Hsssssss meow hsssssss I iz in ur desk workin on ur problemz. Mrrrrow kitteh Im in ur computer makin ur graphix hsssssss. Miaow hsssssss meow mew. I is not a 'mallow You eated my cookee kitteh, meow purrrrr I iz serius, You eated my cookee You eated my cookee ffttttt Im in ur computer makin ur graphix. ", "I is not amuzed I must go. My planet needz me, miaow mrrrrow, meow I must go. My planet needz me surprize I is not amuzed. Surprize You eated my cookee I iz serius, O hai Im in ur computer makin ur graphix mew O hai O hai. I iz in ur desk workin on ur problemz meow meow You eated my cookee purr meow I tastes it I want moar foodz kitteh. O hai I want moar foodz miaow mew O hai ffttttt You eated my cookee I is not amuzed mew. Meow O hai hsssssss ffttttt. Hsssssss surprize surprize mrrrrow I iz in ur desk workin on ur problemz I iz in ur desk workin on ur problemz miaow I iz in ur desk workin on ur problemz meow mrrrrow. Mrrrrow meow I want moar foodz purrrrr, kitteh I want moar foodz hsssssss. Purr I must go. My planet needz me meow, Im in ur computer makin ur graphix I iz in ur desk workin on ur problemz, purr I must go. My planet needz me. ", "Meow meow I want moar foodz hsssssss ffttttt. I is not amuzed meow kitteh purrrrr. Purrrrr I is not amuzed hsssssss I is not a 'mallow, purr surprize I iz serius I iz serius I is not amuzed, Im in ur computer makin ur graphix. Hsssssss purrrrr I tastes it, Im in ur computer makin ur graphix purrrrr mew I is not amuzed I tastes it O hai I iz serius. I must go. My planet needz me You eated my cookee purrrrr I iz in ur desk workin on ur problemz meow. Meow hsssssss I iz serius miaow I must go. My planet needz me miaow hsssssss. Meow purr purr kitteh. ", "I is not amuzed I want moar foodz purr surprize purr meow, I is not amuzed ffttttt. Meow meow I tastes it, I must go. My planet needz me I want moar foodz ffttttt. Ffttttt I want moar foodz purrrrr You eated my cookee kitteh. Miaow purrrrr purr, O hai mew hsssssss. Hsssssss mew mrrrrow meow surprize I is not amuzed I is not a 'mallow meow. O hai meow mrrrrow I iz serius I iz serius meow, I is not amuzed I is not amuzed I must go. My planet needz me. ", "Surprize I iz serius I iz serius purr. I is not a 'mallow meow I must go. My planet needz me ffttttt I iz serius I is not amuzed kitteh, mew You eated my cookee I must go. My planet needz me. Mrrrrow Im in ur computer makin ur graphix I is not amuzed ffttttt I iz serius Im in ur computer makin ur graphix I is not amuzed I iz serius mew. O hai surprize, I is not amuzed kitteh O hai, purrrrr purr, O hai, ffttttt ffttttt. Meow, surprize Im in ur computer makin ur graphix, You eated my cookee miaow You eated my cookee meow mrrrrow, hsssssss. ", "Mew, I iz in ur desk workin on ur problemz I is not amuzed I iz serius O hai purr ffttttt mew mrrrrow. Mew, miaow mew ffttttt purrrrr miaow I want moar foodz mrrrrow meow I iz in ur desk workin on ur problemz. Purrrrr mew surprize ffttttt meow I is not a 'mallow. O hai meow I must go. My planet needz me I is not amuzed hsssssss You eated my cookee I is not amuzed meow I is not a 'mallow. O hai meow You eated my cookee, Im in ur computer makin ur graphix kitteh meow You eated my cookee, I iz in ur desk workin on ur problemz I must go. My planet needz me I must go. My planet needz me. Mew I tastes it I must go. My planet needz me I tastes it. Miaow mew You eated my cookee I must go. My planet needz me. Mrrrrow ffttttt surprize You eated my cookee I is not a 'mallow I tastes it Im in ur computer makin ur graphix. ", "Mrrrrow, Im in ur computer makin ur graphix purrrrr kitteh I tastes it I is not a 'mallow purrrrr mrrrrow. I must go. My planet needz me I must go. My planet needz me hsssssss purr O hai I want moar foodz I tastes it I tastes it. I iz in ur desk workin on ur problemz surprize purrrrr meow. Mrrrrow, meow I iz in ur desk workin on ur problemz You eated my cookee mew You eated my cookee hsssssss. Purr purr I iz serius miaow I must go. My planet needz me purrrrr I want moar foodz You eated my cookee mrrrrow. Surprize I is not a 'mallow O hai, mrrrrow meow You eated my cookee I is not a 'mallow mew, I tastes it. Kitteh purr I is not a 'mallow O hai, hsssssss Im in ur computer makin ur graphix ffttttt. I tastes it mrrrrow meow ffttttt purr meow hsssssss purrrrr mew You eated my cookee. ", "Im in ur computer makin ur graphix miaow ffttttt purr miaow kitteh You eated my cookee. Purrrrr I is not a 'mallow miaow mrrrrow purr I must go. My planet needz me hsssssss. I is not a 'mallow I is not amuzed mew meow. Kitteh purrrrr meow mrrrrow. O hai I want moar foodz I iz in ur desk workin on ur problemz mew. Kitteh, I iz serius You eated my cookee I iz serius hsssssss hsssssss mew miaow. Miaow mew O hai kitteh. "];
export default Factory.extend({
  name() {
    return randoEl(pugNames);
  },
  photo() {
    return randoEl(pugUrls);
  },
  bio() {
    return randoEl(bios);
  }
});