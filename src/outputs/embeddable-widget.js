import React from 'react';
import ReactDOM from 'react-dom';
import Widget from '../components/widget';
import '../../vendor/cleanslate.css';

export default class EmbeddableWidget {
  static el;

  static mount({ parentElement = null, ...props } = {}) {
    const component = <Widget {...props} />;

    function doRender() {
      // if (EmbeddableWidget.el) {
      //   throw new Error('EmbeddableWidget is already mounted, unmount first');
      // }
      // const el = document.createElement('div');
      // el.setAttribute('class', 'cleanslate');

      // if (parentElement) {
      //   document.querySelector(parentElement).appendChild(el);
      // } else {
      //   document.body.appendChild(el);
      // }
      // ReactDOM.render(
      //   component,
      //   el,
      // );
      // EmbeddableWidget.el = el;
      const iframe = document.createElement('iframe');
      // IFRAME_URL is the url for the index HTML page of our
      // plain old react/redux webapp
      iframe.src = `http://localhost:3001/welcome/${1224}`;
      iframe.style.width = '100%';
      iframe.style.height = '100em';
      iframe.crossorigin = "anonymous";
      if (component.props.type==='popup') {
        document.querySelector('#' + component.props.id).appendChild(iframe);
        const el = document.createElement('div');
        el.setAttribute('class', 'cleanslate');
        ReactDOM.render(
          component,
          el
        );
      } else if (component.props.type==='selfPopup'){
        const el = document.createElement('div');
        el.setAttribute('class', 'cleanslate');
        ReactDOM.render(
          component,
          el
        );
        document.body.appendChild(el);
      }
      else {
        const el = document.createElement('div');
        el.setAttribute('class', 'cleanslate');
        ReactDOM.render(
          component,
          el
        );
        document.querySelector('#' + component.props.id).appendChild(iframe);
      }
    }
    if (document.readyState === 'complete') {
      doRender();
    } else {
      window.addEventListener('load', () => {
        doRender();
      });
    }

  }

  static unmount() {
    if (!EmbeddableWidget.el) {
      throw new Error('EmbeddableWidget is not mounted, mount first');
    }
    ReactDOM.unmountComponentAtNode(EmbeddableWidget.el);
    EmbeddableWidget.el.parentNode.removeChild(EmbeddableWidget.el);
    EmbeddableWidget.el = null;
  }
}
