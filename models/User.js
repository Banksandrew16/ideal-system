const { Schema, model } = require('mongoose');

// create UserSchema
const UserSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: 'You must create a username',
            trim: true
        },
        email: {
            type: String,
            required: 'You must enter a valid email address',
            unique: true,
            match: /.+\@.+\..+/
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total, friend) => total + friend.length + 1, 0);
});

// create User model using UserSchema
const User = model('User', UserSchema);

// export User model
module.exports = User;