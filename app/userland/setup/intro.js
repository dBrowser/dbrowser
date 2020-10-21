customElements.define('intro-view', class extends HTMLElement {
  constructor () {
    super()
    let shadow = this.attachShadow({mode: 'open'})
    this.render(shadow)
    shadow.querySelector('a').addEventListener('click', e => {
      this.setAttribute('fadeout', true)
      setTimeout(() => {
        this.dispatchEvent(new CustomEvent('next', {bubbles: true, composed: true}))
      }, 500)
    })
  }

  render (shadow) {
    shadow.innerHTML = `
<div id="custumlogo">
<img src="https://peepsx.com/assets/img/logo/hd-white-logo.png" alt="logo">
</div>
<h1><span>Welcome</span> <span>to</span> <span>DBrowser</span></h1>
<a>Dive Into The dWeb &gt;</a>
<style>
  :host {
    -webkit-app-region: drag;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: #334;
    color: #fff;
    opacity: 1;
    transition: opacity 0.5s;
  }
  :host([fadeout]) {
    opacity: 0;
  }
  h1 {
    position: fixed;
    left: 0;
    top: 325px;
    width: 100%;
    text-align: center;
  }
  h1 span {
    opacity: 0;
    animation: fade-in 2s 1;
    animation-fill-mode: forwards;
    animation-timing-function: cubic;
  }
  h1 span:nth-child(1) {
    animation-delay: 2s;
    font-weight: normal;
    color: #bbf;
  }
  h1 span:nth-child(2) {
    animation-delay: 2.6s;
    font-weight: normal;
    color: #bbf;
  }
  h1 span:nth-child(3) {
    animation-delay: 3.2s;
    color: #eef;
    text-shadow: 0 0 3px #99ff;
  }
  a {
    position: fixed;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 21px;
    font-weight: 200;
    color: #dfdfff;
    cursor: pointer;
    opacity: 0;
    animation: fade-in 2s 1;
    animation-fill-mode: forwards;
    animation-timing-function: cubic;
    animation-delay: 3.8s;
    -webkit-app-region: no-drag;
  }
  a:hover {
    text-decoration: underline;
  }
  #custumlogo {
    --fg-color: #fff;

    position: fixed;
    left: 40%;
    top: 27%;
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
    /* border: 1px dashed gray; */
    background: #334;
  }
  #custumlogo img {
    max-width: 120px;
    max-height: 120px;
  }
  #logo {
    --fg-color: #fff;
    --ring-size: 200px;
    --ring-width: 5px;
    --ring-size-diff: 5px;
    --nub-size: 50px;

    position: fixed;
    left: 50%;
    top: 35px;
    transform: translateX(-50%);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    /* border: 1px dashed gray; */
    background: #334;
  }
  .nub {
    position: absolute;
    background: var(--fg-color);
    width: var(--nub-size);
    height: var(--nub-size);
    border-top-right-radius: 50%;
    clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0% 0%);
    left: calc(150px - var(--nub-size) / 2);
    top: calc(150px - var(--nub-size) / 2);
    transform: scale(0.0) rotate(0deg) translate(calc(var(--ring-size) / 3), calc(var(--ring-size) / -3));
    animation: nub-rotate 2.5s 1;
    animation-fill-mode: forwards;
    animation-timing-function: cubic;
    animation-delay: 1s;
  }
  .ring {
    position: absolute;
    border-radius: 50%;
    border: var(--ring-width) solid var(--fg-color);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.0);
    animation: ring-grow 2s 1;
    animation-fill-mode: forwards;
    animation-timing-function: cubic;
  }
  #ring1 {
    width: calc(var(--ring-size) - calc(var(--ring-size-diff) * 5));
    height: calc(var(--ring-size) - calc(var(--ring-size-diff) * 5));
    animation-delay: 1s;
  }
  #ring2 {
    width: calc(var(--ring-size) - calc(var(--ring-size-diff) * 4));
    height: calc(var(--ring-size) - calc(var(--ring-size-diff) * 4));
    animation-delay: 0.8s;
  }
  #ring3 {
    width: calc(var(--ring-size) - calc(var(--ring-size-diff) * 3));
    height: calc(var(--ring-size) - calc(var(--ring-size-diff) * 3));
    animation-delay: 0.6s;
  }
  #ring4 {
    width: calc(var(--ring-size) - calc(var(--ring-size-diff) * 2));
    height: calc(var(--ring-size) - calc(var(--ring-size-diff) * 2));
    animation-delay: 0.4s;
  }
  #ring5 {
    width: calc(var(--ring-size) - calc(var(--ring-size-diff) * 1));
    height: calc(var(--ring-size) - calc(var(--ring-size-diff) * 1));
    animation-delay: 0.2s;
  }
  #ring6 {
    width: calc(var(--ring-size) - calc(var(--ring-size-diff) * 0));
    height: calc(var(--ring-size) - calc(var(--ring-size-diff) * 0));
    animation-delay: 0.0s;
  }
  @keyframes ring-grow {
    0% {
      border-color: #33f;
      transform: translate(-50%, -50%) scale(0.0);
    }
    100% {
      border-color: var(--fg-color);
      transform: translate(-50%, -50%) scale(1.0);
    }
  }
  @keyframes nub-rotate {
    0% {
      transform: rotate(0deg) translate(calc(var(--ring-size) / 3), calc(var(--ring-size) / -3)) scale(0.0);
    }
    100% {
      transform: rotate(360deg) translate(calc(var(--ring-size) / 3), calc(var(--ring-size) / -3)) scale(1.0);
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
    `
  }
})