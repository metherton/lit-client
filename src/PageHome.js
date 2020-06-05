import { LitElement, html, css } from 'lit-element';
import '@material/mwc-list';

export class PageHome extends LitElement {

  constructor() {
    super();
  }

  static get styles() {
    return css`
      #tulips {
        width: 100%;
      }
    `;
  }

  __onNavClicked(ev) {
    this.dispatchEvent(new CustomEvent('navigate', {detail: 'familyTrees'}));
  }

  render() {
    return html`
        <section>
          <mwc-list>
            <li>
              <mwc-list-item>
                <article>
                  <img src="/assets/house.jpeg" id="tulips" alt="Tulips">
                </article>
              </mwc-list-item>
            </li>
            <li>
              <mwc-list-item @click=${this.__onNavClicked} id="search-family-trees">Search Etherton family trees</mwc-list-item>
            </li>
            <li divider role="separator"></li>
            <li>
              <mwc-list-item>
                <article>
                  <img src="/assets/banner_web.gif" id="goons" alt="Guild of One Name Studies"">
                </main>
              </mwc-list-item>
            </li>
          </mwc-list>
        </section>
    `;
  }

}

customElements.define('page-home', PageHome);
