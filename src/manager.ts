//your code goes here!

// These import statements are suggestions on how to get your three main libraries into this code.
// You'll need to create each of these libraries.
import {Members} from './members';
import {Gatherings} from './gatherings';
import {Organizations} from './organizations';

export class GatheringManager {
    private members:[Members];
    private gatherings:[Gatherings];
    private organizations:[Organizations];

    constructor() {
        this.members;
        this.gatherings;
        this.organizations;
    }

    addMember(name: string, email: string) {
        this.members.push(new Members(name, email));

    }

    addGathering(title: string, location: string, date: string) {
        this.gatherings.push(new Gatherings(title, location, date));
    }

    addOrganization(title: string) {
        this.organizations.push(new Organizations(title));
    }

    addMemberToGathering(name: string, gatheringTitle: string) {
        let gath:Gatherings;
        let addMem:Members;


            for(let i=0; i<this.members.length; i++){
                if(Members[i].name == name){
                    addMem = Members[i];

                }


            } 
            for(let i=0; i<this.gatherings.length; i++){
                if (Gatherings[i].title == gatheringTitle){
                    gath = Gatherings[i];
                }
            } 
            
            gath.addMember(addMem);

    }

    addGatheringToOrganization(gatheringTitle: string, organizationTitle: string) {
        let gath:Gatherings;
        let org:Organizations;


            for(let i=0; i<this.organizations.length; i++){
                if(Organizations[i].name == organizationTitle){
                    org = Organizations[i];

                }


            } 
            for(let i=0; i<this.gatherings.length; i++){
                if (Gatherings[i].title == gatheringTitle){
                    gath = Gatherings[i];
                }
            } 
            
           org.addGathering(gath);


    }

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

    getMembers(gatheringTitle: string): string[] {
        let gath:Gatherings;

        for(let i=0; i<this.gatherings.length; i++){
            if (Gatherings[i].title == gatheringTitle){
                gath = Gatherings[i];
            }
        } 

        
        return gath.viewMembers();
    }

    findMemberNames(query: string): string[] {
        let arr:string[];
        for(let i=0; i<this.members.length; i++){
            if (this.members[i].getName == query){
                arr.push(query);
            }
        }
        return arr;
    }

    findGatheringNames(query: string): string[] {
        let arr:string[];
        for(let i=0; i<this.gatherings.length; i++){
            if (this.gatherings[i].getTitle == query){
                arr.push(query);
            }
        }
        return arr;

        
    }

    findOrganizationNames(query: string): string[] {
        let arr:string[];
        for(let i=0; i<this.organizations.length; i++){
            if (this.organizations[i].getTitle == query){
                arr.push(query);
            }
        }
        return arr;
    }
}
