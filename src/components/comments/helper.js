// Just for fun, a way to get a unique photo for each user, since data provides no user id.

function uniqueRandomUserId() {
    const takenNumbers = [];

    function generate() {
        let number = randomNumberBetween(1, 20);
        while (takenNumbers.indexOf(number) !== -1) {
            number = randomNumberBetween(1, 20);
        }

        takenNumbers.push(number);
        return number;
    }

    return generate;
}

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const uniqueRandomProfilePicture = uniqueRandomUserId();
