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

var getStreamStatusWolfy = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=178737082',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_wolfy").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_wolfy").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusWolfy = function () {
  getStreamStatusWolfy();
  setInterval(getStreamStatusWolfy, 60000);
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

var getStreamStatusMatruks = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=55371642',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_matruks").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_matruks").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusMatruks = function () {
  getStreamStatusMatruks();
  setInterval(getStreamStatusMatruks, 60000);
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

var getStreamStatusToshasama = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=263725651',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_tosha").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_tosha").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusToshasama = function () {
  getStreamStatusToshasama();
  setInterval(getStreamStatusToshasama, 60000);
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

var getStreamStatusBadgraff = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=52410582',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_bady").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_bady").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusBadgraff = function () {
  getStreamStatusBadgraff();
  setInterval(getStreamStatusBadgraff, 60000);
};

var getStreamStatusTenjokie = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=106816336',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_tenjo").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_tenjo").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusTenjokie = function () {
  getStreamStatusTenjokie();
  setInterval(getStreamStatusTenjokie, 60000);
};

var getStreamStatusErfang = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=62462653',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_erfang").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_erfang").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusErfang = function () {
  getStreamStatusErfang();
  setInterval(getStreamStatusErfang, 60000);
};


$(document).ready(function () {
  setIntervalStreamStatusAlkor();
  setIntervalStreamStatusFrokan();
  setIntervalStreamStatusNmixslash();
  setIntervalStreamStatusWolfy();
  setIntervalStreamStatusWhyz_Trap();
  setIntervalStreamStatusStreamerZone();
  setIntervalStreamStatusTenjokie();
  setIntervalStreamStatusMatruks();
  setIntervalStreamStatusIaw300();
  setIntervalStreamStatusCrazyNightTv();
  setIntervalStreamStatusToshasama();
  setIntervalStreamStatusShaniah33();
  setIntervalStreamStatusBadgraff();
  setIntervalStreamStatusErfang();
});
//FIN DE POINT ROUGE STREAM

//Mode théatre add !
var tex = document.getElementById("lecteur1", "chat", "bouton", "bouton1", "bouton1[0]", "logos2", "body", "right");
function buton1() {  
  var _button1 = document.getElementById("bouton1");
	_button1.style.position = 'absolute';
	_button1.style.top = '46vw';
	bouton.style.display = "none";
	_button1.style.display = "block";
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
  var _button1 = document.getElementById("bouton1");
	_button1.style.position = 'static';
	_button1.style.display = "none";
	bouton.style.display = "block";
	logos2.style.display = "block";  
  body.style.backgroundImage = 'radial-gradient(ellipse at center, #bfbfbf, #f2f2f2)';
  right.style.display = "block";
	chang();
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
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=frokans" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/frokans/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/frokanpres.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function alkor() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=alkor_tv" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/alkor_tv/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/alkorpres.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function nmix() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=nmixslash98" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/nmixslash98/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/nmixpres.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function hyo() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=hyoshee" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/hyoshee/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/hyopres.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function matruks() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=matruks" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/matruks/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/#.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function unic() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=unicxorn" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/unicxorn/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/unic.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function law() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=iaw300" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/iaw300/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/lawpres.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function whyz() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=whyz_trap" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/whyz_trap/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/whyzpres.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function crazy() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=crazynighttv" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/crazynighttv/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/crazypres.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function weexi() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=generaleweexi" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/generaleweexi/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/weexiprespres.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function sha() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=shaniah33" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/shaniah33/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/shapres.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function bady() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=badgraff" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/badgraff/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/badypres.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function tosha() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=toshasama" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/toshasama/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/x.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function tenjo() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=tenjokiegaming" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/tenjokiegaming/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/x.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function wolfy() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=wolfiynz" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/wolfiynz/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/x.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function erfang() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=erf4ng" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/erf4ng/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><img id="profil" src="./images/x.png"></img><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function bdg() {
  document.getElementById("lediv").innerHTML = '<iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=lebistrodesgamers" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/lebistrodesgamers/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><div id="right"><a href="http://twitch.tv/lebistrodesgamers" target="_Blank"><img id="pan" src="./images/panneautest.png"/></a><br/><a href="https://www.tipeeestream.com/lebistrodesgamers/donation" target="_Blank"><img id="pan1" src="./images/panneaudon.png"/></a><br/><a href="https://twitter.com/lebdgfr" target="_Blank"><img id="pan21" src="./images/panneautwit.png"/></a><br/><a href="https://www.youtube.com/channel/UC2eTay6Yee--xfBzfOD2rhw" target="_Blank"><img id="pan12" src="./images/panneauyt.png"></a><br/><a onclick="plan()" target="_Blank"><img id="pan22" src="./images/panneauplan.png"></a><br/><a id="bouton" onclick="lecteurt()" target="_Blank"><img id="pan13" src="./images/panneauthe.png"></a></div><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleavet();"></div>';
}
/* FIN FONCTIONS LECTEUR INDICIDUEL */

/*BOUTONS ACCEUILS */
function contact() {
  setTimeout("window.location='cont'", 800); 
}
function index() {
  setTimeout("window.location='index'", 800); 
}
function planning() {
  setTimeout("window.location='graph'", 800); 
}
function partners() {
  setTimeout("window.location='partners'", 800); 
}
function discord() {
  setInterval(window.open("https://discord.gg/qchzRDq"), 800);
}
//FIN BOUTONS ACCEUIL

//SECTION PLANNING
var quitter = document.getElementById("plann", "logos2", "qlick", "right");
function plan() {
  document.getElementById("plann").innerHTML = '<iframe id="plan" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRMj1HgkKsdkFmbLfx44XY_OmlV49iw4KnTq37dadddzqOSVxicSWKH5TMCi094OQHSXlfF1oEXu-Km/pubhtml?gid=1743127860&amp;single=true&amp;widget=true&amp;headers=false" scrolling="no" style="height: 41vw; width: 94.8vw; float: center; position: absolute; margin-left: 3vw;"></iframe><button id="qlick" onclick="quit()">X</p>'
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
//MODE SOMBRE

var modesombre = document.getElementById("sombre", "body", "sombreq");

function blackmode() {
  body.style.backgroundImage = 'radial-gradient(ellipse at center, #595959, #000000)';
  sombreq.style.display = "block";
  sombre.style.display = "none"
  document.getElementById("sombreq").innerHTML = '<img id="sombreoff" src="./images/mdesombreon.png"></img>';
}

function stopmodeb() {
  body.style.backgroundImage = 'radial-gradient(ellipse at center, #bfbfbf, #f2f2f2)';
  sombreq.style.display = "none";
  sombre.style.display = "block"
  document.getElementById("sombreq").innerHTML = '';
}

//PARTIE GRAPH

var zoomedElement;

function zoomimg(element) {
  var blackfont = document.getElementById('blackfont');
  var qlick = document.getElementById('qlick');
  zoomedElement = element;
  element.style.position = "absolute";
  element.style.height = "40vw";
  element.style.width = "80vw";
  element.style.top = "5vw";
  element.style.left = "11vw";
  element.style.borderRadius = "0px";
  element.style.marginLeft = "0px";
  blackfont.style.display = "block";
  qlick.style.display = "block";
}

function quitfont() {
  var blackfont = document.getElementById('blackfont');
  var qlick = document.getElementById('qlick');
  zoomedElement.style.position = "static";
  zoomedElement.style.height = "7vw";
  zoomedElement.style.width = "12vw";
  zoomedElement.style.top = "3.9vw";
  zoomedElement.style.left = "0vw";
  zoomedElement.style.marginLeft = "1.4vw";
  zoomedElement.style.borderRadius = "50px";
  qlick.style.display = "none";
  blackfont.style.display = "none";
}

/*CONTACT*/

function formul() {
  var surname = document.getElementById('surname').value;
  var name = document.getElementById('name01').value;
  var mail = document.getElementById('mail').value;
  var reason = document.getElementById("reason").value;
  var message = document.getElementById('message').value;
  window.location = ("mailto:lebdgstream@gmail.com?subject="+ reason +"&body=" + message + " voici mon mail : " + mail)
}


