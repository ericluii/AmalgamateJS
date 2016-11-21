var AmalgamateJS = require('../lib/index');

var AmalgamateBase = new AmalgamateJS.Base();

AmalgamateBase.addClient(new AmalgamateJS.FacebookClient({}));
AmalgamateBase.addClient(new AmalgamateJS.DiscordClient({}));

AmalgamateBase.connect();
