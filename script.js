function mincost(arr)
{ 
	let totalCost = 0;

    while (arr.length > 1) {
        // Step 1: Sort the array
        arr.sort((a, b) => a - b);  // O(N log N)

        // Step 2: Pick and remove the two smallest ropes
        let first = arr.shift();  // Removes the first element
        let second = arr.shift(); // Removes the second element

        // Step 3: Merge them and update cost
        let cost = first + second;
        totalCost += cost;

        // Step 4: Insert the merged rope back
        arr.push(cost);  
    }

    return totalCost;
  
}

module.exports=mincost;
