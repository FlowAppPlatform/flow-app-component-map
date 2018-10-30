import React from 'react';

import AppComponent from 'flow-app-component';

class MapComponent extends AppComponent {
  static properties = {
    iconUrl: '/assets/images/map-component.png',
    name: 'Map',
    type: 'ui-component',
    componentType: 'map',
    category: 'Views',
    parent: null,
    showOnComponentsPanel: true,
    isValuable: true,
    allowsChildren: false
  };

  constructor() {
    super();
    const newState = {
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'Basic settings for the map',
          properties: [],
        },
        {
          categoryName: 'Events',
          categoryDescription: 'Events for the map',
          properties: [
            {
              id: 'event',
              name: 'Events',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
      ],

      ...MapComponent.properties
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    return null;
  }
}

export default MapComponent;
