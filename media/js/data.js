// Ellie Parobek 340 2181

// Create the array of data
var start = 'Light or serious?';
var data = new Array();
var imgCount = 1;
data[start] = ['Light or serious?', '--Select--', '', 'Light', 'img' + imgCount, 'Serious', 'img' + (imgCount + 1)];
imgCount += 2;
    data['Light'] = ['Family friendly, rated R, or something in between?', '--Select--', '', 'Family Friendly', 'img' + imgCount, 'In Between', 'img' + (imgCount + 1), 'Rated R', 'img' + (imgCount + 2)];
    imgCount += 3;
        data['Family Friendly'] = ['Animated or live action?', '--Select--', 'stop', 'Animated', 'img' + imgCount, 'Live Action', 'img' + (imgCount + 1)];
        imgCount += 2;
        data['In Between'] = ['Comedic or relaxing?', '--Select--', 'stop', 'Comedic', 'img' + imgCount, 'Relaxed', 'img' + (imgCount + 1)];
        imgCount += 2;
        data['Rated R'] = ['Gory or inappropriate humor?', '--Select--', 'stop', 'Gory', 'img' + imgCount, 'Inappropriate Humor', 'img' + (imgCount + 1)];
        imgCount += 2;
    data['Serious'] = ['Emotional, action packed, or for the story and visuals?', '--Select--', '', 'Emotional', 'img' + imgCount, 'Action Packed', 'img' + (imgCount + 1), 'Story and Visuals', 'img' + (imgCount + 2)];
    imgCount += 3;
        data['Emotional'] = ['Will make you cry or have a sad time?', '--Select--', 'stop', 'Tissues', 'img' + imgCount, 'Sad Time', 'img' + (imgCount + 1)];
        imgCount += 2;
        data['Action Packed'] = ['Dark or exciting?', '--Select--', 'stop', 'Dark', 'img' + imgCount, 'Exciting', 'img' + (imgCount + 1)];
        imgCount += 2;
        data['Story and Visuals'] = ['Longer (>2.5 hours) or shorter (<2.5 hours)?', '--Select--', 'stop', 'Longer', 'img' + imgCount, 'Shorter', 'img' + (imgCount + 1)];