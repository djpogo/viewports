import '@fontsource/share-tech-mono';
import './style.css';

const smallViewport = document.querySelector('.measure.sv');
const dynamicViewport = document.querySelector('.measure.dv');
const largeViewport = document.querySelector('.measure.lv');

const pointerFine = window.matchMedia('(pointer: fine)').matches;
const pointerCoarse = window.matchMedia('(pointer: coarse)').matches;
const pointerNone = window.matchMedia('(pointer: none)').matches;
const hoverNone = window.matchMedia('(hover: none)').matches;
const hoverHover = window.matchMedia('(hover: hover)').matches;

const buildContent = () => `
  <ul class="ul">
    <li>Viewport: <strong>${window.innerWidth}px&nbsp;&times;&nbsp;${window.innerHeight}px</strong></li>
    <li>Device Pixel Ratio: <strong>${window.devicePixelRatio}</strong> </li>
    <li class="spaced">&nbsp;</li>
    <li>
      Screen Resolution: <strong>${window.screen.width}px&nbsp;&times;&nbsp;${window.screen.height}px</strong><br>
      Screen Resolution available: <strong>${window.screen.availWidth}px&nbsp;&times;&nbsp;${window.screen.availHeight}px</strong>
    </li>
    <li class="spaced">&nbsp;</li>
    <li>100svw&nbsp;&times;&nbsp;100svh: ${window.getComputedStyle(smallViewport).width}&nbsp;&times;&nbsp;${window.getComputedStyle(smallViewport).height}</li>
    <li>100dvw&nbsp;&times;&nbsp;100dvh: ${window.getComputedStyle(dynamicViewport).width}&nbsp;&times;&nbsp;${window.getComputedStyle(dynamicViewport).height}</li>
    <li>100lvw&nbsp;&times;&nbsp;100lvh: ${window.getComputedStyle(largeViewport).width}&nbsp;&times;&nbsp;${window.getComputedStyle(largeViewport).height}</li>
    <li class="spaced">&nbsp;</li>
    <li>Pointer: <strong>Fine: ${pointerFine ? '✓' : '✗'}</strong> / <strong>Coarse: ${pointerCoarse ? '✓' : '✗'}</strong> / <strong>None: ${pointerNone ? '✓' : '✗'}</strong></li>
    <li>Hover: <strong>Hover: ${hoverHover ? '✓' : '✗'}</strong> / <strong>None ${hoverNone ? '✓' : '✗'}</strong></li>
  </ul>
`;

document.querySelector('#app').innerHTML = buildContent();

window.addEventListener('resize', () => {
  document.querySelector('#app').innerHTML = buildContent();
});
