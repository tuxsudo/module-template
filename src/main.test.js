import test from 'tape';
import {truthBomb} from './main';


test('module template', (t) => {
    t.ok(truthBomb(), 'it is ready');
    t.end();
});
