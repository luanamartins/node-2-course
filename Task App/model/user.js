const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
});