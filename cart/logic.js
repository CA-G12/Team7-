function incLogic(ele,array){
    const ar = [...array];
    const found = ar.find((x) => x.id = ele.id);
    found.amount += 1;
    return ar;
}

function decLogic(ele, array){
    const ar = [...array];
    const found = ar.find((x) => x.id = ele.id);
    found.amount -= 1;
    return ar;
}