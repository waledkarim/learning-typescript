function textOrNumOrBool(value) {
    if (typeof value === "string") {
        console.log("String!");
    }
    else if (typeof value === "number") {
        console.log("Number");
    }
    else {
        console.log("Bool!!");
    }
}
textOrNumOrBool(true);
