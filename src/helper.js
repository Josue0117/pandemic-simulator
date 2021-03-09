function createGrid( height , width , grid ) {
    for(let i=0; i<height; i++) {
        const row = [];
        for(let j=0; j<width; j++) {
            row.push('y'+i+'x'+j);
        }
        grid.push(row);
    }
}

function updateTableStyle( point , pointType , changeType ) {
    if( changeType === 'add' ) {
        point.setAttribute('class',pointType);
        const style = document.createAttribute('style');
        if( pointType === 'inmune' ) {
            style.value = 'border: solid 1px #00fa0c; background: #05c03d6b;'
        } else {
            style.value = 'border: solid 1px #fa0000; background: #c005056b;'
        }
        point.setAttributeNode(style);
    } else {
        point.setAttribute('class','unselected');
        point.removeAttribute('style');
    }
}

function updateGrid( point , pointType , changeType , grid ) {
    const idX = (point.id).indexOf('x');
    const x = (point.id).substring(idX+1);
    const idY = (point.id).indexOf('y');
    const y = (point.id).substring(idY+1,idX);
    if( changeType === 'add' ) {
        grid[y][x] = pointType;
    } else {
        grid[y][x] = 'y'+y+'x'+x;
    }
}

export default {
    createGrid,
    updateTableStyle,
    updateGrid,
};