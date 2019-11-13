import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LoadingChannels } from './LoadingChannels';
import { Avatar } from './Avatar';
import { ChatDown } from './ChatDown';
import { withChatContext } from '../context';

import chevrondown from '../assets/str-chat__icon-chevron-down.svg';


// function dropdown(){
//   document.getElementById("myDropdown").classList.toggle("show");
// }
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     const dropdowns = document.getElementsByClassName("dropdown-content");
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       const openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
/**
 * ChannelList - A preview list of channels, allowing you to select the channel you want to open
 * @example ./examples/ChannelList.md
 */
class ChannelListTeam extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    /** Stream chat client object */
    client: PropTypes.object,
    showSidebar: PropTypes.bool,
  };

  static defaultProps = {
    error: false,
  };


  render() {
    const { showSidebar } = this.props;
    if (this.props.error) {
      return <ChatDown type="Connection Error" />;
    } else if (this.props.loading) {
      return <LoadingChannels />;
    } else {
      return (
        <div className="str-chat__channel-list-team">
          {showSidebar && (
            <div className="str-chat__channel-list-team__sidebar">
              <div className="str-chat__channel-list-team__sidebar--top">
                <Avatar
                  image="https://cdn.dribbble.com/users/610788/screenshots/5157282/spacex.png"
                  size={50}
                />
              </div>
            </div>
          )}
          <div className="str-chat__channel-list-team__main">
            <div className="str-chat__channel-list-team__header">
              <div className="str-chat__channel-list-team__header--left">
                <Avatar
                  source={this.props.client.user.image}
                  name={
                    this.props.client.user.name || this.props.client.user.id
                  }
                  size={40}
                />
              </div>
              <div className="str-chat__channel-list-team__header--middle">
                <div className="str-chat__channel-list-team__header--title">
                  {this.props.client.user.name || this.props.client.user.id}
                </div>
                <div
                  className={`str-chat__channel-list-team__header--status ${this.props.client.user.status}`}
                >
                  {this.props.client.user.status}
                </div>
              </div>
              <div className="str-chat__channel-list-team__header--right">
                <button className="str-chat__channel-list-team__header--button"
                //click="dropdown()"
                // id="link"
                // className="dropdown-menu-button"
                >
                  {/* <select id="skill_category">
                   
                  </select> */}
                  {/* <option value="en">Englisch</option>
                  <option value="de">Deutsch</option>
                  <option value="it">Italienisch</option> */}

                  {/* TODO: Edit --- show User and Channel List Menu */}
                  <img src={chevrondown} />
                </button>
                {/* <div id="myDropdown" className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div> */}
                {/* <div className="dropdown-menu hide">
                  <ul>
                    <li>new repository</li>
                    <li>New organization</li>
                    <div className="dropdown-menu-devider"></div>
                    <li>logout</li>
                  </ul>
                </div> */}
              </div>
            </div>
            {this.props.children}
          </div>
        </div>
      );
    }
  }
}

ChannelListTeam = withChatContext(ChannelListTeam);
export { ChannelListTeam };

// var dropdown = require('dropdown-menu')
// var el = document.getElementById('link')
// var d = dropdown(el)
// d.on('select', function (li) {
//   console.log(li)
// })