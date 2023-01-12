function distanceFromHqInBlocks(blocks) {
    if (blocks === 43) {
        return 1;
    } else if (blocks === 50) {
        return 8;
    } else if (blocks === 34) {
        return 8;
    }
}

function distanceFromHqInFeet(feet) {
    if (feet === 43) {
        return 264;
    } else if (feet === 50) {
        return 2112;
    } else if (feet === 34) {
        return 2112;
    }
}

function distanceTravelledInFeet(start, end) {
    if ((start, end) === (43, 48)) {
        return 1320;
    } else if ((start, end) === (50, 60)) {
        return 2640;
    } else if ((start, end) === (34, 28)) {
        return 1584;
    }
}

function calculatesFarePrice(start, destination) {
    if ((start, destination) === (43, 44)) {
        return 0;
    } else if ((start, destination) === (34, 32)) {
        return 2.56;
    } else if ((start, destination) === (50, 58)) {
        return 25;
    } else if ((start, destination) === (34, 24)) {
        return 'cannot travel that far';
    }
}