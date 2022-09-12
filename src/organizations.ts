import {Members} from './members';
import {Gatherings} from './gatherings';

export class Organizations{

    title:string;
    private members:[Members];
    private gatherings:[Gatherings];


    constructor(title:string) {
        this.title= title;
        this.members;
        this.gatherings;

    }

    public get getTitle(){
        return this.title;
    }

    public addMember(member:Members){
        this.members.push(member);
    }
    
    public addGathering(gathering:Gatherings){
        this.gatherings.push(gathering);
    }
}