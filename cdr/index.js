'use strict';

var path = require('path');

const CdrPlugin = require(path.join(global.CDR_INSTALL_DIR, '/commander/classes/CdrPlugin')).CdrPlugin;

module.exports = class CfeCdrPlugin extends CdrPlugin {
  constructor(urlBase) {
    super('bat', path.join(__dirname, 'web', urlBase));
  }

  getContent() {
    var result = {
      shortDescription: 'Battery',
      longDescription: 'Battery.',
      nodes: {
				main: {
					type: CdrPlugin.ContentType.LAYOUT,
					shortDescription: 'Main',
					longDescription: 'Main BAT.',
					filePath: '/main_layout.lyt'
				},
				appctrl: {
					type: CdrPlugin.ContentType.PANEL,
					shortDescription: 'Application Control',
					longDescription: 'Application start, stop, restart, and reload.',
					filePath: '/appctrl.pug'
				},
				cdh: {
					type: CdrPlugin.ContentType.PANEL,
					shortDescription: 'Command and Data Handling',
					longDescription: 'Command counters.',
					filePath: '/cdh.pug'
				},
        data: {
          type: CdrPlugin.ContentType.PANEL,
          shortDescription: 'Application Data',
          longDescription: 'Application Data.',
          filePath: '/data.pug'
        },
        plot: {
          type: CdrPlugin.ContentType.PANEL,
          shortDescription: 'Application DataPlot',
          longDescription: 'Application DataPlot.',
          filePath: '/plot.pug'
        },
				version: {
					type: CdrPlugin.ContentType.PANEL,
					shortDescription: 'Version',
					longDescription: 'Core versions.',
					filePath: '/version.pug'
				}
      }
    };

    return result;
  }
};

//var plugin = new CfeCdrPlugin();

//let CfeCdrPlugin = new class extends CdrPlugin {
