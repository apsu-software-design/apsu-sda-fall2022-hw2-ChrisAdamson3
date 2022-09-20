/*
Chris Adamson
CSCI 4602
9-19-22
*/
import {Members} from './members';
import {Gatherings} from './gatherings';
import {Organizations} from './organizations';

export class GatheringManager {
    private members:Members[];
    private gatherings:Gatherings[];
    private organizations:Organizations[];

    constructor() {
        this.members =[];
        this.gatherings=[];
        this.organizations=[];
    }
//Method to add a member to the system
    addMember(name: string, email: string) {
        this.members.push(new Members(name, email));

    }
//Method to add a gathering to the system
    addGathering(title: string, location: string, date: string) {
        this.gatherings.push(new Gatherings(title, location, date));
    }
//Method to add a organization to the system
    addOrganization(title: string) {
        this.organizations.push(new Organizations(title));
    }
//Method to add a memeber to a gathering
    addMemberToGathering(name: string, gatheringTitle: string) {
        let gath:Gatherings;
        let addMem:Members;


            for(let i=0; i<this.members.length; i++){
                if(this.members[i].getName == name){
                    addMem = this.members[i];

                }


            } 
            for(let i=0; i<this.gatherings.length; i++){
                if (this.gatherings[i].getTitle == gatheringTitle){
                    gath = this.gatherings[i];
                }
            } 
            
            gath.addMember(addMem);

    }
//Method to add a gathering to an organization
    addGatheringToOrganization(gatheringTitle: string, organizationTitle: string) {
        let gath:Gatherings;
        let org:Organizations;


            for(let i=0; i<this.organizations.length; i++){
                if(this.organizations[i].getTitle == organizationTitle){
                    org = this.organizations[i];

                }


            } 
            for(let i=0; i<this.gatherings.length; i++){
                if (this.gatherings[i].getTitle == gatheringTitle){
                    gath = this.gatherings[i];
                }
            } 
            
           org.addGathering(gath);


    }
//Method to alter a gathering
    modifyGathering(title: string, newTitle: string, newDate?: string) {
        for(let i=0; i<this.gatherings.length; i++){
            if(this.gatherings[i].getTitle == title){
                this.gatherings[i].setTitle = newTitle;
                if(newDate){
                    this.gatherings[i].setDate = newDate;
                }
            }


        }
    }
//Mehtod to list members for a certain gathering
    getMembers(gatheringTitle: string): string[] {
        let gath:Gatherings;

        for(let i=0; i<this.gatherings.length; i++){
            if (this.gatherings[i].getTitle == gatheringTitle){
                gath = this.gatherings[i];
            }
        } 
        
        
        return gath.viewMembers();
    }
//Method to find a member name
    findMemberNames(query: string): string[] {
        let arr:string[] = [];
        for(let i=0; i<this.members.length; i++){
            if (this.members[i].getName == query){
                arr.push(query);
            }
        }
        return arr;
    }

//Method to find a Gathering name
    findGatheringNames(query: string): string[] {
        let arr:string[]=[];
        for(let i=0; i<this.gatherings.length; i++){
            if (this.gatherings[i].getTitle == query){
                arr.push(query);
            }
        }
        return arr;

        
    }
//Method to find a Organization name
    findOrganizationNames(query: string): string[] {
        let arr:string[]=[];
        for(let i=0; i<this.organizations.length; i++){
            if (this.organizations[i].getTitle == query){
                arr.push(query);
            }
        }
        return arr;
    }
}
