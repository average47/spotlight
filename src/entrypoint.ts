const collections:HTMLElement[] = Array.from(document.querySelectorAll('[data-component="collection"]'));
for (const collection of collections) {
  const id = parseInt(collection.dataset.id, 10);

  customElements.define(`spotlight-${id}`,
    class extends HTMLElement {
      tempate: any;
      constructor() {
        super();
        this.tempate = document.querySelector(`[data-id="${this.nodeName.split('-')[1]}"]`)
        this.attachShadow({ mode: 'open' });
      }
      connectedCallback() {
        const { shadowRoot } = this;
        const node = document.importNode(this.tempate.content, true);
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', '/dist/spotlight.css');
        shadowRoot.appendChild(node);
        shadowRoot.appendChild(linkElem);
      }
      disconnectedCallback() {
        console.log('disconnected callback');
      }
      componentWillMount() {
        console.log('component will mount');
      }
      componentDidMount() {
        console.log('component did mount');
      }
      componentWillUnmount() {
        console.log('component will unmount');
      }
      componentDidUnmount() {
        console.log('component did unmount');
      }
    }
  );
}
