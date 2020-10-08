import { BaseFilesView } from './base-files-view.js'
import { html } from '../../../vendor/lit-element/lit-element.js'
import { classMap } from '../../../vendor/lit-element/lit-html/directives/class-map.js'
import { timeDifference } from '../../lib/time.js'
import '../file/file-display.js'
import baseCSS from '../../../css/com/folder/base-files-view.css.js'
import inlineListCSS from '../../../css/com/folder/inline-file-list.css.js'

export class InlineFileList extends BaseFilesView {
  static get styles () {
    return [baseCSS, inlineListCSS]
  }

  renderItem (item) {
    var cls = classMap({
      item: true,
      folder: item.stat.isDirectory(),
      selected: this.selection.includes(item)
    })
    var driveTitle = item.drive.title || 'Untitled'
    return html`
      <div
        class=${cls}
        draggable="true"
        @click=${e => this.onClickItem(e, item)}
        @dblclick=${e => this.onDblClickItem(e, item)}
        @contextmenu=${e => this.onContextMenuItem(e, item)}
        @dragstart=${e => this.onDragstartItem(e, item)}
        @drop=${e => this.onDropItem(e, item)}
        data-url=${item.url}
      >
        <div class="info">
          <div>
            <span class="name">${this.showOrigin ? item.realPath : item.name}</span>
          </div>
          ${this.showOrigin ? html`
            <div>Drive: <a class="author" href=${item.drive.url}>${driveTitle}</a></div>
          ` : ''}
          <div>
            Updated: <span class="date">${timeDifference(item.stat.ctime, true, 'ago')}</span>
          </div>
        </div>
        <div class="content">
          <file-display
            horz
            drive-url=${item.drive.url}
            pathname=${item.realPath}
            .info=${item}
          ></file-display>
        </div>
      </div>
    `
  }
}

customElements.define('inline-file-list', InlineFileList)
