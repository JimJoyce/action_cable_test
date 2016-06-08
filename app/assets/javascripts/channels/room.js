window.App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    // debugger
    },

  disconnected: function() {},

  received: function(data) {
    $('body').append("<h3>" + data.message + "</h3>");
  },

  speak: function(message) {
    this.perform('speak', { message: message });
  },

  yell: function (message) {
    this.perform('yell', { message: message} );
  }


});

$(document).ready(function($) {
  $("[data-behavior='room_speaker']").on('keydown', function (e) {
    if (e.keyCode == 13) {
      // window.App.room.speak( e.target.value );
      window.App.room.yell(e.target.value)
      e.target.value = '';
      e.preventDefault();
    };
  });

});