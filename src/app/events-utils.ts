import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'ALQUILER SOROZO - AGR0240',
    start: TODAY_STR,
    end: new Date('2023-12-5').toISOString().replace(/T.*$/, ''),
    color: 'red',
  },
  {
    id: createEventId(),
    title: 'ALQUILER SARAZA - AGR0367',
    start: new Date('2023-11-30').toISOString().replace(/T.*$/, ''),
    end: new Date('2023-12-03').toISOString().replace(/T.*$/, ''),
    color: 'green',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
