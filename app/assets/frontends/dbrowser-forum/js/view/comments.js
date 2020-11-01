import { LitElement, html } from '../../vendor/lit-element/lit-element.js'
import '../com/comments/feed.js'
import '../com/about.js'

export class CommentsView extends LitElement {
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
    // Array.from(this.querySelectorAll('[loadable]'), el => el.load())
  }

  render () {
    return html`
      <div class="layout right-col">
        <main>
          <nav class="pills">
            <a href="/" title="Posts">Posts</a>
            <a class="selected" href="/comments" title="Comments">Comments</a>
            <a href="/users" title="Users">Users</a>
          </nav>
          <dbrowser-comments-feed loadable .user=${this.user}></dbrowser-comments-feed>
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

customElements.define('dbrowser-comments-view', CommentsView)
