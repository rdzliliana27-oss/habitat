var APP_DATA = {
  "scenes": [
    {
      "id": "0-space1",
      "name": "Space1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.1452534928153586,
        "pitch": 0.09972973658268991,
        "fov": 1.4017568530788613
      },
      "linkHotspots": [
        {
          "yaw": 0.039033006238817336,
          "pitch": 0.3773246298439634,
          "rotation": 0,
          "target": "1-space2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-space2",
      "name": "Space2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7057947998910103,
          "pitch": 0.7308757131567134,
          "rotation": 0,
          "target": "0-space1"
        },
        {
          "yaw": -1.1368137729753602,
          "pitch": 0.640288183098674,
          "rotation": 0,
          "target": "2-space3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-space3",
      "name": "Space3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0261442995325574,
          "pitch": 0.8694724274437036,
          "rotation": 0,
          "target": "1-space2"
        },
        {
          "yaw": 1.1292248685828454,
          "pitch": 0.7558547815437482,
          "rotation": 0,
          "target": "3-space4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-space4",
      "name": "Space4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0919851304558783,
          "pitch": 0.512010067345205,
          "rotation": 0,
          "target": "2-space3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
