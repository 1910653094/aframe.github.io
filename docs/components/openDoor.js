AFRAME.registerComponent('open-door', {
    schema: {
        fade: { type: 'number', default: 750}
    },
    init: function () {
        var open = false;
        const door = document.querySelector("#door");
  
        door.addEventListener('click', function () {
            if (!open) {
                let open_audio = document.querySelector("#open");
                open_audio.play();
                door.setAttribute('position', '0.3 0 -2.3');
                door.setAttribute('rotation', '0 90 0');
                open = true;
            } else {
                let close_audio = document.querySelector("#close");
                close_audio.play();
                door.setAttribute('position', '0 0 -2.3');
                door.setAttribute('rotation', '0 0 0');
                open = false;
            }
        });
    }
  });