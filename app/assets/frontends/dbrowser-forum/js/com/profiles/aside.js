import { ProfileHeader } from './header.js'
import asideCSS from '../../../css/com/profiles/aside.css.js'

export class ProfileAside extends ProfileHeader {
  static get styles () {
    return asideCSS
  }
}

customElements.define('dbrowser-profile-aside', ProfileAside)
