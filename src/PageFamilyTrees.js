import { LitElement, html, css } from 'lit-element';


export class PageFamilyTrees extends LitElement {

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        margin: 0 auto;
      }

      article {
        padding: 1% 1% 1% 2%;
      }

      section {
        margin-left: 20px;
      }


    `;
  }

  static get properties() {
    return {
      firstName: {type: String},
      surname: {type: String},
    };
  }

  constructor() {
    super();
    this.firstName = '';
    this.surname = '';
  }

  updateFirstName(e) {
    this.firstName = e.target.value;
  }

  updateSurname(e) {
    this.surname = e.target.value;
  }

  handleClick(e) {
    const request = 'http://www.martinetherton.com:8080/gedcom/' + e.currentTarget.id;
    const list = this.shadowRoot.getElementById('list');
    const london1 = this.shadowRoot.getElementById('london1');
    london1.disabled = true;
    const london2 = this.shadowRoot.getElementById('london2');
    london2.disabled = true;
    const sussex1 = this.shadowRoot.getElementById('sussex1');
    sussex1.disabled = true;
    const sussex2 = this.shadowRoot.getElementById('sussex2');
    sussex2.disabled = true;
    const usa1 = this.shadowRoot.getElementById('usa1');
    usa1.disabled = true;
    const progressBar = this.shadowRoot.getElementById('progress');
    list.disabled = true;
    progressBar.open();
    fetch(request)
      .then(response => response.json())
      .then((response) => {
        progressBar.close();
     //   this.persons = response[0];
        store.dispatch({type: 'ADD', data: response[0]});
        let event = new CustomEvent('show-persons', {
          detail: {}
        });
        this.dispatchEvent(event);
      });
  }

  render() {
    return html`
    etherton family trees
    `;
  }

}

customElements.define('page-family-trees', PageFamilyTrees);
