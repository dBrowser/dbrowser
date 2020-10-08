import * as svg from '../../lib/svg'

export default function render () {
  return svg.render(`
    <svg class="icon search" width="173px" height="172px" viewBox="0 0 173 172" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="search" transform="translate(14.000000, 14.000000)">
          <circle id="magnifier" stroke="#000000" stroke-width="27" cx="58.5" cy="58.5" r="58.5"/>
          <path d="M99.309181,117.217671 C99.6828879,117.712275 100.095141,118.187025 100.545942,118.637825 L135.194174,153.286057 C140.466252,158.558135 149.013979,158.558135 154.286057,153.286057 C159.558135,148.013979 159.558135,139.466252 154.286057,134.194174 L119.637825,99.5459415 C119.123165,99.0312818 118.577289,98.5668631 118.006293,98.1526854 C113.021952,105.617747 106.670237,112.092087 99.309181,117.217671 L99.309181,117.217671 Z" id="handle" fill="#000000"/>
        </g>
      </g>
    </svg>
  `)
}
