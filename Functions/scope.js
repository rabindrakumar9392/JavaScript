let globalVariable = "Global";

function testScope() {
    let localVariable = "Local";

    console.log(globalVariable);
    console.log(localVariable);
}

testScope();

console.log(globalVariable);