// Write your Character component here
import './legends.css';

import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import Profile from '../images/profile.jpg';
import * as ReactDom from 'react-dom';

enableRipple(true);
class Appx extends React.Component {
    btnClick() {
        window.open("https://www.stats.brawlhalla.fr/player-9962343");
    }
    render() {
        return (<div>
                <ButtonComponent cssClass='e-link' onClick={this.btnClick.bind(this)}><img src={Profile} alt="Profile" /></ButtonComponent>
            </div>);
    }
}
document.getElementById('button');


const Legends = (props) => (
  
  <li className="cast" >
    
    <ul id="issues-collection" class="collection">
      
                                <li class="collection-item avatar">
                                    <i class="mdi-action-bug-report circle red darken-2"></i>
                                    
                                    <a href="#" class="secondary-content"><i class="mdi-action-grade"></i></a>
                                </li>                                     <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Leader]</strong>    @Supreme.Ciento (lvl : 98)</p>
                                                <p class="collections-content">XP : <strong>159179</strong> </p><p> Join date : Wednesday 25th of September 2019 PM</p>
                                            </div>

                                            <div id="button" class="col s3">
                                              <Appx id="Appx">
                                                <a id="aaa" href="player-9962343" class="btn-floating    waves-effect waves-light darken-2 right">  <i class="mdi-action-account-circle"></i>
                                                </a>
                                              </Appx>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Officer]</strong>    Carole Baskin (lvl : 87)</p>
                                                <p class="collections-content">XP : <strong>118916</strong> </p><p> Join date : Friday 27th of September 2019 PM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-9959910" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Member]</strong>    CodyHicks1617 (lvl : )</p>
                                                <p class="collections-content">XP : <strong>2106</strong> </p><p> Join date : Friday 11th of October 2019 AM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-30278113" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Officer]</strong>    Shedew (lvl : 86)</p>
                                                <p class="collections-content">XP : <strong>97011</strong> </p><p> Join date : Sunday 13th of October 2019 AM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-947184" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Member]</strong>    Crav Ecra (lvl : 25)</p>
                                                <p class="collections-content">XP : <strong>2446</strong> </p><p> Join date : Tuesday 22nd of October 2019 AM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-1381050" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Member]</strong>    murfe89 (lvl : 28)</p>
                                                <p class="collections-content">XP : <strong>5623</strong> </p><p> Join date : Wednesday 23rd of October 2019 AM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-24411980" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Officer]</strong>    Zesty (lvl : )</p>
                                                <p class="collections-content">XP : <strong>25830</strong> </p><p> Join date : Wednesday 23rd of October 2019 AM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-2309570" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Officer]</strong>    enigmatictactics (lvl : 71)</p>
                                                <p class="collections-content">XP : <strong>24400</strong> </p><p> Join date : Tuesday 14th of January 2020 PM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-10416582" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Officer]</strong>    Said_xddd (lvl : 33)</p>
                                                <p class="collections-content">XP : <strong>58702</strong> </p><p> Join date : Tuesday 14th of January 2020 PM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-7495349" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Member]</strong>    Toni Spumoni aka Toni Two Toes â (lvl : )</p>
                                                <p class="collections-content">XP : <strong>80</strong> </p><p> Join date : Saturday 18th of January 2020 PM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-35844420" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Officer]</strong>    Davitry (lvl : )</p>
                                                <p class="collections-content">XP : <strong>3353</strong> </p><p> Join date : Sunday 19th of January 2020 AM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-29177367" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Member]</strong>    mayson24601 (lvl : )</p>
                                                <p class="collections-content">XP : <strong>3229</strong> </p><p> Join date : Tuesday 21st of January 2020 AM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-35889160" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Officer]</strong>    Ivan71 (lvl : 71)</p>
                                                <p class="collections-content">XP : <strong>11806</strong> </p><p> Join date : Friday 13th of March 2020 PM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-7170902" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Member]</strong>    TUPPENCE (lvl : )</p>
                                                <p class="collections-content">XP : <strong>8276</strong> </p><p> Join date : Friday 27th of March 2020 AM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-33897632" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Officer]</strong>    Alpha_Josh (lvl : )</p>
                                                <p class="collections-content">XP : <strong>10399</strong> </p><p> Join date : Tuesday 31st of March 2020 PM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-32914752" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Officer]</strong>    Timmmmmy :-O (lvl : 49)</p>
                                                <p class="collections-content">XP : <strong>2926</strong> </p><p> Join date : Sunday 12th of April 2020 AM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-34890487" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Member]</strong>    NYYPotato (lvl : )</p>
                                                <p class="collections-content">XP : <strong>8808</strong> </p><p> Join date : Wednesday 15th of April 2020 PM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-36807197" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Member]</strong>    Jimmmmmmy :-0 (lvl : 29)</p>
                                                <p class="collections-content">XP : <strong>162</strong> </p><p> Join date : Friday 17th of April 2020 PM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-34948467" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Member]</strong>    Scythe (lvl : 60)</p>
                                                <p class="collections-content">XP : <strong>83</strong> </p><p> Join date : Monday 20th of April 2020 PM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-36004207" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                                       <li class="collection-item">
                                        <div class="row">
                                            <div class="col s9">
                                                <p class="collections-title"><strong>[Recruit]</strong>    RD| Yonel--OMG! (lvl : 67)</p>
                                                <p class="collections-content">XP : <strong>23</strong> </p><p> Join date : Monday 20th of April 2020 PM</p>
                                            </div>

                                            <div class="col s3">
                                                <a href="player-7540823" class="btn-floating    waves-effect waves-light darken-2 right">    <i class="mdi-action-account-circle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>                         </ul>
                                    
  </li> 
 
);

export default Legends;