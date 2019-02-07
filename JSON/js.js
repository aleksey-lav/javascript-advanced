// JASON - key/value
// have method stringify - send object to server

let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font:{
        size: '16px',
        color: '#230fff'
    }
};
 console.log(JSON.stringify(options));
 console.log("----------------------------")
 console.log(JSON.parse(JSON.stringify(options)));
