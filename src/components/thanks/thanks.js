import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './thanks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

class Thanks extends Component {
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
        this.props.update('Thanks');
    }

    render() {
        const { opened } = this.state;
        const body = this.renderBody();


        return (
            <div className="thanks-screen">
                <div className="thanks-screen-info mt-2 pt-5">
                    <div id="emailHeaderContainer" className="email-header-container">
                        <h1 id="emailGateHeader"
                            className="mx-auto mb-3 thanks-screen-header">
                            Thanks for sharing friendbuy
                                </h1>
                    </div>
                </div>
                <div className="email-fields-info">
                    <div className="msg-section mt-3 mb-4">
                        <a className="msg-section-link">
                            <span
                                id="emailLinkTab">
                                Email
                                    </span>
                        </a>
                        <a className="msg-section-link">
                            <span
                                id="emailLinkTabMessenger"
                            >
                            </span></a>
                        <a className="msg-section-link">
                            <span
                                id="emailLinkTabFacebook">
                                Facebook
                                    </span>
                        </a>
                    </div>
                    <div>
                        Once your friend makes their first purchase you’ll find your $X reward in your inbox. Don’t stop there! The more you share the more rewards you’ll get!
                    </div>
                </div>
                <div className="submit-msg-email mt-2 pt-2 mt-4 mb-4">
                    <Button
                        onClick={this.handleScreen}
                        id="emailGateEmailButton"
                        className="w-75"
                    >
                        <span
                            id="emailGateEmailButtonText">

                            Share Again
                                </span>
                    </Button>
                </div>
                <div className="d-flex mobile-row-column mx-auto align-items-center w-100 mb-1">
                    <div className="link-share-text text-nowrap mr-1 w-50">
                        And share your link wherever:
                            </div>
                    <input className="link-text pl-sm-2 w-50 form-control" name="trackable_link" readnly="true" type="text" value="http://fbuy.me/EzcW" />
                    <a className="email-msg-copy d-flex-not-important justify-content-center align-items-center my-auto overlap-icon" data-fbuy-builder-tag="Button">
                        <FontAwesomeIcon className="icon-copy" icon={faCopy} />
                    </a>
                </div>
            </div>

        );
    }
}

export default Thanks;
