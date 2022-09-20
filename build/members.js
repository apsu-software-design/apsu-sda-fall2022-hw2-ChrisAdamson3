"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Members = void 0;
var Members = (function () {
    function Members(name, email) {
        this.email = email;
        this.name = name;
    }
    Object.defineProperty(Members.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Members.prototype, "getEmail", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Members.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Members.prototype, "setEmail", {
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    return Members;
}());
exports.Members = Members;
//# sourceMappingURL=members.js.map