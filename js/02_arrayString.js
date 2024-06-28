
//N1.

// function countSpaces(str) 
// {
//     let spaceCount = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === ' ') {
//         spaceCount++;
//       }
//     }
//     return spaceCount;
// }


// let text = prompt("Enter text");
// let count = countSpaces(text);
// alert(count);

//N2.

// let text = prompt("Enter text");
// function upperLetter(txt)
// {
//     let newText=txt[0].toUpperCase() + txt.slice(1);
//     return newText;
// }
// let UpperText = upperLetter(text);
// alert(UpperText);

//N3.

// let text = prompt("Enter text");
// function countWords(str) 
// {
//     if (str.trim().length === 0) 
//     {
//         return 0; // Якщо рядок порожній або складається лише з пробілів, повертаємо 0
//     }
    
//     // Розділяємо рядок за допомогою пробілів та фільтруємо порожні елементи
//     let words = str.trim().split(/\s+/);
//     return words.length;
// }
// let newText = countWords(text);
// alert(newText);

