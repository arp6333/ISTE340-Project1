// Ellie Parobek 340 2181

// Check browser
var IE8orLess = false;
if(IE8orLess || !document.getElementById){
    alert("This is an old browser. To use this page get a new one");
    window.document.location.href = "http://outdatedbrowser.com/en";
}

//Section for localStorage, changing the background color
function checkColor(whatColor){
    if(window.localStorage && (whatColor !== 'none')){
        localStorage.setItem('color', whatColor);
    }
    if(localStorage.getItem('color')){
        // If it exists, set the background color
        document.getElementsByTagName('body')[0].style.background = localStorage.getItem('color');
    }
} 

// Clear localStorage
function clearIt(){
    localStorage.removeItem('color');
    document.getElementsByTagName('body')[0].style.background = '#eceff9';
}

document.body.onload = checkColor('none');

// Section for cookies
// Does the cookie exist?
if(GetCookie('user_id') == null || GetCookie('user_id') == ''){
    // Null means the cookie does not exist, first time here
    var existing = false;
    var existing2 = false;
    var getName = prompt('Hello! First time here, what is your name?');
    
    while(getName != null && getName.replace(/\s+/g, '') == ""){
        getName = prompt('Please enter a valid name (not blank).');
    }
    
    if(getName === null){
        getName = 'Anonymous';   
    }
    
    var welcome1P = document.createElement('p');
    var welcome1 = document.createTextNode('Welcome, ' + getName + '! This is your first time here. Click the start movie picker button to find a movie!');
    welcome1P.appendChild(welcome1)
    document.body.appendChild(welcome1P);
    
    // Create this cookie for later use
    SetCookie('user_id', getName);
    SetCookie('hit_count', '1');
    SetCookie('movie', 'empty');
    load();
}
// User already exists
else{
    var existing = true;
    var existing2 = false;
    // Returning visitor
    var getName = GetCookie('user_id');
    var getHits = GetCookie('hit_count');
    var getMovie = GetCookie('movie');
    getHits = parseInt(getHits) + 1;
    var welcomeP = document.createElement('p');
    var welcome = document.createTextNode('Welcome back ' + getName + ', you have visited ' + getHits + ' times.');
    welcomeP.appendChild(welcome)
    document.body.appendChild(welcomeP);
    // Check if they user has completed the selector fully yet
    if(getMovie != 'empty'){
        var existing2 = true;
        var welcome2P = document.createElement('p');
        var welcome2 = document.createTextNode('Last time, your movie choice was: ' + getMovie);
        welcome2P.appendChild(welcome2);
        document.body.appendChild(welcome2P);
    }
    load();
    // Update the hit count 
    SetCookie('hit_count', getHits);
}

// Delete my cookies
function clearMyCookies(){
    DeleteCookie('user_id');
    DeleteCookie('hit_count');
    DeleteCookie('movie');
    location.reload();			// Refresh / reload the page. 1st time here
}

// Load everything for the starting page
function load(){
    // Footer (image credit)
    var footer = document.createElement('footer');
    var footerP = document.createElement('p');
    var a = document.createElement('a');
    a.href = 'https://www.imdb.com';
    a.title = 'https://www.imdb.com';
    a.target = '_blank';
    a.appendChild(document.createTextNode('IMDB'));
    footerP.appendChild(document.createTextNode('Credit for all images to '));
    footerP.appendChild(a);
    footerP.appendChild(document.createTextNode("."));
    footer.appendChild(footerP);
    footerP.style.fontSize = '12px';
    footer.setAttribute('id', 'footer');
    document.body.appendChild(footer);
    
    // Button to start load
    var load = document.createElement('button');
    var text = document.createTextNode('Start movie picker!'); 
    load.appendChild(text);
    load.setAttribute('id', 'loadButton');
    document.body.appendChild(load);
    var divv = document.createElement('div');
    divv.setAttribute('id', 'divv');
    
    // Buttons for changing the color / local storage
    // Pink button
    var buttonRed = document.createElement('button');
    var text = document.createTextNode('Change style');
    buttonRed.style.backgroundColor = '#ffe6f0';
    buttonRed.style.color = 'black';
    buttonRed.appendChild(text);
    buttonRed.setAttribute('id', 'resetButton');
    buttonRed.onclick = function(){
        checkColor('#ffe6f0');
        load.style.backgroundColor = '#df9fdf';
    };
    divv.appendChild(buttonRed);
    // Blue button
    var buttonBlue = document.createElement('button');
    var text = document.createTextNode('Change style');
    buttonBlue.style.backgroundColor = '#ccccff';
    buttonBlue.style.color = 'black';
    buttonBlue.appendChild(text);
    buttonBlue.setAttribute('id', 'resetButton');
    buttonBlue.onclick = function(){
        checkColor('#ccccff');
        load.style.backgroundColor = '#b3ffec';
    };
    divv.appendChild(buttonBlue);
    // Green button
    var buttonGreen = document.createElement('button');
    var text = document.createTextNode('Change style');
    buttonGreen.style.backgroundColor = '#e6ffe6';
    buttonGreen.style.color = 'black';
    buttonGreen.appendChild(text);
    buttonGreen.setAttribute('id', 'resetButton');
    buttonGreen.onclick = function(){
        checkColor('#e6ffe6');
        load.style.backgroundColor = '#ffd9b3';
    };
    divv.appendChild(buttonGreen);
    
    // Button for deleting cookies
    var clear = document.createElement('button');
    var text = document.createTextNode('Clear cookies');
    clear.appendChild(text);
    clear.style.color = 'black';
    clear.style.backgroundColor = '#ccb282';
    clear.setAttribute('id', 'resetButton');
    clear.onclick = function(){clearMyCookies();};
    divv.appendChild(clear);
    
    // Button for deleting local storage
    var clear2 = document.createElement('button');
    var text = document.createTextNode('Clear local storage');
    clear2.appendChild(text);
    clear2.style.color = 'black';
    clear2.setAttribute('id', 'resetButton');
    clear2.onclick = function(){clearIt();};
    divv.appendChild(clear2);
    
    document.body.appendChild(divv);
    
    // Load the selector
    load.onclick = function(){
        resetButton();
        loadSelect(data[start][0]);
        load.style.display = 'none';
        buttonRed.style.display = 'none';
        if(!existing){
            welcome1P.style.display = 'none';
        }
        if(existing){
            welcomeP.style.display = 'none';
        }
        if(existing2){
            welcome2P.style.display = 'none';
        }
        divv.style.display = 'none';
    }
}

// Creates the dropdown selector
var images = document.createElement('div');
function loadSelect(current){
    var main = document.getElementById('main');
    var dropDown = document.createElement('select');

    var title = document.createElement('h2');
    var t = document.createTextNode('' + data[current][0]); 

    title.appendChild(t);
    main.appendChild(title);
    main.appendChild(dropDown);
    dropDown.setAttribute('id', 'dropdown');
    
    // Get the dropdown values from the data array
    for(var i = 1; i < data[current].length; i += 2){
        var option = document.createElement('option');
        option.value = data[current][i];
        option.text = data[current][i];
        dropDown.appendChild(option);
    }
    
    // Add images from the data array
    document.body.appendChild(images);
    images.setAttribute('id', 'images');
    var img1 = document.createElement('img');
    img1.src = 'media/images/' + data[current][4] + '.jpg';
    var img2 = document.createElement('img');
    img2.src = 'media/images/' + data[current][6] + '.jpg';
    images.appendChild(img1);
    images.appendChild(img2);
    // Check if there's supposed to be a third image
    if(data[current][8]){
        var img3 = document.createElement('img');
        img3.src = 'media/images/' + data[current][8] + '.jpg';
        images.appendChild(img3);   
    }
    
    // When option is selected, load the next selection
    dropDown.onchange = function(){reloadSelect(dropDown.options[dropDown.selectedIndex], images);}

    // If we are at the end of the chain, show the resulting movie choices
    if(data[current][2] == 'stop'){
        dropDown.onchange = function(){
            if(dropDown.selectedIndex == 0){
                // Do nothing, this is if they click "--Select--" and not an actual option  
            }
            else{
                doFinish(dropDown.options[dropDown.selectedIndex]);
            }
        }
    }
}

// Deletes any parent elements (if they exist), then call loadSelect with the next dropdown
function reloadSelect(option, images){
    while(option.parentElement != option.parentElement.parentElement.lastChild){
        option.parentElement.parentElement.removeChild(option.parentElement.parentElement.lastChild);
    }
    while(images.firstChild){
        images.removeChild(images.firstChild);
    }
    loadSelect(option.text);
}

// Print out the final choices at the end of the chain
var end = document.createElement('div');
function doFinish(option){
    // Set the movie cookie for your final option
    SetCookie('movie', option.text);
    
    // Clear all other images
    while(images.firstChild){
        images.removeChild(images.firstChild);
    }
    
    // Display info
    while(end.firstChild){
        end.removeChild(end.firstChild);
    }
    var title = document.createElement('h2');
    var t = document.createTextNode('' + option.text);
    title.setAttribute('id', 'final')
    title.appendChild(t);
    end.appendChild(title);
    // Get the resulting images
    var final = option.text;
    // Add the images
    var img1 = document.createElement('img');
    img1.src = 'media/images/img' + final + '1.jpg';
    img1.onmouseover = function(){bigImage(this);};
    bigImage(img1);
    var img2 = document.createElement('img');
    img2.src = 'media/images/img' + final + '2.jpg';
    img2.onmouseover = function(){bigImage(this);};
    bigImage(img2);
    var img3 = document.createElement('img');
    img3.src = 'media/images/img' + final + '3.jpg';
    img3.onmouseover = function(){bigImage(this);};
    bigImage(img3);
    images.appendChild(img1);
    images.appendChild(img2);
    images.appendChild(img3);
    
    var choices = document.createElement('div');
    choices.setAttribute('id', 'finalChoices');
    t = document.createTextNode('Here are some movie suggestions!');
    choices.appendChild(t);
    end.appendChild(choices);
    document.getElementById('main').appendChild(end);
}

function bigImage(elem){
    var id = setInterval(move, 10);
    var pos = 0;
    function move(){
        if(pos == 30) {
            clearInterval(id);
        } 
        else{
            pos++;
            elem.style.paddingBottom = pos + 'px';
        }
    }
}

// Reload the page to restart entirely at anytime
function resetButton(){
    var reset = document.createElement('button');
    var text = document.createTextNode('Restart?'); 
    reset.style.color = 'black';
    reset.appendChild(text);
    document.body.appendChild(reset);
    reset.setAttribute('id', 'resetButton');

    reset.onclick = function(){
        location.reload();
    }
}