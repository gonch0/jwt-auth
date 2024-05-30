module.exports = class UserDto {
    email;
    id;
    isActivated;
    activationLink;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.activationLink = model.activationLink;
    }
}