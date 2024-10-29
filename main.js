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

const prefersDarkColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
const prefersReducedTransparency = window.matchMedia('(prefers-reduced-transparency: reduce)').matches;

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
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer" target="_blank" rel="noopener noreferrer">Pointer</a>: <strong>Fine: ${pointerFine ? '✓' : '✗'}</strong> / <strong>Coarse: ${pointerCoarse ? '✓' : '✗'}</strong> / <strong>None: ${pointerNone ? '✓' : '✗'}</strong></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover" target="_blank" rel="noopener noreferrer">Hover</a>: <strong>Hover: ${hoverHover ? '✓' : '✗'}</strong> / <strong>None ${hoverNone ? '✓' : '✗'}</strong></li>
    <li class="spaced">&nbsp;</li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" target="_blank" rel="noopener noreferrer">Prefers Color Scheme</a>: <strong>light ${!prefersDarkColorScheme ? '✓' : '✗'} / dark ${prefersDarkColorScheme ? '✓' : '✗'}</strong></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast" target="_blank" rel="noopener noreferrer">Prefers High Contrast</a>: <strong>${prefersHighContrast ? '✓' : '✗'}</strong></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion" target="_blank" rel="noopener noreferrer">Prefers Reduced Motion</a>: <strong>${prefersReducedMotion ? '✓' : '✗'}</strong></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency" target="_blank" rel="noopener noreferrer">Prefers Reduced Transparency</a>: <strong>${prefersReducedTransparency ? '✓' : '✗'}</strong></li>
  </ul>
`;

document.querySelector('#app').innerHTML = buildContent();

window.addEventListener('resize', () => {
  document.querySelector('#app').innerHTML = buildContent();
});
