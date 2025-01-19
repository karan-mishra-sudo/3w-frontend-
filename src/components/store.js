let store={
    currentUserinfo:null
}
function getCurrentUserinfo() {
    return store.currentUserinfo;
}
function setCurrentUserinfo(value) {
    store.currentUserinfo=value
    console.log(store.currentUserinfo);
    
}
export {getCurrentUserinfo,setCurrentUserinfo}