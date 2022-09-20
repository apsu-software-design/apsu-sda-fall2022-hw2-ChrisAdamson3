/*
Chris Adamson
CSCI 4602
9-19-22
*/

import {Members} from './members';
import {Gatherings} from './gatherings';

export class Organizations{

    title:string;
    private members:Members[];
    private gatherings:Gatherings[];


    constructor(title:string) {
        this.title= title;
        this.members=[];
        this.gatherings =[];

    }

    public get getTitle(){
        return this.title;
    }
//Mehtod to add members to an organization
    public addMember(member:Members){
        this.members.push(member);
    }
//Mehtod to add a gathering to an organization
    public addGathering(gathering:Gatherings){
        this.gatherings.push(gathering);
    }
}