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

$(document).ready(function () {
  setIntervalStreamStatusAlkor();
  setIntervalStreamStatusFrokan();
  setIntervalStreamStatusNmixslash();
  setIntervalStreamStatusHyoshee();
  setIntervalStreamStatusJohnyytb();
  setIntervalStreamStatusStreamerZone();
});
