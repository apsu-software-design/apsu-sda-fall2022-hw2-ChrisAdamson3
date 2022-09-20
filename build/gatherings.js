"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gatherings = void 0;
var Gatherings = (function () {
    function Gatherings(title, location, date) {
        this.title = title;
        this.location = location;
        this.date = date;
        this.members = [];
    }
    Gatherings.prototype.addMember = function (member) {
        this.members.push(member);
    };
    Object.defineProperty(Gatherings.prototype, "getTitle", {
        get: function () {
            return this.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gatherings.prototype, "getLocation", {
        get: function () {
            return this.location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gatherings.prototype, "getDate", {
        get: function () {
            return this.date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gatherings.prototype, "setTitle", {
        set: function (title) {
            this.title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gatherings.prototype, "setLocation", {
        set: function (location) {
            this.location = location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gatherings.prototype, "setDate", {
        set: function (date) {
            this.date = date;
        },
        enumerable: false,
        configurable: true
    });
    Gatherings.prototype.viewMembers = function () {
        var arr = [];
        var mem;
        for (var i = 0; i < this.members.length; i++) {
            mem = this.members[i].getName;
            arr.push(mem);
        }
        return arr;
    };
    return Gatherings;
}());
exports.Gatherings = Gatherings;
//# sourceMappingURL=gatherings.js.map