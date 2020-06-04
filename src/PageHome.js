import { LitElement, html, css } from 'lit-element';
import '@material/mwc-list';

export class PageHome extends LitElement {

  constructor() {
    super();
    this.articleDescription = 'Marknesse tulips';
    this.imageLocation = './assets/house.jpeg';
  }

  static get properties() {
    return {
      articleDescription: { type: String },
      imageLocation: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        margin: 0 auto;
        text-align: center;
      }
      .container {
        position: relative;
        max-width: 100%; /* Maximum width */
        margin: 0 auto; /* Center it */
      }

      .container .content {
        position: absolute; /* Position the background text */
        bottom: 50%; /* At the bottom. Use top:0 to append it to the top */
        background: rgb(0, 0, 0); /* Fallback color */
        background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
        color: #f1f1f1; /* Grey text */
        width: 100%; /* Full width */
      }


    `;
  }

  render() {
    return html`
        <section class="container">
          <mwc-list id="list">
            <li>
              <mwc-list-item style="height: 100%;">
                <article class="container">
                  <img src="/assets/house.jpeg" id="tulips" alt="Tulips" style="width:100%;">
                </article>
              </mwc-list-item>
            </li>
            <li>
              <mwc-list-item id="search-family-trees">Search Etherton family trees</mwc-list-item>
            </li>

          </mwc-list>
        </section>
    `;
  }

}

customElements.define('page-home', PageHome);
