import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import Profile from '../images/profile.jpg';

enableRipple(true);
class Appx extends React.Component {
    btnClick() {
        const xx = document.getElementById("a").getAttribute("href");
        window.open("https://www.stats.brawlhalla.fr/"+xx);
    }
    render() {
        return (<div>
                <ButtonComponent cssClass='e-link' onClick={this.btnClick.bind(this)}><img src={Profile} alt="Profile" /></ButtonComponent>
            </div>);
    }
}
//ReactDom.render(<Appx />, document.getElementById('button'));
export default Appx;