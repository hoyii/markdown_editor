import mitt from 'mitt';
import type Events from '../types/mitt';

const $bus = mitt<Events>();
export default $bus;
