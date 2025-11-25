function countCategories(categories) {
  const counts = categories.reduce((accumulator, category) => {
    accumulator[category] = (accumulator[category] || 0) + 1;
    return accumulator;
  }, {});

  return counts;
}

function processCategories(categories) {
  const counts = countCategories(categories);

  const sortedCategories = Object.entries(counts)
    .sort(([, countA], [, countB]) => countB - countA); 
    
  return sortedCategories; 
}

const productCategories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(productCategories));
console.log(processCategories(productCategories));
