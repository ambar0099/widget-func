import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './email-gate.scss';
import { FacebookShareButton, FacebookMessengerShareButton } from 'react-share';
import {
    FacebookIcon,
    FacebookMessengerIcon
} from "react-share";

class EmailGate extends Component {

    appId = '1136600173515564';
    url = 'google.com';
    state = {
        opened: false,
        showDialog: false
    }

    constructor(props) {
        super(props);
    }

    handleToggleOpen = () => {
        this.setState((prev) => {
            return {
                opened: !prev.opened,
                showDialog: !prev.opened
            };
        });
    }

    openDialog() {
        FB.ui({
            method: 'share',
            href: 'https://developers.facebook.com/docs/',
          }, function(response){});
    }

    openMsngrDialog() {
        FB.ui({
            method: 'send',
            href: 'https://developers.facebook.com/docs/',
          }, function(response){});
    }

    handleDialogClose = () => {
        this.setState((prev) => {
            let { showDialog } = prev;
            if (prev.showDialog) {
                showDialog = false;
            }
            return {
                opened: !prev.opened,
                showDialog: !prev.showDialog
            };
        });
    }

    renderBody = () => {
        return (
            <button
                type="button"
                className="dock"
                onClick={this.handleToggleOpen}
                onKeyPress={this.handleToggleOpen}
            >
                ^ OPEN ^
            </button>
        );
    }

    handleScreen = () => {
        this.props.update('EmailGate');
    }

    render() {
        const { opened } = this.state;
        const body = this.renderBody();


        return (
            <div className="welcome-screen">
                <div className="welcome-screen-info mt-5 pt-5">
                    <div id="emailHeaderContainer" className="email-header-container">
                        <h1
                            className="mx-auto mb-3 welcome-screen-header">
                            Get $X for every friend you refer
                        </h1>
                        <h2
                            id="emailGateSubHeader" className="welcome-screen-sub-header mx-auto px-3 mt-2">
                            Your friends get $10 and you get $X after their first purchase of $10+
                        </h2>
                    </div>
                </div>
                <div className="email-fields-info">
                    <div>
                        <p
                            id="emailGateEmailMsg"
                            className="email-header">
                            Enter your email to start sharing with friends:
                        </p>
                    </div>
                    <input
                        id="emailGateEmailPlaceholder"
                        className="w-75 mt-0 email-header-input form-control"
                        name="email"
                        autoComplete="off"
                        placeholder="Enter Email...."
                        required
                        type="email" />
                </div>
                <div>
                    <FacebookMessengerShareButton appId={1136600173515564} url="www.google.com">
                        <FacebookMessengerIcon size={32} round={true} />
                    </FacebookMessengerShareButton>
                    <FacebookShareButton appId={1136600173515564} url="www.google.com">
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <Button id="emailGateEmailButton" className="w-75" onClick={this.openDialog}>
                        <span
                            id="emailGateEmailButtonText"
                        >
                            Start Sharing 1
                        </span>
                    </Button>
                </div>
                <div className="mt-3 pt-2">
                    <Button id="emailGateEmailButton" className="w-75" onClick={this.handleScreen}>
                        <span
                            id="emailGateEmailButtonText"
                        >
                            Start Sharing
                        </span>
                    </Button>
                </div>
            </div>
        );
    }
}

export default EmailGate;
