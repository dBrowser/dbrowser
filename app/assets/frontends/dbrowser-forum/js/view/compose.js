import { LitElement, html } from '../../vendor/lit-element/lit-element.js'
import '../com/posts/composer.js'
import '../com/about.js'

export class ComposeView extends LitElement {
  static get properties () {
    return {
      user: {type: Object}
    }
  }
 
  createRenderRoot () {
    return this // no shadow dom
  }

  constructor () {
    super()
    this.user = undefined
  }

  async load () {
    await this.requestUpdate()
    Array.from(this.querySelectorAll('[loadable]'), el => el.load())
  }

  render () {
    if (!this.user) return html``
    return html`
      <div class="layout right-col">
        <main>
          <dbrowser-post-composer loadable></dbrowser-post-composer>
        </main>
        <nav>
          <dbrowser-about loadable></dbrowser-about>
        </nav>
      </div>
    `
  }

  // events
  // =

}

customElements.define('dbrowser-compose-view', ComposeView)
