"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatheringManager = void 0;
var members_1 = require("./members");
var gatherings_1 = require("./gatherings");
var organizations_1 = require("./organizations");
var GatheringManager = (function () {
    function GatheringManager() {
        this.members = [];
        this.gatherings = [];
        this.organizations = [];
    }
    GatheringManager.prototype.addMember = function (name, email) {
        this.members.push(new members_1.Members(name, email));
    };
    GatheringManager.prototype.addGathering = function (title, location, date) {
        this.gatherings.push(new gatherings_1.Gatherings(title, location, date));
    };
    GatheringManager.prototype.addOrganization = function (title) {
        this.organizations.push(new organizations_1.Organizations(title));
    };
    GatheringManager.prototype.addMemberToGathering = function (name, gatheringTitle) {
        var gath;
        var addMem;
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i].getName == name) {
                addMem = this.members[i];
            }
        }
        for (var i = 0; i < this.gatherings.length; i++) {
            if (this.gatherings[i].getTitle == gatheringTitle) {
                gath = this.gatherings[i];
            }
        }
        gath.addMember(addMem);
    };
    GatheringManager.prototype.addGatheringToOrganization = function (gatheringTitle, organizationTitle) {
        var gath;
        var org;
        for (var i = 0; i < this.organizations.length; i++) {
            if (this.organizations[i].getTitle == organizationTitle) {
                org = this.organizations[i];
            }
        }
        for (var i = 0; i < this.gatherings.length; i++) {
            if (this.gatherings[i].getTitle == gatheringTitle) {
                gath = this.gatherings[i];
            }
        }
        org.addGathering(gath);
    };
    GatheringManager.prototype.modifyGathering = function (title, newTitle, newDate) {
        for (var i = 0; i < this.gatherings.length; i++) {
            if (this.gatherings[i].getTitle == title) {
                this.gatherings[i].setTitle = newTitle;
                if (newDate) {
                    this.gatherings[i].setDate = newDate;
                }
            }
        }
    };
    GatheringManager.prototype.getMembers = function (gatheringTitle) {
        var gath;
        for (var i = 0; i < this.gatherings.length; i++) {
            if (this.gatherings[i].getTitle == gatheringTitle) {
                gath = this.gatherings[i];
            }
        }
        return gath.viewMembers();
    };
    GatheringManager.prototype.findMemberNames = function (query) {
        var arr = [];
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i].getName == query) {
                arr.push(query);
            }
        }
        return arr;
    };
    GatheringManager.prototype.findGatheringNames = function (query) {
        var arr = [];
        for (var i = 0; i < this.gatherings.length; i++) {
            if (this.gatherings[i].getTitle == query) {
                arr.push(query);
            }
        }
        return arr;
    };
    GatheringManager.prototype.findOrganizationNames = function (query) {
        var arr = [];
        for (var i = 0; i < this.organizations.length; i++) {
            if (this.organizations[i].getTitle == query) {
                arr.push(query);
            }
        }
        return arr;
    };
    return GatheringManager;
}());
exports.GatheringManager = GatheringManager;
//# sourceMappingURL=manager.js.map