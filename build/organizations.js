"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organizations = void 0;
var Organizations = (function () {
    function Organizations(title) {
        this.title = title;
        this.members = [];
        this.gatherings = [];
    }
    Object.defineProperty(Organizations.prototype, "getTitle", {
        get: function () {
            return this.title;
        },
        enumerable: false,
        configurable: true
    });
    Organizations.prototype.addMember = function (member) {
        this.members.push(member);
    };
    Organizations.prototype.addGathering = function (gathering) {
        this.gatherings.push(gathering);
    };
    return Organizations;
}());
exports.Organizations = Organizations;
//# sourceMappingURL=organizations.js.map