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

var getStreamStatusJokolead = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=429026267',
    type: 'GET',
    headers: {
     'Client-ID': 'vpg0itexbryh0n3iucm4k27swjht7i'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_joko").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_joko").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusJokolead = function () {
  getStreamStatusJokolead();
  setInterval(getStreamStatusJokolead, 60000);
};

var getStreamStatusChloe = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=77590767',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_chloe").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_chloe").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusChloe = function () {
  getStreamStatusChloe();
  setInterval(getStreamStatusChloe, 60000);
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

var getStreamStatusChloeecstasy = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=190916410',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_Chloe").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_Chloe").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusChloeecstasy = function () {
  getStreamStatusChloecstasy();
  setInterval(getStreamStatusChloeecstasy, 60000);
};

var getStreamStatusAratrex = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=131839045',
    type: 'GET',
    headers: {
     'Client-ID': 'vpg0itexbryh0n3iucm4k27swjht7i'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_aratrex").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_aratrex").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusAratrex = function () {
  getStreamStatusAratrex();
  setInterval(getStreamStatusAratrex, 60000);
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

var getStreamStatusMazeen = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=406191799',
    type: 'GET',
    headers: {
     'Client-ID': 'vpg0itexbryh0n3iucm4k27swjht7i'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_mazeen").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_mazeen").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusMazeen = function () {
  getStreamStatusMazeen();
  setInterval(getStreamStatusMazeen, 60000);
};

var getStreamStatusKhnor = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=66476875',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_khnor").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_khnor").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusKhnor = function () {
  getStreamStatusKhnor();
  setInterval(getStreamStatusKhnor, 60000);
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

var getStreamStatusJoker = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=103955980',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_joker").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_joker").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusJoker = function () {
  getStreamStatusJoker();
  setInterval(getStreamStatusJoker, 60000);
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

var getStreamStatusZertox = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=172032932',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_zertox").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_zertox").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusZertox = function () {
  getStreamStatusZertox();
  setInterval(getStreamStatusZertox, 60000);
};

var getStreamStatusMemsgringo = function () {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_id=180639359',
    type: 'GET',
    headers: {
     'Client-ID': 'b649omcgoo7t8sak644ivy7z3stzfn'
    },
    success: function(result) {
      if (result.data.length > 0) {
        // display icon on air
        $("#icon_online_mems").css('display', 'block');
      } else {
        // hide icon on air
        $("#icon_online_mems").css('display', 'none');
      }
    }
  })
}

var setIntervalStreamStatusMemsgringo = function () {
  getStreamStatusMemsgringo();
  setInterval(getStreamStatusMemsgringo, 60000);
};


$(document).ready(function () {
  setIntervalStreamStatusAlkor();
  setIntervalStreamStatusFrokan();
  setIntervalStreamStatusNmixslash();
  setIntervalStreamStatusMax();
  setIntervalStreamStatusMazeen();
  setIntervalStreamStatusStreamerZone();
  setIntervalStreamStatusZertox();
  setIntervalStreamStatusAratrex();
  setIntervalStreamStatusIaw300();
  setIntervalStreamStatusKhnor();
  setIntervalStreamStatusToshasama();
  setIntervalStreamStatusJoker();
  setIntervalStreamStatusBadgraff();
  setIntervalStreamStatusChloe();
  setIntervalStreamStatusMemsgringo();
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
  bouton.style.width = "auto";
  bouton.style.marginTop = "0px";
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
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=frokans" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/frokans/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function alkor() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=alkor_tv" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/alkor_tv/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function nmix() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=nmixslash98" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/nmixslash98/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function mems() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=memsgringo" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/memsgringo/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function aratrex() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=thearatrex" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/thearatrex/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function unic() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=unicxorn" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/unicxorn/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function law() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=abduldesparta" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/abduldesparta/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function khnor() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=ljkhnor" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/ljkhnor/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function jigsaw() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=jigsaw___" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/jigsaw___/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function joker() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=thejokertv" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/thejokertv/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function chloe() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=chloeecstasy" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/chloeecstasy/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function bady() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=badgraff" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/badgraff/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function tosha() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=toshasama" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/toshasama/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function zertox() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=zertox80" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/zertox80/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function joko() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=jokolead" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/jokolead/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function mazeen() {
  document.getElementById("lediv").innerHTML = '<a id="bouton" onclick="lecteur();" onclick="plan()"><img id="pan14" src="./images/panneauthe.png"></img></a><iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=mazeen" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/mazeen/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><br/><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleave();"></div><div id="right"/>';
}
function bdg() {
  document.getElementById("lediv").innerHTML = '<iframe id="lecteur1" class="lectwitch" src="https://player.twitch.tv/?channel=lebistrodesgamers" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="750"></iframe> <iframe id="chat" src="https://www.twitch.tv/embed/lebistrodesgamers/chat" scrolling="no" width="350" height="500" frameborder="0"></iframe><div id="right"><a href="https://www.tipeeestream.com/lebistrodesgamers/donation" target="_Blank"><img id="pan1" src="./images/panneaudon.png"/></a><a onclick="plan()" target="_Blank"><img id="pan22" src="./images/panneauplan.png"></a><a id="bouton" onclick="lecteurt()" target="_Blank"><img id="pan13" src="./images/panneauthe.png"></a></div><div id="bouton1" style="color: white; font-family: impact;" onclick="lecteurleavet();"></div>';
}
/* FIN FONCTIONS LECTEUR INDICIDUEL */

/*BOUTONS ACCEUILS */
function team() {
  setTimeout("window.location='equipe'", 800); 
}
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

function discordt() {
  setInterval(window.open("https://discord.gg/qchzRDq"), 800);
}
//FIN BOUTONS ACCEUIL

//SECTION PLANNING
var quitter = document.getElementById("plann", "logos2", "qlick", "right");
function plan() {
  document.getElementById("plann").innerHTML = '<iframe id="plan" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23973838&amp;ctz=Europe%2FParis&amp;src=c2JoMW52bGVsNzYzYmw1a2ZibXV1cDNwb29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=OGo3MmltZTFtZTUwamthN2U4YWgzbjM1aXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%238E24AA&amp;color=%233F51B5&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=1&amp;showTabs=1&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK" scrolling="no" style="height: 41vw; width: 94.8vw; float: center; position: absolute; margin-left: 3vw;"></iframe><button id="qlick" onclick="quit()">X</p>'
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




