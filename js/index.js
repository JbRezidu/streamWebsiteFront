//POINT ROUGE ON STREAM
var getStreamStatusAlkor = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=27600761',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_alkor").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_alkor").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusAlkor = function () {
  getStreamStatusAlkor();
  setInterval(getStreamStatusAlkor, 60000);
};

var getStreamStatusFrokan = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=89410513',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_frokan").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_frokan").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusFrokan = function () {
  getStreamStatusFrokan();
  setInterval(getStreamStatusFrokan, 60000);
};

var getStreamStatusNmixslash = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=105708527',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_nmixslash").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_nmixslash").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusNmixslash = function () {
  getStreamStatusNmixslash();
  setInterval(getStreamStatusNmixslash, 60000);
};

var getStreamStatusHyoshee = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=178737082',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_hyoshee").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_hyoshee").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusHyoshee = function () {
  getStreamStatusHyoshee();
  setInterval(getStreamStatusHyoshee, 60000);
};

var getStreamStatusJohnyytb = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=77590767',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_johnyytb").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_johnyytb").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusJohnyytb = function () {
  getStreamStatusJohnyytb();
  setInterval(getStreamStatusJohnyytb, 60000);
};

var getStreamStatusStreamerZone = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=180986726',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_streamerzone").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_streamerzone").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusStreamerZone = function () {
  getStreamStatusStreamerZone();
  setInterval(getStreamStatusStreamerZone, 60000);
};

var getStreamStatusUnicxorn = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=116943607',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_unic").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_unic").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusUnicxorn = function () {
  getStreamStatusUnicxorn();
  setInterval(getStreamStatusUnicxorn, 60000);
};

var getStreamStatusStayHighTV_ = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=192213708',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_stay").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_stay").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusStayHighTV_ = function () {
  getStreamStatusStayHighTV_();
  setInterval(getStreamStatusStayHighTV_, 60000);
};

var getStreamStatusIaw300 = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=83082142',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_law").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_law").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusIaw300 = function () {
  getStreamStatusIaw300();
  setInterval(getStreamStatusIaw300, 60000);
};

var getStreamStatusWhyz_Trap = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=114145196',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_whyz").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_whyz").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusWhyz_Trap = function () {
  getStreamStatusWhyz_Trap();
  setInterval(getStreamStatusWhyz_Trap, 60000);
};

var getStreamStatusCrazyNightTv = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=41792769',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_crazy").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_crazy").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusCrazyNightTv = function () {
  getStreamStatusCrazyNightTv();
  setInterval(getStreamStatusCrazyNightTv, 60000);
};

var getStreamStatusNiknicooo = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=47863842',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_glanik").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_glanik").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusNiknicooo = function () {
  getStreamStatusNiknicooo();
  setInterval(getStreamStatusNiknicooo, 60000);
};

var getStreamStatusGeneraleweexi = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=232995574',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_weexi").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_weexi").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusGeneraleweexi = function () {
  getStreamStatusGeneraleweexi();
  setInterval(getStreamStatusGeneraleweexi, 60000);
};

var getStreamStatusShaniah33 = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=193227142',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_sha").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_sha").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusShaniah33 = function () {
  getStreamStatusShaniah33();
  setInterval(getStreamStatusShaniah33, 60000);
};


$(document).ready(function () {
  setIntervalStreamStatusAlkor();
  setIntervalStreamStatusFrokan();
  setIntervalStreamStatusNmixslash();
  setIntervalStreamStatusHyoshee();
  setIntervalStreamStatusWhyz_Trap();
  setIntervalStreamStatusStreamerZone();
  setIntervalStreamStatusUnicxorn();
  setIntervalStreamStatusStayHighTV_();
  setIntervalStreamStatusIaw300();
  setIntervalStreamStatusCrazyNightTv();
  setIntervalStreamStatusNiknicooo();
  setIntervalStreamStatusGeneraleweexi();
  setIntervalStreamStatusShaniah33();
});
//FIN DE POINT ROUGE STREAM

//Mode théatre add !
var tex = document.getElementById("lecteur1", "chat", "bouton", "bouton1", "bouton1[0]", "logos2", "body", "right");

function buton1() {  
	bouton1.style.position = 'absolute';
	bouton1.style.top = '46vw';
	bouton.style.display = "none";
	bouton1.style.display = "block";
	chat.style.position = 'absolute';
	chat.style.left = '79.6vw';
	chat.style.top = '5px';
  chat.style.width = '20.5vw';
  chat.style.height = '45vw';
  body.style.backgroundImage = 'radial-gradient(ellipse at center, #000000, #000000)';
}

function lecteur() {
	logos2.style.display = "none";
  lecteur1.style.width = '80vw';
  lecteur1.style.height = '45vw';
	lecteur1.style.top = '5px';
	lecteur1.style.left = '0vw';
  lecteur1.style.position = 'absolute'; 
  right.style.display = "none";
	buton1();
	cheng();
}

function buton1t() {  
	bouton1[0].style.position = 'absolute';
	bouton1[0].style.top = '46vw';
	bouton.style.display = "none";
	bouton1[0].style.display = "block";
	chat.style.position = 'absolute';
	chat.style.left = '79.6vw';
	chat.style.top = '5px';
  chat.style.width = '20.5vw';
  chat.style.height = '45vw';
  body.style.backgroundImage = 'radial-gradient(ellipse at center, #000000, #000000)';
}

function lecteurt() {
	logos2.style.display = "none";
  lecteur1.style.width = '80vw';
  lecteur1.style.height = '45vw';
	lecteur1.style.top = '5px';
	lecteur1.style.left = '0vw';
  lecteur1.style.position = 'absolute'; 
  right.style.display = "none";
	buton1t();
	cheng();
}

function lecteurleave() {
	lecteur1.style.height = '26.035vw';
	lecteur1.style.width = '39.1vw';
	lecteur1.style.position = 'static';
	chat.style.position = 'static';
	chat.style.width = '18.2vw';
	chat.style.height = '26.035vw';
	bouton1.style.position = 'static';
	bouton1.style.display = "none";
	bouton.style.display = "block";
	logos2.style.display = "block";  
  body.style.backgroundImage = 'radial-gradient(ellipse at center, #bfbfbf, #f2f2f2)';
  right.style.display = "block";
	chang();
}

/*Mode théatre perso*/

function lecteurleavet() {
	lecteur1.style.height = '26.035vw';
	lecteur1.style.width = '39.1vw';
	lecteur1.style.position = 'static';
	chat.style.position = 'static';
	chat.style.width = '18.2vw';
	chat.style.height = '26.035vw';
	bouton1[0].style.position = 'static';
	bouton1[0].style.display = "none";
	bouton.style.display = "block";
	logos2.style.display = "block";  
  body.style.backgroundImage = 'radial-gradient(ellipse at center, #bfbfbf, #f2f2f2)';
  right.style.display = "block";
	chang();
}

function buton1t() {  
	bouton1[0].style.position = 'absolute';
	bouton1[0].style.top = '46vw';
	bouton.style.display = "none";
	bouton1[0].style.display = "block";
	chat.style.position = 'absolute';
	chat.style.left = '79.6vw';
	chat.style.top = '5px';
  chat.style.width = '20.5vw';
  chat.style.height = '45vw';
  body.style.backgroundImage = 'radial-gradient(ellipse at center, #000000, #000000)';
}

function lecteurt() {
	logos2.style.display = "none";
  lecteur1.style.width = '80vw';
  lecteur1.style.height = '45vw';
	lecteur1.style.top = '5px';
	lecteur1.style.left = '0vw';
  lecteur1.style.position = 'absolute'; 
  right.style.display = "none";
	buton1t();
	cheng();
}
/*FIN MODE THEATRE PERSO*/

function cheng(text) {
	document.getElementById("bouton1").innerHTML = '<button id="cine"><img src="./images/theatre.png"/>Quitter le mode théatre</button>';
}
function chang(text) {
	document.getElementById("bouton1").innerHTML = '';
}
//FIN MODE THEATRE

//Partie lecteurs
var profils = document.getElementById('lediv');
function frokan() {
  document.getElementById("lediv").innerHTML = '<iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=frokans" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/frokans/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe>';
}
function alkor() {
  document.getElementById("lediv").innerHTML = '<iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=alkor_tv" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/alkor_tv/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe>';
}
function nmix() {
  document.getElementById("lediv").innerHTML = '<iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=nmixslash98" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/nmixslash98/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe>';
}
function hyo() {
  document.getElementById("lediv").innerHTML = '<iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=hyoshee" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/hyoshee/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe>';
}
function stay() {
  document.getElementById("lediv").innerHTML = '<iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=stayhightv_" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/stayhightv_/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe>';
}
function unic() {
  document.getElementById("lediv").innerHTML = '<iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=unicxorn" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/unicxorn/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/unic.png"></img><a id="bouton" onclick="lecteur();" onclick="plan()" style="margin-right: 0.9vw; float: right;" ><img id="pan13" src="./images/panneauthe.png" style="margin-top: 1vw;"></img></a><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function law() {
  document.getElementById("lediv").innerHTML = '<iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=iaw300" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/iaw300/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe>';
}
function whyz() {
  document.getElementById("lediv").innerHTML = '<iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=whyz_trap" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/whyz_trap/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe>';
}
function crazy() {
  document.getElementById("lediv").innerHTML = '<iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=crazynighttv" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/crazynighttv/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe>';
}
function glan() {
  document.getElementById("lediv").innerHTML = '<iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=niknicooo" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/niknicooo/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe>';
}
function weexi() {
  document.getElementById("lediv").innerHTML = '<iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=generaleweexi" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/generaleweexi/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe>';
}
function sha() {
  document.getElementById("lediv").innerHTML = '<iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=shaniah33" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/shaniah33/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe>';
}
function bdg() {
  document.getElementById("lediv").innerHTML = '<iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=lebistrodesgamers" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/lebistrodesgamers/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><div id="right"><a href="http://twitch.tv/lebistrodesgamers" target="_Blank"><img id="pan" src="./images/panneautest.png"></a><a href="https://www.tipeeestream.com/lebistrodesgamers/donation" target="_Blank"><img id="pan1" src="./images/panneaudon.png"></a><a href="https://twitter.com/lebdgfr" target="_Blank"><img id="pan21" src="./images/panneautwit.png"></a><a href="https://www.youtube.com/channel/UC2eTay6Yee--xfBzfOD2rhw" target="_Blank"><img id="pan12" src="./images/panneauyt.png"></a><a onclick="plan()" target="_Blank"><img id="pan22" src="./images/panneauplan.png"></a><a id="bouton" onclick="lecteurt()" target="_Blank"><img id="pan13" src="./images/panneauthe.png"></a></div><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleavet();"></div>';
}
/* FIN FONCTIONS LECTEUR INDICIDUEL */

/*BOUTONS ACCEUILS */
function contact() {
  setTimeout("window.location='cont.html'", 0800); 
}
function index() {
  setTimeout("window.location='index.html'", 0800); 
}
function planning() {
  setTimeout("window.location='planning.html'", 0800); 
}
function partners() {
  setTimeout("window.location='partners.html'", 0800); 
}
function discord() {
  setInterval(window.open("https://discord.gg/qchzRDq"), 0800);
}
//FIN BOUTONS ACCEUIL

//SECTION PLANNING
var quitter = document.getElementById("plann", "logos2", "qlick", "right");
function plan() {
  document.getElementById("plann").innerHTML = '<iframe id="plan" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRMj1HgkKsdkFmbLfx44XY_OmlV49iw4KnTq37dadddzqOSVxicSWKH5TMCi094OQHSXlfF1oEXu-Km/pubhtml?gid=1743127860&amp;single=true&amp;widget=true&amp;headers=false" scrolling="no" style="height: 40vw; width: 93.8vw; float: center; position: absolute; margin-left: 3vw;"></iframe><button id="qlick" onclick="quit()">X</p>'
  plann.style.display = "block";
  qlick.style.display = "block";
  logos2.style.display = "none";
  right.style.display = "none";
}
function quit(text) {
	logos2.style.display = "block";
  plann.style.display = "none";
  qlick.style.display = "none";
  right.style.display = "block";
}
//FIN SECTION PLANNING
