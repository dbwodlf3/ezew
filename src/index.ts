const context: Context = {
    events: {}
};

export function addEventWatcher(eventId: string, callback: Callback){
    if(context.events[eventId]) return context.events[eventId].push(callback);
    else context.events[eventId] = [];
    return context.events[eventId].push(callback);
}

export function dispatchEvent(eventId: string, any?: any){
    for(const event of context.events[eventId]) {
        event(any);
    }
}

export function getEvenets(){
    return context.events;
}

export default {
    addEventWatcher: addEventWatcher,
    dispatchEvent: dispatchEvent,
    getEvenets: getEvenets
}
