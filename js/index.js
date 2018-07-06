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

//Mode théatre add !

var tex = document.getElementById("lecteur1", "chat", "bouton", "bouton1", "logos2");

function buton1() {
	bouton1.style.position = 'absolute';
	bouton1.style.top = '880px';
	bouton.style.display = "none";
	bouton1.style.display = "block";
	chat.style.position = 'absolute';
	chat.style.left = '1545px';
	chat.style.top = '5px';
	chat.style.width = '365px';
	chat.style.height = '864px';
	
}

function lecteur() {
	logos2.style.display = "none";
	lecteur1.style.height = '864px';
	lecteur1.style.width = '1536px';
	lecteur1.style.top = '5px';
	lecteur1.style.left = '5px';
	lecteur1.style.position = 'absolute';
	buton1();
	cheng();
}

function lecteurleave() {
	lecteur1.style.height = '500px';
	lecteur1.style.width = '750px';
	lecteur1.style.position = 'static';
	chat.style.position = 'static';
	chat.style.width = '350px';
	chat.style.height = '500px';
	bouton1.style.position = 'static';
	bouton1.style.display = "none";
	bouton.style.display = "block";
	logos2.style.display = "block";
	chang();
}

function cheng(text) {
	document.getElementById("bouton1").innerHTML = '<button id="cine"><img src="./images/theatre.png"/>Quitter le mode théatre</button>';
}

function chang(text) {
	document.getElementById("bouton1").innerHTML = '';
}