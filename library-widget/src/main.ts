import './styles.scss';

import tmpl from './template.html';
import tmpl2 from '../../shared/templates/shared.template.html';

const container = document.querySelector('body');
const template = `
`;

registerCustomElements();

container.innerHTML = tmpl + tmpl2 + template + '' + container.innerHTML;

function registerCustomElements () { }

