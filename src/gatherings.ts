/*
Chris Adamson
CSCI 4602
9-19-22
*/


import {Members} from './members';


export class Gatherings{

  private  title:string;
   private location:string;
   private date:string;
   private members:Members[];

    constructor(
        title:string, location:string, date:string
    ) {
        this.title = title;
        this.location = location;
        this.date = date;
        this.members = [];
     

    }
//Method to add a member to a specific gathering
    public addMember(member:Members) {
        this.members.push(member);
    }

    public get getTitle(){
        return this.title;
    }
    public get getLocation(){
        return this.location;
    }
    public get getDate(){
        return this.date;
    }

    public set setTitle(title:string){
        this.title = title;
    }
    public set setLocation(location:string){
        this.location = location;
    }
    public set setDate(date:string){
        this.date = date;
    }
 //Method to see a list of members for a gathering
    public viewMembers(): string[]{
        let arr :string[] = [];
        let mem:string;
        for(let i=0; i<this.members.length; i++){
           mem = this.members[i].getName;
           arr.push(mem); 
        }
        
        return arr;
    }

}