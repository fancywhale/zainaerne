import { Component } from '@angular/core';
import { OfflineOptions, ControlAnchor, NavigationControlType } from 'angular2-baidu-map';

@Component({
  selector: 'map-page',
  templateUrl: './map.html',
})
export class MapPage {
  public offlineOpts: OfflineOptions = {
    retryInterval: 5000,
    txt: 'NO-NETWORK'
  };

  public opts = {
    center: {
      longitude: 121.506191,
      latitude: 31.245554
    },
    zoom: 17,
    markers: [{
      longitude: 121.506191,
      latitude: 31.245554,
      title: 'Where',
      content: 'Put description here',
      enableDragging: true
    }],
    geolocationCtrl: {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT
    },
    scaleCtrl: {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
    },
    overviewCtrl: {
      isOpen: true
    },
    navCtrl: {
      type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
    }
  };


  public loadMap(map: any) {
        console.log('map instance here', map);
    }

   public clickMarker(marker: any) {
        console.log('The clicked marker is', marker);
    }

   public clickmap(e: any) {
        console.log(`Map clicked with coordinate: ${e.point.lng}, ${e.point.lat}`);
    }
}
