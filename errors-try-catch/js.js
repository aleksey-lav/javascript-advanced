let json = '{"id": 2}';



try {
    let user = JSON.parse(json);
    console.log(user);

    if (!user.name){
        throw new Error("In this data no name")
    }
}catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`you've got error - ${error.name}`)
}finally {
    console.log('I will always fulfill')
}

console.log('Hello, man. My program is still running');