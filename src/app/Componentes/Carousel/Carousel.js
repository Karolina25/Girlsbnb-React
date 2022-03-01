export const functionSlide =(elements, countShow, startIndex) => {
    let endIndex = startIndex + countShow;
    let showElements = elements.slice(startIndex,endIndex);
    let i = 0;
    while (showElements.length < countShow ){
      showElements.push(elements[i]);
      i++;
    } 
    return showElements
  }