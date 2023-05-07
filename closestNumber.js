function closestNumbers(arr) {
           arr.sort(function(a, b) {
          return a - b;
        });
      
        let minDiff = Infinity;
        let updatedArr = [];
      
        for (let i = 1; i < arr.length; i++) {
          let diff = arr[i] - arr[i-1];
          if (diff < minDiff) {
            minDiff = diff;
            updatedArr = [arr[i-1], arr[i]];
          } else if (diff === minDiff) {
            updatedArr.push(arr[i-1], arr[i]);
          }
        }
      
        return updatedArr;
      
}

closestNumbers([-20,-3916237,-357920,-3620601,7374819,-7330761,30,6246457,-6461594,266854])
