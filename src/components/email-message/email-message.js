import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './email-message.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

class EmailMessage extends Component {

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

    getTitle = (route) => {
        switch (route) {
            case '/thankyou':
                return config.text.thankYouTitle ?? 'Thank You';
            case '/faq':
                return config.text.faqTitle ?? 'FAQ';
            case '/':
            default:
                return config.text.formTitle ?? 'Referral App';
        }
    };

    handleScreen = () => {
        this.props.update('EmailMessage');
    }

    render() {
        const { opened } = this.state;
        const body = this.renderBody();


        return (
            <div className="email-message-screen">
                <div className="email-message-info mt-3 pt-3">
                    <div id="emailHeaderContainer" className="email-header-container">
                        <h1
                            className="mx-auto mb-3 email-message-header">
                            Get $X for every friend you refer
                </h1>
                        <h2
                            id="emailMessageSubHeader" className="email-message-sub-header mx-auto px-3 mt-2">
                            Your friends get $10 and you get $X after their first purchase of $10+
                </h2>
                    </div>
                </div>
                <div className="email-message-fields-info">
                    <div className="msg-section mt-3 mb-3">
                        <a className="msg-section-link">
                            <span
                                id="emailLinkTab"
                            >
                                Email
                                    </span>
                        </a>
                        <a className="msg-section-link">
                            <span
                            >
                                Messenger
                                    </span>
                        </a>
                        <a className="msg-section-link">
                            <span
                                id="emailLinkTabFacebook"
                            >
                                Facebook
                                    </span>
                        </a>
                    </div>
                    <div>
                        <input
                            id="toMailMessageEmailPlaceholder"
                            className="w-75 mt-0 email-header-input mt-2 mb-2 form-control"
                            name="email"
                            autoComplete="off"
                            placeholder="temp@gmail.com" type="email" />

                        <input
                            id="emailMessageEmailPlaceholder"
                            className="w-75 mt-0 email-header-input mt-2 mb-2 form-control"
                            name="email"
                            autoComplete="off"
                            placeholder="Enter Email.." type="email" />
                    </div>

                    <div
                        id="emailLongMsg" className="w-75 email-message-textarea">
                        Hey, check out [COMPANY NAME]! I love their products and I think you will too. I’m giving you $X to spend. You can thank me later :)
                            </div>
                    <div className="chkbox ml-5">
                        <div className="reminder">
                            <input checked onChange={() => { }} className="mr-1" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                            <label>
                                <span
                                >
                                    Send my friend a reminder in 3 days
                                        </span>
                            </label>
                            <br></br>
                        </div>
                        <div className="sign-up">
                            <input checked onChange={() => { }} className="mr-1" type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                            <label >
                                <span id="emailSignUpLabel"
                                    className="signup-label">
                                    Sign up for our email
                                        </span></label><br></br>
                        </div>
                    </div>
                </div>
                <div className="submit-msg-email mt-2 pt-2 mb-4">
                    <Button

                        id="emailGateEmailButton"
                        className="w-75"
                        onClick={this.handleScreen}
                    >
                        <span
                            id="emailGateEmailButtonText"
                        >
                            Start Sharing
              </span>
                    </Button>
                </div>
                <div className="d-flex mobile-row-column mx-auto align-items-center w-100 mb-1">
                    <div id="linkTextShare"

                        className="link-share-text text-nowrap mr-1 w-50" >
                        And share your link wherever:
            </div>
                    <input onChange={() => { }} className="link-text pl-sm-2 w-50 form-control" name="trackable_link" readnly="true" type="text" value="http://3.109.32.159:3000/zzzy" />
                    <a className="email-msg-copy d-flex-not-important justify-content-center align-items-center my-auto overlap-icon" data-fbuy-builder-tag="Button">
                        <FontAwesomeIcon className="icon-copy" icon={faCopy} />
                    </a>
                </div>
            </div>

        );
    }
}

export default EmailMessage;
