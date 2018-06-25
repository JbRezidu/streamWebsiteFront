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
  setInterval(getStreamStatusJohnyytb, 60000);
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
});
