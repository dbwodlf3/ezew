const _context: Context = {
    events: {}
};

export function addEventWatcher(eventId: string, callback: Callback){
    if(_context.events[eventId]) return _context.events[eventId].push(callback);
    else _context.events[eventId] = [];
    return _context.events[eventId].push(callback);
}

export function dispatchEvent(eventId: string, any?: any){
    for(const event of _context.events[eventId]) {
        event(any);
    }
}

export function getEvenets(){
    return _context.events;
}

export default {
    addEventWatcher: addEventWatcher,
    dispatchEvent: dispatchEvent,
    getEvenets: getEvenets
}
