/*
Chris Adamson
CSCI 4602
9-19-22
*/

export class Members{

private email:string;
private name:string;


constructor(name: string, email: string){
this.email = email;
this.name = name;

}

public get getName() {
    return this.name;
}

public get getEmail() {
    return this.email;
}

public set setName(name:string){
    this.name = name;
}

public set setEmail(email:string){
    this.email = email;
}


}


