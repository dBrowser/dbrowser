import {css} from '../../vendor/lit-element/lit-element.js'

const cssStr = css`
.spinner,
.close-btn,
.search {
  position: absolute;
}

input.search {
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  padding-left: 47px;
  border-radius: 4px;
}

input.search:invalid + .close-btn {
  opacity: 0;
}

input:focus {
  box-shadow: none;
}

.search-container > i.fa-search {
  position: absolute;
  font-size: 16px;
  left: 17px;
  top: 11px;
  color: rgba(0,0,0,0.4);
}
`
export default cssStr
