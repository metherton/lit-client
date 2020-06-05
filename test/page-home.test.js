import { html, fixture, expect } from '@open-wc/testing';

import { PageHome } from '../src/PageHome.js';

describe('PageHome', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <page-home></page-home>
    `);
  });

//  it('renders a h1', () => {
//    const h1 = element.shadowRoot.querySelector('h1');
//    expect(h1).to.exist;
//    expect(h1.textContent).to.equal('My app');
//  });

  it('should navigate to Search Family Trees', async () => {
    element.__onNavClicked({currentTarget: {id: 'familyTrees'}});

    element.dispatchEvent(new CustomEvent("event-fired", { detail: 1 }));

    await expect(element).shadowDom.to.be.accessible();
  });
});
