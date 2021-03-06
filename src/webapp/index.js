/**
 * Created by jhelmuth on 7/10/16.
 */

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { render } from 'react-dom';
import App from './components/app';
import GuildListContainer from './components/guilds/guild_list_container';
import GuildEntryContainer from './components/guilds/guild_entry_container';
import CharacterSheetContainer from './components/characters/character_sheet_container';

import About from './components/about';
import './styles/app.less';

console.log('Loading webapp App component.');
render ((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={GuildListContainer}/>
            <Route path="/about" component={About}/>
            <Route path="/guilds" component={GuildListContainer}/>
            <Route path="/guild/:guild_id" component={GuildEntryContainer}/>
            <Route path="/guild/:guild_id/character/:player_id" component={CharacterSheetContainer}/>
        </Route>
    </Router>
),
    document.getElementById('main')
);
