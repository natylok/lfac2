import { Route } from 'react-router'
import Main from '../components/smart/main/main'
import Games from '../components/smart/games/games'
import Clan from '../components/smart/clans/clans'
import Profile from '../components/smart/profile/profile'
import React from 'react';

const Routes = (
    <Route path="/" component={Main}>
        <Route path="games" component={Games}></Route>,
        <Route path="clans" component={Clan}></Route>,
        <Route path="profile" component={Profile}></Route>
    </Route>
)

export default Routes;