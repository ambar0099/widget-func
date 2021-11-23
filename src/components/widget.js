import React, { Component } from 'react';
import './widget.scss';
import { Modal } from 'react-bootstrap';
import "bootstrap/dist/js/bootstrap.min.js";
class Widget extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      showDialog: false,
      screenNo: 0
    }
  }
  src = `http://139.59.37.133:3000/welcome/1224`;

  handleToggleOpen = () => {
    // EmbeddableWidget.mount({
    //   bodyText: 'Body',
    //   type: 'selfPopup',
    //   id: 'embed'
    // });
    this.setState((prev) => {
      return {
        screenNo: 0,
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

  handleScreenUpdate = (screen) => {
    this.forceUpdate();
    this.setState((prev) => {
      return {
        screenNo: screen
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

  ScreenUpdate(screen) {
    switch (screen) {
      case 'EmailGate':
        this.handleScreenUpdate(1);
        break;
      case 'EmailMessage':
        this.handleScreenUpdate(2);
        break;
      case 'Thanks':
        this.handleScreenUpdate(0);
        break;
    }
  }

  render() {
    const { opened } = this.state;
    const body = this.renderBody();

    return (
      <div>
        {this.props.type === 'embed' &&
          <iframe src={this.src} className="container" style={{ height: '800px' }}></iframe>
        }
        {this.props.type === 'clientPopup' || opened &&
          <Modal.Dialog size="lg">
            <Modal.Body>
              <iframe src={this.src} className="container" style={{ height: '800px' }}></iframe>
            </Modal.Body>
          </Modal.Dialog>
        }
        {this.props.type === 'popup' &&
         <div className="docked-widget">
          {body}
        </div>}
      </div>
    );
  }
}

export default Widget;